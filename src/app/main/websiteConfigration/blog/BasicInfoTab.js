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
        name="title"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.title}
            required
            helperText={errors?.title?.message}
            label="Title"
            autoFocus
            id="title"
            variant="outlined"
            placeholder = 'Blog title'
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" style = {{transform: 'rotate(180deg)' }}>
                  <FuseSvgIcon size={20}>heroicons-outline:menu-alt-3</FuseSvgIcon>
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
            required
            multiline
            minRows={5}
            placeholder = 'This part go after the title (3-5 lines)'
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
      <Controller
        name="content"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="content"
            label="Content"
            type="content"
            placeholder = 'This part go after the Description (10-50 lines)'
            multiline
            required
            minRows={10}
            error={!!errors.content}
            helperText={errors?.content?.message}
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>heroicons-outline:menu-alt-2</FuseSvgIcon>
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
