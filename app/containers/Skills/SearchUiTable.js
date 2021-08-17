import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function ResultsTable(props) {
  const classes = useStyles();
  const {results} = props;
  console.log(results);
  const {cols} = props;
    // console.log(displayFields);
    // console.log(results);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          {/* <TableRow>
          {cols.map(k => <TableCell key={k} align="right">{k}</TableCell>)}
          </TableRow> */}
        </TableHead>
        <TableBody>
          {results.map(row => (
            <TableRow key={row.id.raw}>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}