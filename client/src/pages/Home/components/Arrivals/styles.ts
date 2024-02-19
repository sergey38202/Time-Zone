import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 200px;
  margin-bottom: 250px;

  @media (max-width: 698px) {
    padding-top: 40px;
  margin-bottom: 300px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;

  @media (max-width: 698px) {
    padding: 0 20px;
  }
`;

export const Title = styled.div`
  color: ${props => props.theme.colors.black};
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const ProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 59px;

  @media (max-width: 600px) {
    flex-direction: column;
    row-gap: 20px;
  }
`;

export const Product = styled.div`
  width: 100%;
  max-width: 360px;
  height: 488px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-bottom: 30px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: all .3s ease;

  &:hover {
    transform: scale(1.2);
    transition: all .3s ease;
  }
`;

export const ProductTitle = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${props => props.theme.colors.gray4};
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 12px;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${props => props.theme.colors.red};
  font-size: 18px;
  font-weight: 500;
`;