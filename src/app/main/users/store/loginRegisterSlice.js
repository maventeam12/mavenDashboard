import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getLoginRegisters = createAsyncThunk('users/loginRegister/getLoginRegisters', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/loginRegister`, {
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

const loginRegistersAdapter = createEntityAdapter({
  selectId: (companyUser) => companyUser.id,
  selectAll: (companyUser) => companyUser,
  selectById: (companyUser) => companyUser.id,
  removeMany: (companyUser) => companyUser.id,
});

export const { selectAll: selectLoginRegisters, selectById: selectLoginRegistersById } = loginRegistersAdapter.getSelectors(
  (state) => state.users.loginRegister
);

const loginRegisterSlice = createSlice({
  name: 'users/loginRegister',
  initialState: loginRegistersAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setLoginRegistersSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getLoginRegisters.fulfilled]: loginRegistersAdapter.setAll,
  },
});

export const { setLoginRegistersSearchText } = loginRegisterSlice.actions;

export const selectLoginRegistersSearchText = ({ users }) => users.loginRegister.searchText;

export default loginRegisterSlice.reducer;
