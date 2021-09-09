import React, { useMemo, useState, useEffect } from "react";
import {withRouter} from 'react-router';
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Profile}  from '../pageListAsync';

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
    description: 'User name',
    width: 150,
    editable: false,
  },
  {
    field: 'gender',
    name: 'gender',
    headerName: 'Gender',
    width: 150,
    editable: false,
  },
  {
    field: 'pri_contact_no',
    name: 'pri_contact_no',
    headerName: 'Contact',
    width: 150,
    editable: false,
  },
  {
    field: 'role',
    name: 'role',
    headerName: 'Role',
    width: 150,
    editable: false,
  },
  {
    field: 'service_desc',
    name: 'service_desc',
    headerName: 'Service',
    width: 150,
    editable: false,
  },
  {
    field: 'country',
    name: 'country',
    headerName: 'Country',
    width: 150,
    editable: false,
  },
  {
    field: 'region',
    name: 'region',
    headerName: 'Region',
    width: 150,
    editable: false,
  },
  {
    field: 'email',
    name: 'Email',
    headerName: 'Email',
    width: 150,
    editable: false,
  },
];

function handleCellEditCommit(e){
  window.confirm("Are you sure?");
}



export default function DataTable() {
  let history = useHistory();

  function handleCellClick(e) {
    history.push({pathname: "/app/user-settings", state: {profileId: e.id},search: `?user=${e.id}`,});
    // let target = `/app/profile/${e.id}`;
    // return <Redirect to={target}/>
  }

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
        onRowClick={(handleCellClick)}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}
