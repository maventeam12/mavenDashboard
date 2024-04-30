import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getUserCareers = createAsyncThunk('websiteConfiguration/userCareers/getUserCareers', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/userCareer`, {
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

export const removeUserCareers = createAsyncThunk('websiteConfiguration/userCareers/removeUserCareers', async (param) => {
  console.log(param.access_token);
  const response = await axios.delete(`https://www.api.mavenevents.ae/api/userCareer/many`, {
    headers: {
      access_token: param.access_token,
      email: param.email,
      username: param.username,
      id: param.id,
    },
    data: {
      ids: param.selectedUserCareersIds,
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
  return param.selectedUserCareersIds;
});

const userCareersAdapter = createEntityAdapter({
  selectId: (user) => user.id,
  selectAll: (user) => user,
  selectById: (user) => user.id,
  removeMany: (user) => user.id,
});

export const { selectAll: selectUserCareers, selectById: selectUsercareerById } = userCareersAdapter.getSelectors(
  (state) => state.websiteConfiguration.userCareers
);

const userCareersSlice = createSlice({
  name: 'websiteConfiguration/userCareers',
  initialState: userCareersAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setUserCareersSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getUserCareers.fulfilled]: userCareersAdapter.setAll,
    [removeUserCareers.fulfilled]: (state, action) => userCareersAdapter.removeMany(state, action.payload),
  },
});

export const { setUserCareersSearchText } = userCareersSlice.actions;

export const selectUserCareersSearchText = ({ websiteConfiguration }) => websiteConfiguration.userCareers.searchText;

export default userCareersSlice.reducer;
