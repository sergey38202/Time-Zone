import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1160px) {
    padding: 0 20px;
  }

  @media (max-width: 835px) {
    flex-direction: column;
    row-gap: 25px;
  }
`;

export const Text = styled.div`
  color: #888888;
  font-weight: 300;
  font-size: 16px;
  line-height: 2;

  & > img {
    margin: 0 10px;
  }
`;

export const InfoLink = styled.span`
  color: ${props => props.theme.colors.red};
  margin-left: 10px;
`;

export const SocialNetworkWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 25px;
`;