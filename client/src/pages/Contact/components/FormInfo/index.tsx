import React, { FC } from 'react';

import { IFormInfoProps } from './types';
import * as SC from "./styles";

const FormInfo: FC<IFormInfoProps> = (props) => {
    const { image, title, info } = props;

    return (
        <SC.Container >
            <img src={image} width={27} height={27} alt="icon" />
            <div>
                <SC.Title>{ title }</SC.Title>
                <SC.Text>{ info }</SC.Text>
            </div>
        </SC.Container>
    );
}

export default FormInfo;