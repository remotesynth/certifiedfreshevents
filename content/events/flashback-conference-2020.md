---
title: "Flashback Conference"
date: 2020-02-10T18:52:51-04:00
menu:
  main:
    parent: "upcoming"
    name: "Flashback Conference"
categories:
    - Web Standards
    - Web Development
    - JavaScript
    - CSS
starttime: "2/10 9:00am EST"
endtime: "2/11 5:00pm EST"
days: 2
location: "The Abbey Orlando"
cost: "$149-$249"
banner: "flashback_large.jpg"
homepage_banner: "flashback.jpg"
description: "Flashback Conference looks at new and cutting-edge web development, browser APIs and developer tooling, but adds the understanding how they've evolved."
short_desc: "Flashback Conference is a 2-day front-end web development focused conference in Orlando, FL"
draft: false
featured: true
---

<style>
.lgx-speakers {
	background: #fff;
}
.lgx-speakers .speakers-btn-area {
	text-align: center;
}
.lgx-speakers .lgx-single-speaker {
	background: #fff;
	border-radius: 4px;
	padding: 8px;
	margin-bottom: 4.2rem;
	-webkit-transition: all 0.3s ease-in-out 0s;
	-moz-transition: all 0.3s ease-in-out 0s;
	-o-transition: all 0.3s ease-in-out 0s;
	transition: all 0.3s ease-in-out 0s;
}

.lgx-speakers .lgx-single-speaker figure {
	position: relative;
	/* -webkit-box-shadow: 0 0px 10px rgba(0, 0, 0, 0.25);
	-moz-box-shadow: 0 0px 10px rgba(0, 0, 0, 0.25);
	box-shadow: 0 0px 10px rgba(0, 0, 0, 0.25); */
	border-radius: 4px;
	text-align: center;
}

.lgx-speakers .lgx-single-speaker figure a.profile-img {
	border-radius: 4px;
}

.lgx-speakers .lgx-single-speaker figure a.profile-img img {
  border-radius: 4px;
  height: 200px;
  width: 200px;
}

.lgx-speakers .lgx-single-speaker figure figcaption {
	background: rgba(255, 255, 255, 0.7);
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	text-align: center;
	color: #fff;
	border-radius: 0 0 4px 4px;
	opacity: 0;
	padding: .8rem 0;
	-webkit-transition: all 0.3s ease-in-out 0.3s;
	-moz-transition: all 0.3s ease-in-out 0.3s;
	-o-transition: all 0.3s ease-in-out 0.3s;
	transition: all 0.3s ease-in-out 0.3s;
}

.lgx-speakers .lgx-single-speaker figure figcaption a {
	font-size: 26px;
	line-height: 39px;
	font-size: 2.6rem;
	line-height: 3.9000000000000004rem;
	color: #29aae2;
	padding: 0 .3rem;
}

.lgx-speakers .lgx-single-speaker .speaker-info {
	text-align: center;
}

.lgx-speakers .lgx-single-speaker .speaker-info .speaker-title {
	font-weight: 700;
	text-transform: uppercase;
	margin: 0;
	letter-spacing: .08rem;
}

.lgx-speakers .lgx-single-speaker .speaker-info .speaker-title a {
	font-size: inherit;
}

.lgx-speakers .lgx-single-speaker .speaker-info .speaker-subtitle {
	font-size: 11px;
	line-height: 13px;
	font-size: 1.1rem;
	line-height: 1.3rem;
	font-weight: 400;
	font-style: italic;
	margin: 0;
	color: #29aae2;
}

.lgx-speakers .lgx-single-speaker:hover {
	background: #29aae2;
}

.lgx-speakers .lgx-single-speaker:hover figure figcaption {
	opacity: 1;
	-webkit-animation-name: fadeInUp;
	animation-name: fadeInUp;
	-webkit-transform-origin: center;
	transform-origin: center;
	animation-duration: 400ms;
	animation-timing-function: linear;
}

.lgx-speakers .lgx-single-speaker:hover figure figcaption a i {
	-webkit-animation-name: zoomIn;
	animation-name: zoomIn;
	-webkit-transform-origin: center;
	transform-origin: center;
	animation-duration: 500ms;
	animation-timing-function: linear;
}

.lgx-speakers .lgx-single-speaker:hover .speaker-info .speaker-title a {
	color: #fff;
}

.lgx-speakers .lgx-single-speaker:hover .speaker-info .speaker-subtitle {
	color: #fff;
}

.lgx-speakers .lgx-single-speaker-sm {
	padding: 8px;
	min-height: 285px;
	height: 285px;
}

.lgx-speakers .lgx-single-speaker-sm figure figcaption a {
	font-size: 18px;
	line-height: 27px;
	font-size: 1.8rem;
	line-height: 2.7rem;
}

.lgx-speakers .lgx-single-speaker-sm .speaker-info .speaker-title {
	font-size: 18px;
	line-height: 20px;
	font-size: 1rem;
	line-height: 1.3rem;
}
.slidein:nth-child(even) {
  background: #3398ff !important;
}

.slidein:nth-child(odd) {
  background: #007eff !important;
}

.button {
  cursor: pointer;
  position: relative;
  text-align: center;
  margin: 46px 10px 0 0;
  display: block;
  width: 100%;
  height: 50px;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: 600;
  overflow: hidden;
  margin: auto;
}
.button .ten {
  font-size: 7px;
  line-height: 52px;
}
.button:hover .slidein {
  left: 0%;
}
.button:hover .two {
  left: 0%;
  transition-delay: 1.5s;
}
.button:hover .three {
  left: 0%;
  transition-delay: 3s;
}
.button:hover .four {
  left: 0%;
  transition-delay: 4.5s;
}
.button:hover .five {
  left: 0%;
  transition-delay: 6s;
}
.button:hover .six {
  left: 0%;
  transition-delay: 7.5s;
}
.button:hover .seven {
  left: 0%;
  transition-delay: 9s;
}
.button:hover .eight {
  left: 0%;
  transition-delay: 10.5s;
}
.button:hover .nine {
  left: 0%;
  transition-delay: 13s;
}
.button:hover .ten {
  left: 0%;
  transition-delay: 16s;
}
.button .slidein {
  background: #3398ff;
  left: -100%;
  z-index: 2;
}
.button a {
  text-transform: uppercase;
  transition: left 300ms;
  letter-spacing: 1px;
  background: #007eff;
  position: absolute;
  font-weight: bold;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #ffffff;
  line-height: 50px;
}
</style>

# Join us on February 10-11 in Orlando, Florida!

Explore new and cutting-edge web development, browser APIs and developer tooling and how they’ve evolved into the web of today. Flashback Conference features 2 days filled with sessions from experts in the field of front-end development and JavaScript.

Topics include:

<div style="width:50%;float:left;margin-bottom:30px;">
<ul>
<li>JavaScript</li>
<li>Web Development</li>
<li>Web Standards</li>
<li>Serverless</li>
</ul>
</div>
<div style="width:50%;float:right;margin-bottom:30px;">
<ul>
<li>JAMstack</li>
<li>Accessibility</li>
<li>Browser-based Game Development</li>
<li>Developer Community</li>
</ul>
</div>

<div class="button">
  <a href="#register" class="first"> Register Today! </a>
  <a href="#register" class="slidein"> Don't miss out! </a>
  <a href="#register" class="slidein two"> What're you waiting for? </a>
</div>

## Speakers {#speakers}

We have a fantastic lineup of experts in frontend development, JavaScript and serverless!

### Keynotes

<div class="lgx-speakers">
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="lgx-single-speaker lgx-single-speaker-sm">
            <figure>
                <a class="profile-img" href="/speakers/kyle-simpson">
                    <img src="/img/speakers/portraits/KyleSimpson.png" alt="speaker">
                </a>
                <figcaption>   
                <a class="sp-tw" href="https://twitter.com/getify"><i class="fab fa-twitter"></i></a>
                <a class="sp-gh" href="https://github.com/getify"><i class="fab fa-github"></i></i></a>
                <a class="sp-link" href="https://me.getify.com/"><i class="fa fa-link"></i></a>
                </figcaption>
            </figure>
            <div class="speaker-info">
                <h3 class="speaker-title">
                    <a href="/speakers/kyle-simpson">Kyle Simpson</a>
                </h3>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="lgx-single-speaker lgx-single-speaker-sm">
            <figure>
                <a class="profile-img" href="/speakers/estelle-weyl">
                    <img src="/img/speakers/portraits/EstelleWeyl.png" alt="speaker">
                </a>
                <figcaption>   
                <a class="sp-tw" href="https://twitter.com/estellevw"><i class="fab fa-twitter"></i></a>
                <a class="sp-gh" href="https://github.com/estelle"><i class="fab fa-github"></i></i></a>
                <a class="sp-link" href="http://www.standardista.com/"><i class="fa fa-link"></i></a>
                </figcaption>
            </figure>
            <div class="speaker-info">
                <h3 class="speaker-title">
                    <a href="/speakers/estelle-weyl">Estelle Weyl</a>
                </h3>
            </div>
        </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="lgx-single-speaker lgx-single-speaker-sm">
            <figure>
                <a class="profile-img" href="/speakers/raymond-camden">
                    <img src="/img/speakers/portraits/RaymondCamden.png" alt="speaker">
                </a>
                <figcaption>   
                <a class="sp-tw" href="https://twitter.com/raymondcamden"><i class="fab fa-twitter"></i></a>
                <a class="sp-gh" href="https://github.com/cfjedimaster"><i class="fab fa-github"></i></i></a>
                <a class="sp-link" href="https://www.raymondcamden.com/"><i class="fa fa-link"></i></a>
                </figcaption>
            </figure>
            <div class="speaker-info">
                <h3 class="speaker-title">
                    <a href="/speakers/raymond-camden">Raymond Camden</a>
                </h3>
                <h4 class="speaker-subtitle">HERE Tehnologies</h4>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="lgx-single-speaker lgx-single-speaker-sm">
            <figure>
                <a class="profile-img" href="/speakers/jay-hoffmann">
                    <img src="/img/speakers/portraits/JayHoffmann.png" alt="speaker">
                </a>
                <figcaption>   
                <a class="sp-tw" href="https://twitter.com/jay_hoffmann"><i class="fab fa-twitter"></i></a>
                <a class="sp-gh" href="https://github.com/JasonHoffmann"><i class="fab fa-github"></i></i></a>
                <a class="sp-link" href="https://jayhoffmann.com/"><i class="fa fa-link"></i></a>
                </figcaption>
            </figure>
            <div class="speaker-info">
                <h3 class="speaker-title">
                    <a href="/speakers/jay-hoffmann">Jay Hoffmann</a>
                </h3>
                <h4 class="speaker-subtitle">Reaktiv Studios</h4>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="lgx-single-speaker lgx-single-speaker-sm">
            <figure>
                <a class="profile-img" href="/speakers/burke-holland">
                    <img src="/img/speakers/portraits/BurkeHolland.png" alt="speaker">
                </a>
                <figcaption>   
                <a class="sp-tw" href="https://twitter.com/burkeholland"><i class="fab fa-twitter"></i></a>
                <a class="sp-gh" href="https://github.com/burkeholland"><i class="fab fa-github"></i></a>
                <a class="sp-link" href="https://burkeknowswords.com/"><i class="fa fa-link"></i></a>
                </figcaption>
            </figure>
            <div class="speaker-info">
                <h3 class="speaker-title">
                    <a href="/speakers/burke-holland">Burke Holland</a>
                </h3>
                <h4 class="speaker-subtitle">Microsoft</h4>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="lgx-single-speaker lgx-single-speaker-sm">
            <figure>
                <a class="profile-img" href="/speakers/ben-ilegbodu">
                    <img src="/img/speakers/portraits/BenIlegbodu.png" alt="speaker">
                </a>
                <figcaption>   
                <a class="sp-tw" href="https://twitter.com/benmvp"><i class="fab fa-twitter"></i></a>
                <a class="sp-gh" href="https://github.com/benmvp"><i class="fab fa-github"></i></a>
                <a class="sp-link" href="http://www.benmvp.com/"><i class="fa fa-link"></i></a>
                </figcaption>
            </figure>
            <div class="speaker-info">
                <h3 class="speaker-title">
                    <a href="/speakers/ben-ilegbodu">Ben Ilegbodu</a>
                </h3>
                <h4 class="speaker-subtitle">Stitch Fix</h4>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="lgx-single-speaker lgx-single-speaker-sm">
            <figure>
                <a class="profile-img" href="/speakers/david-khourshid">
                    <img src="/img/speakers/portraits/DavidKhourshid.png" alt="speaker">
                </a>
                <figcaption>   
                <a class="sp-tw" href="https://twitter.com/DavidKPiano"><i class="fab fa-twitter"></i></a>
                <a class="sp-gh" href="https://github.com/davidkpiano"><i class="fab fa-github"></i></a>
                <a class="sp-link" href="https://codepen.io/davidkpiano/"><i class="fa fa-link"></i></a>
                </figcaption>
            </figure>
            <div class="speaker-info">
                <h3 class="speaker-title">
                    <a href="/speakers/david-khourshid">David Khourshid</a>
                </h3>
                <h4 class="speaker-subtitle">Microsoft</h4>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="lgx-single-speaker lgx-single-speaker-sm">
            <figure>
                <a class="profile-img" href="/speakers/em-lazer-walker">
                    <img src="/img/speakers/portraits/EmLazerWalker.png" alt="speaker">
                </a>
                <figcaption>   
                <a class="sp-tw" href="https://twitter.com/lazerwalker"><i class="fab fa-twitter"></i></a>
                <a class="sp-gh" href="https://github.com/lazerwalker"><i class="fab fa-github"></i></a>
                <a class="sp-link" href="https://lazerwalker.com/"><i class="fa fa-link"></i></a>
                </figcaption>
            </figure>
            <div class="speaker-info">
                <h3 class="speaker-title">
                    <a href="/speakers/em-lazer-walker">Em Lazer Walker</a>
                </h3>
                <h4 class="speaker-subtitle">Microsoft</h4>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="lgx-single-speaker lgx-single-speaker-sm">
            <figure>
                <a class="profile-img" href="/speakers/simon-macdonald">
                    <img src="/img/speakers/portraits/SimonMacDonald.png" alt="speaker">
                </a>
                <figcaption>   
                <a class="sp-tw" href="https://twitter.com/macdonst"><i class="fab fa-twitter"></i></a>
                <a class="sp-link" href="https://www.simonmacdonald.com/"><i class="fa fa-link"></i></a>
                </figcaption>
            </figure>
            <div class="speaker-info">
                <h3 class="speaker-title">
                    <a href="/speakers/simon-macdonald">Simon MacDonald</a>
                </h3>
                <h4 class="speaker-subtitle">Adobe</h4>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="lgx-single-speaker lgx-single-speaker-sm">
            <figure>
                <a class="profile-img" href="/speakers/helena-mccabe">
                    <img src="/img/speakers/portraits/HelenaMcCabe.png" alt="speaker">
                </a>
                <figcaption>   
                <a class="sp-tw" href="https://twitter.com/misshelenasue"><i class="fab fa-twitter"></i></a>
                <a class="sp-link" href="https://noti.st/helenasue"><i class="fa fa-link"></i></a>
                </figcaption>
            </figure>
            <div class="speaker-info">
                <h3 class="speaker-title">
                    <a href="/speakers/helena-mccabe">Helena McCabe</a>
                </h3>
                <h4 class="speaker-subtitle">Lullabot</h4>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="lgx-single-speaker lgx-single-speaker-sm">
            <figure>
                <a class="profile-img" href="/speakers/alyssa-nicoll">
                    <img src="/img/speakers/portraits/AlyssaNicoll.png" alt="speaker">
                </a>
                <figcaption>   
                <a class="sp-tw" href="https://twitter.com/AlyssaNicoll"><i class="fab fa-twitter"></i></a>
                <a class="sp-link" href="http://alyssa.io/"><i class="fa fa-link"></i></a>
                </figcaption>
            </figure>
            <div class="speaker-info">
                <h3 class="speaker-title">
                    <a href="/speakers/alyssa-nicoll">Alyssa Nicoll</a>
                </h3>
                <h4 class="speaker-subtitle">Progress</h4>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="lgx-single-speaker lgx-single-speaker-sm">
            <figure>
                <a class="profile-img" href="/speakers/jenell-pizarro">
                    <img src="/img/speakers/portraits/JenellPizarro.png" alt="speaker">
                </a>
                <figcaption>   
                <a class="sp-tw" href="https://twitter.com/nellarro"><i class="fab fa-twitter"></i></a>
                <a class="sp-gh" href="https://github.com/nellarro"><i class="fab fa-github"></i></a>
                </figcaption>
            </figure>
            <div class="speaker-info">
                <h3 class="speaker-title">
                    <a href="/speakers/jenell-pizarro">Jenell Pizarro</a>
                </h3>
                <h4 class="speaker-subtitle">Capco</h4>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="lgx-single-speaker lgx-single-speaker-sm">
            <figure>
                <a class="profile-img" href="/speakers/divya-sasidharan">
                    <img src="/img/speakers/portraits/DivyaSasidharan.png" alt="speaker">
                </a>
                <figcaption>   
                <a class="sp-tw" href="https://twitter.com/shortdiv"><i class="fab fa-twitter"></i></a>
                <a class="sp-gh" href="https://github.com/shortdiv"><i class="fab fa-github"></i></i></a>
                <a class="sp-link" href="http://shortdiv.com/"><i class="fa fa-link"></i></a>
                </figcaption>
            </figure>
            <div class="speaker-info">
                <h3 class="speaker-title">
                    <a href="/speakers/divya-sasidharan">Divya Sasidharan</a>
                </h3>
                <h4 class="speaker-subtitle">Netlify</h4>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="lgx-single-speaker lgx-single-speaker-sm">
            <figure>
                <a class="profile-img" href="/speakers/carlos-souza">
                    <img src="/img/speakers/portraits/CarlosSouza.png" alt="speaker">
                </a>
                <figcaption>   
                <a class="sp-tw" href="https://twitter.com/caike"><i class="fab fa-twitter"></i></a>
                <a class="sp-gh" href="https://github.com/caike"><i class="fab fa-github"></i></i></a>
                <a class="sp-link" href="https://csouza.me/"><i class="fa fa-link"></i></a>
                </figcaption>
            </figure>
            <div class="speaker-info">
                <h3 class="speaker-title">
                    <a href="/speakers/carlos-souza">Carlos Souza</a>
                </h3>
                <h4 class="speaker-subtitle">Pluralsight</h4>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="lgx-single-speaker lgx-single-speaker-sm">
            <figure>
                <a class="profile-img" href="/speakers/aysegul-yonet">
                    <img src="/img/speakers/portraits/AysegulYonet.png" alt="speaker">
                </a>
                <figcaption>   
                <a class="sp-tw" href="https://twitter.com/AysSomething"><i class="fab fa-twitter"></i></a>
                <a class="sp-gh" href="https://github.com/Yonet"><i class="fab fa-github"></i></i></a>
                </figcaption>
            </figure>
            <div class="speaker-info">
                <h3 class="speaker-title">
                    <a href="/speakers/aysegul-yonet">Ayşegül Yönet</a>
                </h3>
                <h4 class="speaker-subtitle">Microsoft</h4>
            </div>
        </div>
    </div>
  </div>
</div>

## Sponsors {#sponsors}

This event wouldn't be possible without the support of our sponsors.

### Gold Sponsor

[![CAPCO](/img/banners/capco_logo.png)](https://www.capco.com/)

### Silver Sponsors

[![Netlify](/img/banners/netlify-logo.png)](https://netlify.com)

[![BlueWave](/img/banners/bluewave-logo.png)](https://bluewaverp.com/)

[![Rocket Validator](/img/banners/rocket-validator-logo.png)](http://rocketvalidator.com/try?coupon=FLASHBACK2020)

### Opportunity Sponsor

[![Pluralsight](/img/banners/Pluralsight_logo.png)](https://www.pluralsight.com)

### Community Partners

[![Project Orlando](/img/banners/project-orlando-logo.png)](https://www.projectorlando.io/)

We have very limited room for additional sponsors, so [contact us](/contact/contact/) if you'd like to be a part of this special event!

## Schedule {#schedule}

Flashback Conference will feature 2 full days of sessions in a single track format. We're still working to finalize our schedule. Check back again soon.

<!-- conference agenda -->

<style>
.bar {
  height: 8px;
  margin-bottom: 22px;
}

.bar-gold {
  background-color: #27AAE2;
  background-image: -webkit-linear-gradient(left, #27AAE2, #A9DAFF);
  background-image: linear-gradient(to right, #27AAE2, #A9DAFF);
}

.bar-purple {
  background-color: #F06E38;
  background-image: -webkit-linear-gradient(left, #F06E38, #F7AC70);
  background-image: linear-gradient(to right, #F06E38, #F7AC70);
}

#conference-agenda {
  text-align: center;
}
#conference-agenda h2 {
  -webkit-font-smoothing: antialiased;
  color: #333;
  font-family: "Poppins", sans-serif;
  font-size: 34px;
  font-weight: 300;
  line-height: 40px;
  margin-bottom: 40px;
  margin-top: 21px;
}
@media (min-width: 630px) {
  #conference-agenda h2 {
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 32px;
    margin-top: 42px;
  }
}

#daily-agenda {
  font-family: "Poppins", sans-serif;
}
#daily-agenda .date {
  margin-bottom: 34px;
}
#daily-agenda .date h2 {
  -webkit-font-smoothing: antialiased;
  color: #333;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0 0 13px;
}
#daily-agenda .date h2 br {
  display: none;
}
@media (min-width: 630px) and (max-width: 960px) {
  #daily-agenda .date h2 br {
    display: block;
  }
}
#daily-agenda .date p {
  -webkit-font-smoothing: antialiased;
  color: #666;
  margin-bottom: 8px;
}
#daily-agenda .date ul {
  margin: 0 0 18px;
  padding: 0 0 0 18px;
}
#daily-agenda .date ul.dash {
  list-style-type: none;
}
#daily-agenda .date ul.dash > li:before {
  content: "-";
  position: absolute;
  margin-left: -1em;
}
#daily-agenda .date ul li {
  -webkit-font-smoothing: antialiased;
  color: #666;
  margin-bottom: 6px;
}
#daily-agenda .date ul li:last-child {
  margin-bottom: 0;
}
#daily-agenda .date ul li.no-bullet {
  list-style-type: none;
}
#daily-agenda .horz-rule {
  margin-bottom: 2px;
  margin-top: 12px;
}
@media (min-width: 630px) {
  #daily-agenda .horz-rule {
    margin-bottom: 8px;
    margin-top: 32px;
  }
}
</style>

<!-- 2-col day agenda -->
<div id="daily-agenda" class="container">
    <div class="row">
        <div class="date col-sm-6">
                <h2>Monday <br>February&nbsp;10,&nbsp;2020</h2>
                <div class="bar bar-gold"></div>
                <ul>
                        <li><span>9:30-9:45</span><br>
                        <strong>Welcome</strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li>Jenell Pizarro</li>
                            </ul>
                        </li>
                        <li><span>9:45-10:30</span><br>
                        <strong><a href="/sessions/fouc-progressive-enhancement">FOUC, and the Death of Progressive Enhancement</a></strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li><a href="/speakers/kyle-simpson">Kyle Simpson</a></li>
                            </ul>
                        </li>
                        <li class="no-bullet"><span>10:30-10:50</span> - Morning Break</li>
                        <li><span>10:50-11:30</span><br>
                        <strong><a href="/sessions/what-happened-webmaster">Whatever Happened to the Webmaster?</a></strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li><a href="/speakers/jay-hoffmann.html">Jay Hoffmann</a></li>
                            </ul>
                        </li>
                        <li><span>11:35-12:15</span><br>
                        <strong><a href="/sessions/future-of-webxr/">Future of WebXR API's and Data Visualization</a></strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li>Ayşegül Yönet</li>
                            </ul>
                        </li>
                        </li>
                        <li class="no-bullet"><span>12:15-1:30</span> - Lunch</li>
                        <li><span>1:30-2:10</span><br>
                        <strong><a href="/sessions/webdev-like-1999">Let’s web dev like it’s 1999! 🎉</a></strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li><a href="/speakers/ben-ilegbodu.html">Ben Ilegbodu</a></li>
                            </ul>
                        </li>
                        <li><span>2:15-2:55</span><br>
                        <strong><a href="/sessions/web-accessibility">Web Accessibility: Past, Present, and Future</a></strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li><a href="/speakers/helena-mccabe">Helena McCabe</a></li>
                            </ul>
                        </li>
                        <li class="no-bullet"><span>2:55-3:10</span> - Afternoon Break</li>
                        <li><span>3:10-3:50</span><br>
                        <strong><a href="/sessions/scaling-battle-royale">Scaling a Live Battle Royale Game With No Budget</a></strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li><a href="/speakers/em-lazer-walker">Em Lazer Walker</a></li>
                            </ul>
                        </li>
                        <li><span>3:55-4:35</span><br>
                        <strong><a href="/sessions/pwa-how-did-we-get-here/">PWA, How Did We Get Here?</a></strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li><a href="/speakers/simon-macdonald">Simon MacDonald</a></li>
                            </ul>
                        </li>
                        <li><span>4:40-5:20</span><br>
                        <strong><a href="/sessions/jamstack-hits-the-spot">JAMstack Hits the Spot</a></strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li><a href="/speakers/divya-sasidharan">Divya Sasidharan</a></li>
                            </ul>
                        </li>
                        <li><span>5:20-5:30</span><br>
                        <strong>Closing</strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li>Jenell Pizarro</li>
                            </ul>
                        </li>
                        <li><span>6:30</span><br>
                        <strong>Attendee Party</strong></li>
                </ul>
        </div>
        <div class="date col-sm-6">
                <h2>Tuesday <br>February&nbsp;11,&nbsp;2020</h2>
                <div class="bar bar-purple"></div>
                <ul>
                        <li><span>9:30-9:45</span><br>
                        <strong>Welcome</strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li>Jenell Pizarro</li>
                            </ul>
                        </li>
                        <li><span>9:45-10:30</span><br>
                        <strong><a href="/sessions/humble-radio-button">The Humble Radio Button</a></strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li><a href="/speakers/estelle-weyl">Estelle Weyl</a></li>
                            </ul>
                        </li>
                        <li class="no-bullet"><span>10:30-10:50</span> - Morning Break</li>
                        <li><span>10:50-11:30</span><br>
                        <strong><a href="/sessions/cgi-to-serverless">The Dynamic Web, from CGI to Serverless</a></strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li><a href="/speakers/raymond-camden.html">Raymond Camden</a></li>
                            </ul>
                        </li>
                        <li><span>11:35-12:15</span><br>
                        <strong><a href="/sessions/fostering-local-community/">Fostering Your Local JavaScript Community</a></strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li><a href="/speakers/carlos-souza">Carlos Souza</a></li>
                            </ul>
                        </li>
                        </li>
                        <li class="no-bullet"><span>12:15-1:30</span> - Lunch</li>
                        <li><span>1:30-2:10</span><br>
                        <strong>Expert Panel: The Current State of Web Development</strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li>Matt Markham, Luke Penca, <a href="/speakers/lee-warrick">Lee Warrick</a>, <a href="/speakers/andrea-griffiths">Andrea Griffiths</a></li>
                            </ul>
                        </li>
                        <li><span>2:15-2:55</span><br>
                        <strong><a href="/sessions/dark-ui-patterns">Dark Patterns in UI — What not to do to your users</a></strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li><a href="/speakers/alyssa-nicoll">Alyssa Nicoll</a></li>
                            </ul>
                        </li>
                        <li class="no-bullet"><span>2:55-3:20</span> - Afternoon Break</li>
                        <li><span>3:20-4:00</span><br>
                        <strong><a href="/sessions/dhtml-to-css-variables">From DHTML to CSS Variables</a></strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li><a href="/speakers/david-kourshid">David Kourshid</a></li>
                            </ul>
                        </li>
                        <li><span>4:05-4:45</span><br>
                        <strong><a href="/sessions/good-bad-serverless">The good, the bad and the ugly of Serverless Web Apps</a></strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li><a href="/speakers/burke-holland.html">Burke Holland</a></li>
                            </ul>
                        </li>
                        <li><span>4:45-5:00</span><br>
                        <strong>Closing</strong></li>
                        <li class="no-bullet">
                            <ul class="dash">
                                <li>Jenell Pizarro</li>
                            </ul>
                        </li>
                </ul>
        </div>
    </div>
    <div class="row">
            <div class="container">
                    <div class="horz-rule"></div>
            </div>
    </div>
</div>

<a name="venue"></a>

## Venue {#venue}

![The Abbey Orlando](/img/banners/abbeyinterior580.jpg)

Located in downtown Orlando just steps away from the famous Lake Eola, [The Abbey](http://abbeyorlando.com) offers a fun and relaxed atmosphere that fits the vibe for Flashback Conference.

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.953512511644!2d-81.37270868506415!3d28.541116982453943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77ae2ff2218ab%3A0x4ee879fa4e4501!2sThe+Abbey!5e0!3m2!1sen!2sus!4v1563973075617!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>

## Registration {#register}

<div id="eventbrite-widget-container-64004510213"></div>

<script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>

<script type="text/javascript">
    var exampleCallback = function() {
        console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
        // Required
        widgetType: 'checkout',
        eventId: '64004510213',
        iframeContainerId: 'eventbrite-widget-container-64004510213',

        // Optional
        iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
        onOrderComplete: exampleCallback  // Method called when an order has successfully completed
    });
</script>

<a name="where-to-stay"></a>

## Where to Stay

[![EO Inn](/img/banners/eoinn.jpg)](https://eoinn.com/flashback/)

Just walking distance from the event in downtown Orlando and right off beautiful Lake Eola, the EO Inn offers a beautifully restored, 1920’s-era building and a special rate for Flashback Conference attendees.

<input type="button" class="btn" value="Book My Room"  onclick=" window.open('https://eoinn.com/flashback/','_blank')">

<a name="opportunity"></a>

## Opportunity Scholarship

Thanks to the support of [Pluralsight](https://www.pluralsight.com/) we are able to offer 10 opportunity scholarships to anyone in any under-represented group in our industry or those in need of assistance with the cost due to being unemployed.

[For more details or to apply go here](/contact/flashback-opportunity).

<a name="coc"></a>

## Code of Conduct

Attendees of Flashback Conference are expected to abide by the [Certified Fresh Events code of conduct](/conduct). If you encounter any violations, please contact an event support staff person on-site, email [brian@certifiedfreshevents.com](mailto:brian@certifiedfreshevents.com) or call (857) 919-7630.