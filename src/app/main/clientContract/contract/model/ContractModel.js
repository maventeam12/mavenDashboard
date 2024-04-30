import _ from '@lodash';

const CareerModel = (data) =>
  _.defaults(data || {}, {
    id: '',
    startDate: '',
    endDate: '',
    linkToDrive: '',
    clientId: '',
    details: [{ 
      contractId:'',
      serviceName:'',
      quantity:'',
      delivered:'',
      extra:'',
      month:'',
     }],
    services: [{ 
    contractId:'',
    serviceName:'',
    quantity:'',
    isActive:'',
    }],
    servicesMonth: [{ 
      contractId:'',
      serviceName:'',
      quantity:'',
      month:'',
     }],
    contractMsg: [{ 
      contractId:'',
      message:'',
      urgent:'',
      }],
  });

export default CareerModel;
