import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectUser } from 'app/store/userSlice';
import { removeCareer, saveCareer, addCareer } from '../store/careerSlice';

function ProductHeader(props) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const methods = useFormContext();
  const { formState, watch, getValues } = methods;
  const name = watch('position');
  const theme = useTheme();
  const navigate = useNavigate();
  const routeParams = useParams();

  function handleSaveProduct() {
    if (routeParams.careerId === 'new') {
      dispatch(
        addCareer({
          data: getValues(),
          access_token: window.localStorage.getItem('access_token'),
          email: user.email,
          id: user.id,
          username: user.username,
        })
      );
    } else {
      dispatch(
        saveCareer({
          data: getValues(),
          access_token: window.localStorage.getItem('access_token'),
          email: user.email,
          id: user.id,
          username: user.username,
        })
      );
    }
  }

  function handleRemoveProduct() {
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
            to="/websiteConfiguration/careers"
            color="inherit"
          >
            <FuseSvgIcon style={{color:'#f4b231'}} size={20}>
              {theme.direction === 'ltr'
                ? 'heroicons-outline:arrow-sm-left'
                : 'heroicons-outline:arrow-sm-right'}
            </FuseSvgIcon>
            <span className="flex mx-4 font-medium"style={{color:'#f4b231'}}>Careers</span>
          </Typography>
        </motion.div>

        <div className="flex items-center max-w-full">
          <motion.div
            className="flex flex-col items-center sm:items-start min-w-0 mx-8 sm:mx-16"
            initial={{ x: -20 }}
            animate={{ x: 0, transition: { delay: 0.3 } }}
          >
            <Typography className="text-16 sm:text-20 truncate font-semibold">
              {name || 'New Career'}
            </Typography>
            <Typography variant="caption" className="font-medium">
            Career Detail
            </Typography>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProductHeader;
