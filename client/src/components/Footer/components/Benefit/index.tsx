import React, { FC } from 'react';

import { IBenefitProps } from './types';
import * as SC from "./styles";

const Benefit: FC<IBenefitProps> = (props) => {
    const { image, title, description } = props;

    return (
        <SC.Container>
            <SC.ImageWrapper>
              <img src={image} width={40} height={40} />
            </SC.ImageWrapper>
            <SC.Title>{ title }</SC.Title>
            <SC.Description>{ description }</SC.Description>
        </SC.Container>
    );
}

export default Benefit;