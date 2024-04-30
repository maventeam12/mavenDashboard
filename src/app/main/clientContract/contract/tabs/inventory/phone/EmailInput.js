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
  }
);

const defaultValues = {
  serviceName: '',
  quantity: 0,
  delivered: 0,
  extra: 0,
  month: 1,
  clientId: '',
};

function EmailInput(props) {
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
        name="serviceName"
        render={({ field }) => (
          <TextField
            {...field}
            className=""
            label="Service"
            placeholder="..."
            variant="outlined"
            style={{width:'900px'}}
            error={!!errors.serviceName}
            helperText={errors?.serviceName?.message}
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
        name="quantity"
        render={({ field }) => (
          <TextField
            {...field}
            className=""
            label="Quantity"
            placeholder="0"
            variant="outlined"
            style={{width:'400px'}}
            error={!!errors.quantity}
            helperText={errors?.quantity?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>heroicons-solid:clipboard-list</FuseSvgIcon>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      <Controller
        control={control}
        name="delivered"
        render={({ field }) => (
          <TextField
            {...field}
            className=""
            label="Delivered"
            placeholder="0"
            variant="outlined"
            style={{width:'400px'}}
            error={!!errors.delivered}
            helperText={errors?.delivered?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>heroicons-solid:clipboard-copy</FuseSvgIcon>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      <Controller
        control={control}
        name="extra"
        render={({ field }) => (
          <TextField
            {...field}
            className=""
            label="Extra"
            placeholder="0"
            variant="outlined"
            style={{width:'400px'}}
            error={!!errors.extra}
            helperText={errors?.extra?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>heroicons-solid:clipboard</FuseSvgIcon>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
 <Controller
        control={control}
        name="month"
        render={({ field }) => (
          <Select
            className=""
            {...field}
            labelId="month"
            placeholder='true'
            style={{width:'700px'}}
            id="month"
            label="Month"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>heroicons-outline:calendar</FuseSvgIcon>
                </InputAdornment>
              ),
            }}
          >
            
            <MenuItem value={1}>January</MenuItem>
            <MenuItem value={2}>February</MenuItem>
            <MenuItem value={3}>March</MenuItem>
            <MenuItem value={4}>April</MenuItem>
            <MenuItem value={5}>May</MenuItem>
            <MenuItem value={6}>June</MenuItem>
            <MenuItem value={7}>July</MenuItem>
            <MenuItem value={8}>August</MenuItem>
            <MenuItem value={9}>September</MenuItem>
            <MenuItem value={10}>October</MenuItem>
            <MenuItem value={11}>November</MenuItem>
            <MenuItem value={12}>December</MenuItem>

          </Select>
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

export default EmailInput;
