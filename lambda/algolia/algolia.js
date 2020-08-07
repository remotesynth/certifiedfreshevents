const algoliasearch = require("algoliasearch");

exports.handler = async (event, context, callback) => {
  try {
    const body = JSON.parse(event.body);
    const searchQuery = body.search;
    const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY);
    const index = client.initIndex("Pages");
    let searchResultsHTML = '';

    await index
    .search(searchQuery)
    .then(({ hits }) => {
      hits.map(hit => {
        let itemHTML = `
        <article class="event-card">
          <img
            src="/img/banners/${ hit.banner }"
              loading="lazy"
            alt="Banner for ${ hit.title }"
            aria-hidden="true">

          <div class="event-card-body">
            <h1 class="event-card-title">
              <a href="${ hit.relpermalink }" class="click-target">${ hit.title }</a>
            </h1>

            <p class="mb-auto">${ hit.summary }</p>

            <footer class="mt-6">
              <ul class="flex justify-between">
                <li class="flex items-center text-sm">
                  <svg class="inline-block w-6 h-6 mr-1 fill-current text-sky" aria-hidden="true">
                    <use xlink:href="/img/icons.svg#sm-calendar"></use>
                  </svg>
                  <time class="font-semibold text-gray-800">${ hit.date }</time>
                </li>
              </ul>
            </footer>
          </div>
        </article>
        `
        searchResultsHTML += itemHTML;
      });
    })
    .catch(err => {
      console.log(err);
    });
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      },
      body: searchResultsHTML
    };
  } catch (err) {[]
    return { statusCode: 500, body: err.toString() };
  }
}
