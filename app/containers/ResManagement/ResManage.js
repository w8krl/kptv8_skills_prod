import React, { useMemo, useState, useEffect } from "react";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';
import axios from "axios";
import ResList from './ResList';
import NewRes from './Forms/NewRes';
import NewResModal from '../Modals/NewResModal';



export default function DataTable() {


  return (
    <div>
      {/* <NewResModal /> */}
      
      <ResList />
    </div>
  );
}
