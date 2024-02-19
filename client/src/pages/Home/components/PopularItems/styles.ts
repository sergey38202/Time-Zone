import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 170px;

  @media (max-width: 650px) {
    padding: 0 20px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 653px;
  margin: 0 auto 50px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  color: ${props => props.theme.colors.black};
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.colors.gray7};
  font-size: 16px;
  line-height: 30px;
`;

export const ProductsWrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 50px;
  grid-column-gap: 30px;

  @media (max-width: 1150px) {
    padding: 0 20px;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 650px) {
    padding: 0%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`