import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fetchProducts, addProduct } from '../../store/features/products';

import * as SC from './styles';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);

  const [newProduct, setNewProduct] = useState({
    title: '',
    price: 0,
    image: '',
    description: '',
  });

  useEffect(() => {
    // Fetch products on component mount
    if (status === 'idle') {
      dispatch(fetchProducts() as any);
    }
  }, [dispatch, status]);

  const handleAddProduct = () => {
    dispatch(addProduct(newProduct) as any);
    setNewProduct({
      title: '',
      price: 0,
      description: '',
      image: '',
    });
  };

//   const handleUpdateProduct = (productId: string, updatedProduct: any) => {
//     dispatch(updateProduct({ productId, updatedProduct }));
//   };

//   const handleDeleteProduct = (productId: string) => {
//     dispatch(deleteProduct(productId));
//   };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: Unable to fetch products</div>;
  }

  console.log('products', products);

  return (
    <SC.Container>
      <h2>Product Management</h2>
      <div>
        <h3>Add New Product</h3>
        <label>Title:</label>
        <input
          type="text"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
        />
        <label>Price:</label>
        <input
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
        />
         <input
          type="text"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
         <input
          type="text"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <div>
        <h3>Product List</h3>
      </div>
    </SC.Container>
  );
};

export default Products;