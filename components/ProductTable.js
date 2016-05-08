/**
 * Created by jmlegrand on 05/05/16.
 */


import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import _ from 'lodash';


class ProductTable extends React.Component {

  render() {
    console.log('JM - ProductTable.render()');
    //TODO use es5 with lodash (as opposed to es6 stuff
    var rows = [];
    var products = this.props.products;
    var inStockOnly = this.props.inStockOnly;
    var searchableText = _.lowerCase(this.props.searchableText);
    console.log('JM - ProductTable.render()', searchableText);

    let categories = [...new Set(this.props.products.map(item => item.category))];
    _.map(categories, function(category){
      // pour chaque category
      // step 1 - on feed le composant
      rows.push(<ProductCategoryRow key={category} category={category}/>);
      // Step 2 - on filtre la liste de produits
      var productsFiltered =  _.filter(products, function(product) {
        return inStockOnly ? (product.category === category && product.stocked === inStockOnly && _.includes(_.lowerCase(product.name), searchableText)) :
        product.category === category && _.includes(_.lowerCase(product.name), searchableText);
      });
      // Step 3 - pour chaque produit, on feed le composant
      _.map(productsFiltered, function(product) {
        rows.push(<ProductRow key={product.name} product={product} />);
      })
    });


    return (
      <div className="product-table">
        <ul >
          <li>Name</li>
          <li>Price</li>
        </ul>
        <ul>{rows}</ul>
      </div>
    )
  }
}

export default ProductTable;

