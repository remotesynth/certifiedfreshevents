/* Navigation */
const navToggler = document.querySelector('[data-nav-toggler]');
const body = document.getElementsByTagName('body')[0];
const primaryNav = document.getElementById('PrimaryNav');
const secondaryNav = document.getElementById('SecondaryNav');

const searchToggler = document.querySelectorAll('[data-search-toggler]');
const topSearch = document.getElementById('Search');
const topSearchInput = document.getElementById('searchInput');

const toggleModalEffect = () => {
  const body = document.querySelector('body');
  body.classList.toggle('modal-active');
}

navToggler.addEventListener('click', () => {
  body.classList.toggle('nav-open');
});

searchToggler.forEach( (button) => {
  button.addEventListener('click', () => {
    topSearch.classList.toggle('lg:sr-only');
    primaryNav.classList.toggle('lg:sr-only');
    secondaryNav.classList.toggle('lg:sr-only');
    if (!topSearch.classList.contains('lg:sr-only')) {
      topSearchInput.focus();
    }
  });
});


/* Survey Modal */
const survey = document.getElementById('Survey');
const surveyModal = document.getElementById('SurveyModal');

const serialize = function (form) {
	var field,
		l,
		s = [];

	if (typeof form == 'object' && form.nodeName == "FORM") {
		var len = form.elements.length;

		for (var i = 0; i < len; i++) {
			field = form.elements[i];
			if (field.name && !field.disabled && field.type != 'button' && field.type != 'file' && field.type != 'hidden' && field.type != 'reset' && field.type != 'submit') {
				if (field.type == 'select-multiple') {
					l = form.elements[i].options.length;

					for (var j = 0; j < l; j++) {
						if (field.options[j].selected) {
							s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
						}
					}
				}
				else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
					s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value);
				}
			}
		}
	}
	return s.join('&').replace(/%20/g, '+');
};

if (!localStorage.getItem('doneSurvey') && survey) {
  const surveyToggler = document.querySelector('[data-survey-toggler]');
  const surveyDismiss = document.querySelector('[data-survey-dismiss]');
  const surveyCancel = document.querySelector('[data-survey-cancel]');
  const surveyForm = document.getElementById('surveyResponse');

  surveyToggler.addEventListener('click', () => {
    surveyModal.classList.toggle('sr-only');
    toggleModalEffect();
  });

  if (surveyDismiss) {
    surveyDismiss.addEventListener('click', () => {
      survey.remove();
      surveyModal.remove();
      localStorage.setItem('doneSurvey', true);
    });
  }

  function removeSurveyModal() {
    surveyModal.classList.toggle('sr-only');
    toggleModalEffect();
    survey.remove();
    surveyModal.remove();
  }

  function surveySubmit(e) {
    e.preventDefault();

    const surveyForm = e.currentTarget;
    const options = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    }
    const formData = "form-name=surveyResponse&" + serialize(surveyForm);
    console.log(formData)
    axios.post(
      "/",
      formData,
      options
    )
    .then(function (response) {
      localStorage.setItem('doneSurvey', true);
      //window.location.assign(surveyForm.action);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  surveyForm.addEventListener('submit',surveySubmit);

  if (surveyCancel) {
    surveyCancel.addEventListener('click', (e) => {
      e.preventDefault();
      removeSurveyModal();
    });
  }

  survey.classList.remove('hidden');
}

/*
  Setup Carousels
  Note: Only 1 per page
*/

const carousel = document.querySelector('.carousel-list');


if (carousel) {

  let carouselConfig = {
    resizeLock: true,
    slidesToShow: 1,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  }

  if (carousel.hasAttribute('data-carousel-responsive')) {
    carouselConfig['responsive'] = [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ];
  }

  new Glider(carousel, carouselConfig);

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
}

/* ActiveCampaign form submit
  -------------------------------------------------------*/

function subscribeForm(form,messageObj) {
  axios.post('/.netlify/functions/activecampaign', {
    email: form.email.value
  })
  .then(function (response) {
    if (response.data.contact !== undefined) {
      form.subscribe.disabled = true;
      form.email.value = "";
      form.subscribe.innerHTML = "Subscribed!";
    }
    else {
      messageObj.innerHTML = response.data.title;
    }
  })
  .catch(function (error) {
    messageObj.innerHTML = "We apologize, there was a problem subscribing.";
  });

  return false;
}
