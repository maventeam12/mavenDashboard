import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import reducer from '../store';
import EventsHeader from './EventsHeader';
import EventsTable from './EventsTable';

function Events() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <FusePageCarded
      header={<EventsHeader />}
      content={<EventsTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default withReducer('websiteConfiguration', reducer)(Events);
