let page = 1;

// Increment page number for pagination
const getNextPage = () => {
  page += 1;
  return page;
};

module.exports = { getNextPage };
