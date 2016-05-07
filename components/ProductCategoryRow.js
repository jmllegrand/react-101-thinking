/**
 * Created by jmlegrand on 05/05/16.
 */

import React from 'react';


class ProductCategoryRow extends React.Component {
  render() {
    console.log('JM - ProductCategoryRow.render()');
    return (
      <ul className="product-row-category">
        <span>{this.props.category}</span>
      </ul>
    )
  }
}

export default ProductCategoryRow;

