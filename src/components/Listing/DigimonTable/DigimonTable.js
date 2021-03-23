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

function DigimonTable({ digimons, set_digimons }) {
  const classes = useStyles();

  return (
    <Table className={classes.digimonTable} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Avatar</TableCell>
          <TableCell align="center">Name</TableCell>
          <TableCell align="center">Level</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {digimons.map((digimon) => (
          <TableRow 
            key={digimon.name}
            hover
            onClick={() => set_digimons([digimon])}
          >
            <TableCell align="center">
              <Avatar src={digimon.img} />
            </TableCell>
            <TableCell align="center">{digimon.name}</TableCell>
            <TableCell align="center">{digimon.level}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DigimonTable;