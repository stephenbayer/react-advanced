import React from 'react';
import styles from './articlestyles.css';
import PropTypes from 'prop-types';

const Article = (props, context) => {
  const { article } = props;
  const { store } = context;
  const author = store.lookupAuthor(article.authorId);
  return (
    <div style={styles.article}>
      <h2 style={styles.title}>{article.title}</h2>
      <div style={styles.date}>{article.date}</div>
      <h3 style={styles.author}>
        {
          (author == null) ?
            <span>No Author</span> :
            <a href={author.website}>
              {author.firstName} {author.lastName}
            </a>
        }
      </h3>
      <p style={styles.body}>{article.body}</p>
    </div>
  );
};
Article.propTypes={
  article: PropTypes.shape({
    date: PropTypes.string.isRequired
  })
};

Article.contextTypes = {
  store: PropTypes.object
};

export default Article;