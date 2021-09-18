import React, { useEffect, useState } from "react";

import { useTable, usePagination } from 'react-table';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import {PapperBlock} from 'enl-components';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from 'react-bootstrap/Table'
import Styles from './Styles.css'

function SkillsTable(props) {

  const { colData } = props;
  const { data } = props;

  // const colData2 = []
  colData.unshift({ Header: "", accessor: "name" });

  
  const columns = React.useMemo(() => colData, [])


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setPageSize,
    state: { pageIndex, pageSize },
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage
  } = useTable({
    columns: columns,
    data: data,
    initialState: { pageSize: 20 }
  }, usePagination)

  console.log(headerGroups)
  return (
    <PapperBlock whiteBg noMargin title="Resource Data" >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <table style={{display:"block", overflowX:"auto"}} {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, idx) => (
                <tr key={idx} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps({style: { whiteSpace: 'nowrap' }})}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
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
          <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
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


  return (Object.keys(data).length == 2) && <SkillsTable data={data.userData} colData={data.treeHeaderData.columns} />
}

export default SkillsMatrix