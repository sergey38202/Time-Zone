import { ButtonHTMLAttributes } from 'react';

export type TButtonSize = 'LARGE' | 'MEDIUM' | 'SMALL';
export type TButtonVariant = 'PRIMARY' | 'SECONDARY' | 'OUTLINED';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    to?: string;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: TButtonVariant;
    size?: TButtonSize;
}