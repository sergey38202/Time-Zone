import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: 'OUTLINED' | 'PRIMARY';
}