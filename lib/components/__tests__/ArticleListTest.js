import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' }
    },
    actions: {
      lookupAuthor: (authorId) => ({ id: authorId})
    }
  };
  it('renders correctly', () => {
    const tree = renderer.create(
      <ArticleList
        {...testProps}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();

    expect(tree.children.length === 2);

  });
});
