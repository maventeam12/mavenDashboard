import TextField from "@mui/material/TextField";

import { Controller, useFormContext } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { MenuItem, Select } from "@mui/material";
const currencies = [
  {
    value: true,
    label: 'Admin',
  },
  {
    value: false,
    label: 'User',
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
            placeholder = 'name'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>
                  material-solid:account_circle
                  </FuseSvgIcon>
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Controller
        name="username"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            id="username"
            className="mt-8 mb-16"
            error={!!errors.username}
            required
            helperText={errors?.username?.message}
            label="username"
            placeholder = 'username'
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>
                    heroicons-outline:dots-horizontal
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
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.password}
            helperText={errors?.password?.message}
            label="Password"
            id="password"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>
                    material-solid:password
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
        name="isAdmin"
        render={({ field }) => (

          <TextField
          {...field}
          label="Is Admin"
          variant="outlined"
          style={{width:'700px'}}
          error={!!errors.isAdmin}
          helperText={errors?.isAdmin?.message}
          InputProps={{
                 startAdornment: (
                   <InputAdornment position="start">
                     <FuseSvgIcon size={20}>material-outline:edit_note</FuseSvgIcon>
                   </InputAdornment>
                 ),
               }}
          id="isAdmin"
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
