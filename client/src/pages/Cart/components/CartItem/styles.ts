import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;

export const Title = styled.div`
  color: ${props => props.theme.colors.gray7};
  font-size: 16px;
  line-height: 30px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 45px;
`;

export const Info = styled.div`
  font-size: 14px;
  color: #415094;
  font-weight: 500;
`;

export const Count = styled.div`
  width: 100%;
  max-width: 45px;
`;