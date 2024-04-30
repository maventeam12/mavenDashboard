import TextField from "@mui/material/TextField";

import { Controller, useFormContext } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { MenuItem, Select } from "@mui/material";
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
            fullWidth
            placeholder = 'Your name'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>
                  heroicons-solid:user-circle
                  </FuseSvgIcon>
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Controller
        name="businessName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            id="businessName"
            className="mt-8 mb-16"
            error={!!errors.businessName}
            required
            helperText={errors?.businessName?.message}
            label="Business"
            placeholder = 'Your business name'
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>
                    heroicons-outline:library
                  </FuseSvgIcon>
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
            error={!!errors.email}
            required
            helperText={errors?.email?.message}
            label="Email"
            id="email"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>
                  heroicons-outline:mail
                  </FuseSvgIcon>
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
            error={!!errors.message}
            helperText={errors?.message?.message}
            label="Message"
            id="message"
            multiline
            minRows={9}
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>
                  heroicons-outline:chat-alt-2
                  </FuseSvgIcon>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      <Controller
        name="service"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.service}
            required
            helperText={errors?.service?.message}
            label="Service"
            id="service"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>
                  material-outline:miscellaneous_services
                  </FuseSvgIcon>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      <Controller
        name="phone"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.phone}
            required
            helperText={errors?.phone?.message}
            label="Phone"
            id="phone"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>
                  heroicons-outline:phone
                  </FuseSvgIcon>
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Controller
        control={control}
        name="isDone"
        render={({ field }) => (

          <TextField
          {...field}
          label="Is Done"
          variant="outlined"
          style={{width:'700px'}}
          error={!!errors.isDone}
          helperText={errors?.isDone?.message}
          InputProps={{
                 startAdornment: (
                   <InputAdornment position="start">
                     <FuseSvgIcon size={20}>material-outline:edit_note</FuseSvgIcon>
                   </InputAdornment>
                 ),
               }}
          id="isDone"
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
