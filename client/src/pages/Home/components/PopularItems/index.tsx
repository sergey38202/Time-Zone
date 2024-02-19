import React from 'react';

import ProductCard from '../../../../components/ProductCard';
import DefaultImage from "../../../../assets/popular4.png.webp";
import Button from '../../../../components/Button';

import * as SC from "./styles";
import { PUBLIC_ROUTES } from '../../../../constants/routes';

const PopularItems = () => {
    return (
        <SC.Container>
            <SC.TextWrapper>
                <SC.Title>Popular Items</SC.Title>
                <SC.Text>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</SC.Text>
            </SC.TextWrapper>
            <SC.ProductsWrapper>
                {[0,1,2,3,4,5].map(() => (
                    <ProductCard id="1" title={'Thermo Ball Etip Gloves'} price={"$43"} image={DefaultImage} />
                ))}
            </SC.ProductsWrapper>
            <SC.ButtonWrapper>
                <Button to={PUBLIC_ROUTES.shop} variant="SECONDARY" size="LARGE">VIEW MORE PRODUCTS</Button>
            </SC.ButtonWrapper>
        </SC.Container>
    );
}

export default PopularItems;