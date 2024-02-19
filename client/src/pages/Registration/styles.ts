import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 100%;
  max-width: 550px;
  margin: 0 auto 170px;

  @media (max-width: 555px) {
    padding: 0 25px;
  }
`;

export const Title = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 100%;
  font-size: 26px;
  font-weight: 700;
  color: ${props => props.theme.colors.blueDark};
`;