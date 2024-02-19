import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeartIcon from "../../assets/heart.svg";
import { IProductDTO } from '../../types/product';
import * as SC from "./styles";
import { addProduct } from '../../store/features/cart';
import { RootState } from '../../store';

const ProductCard: FC<IProductDTO> = (props) => {
    const { _id, image, title, price, liked } = props;

    const cartItems = useSelector((state: RootState) => state.cart.items);


    const dispatch = useDispatch();

    const [showHiddenItems, setShowHiddenItems] = useState(false);

    const handleToggleHiddenItems = (show: boolean) => {
        setShowHiddenItems(show);
    }

    const handleAddToCart = () => {
        dispatch(addProduct({ id: _id, title, price, count: 1 }));
        console.log('Product in cart', )
    }

    console.log('cartItems', cartItems);

    return (
        <SC.Container
            onMouseEnter={() => handleToggleHiddenItems(true)}
            onMouseLeave={() => handleToggleHiddenItems(false)}
        >
            <SC.ImageWrapper>
                <SC.ImageHeart
                    show={showHiddenItems}
                    src={HeartIcon}
                    width={40}
                    height={40}
                />
                <SC.Image image={image} />
                <SC.CartButton show={showHiddenItems} onClick={handleAddToCart}>
                    {showHiddenItems && 'Add to cart'}
                </SC.CartButton>
            </SC.ImageWrapper>
            <SC.Title>{title}</SC.Title>
            <SC.Price>{price}</SC.Price>
        </SC.Container>
    );
}

export default ProductCard;
