import React from "react";
import DataApi from '../DataApi';
import { data } from '../../data/react-blog-test-data';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      answer: 420,
      articles: api.getArticles(),
      authors: api.getAuthors(),
      articleActions: {
        lookupAuthor: this.lookupAuthor
      }
    }

  }
  lookupAuthor = (authorId) => {
    return api.getAuthors()[authorId];
  };
  asyncFunction = () => {
    return Promise.resolve(72);
  };
  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunction()
    })
  }
  render() {
    return (
      <div>
        <h1>Hello Class Component - {this.state.answer}</h1>
        <ArticleList articles={this.state.articles} actions={this.state.articleActions} />
      </div>
    );
  }
}

export default App;