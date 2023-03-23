import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@material-ui/core';

const SubComponent2: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="First Name"
            variant="outlined"
            error={!!errors.firstName}
            helperText={errors.firstName ? errors.firstName?.message : ''}
          />
        )}
      ></Controller>
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Last Name"
            variant="outlined"
            error={!!errors.lastName}
            helperText={errors.lastName ? errors.lastName?.message : ''}
          />
        )}
      ></Controller>
    </>
  );
};

export default SubComponent2;
