import TextField from '@mui/material/TextField';
import _ from '@lodash';
import { Controller, useFormContext } from 'react-hook-form';
import InputAdornment from '@mui/material/InputAdornment';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';


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
            label="Event name"
            autoFocus
            id="name"
            variant="outlined"
            placeholder = 'Event name'
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>heroicons-outline:bookmark</FuseSvgIcon>
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="description"
            label="Description"
            type="text"
            multiline
            minRows={5}
            placeholder = 'This part go after the name (1-3 lines)'
            error={!!errors.description}
            helperText={errors?.description?.message}
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>heroicons-outline:menu-alt-1</FuseSvgIcon>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
}

export default BasicInfoTab;
