import React from 'react';
import StoreProvider from 'components/StoreProvider';

class Timestamp extends React.Component {
  render() {
    return (<div>{this.props.timestamp.toString()}</div>);
  }
  static extraProps(store) {
    return {
      timestamp: store.getState().timestamp
    }
  }
}

export default StoreProvider(Timestamp.extraProps)(Timestamp);