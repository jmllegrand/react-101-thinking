/**
 * Created by jmlegrand on 05/05/16.
 */

import React from 'react'


class ProductRow extends React.Component {
  render() {
    console.log('JM - ProductRow.render()');
    var product = this.props.product;
    var name = this.props.product.stocked ? product.name : <span className="notInStock">{product.name}</span>;
    return (
      <li className="product-row">
        <span>{name}</span>
        <span>{product.price}</span>
      </li>
    )
  }
}

export default ProductRow;