import React, { useMemo, useState, useEffect } from "react";
import {withRouter} from 'react-router';
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Profile}  from '../pageListAsync';
import MUIDataTable from "mui-datatables";


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

      name: "id",
      label: "id",
      options: {
        display: "excluded",
        filter:false
      }      
  },
  {

      name: "CV Filename",
      label: "filename",
      options: {
       filter: false,
       sort: true}
  },
  {

      name: "name",
      label: "Name",
      options: {
       filter: false,
       sort: true}
  }
];


function handleCellEditCommit(e){
  window.confirm("Are you sure?");
}



export default function CVList() {
  let history = useHistory();

  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .post("api/getCvs")
        .then((response) => {
          setData(response.data);
          setLoadingData(false);

          
        });
    }
    if (loadingData) {
      getData();
    }
  }, []);

// const options = {
//   // resizableColumns: true,
//   filterType: "dropdown",
//   onRowClick: (row, cell) => {
//     let id = row[0];
//     history.push({pathname: "/app/user-settings", state: {profileId: id},search: `?user=${id}`,});
//   }
// };

  return (
    <div style={{ height: 700, width: '100%' }}>
      <MUIDataTable
        title={"Resource List"}
        data={data}
        columns={columns}
        // options={options}
      />
    </div>
  );
}
