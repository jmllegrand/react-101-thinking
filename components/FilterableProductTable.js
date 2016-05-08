/**
 * Created by jmlegrand on 05/05/16.
 */

import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';



class FilterableProductTable extends React.Component {

  constructor() {
    console.log('JM - FilterableProductTable.constructor()');
    super();
    this.state = {
      filterText: '',
      inStockOnly: false
    }
  }

  changeStockRadioBtn(event){
    this.state.inStockOnly = event.target.checked;
    this.setState({
      inStockOnly: this.state.inStockOnly
    })
  }

  changeFilterInput(event){
    this.state.filterText = event.target.value;
    this.setState({
      filterText: this.state.filterText
    })
  }

  render() {
    console.log('JM - FilterableProductTable.render()');
    return (
      <div className="filterable-product-table">
        <SearchBar changeFilterInput={this.changeFilterInput.bind(this)} changeStockRadioBtn={this.changeStockRadioBtn.bind(this)} inStockOnly={this.state.inStockOnly} searchableText={this.state.filterText}/>
        <ProductTable inStockOnly={this.state.inStockOnly} searchableText={this.state.filterText} products = {this.props.products} />
      </div>
    )
  }
}

export default FilterableProductTable;
