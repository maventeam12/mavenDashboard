import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import { forwardRef } from 'react';
import clsx from 'clsx';
import DescriptionInput from './DescriptionInput';
import CareerModel from '../../../model/CareerModel';

const CustomerDescriptionSelector = forwardRef(({ value, onChange, className }, ref) => {
  return (
    <div className={clsx('w-full', className)} ref={ref}>
      {value.map((item, index) => (
        <DescriptionInput
          value={item}
          key={index}
          onChange={(val) => {
            onChange(value.map((_item, _index) => (index === _index ? val : _item)));
          }}
          onRemove={(val) => {
            onChange(value.filter((_item, _index) => index !== _index));
          }}
          hideRemove={value.length === 1}
        />
      ))}
      <Button
        className="group inline-flex items-center mt-2 -ml-4 py-2 px-4 rounded cursor-pointer"
        onClick={() => onChange([...value, CareerModel().skills[0]])}
        style={{color:'#f4b231'}}
      >
        <FuseSvgIcon size={20}>heroicons-solid:plus-circle</FuseSvgIcon>

        <span className="ml-8 font-medium text-secondary underline">
          Add a Skill
        </span>
      </Button>
    </div>
  );
});

export default CustomerDescriptionSelector;
