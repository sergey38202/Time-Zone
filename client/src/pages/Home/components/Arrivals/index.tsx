import React from 'react';

import NewImage from "../../../../assets/new_product1.png.webp";

import * as SC from "./styles";

const Arrivals = () => {
    return (
        <SC.Container>
            <SC.Wrapper>
              <SC.Title>New Arrivals</SC.Title>
              <SC.ProductsWrapper>
                  { [0,1,2].map(() => (
                      <SC.Product>
                          <SC.ImageWrapper>
                              <SC.Image src={NewImage} alt="New product" />
                          </SC.ImageWrapper>
                          <SC.ProductTitle to="/">Thermo Ball Etip Gloves</SC.ProductTitle>
                          <SC.Price>$ 45,743</SC.Price>
                      </SC.Product>
                  )) }
              </SC.ProductsWrapper>
              </SC.Wrapper>
        </SC.Container>
    );
}

export default Arrivals;