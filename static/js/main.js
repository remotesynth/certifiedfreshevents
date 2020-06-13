/* Navigation */
const navToggler = document.querySelector('[data-nav-toggler]');
const siteNav = document.getElementById('SiteNav');
const primaryNav = document.getElementById('PrimaryNav');
const secondaryNav = document.getElementById('SecondaryNav');

const searchToggler = document.querySelectorAll('[data-search-toggler]');
const topSearch = document.getElementById('Search');

const toggleModalEffect = () => {
  const body = document.querySelector('body');
  body.classList.toggle('modal-active');
}

navToggler.addEventListener('click', () => {
  siteNav.classList.toggle('sr-only');
  toggleModalEffect();
});

searchToggler.forEach( (button) => {
  button.addEventListener('click', () => {
    topSearch.classList.toggle('lg:sr-only');
    primaryNav.classList.toggle('lg:sr-only');
    secondaryNav.classList.toggle('lg:sr-only');
  });
});

const surveyToggler = document.querySelector('[data-survey-toggler]');
const surveyModal = document.getElementById('SurveyModal');

if (surveyToggler) {
  surveyToggler.addEventListener('click', () => {
    surveyModal.classList.toggle('sr-only');
    toggleModalEffect();
  });
}

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
