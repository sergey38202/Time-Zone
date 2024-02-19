import React, { useEffect, useState } from 'react';

import DefaultImage from "../../assets/popular4.png.webp";
import ProductCard from '../../components/ProductCard';
import Page from '../../layouts/Page';

import * as SC from "./styles";
import { IProductDTO } from '../../components/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fetchProducts } from '../../store/features/products';
import { addProduct } from '../../store/features/cart';

const Shop = () => {
    const dispatch = useDispatch();

    const products = useSelector((state: RootState) => state.products.products);
    const status = useSelector((state: RootState) => state.products.status);

    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchProducts() as any);
      }
    }, [dispatch, status]);
  
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
  
    if (status === 'failed') {
      return <div>Error: Unable to fetch products</div>;
    }

    return (
        <Page title="Watch Shop">
            <SC.Container>
              <SC.ProductsWrapper>
                  {products?.map((product) => (
                      <ProductCard 
                       _id={product._id} 
                       title={product.title} 
                       price={product.price} 
                       image={product.image} 
                      />
                  ))}
              </SC.ProductsWrapper>
              </SC.Container>
        </Page>
    );
}

export default Shop;