/**
 * Created by jmlegrand on 05/05/16.
 */


import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import _ from 'lodash';


class ProductTable extends React.Component {
  renderProductsPerCategory(category) {
    var productsFiltered =  _.filter(this.props.products, function(product) {
      return product.category === category;
    });
    return (
      <ProductCategoryRow key={category} category={category} productsFiltered={productsFiltered}/>
    )
  }

  render() {
    console.log('JM - ProductTable.render()');
    //TODO use es5 with lodash (as opposed to es6 stuff)
    let categories = [...new Set(this.props.products.map(item => item.category))];
    return (
      <div className="product-table">
        <ul >
          <li>Name</li>
          <li>Price</li>
        </ul>
        {_.map(categories, this.renderProductsPerCategory.bind(this))}
      </div>
    )
  }
}

export default ProductTable;

