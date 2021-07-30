import {Grid, GridItem} from '@chakra-ui/react';
import React from 'react';
import {ProductProps} from 'types';
import Product from './Product';

const styleProps = {
  productListWrapper: {
    templateColumns: 'repeat(3, 1fr)',
    gap: 4,
  },
};

const ProductList = (props: {
  children?: React.ReactNode;
  products: ProductProps[];
}) => {
  return (
    <Grid className='ProductListWrapper' {...styleProps.productListWrapper}>
      {props.products.map((productProps) => {
        return (
          <GridItem key={productProps.id}>
            <Product {...productProps} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default ProductList;
