class Index {

  constructor(rawData) {
    this.rawData = rawData;
  }
  static mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  getArticles() {
    return Index.mapIntoObject(this.rawData.articles);
  }
  getAuthors() {
    return Index.mapIntoObject(this.rawData.authors);
  }
}

export default Index;