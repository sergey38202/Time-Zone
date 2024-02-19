import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 70px;
  background-image: linear-gradient(90deg, #B08EAD 0%, #4B3049 64%, #B08EAD 100%);
  background-size: 200% auto;
`;

export const Wrapper = styled.div`
  text-align: center;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 35px;
  color: ${props => props.theme.colors.white};
  margin-bottom: 17px;
`;

export const Info = styled.div`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.colors.white};
  line-height: 25px;
  font-size: 16px;
  margin-bottom: 40px;
`;