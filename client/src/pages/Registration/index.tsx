import React, { useState } from 'react';
import Page from '../../layouts/Page';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { PUBLIC_ROUTES } from '../../constants/routes';
import * as SC from './styles';
import { axiosPublic } from '../../api/axios';
import { IRegistrationFormDataState } from './types';
import { LOCAL_STORAGE_KEY_TOKEN } from '../../constants/localstorageKeys';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/features/user';
import { IUserDTO } from '../../types/user';
import { RootState } from '../../store';

const Registration = () => {
  const user = useSelector((state: RootState) => state.user);

  const [formData, setFormData] = useState<IRegistrationFormDataState>({
    email: '',
    username: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleGetUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axiosPublic.post('/auth/register', formData);
      const user:IUserDTO = response.data.user;
      console.log('Response:', response.data);

      localStorage.setItem(LOCAL_STORAGE_KEY_TOKEN, response.data?.token);

      dispatch(setUser(user));
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  console.log('user', user);

  return (
    <Page title="Sign Up">
      <SC.Form onSubmit={handleRegister}>
        <SC.Title>Registration</SC.Title>
        <Input
          type="email"
          name="email"
          placeholder="Enter please your Email..."
          onChange={handleGetUserData}
          value={formData.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter please your Password"
          onChange={handleGetUserData}
          value={formData.password}
        />
        <Input
          type="text"
          name="username"
          placeholder="Enter please your Username"
          onChange={handleGetUserData}
          value={formData.username}
        />
        <Button type="submit" variant="PRIMARY" style={{ maxWidth: '100%' }}>
          Sign Up
        </Button>
        <Button to={PUBLIC_ROUTES.signIn} variant="PRIMARY" style={{ maxWidth: '100%' }}>
          Already have account?
        </Button>
      </SC.Form>
    </Page>
  );
};

export default Registration;
