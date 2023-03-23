// index.tsx
import { FC } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import SubComponent1 from '../components/SubComponent1';
import SubComponent2 from '../components/SubComponent2';

export interface IFormInputs {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const schema: any = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

const Home: FC = () => {
  // @ts-ignore
  const methods = useForm<IFormInputs>({ resolver: yupResolver(schema) });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log(data, 'data');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>React Hook Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* @ts-ignore */}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <SubComponent1 />
              <SubComponent2 />
              <input type="submit" />
            </div>
          </form>
        </FormProvider>
      </main>
    </div>
  );
};

export default Home;
