import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto 170px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  border-bottom: 2px solid ${props => props.theme.colors.gray};
`;

export const HeaderText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #828bb2;
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 45px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;