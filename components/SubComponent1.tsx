import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@material-ui/core';

const SubComponent1: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        name="email"
        control={control}
        defaultValue="example@gmail.com"
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            type="email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email ? errors.email?.message : ''}
          />
        )}
      ></Controller>
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            type="password"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password ? errors.password?.message : ''}
          />
        )}
      ></Controller>
    </>
  );
};

export default SubComponent1;
