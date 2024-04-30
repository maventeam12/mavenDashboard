import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

function Welcome(props) {
  const { t } = useTranslation('examplePage');
  const user = useSelector(selectUser);

  return (
    <div className="p-24 flex flex-col flex-1 justify-items-center items-center justify-center p-16">
          <img
            className="content-center justify-center pt-20"
            src="assets/images/logo/1-removebg-preview.jpg"
            alt="logo"
            style={{ width: '350px', height: '125px',opacity:'0.2'}}
          />
        </div>
  );
}

export default Welcome;
