import React, { FC } from 'react';

import { IInfoProps } from './types';
import * as SC from "./styles";

const Info: FC<IInfoProps> = (props) => {
    const { title, text1, text2 } = props;

    return (
        <SC.Container>
            <SC.Title>{ title }</SC.Title>
            <SC.TextWrapper>
              <SC.Text>{ text1 }</SC.Text>
              <SC.Text>{ text2 }</SC.Text>
            </SC.TextWrapper>
        </SC.Container>
    );
}

export default Info;