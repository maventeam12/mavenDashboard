import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import withRouter from '@fuse/core/withRouter';
import FuseLoading from '@fuse/core/FuseLoading';
import { selectUser } from 'app/store/userSlice';
import { getEvents, selectEvents, selectEventsSearchText } from '../store/eventsSlice';
import EventsTableHead from './EventsTableHead';
import { Box } from '@mui/system';
function EventsTable(props) {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const searchText = useSelector(selectEventsSearchText);
  const user = useSelector(selectUser);

  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState(events);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState({
    direction: 'asc',
    id: null,
  });
  useEffect(() => {
    dispatch(
      getEvents({
        access_token: window.localStorage.getItem('access_token'),
        email: user.email,
        id: user.id,
        username: user.username,
      })
    ).then(() =>{ setLoading(false)});
  }, [dispatch, user.username,user.id,user.email,]);

  useEffect(() => {
    if (searchText?.length !== 0) {
      setData(
        _.filter(events, (item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        )
      );
      setPage(0);
    } else {
      setData(events);
    }
  }, [events, searchText]);

  function handleRequestSort(event, property) {
    const id = property;
    let direction = 'desc';

    if (order.id === property && order.direction === 'desc') {
      direction = 'asc';
    }

    setOrder({
      direction,
      id,
    });
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      setSelected(data.map((n) => n.id));
      return;
    }
    setSelected([]);
  }

  function handleDeselect() {
    setSelected([]);
  }

  function handleClick(item) {
    props.navigate(`/websiteConfiguration/events/${item?.id}/${item?.name}`);
  }

  function handleCheck(event, id) {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected?.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  }

  function handleChangePage(event, value) {
    setPage(value);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <FuseLoading />
      </div>
    );
  }

  if (data?.length === 0 || data === undefined) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There are no Events!
        </Typography>
      </motion.div>
    );
  }

  return (
    <div className="w-full flex flex-col min-h-full">
      <FuseScrollbars className="grow overflow-x-auto">
        <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
          <EventsTableHead
            selectedEventsIds={selected}
            order={order}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={data?.length}
            onMenuItemClick={handleDeselect}
          />

          <TableBody>
            {_.orderBy(
              data,
              [
                (o) => {
                  switch (order.id) {
                    case 'name': {
                      return o?.name;
                    }
                    case 'id': {
                      return o?.id;
                    }
                    case 'createdAt': {
                      return o?.createdAt;
                    }
                    default: {
                      return o[order.id];
                    }
                  }
                },
              ],
              [order.direction]
            )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((n) => {
                const isSelected = selected.indexOf(n.id) !== -1;
                return (
                  <TableRow
                    className="h-72 cursor-pointer"
                    hover
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={n?.id}
                    selected={isSelected}
                    onClick={(event) => handleClick(n)}
                  >
                    <TableCell className="w-40 md:w-64 text-center" padding="none">
                      <Checkbox
                        checked={isSelected}
                        onClick={(event) => event.stopPropagation()}
                        onChange={(event) => handleCheck(event, n.id)}
                      />
                    </TableCell>
                    <TableCell className="p-4 md:p-16" component="th" scope="row" align="center">
                      {n?.id}
                    </TableCell>
                    <TableCell className="p-4 md:p-16" component="th" scope="row" align="center">
                    {n?.name?.length > 30 ? `${n?.name?.slice(0, 30)}...`: `${n?.name}`}
                    </TableCell>
                    <TableCell className="p-4 md:p-16" component="th" scope="row" align="center">
                    {n?.description?.length > 30 ? `${n?.description?.slice(0, 30)}...`: `${n?.description}`}
                    </TableCell>
                    <TableCell
                      className="p-4 md:p-16"
                      component="th"
                      scope="row"
                      align="center"
                    >
                      {n?.coverImageFile? 
                       <Box
                       sx={{
                         borderWidth: 2,
                         borderStyle: "solid",
                         borderColor: "Background.paper",
                       }}
                       className="productImageItem flex items-center justify-center relative  w-112 h-112 overflow-hiden mt-16 rounded-16  mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg"
                     >
 
                       <img className='max-w-none w-auto h-full' src ={`https://www.api.mavenevents.ae/event/${n?.coverImageFile}`} alt='event' ></img>
 
 
 
                     </Box>
                :
                <Box
                sx={{
                  borderWidth: 2,
                  borderStyle: "solid",
                  borderColor: "Background.paper",
                }}
                component="label"
                htmlFor="imageFile"
                className="productImageItem flex items-center justify-center relative  w-112 h-112 overflow-hiden mt-16 rounded-16  mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg"
              >
                <div
                  accept="image/*"
                  className="hidden"
                  id="imageFile"

                />
                <FuseSvgIcon size={32} color="action">
                  heroicons-outline:upload
                </FuseSvgIcon>
              </Box>
                }
                    
                    </TableCell>
                    <TableCell className="p-4 md:p-16" component="th" scope="row" align="center">
                      {`${n?.createdAt?.split('T')[0]}`}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </FuseScrollbars>

      <TablePagination
        className="shrink-0 border-t-1"
        component="div"
        count={data?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default withRouter(EventsTable);
