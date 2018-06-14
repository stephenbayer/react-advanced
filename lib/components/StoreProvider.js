import React from 'react';
import PropTypes from 'prop-types';

const StoreProvider = (extraProps) => ((Component) => {
  return class extends React.Component {
    static displayName = `${Component.name}Container`;
    static contextTypes= {
      store: PropTypes.object
    };

    render() {
      return <Component {...this.props} {...extraProps(this.context.store, this.props)} />;
    }
  };
});

export default StoreProvider;