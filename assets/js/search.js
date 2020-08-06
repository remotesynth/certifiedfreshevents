function getQueryVariable(variable)
{
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
}

const query = getQueryVariable('search')
if (query) {
  const loader = document.getElementById('loader');
  const searchResults = document.getElementById('searchResults');
  const searchDescription = document.getElementById('searchDescription');
  axios.post('/.netlify/functions/algolia', {
    search: query
  })
    .then(function (response) {
      loader.hidden = true;
      searchResults.innerHTML = response.data;
      searchDescription.innerHTML = 'Search results for: "' + query + '"';
    });
}
