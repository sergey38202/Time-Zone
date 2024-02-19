import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const Title = styled.div`
  color: ${props => props.theme.colors.black};
  font-size: 20px;
  margin-bottom: 29px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const LinkWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const NavigationLink = styled(Link)`
  color: #868c98;
  font-weight: 300;
  transition: .5s ease all;

  &:hover {
    margin-left: 3px;
    color: ${props => props.theme.colors.red};
    transition: .5s ease all;
  }
`;