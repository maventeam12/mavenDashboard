import { combineReducers } from '@reduxjs/toolkit';
import companyUser from './companyUserSlice'
import companyUsers from './companyUsersSlice'
import clients from './clientsSlice'
import client from './clientSlice';
import loginRegister from './loginRegisterSlice';
const reducer = combineReducers({
  companyUsers,
  companyUser,
  clients,
  client,
  loginRegister,
});
export default reducer;
