class DataApi {

  constructor(rawData) {
    this.data = {
      articles: DataApi.mapIntoObject(rawData.articles),
      authors: DataApi.mapIntoObject(rawData.authors)
    };
  }
  static mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  lookupAuthor = (authorId) => this.data.authors[authorId];

  getState() {
    return this.data
  }
}

export default DataApi;