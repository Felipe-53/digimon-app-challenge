import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Avatar from '@material-ui/core/Avatar';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePaginationActions from './TablePaginationActions/TablePaginationActions';
import useStyles from './digimonTableStyles';

function DigimonTable({ fetchedApiData, set_digimons }) {
  const classes = useStyles();

  const [page, set_page] = useState(0);

  const ROWS_PER_PAGE = 10;

  function handleChangePage(event, newPage) {
    set_page(newPage);
  }
  
  const recordsOnPage = (fetchedApiData
    .slice(page*ROWS_PER_PAGE, page*ROWS_PER_PAGE+ROWS_PER_PAGE)
  );

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
        {recordsOnPage.map((digimon) => (
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
      <TableFooter>
        <TableRow>
          <TablePagination
            colSpan={3}
            count={fetchedApiData.length}
            rowsPerPage={10}
            page={page}
            onChangePage={handleChangePage}
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default DigimonTable;