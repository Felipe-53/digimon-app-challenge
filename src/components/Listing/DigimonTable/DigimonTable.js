import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Avatar from '@material-ui/core/Avatar';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from './digimonTableStyles';

function DigimonTable({ digimons }) {
  const classes = useStyles();

  return (
    <Table className={classes.digimonTable} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">Avatar</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Level</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {digimons.map((digimon) => (
          <TableRow key={digimon.name}>
            <TableCell align="right">
              <Avatar alt={digimon.name} src={digimon.img} />
            </TableCell>
            <TableCell align="right">{digimon.name}</TableCell>
            <TableCell align="right">{digimon.level}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DigimonTable;