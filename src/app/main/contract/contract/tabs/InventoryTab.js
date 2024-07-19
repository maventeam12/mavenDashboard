import Button from '@mui/material/Button';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import FuseLoading from '@fuse/core/FuseLoading';
import _ from '@lodash';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import Box from '@mui/system/Box';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { selectUser } from 'app/store/userSlice';
import {
  addContract,
  getContract,
  newContract,
  removeContract,
  selectContractDB,
  saveContract,
} from '../../store/contractSlice';
import ContactEmailSelector from './inventory/phone/ContactEmailSelector';
import ContractMonthSelector from './inventory/serviceMonth/ContactEmailSelector';
import CustomerDescriptionSelector from './inventory/description/CustomerDescriptionSelector';
import MSGSelector from './inventory/MSG/CustomerDescriptionSelector';
import EXTselector from './inventory/EXTRA/CustomerDescriptionSelector';
/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  startDate: yup
  .string()
  .required('You must enter the start Date'),
  endDate: yup
  .string()
  .required('You must enter the start Date'),
  linkToDrive: yup
  .string()
  .required('You must enter the link')
  .min(10, 'The link must be at least 10 characters'),
  title: yup
  .string()
  .required('You must enter the title')
  .min(5, 'The title must be at least 5 characters'),
  clientId: yup
  .number()
  .positive("only positive ID")
  .required('You must enter the ID'),
  months: yup
    .number()
    .positive("only positive months")
    .required('You must enter the month')
    .min(1, 'The month must be minimum 1')
    .max(12, 'The month must be maximum 12'),
});

function UserTab(props) {
  const contact = useSelector(selectContractDB);
  const routeParams = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const { contractId } = routeParams;

  const { control, watch, reset, handleSubmit, formState, getValues } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const form = watch();
  useEffect(() => {
    if (routeParams.contractId === 'new') {
      dispatch(newContract());
    } else {
      dispatch(
        getContract({
          access_token: window.localStorage.getItem('access_token'),
            email: user.email,
            id: user.id,
            username: user.username,
            contractId,
        })
      );
    }
  }, [dispatch, routeParams, user]);

  useEffect(() => {
    reset({ ...contact });
  }, [contact, reset]);

  /**
   * Form Submit
   */
  function onSubmit(data) {
      if (routeParams.contractId === 'new') {
        dispatch(
          addContract({
            data: getValues(),
            access_token: window.localStorage.getItem('access_token'),
          email: user.email,
          id: user.id,
          username: user.username,
          })
        ).then(() => {
          navigate(`/contract/contracts`);
        });
      } else {
        dispatch(
          saveContract({
            data: getValues(),
          access_token: window.localStorage.getItem('access_token'),
          email: user.email,
          id: user.id,
          username: user.username,
          })
        ).then(() => {
          navigate(`/contract/contracts`);
        });
      }
    
  }

  function handleRemoveContact() {
    dispatch(
      removeContract({
        access_token: window.localStorage.getItem('access_token'),
          email: user.email,
          id: user.id,
          username: user.username,
          contractId: getValues().id,
      })
    ).then(() => {
      navigate('/contract/contracts');
    });
  }

  if (_.isEmpty(form) || !contact) {
    return <FuseLoading />;
  }
  return (
    <>
    <Box
        className="flex items-center py-14 pr-16 pl-4 sm:pr-48 sm:pl-36 border-t"
        sx={{ backgroundColor: 'background.default' }}
      >
        {routeParams.contractId !== 'new' && (
          <Button color="error" onClick={handleRemoveContact}>
            Delete
          </Button>
        )}
        <Button className="ml-auto" color="secondary" component={NavLinkAdapter} to={-1}>
          Cancel
        </Button>
        <Button
          className="ml-8"
          variant="contained"
          color="secondary"
          disabled={_.isEmpty(dirtyFields) || !isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Save
        </Button>
      </Box>
      <div className="relative flex flex-col flex-auto px-24 sm:px-48">
      <div className="mt-28 ">
                        <div className="text-3xl text-[#94A3B8]">
                          CONTRACT INFORMATION
                        </div>
                        </div>
      <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <TextField
              className="mt-16 ml-28"
              {...field}
              label="Title"
              placeholder="Contract title"
              id="title"
              error={!!errors.title}
              helperText={errors?.title?.message}
              variant="outlined"
              required
              style={{width:'700px'}}
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style = {{transform: 'rotate(180deg)' }}>
                    <FuseSvgIcon size={20}>heroicons-outline:menu-alt-3</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Controller
          control={control}
          name="clientId"
          render={({ field }) => (
            <TextField
              className="mt-32 ml-28"
              {...field}
              label="client ID"
              placeholder="client ID"
              id="clientId"
              error={!!errors.clientId}
              helperText={errors?.clientId?.message}
              variant="outlined"
              required
              style={{width:'700px'}}
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-solid:user-circle</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
           <Controller
          control={control}
          name="startDate"
          render={({ field }) => (
            <TextField
              className="mt-32 ml-28"
              {...field}
              label="startDate"
              placeholder="yyyy-mm-dd"
              id="startDate"
              error={!!errors.startDate}
              helperText={errors?.startDate?.message}
              variant="outlined"
              required
              style={{width:'700px'}}
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-outline:calendar</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
          <Controller
          control={control}
          name="endDate"
          render={({ field }) => (
            <TextField
              className="mt-32 ml-28"
              {...field}
              label="endDate"
              placeholder="yyyy-mm-dd"
              id="endDate"
              error={!!errors.endDate}
              helperText={errors?.endDate?.message}
              variant="outlined"
              required
              style={{width:'700px'}}
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-outline:calendar</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
              <Controller
          control={control}
          name="linkToDrive"
          render={({ field }) => (
            <TextField
              className="mt-32 ml-28"
              {...field}
              label="linkToDrive"
              placeholder="www.example.com/link"
              id="linkToDrive"
              error={!!errors.linkToDrive}
              helperText={errors?.linkToDrive?.message}
              variant="outlined"
              required
              style={{width:'700px'}}
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-outline:link</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
              <Controller
          control={control}
          name="months"
          render={({ field }) => (
            <TextField
              className="mt-32 ml-28 mb-16"
              {...field}
              label="months"
              placeholder="number of months"
              id="months"
              type='number'
              error={!!errors?.months}
              helperText={errors?.months?.message}
              variant="outlined"
              required
              style={{width:'700px'}}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-outline:calendar</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />


{
  contact?.contractExtService && 
  <>
  <div className="mt-28 ">
                        <div className="text-3xl text-[#94A3B8]">
                          CONTRACT EXTRA SERVICES REQUESTED
                        </div>
                        </div>
                        <Controller
          control={control}
          name="contractExtService"
          render={({ field }) => <EXTselector className="mt-16 ml-28 mb-52" {...field} />}
        />
  </>
}
        
       
        <div className="mt-28 ">
                        <div className="text-3xl text-[#94A3B8]">
                          CONTRACT MESSAGES
                        </div>
                        </div>
        <Controller
          control={control}
          name="contractMsg"
          render={({ field }) => <MSGSelector className="mt-16 ml-28 mb-52" {...field} />}
        />
           <div className="mt-28 ">
                        <div className="text-3xl text-[#94A3B8]">
                          CONTRACT AGREEMENTS
                        </div>
                        </div>
        <Controller
          control={control}
          name="services"
          render={({ field }) => <CustomerDescriptionSelector className="mt-16 ml-28 mb-52" {...field} />}
        />
        <div className="">
                        <div className="text-3xl p-6 text-[#94A3B8]">
                        CONTRACT MONTH DETAILS
                        </div>
                        </div>
        <Controller
          control={control}
          name="details"
          render={({ field }) => <ContactEmailSelector className="mt-16 ml-28 mb-52" {...field} />}
        />
     
        <div className="">
                        <div className="text-3xl text-[#94A3B8]">
                        CONTRACT MONTH SERVICES
                        </div>
                        </div>
         <Controller
          control={control}
          name="servicesMonth"
          render={({ field }) => <ContractMonthSelector className="mt-16 ml-28 mb-72" {...field} />}
        />
      </div>
      

      
      
    </>
  );
}

export default UserTab;
