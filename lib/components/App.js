import React from "react";
import ArticleList from './ArticleList';

class App extends React.Component {
  state = {
    authors: this.props.initialData.authors,
    articles: this.props.initialData.articles
  };

  articleActions =  { lookupAuthor: authorId => this.state.authors[authorId] };

  render() {
    return (
      <div>
        <h1>Hello Class Component - {this.state.answer}</h1>
        <ArticleList articles={this.state.articles} actions={this.articleActions} />
      </div>
    );
  }
}

export default App;
