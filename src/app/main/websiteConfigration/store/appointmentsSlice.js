import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

export const getAppointments = createAsyncThunk('websiteConfiguration/appointments/getAppointments', async (param) => {
  const response = await axios.get(`https://www.api.mavenevents.ae/api/appointments`, {
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

export const removeAppointments = createAsyncThunk('websiteConfiguration/appointments/removeAppointments', async (param) => {
  console.log(param.access_token);
  const response = await axios.delete(`https://www.api.mavenevents.ae/api/appointments/many`, {
    headers: {
      access_token: param.access_token,
      email: param.email,
      username: param.username,
      id: param.id,
    },
    data: {
      ids: param.selectedAppointmentsIds,
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
  return param.selectedAppointmentsIds;
});

const appointmentsAdapter = createEntityAdapter({
  selectId: (appointment) => appointment.id,
  selectAll: (appointment) => appointment,
  selectById: (appointment) => appointment.id,
  removeMany: (appointment) => appointment.id,
});

export const { selectAll: selectAppointment, selectById: selectAppointmentById } = appointmentsAdapter.getSelectors(
  (state) => state.websiteConfiguration.appointments
);

const appointmentSlice = createSlice({
  name: 'websiteConfiguration/appointments',
  initialState: appointmentsAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setAppointmentSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getAppointments.fulfilled]: appointmentsAdapter.setAll,
    [removeAppointments.fulfilled]: (state, action) => appointmentsAdapter.removeMany(state, action.payload),
  },
});

export const { setAppointmentSearchText } = appointmentSlice.actions;

export const selectAppointmentSearchText = ({ websiteConfiguration }) => websiteConfiguration.appointments.searchText;

export default appointmentSlice.reducer;
