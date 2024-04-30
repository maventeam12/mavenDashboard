import _ from '@lodash';

const CareerModel = (data) =>
  _.defaults(data || {}, {
    id: '',
    position: '',
    description: '',
    responsabilities: [{ description: '' }],
    skills: [{ description: '' }],
  });

export default CareerModel;
