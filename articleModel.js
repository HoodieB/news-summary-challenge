class ArticleModel {
  constructor(articleInfo) {

    this.headline = articleInfo.webTitle
    this.imageUrl = articleInfo.fields ?
      articleInfo.fields.thumbnail : 
      "No image available."
  }
}

module.exports = ArticleModel