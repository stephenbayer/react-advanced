const debug = require('debug')('app:state-api');

class DataApi {

  constructor(rawData) {
    this.data = {
      articles: DataApi.mapIntoObject(rawData.articles),
      authors: DataApi.mapIntoObject(rawData.authors),
      searchTerm: '',
      timestamp: new Date()
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;

  }
  static mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  lookupAuthor = (authorId) => this.data.authors[authorId];

  notifySubscribers = () => { Object.values(this.subscriptions).forEach( (cb) =>{
    debug(cb);
    cb();
  })};

  startClock = () => {
    setInterval(() => { this.mergeWithState({timestamp: new Date() })}, 2000);
  };

  mergeWithState(stateChanges) {
    this.data = {
      ...this.data,
      ...stateChanges
    };
    this.notifySubscribers();
  }

  setSearchTerm = (searchTerm) => {
    this.mergeWithState({ searchTerm });
  };

  getState = () => {
    return this.data
  };

  subscribe = (cb) => {
    let subId = ++this.lastSubscriptionId;
    this.subscriptions[subId] = cb;
    return subId;
  };

  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  };
}

export default DataApi;