import React from 'react';
import ArticleList from '../ArticleList';
import Adapter from 'enzyme-adapter-react-16';

import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

const shallow = Enzyme.shallow;


describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a', date: 'date_a' },
      b: { id: 'b', date: 'date_b' }
    }
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.props().children.length === 2);

  });
});
