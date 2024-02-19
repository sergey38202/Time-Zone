import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 555px;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 26px;
  line-height: 36px;
  font-weight: 700;
  margin-bottom: 80px;
  color: ${props => props.theme.colors.blueDark};

  @media (max-width: 760px) {
    text-align: center;
  }

  @media (max-width: 450px) {
    margin-bottom: 40px;
    font-size: 21px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const CheckBox = styled.input`
  margin-left: 10px;
`;

export const ForgotPasswordLink = styled(Link)`
  text-align: right;
  color: ${props => props.theme.colors.gray7};
  text-transform: capitalize;
`;