import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
`;

export const AdminHeaderLink = styled(Link)`
  font-size: 32px;
  font-weight: 700px;
`;