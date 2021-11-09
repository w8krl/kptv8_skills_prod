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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function SkillsTable(props) {

  const { colData } = props;
  const { data } = props;

  // Add name field to columns at top level
  colData.unshift({ Header: "", accessor: "name" });

  const columns = React.useMemo(() => colData, [])

  const dataToDownload = (data, columns) =>
  data.map(record =>
    columns.reduce((recordToDownload, column) => {
      recordToDownload[column.Header] = record[column.accessor];
      return recordToDownload;
    }, {})
  );

  // const currentRecords = this.reactTable.getResolvedState().sortedData;
  console.log(dataToDownload(data, columns));

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

  return (
    <Paper>
          <Table size="small" style={{display:"block", overflowX:"auto"}} {...getTableProps()}>
            <TableHead>
              {headerGroups.map((headerGroup, idx) => (
                <TableRow key={idx} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <TableCell {...column.getHeaderProps({style: { whiteSpace: 'nowrap' }})}>{column.render('Header')}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row)
                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
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

    </Paper>

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