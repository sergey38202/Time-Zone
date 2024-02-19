import styled, { css } from 'styled-components';

const inputStyles = css`
  border: 1px solid #e5e6e9;
  padding-left: 18px;
  font-size: 13px;
  background: transparent;
`;

export const Container = styled.div`
  margin-bottom: 170px;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
`;

export const Title = styled.div`
  margin-bottom: 20px;
  font-size: 27px;
  font-weight: 600;
  color: ${props => props.theme.colors.blueDark};

  @media (max-width: 1040px) {
    text-align: center;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 1040px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 40px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 750px;
  row-gap: 40px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 190px;
  ${inputStyles};
  padding-top: 15px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 35px;

  & > input {
    width: 100%;
    max-width: 360px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  ${inputStyles}
`;