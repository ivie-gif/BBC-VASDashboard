import * as React from 'react';
import {
  alpha, Box, Table, TableBody, TableCell, TableContainer,
  TableHead, TablePagination, TableRow, TableSortLabel, Toolbar,
  Typography, Paper, Checkbox, IconButton, Tooltip,
  FormControlLabel, Switch
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

type Order = 'asc' | 'desc';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: any }, b: { [key in Key]: any }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export interface HeadCell<T> {
  id: keyof T;
  label: string;
  numeric?: boolean;
  disablePadding?: boolean;
}

interface ReusableTableProps<T> {
  rows: T[];
  headCells: HeadCell<T>[];
  rowKey: keyof T;
  showCheckbox?: boolean;
  onRowClick?: (row: T) => void;
  renderRow?: (row: T, isSelected: boolean) => React.ReactNode;
}

export function ReusableTable<T>({
  rows,
  headCells,
  rowKey,
  showCheckbox = true,
  onRowClick,
  renderRow,
}: ReusableTableProps<T>) {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof T>(headCells[0].id);
  const [selected, setSelected] = React.useState<readonly (T[keyof T])[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof T) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!showCheckbox) return;
    if (event.target.checked) {
      const newSelected = rows.map((n) => n[rowKey]);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (row: T) => {
    if (!showCheckbox) {
      onRowClick?.(row);
      return;
    }

    const id = row[rowKey];
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly (T[keyof T])[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
    onRowClick?.(row);
  };

  const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (id: T[keyof T]) => selected.includes(id);

  const sortedRows = React.useMemo(() => {
    return [...rows].sort(getComparator(order, orderBy));
  }, [rows, order, orderBy]);

  const paginatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box sx={{ width: '100%', pt: 5 }}>
      <Paper sx={{ width: '100%', mb: 2 ,}}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pt: -15,
            pr: { xs: 1, sm: 1 },
            ...(selected.length > 0 &&
              showCheckbox && {
                bgcolor: (theme) =>
                  alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
              }),
          }}
        >
          {showCheckbox && selected.length > 0 ? (
            <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1">
              {selected.length} selected
            </Typography>
          ) : (
            <Box sx={{ flex: '1 1 100%', }} />
          )}
         
        </Toolbar>

        <TableContainer sx={{ mt: -10 }}>
          <Table size={dense ? 'small' : 'medium'}>
            <TableHead>
              <TableRow>
                {showCheckbox && (
                  <TableCell padding="checkbox" >
                    <Checkbox
                      color="primary"
                      indeterminate={
                        selected.length > 0 && selected.length < rows.length
                      }
                      checked={rows.length > 0 && selected.length === rows.length}
                      onChange={handleSelectAllClick}
                    
                    />
                  </TableCell>
                )}
                {headCells.map((headCell) => (
                  <TableCell
                    sx={{
                      px: 4,
                      fontSize: '14px',
                      fontWeight: 500,
                      color: (theme) => (theme.palette.mode === 'dark' ? '#D36128' : '#212529'), 
                      borderBottom: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#444' : '#ddd'}`
                    }}
                    key={String(headCell.id)}
                    align={headCell.numeric ? 'right' : 'left'}
                    padding={headCell.disablePadding ? 'none' : 'normal'}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      // active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={(e) => handleRequestSort(e, headCell.id)}
                    >
                      {headCell.label}
                      {orderBy === headCell.id && (
                        <Box component="span" sx={visuallyHidden}>
                          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </Box>
                      )}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedRows.map((row, index) => {
                const key = row[rowKey];
                const isItemSelected = isSelected(key);

                return renderRow ? (
                  renderRow(row, isItemSelected)
                ) : (
                  <TableRow
                    hover
                    onClick={() => handleClick(row)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={String(key)}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    {showCheckbox && (
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" checked={isItemSelected} />
                      </TableCell>
                    )}
                    {headCells.map((cell) => (
                      <TableCell
                        key={String(cell.id)}
                        align={cell.numeric ? 'right' : 'left'}
                        sx={{
                          px: 4,
                          fontSize: '14px',
                          fontWeight: 500,
                          color: (theme) => (theme.palette.mode === 'dark' ? '#F2F2F2' : '#212529'),
                          borderBottom: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#444' : '#ddd'}`
                        }}
                      >
                        {String(row[cell.id])}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
