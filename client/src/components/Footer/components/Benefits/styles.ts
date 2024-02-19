import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 150px;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.red};

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;