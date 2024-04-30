import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import IconButton from '@mui/material/IconButton';
import { useEffect } from 'react';
import { MenuItem, Select } from '@mui/material';

const schema = yup.object().shape(
  {
    message: yup
    .string()
    .required('You must enter the message')
    .min(3, 'The message must be at least 3 characters'),
  }
);
const currencies = [
  {
    value: true,
    label: 'Urgent (Red Color)',
  },
  {
    value: false,
    label: 'Not Urgent (Green Color)',
  },
];
const defaultValues = {
  message: '',
  urgent:true,
};

function DescriptionInput(props) {
  const { value, hideRemove } = props;

  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset(value);
  }, [reset, value]);
  

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit(data) {
    props.onChange(data);
  }

  return (
    <form className="flex space-x-16 mb-16" onChange={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="message"
        render={({ field }) => (
          <TextField
            {...field}
            className=""
            label="Message"
            placeholder="..."
            variant="outlined"
            style={{width:'700px'}}
            error={!!errors.message}
            helperText={errors?.message?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>material-outline:miscellaneous_services</FuseSvgIcon>
                </InputAdornment>
              ),
            }}
          />
        )}
      />

<Controller
        control={control}
        name="urgent"
        render={({ field }) => (

          <TextField
          {...field}
          label="Is urgent"
          variant="outlined"
          style={{width:'700px'}}
          error={!!errors.urgent}
          helperText={errors?.urgent?.message}
          InputProps={{
                 startAdornment: (
                   <InputAdornment position="start">
                     <FuseSvgIcon size={20}>material-outline:edit_note</FuseSvgIcon>
                   </InputAdornment>
                 ),
               }}
          id="Urgent"
          select
          SelectProps={{
            native: true,
          }}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value} >
              {option.label}
            </option>
          ))}
        </TextField>
        )}
      />

      {!hideRemove && (
        <IconButton onClick={props.onRemove}style={{color:'#f4b231'}}>
          <FuseSvgIcon size={20}>heroicons-solid:trash</FuseSvgIcon>
        </IconButton>
      )}
    </form>
  );
}

export default DescriptionInput;
