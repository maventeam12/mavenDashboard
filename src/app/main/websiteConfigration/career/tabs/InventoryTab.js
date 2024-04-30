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
import { Select, MenuItem, Checkbox } from '@mui/material';
import { selectUser } from 'app/store/userSlice';
import Autocomplete from '@mui/material/Autocomplete/Autocomplete';
import {
  addCareer,
  getCareer,
  newCareer,
  removeCareer,
  selectCareerDB,
  saveCareer,
} from '../../store/careerSlice';
import ContactEmailSelector from './inventory/phone/ContactEmailSelector';
import CustomerDescriptionSelector from './inventory/description/CustomerDescriptionSelector';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
      position: yup
      .string()
      .required('You must enter the position')
      .min(3, 'The position name must be at least 3 characters'),
      description: yup
      .string()
      .required('You must enter the description')
      .min(3, 'The description name must be at least 3 characters'),
});

function UserTab(props) {
  const contact = useSelector(selectCareerDB);
  const routeParams = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const { careerId } = routeParams;

  const { control, watch, reset, handleSubmit, formState, getValues } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const form = watch();
  useEffect(() => {
    if (routeParams.careerId === 'new') {
      dispatch(newCareer());
    } else {
      dispatch(
        getCareer({
          access_token: window.localStorage.getItem('access_token'),
            email: user.email,
            id: user.id,
            username: user.username,
            careerId,
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
      if (routeParams.careerId === 'new') {
        dispatch(
          addCareer({
            data: getValues(),
            access_token: window.localStorage.getItem('access_token'),
          email: user.email,
          id: user.id,
          username: user.username,
          })
        ).then(() => {
          navigate(`/websiteConfiguration/careers`);
        });
      } else {
        dispatch(
          saveCareer({
            data: getValues(),
          access_token: window.localStorage.getItem('access_token'),
          email: user.email,
          id: user.id,
          username: user.username,
          })
        ).then(() => {
          navigate(`/websiteConfiguration/careers`);
        });
      }
    
  }

  function handleRemoveContact() {
    dispatch(
      removeCareer({
        access_token: window.localStorage.getItem('access_token'),
          email: user.email,
          id: user.id,
          username: user.username,
          careerId: getValues().id,
      })
    ).then(() => {
      navigate('/websiteConfiguration/careers');
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
        {routeParams.careerId !== 'new' && (
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
        <Controller
          control={control}
          name="position"
          render={({ field }) => (
            <TextField
              className="mt-32"
              {...field}
              label="Position"
              placeholder="position"
              id="position"
              error={!!errors.position}
              helperText={errors?.position?.message}
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
          name="description"
          render={({ field }) => (
            <TextField
              className="mt-32"
              {...field}
              label="Description"
              placeholder="description"
              id="description"
              error={!!errors.description}
              helperText={errors?.description?.message}
              variant="outlined"
              required
              style={{width:'700px'}}
              multiline
              minRows={4}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-outline:menu-alt-1</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        <Controller
          control={control}
          name="responsabilities"
          render={({ field }) => <ContactEmailSelector className="mt-32" {...field} />}
        />
        <Controller
          control={control}
          name="skills"
          render={({ field }) => <CustomerDescriptionSelector className="mt-32" {...field} />}
        />
      </div>

      
    </>
  );
}

export default UserTab;
