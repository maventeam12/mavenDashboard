import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getCompanyUsers = createAsyncThunk('users/companyUsers/getCompanyUsers', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/companyUser`, {
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

export const removeCompanyUsers = createAsyncThunk('users/companyUsers/removeCompanyUsers', async (param) => {
  console.log(param.access_token);
  const response = await axios.delete(`https://www.api.mavenevents.ae/api/companyUser/many`, {
    headers: {
      access_token: param.access_token,
      email: param.email,
      username: param.username,
      id: param.id,
    },
    data: {
      ids: param.selectedCompanyUsersIds,
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
  return param.selectedCompanyUsersIds;
});

const companyUsersAdapter = createEntityAdapter({
  selectId: (companyUser) => companyUser.id,
  selectAll: (companyUser) => companyUser,
  selectById: (companyUser) => companyUser.id,
  removeMany: (companyUser) => companyUser.id,
});

export const { selectAll: selectCompanyUsers, selectById: selectCompanyUsersById } = companyUsersAdapter.getSelectors(
  (state) => state.users.companyUsers
);

const companyUsersSlice = createSlice({
  name: 'users/companyUsers',
  initialState: companyUsersAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setCompanyUsersSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getCompanyUsers.fulfilled]: companyUsersAdapter.setAll,
    [removeCompanyUsers.fulfilled]: (state, action) => companyUsersAdapter.removeMany(state, action.payload),
  },
});

export const { setCompanyUsersSearchText } = companyUsersSlice.actions;

export const selectCompanyUsersSearchText = ({ users }) => users.companyUsers.searchText;

export default companyUsersSlice.reducer;
