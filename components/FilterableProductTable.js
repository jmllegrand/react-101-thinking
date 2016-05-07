/**
 * Created by jmlegrand on 05/05/16.
 */

import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';



class FilterableProductTable extends React.Component {
  render() {
    console.log('JM - FilterableProductTable.render()');
    return (
      <div className="filterable-product-table">
        <SearchBar />
        <ProductTable products = {this.props.products}/>
      </div>
    )
  }
}

export default FilterableProductTable;
