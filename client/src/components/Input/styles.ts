import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Input = styled.input<{ variant: 'PRIMARY' | 'OUTLINED' }>`
  padding: 15px 20px;
  width: 100%;
  border: ${({ variant }) => variant === 'PRIMARY' && '1px solid gray'};
  border-bottom: ${({ variant }) => variant === 'OUTLINED' && '1px solid gray'};
  font-size: 1rem;
  color: #495057;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;