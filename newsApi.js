// require('dotenv').config()
// import { API_KEY } from 'env';

class NewsApi {
  loadSummaries(callback) {
    fetch(`https://content.guardianapis.com/search?api-key=a536125b-9982-4ba5-b246-20f168b0ac48&show-fields=thumbnail`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      callback(data)
    })
  }
}

module.exports = NewsApi;