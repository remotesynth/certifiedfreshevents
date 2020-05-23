/* Navigation */

const navToggler = document.querySelector('[data-nav-toggler]');
const siteNav = document.getElementById('SiteNav');
const primaryNav = document.getElementById('PrimaryNav');
const secondaryNav = document.getElementById('SecondaryNav');

const searchToggler = document.querySelectorAll('[data-search-toggler]');
const topSearch = document.getElementById('Search');

navToggler.addEventListener('click', () => {
  siteNav.classList.toggle('sr-only');
});

searchToggler.forEach( (button) => {
  button.addEventListener('click', () => {
    topSearch.classList.toggle('lg:sr-only');
    primaryNav.classList.toggle('lg:sr-only');
    secondaryNav.classList.toggle('lg:sr-only');
  });
});

/* Carousel Helpers */
document.addEventListener('glider-loaded', hideFFScrollBars);
document.addEventListener('glider-refresh', hideFFScrollBars);

function hideFFScrollBars(e) {
  const scrollbarHeight = 17; // Currently 17, may change with updates
  if (/firefox/i.test(navigator.userAgent)) {
    // We only need to appy to desktop. Firefox for mobile uses
    // a different rendering engine (WebKit)
    if (window.innerWidth > 575) {
      e.target.parentNode.style.height = (e.target.offsetHeight - scrollbarHeight) + 'px'
    }
  }
}