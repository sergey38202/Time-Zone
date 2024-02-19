import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { TButtonSize, TButtonVariant } from './types';

const buttonStyles = css`
  position: relative;
  width: 100%;
  max-width: 165px;
  padding: 15px 30px;
  background: ${props => props.theme.colors.grayMedium};
  border: none;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.03em;
  overflow: hidden;
  cursor: pointer;
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #ff2020;
    z-index: -1;
    transform-origin: 0 0;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const largeStyle = css`
  max-width: 259px;
`;

const mediumStyle = css`
  max-width: 198px;
`;

const secondaryStyle = css`
  background: red;
`;

const outlinedStyle = css`
  background: none;
`;

export const StyledButton = styled.button<{ size?: TButtonSize, variant?: TButtonVariant }>`
  ${buttonStyles}
  ${({ size }) => size === 'LARGE' ? largeStyle : size === 'MEDIUM' ? mediumStyle : null};
  ${({ variant }) => variant === 'SECONDARY' ? secondaryStyle : variant === 'OUTLINED' ? outlinedStyle : null }
`;

export const StyledLink = styled(Link)<{ size?: TButtonSize, variant?: TButtonVariant }>`
  ${buttonStyles}
  ${({ size }) => size === 'LARGE' ? largeStyle : size === 'MEDIUM' ? mediumStyle : null};
  ${({ variant }) => variant === 'SECONDARY' ? secondaryStyle : variant === 'OUTLINED' ? outlinedStyle : null }
`;
