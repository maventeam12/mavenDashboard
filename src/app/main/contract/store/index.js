import { combineReducers } from '@reduxjs/toolkit';
import clientMessage from './clientMessageSlice'
import clientMessages from './clientMessagesSlice'
import contracts from './contractsSlice'
import contract from './contractSlice';
import clientExtraService from './clientExtraServicesSlice';
const reducer = combineReducers({
  clientMessage,
  clientMessages,
  contracts,
  contract,
  clientExtraService,
});
export default reducer;
