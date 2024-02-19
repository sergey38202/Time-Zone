import styled from 'styled-components';

import BackgroundImage from "../../../assets/background.png.webp";

export const Container = styled.div`
  margin-bottom: 135px;
`;

export const MainBlock = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 70px;
  font-weight: 700;
  text-transform: capitalize;
  color: ${props => props.theme.colors.blueDark};
`;
