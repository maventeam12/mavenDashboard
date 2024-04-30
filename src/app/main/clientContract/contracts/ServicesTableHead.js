
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Tooltip from '@mui/material/Tooltip';
import TableHead from '@mui/material/TableHead';
import { lighten } from '@mui/material/styles';


const rows = [
  {
    id: 'id',
    align: 'center',
    disablePadding: false,
    label: 'ID',
    sort: true,
  },
  {
    id: 'linkToDrive',
    align: 'center',
    disablePadding: false,
    label: 'Drive link',
    sort: true,
  },
  {
    id: 'startDate',
    align: 'center',
    disablePadding: false,
    label: 'Start Date',
    sort: true,
  },
  {
    id: 'endDate',
    align: 'center',
    disablePadding: false,
    label: 'End Date',
    sort: true,
  },

  
];

function ServicesTableHead(props) {

  const createSortHandler = (property) => (event) => {
    props.onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className="h-48 sm:h-64">
        {rows.map((row) => {
          return (
            <TableCell
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? lighten(theme.palette.background.default, 0.4)
                    : lighten(theme.palette.background.default, 0.02),
              }}
              className="p-4 md:p-16"
              key={row.id}
              align={row.align}
              padding={row.disablePadding ? 'none' : 'normal'}
              sortDirection={props.order.id === row.id ? props.order.direction : false}
            >
              {row.sort && (
                <Tooltip
                  title="Sort"
                  style={{color:'#f4b231'}}
                  placement={row.align === 'right' ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={props.order.id === row.id}
                    direction={props.order.direction}
                    onClick={createSortHandler(row.id)}
                    className="font-semibold"
                    style={{color:'#f4b231'}}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              )}
            </TableCell>
          );
        }, this)}
      </TableRow>
    </TableHead>
  );
}

export default ServicesTableHead;
