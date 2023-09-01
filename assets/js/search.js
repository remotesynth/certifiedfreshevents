function getQueryVariable(variable) {
  let query = window.location.search.substring(1);
  let vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

const query = getQueryVariable("search");
if (query) {
  const loader = document.getElementById("loader");
  const searchResults = document.getElementById("searchResults");
  const searchDescription = document.getElementById("searchDescription");
  const searchPageInput = document.getElementById("searchPageInput");
  axios
    .post("/.netlify/functions/algolia", {
      search: decodeURIComponent(query),
    })
    .then(function (response) {
      loader.hidden = true;
      const decodedQuery = decodeURIComponent(query).replace(/\+/g, " ");
      searchPageInput.value = decodedQuery;
      searchDescription.innerHTML = `${response.data.length} results for "${decodedQuery}"`;
      if (response.data == "") {
        searchResults.innerHTML =
          "<h2 class=\"text-center font-bold text-lg mb-12\">You're search didn't return any results</h2>";
      } else {
        searchResults.innerHTML = `<div class="grid grid-cols-1 gap-6  md:grid-cols-2 lg:gap-8">${response.data}</div>`;
      }
    });
}
