import React, { useMemo, useState, useEffect } from "react";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';
import axios from "axios";


import { DataGrid, GridToolbarContainer,
  GridToolbarExport} from '@material-ui/data-grid';

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

const styles = theme => ({
  table: {
    '& > div': {
      overflow: 'auto'
    },
    '& table': {
      '& td': {
        wordBreak: 'keep-all'
      },
      [theme.breakpoints.down('md')]: {
        '& td': {
          height: 60,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    }
  },
  root: {
    textTransform: "capitalize"
  }
});

const columns = [
  {
    field: 'name',
    name: 'name',
    headerName: 'Name',
    description: 'This column has a value getter and is not sortable.',
    width: 150,
    editable: true,
  },
  {
    field: 'gender',
    name: 'gender',
    headerName: 'Gender',
    width: 150,
    editable: true,
  },
  {
    field: 'pri_contact_no',
    name: 'pri_contact_no',
    headerName: 'Contact',
    width: 150,
    editable: true,
  },
  {
    field: 'role',
    name: 'role',
    headerName: 'Role',
    width: 150,
    editable: true,
  },
  {
    field: 'service_desc',
    name: 'service_desc',
    headerName: 'Service',
    width: 150,
    editable: true,
  },
  {
    field: 'country',
    name: 'country',
    headerName: 'Country',
    width: 150,
    editable: true,
  },
  {
    field: 'region',
    name: 'region',
    headerName: 'Region',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    name: 'Email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
];

function handleCellEditCommit(e){
  window.confirm("Are you sure?");
}

export default function DataTable() {

  const [loadingData, setLoadingData] = useState(true);
 

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .post("http://localhost:8888/getRes")
        .then((response) => {
          // check if the data is populated
          // console.log(response.data);
          setData(response.data);
          // you tell it that you had the result
          setLoadingData(false);
        });
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={30}
        checkboxSelection
        onCellEditCommit={handleCellEditCommit}
        disableSelectionOnClick
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}
