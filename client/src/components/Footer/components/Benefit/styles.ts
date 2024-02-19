import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 295px;

  @media (max-width: 960px) {
    max-width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 25px;
`;

export const Title = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 12px;
`;

export const Description = styled.div`
  width: 100%;
  font-size: 16px;
  color: ${props => props.theme.colors.gray3};
  line-height: 30px;
`;