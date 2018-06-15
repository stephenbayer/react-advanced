import React from 'react';
import PropTypes from 'prop-types';

const StoreProvider = (extraProps = () => ({})) => ((Component) => {
  return class extends React.PureComponent {
    static displayName = `${Component.name}Container`;
    static contextTypes= {
      store: PropTypes.object
    };

    onStoreChange = () => {
      if (this.subscriptionId) this.forceUpdate();
    };

    componentDidMount() {
      if (!this.subscriptionId)
        this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }

    componentWillUnmount() {
      if (this.subscriptionId) {
        this.context.store.unsubscribe(this.subscriptionId);
        this.subscriptionId = null;
      }
    }

    render() {
      return <Component store={this.context.store} {...this.props} {...extraProps(this.context.store, this.props)} />;
    }
  };
});

export default StoreProvider;
