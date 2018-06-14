import React from 'react';
import styles from './articlestyles.css';

export default (props) => {
  const { article, actions } = props;
  const author = actions.lookupAuthor(article.authorId);
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