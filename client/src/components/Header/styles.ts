import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 40px;
  background: ${props => props.theme.colors.white};
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.blueDark};
  font-size: 60px;
  font-weight: 500;

  & > span {
    color: ${props => props.theme.colors.red};
  }

  @media (max-width: 410px) {
      font-size: 40px;
    }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 50px;

  @media (max-width: 840px) {
    display: none;
  }
`;

export const RightSide = styled.div`
  display: block;

  @media (max-width: 840px) {
    display: none;
  }
`;

export const BurgerMenuWrapper = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 840px) {
      display: block;
    }
`;

export const HeaderLink = styled(Link)`
  color: ${props => props.theme.colors.blueDark};
  font-weight: 500;
  transition: all 0.5s ease;

  &:hover {
    color: ${props => props.theme.colors.red};
    transition: all 0.5s ease;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 45px;
`;

export const UserSetting = styled.div`
  position: absolute;
  top: 40px;
  left: -30px;
  width: 100%;
  max-width: 500px;
  height: 200px;
  padding: 15px;
  background: ${props => props.theme.colors.white};
`;

export const UserSettingBtn = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: gray;
`;

export const MenuMobileWrapper = styled.div<{ show?: boolean }>`
  position: absolute;
  top: 70%;
  left: 0;
  display: ${({ show }) => show ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  min-height: 200px;
  width: 100%;
  z-index: 1;
  background: ${props => props.theme.colors.white};
`;