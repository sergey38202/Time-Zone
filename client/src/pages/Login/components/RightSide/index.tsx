import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import { axiosPublic } from '../../../../api/axios';
import { IUserDTO } from '../../../../types/user';
import { LOCAL_STORAGE_KEY_TOKEN } from '../../../../constants/localstorageKeys';
import { setUser } from '../../../../store/features/user';
import { PUBLIC_ROUTES } from '../../../../constants/routes';

import * as SC from "./styles";

const RightSide = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleGetUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axiosPublic.post('/auth/login', formData);
      const user:IUserDTO = response.data.user;
      console.log('Response:', response.data);

      localStorage.setItem(LOCAL_STORAGE_KEY_TOKEN, response.data?.token);

      dispatch(setUser(user));
      navigation(PUBLIC_ROUTES.home);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };  

    return (
        <SC.Container>
            <SC.Title>Welcome Back ! <br/>Please Sign in now</SC.Title>
            <SC.Form onSubmit={handleLogin}>
                <Input type="email" name="email" value={formData.email} onChange={handleGetUserData} />
                <Input type="password" name="password" value={formData.password} onChange={handleGetUserData} />
                <div style={{ alignItems: 'center' }}>
                  <label htmlFor="rememberMe">Remember Me</label>
                  <SC.CheckBox type="checkbox" id="rememberMe" defaultChecked={false} />
                </div>
                <Button type="submit" variant="PRIMARY" style={{ maxWidth: '100%' }}>LOG IN</Button>
                <SC.ForgotPasswordLink to="/">Forgot Password</SC.ForgotPasswordLink>
            </SC.Form>
        </SC.Container>
    );
}

export default RightSide;