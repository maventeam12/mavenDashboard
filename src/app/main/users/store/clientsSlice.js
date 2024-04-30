import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getClients = createAsyncThunk('users/clients/getClients', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/client`, {
    headers: {
      access_token: param.access_token,
      email: param.email,
      username: param.username,
      id: param.id,
    },
  });
  if (Array.isArray(response.data.error)) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < response.data.error.length; i++) {
      toast.error(response.data.error[i].msg.message, {
        position: "bottom-right",
         draggable: false 
      })
    }
  } 
  return await response.data;
});

export const removeClients = createAsyncThunk('users/clients/removeClients', async (param) => {
  console.log(param.access_token);
  const response = await axios.delete(`https://www.api.mavenevents.ae/api/client/many`, {
    headers: {
      access_token: param.access_token,
      email: param.email,
      username: param.username,
      id: param.id,
    },
    data: {
      ids: param.selectedClientsIds,
    },
  });
  if (Array.isArray(response.data.error)) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < response.data.error.length; i++) {
      toast.error(response.data.error[i].msg.message, {
        position: "bottom-right",
        draggable: false 
      })
    }
    return null
  } 
  return param.selectedClientsIds;
});

const clientsAdapter = createEntityAdapter({
  selectId: (client) => client.id,
  selectAll: (client) => client,
  selectById: (client) => client.id,
  removeMany: (client) => client.id,
});

export const { selectAll: selectClients, selectById: selectClientsById } = clientsAdapter.getSelectors(
  (state) => state.users.clients
);

const clientsSlice = createSlice({
  name: 'users/clients',
  initialState: clientsAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setClientsSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getClients.fulfilled]: clientsAdapter.setAll,
    [removeClients.fulfilled]: (state, action) => clientsAdapter.removeMany(state, action.payload),
  },
});

export const { setClientsSearchText } = clientsSlice.actions;

export const selectClientsSearchText = ({ users }) => users.clients.searchText;

export default clientsSlice.reducer;
