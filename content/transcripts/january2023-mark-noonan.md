---
_build:
  list: false
  render: never
---

**Sean C Davis:** [00:00:00] Hello, and welcome to another Uptime FM episode. I'm your host, Sean C. Davis, and today I'm gonna be joined by Mark Noonan. Mark is a senior developer over at Cypress Cyprus, and we're gonna, we're gonna spend the whole episode talking about testing, which is that everyone's favorite subject to avoid? I don't know.

We're gonna, we're gonna find out, most of my. Early coding days were spent with Rubian Rails and anyone who knows Rails knows that testing is big. It's huge. In fact, there was even this trend and maybe it's still a thing, I'm not sure. But the trend was that we would write tests before we had the code that would make the test.

Pass. And that was, that's a whole topic that we may or may not get into, I don't know. But the last decade or so has seen this major shift toward JavaScript code and toward putting more power, and therefore more responsibility in the hands of front end developers. But, Testing for whatever reason hasn't seemed to be as high of a priority [00:01:00] with many modern JavaScript projects.

And I, or, and I should at least speak for myself here and say that I write f far fewer tests. Than I used to. And so why is that? And how should we be testing web projects today? These are two very loaded questions, but two questions that I'm hoping we can at least partially answer today with Mark.

And so with that, let's bring 'em in. Welcome to the show, mark. Hey, thanks very much. , excited to have you on here. Excited to get into testing, but before we do that, we have to start with what might be the most important question of the day, and that is what is the best sandwich? 

**Mark Noonan:** Okay. So I might have said a year ago a Cuban sandwich, but about nine months ago I was diagnosed with celiac disease, which means all sandwiches are now made.

Like fake bread and have this like crumbly weirdness to them. So my favorite sandwich now is like a taco with a corn tortilla. That's [00:02:00] as close as we're getting. And I really like all of the food that was gluten-free before. So that's the restriction of being celiac as you have to eat gluten-free food, but something like a corn tortilla that was already.

Without any gluten is so much more appealing to me than the fake store bread that is just falls apart. Yeah. I haven't had a sandwich that was any good in a long time. 

**Sean C Davis:** now I've tried to make I I should say I've made gluten-free bed bread before with just , some sort of nut flower here and there, but yeah it's really hard to get that texture just right.

Yeah. Yeah, I hear you well. Okay. What's, what do you prefer to stuff the tortilla with? 

**Mark Noonan:** Regular taco beef and tomatoes and cheese and stuff like that. And like fajitas, those types of things. Just chicken or whatever, and lots of veggies and beans and stuff is always nice.

**Sean C Davis:** This is great. Okay, so I, it's, I feel like that's a great way to turn around the diagnosis there cuz Yeah, [00:03:00] tacos. Tacos are amazing and very versatile. Yeah. You can lean right into them. That's right. That's right. Okay. So yeah let's dive into testing a bit. And you just heard my opening monologue there that I hear a lot less about testing and personally spend a lot less te time testing than I had before.

And I know it's it's a huge loaded topic and certainly many factors are involved. But let's just start there, broad strokes. So from an overall perspective, why does it seem like this reliance on testing. Decreased in recent years or is that not the case? 

**Mark Noonan:** Yeah, I think for me, I have seen a little bit more talk about testing in front end, especially for the first for the last few years and as developers maybe five, six years ago.

The standard tools for testing, were focused on maybe QA engineers who were writing like that developers might use to test their websites. Tools like Selenium, that would be part of a QA process that weren't necessarily used by [00:04:00] developers because maybe you needed to write those tests in Java. Maybe you needed to run separate stuff to get them to work.

And then visiting the website and like interacting with it was this complic. over the network communication that you also had to like, learn about and deal with. So that might have been a reason that front end testing was a little bit overlooked because if you're a developer, that's a distraction from getting your tickets done and it's a lot of extra work.

Outside of your normal context. And then if you're like, if you're right front. Five, 10 years ago as well, you might not have been doing as much complicated behavior. So like my career began at an agency where we did very little testing. We only had one client who wanted to pay us to write automated tests for their websites.

But there were mostly display based websites and the management model of a marketing website as opposed to a store or a complicated app. , the content is seen in an editorial way. [00:05:00] So the review process and deployment process for new content is more like you would have in a magazine or a publishing company where the marketing team owns the content, they'll review it.

Automated tests would tell you things that would also be caught by this manual publishing review process. I think now, Testing tools are a little better and websites have gotten much more complex with more functionality that requires heavy front end testing and like too much to do manual review.

So there's more interest I think, in the last three or four years in testing again. . Yeah. And 

**Sean C Davis:** that's a, you touched on a whole topic there, which I feel like we could dive into cuz I, I've spent many years in agency as well, and that is, do you work the testing into the price of the project? Do you just, it, it sounded like you didn't there, but let's put that aside for a second and just transitioning.

So keeping it broad though, should. It sounds like tools have gotten better, but that QA folks have [00:06:00] traditionally done more of the testing, especially for front end developers. Should, in your opinion, should front end developers be writing tests today or maybe yeah. To what extent should front end engineers be involved in testing?

**Mark Noonan:** So I'm all four front en engineers. Getting heavily involved in the testing process. It doesn't mean that you don't, if you're at a company that has a separate QA team that you're like, oh, I can drop the QA team now, developers are gonna write end-to-end tests, maybe component tests. They'll write unit tests for their functions.

I don't think that you can Separate out the responsibilities to where it's just okay, one person's gonna do all of this. But it is really comforting as a developer to run tests and make sure that I didn't break any existing functionality, especially tests that are written in a way where you can change the application code without changing the test code.

Very much so that has a lot to do with how you design your tests, but, Really get uneasy when I [00:07:00] see heavy code changes and heavy test changes that appear to be like unrelated because now we're running new tests against new code and we don't see the same level of confidence maybe. So getting familiar with testing and good testing practices helps you like have a more.

Confidence as you push stuff, that things are really still working and that the parts that you touched are working in the way that you intend. And so I see Teslas like documenting. Here's exactly how I expect this component or this page to function. . Even though you may not have the wide imagination of a QA person to be like, okay, but what if my name is null or something and Mr.

Null has a problem logging in or whatever, like the creativity of the QA person to test all these inventive scenarios is different than developers testing some known defined things are working. 

**Sean C Davis:** That makes sense. Now. Now can you give a specific example of a scenario? You might make heavy [00:08:00] code changes, but your tests wouldn't have to change.

I'm just trying to like, yeah. Picture when that has happened to me. 

**Mark Noonan:** So if we have a kind of big UI change that's not a real functional change, so we're just pushing a redesign of a page. Let's just take a header as an example. So the login button's in the same place. The things a user is able to do are all the same but actually the logging button might not be in the same place, right?

We're moving it around or we've changed the responsive behavior or something like that. If our tests are written. To select the elements they're interacting with. And to back up for a second, this is like an automated UI test that's going to choose parts of the page to click on or assert about and behave as a user.

And if we're checking that okay, there's a diviv and inside that there, there's a direct child that's a ul, and inside that there's a button. Then inside that and the our tests are caring about the Dom s. We have a really brittle test when we [00:09:00] change the UI versus a test that says, find the button that's labeled, log in and click that button.

And then we have a test where the test code can be exactly the same through a substantial UI refactor, because we're using stuff like accessibility, which shouldn't change for a UI change, right? There should be no change in a keyboard behavior, for example, or in the screen reader behavior if there's a purely visual change.

Unless elements are being reordered, but like the way you reach those elements is gonna be stable and then your test can rerun and you can say, great, I changed a hundred lines of H T M L. The output of my component is totally different now and I can run the same test as before. As opposed to when I'm reviewing a pr.

Design changed and a million tests also changed. Like it's still valid to test things and change tests when they need to be changed, but it's so nice to change tests, only the minimum necessary to catch up to actual changed functionality. So that's what I [00:10:00] mean by that. I. 

**Sean C Davis:** Okay. Cuz sometimes you're going to have so that totally makes sense for a, from a UI perspective, I'm gonna move things around, but they're going to, they're going to behave the same way.

Now if you're actually putting in a a new feature that's going to change some sort of functionality you had mentioned you don't, I ideally you still don't see big changes in the. and the test that's testing the code at the same time. Is there any advice you have for folks to Yeah. Yeah. To think about testing when they're going after new features, functional features.

**Mark Noonan:** You talked, yeah, you talked a little bit about like test driven development where you might write the test first. And I practice that myself a little bit, but I'll often write the code to get something working. It might not be the code that I like or I wanna keep, but like I figured out the solution.

And then when it's time to write a test, I will try to describe the pieces of that solution in the test. And so I'm understanding the new surface [00:11:00] area, all of the old tests should still be passing. And the new surface area of what I'm, what functionality I'm adding is gonna be like a net new test unless we've disrupted something in the code itself.

So when we're thinking. almost has driven development where like we have the functionality figured out and we can specify, okay, this is the new button in our test. This is what it's supposed to be doing. This is the side effect I expect after that. Considering that from a point of view of Now I'm really doing the implementation.

Even if my sketch code was good enough, like now I'm really building it up from the test point of view and that it should be a little bit of a reg flag. If you have to change a test that seems unrelated, that's like a, you can change it to get it green, right? But what's the reason that your code change?

Altered another test that doesn't seem like it's supposed to be related. Maybe you added global c s that hit a button, so you had to put like a force click into your test file to make your UI work correctly. That's [00:12:00] broken for the user as a side effect of your code changes. So like the failures that come that are not expected for you, that's the whole value of having test suites run while you develop, is to be able to investigate that.

and not just make the test pass, but like figure out why did your code changes, introduce these unexpected test failures elsewhere. 

**Sean C Davis:** Yeah. Okay. That, that, that makes a lot of sense. And then, You can, I know you can still run into a scenario where maybe that test actually wasn't written very well in the first place, but a lot of times you are writing those tests in context the first time around.

And if you break them later on, it you wanna at least spend some time to figure out why exactly you broke it. 

**Mark Noonan:** Yeah. And there's one thing I'd add to this, which is and often like a side effect I see of writing tests. I didn't realize for a long time I didn't think of it this way.

Everything in the test is like part of the spec, right? It's part of how we're saying this is supposed to behave. [00:13:00] So if we have things in our test that we don't actually care about, and I'll go back to those like Dom element locators. If we're having a test that says, oh, it should be this really long X path to finally choose this thing that's not just, here's how to get the element, but that's us.

it matters if the dom structure changes. For some reason. We're saying it matters that this 20 line X path, this is part of the speck of our application, when that's often not really true. So another part of like good test design and practical test design is to make sure that everything that your test has to go through to pass is something that you actually care about.

not just coincidentally how the dom was that day, and then you have to debug these failures and rewrite your tests because they're targeting things based on things you don't care about and users don't care about. Yeah, 

**Sean C Davis:** exactly. I feel like that's a good piece of practical advice there is that everything you're testing, you should you should actually care about.

So yeah. And speaking. Of taking a practical approach. I [00:14:00] know there's, there are so many different types of tests that we can write and so many different corners of any sort of application that we can test as well. And so if someone's coming in totally brand new to this space, how, where do they start?

What's if you're going to give somebody advice on. Where, what should they be testing, how much should they be testing, et cetera. What are you gonna tell to 

**Mark Noonan:** the. . So I would start with end-to-end tests. And I think they're the easiest to relate to user behavior. So an end-to-end test would start with a command that visits a webpage.

And then on that webpage you can click things, you can assert the content. You can say it should have a H one with this text detached should have this mobile menu. And so you're doing exactly what a user does. Go to a page, interact with it. In many cases, there are tools you can use to record at an example test based on you clicking around so you can get to know how the framework you're [00:15:00] using works by seeing some of the code it generates based on your interactions in the page.

And , I remember like being asked this by somebody who came to a new company and she was working with a code base that didn't have a lot of tests, and my suggestion to her was to add end to end first, and then work her way into the other testing types. And the reason, one reason it's easier to understand the other visit's probably more critical to your business.

So the , the like core things to test before every deployment, and I've heard this from a few people is. Can people log in and can they give us money? So an end-to-end test of your checkout flow where you go and you might even buy a real product for a dollar using discount code or something, right?

You might actually really have a test that goes through and confirms your checkout flow works and that your login works. If those don't work, not only can you not make money, users just probably can't easily report problems because they're blocked from logging in. . So like you would detect that [00:16:00] later in some other metrics.

So probably don't deploy code that doesn't pass, like those two core happy pass text tests. And then I think if you're writing something that's brand. Component tests are a little bit more interesting because you might not have the full application yet as you're starting in a Greenfield project. The a p I might not be ready if another team is working on the a p I, so you can build up little parts of your application based on designs and stuff like that.

And make tests that say, okay, my buttons specified to work this way. Now I'm gonna make a login form and I know everything about how that works, so I can test it in a component test, which brings up the form just by itself and doesn't have the whole application running. Doesn't need to have your server or your backend, and you can say, these are the valid states.

These are the invalid states. This is what I'm supposed to send when the user logs in, and then you can assert about your payload of your login form and have it essentially [00:17:00] done and ready to drop in before the homepage is built, before the API is deployed. As long as the API matches what the team told you was coming your login form the schema of the API is the same, you're.

Really ahead of what the application can do. So that's what we use at Cyprus. Building. The last version of Cyprus, like the major UI change was the UI development got out quite far ahead of the API development because different teams were working at different paces and the ability to build it up with component tests was really important to us.

But I still think end-to-end is an easier starting point if you're new to development especially, and you're just trying to figure out where does testing fit in. End-to-end is real, real good, starting. 

**Sean C Davis:** I like that. And quick clarification on the component test. So they're not actually running a browser, they're just, are they just running against the component code?

There's 

**Mark Noonan:** two kinds and in Cyprus they're running in a real browser. But the kind of. Industry standard at the moment is like test or, test run with testing library of u test utilities [00:18:00] that are usually running in node in JS dom simulated browser environments. So that's my team at Cypress is the component testing team.

We might talk more about it at the end, but it is, . It is the same structure as an end-to-end test, except instead of visiting your whole app and clicking to get to a certain state it runs a dev server and it mounts a component in a real webpage that you define as like your holder book page. Okay? So you can do all the same testing there.

**Sean C Davis:** Very cool. Okay. And we you mentioned Cyprus, which you was, where you worked today, and Jess and I think said a couple other tools in there. So yeah, let's take a minute to talk about what are your preferred tools that, that you use to to write all these tests. So I'm 

**Mark Noonan:** like, obviously very heavily biased towards Cyprus.

But my experience with it started like back in 2017, so I think Cypress had maybe just reached a V1 at that point. And Gleb ba muta, if anybody's into testing, they probably are familiar with Gleb. He came to Atlanta to do a [00:19:00] presentation. . It was not really about Cyprus, it was about just snapshot dips and , this incredible layer set of things he'd built on top of that plugins and stuff like that.

So he just blew my mind out my ears at that presentation. I was fascinated. , I was just learning JavaScript. Like I was just starting to get ready to look for that first job. And that was my exposure to testing. So I learned all the other tools through following GL and learning more about Cyprus and learned about jest, like after I knew about end-to-end tests.

And so for me, , everything that was not running in a browser was like more hassle. So I did write just tests at a previous job. And those were, unit tests that were just testing individual functions as well as component tests that were doing that virtual sort of simulated browser we talked about.

So that's really been my world has been the Cypress world. I know a little bit about Selenium. I never used it, but I worked at a company that had a team that [00:20:00] used Selenium. , we would work and collaborate with them as developers by putting in test IDs. We had to keep encouraging them to talk to us.

I think a lot of developers and QA are isolated from each other. We're like, no we like testing on our team. We want to help you . So tell us what you need and we'll make it easy. And that's a big topic for me. But the. Yeah, so Selenium was one way to do it. Playwright is out now as well, which is an end-to-end testing setup that's architected a little differently from Cyprus.

So there's different pros and cons there. And those are the main things right now, like in front end testing. Cyprus playwright and Selenium still very popular. Selenium. 

**Sean C Davis:** Okay. And so that's our state of this, a state of affairs today. Now, where do you think things are going to go in the next year, two years, five years?

I don't know. Are we on a, are we stabilizing or are things rapidly changing in the testing world? What's gonna 

**Mark Noonan:** happen? I think things are getting a little bit more sophisticated in helping you get [00:21:00] your job done as a developer. Like all the tools are iterating, I'm not very familiar with what's going on in the worlds of the other two tools kind of day by day, what are the new innovations in playwright or in selenium.

But there is a definitely a trend toward. , like supporting developers writing tests. Like we have the idea of yes, everybody should be testing more. What are the kind of ancillary tools, supplemental tools we can create to make tests easier to write or make different testing types easier? The, I think component tests coming into the browser is like coming in the future as well.

I believe playwright has experimental support for some component testing in the browser. We're at like that stage in Cyprus and I think people are tired of not having that interactivity. There's a package called just preview that also adds not exactly, it doesn't run the test in the browser, but it can show you later, Hey, here's what, what really mounted?

So getting out of the [00:22:00] dark times of seeing terminal output from a front end like UI test of just seeing that the H T M L and the terminal. I think that's a big thing that's changing. . At Cyprus we're doing more integrations with information you're already generating through your test recording activity, so surfacing some of that.

For example, if you have flaky tests in ci, maybe popping that up in the UI for you so you can see here's a test that fail. twice and then passed in ci so it was green. But you still wanna know something's up when this test is failing 60% of the time and still passing eventually. Is your application non-deterministic?

Is there something in your environment that's not getting set up in time for the test to run correctly? So some like extra rich feedback around that as the tools all get more mature. That's the stuff that I'm particularly interested in. The core ideas. I feel like well established in my little bubble, [00:23:00] but I agree.

A lot of developers aren't testing or aren't aren't thinking about testing. The only other thing that I think is coming is more and more focused on accessibility as the like, core of front end quality and then as a way to make your testing easier. Maybe that's a wish for me, , I like accessibility a lot and I see it as The internal and external facing quality, come together in making something accessible.

, , I find, yeah. That's seems to be a trend as well of more testing tools, adopting accessibility features. 

**Sean C Davis:** I love that. And I would love to see all of those things cuz I, I think Accessibility, like having tests for accessibility would be would help improve all the front ends that I build.

But even when you said the that folks are working on, Picking out these flaky tests and helping you fix them. It's yes. That for me, yeah. Was, that was the most frustrating part of writing tests. And I think by far, the most difficult piece of an [00:24:00] application to debug. Cuz you're like, is the test wrong?

Is the code wrong? Is it right? And it's just sometimes it's wrong. Yeah. I don't know, figuring out how to solve those problems faster. I feel like we'll cut down on the amount of. Debugging. 

**Mark Noonan:** Yeah, absolutely. And I used to think the flake was bad. And now I just see it more as another signal of potentially a user facing issue.

O often it's a test setup issue, right? . Database hasn't finished resetting before your end-to-end starts or something like that you have Race conditions hidden in your test world. But really often it is race conditions in your application that show up when there's not that many resources.

So you're running NCI on a machine that's maxed out at four gigabytes or whatever, and ah, okay. And then your application behaves differently in a way that we don't see on our nice max. And so the feedback on the flaky test is potentially, this is a user facing issue, so we wanna not just power through it and ignore it.

Maybe we want to drill down and see what's [00:25:00] going on there. It also can be a sign that we don't control everything in our tests, which is a like, in a true end-to-end test, you might wanna tolerate that. You might wanna say okay we're not mocking anything. We're not stubbing any network responses or anything like that.

We're just going all the way through. . And there might be some flake because that touches a third party thing that could be down, could be restarting or whatever. But as you think about the other testing, once you get inside the end-to-end level and move into component tests. Component tests can be anything from the size of a button to like your massive interactive tables and long credit card application forms or whatever, right?

Where in that world you can totally control the behavior. Those components might not even be the ones that talk to the network. They might just emit events and receive props so you can test like a million scenarios. in your component tests that are unlikely to be flaky. And if they're flaky, it's really probably a [00:26:00] sign that you have a random number generator in your component or something like there's no network unless you want a network in a component test.

And most of the time I don't. I would stub any network requests. So that is a way of using the information about what's fla. To go. Okay. Is the component test for what's on this page ever flaky? How, where, at what level of the onion does the flake begin? That's very likely something that involves a network and takes an unpredictable amount of time.

Or renders a massive list and on, on smaller machines, we just can't get the list rendered in time to click something. So we click the wrong thing. Or something like that. . So yeah, that, that feedback from what's happening on the other machines, understanding that as you develop locally and you might have a passing test locally, but a failure in ci getting that feedback as you work, I think is like super.

Yeah, 

**Sean C Davis:** definitely. So really exciting to see where all of this is going. And now I wanted to come back to a [00:27:00] topic we were talking about earlier, right before we, we transitioned into the next segment, which is so you mentioned in your agency days that some clients didn't wanna pay for tests. And I'm curious now that you've had more experience in the whole testing world and all of that.

Do you have a recommendation for folks who are building projects? Maybe not for some product where it's, yes, it's expected that you write tests, but yeah, particularly in that client focus, the agency world. Do you, should everyone be working tests into their application regardless? Does it make sense that you should still let the client control this?

What's your take on it now? Looking back. . 

**Mark Noonan:** Yeah. So even at that agency I did write some tests voluntarily, and the, I think the way to approach it is maybe different from putting them in ci. A lot of the agency work was driven on a big c m s platform, so you would have like deployments of certainly, but you didn't [00:28:00] necessarily build the real website.

Like it lived in the staging environment and into production environment , you could. Cypress tests that would visit staging or dev or whatever they needed to do and go and do an important workflow. And I do remember writing one for a credit card application form. And that's why it came to mind because manually testing that thing was frustrating.

Whereas I could point a test at the page before we even dropped the cash in production and make sure in production I'm getting all the right behavior and then we can drop the cash and make it live. So those, like a la carte testing things where it didn't even live in the same repo. It was my own repo that had to test in there.

Ah, okay. Like you can add testing without having to get into a pipeline. You can add testing that runs on a schedule in your own, like even your GitHub actions and visits a certain place every night to make sure that. Content authors didn't add JavaScript. Somehow that broke a page, like there are health checks [00:29:00] you can do on schedules.

That's another way to use testing. That's not a gate for deployments. So I think if your client is satisfied with. Manual testing and full control over deployments. That is their prerogative. But if you want the extra confidence, and I certainly did for something complicated like that I like, I think it's perfectly reasonable to add your own tests more like a separate testing team would do.

So it's not uncommon to have tests in a separate repo from code and have tests that point at. Like full environments as opposed to running against something on local hosts that you've been able to deploy as part of your CI build process. So yeah, I think it's a really good starting point at an agency that like you should decide how much time you wanna spend manual testing yourself before you hand work over, and how much risk you wanna allow your clients to [00:30:00] take.

It does not take very long to write. , these kinds of end-to-end tests. And internally when you're writing functions and components, that's your world anyway. It's not really the client's business, how you get your own confidence in the work you hand to them. Sure. So if what it takes for you to be confident is component tests that you can open while you develop, which is now my favorite thing in the world.

I want to have one component, one test. If I break something that component A is responsible for. , I need the component a dot spec to tell me that I broke something immediately. and I turn, even turn the timing down like we talked about. There's no network layer or very rarely a network. So I turn the timing down for failures really low.

In my compe component tests, I say don't wait for the page to suddenly display. Don't wait four seconds for a button to appear that wasn't there before. Fail in 10. 10 milliseconds. I wanna know immediately. . Because, Then now that gives me [00:31:00] confidence as I develop and as I work quickly that I have accurately documented everything the component's responsible for.

And if I delete an element or I delete a co component, I know what I'm deleting. I know what I'm losing because I have this cycle. So that helps me now deliver work that I'm more confident in. And I would probably do. anyway, even if a client didn't particularly want it, because it's just like in my brain as the development cycle and yeah, it's, yeah.

It's like coming back to a component six months later, seeing a test file that explains what it does. Just great. 

**Sean C Davis:** Amazing. Yes. And I totally agree and had a very similar experience in the agency world as well, and eventually you just say, this is part of the development cycle and it works its way into your estimates and all of that.

That's great. Let's let's transition now into our last segment for the day we're, I'm going to ask you a series of nine quick questions with probably relatively short [00:32:00] answers. We'll see how it goes. Alright. Okay. Number. What is your favorite open source product? . It is Cypress. Cypress is an open source product.

I have the joy 

**Mark Noonan:** of being a full-time open source developer. I don't know how I got this lucky, but yeah, and I would say view test utils is my second favorite. If I have to pick one that, that was just, really good before I could do component testing. Enter browser. 

**Sean C Davis:** Yeah. I wasn't sure if you would say Cypress, so write these down ahead of times and I'm like I don't, sometimes it's like yeah, I mean it's my product and I'm proud of it, but I love this other tool and all 

**Mark Noonan:** of that.

Yeah. Yeah. I probably have lots of of little favorites I haven't thought about it in advance yeah. Fair. 

**Sean C Davis:** Fair. Okay. Number two. What work in your career are you most proud of to date? 

**Mark Noonan:** This is a tricky one. I. Probably still before I became a full-time developer, I worked at a nonprofit with adults with developmental disabilities, and I was there for about seven years.

And I made some really [00:33:00] rough pH p and html and js. Stuff that replaced a manual email process that we had. So like my old boss was able to stop writing out 30 people's schedules on paper and typing out the emails by hand. Saving like a couple hours every Friday or something. And , she was great and she was also like supportive to me learning to be a developer, which led me to me leaving the company.

But I'm really happy because that old stuff still works. It's seven years later and those emails are going out every week. And every now and then I get, cause I'm CC'd on that, on my personal account, . So I just see them coming out in like beautiful alphabetical order , and I'm like, yep, she's using it.

She's using the thing. Yeah, that, that type of work is like really meaningful to me. So I'm really happy that work can be useful. That's great. 

**Sean C Davis:** That's great. Okay. Number three, tabs or spaces? I'm a tabs person. You're a tabs person. All right. 

**Mark Noonan:** And more to [00:34:00] the point, I think it's actually resolved.

The reason the tabs are better is if you have accessibility in mind and you need to increase your font size on the editor, you can reduce the size of a tab in your editor too, so your indentation is not super wide because you've needed to use a bigger font size. So these are independent settings you can control in the editor.

Whereas if every tab is just full of spaces, your font size is much more annoying because it also increases your indentation. Fundamentally, I don't care. But that pushes me. I never cared until someone pointed that out. 

**Sean C Davis:** Interesting. Cuz yeah, I've been a, I've been a spaceless person. I've never heard that, that argument.

So that's it's a good one. I like it. All right. Number four. This one actually came from a conversation with my wife the other day, and I really liked it. So I was like, I'm gonna, I'm gonna use this in the show. Let's see how it goes. So number four is, if you had to move to another city tomorrow, But, and can't stay in the current city you're [00:35:00] in, where would you go?

**Mark Noonan:** I would probably go back home to Ireland where I'm from. And I guess if I had to, I would go to Clown Mel, which is my hometown, which is, Okay. Small town in San Temporary in Ireland. It's it's nice, it's quiet. I like it there. amazing. 

**Sean C Davis:** Okay. You knew exactly what that was. That was great. Yeah.

Something came 

**Mark Noonan:** to my head immediately. . 

**Sean C Davis:** All right, number five. So this time of year, there's a lot of these year end review posts like recapping outcomes from predictions from last year and various web development topics and so forth. And so we talked a little bit about testing, but I, if I were to say we fast forward a year at this time next year, what's one thing that's going to be in, in most of these article?

**Mark Noonan:** I feel like a lot more people are gonna use felt, I was at a conference the other day and there was AEL kit. No, it was a felt presentation and the guy happened to realize that SEL kit had just reached 1.0. And the room was also like [00:36:00] pretty full. So that in terms of front end frameworks, I think that's gonna be growing this year.

Yeah. And if we're just picking one thing, I'll say spelt more. 

**Sean C Davis:** I like that. I've read somewhere that this is, someone predicted in one of these posts, they said that this is gonna be the make or break year for selt ENS felt kit. And I was like, I don't know if it's going anywhere, if it doesn't get as popular, but but I think that's a great hot take.

Yeah. And I don't think it 

**Mark Noonan:** has to go anywhere really. It's just like a cool thing some people can use. And I, yeah, and that's fine. . Yeah, . It's just okay, great. . Yeah. And I haven't actually used it very much, but I really like this guy's talk, so I'm super interested 

**Sean C Davis:** now. Okay. Okay, great. Yeah, and I've only done a real quick kind of proof of concept, but I'm hoping to build a new site with it this year as well, so yeah, this is great.

All right, number six. What is the, either the best or the most useful advice that you've received throughout your career? 

**Mark Noonan:** All right. I have. One, and I cannot remember exactly where it came from, but it's Don't [00:37:00] practice your mistakes. Which I like. That is a it's from a music teacher who maybe I saw on a video, maybe it was in person, someone who just like mentioned in passing.

And so when you're doing like focused practice in music, you wanna get better at an instrument when you know that you're doing some particular movement wrong and you're just trying to get through the whole. . He's that's practicing your mistakes. You're teaching your body that's how you're supposed to hold the guitar, or that this is the thing.

And then you're gonna have to unlearn those mistakes. So even though you do need to spend some time getting through an entire piece, he's that stuck with me. I've put in the effort, fix the thing that you know is wrong, that you're doing with your skills, and don't practice your.

and you can 

**Sean C Davis:** apply that to pretty much anything, right? 

**Mark Noonan:** Yeah. Like building habits and stuff like that. When you, I re read more about habits and things in the last few years, and it's yeah, whatever we're repeatedly doing, we're also training ourselves to continue doing. I found that to be really good advice.

**Sean C Davis:** Exactly. Exactly. [00:38:00] Okay. Number seven. Another this or that, NPM or yarn. something else. 

**Mark Noonan:** I don't really care. . 

**Sean C Davis:** So that's, that is a fair answer. I like that. 

**Mark Noonan:** Ya. Yeah, there's, I see this with a lot of tools where there's sort of an ergonomics arms race and one will pull ahead, we'll have something like I think yarn is great for mono repos with multiple packages and stuff.

It seems to be more popular for that. So for that reason, because I work in a monorepo, I haven't worked with an NPM in a while. , it almost seems like the tools in their next major catch up with a lot of the more popular things from the other tool. So just whatever is fine for me. . 

**Sean C Davis:** And that's why it's really nice to have too or more because then they're, each one is what's the saying?

The rising tide raises all ships or something like that. That's not Right. 

**Mark Noonan:** And you're never blocked, Yeah. I think PMPM has an edge for speed and caching packages that you install. And stuff like that. I don't think I have enough pain in my life related to that problem that I wanna go and investigate more.

But I do like that if I was blocked by [00:39:00] something in the architectural choices of npm, I have two other package managers at least to think about before I'm like, blocked. Blocked. It's great. Exactly. 

**Sean C Davis:** Exactly. Okay. Number eight. What's the worst mistake that you've made in your career as a developer specifically?

Worst 

**Mark Noonan:** mistake that I've made in my career as a developer.

I might have waited too long to move into this field. I think I really enjoy it and I liked the job I had before as well, but I was probably ready for like employment maybe a couple of years before I started looking for jobs in earnest. I think. Takes a while cause I come from a different background, right?

Like I said, nonprofit work and my degrees. Were not in computer science or anything, so it takes a while to develop the self-belief to like switch gears. Maybe that's, maybe it. That's your quick answer anyway. . 

**Sean C Davis:** Okay. I'll take it. I'll take it. All right, last one. Number nine. If you can [00:40:00] host a lunch with anyone who, one person who is alive or not, who would.

**Mark Noonan:** Alright. I, the one that comes to mind is the poet Kevin Higgins, who is an Irish poet, and he just recently passed away, like a week ago. And he's somebody that I had some interactions with over the years as I was a little bit interested in writing maybe 10, 15 years ago. And he, I just remembered seeing the tributes to him, like how great he is and how nice it would be to talk to him again.

So everybody should go check out Kevin. Hi. , 

**Sean C Davis:** Kevin Higgins. Okay, I'm gonna do it. All right, thanks Mark. This was a really great show. Appreciate you being here. Yeah. Thank you very much for having me on. Absolutely. Now before we go, feel free to take a minute, tell listeners, viewers how to get in touch with you and feel free to plug anything else that you're working on.

**Mark Noonan:** Sure. So I'm on Twitter at markt nunan and I'm on LinkedIn. That's a fine way to get in touch with me too. We have a Cypress Discord that you can find on our Cypress website. Cypress [00:41:00] do I. And I'm pretty active in there, especially if you tag me. There's a lot of communication in there, but if you have questions about testing or something, that's a good place to get in touch with me.

I suppose I'll plug a stream I'm doing tomorrow that will be hands on with component testing with Nick Taylor. That's. in my most recent Twitter stuff. I don't know, like the address to put in here. Okay. But that'll be some chat. And also just some hands on, like I'll teach Nick how to use component testing.

So if you're interested in Cypress component testing, that's that's something to check out. Fantastic. 

**Sean C Davis:** All right, thank you. Okay, and a quick reminder that these shows are now recorded live on the first and third Tuesdays of each month at 1:00 PM Eastern Time in the us, which is 5:00 PM g m t. We're then later syndicating them on cfe.dev and YouTube as videos and also in audio format.

Wherever you prefer to get your podcast, we're coming back. In three weeks we have a kind of an extended break here. It's gonna be February 7th with Andre Vea, and we're likely [00:42:00] gonna spend most of that time on website performance and we'll touch on some accessibility, which we mentioned a little bit today.

So that'll be a fun continuation. And and then a quick reminder that the jam.dev is coming up Wednesday and Thursday next week, January 25th, 26th. It's a two day virtual conference from C ffe. And I get to co-host with Brian Ranaldi. So I'm super excited about this. It's gonna be a great set of sessions from, it's, it's really, it's a great star study cast, so it's gonna be a ton of fun.

You can visit the jam.dev to learn more, hope to see you there. And from all of us@cfe.dev, thank you for joining us for this show, and I'll see you next.

