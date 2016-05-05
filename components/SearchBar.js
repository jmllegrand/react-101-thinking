/**
 * Created by jmlegrand on 05/05/16.
 */

import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search ..."/> <br />
        <label><input type="checkbox"/>Only show products in stock </label>
      </div>
    )
  }
}

export default SearchBar;