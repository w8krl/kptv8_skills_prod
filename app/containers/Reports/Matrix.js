import React, {useState, useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import PropTypes from 'prop-types';

import DashWidgets from './Widgets';

import BasicTableComponent from './Testtable'

// writing-mode: vertical-rl;
// text-orientation: mixed;

const styles = {
  // vertical: {
  //   writingMode: 'vertical-lr',
  //   textOrientation: 'mixed'
  // },
  test: {
    color:"red"
  }
};


function SkillsDashboard(props) {

  // const [loadingHeaders, setLoadingHeaders] = useState(true);
  // const [headers, setHeaders] = useState([]);

  // useEffect(() => {
  //   async function getMatrix() {
  //     await axios
  //       .post("api/getMatrix")
  //       .then((response) => {
  //         setHeaders(response.data);
  //         setLoadingHeaders(false);
  //       });
  //   }
  //   if (loadingHeaders) {
  //     getMatrix();
  //   }
  // }, []);


  const {classes} = props;


  return (
    <div>

      <DashWidgets />
      <BasicTableComponent />

      <h1>Resource Info</h1>
      {/* <ul>
        {actRes.map(
          (i, index) => {
            return <li key={index}>{i.active_status} | {i.count}</li>
          }
        )}
      </ul> */}

      {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
              {headers.map((i, idx) => (

                <TableCell className={classes.vertical} key={idx} component="th" scope="row">
                  {i.tag}
                </TableCell>

              ))}
          </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
      </Table>
    </TableContainer> */}

      {/* {headers.map(
          (i, index) => {
            return <p key={index}>{i.id_domain} </p>
          }
        )} */}
    </div>
  );
}


SkillsDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(SkillsDashboard);
export default SkillsDashboard;