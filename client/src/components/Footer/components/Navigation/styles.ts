import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto 50px;
  display: flex;

  @media (max-width: 1160px) {
    padding: 0 25px;
  }

  @media (max-width: 790px) {
    flex-direction: column;
    row-gap: 40px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 262px;
  margin-right: 50px;
`;

export const Title = styled.div`
  font-size: 50px;
  margin-bottom: 50px;
`;

export const Info = styled.div`
  font-size: 16px;
  color: #868c98;
  line-height: 1.8;
`;

export const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 490px) {
    flex-direction: column;
    row-gap: 30px;
    justify-content: center;
    align-items: center;
  }
`;