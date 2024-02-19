import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 840px) {
    flex-direction: column;
    row-gap: 60px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 458px;
`;

export const Title = styled.div`
  color: ${props => props.theme.colors.black};
  font-size: 56px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 40px;
`;

export const Description = styled.div`
  color: ${props => props.theme.colors.gray7};
  margin-bottom: 50px;
  font-size: 17px;
  line-height: 30px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 555px;
  height: 549px;

  @media (max-width: 840px) {
    display: none;
  }
`;