import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ADMIN_ROUTES, PUBLIC_ROUTES } from '../../constants/routes';
import Registration from '../../pages/Registration';

import * as SC from "./styles";
import { LOCAL_STORAGE_KEY_TOKEN } from '../../constants/localstorageKeys';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setUser } from '../../store/features/user';
import { axiosWithAuth } from '../../api/axios';
import { IUserDTO } from '../../types/user';
import AdminHeader from '../../components/AdminHeader';

const Home = lazy(() => import('../../pages/Home'));
const Shop = lazy(() => import('../../pages/Shop'));
const About = lazy(() => import('../../pages/About'));
const Contact = lazy(() => import('../../pages/Contact'));
const Cart = lazy(() => import('../../pages/Cart'));
const Login = lazy(() => import('../../pages/Login'));
const Users = lazy(() => import('../../pages/Users'));
const Products = lazy(() => import('../../pages/Products'));

const Main = () => {
    const user = useSelector((state: RootState) => state.user);
    const [isAuth, setIsAuth] = useState<boolean>(false);

    const dispatch = useDispatch();

    const handleGetUser = async () => {
        const response = await axiosWithAuth.get('/auth/profile');
        const userInfo: IUserDTO = response.data;
        
        await dispatch(setUser(userInfo));
      }

    useEffect(() => {
        handleGetUser();
        setIsAuth(!!localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN) && !!user?.data?.email);
    }, [user?.data?.email]);


  console.log('user', user);
    return (
        <SC.Container>
            <Header />
            <SC.Wrapper>
            <Suspense fallback={<div>Loading...</div>}>
                  { user.data?.role !== 'admin' && (
                   <Routes >
                      <Route index element={<Home />} />
                      <Route path={PUBLIC_ROUTES.shop} element={<Shop />} />
                      <Route path={PUBLIC_ROUTES.about} element={<About />} />
                      <Route path={PUBLIC_ROUTES.contact} element={<Contact />} />
                      <Route path={PUBLIC_ROUTES.cart} element={<Cart />} />
                  </Routes>
                  ) }
                { !isAuth && (
                    <Routes>
                    <Route path={PUBLIC_ROUTES.signIn} element={<Login />} />
                    <Route path={PUBLIC_ROUTES.signUp} element={<Registration />} />
                  </Routes>
                ) }
                { user.data?.role === 'admin' && isAuth && (
                    <SC.AdminWrapper>
                        <AdminHeader />  
                        <Routes>
                          <Route path={ADMIN_ROUTES.home} element={<Users />} />
                          <Route path={ADMIN_ROUTES.products} element={<Products />} />
                        </Routes>
                    </SC.AdminWrapper>
                ) }
            </Suspense>
            </SC.Wrapper>
            <Footer />
        </SC.Container>
    );
};

export default Main;
