import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 60px;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto 170px;

  @media (max-width: 1170px) {
    padding: 0 25px;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 40px;

   br {
    display: none;
   }
  }
`;