import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import reducer from '../store';
import ServicesHeader from './ServicesHeader';
import BlogsTable from './ServicesTable';

function Services() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <FusePageCarded
      header={<ServicesHeader />}
      content={<BlogsTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default withReducer('websiteConfiguration', reducer)(Services);
