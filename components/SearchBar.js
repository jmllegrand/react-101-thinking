/**
 * Created by jmlegrand on 05/05/16.
 */

import React from 'react';

class SearchBar extends React.Component {
  handleRadioChange(e) {
    console.log('JM - ProductRow.handleChange()');
    this.props.changeStockRadioBtn(e);
  }

  handleInputChange(e) {
    console.log('JM - ProductRow.handleInputChange()');
    this.props.changeFilterInput(e);
  }
  render() {
    console.log('JM - ProductRow.SearchBar()');
    return (
      <form className="search-bar">
        <input type="text" placeholder="Search ..." onBlur = {this.handleInputChange.bind(this)}/> <br />
        <label><input type="checkbox" onChange={this.handleRadioChange.bind(this)}/>Only show products in stock </label>
      </form>
    )
  }
}

export default SearchBar;