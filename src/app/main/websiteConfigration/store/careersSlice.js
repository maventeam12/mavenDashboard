import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getCareers = createAsyncThunk('websiteConfiguration/careers/getCareers', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/careers`, {
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

export const removeCareers = createAsyncThunk('websiteConfiguration/careers/removeCareers', async (param) => {
  console.log(param.access_token);
  const response = await axios.delete(`https://www.api.mavenevents.ae/api/careers/many`, {
    headers: {
      access_token: param.access_token,
      email: param.email,
      username: param.username,
      id: param.id,
    },
    data: {
      ids: param.selectedCareersIds,
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
  return param.selectedCareersIds;
});

const careersAdapter = createEntityAdapter({
  selectId: (career) => career.id,
  selectAll: (career) => career,
  selectById: (career) => career.id,
  removeMany: (career) => career.id,
});

export const { selectAll: selectCareers, selectById: selectCareerById } = careersAdapter.getSelectors(
  (state) => state.websiteConfiguration.careers
);

const careersSlice = createSlice({
  name: 'websiteConfiguration/careers',
  initialState: careersAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setCareersSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getCareers.fulfilled]: careersAdapter.setAll,
    [removeCareers.fulfilled]: (state, action) => careersAdapter.removeMany(state, action.payload),
  },
});

export const { setCareersSearchText } = careersSlice.actions;

export const selectCareersSearchText = ({ websiteConfiguration }) => websiteConfiguration.careers.searchText;

export default careersSlice.reducer;
