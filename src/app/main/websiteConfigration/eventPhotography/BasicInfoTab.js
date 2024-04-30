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
        name="eventId"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.eventId}
            required
            helperText={errors?.eventId?.message}
            label="event ID"
            autoFocus
            id="eventId"
            variant="outlined"
            placeholder = 'Event ID'
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>material-outline:camera</FuseSvgIcon>
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
