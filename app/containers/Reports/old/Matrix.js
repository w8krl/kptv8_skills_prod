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

import SkillsMatrix from './MatrixTable'

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


  return (
    <div>

      <DashWidgets />
      <SkillsMatrix />
    </div>
  );
}


SkillsDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(SkillsDashboard);
export default SkillsDashboard;