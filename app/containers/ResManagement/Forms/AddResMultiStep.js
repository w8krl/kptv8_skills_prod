import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Axios from 'axios';
import SkillsTreeSelector from 'enl-components/Skills';
import AddSkills from '../AddSkills';
import Typography from '@material-ui/core/Typography';

const theme = createTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiFormControl: {
            // Name of the rule
            root: {
                // Some CSS
                width: '40%',
                paddingRight: '2rem',
                paddingBottom: "1rem"
            },
        },
    },
});


// height: 18rem;
// overflow-y: scroll;
// border: solid 1px #ededed;
// }

const styles = theme => ({
    root: {
        flexGrow: 1,
      },
    button: {
        margin: theme.spacing(1),
        height: "2rem"
    },
    leftButton: {
        position: "absolute",
        bottom: "2rem",
        left: "2rem"
    },
    rightButton: {
        position: "absolute",
        bottom: "2rem",
        right: "2rem"
    }, MuiTextField: {
        marginBottom: 20,
        width: "50%",
        paddingRight: "2rem"
    }, field: {
        padding: theme.spacing(1),
        width: "50%"
    }
});

class MultiStepFrm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            file: '',
            fileName: '',
            formData: {
                name: '',
                email: '',
                title: '',
                pri_contact_no: '',
                sec_contact_no: '',
                contract_type: '',
                country: '',
                region: '',
                comments: '',
                management_co: '',
                co_type: '',
                checkedData:[],
            }

        }
        this.childToParent = this.childToParent.bind(this);
    }



    childToParent(data) {
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                checkedData: data
            }
        }))        
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }))
    }

    fileChange = event => {
        const file = event.target.files[0];
        this.setState({ ['file']: file, ['fileName']: file.name })
    };

    handleSubmit = (e) => {
        e.preventDefault()
        const form_data = new FormData();
        for (var key in this.state.formData) {
            form_data.append(key, this.state.formData[key]);
        }
        form_data.append("file", this.state.file);
        form_data.append("fileName", this.state.fileName);

        Axios.post('http://localhost:8888/newRes', form_data)
            .then((response) => {
                this.props.handleModalSubmit(response);
            })
            .catch(e=> {console.log(e)})
    };


    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }


    previousButton(props) {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <Button
                    className={props.leftButton} color="secondary" variant="outlined"
                    type="button" onClick={this._prev}>
                    Previous
                </Button>
            )
        }
        return null;
    }



    nextButton(props) {
        let currentStep = this.state.currentStep;
        if (currentStep < 4) {
            return (
                <Button
                    className={props.rightButton} color="secondary" variant="outlined"
                    type="button" onClick={this._next}>
                    Next
                </Button>
            )
        }
        return null;
    }

    render() {
        const { classes } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    {/* <h1>New Resource Wizard</h1> */}
                    <p>Step {this.state.currentStep} </p>
                    <form>

                        <Step1
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            name={this.state.formData.name}
                            email={this.state.formData.email}
                            title={this.state.formData.title}
                            pri_contact_no={this.state.formData.pri_contact_no}
                            sec_contact_no={this.state.formData.sec_contact_no}
                            country={this.state.formData.country}
                            region={this.state.formData.region}
                            classes={classes}
                        />
                        <Step2
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            comments={this.state.formData.comments}
                            contract_type={this.state.formData.contract_type}
                            co_type={this.state.formData.co_type}
                            management_co={this.state.formData.management_co}
                        />
                        <Step3
                            currentStep={this.state.currentStep}
                            fileChange={this.fileChange}
                            fileName={this.state.fileName}
                            classes={classes}
                            handleSubmit={this.handleSubmit}
                            childToParent={this.childToParent}
                            checkedData={this.state.formData.checkedData}
                        />
                        <Step4
                            currentStep={this.state.currentStep}
                            fileChange={this.fileChange}
                            fileName={this.state.fileName}
                            classes={classes}
                            handleSubmit={this.handleSubmit}
                        />
                        {this.previousButton(classes)}
                        {this.nextButton(classes)}

                    </form>
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

function Step1(props) {
    if (props.currentStep !== 1) {
        return null
    }

    const { classes } = props;
    return (
        <div className="form-group" style={{ paddingTop: "1rem" }}>
            <TextField label="Full Name" variant="outlined" name="name" value={props.name} onChange={props.handleChange} />
            <TextField label="Email" variant="outlined" placeholder="user@kptv8.com" name="email" value={props.email} onChange={props.handleChange} />
            <TextField label="Title" variant="outlined" name="title" value={props.title} onChange={props.handleChange} />
            <TextField label="Primary Tel." variant="outlined" name="pri_contact_no" value={props.pri_contact_no} onChange={props.handleChange} />
            <TextField label="Secondary Tel." variant="outlined" name="sec_contact_no" value={props.sec_contact_no} onChange={props.handleChange} />
            <TextField label="Country" variant="outlined" name="country" value={props.country} onChange={props.handleChange} />
            <TextField label="Region" variant="outlined" name="region" value={props.region} onChange={props.handleChange} />
        </div>
    );
}

function Step2(props) {
    if (props.currentStep !== 2) {
        return null
    }
    return (
        <div className="form-group">
            <TextField label="Contract Type (options)" variant="outlined" name="contract_type" value={props.contract_type} onChange={props.handleChange} />
            <TextField label="Management Co." variant="outlined" name="management_co" value={props.management_co} onChange={props.handleChange} />
            <TextField label="Company Type" variant="outlined" name="co_type" value={props.co_type} onChange={props.handleChange} />
            <TextField label="Comments" variant="outlined" name="comments" value={props.comments} onChange={props.handleChange} />
        </div>
    );
}

function Step3(props) {
    if (props.currentStep !== 3) {
        return null
    }
    const { classes } = props;
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const skillsSelected = props.checkedData.length;
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={6}>
                    <SkillsTreeSelector childToParent={props.childToParent} />
                </Grid>
                <Grid item xs={6}>
                    {skillsSelected > 0 && <Typography variant="h6">Total SKills Selected: {skillsSelected}</Typography>}
                    <AddSkills checkedData={props.checkedData} />
                </Grid>


            </Grid>

        </React.Fragment>

    );
}


function Step4(props) {
    if (props.currentStep !== 4) {
        return null
    }
    const { classes } = props;
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    return (
        <React.Fragment>
            <Grid container>
                <Grid item md={6} xs={12}>
                    <Button variant="contained" onClick={handleClick} color="default" className={classes.button} startIcon={<CloudUploadIcon />}>Upload CV</Button>
                    <label htmlFor="file">{props.fileName}</label>
                    <input ref={hiddenFileInput} hidden name="file" type="file" onChange={props.fileChange} />

                </Grid>
            </Grid>
            <Button className={classes.rightButton} onClick={props.handleSubmit} variant="contained" color="primary">Submit</Button>
        </React.Fragment>

    );
}



export default withStyles(styles, { withTheme: true })(MultiStepFrm);