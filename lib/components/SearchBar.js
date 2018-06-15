import React from 'react';
import StoreProvider from 'components/StoreProvider';
import { debounce } from 'lodash';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  };
  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 3000);
  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value}, () =>{ this.doSearch() });
  };
  render() {
    return (
      <input
        type="search"
        placeholder="Enter search"
        value={this.state.searchTerm}
        onChange={this.handleSearch}
      />
    )
  }
}

export default StoreProvider()(SearchBar);