import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 50px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
  color: ${props => props.theme.colors.black0};
  display: inline-block;
  position: relative;
  padding-left: 68px;

  &::before {
    position: absolute;
    content: "";
    width: 54px;
    height: 2px;
    background: ${props => props.theme.colors.redLight};
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const Text = styled.div`
  width: 100%;
  color: #464d65;
  font-size: 14px;
  line-height: 30px;
`;