const algoliasearch = require("algoliasearch");

exports.handler = async (event, context, callback) => {
  const client = algoliasearch("YourApplicationID", process.env.ALGOLIA_ADMIN_KEY);
  const index = client.initIndex("Pages");

  index
  .search("Fo")
  .then(({ hits }) => {
    console.log(hits);
  })
  .catch(err => {
    console.log(err);
  });
}
