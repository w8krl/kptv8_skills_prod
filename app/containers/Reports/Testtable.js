import React, { useEffect, useState } from "react";

import { useTable, usePagination } from 'react-table';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import {PapperBlock} from 'enl-components';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
// import Table from 'react-bootstrap/Table'
import Styles from './Styles.css'

function BasicTableComponent(props) {

  const { colData } = props;
  const { data } = props;

  const columns = React.useMemo(() => colData, [])


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: columns,
    data: data,
  }, usePagination)

  console.log(headerGroups)
  return (
    <PapperBlock whiteBg noMargin title="Resource Data" >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
        <div >
          <table  {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, idx) => (
                <tr key={idx} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
          </div>
        </Grid>
      </Grid>

    </PapperBlock>

  )
}





const SkillsMatrix = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    async function getMatrix() {
      await axios
        .post("api/getMatrixData")
        .then(({ data }) => {
          setData(data);
          setLoading(false);
        });
    }
    if (loading) {
      getMatrix();
    }
  }, []);


  return (Object.keys(data).length == 2) && <BasicTableComponent data={data.userData} colData={data.treeHeaderData.columns[0].columns} />
}

export default SkillsMatrix