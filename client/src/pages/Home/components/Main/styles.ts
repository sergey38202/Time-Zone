import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 1034px;
  background: ${props => props.theme.colors.gray};
  display: flex;
  column-gap: 35px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1170px) {
    padding: 0 25px;
  }

  @media (max-width: 698px) {
    /* height: auto; */
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 750px;

  @media (max-width: 954px) {
    max-width: 900px;
  }
`;

export const ImageWrapper = styled.div`
  display: block;

  @media (max-width: 698px) {
    display: none;
  }
`;

export const Title = styled.h2`
  font-size: 96px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 26px;
  color: ${props => props.theme.colors.blueDark};

  @media (max-width: 954px) {
    font-size: 60px;
  }

  @media (max-width: 769px) {
    font-size: 42px;
  }
`;

export const Text = styled.div`
    font-size: 17px;
    line-height: 1.6;
    font-weight: 400;
    margin-bottom: 39px;
    color: ${props => props.theme.colors.gray2};
    margin-bottom: 60px;
    padding-right: 50px;
`;

export const Image = styled.div`
  background-size: 100%;
  background-repeat: no-repeat;
  height: 1034px;
  width: 100%;
  max-width: 370px;
`;