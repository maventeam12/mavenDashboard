import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';

const Root = styled('div')(({ theme }) => ({
  '& .username, & .email': {
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },

  '& .avatar': {
    background: theme.palette.background.default,
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
    bottom: 0,
    '& > img': {
      borderRadius: '50%',
    },
  },
}));

function UserNavbarHeader(props) {
  const user = useSelector(selectUser);

  return (
    <Root className="user relative flex flex-col items-center justify-center p-16 pb-14 shadow-0">
      <div className="flex items-center justify-center mb-24">
        {
          user.role[0]==='client'?
          (
            user.logoFile === '' ?
            <img src={`assets/images/logo/sss.png`}style={{padding:'5px',borderRadius:'50%'}} className='w-144 h-144'/>
            :
            <img src={`https://www.api.mavenevents.ae/client/${user.logoFile}`}style={{padding:'5px'}}/>
  )
         
          :
          <img src='assets/images/logo/1-removebg-preview.jpg'style={{padding:'5px'}}/>
        }
        
      </div>
      <Typography className="username text-14 whitespace-nowrap font-medium">
        {user.data.username}
      </Typography>
      <Typography className="email text-13 whitespace-nowrap font-medium" color="text.secondary">
        {user.data.email}
      </Typography>
    </Root>
  );
}

export default UserNavbarHeader;
