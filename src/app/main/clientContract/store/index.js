import { combineReducers } from '@reduxjs/toolkit';
import clientMessages from './clientMessagesSlice'
import contracts from './contractsSlice'
import contract from './contractSlice';
const reducer = combineReducers({
  clientMessages,
  contracts,
  contract,
});
export default reducer;
