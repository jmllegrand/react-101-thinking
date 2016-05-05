/**
 * Created by jmlegrand on 05/05/16.
 */


import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  render() {
    return (
      <div>
        <ProductCategoryRow />
        <ProductRow></ProductRow>
        <ProductRow></ProductRow>
        <ProductCategoryRow />
        <ProductRow></ProductRow>
      </div>
    )
  }
}

export default ProductTable;

