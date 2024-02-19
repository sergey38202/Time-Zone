import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 130px;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding-bottom: 170px;

  > div:nth-child(even) {
     flex-direction: row-reverse;
  }

  @media (max-width: 1182px) {
    padding: 0 25px;
  }

  @media (max-width: 840px) {
    padding-bottom: 50px;
  }
`;