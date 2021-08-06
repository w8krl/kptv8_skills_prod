import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
 createRow('Name', 100, 1.15),
 createRow('Paper (Case)', 10, 45.99),
 createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table style={{ width: "110%" }} className={classes.table} aria-label="spanning table">
        <TableHead>
        <TableRow>     
            <TableCell align="center" colSpan={1}>
              
            </TableCell>
            <TableCell align="center" colSpan={31}>RAN</TableCell>

          </TableRow>          
          <TableRow>     
            <TableCell align="center" colSpan={1}>
              
            </TableCell>
            <TableCell border={1} align="center" colSpan={3}>2G Design</TableCell>
            <TableCell align="center" colSpan={3}>3G Design</TableCell>
            <TableCell align="center" colSpan={3}>4G Design</TableCell>
            <TableCell align="center" colSpan={3}>5G Design</TableCell>
            <TableCell align="center" colSpan={3}>O-RAN Design</TableCell>
            <TableCell align="center" colSpan={3}>2G Planning</TableCell>
            <TableCell align="center" colSpan={3}>3G Planning</TableCell>
            <TableCell align="center" colSpan={3}>4G Planning</TableCell>
            <TableCell align="center" colSpan={3}>5G Planning</TableCell>   
            <TableCell align="center" colSpan={3}>ORAN</TableCell>   
          </TableRow>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Nok</TableCell>
            <TableCell align="right">E///</TableCell>
            <TableCell align="right">Hua</TableCell>
            <TableCell align="right">Nok</TableCell>
            <TableCell align="right">E///</TableCell>
            <TableCell align="right">Hua</TableCell>
            <TableCell align="right">Nok</TableCell>
            <TableCell align="right">E///</TableCell>
            <TableCell align="right">Hua</TableCell>
            <TableCell align="right">Nok</TableCell>
            <TableCell align="right">E///</TableCell>
            <TableCell align="right">Hua</TableCell>
            <TableCell align="right">NEC</TableCell>
            <TableCell align="right">Mav</TableCell>
            <TableCell align="right">IBM</TableCell>
            <TableCell align="right">Nok</TableCell>
            <TableCell align="right">E///</TableCell>
            <TableCell align="right">Hua</TableCell>
            <TableCell align="right">Nok</TableCell>
            <TableCell align="right">E///</TableCell>
            <TableCell align="right">Hua</TableCell>
            <TableCell align="right">Nok</TableCell>
            <TableCell align="right">E///</TableCell>
            <TableCell align="right">Hua</TableCell>
            <TableCell align="right">Nok</TableCell>
            <TableCell align="right">E///</TableCell>
            <TableCell align="right">Hua</TableCell>
            <TableCell align="right">NEC</TableCell>
            <TableCell align="right">Mav</TableCell>
            <TableCell align="right">IBM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
              <TableCell>Test User 1</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>0</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>0</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>

            </TableRow>
        <TableRow>
              <TableCell>Test User 2</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>

            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
