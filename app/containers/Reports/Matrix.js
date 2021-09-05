import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';


export default function SpanningTable() {

  const [actAssignments, setActAssignments] = useState([]);
  const [actRes, setActRes] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    async function getData() {
      await axios
        .post("http://localhost:8888/dashData")
        .then((response) => {
          setActAssignments(response.data.actAssignments);
          setActRes(response.data.actRes);
          setLoadingData(false);
        });
    }
    if (loadingData) {
      getData();
    }
  }, []);

  const [active] = actAssignments.filter(i => i.active).map(i => i.res_count) || 0;
  const [inactive] = actAssignments.filter(i => !i.active).map(i => i.res_count) || 0;

  return (
    <div>
      <h1>Active Assignments {active}</h1>
      <h1>Closed Assignments {inactive}</h1>
      <h1>Active res</h1>
      <ul>
        {actRes.map(
          (i, index) => {
            return <li key={index}>{i.active_status} | {i.count}</li>
          }
        )}
      </ul>
    </div>
  );
}
