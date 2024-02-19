import React, { useEffect, useState } from "react";

import UserIcon from "../../assets/user.svg";
import BagIcon from "../../assets/bag.svg";
import BurgerMenuIcon from "../../assets/burger-menu-svgrepo-com.svg";
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import { PUBLIC_ROUTES } from '../../constants/routes';

import { HEADER_LINKS } from './constsants';
import { axiosWithAuth } from '../../api/axios';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, setUser } from '../../store/features/user';
import { IUserDTO } from '../../types/user';
import { RootState } from '../../store';

import * as SC from "./styles";
import { LOCAL_STORAGE_KEY_TOKEN } from '../../constants/localstorageKeys';

const Header = () => {
  const user = useSelector((state: RootState) => state.user);

  const [isUserSettingsOpen, setIsUserSettingsOpen] = useState<boolean>(false);
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleToggleUserSettings = () => {
    setIsUserSettingsOpen((prev) => !prev);
  };

  const handleToggleMenu = () => {
    setIsShowMenu((prev) => !prev);
  };

  const handleGetUser = async () => {
    const response = await axiosWithAuth.get('/auth/profile');
    const userInfo: IUserDTO = response.data;
    
    await dispatch(setUser(userInfo));
  }

  const handleLogOut = () => {
    console.log('clicked');
    localStorage.removeItem(LOCAL_STORAGE_KEY_TOKEN);
    dispatch(clearUser());
    navigation(PUBLIC_ROUTES.home);
  }

  useEffect(() => {
    handleGetUser();
    setIsAuth(!!user?.data?.email);
  }, [user?.data?.email]);

  console.log('USER', user);

    return (
        <SC.Container>
            <Link to={PUBLIC_ROUTES.home}>
              <SC.Title>Time <span>Zone</span></SC.Title>
            </Link>
            <SC.LinkWrapper>
              { HEADER_LINKS.map((link) => <SC.HeaderLink to={link.path} key={link.id}>{ link.title }</SC.HeaderLink>) }
            </SC.LinkWrapper>
            <SC.RightSide>
            { isAuth ? (
                <SC.IconWrapper>
                      <img width={25} height={25} src={UserIcon} alt="User" onClick={handleToggleUserSettings} />
                      { isUserSettingsOpen && (
                        <SC.UserSetting>
                         <SC.UserSettingBtn onClick={handleLogOut}>Log out</SC.UserSettingBtn>
                        </SC.UserSetting>
                      ) }
                    <Link to={PUBLIC_ROUTES.cart}>
                      <img width={25} height={25} src={BagIcon} alt="Bag" />
                    </Link>
                </SC.IconWrapper>
            ) : <Button to={PUBLIC_ROUTES.signIn} size="SMALL" variant="PRIMARY">Login</Button> }
            </SC.RightSide>
            <SC.BurgerMenuWrapper onClick={handleToggleMenu}>
              <img src={BurgerMenuIcon} alt="Burger menu" width={45} height={45} />
            </SC.BurgerMenuWrapper>
            <SC.MenuMobileWrapper show={isShowMenu}>
            { HEADER_LINKS.map((link) => <SC.HeaderLink to={link.path} key={link.id}>{ link.title }</SC.HeaderLink>) }
            { isAuth ? (
                <SC.IconWrapper>
                      <img width={25} height={25} src={UserIcon} alt="User" onClick={handleToggleUserSettings} />
                      { isUserSettingsOpen && (
                        <SC.UserSetting>
                         <SC.UserSettingBtn onClick={handleLogOut}>Log out</SC.UserSettingBtn>
                        </SC.UserSetting>
                      ) }
                    <Link to={PUBLIC_ROUTES.cart}>
                      <img width={25} height={25} src={BagIcon} alt="Bag" />
                    </Link>
                </SC.IconWrapper>
            ) : <Button to={PUBLIC_ROUTES.signIn} size="LARGE" variant="PRIMARY">Login</Button> }
            </SC.MenuMobileWrapper>
        </SC.Container>
    );
}

export default Header;