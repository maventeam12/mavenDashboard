import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import _ from '@lodash';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectUser } from 'app/store/userSlice';
import { removeUserCareer, saveUserCareer, addUserCareer } from '../store/userCareerSlice';

function BlogHeader(props) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const methods = useFormContext();
  const { formState, watch, getValues } = methods;
  const { isValid, dirtyFields } = formState;
  const title = watch('name');
  const theme = useTheme();
  const navigate = useNavigate();

  function handleSaveProduct() {
    const a = getValues().id;
    if (!a) {
      dispatch(
        addUserCareer({
          data: getValues(),
          access_token: window.localStorage.getItem('access_token'),
          email: user.email,
          id: user.id,
          username: user.username,
        })
      ).then(() => {
        navigate('/websiteConfiguration/careersSolicitudes');
      });
    } else {
      dispatch(
        saveUserCareer({
          data: getValues(),
          access_token: window.localStorage.getItem('access_token'),
          email: user.email,
          id: user.id,
          username: user.username,
        })
      ).then(() => {
        navigate('/websiteConfiguration/careersSolicitudes');
      });
    }
  }

  function handleRemoveremoveUserCareer() {
    dispatch(
      removeUserCareer({
        access_token: window.localStorage.getItem('access_token'),
          email: user.email,
          id: user.id,
          username: user.username,
          userCareerId: getValues().id,
      })
    ).then(() => {
      navigate('/websiteConfiguration/careersSolicitudes');
    });
  }

  return (
    <div className="flex flex-col sm:flex-row flex-1 w-full items-center justify-between space-y-8 sm:space-y-0 py-32 px-24 md:px-32">
      <div className="flex flex-col items-center sm:items-start space-y-8 sm:space-y-0 w-full sm:max-w-full min-w-0">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          <Typography
            className="flex items-center sm:mb-12"
            component={Link}
            role="button"
            to="/websiteConfiguration/careersSolicitudes"
            color="inherit"
          >
            <FuseSvgIcon size={20}style={{color:'#f4b231'}}>
              {theme.direction === 'ltr'
                ? 'heroicons-outline:arrow-sm-left'
                : 'heroicons-outline:arrow-sm-right'}
            </FuseSvgIcon>
            <span className="flex mx-4 font-medium" style={{color:'#f4b231'}}>Solicitudes</span>
          </Typography>
        </motion.div>

        <div className="flex items-center max-w-full">
          <motion.div
            className="flex flex-col items-center sm:items-start min-w-0 mx-8 sm:mx-16"
            initial={{ x: -20 }}
            animate={{ x: 0, transition: { delay: 0.3 } }}
          >
            <Typography className="text-16 sm:text-20 truncate font-semibold">
              {title || 'New Solicitud'}
            </Typography>
            <Typography variant="caption" className="font-medium">
              Solicitud Detail
            </Typography>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
      >
        <Button
          className="whitespace-nowrap mx-4"
          variant="contained"
          color="secondary"
          onClick={handleRemoveremoveUserCareer}
          startIcon={<FuseSvgIcon className="hidden sm:flex">heroicons-outline:trash</FuseSvgIcon>}
        >
          Remove
        </Button>
        <Button
          className="whitespace-nowrap mx-4"
          variant="contained"
          color="secondary"
          disabled={_.isEmpty(dirtyFields) || !isValid}
          onClick={handleSaveProduct}
        >
          Save
        </Button>
      </motion.div>
    </div>
  );
}

export default BlogHeader;
