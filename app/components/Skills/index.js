import React from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import CheckIcon from '@material-ui/icons/Check';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import Axios from 'axios';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createTheme({
    overrides: {
        MuiSvgIcon: {
            root: {
                fill: '#4a4a58 !important'
            },
        }
    }
});



const nodes = [];
class SkillsTreeSelector extends React.Component {
    constructor(props) {
        super(props);
        this.onCheck = this.onCheck.bind(this);
        this.onExpand = this.onExpand.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.filterTree = this.filterTree.bind(this);
        this.filterNodes = this.filterNodes.bind(this);
        this.getNodes = this.getNodes.bind(this);
    }

    state = {
        checked: [],
        expanded: [],
        filterText: '',
        nodesFiltered: nodes,
        nodes:[]
    };

    
    componentDidMount() {

        Axios.post("http://localhost:8888/getSkills")
            .then((response) => {
                // console.log([response.data])
                const data = [response.data];
                this.setState({ nodes: data, nodesFiltered:data })
                return [response.data];
            });
          
    }
    onCheck(checked, targetNode) {
        this.setState({ checked });
        this.props.childToParent(checked);
    }

    onExpand(expanded) {
        this.setState({ expanded });
    }

    onFilterChange(e) {
        this.setState({ filterText: e.target.value }, this.filterTree);
    }

    

    filterTree() {
        // Reset nodes back to unfiltered state
        if (!this.state.filterText) {
            this.setState((prevState) => ({
                nodesFiltered: prevState.nodes,
            }));

            return;
        }

        const nodesFiltered = (prevState) => (
            
            { nodesFiltered: prevState.nodes.reduce(this.filterNodes, []) }
        )

        this.setState(nodesFiltered);
    }


    filterNodes(filtered, node) {
        const { filterText } = this.state;
        const children = (node.children || []).reduce(this.filterNodes, []);

        if (
            // Node's label matches the search string
            node.label.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) > -1 ||
            // Or a children has a matching node
            children.length
        ) {
            filtered.push({ ...node, ...children.length && { children } });
        }

        return filtered;
    }

    getNodes(){
        return this.state.nodes;
    }

    render() {
        const {
            checked,
            expanded,
            filterText,
            nodesFiltered,
            nodes,
        } = this.state;

        return (
            
            <ThemeProvider theme={theme}>
                <div className="filter-container">
                    {/* <input
                        className="filter-text"
                        placeholder="Search..."
                        type="text"
                        value={filterText}
                        onChange={this.onFilterChange}
                    /> */}
                    <CheckboxTree
                        nodes={this.getNodes()}
                        icons={{
                            halfCheck: <CheckBoxOutlineBlankIcon />,
                            check: <CheckIcon />,
                            expandClose: <ChevronRightIcon />,
                            uncheck: <CheckBoxOutlineBlankIcon />,
                            expandOpen: <KeyboardArrowDownIcon />,
                            parentClose: <FolderOutlinedIcon />, 
                            parentOpen: <FolderOpenOutlinedIcon />,
                            leaf: <InsertDriveFileOutlinedIcon />
                        }}
                        checked={this.state.checked}
                        expanded={this.state.expanded}
                        // nodes={nodesFiltered}
                        onCheck={(checked, targetNode) => this.onCheck(checked,targetNode)}
                        onExpand={expanded => this.setState({ expanded })}

                    />
                </div>
            </ThemeProvider>
        );
    }
}

export default SkillsTreeSelector
