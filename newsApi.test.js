const NewsApi = require('./newsApi');

require('jest-fetch-mock').enableMocks()

describe('API class', () => {
  beforeEach(() => {
    fetch.resetMocks()
  });

  it('calls fetch and loads data', () => {
    const api = new NewsApi();

    fetch.mockResponseOnce(JSON.stringify({
      name: "Some value",
      id: 123
    }));
})
})