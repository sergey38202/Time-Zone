import React, { FC } from 'react';

// import CloseIcon from "../../../../assets/c"

import { ICartItemProps } from './types';
import * as SC from "./styles";

const CartItem: FC<ICartItemProps> = (props) => {
    const { image, title, price, initialCount, total } = props;

    return (
        <SC.Container>
            <SC.ImageWrapper>
                <img src={image} width={150} height={150} alt="Product" />
                <SC.Title>{ title }</SC.Title>
            </SC.ImageWrapper>
            <SC.InfoWrapper>
                <SC.Info>{ price }</SC.Info>
                <SC.Count>{ initialCount }</SC.Count>
                <SC.Info>{ total }</SC.Info>
            </SC.InfoWrapper>
            {/* <img src={} /> */}
        </SC.Container>
    );
}

export default CartItem;