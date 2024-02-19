import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 135px;
`;

export const ProductsWrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 50px;
  grid-column-gap: 30px;

  @media (max-width: 650px) {
    padding: 0 25px;
    grid-template-columns: 1fr;
  }
`;