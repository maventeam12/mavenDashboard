import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import TableHead from '@mui/material/TableHead';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { lighten } from '@mui/material/styles';
import { selectUser } from 'app/store/userSlice';
import { DialogTitle, DialogActions, Button } from '@mui/material';
import { removeUserCareers } from '../store/userCareersSlice';
import { openDialog, closeDialog } from '../../../store/fuse/dialogSlice';

const rows = [
  {
    id: 'id',
    align: 'center',
    disablePadding: false,
    label: 'ID',
    sort: true,
  },
  {
    id: 'name',
    align: 'center',
    disablePadding: false,
    label: 'Name',
    sort: true,
  },
  {
    id: 'career',
    align: 'center',
    disablePadding: false,
    label: 'Career',
    sort: true,
  },
  {
    id: 'email',
    align: 'center',
    disablePadding: false,
    label: 'Email',
    sort: true,
  },
  {
    id: 'message',
    align: 'center',
    disablePadding: false,
    label: 'Message',
    sort: true,
  },
  {
    id: 'isChecked',
    align: 'center',
    disablePadding: false,
    label: 'Checked',
    sort: true,
  },
  {
    id: 'createdAt',
    align: 'center',
    disablePadding: false,
    label: 'created',
    sort: true,
  },
];

function BlogsTableHead(props) {
  const user = useSelector(selectUser);
  const { selectedUserCareersIds } = props;
  const numSelected = selectedUserCareersIds.length;

  const [selectedBranchsMenu, setSelectedBranchsMenu] = useState(null);

  const dispatch = useDispatch();

  const createSortHandler = (property) => (event) => {
    props.onRequestSort(event, property);
  };

  function openSelectedBranchsMenu(event) {
    setSelectedBranchsMenu(event.currentTarget);
  }

  function closeSelectedBranchsMenu() {
    setSelectedBranchsMenu(null);
  }
  function deleteBlogs() {
    dispatch(
      removeUserCareers({
        selectedUserCareersIds,
        access_token: window.localStorage.getItem('access_token'),
        email: user.email,
        id: user.id,
        username: user.username,
      })
    );
    props.onMenuItemClick();
    closeSelectedBranchsMenu();
    dispatch(closeDialog());
    
  }
  function confirmDelete() {
    dispatch(
      openDialog({
        children: (
          <>
            <DialogTitle id="alert-dialog-title">
              Are you sure you want to delete this Solicitud(s)?
            </DialogTitle>
            <DialogActions>
              <Button onClick={() => dispatch(closeDialog())} color="secondary">
                Skip
              </Button>
              <Button onClick={deleteBlogs} color="secondary" autoFocus>
                confirm
              </Button>
            </DialogActions>
          </>
        ),
      })
    );
  }
  return (
    <TableHead>
      <TableRow className="h-48 sm:h-64">
        <TableCell
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? lighten(theme.palette.background.default, 0.4)
                : lighten(theme.palette.background.default, 0.02),
          }}
          padding="none"
          className="w-40 md:w-64 text-center z-99"
        >
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < props.rowCount}
            checked={props.rowCount !== 0 && numSelected === props.rowCount}
            onChange={props.onSelectAllClick}
            style={{color:"#f4b231"}}
          />
          {numSelected > 0 && (
            <Box
              className="flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1"
              sx={{
                background: (theme) => theme.palette.background.default,
              }}
            >
              <IconButton
              
                aria-owns={selectedBranchsMenu ? 'selectedBranchsMenu' : null}
                aria-haspopup="true"
                onClick={openSelectedBranchsMenu}
                size="large"
              >
                <FuseSvgIcon>heroicons-outline:dots-horizontal</FuseSvgIcon>
              </IconButton>
              <Menu
                id="selectedBranchsMenu"
                anchorEl={selectedBranchsMenu}
                open={Boolean(selectedBranchsMenu)}
                onClose={closeSelectedBranchsMenu}
              >
                <MenuList>
                  <MenuItem onClick={confirmDelete}>
                    <ListItemIcon className="min-w-40">
                      <FuseSvgIcon>heroicons-outline:trash</FuseSvgIcon>
                    </ListItemIcon>
                    <ListItemText primary="Remove" />
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          )}
        </TableCell>
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
                  placement={row.align === 'right' ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={props.order.id === row.id}
                    direction={props.order.direction}
                    onClick={createSortHandler(row.id)}
                    className="font-semibold"
                    style={{color:"#f4b231"}}
                  >
                    &nbsp;&nbsp;&nbsp;{row.label}
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

export default BlogsTableHead;
