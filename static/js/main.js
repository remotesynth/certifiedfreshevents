/* Navigation */
const navToggler = document.querySelector("[data-nav-toggler]");
const body = document.getElementsByTagName("body")[0];
const primaryNav = document.getElementById("PrimaryNav");
const secondaryNav = document.getElementById("SecondaryNav");

const searchToggler = document.querySelectorAll("[data-search-toggler]");
const topSearch = document.getElementById("Search");
const topSearchInput = document.getElementById("searchInput");

const toggleModalEffect = () => {
  const body = document.querySelector("body");
  body.classList.toggle("modal-active");
};

navToggler.addEventListener("click", () => {
  body.classList.toggle("nav-open");
});

searchToggler.forEach((button) => {
  button.addEventListener("click", () => {
    topSearch.classList.toggle("lg:sr-only");
    primaryNav.classList.toggle("lg:sr-only");
    secondaryNav.classList.toggle("lg:sr-only");
    if (!topSearch.classList.contains("lg:sr-only")) {
      topSearchInput.focus();
    }
  });
});

/*
  Setup Carousels
  Note: Only 1 per page
*/

const carousel = document.querySelector(".carousel-list");

if (carousel) {
  let carouselConfig = {
    resizeLock: true,
    slidesToShow: 1,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  };

  if (carousel.hasAttribute("data-carousel-responsive")) {
    carouselConfig["responsive"] = [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ];
  }

  new Glider(carousel, carouselConfig);

  /* Carousel Helpers */
  document.addEventListener("glider-loaded", hideFFScrollBars);
  document.addEventListener("glider-refresh", hideFFScrollBars);

  function hideFFScrollBars(e) {
    const scrollbarHeight = 17; // Currently 17, may change with updates
    if (/firefox/i.test(navigator.userAgent)) {
      // We only need to appy to desktop. Firefox for mobile uses
      // a different rendering engine (WebKit)
      if (window.innerWidth > 575) {
        e.target.parentNode.style.height =
          e.target.offsetHeight - scrollbarHeight + "px";
      }
    }
  }
}

/*
  Setup Accordionss
*/

const accordions = document.querySelectorAll('.accordion-trigger');
accordions.forEach((accordionEl) => {
  accordionEl.addEventListener('click', () => {
    const pane = document.getElementById(accordionEl.getAttribute('aria-controls'));
    const expanded = accordionEl.getAttribute('aria-expanded') === 'true';
    accordionEl.setAttribute('aria-expanded', !expanded);
    pane.toggleAttribute('hidden');
  });
});
