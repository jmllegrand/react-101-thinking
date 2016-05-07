/**
 * Created by jmlegrand on 05/05/16.
 */

import React from 'react'


class ProductRow extends React.Component {
  render() {
    console.log('JM - ProductRow.render()');
    return (
      <li className="product-row">
        <span>{this.props.product.name}</span>
        <span>{this.props.product.price}</span>
      </li>
    )
  }
}

export default ProductRow;