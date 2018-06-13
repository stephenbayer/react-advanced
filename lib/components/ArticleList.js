import React from 'react';
import Article from './Article';

export default (props) => {
  return (
    <div className={'articlelist'}>
      {Object.values(props.articles).map(article =>
          <Article
            key={article.id}
            article={article}
            actions={props.actions}
          />
      )}
    </div>
  );
};