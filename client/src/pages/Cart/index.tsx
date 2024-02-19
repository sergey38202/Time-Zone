import React from 'react';
import { useSelector } from 'react-redux';

import CardImage from "../../assets/card1.png.webp";
import CartItem from './components/CartItem';
import Page from '../../layouts/Page';
import Button from '../../components/Button';

import * as SC from "./styles";
import { RootState } from '../../store';

const Cart = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);

    return (
        <Page title="Cart List">
            <SC.Container>
                <SC.Header>
                    <SC.HeaderText>Product</SC.HeaderText>
                    <SC.HeaderTextWrapper>
                        <SC.HeaderText>Price</SC.HeaderText>
                        <SC.HeaderText>Quantity</SC.HeaderText>
                        <SC.HeaderText>Total</SC.HeaderText>
                    </SC.HeaderTextWrapper>
                </SC.Header>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        image={CardImage}
                        title={item.title}
                        price={`$${item.price}`}
                        initialCount={item.count}
                        total={`$${item.price * item.count}`}
                    />
                ))}
                <SC.ButtonWrapper>
                    <Button variant="PRIMARY" size="LARGE">
                        Update Cart
                    </Button>
                    <Button variant="PRIMARY" size="LARGE">
                        Proceed To Checkout
                    </Button>
                </SC.ButtonWrapper>
            </SC.Container>
        </Page>
    );
}

export default Cart;
