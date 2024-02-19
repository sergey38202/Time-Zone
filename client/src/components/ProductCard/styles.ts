import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 19px;
`;

export const ImageHeart = styled.img<{ show: boolean }>`
  position: absolute;
  z-index: 1;
  display: ${({ show }) => show ? 'block' : 'none'};
  top: 25px;
  right: 25px;
  transition: all .5s ease;
`;

export const Image = styled.div<{ image: string }>`
  position: relative;
  width: 100%;
  max-width: 360px;
  height: 379px;
  background-image: ${({ image }) => `url('${image}')`};
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 758px) {
    margin: 0 auto;
  }
`;

export const CartButton = styled.button<{ show: boolean }>`
  position: absolute;
  width: 100%;
  padding: ${({ show }) => show ? '20px' : '0'};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  height: ${({ show }) => show ? '20%' : '3px'};
  transition: all .5s ease;
  border: none;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.colors.blueDark};
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 24px;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.colors.gray4};
  font-weight: 500;
`;