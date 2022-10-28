class NewsApi {
  loadSummaries(callback, errorCb) {
    fetch("https://content.guardianapis.com/search?api-key=a536125b-9982-4ba5-b246-20f168b0ac48")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      callback(data)
    })
    .catch((error) => {
      console.log(error)
      errorCb(error)
    })
  }
}

module.exports = NewsApi;