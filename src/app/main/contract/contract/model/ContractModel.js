import _ from '@lodash';

const CareerModel = (data) =>
  _.defaults(data || {}, {
    id: '',
    startDate: '',
    endDate: '',
    linkToDrive: '',
    clientId: '',
    months:'',
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
      urgent:true,
      }],
      contractExtService: [{ 
        contractId:'',
        serviceName:'',
        }],
  });

export default CareerModel;
