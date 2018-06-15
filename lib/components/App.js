import React from "react";
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';
import _ from 'lodash';

const pickBy = _.pickBy;

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  state = this.props.store.getState();

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  };

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
    let { articles, searchTerm } = this.state;
    const searchRE = new RegExp(searchTerm, 'i');
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return `${value.title} ${value.body}`.match(searchRE);
      })
    }

    return [
        <Timestamp   key='timestamp' />,
        <SearchBar   key='SearchBar' />,
        <ArticleList key='ArticleList' articles={articles} />
      ];
  }
}

export default App;
