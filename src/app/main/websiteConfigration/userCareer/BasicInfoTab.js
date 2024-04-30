import TextField from '@mui/material/TextField';
import _ from '@lodash';
import { Controller, useFormContext } from 'react-hook-form';
import InputAdornment from '@mui/material/InputAdornment';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { MenuItem, Select } from '@mui/material';
const currencies = [
  {
    value: true,
    label: 'Checked',
  },
  {
    value: false,
    label: 'Unchecked',
  },
];

function BasicInfoTab(props) {
  const methods = useFormContext();
  const { control, formState } = methods;
  const { errors } = formState;
  return (
    <div>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Name"
            autoFocus
            id="name"
            variant="outlined"
            placeholder = 'Solicitud name'
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" >
                  <FuseSvgIcon size={20}>heroicons-solid:user-circle</FuseSvgIcon>
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="email"
            label="email"
            type="text"
            required
            placeholder = 'user@example.com'
            error={!!errors.email}
            helperText={errors?.email?.message}
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>heroicons-outline:mail</FuseSvgIcon>
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Controller
        name="career"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="career"
            label="career"
            type="text"
            required
            placeholder = 'career position'
            error={!!errors.career}
            helperText={errors?.email?.career}
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>material-twotone:work</FuseSvgIcon>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      <Controller
        name="message"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="message"
            label="message"
            type="text"
            multiline
            minRows={5}
            placeholder = '...'
            error={!!errors.message}
            helperText={errors?.message?.message}
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>heroicons-outline:chat-alt-2</FuseSvgIcon>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
            <Controller
        control={control}
        name="isChecked"
        render={({ field }) => (

          <TextField
          {...field}
          label="Is Checked"
          variant="outlined"
          style={{width:'700px'}}
          error={!!errors.isChecked}
          helperText={errors?.isChecked?.message}
          InputProps={{
                 startAdornment: (
                   <InputAdornment position="start">
                     <FuseSvgIcon size={20}>material-outline:edit_note</FuseSvgIcon>
                   </InputAdornment>
                 ),
               }}
          id="isChecked"
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
    </div>
  );
}

export default BasicInfoTab;
