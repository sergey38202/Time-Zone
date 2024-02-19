import React, { FC } from 'react';

import { IInputProps } from './types';
import * as SC from "./styles";

const Input: FC<IInputProps> = (props) => {
    const { variant = 'PRIMARY', ...restProps } = props;

    return (
        <SC.Container>
            <SC.Input 
             variant={variant} 
             {...restProps} 
            />
        </SC.Container>
    );
}

export default Input;