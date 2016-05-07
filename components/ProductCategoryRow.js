/**
 * Created by jmlegrand on 05/05/16.
 */


import React from 'react';
import ProductRow from './ProductRow';


class ProductCategoryRow extends React.Component {
  static renderProduct(product) {
    return (
      <ProductRow key={product.name} product={product} />
    )
  }

  render() {
    console.log('JM - ProductCategoryRow.render()');
    return (
      <ul className="product-row-category">
        <span>{this.props.category}</span>
        {_.map(this.props.productsFiltered, this.renderProduct)}
      </ul>
    )
  }
}

export default ProductCategoryRow;

