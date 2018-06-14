import React from 'react';
import styles from './articlestyles.css';
import PropTypes from 'prop-types';
import StoreProvider from './StoreProvider';

const Article = (props) => {
  const { article, author } = props;

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
function createExtraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId)
  }
}

Article.propTypes={
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
};

export default StoreProvider(createExtraProps)(Article);