---
_build:
  list: false
  render: never
---

**Bekah Hawrot Weigel:** [00:00:00] Thanks so much, Brian, I'm very happy to be here and to be on cfe.dev, which holds a very special place in my heart. Brian is one of the first people that I talk to as virtual coffee. The organization that I created and co maintain. Born just to be able to talk through these things. And so to be here is very special to me.

And I'm gonna take you on a mission today. I'm super excited about doing that. In my free time, I am a secret spy. And so this is very secret, but I'm going to teach you how to work with Cypress. Maybe if I can click and it goes to the next slide. Here we go. All right. Our mission, if you choose to accept it is to ship reliable code it, the mission isn't different than other missions as developers, it's complex, it's smart and [00:01:00] maybe seemingly impossible sometimes.

So as you go forward on this mission, there are a couple of things that we need to know, and we need to understand first, you need to know who your team members are. You need to understand what your mission is and how you can complete that mission and be successful in that mission. What tools do you have in your arsenal to allow you to succeed and to go forward?

And you need to know how you can succeed to test another day. So with no time to waste, let's meet your team. I am your team leader today, and I'm going to be walking you through all of this testing. I have, my name is Becca harra Weigel. I am a career changer. I spent 10 years teaching college English before I moved into tech and my first job for the first couple of years, I spent as a freelance front end developer, and I wrote a lot of.

I loved writing a lot of tests. I also hated writing a lot of tests. So you [00:02:00] might get a little bit of that backstory in here, but I'm happy to be able to talk about when, what test writing did to help me to understand the code base. I wrote a lot of old tests. Back coverage for software that was being built.

And I wrote new tests. So for me it's something that I really enjoy doing. And I am currently the technical commun community builder for deep Graham, which is a speech to text AI company. And I am a maintainer at virtual coffee. So I obviously think that tests are super important. This is one of my very.

Favorite things to talk about. And now let's talk a little bit about the tools that we have available to us. So Cypress as a front end, testing library gets you up and running really quickly. In fact when I recently installed Cypress in a new react project, I think it took me just a little over 20 seconds to be able to get that installed.

So as an end to [00:03:00] end testing library, It mimics the actions of the user to help ensure that the user can complete the mission that they have set out to accomplish. So when we're talking about this today, we can think of ourselves as the secret agents and we have an ambassador and we wanna make sure that we keep this ambassador safe and This is gonna be really distracting.

Let me hit that. There we go. And so our ambassador, in this case, that's the user. We want to make sure that they can fulfill their mission of being able to use our software to the extent that we want them to. So we're going to protect them, keep them safe, and we're gonna do that by using Cy. We wanna make sure that there's no roadblocks, no surprises in their way.

So not only can we get things up and running very quickly, but Cypress also comes loaded preloaded with sample missions and trainings. And we're going to go through that [00:04:00] today as well. So they're ready to guide you on your mission of training and to help you foresee some of the challenges that you might.

All right. So our mission, if we choose to accept it is to write and ship reliable code. We wanna feel confident doing that. When we are confident, it allows us to move faster and to ship things more quickly, tests are often one of those things that gets pushed to the back burner as nice to haves or good to haves rather than a need to have.

But when you're confident in your code, because you have. Supporting it, then you can update, change, improve your code base, all of those things without worrying about breaking your te breaking your code after you ship it, it is for sure a time investment, but it's an investment in training for your mission.

Really? It will save you time in the end as your code base [00:05:00] evolves. And this is one of the reasons why I think that Cypress is pretty amazing. Let's see. Because let's face it. None of us wants to fail the mission at a critical time.

Sorry. Was anticipating a different slide and this one showed up which is totally fine. So this is Cypress has its own mission that it's going on. They. Anticipate, they try to create happiness. Sometimes they do create happiness. Sometimes they create nightmares. I have literally have had nightmares about Cypress tests failing.

But I think that's just another sign that I really enjoy writing tests because if I'm really into something, then that invades my sleep and then I get to work through that in my sleep as well. I also wanna say that I think writing. Is a great entry point for new developers or early career folks who might be on your.

[00:06:00] And the reason that I think that it's so great is because if your tests are written well, or if you have tests that need backfilled or written, as you go through and write your code, it helps them to understand what you anticipate the behavior of your software should be. It helps them think, put themselves in the shoes of the user and understand the path that the user will.

So it allows you to have a better and deeper understanding of what's expected. And to also think about those cases where things might not work, or they might not work as you anticipate them. So if you have tests, it's a really great place. If they're written. Very nicely to come in and understand what's going on.

How do we understand this? How do we see this and what we think the strategy is for writing our software? I also want to mention that. Oh, [00:07:00] Cypress is an open source project and it provides resources, simulated missions, and tests, and it can help you to level up their team by contributing. So if you would like to go on another mission, you can definitely check out the Cypress repo.

See if there are any other open issues and understand what it looks like to build this testing ecosystem. All right. So if you've worked with other testing tools, you might recognize some of these mocha Chi or you may have drank those for breakfast. But no matter what, if you don't recognize these things, it's totally fine because Cypress has you covered one of the greatest things about Cypress is I like to call it the Swiss army knife of testing tools because you have access to so much.

And I am a child of the eighties. I watched home improvement. I don't know if anybody else here watched home improvement, but we had Tim the tool, man Taylor, who liked to put more power into everything. And [00:08:00] he luckily had Al Borlin there as his cohost who reigned him in and made sure things worked properly.

So Cypress gives you more power with everything they're doing, but they also bring. That Al Borland side of things to make sure that it is reliable and it works for you. It gives you what you need. It gives you power. It allows you to follow the path of your users. If your user needs to support to submit a form.

They got you covered. If they need to update or change any information, they've got you covered there. You are able to follow the path of your user with the ability to mock responses and to make sure that everything is working as expected and they do it in a way that feels really natural. Once you get up and running.

But before we jump in, we need to learn how to use our tools because I don't think jumping in right now would lead to a lot of success. We have to understand what we're doing, how we're [00:09:00] doing what we need to approach and to enable ourselves to succeed rather than straight up jumping right in. So we're gonna go into the training montage.

A training montage is the part in the movie where the hero usually is training to succeed in their mission. So they might be learning to use new tools. They might be getting physically fit. There are lots of different things that they need to understand in order to succeed in their mission. And so this is what we're going to do.

We are going to train to be able to use Cypress in order to succeed in our mission. So let's take a minute. Start with the pieces of Cypress and what we're going to be using. Okay. So we've got a couple of things going on here and hopefully y'all can see this really well. But the, this is the basics of getting started with Cypress.

We [00:10:00] have this described here and all of your tests. For a particular scene. Let's say, we'll go in this describe, so if you see here, we have an, or we're describing a new agent form, this is the subject of what you're looking at. Maybe it's a location. So you have this thing you're gonna go through and rate, write tests for that.

You probably aren't going to write one test. You'll probably break those down into pieces to write multiple tests. And when we do that's where we get to the it. The it book is the test that's being run and that's where you succeed or where you. And in the it block, that's the verb. So the action what's happening and in this case it displays form validation.

Okay. So that's what we're looking for. And so a couple of things we're gonna walk through here. So any test. What the new agent form [00:11:00] will have their own. It blocked there. That's broken down into ways, as you're thinking about organizing these, thinking about, think about what the user flow is and how the user is going to be using that form.

So maybe in some situations they're going to be clearing the form and trying to submit it. In other situations, they're going to be writing on the form, submitting it with no extra clearing or deleting. So there might be different instances where you'll break these down here. But there's a couple of things that I wanna note here.

So we have this before each. You don't need it before each in your tests, but what that does is if you find yourself repeating the same thing for a number of tests you probably want to abstract that out in some way. So before each is one way to do that. But if we had three of these, it. And we're testing different things then this before each would run [00:12:00] before each of those things within that.

Describe, so here I'm gonna pause for a second and say like another, one of the things that I really enjoy about Cypress is I think it's pretty readable. So if you haven't used Cypress before a really great way to familiarize yourself with it is to read some Cypress tests and Cypress documentation is in my opinion.

Stellar. It is really great. And anytime somebody says, where do I get started with Cypress? I like to send them to the documentation. They also have a real world application that you can clone and test on. So they, and. In addition to all of the examples that come preloaded when you install Cyprus into your project.

So I think that Cyprus does a really excellent job of educating anybody who is interested in learning how to test more or better or more complex things. We've got this before [00:13:00] each. And this is so again, back to the readability of things, side dot visit, we're going to this path. This is what we're looking at.

We're looking at new agents path and side dot get first dot type Becca. So if we break this down for a second, I think that we can understand what's happening here. So first is probably the class name of an input, and then we're going to type, we're gonna perform an action and we're gonna write my name in that invite.

Now, what are we gonna test for? This is where it happens. It displays form validation, and maybe this is not the best use of words here. It displays an error might work as well, but we've got, we're gonna clear out that input and I've got that in the comment there, it clears out our first name and then we're going to try and submit the form.

What should happen in this instance, the user should not be allowed to submit the form. What happens is there should be an [00:14:00] error and the text of that error should say, first name is required and it should be visible because your user obviously wants to see what the error is. This is just a very general breakdown.

We're gonna go in depth a little bit more as we move forward. It's also worth mentioning that C is a global object here for calling the methods that we have available to us with Cypress. You're going to be chaining off of that. All right. The rest of the montage, that's our first step in training, but what else do we have in our toolbox?

And why is it important to have those things in our toolbox? Because we don't want this to happen, right? The last thing you want is to ship some code and you see this happening and you're trying to catch up and you're trying to figure out what has gone wrong and how you can fix it. To avoid this.

We need to learn to ask the right questions to walk in the path [00:15:00] of our users and to write tests that help us to avoid this happen.

Okay. And here are some ways that we can do that. So we've got events here and I'm gonna be honest. I don't use these all that much, but they can be super helpful for doing things like learning about your errors, debugging, test failures and navigation. And so there are so many great tools within Cypress that you can use.

And I. Think that you don't have to be a master of all of these things, but knowing what's readily available to you is incredibly important. So when we look at this, Cypress gives us this local storage dot debug equals Cypress colon, and then a. Asterisk. It's helpful to remember what that's called.

And if you run that in your code, if you look in your console, it tells you all of the events that are available to you. And so that helps you to better understand what you can be working [00:16:00] with, how you can do that. And it allows you to know how you can write tests even better.

Okay. So now we have these assertions and this is where you either succeed or where you fail. So this is the main part of your mission. Having the expects and the shoulds. That's what you're testing for. And so here, we've got behavior driven development, which is what I primarily use test driven development, which I almost never use.

And cha J query. So what do these things mean? Let's dive in a little bit deeper to what we've already learned. We've got What do you expect to happen here now, once I've cleared out that input, maybe I wanna check to ensure that it does not equal my name. And one thing that's worth pointing out here is it doesn't always have to be in the affirmative.

You can be in the [00:17:00] negative here. So to add that knot helps you to better know what's in your arsenal for test writing. In Chi J query the one that I also often use if you're looking at an element you need to know what's going on with that element or whether or not it has something now, I think it's super important to say that we are testing things that are useful for the user.

Okay. So I might say this a couple more times today, but we don't need, or want 100% test coverage. Maybe ever depends on what you're working on, but I have not come across any situation where I've needed 100% test coverage. We just wanna make sure that we're taking care of those users and that they can do what they expect to do now.

And very interesting example came up in virtual coffee, slack, where somebody was saying there's a shortage of soccer coaches in their league for the kids' league. I think because the [00:18:00] soccer coaches have to fill out a form that includes their information, name birth date, that kind of stuff. And nobody was submitting the form.

Why were they not submitting the form? Because one of the required inputs for birthday or age was disabled so they could not actually submit the form. Now, could we have prevented this with tests? Absolutely. So your user has failed in their mission and you have failed as software writers by not allowing them to submit what they hope to submit.

And so now there are no coaches. So what do you need to do? Let's check and see if that property of disabled is false, because that's how we make it through to be able to submit our.

All right. Here are some common examples. I'm [00:19:00] gonna walk through each of these, just to give you a better idea of what you can be looking for. What are those details that you could be testing? And so length is one of them. So maybe. Your user has a list of things that they need to accomplish. Once they've accomplished that mission, they should be deleting it.

So it's no longer on there and they can report to their supervisor that they have in fact, rescued the ambassador. So that might be in a list of things. And that list might start with three. Once they delete one of those items from the list, one of those missions, then it should go down to two. So this is where checking length might be useful.

You can also check that class. So going back to the form and the coaches that I just mentioned, we want to make sure that input is [00:20:00] not disabled. Also value, you might want to ensure that they have the correct value or that the value has updated. And that could be another valuable way to test.

Couple more here, text content, very similar. Does it have the text? Does it have my name there? Once I filled it in? Is it. You might have a button on your screen, but if it's covered up by a popup or a modal or something like that, then it's not usable by your user. So you have to ensure that they can use the software as you have anticipated.

And this is one of the ways to figure that out and. CSS, we have there, if you need to check something that has to do with that is important for the user to be able to use your software. So you do not wanna be testing all of the CSS because you will be wasting [00:21:00] your time only what is necessary for the user to be able to use that software.

Okay. And we also have some commands here. So I think like in one of the later slides, I was looking at it just before this and I thought, oh, I could probably have used a chain there. So you can test multiple things with one assertion here. It should be empty and be hidden. You don't want the reader to, or the user to be able to see that you can check what the values are.

If there's an attribute that you need them to be able to see, and exactly what that attribute might be. And if you look here, we've got a number of different things that you can be looking at that might be useful to you. But again, I think that one of the things when you're learning, how to use Cypress is to look over those tests and to see, does this make sense for me?

Do I understand what it's saying? And I think in a lot of cases you [00:22:00] can read through these examples and have a general sense of how that test has been written and what the software is supposed to. Okay. So if you don't know where to start Cypress, your team, your tools, they have your back, they have examples of a variety of different situations that you might find yourself in.

Whether that's like a very straightforward mission or something, a little bit more complicated, aing or navigation. And so when you load Cypress into your project, you get all of these sample missions, which I think is really cool. So you get a Cypress file and then fixtures. This is one way that you can mock data.

You can make a call to example Daon file that you have in fixtures. But you'll be writing your tests in the integration file. All of these tests, these are non things that I have written. These are things that come preloaded with Cypress to help onboard you into the Cypress experience. And [00:23:00] the we'll go through part of this example.

I think next, these are all in the integration file and we have the getting started file. This is the, to do spec that they have. So you'll notice that all the tests end in dot spec dot J. . And when you look through the, to do, you can see some of the more straightforward tests, but we know that on our mission, things are not always straightforward.

We're going to have to dive deeper and understand things that might be a little bit more complicated. We need to know how to use tools that are more complicated. And to do that we use, we can check out those advanced examples and see how they've written those tests. And I think that's a really great way to get started with those, to understand what they're doing.

I'll talk a little bit more about them, I think in the next slide. Okay. This is the example slide. And one of the things that I think is really nice, you'll see that there's all this commented out all [00:24:00] these comments here. And so Cypress does a really nice job in those sample missions of explaining all of those things to you.

So what is happening when we do this thing? So as you're going through, it helps you to better understand both how you'll set up your own tests and what they're doing here. So let's walk through this again, just to familiarize ourselves a little bit more with how to go through with our mission. We've got, describe we're looking at the example to do app.

What happens before every test is run. We go to this example to do now, in this case, we are displaying two to do items by default. So you anticipate when you open up that, when you go into that path, there will be two to do items. We're going to get the, to do list. And we are saying that it should have a length of two.

So that's one of those things that we're checking. And then as we go down [00:25:00] and we test more we can think of like, when you're going on a mission, there are multiple things that you want to be testing right before you get to the conclusion of that thing. So what does that look like? What are the different steps that we need to understand?

In order to be sure that we succeed. We've got the to-do list. Item one. So dot first, and we're saying it should have the text of pay electric bill. The next thing is the to-do list. The last item in the to-do list, and it should have the text of walk the dog. So as we look at this test, what we're doing is saying there are three things in this mission that we need to do to.

Those three things all have that should there, it should have a length of two. It should have a text of pay electric bill, and it should have texts of walk the dog. If you can complete those three things. If those three things happen to be there on the screen, then you will complete your mission.[00:26:00]

Now on their site, they say that you can have your first test up and running in about 60 seconds. You can debug quickly with their tools. You can decrease your test flakiness by following the path of the user and your tests are follow along the path of the user in about as quickly as the user can go through that path.

But best of all, what we have with Cypress is the ability to succeed in our software. Now, here are a couple of plot points as agents. What if we had the ability to simulate the mission to run through each step? And if we fail, pause the mission, rethink what we're doing, the approach we've been taking.

That might make the mission less exciting and less of a mission, impossible movie, but for sure it will make it more reliable. And these things Cypress has us covered in order to allow us to make sure that we're more reliable. [00:27:00] So if you're on a mission and things, aren't going the way that you want them to, you can pause that.

You can stop. See how things are going. You can check the moves that you're making. At least you can debug in the console anyway. Think about it like watching the villain, who is preventing you from completing your mission. How can you get more Intel? Debug allows you to do this. So if you look here, Oops, where'd it go here we are.

On this left side, we have a list of different mission, impossible movies. This is our test that we're writing in Cyprus to make sure that what we want the user to be able to see is showing up. So we're going to visit this is if it were running locally and we want it to display all of the missions.

So we wanna make sure that there's a list of three. We want to make sure that it ghost protocol. It has a text of ghost protocol as the first item in that list. Now you'll notice that we have the [00:28:00] debug that's right there. And what does this do? This is where we get the Intel about what's happening. And this is what we see in the console.

When we add that debug there. We get the command name. So should we get command arguments, which helps us to better understand like breaking down what we're doing piece by piece. And then we get all of this extra information. So if you're stuck at some point, debug is gonna be a really great way to help you to better understand how to.

We also have automatic waiting, which will make your tests less flaky, which means you have less tests failing because of things like the Dom, not being loaded, request, not responding and things loading really slowly. So this is a nice way to ensure that your tests are not going to break because of something that's not your.

All right. You ready? You ready to get wild? You ready for the exciting part of all of this stuff? If you're not already [00:29:00] super excited we're gonna, we're gonna time travel now. I know Ethan Hunt. Doesn't time travel in the mission, impossible movies, but I bet if he had the option to time travel, he definitely would.

This is one of the greatest things. If you have failed to be able to go back in time, to see where you succeeded exactly at what point you failed and get all of the information that you need to help you to better protect yourself from failing and to learn from your mistakes. So you can go back in time and complete your mission successfully.

This is what we have in the Cypress test runner. And this is one of the things that I love the most. You can check this test runner, which we'll see on the next screen. So just gimme a minute, but it's easier and faster to chase down the bug that might impede your mission. You won't have bad guys throwing a wrench in your plan because you can navigate the bugs with relative ease when you use the test runner.

And the nice part is you will not be breaking this space time continuum [00:30:00] when. Time, travel with Cypress. Okay. So this is what we're gonna be looking at. Now, first of all, I have a caveat. I am testing the IMDB site. You should not test sites that are outside of your control. Don't test other people's code.

But it was either test somebody else's code or build my own fan mission, impossible website, which that was gonna take too much time. I've got four kids. I don't have time for fan sites right now. A couple of things that I wanna know, you might see that you see the only here, this means that only this test is going to run in a set of tests.

We want to make sure that it displays fallout information. Side do viewport. You can set your viewport when you are running a test, which is really great. Is it necessary in this situation? No, but I just wanted to show it because I think it's cool. We're going to visit this IMDB site, which is for mission impossible.

And here, now this looks a little bit different too. We have a data test ID. What is a data [00:31:00] test ID? If you don't have some kind, something that's unique to be able to find the element on the page, whether that's a class name or a label name, then what you do is you can add a data test ID. So you wanna do it sparingly.

You don't wanna do it all the time, but in this case, we have this data test ID and which they have called hero title. Underscore title and they we're gonna check in, make sure it says mission, impossible fallout. We wanna make sure that's visible, that the user can see that. And then we're going to click top credits and then we're gonna get another data test ID.

And we're gonna look for the text of director and we're going to make sure that's visible. Okay. So this is the test runner on the left hand side. So if we're running Cypress run we have on the right side, the site that we're testing. So this is the side dot visit. This is what we're visiting here.

And [00:32:00] this is mission impossible fallout on I M D as I hit. Why does that say? It says it's pause, but it. Not hopefully this runs. But basically what I wanna say is that it's going to take you through a piece by piece so you can see exactly what's happening with your test as it runs through on the left hand side.

And then on the right hand side, you can see how the user is interacting based on your test. So your test tells the user to interact in this way or to mimic that, and that should be happening. So let's see if I can get this to play, hopefully. Oh, that's super frustrating. Okay, so let's walk through, I, we can just look through what's happening here.

So we saw in the test that was written, we've got the view port, it says that worked. We obviously have visited this mission, impossible fallout. All of these network requests happen. and then we have that data test ID that we're looking for and that assertion is [00:33:00] green. So that means we pass there. We passed in the next section and then we have top credits, which we click, which is you click top credits, and then you should see the name of the writer I believe, or the director, Christopher McCorry.

So we see this red here. It is failing. We're gonna go ahead and see why it's failing. Let, just try it one more time. Ooh, it's working. Okay. So it goes through piece by piece. So you can see what's happening. It's visiting that. Yes, that's happen. We've got all these network requests happening in the background, but you can see them showing up here on the test runner and then.

We're clicking things. We have passed that we click top credits. Let's pause this for a second. Okay. So top credits is here and once we click top credits, we see director, which is what we're looking for, but something's going on, [00:34:00] right? We've got an error. Now we're gonna walk through this a little bit. So one of the cool things is you can pin each parts of these different parts of the test.

And so when I click on get this is one of the things that we're looking for, we're looking for mission impossible fallout, and it shows it's highlighted on this side because as we click. Yes. That's what happens. We have that part. Then we highlight, we walk over those that's happened. We click top credits, which you can actually see what happens when you click it.

And then right here is where we get the error. And so you'll see when we click on this yet, what happens is all of this is highlighted. So this should give me you a little clue about what's happening here and why it's. and so let's see here, if you, another thing is, if you click this, you can also see what happens [00:35:00] before and after that event.

So you can see down here at the bottom, but it says before and after, which are both things that you can click to be able to see what's going on when you perform this. All right. So we are going to take a look more closely at what this error is. And all right, this is what we're looking for. We expect this to have text of director.

Now, we all just saw that it did say director on that in, as we ran the test, but. When we look at what the test says, it says the text was director, Christopher Macquarie writes writers, Bruce Giller, blah, blah, blah. And so all of this stuff is lumped together. And this is why it's failing because it's not showing us exactly what we anticipated that we would see based on looking at the.

So here's the question. Now you have to decide, will you change your code or will you change your tests there? For sure have been a number of times where I [00:36:00] have written tests that needed to be updated. They were failing because of how the tests were written. And there have been times where. I've written the test and I've discovered a bug and the code needs changed.

So sometimes you'll find yourself navigating that decision of what needs to be changed. And it's definitely worth mentioning here. Now we're almost done here, but I can't leave you without giving you some powerups. As you go into your mission. If you have used react testing library, then you might be F familiar with what we're about to look at.

But I think Cypress testing library is really great because even though Cypress is super readable and my opinion, Cypress testing library makes it even more readable and accessible to anybody. Who's going to come in and look at your. So you'll have access to Dom testing libraries fine by find all by query by.

And these are all commands that come off of the global side object. And so what does this do? This is just a [00:37:00] very short example, but you'll notice that we have fine by label, text and fine by text. And these are two things that we have access to when we use Cypress testing library. There. I also want to say before we come out of here, you can write an entire talk and I'm sure there are many talks on tips for good test writing, but these are some of my top tips.

Good organization matters. You probably aren't going to be the only person who's going to be looking at your code. So make sure that your tests are written in a way that's well organized and that's read. Because they should. The person looking at your test should be able to walk through in a way that makes sense in terms of where your user's going and how your user will use your software.

Don't try for 100% test coverage. It's not useful. You're gonna have to spend a lot of time maintaining those tests if any changes happen. So you want to, again, follow that user. Focus on the code that you control do not [00:38:00] go test IMDB website, like I just did. But focus on the things that, that allow you to be successful, break down your tests into logical pieces.

What are the pieces of the mission? What is the mission that the users on? How can you break those down into individual pieces? That make sense? So they should be well organized within that category. Avoid repetition. If you find yourself repeating the same things over and over, you can think about using before each you can think about using a Cypress command, or you can think about reorganizing your test, but if you're repeating the same thing, then there's probably some indication that there can be some changes that you can use.

and lastly, think about your user flows. This is what you're doing. You are protecting your user, you're on a mission to ensure that your user succeeds in what they're doing and the best way that you can do that is to follow their path and make sure that they're safe and protected. So I wanna say thank [00:39:00] you for listening to my talk, and I hope that you succeed on your.

That was

**Brian Rinaldi:** awesome. And it got really dark here. I DT know what's going on. my there's a storm going on outside. So I it's really dark. That was really great. I love, I loved all the alies too. And you kept that going the whole time you had the, so that was awesome. And also somehow worked in a home improvement analogy in the midst of a mission,

**Bekah Hawrot Weigel:** impossible analogy.

I was like, this doesn't make any sense and mission impossible, but it makes sense in my brain. So we're going for it. .

**Brian Rinaldi:** Yeah, exactly. We did have a couple questions. I had a co so I have a couple of my own, I'm assuming. Typically when you write these Cypress tests, like this is something you integrate into your C I C D process or something.

So like when new changes are checked in or it's gonna run these before it approves any kind of commit,

**Bekah Hawrot Weigel:** for sure you can do that. And so Cyprus is nice. So you have two commands, I think are Cypress open and Cyprus run [00:40:00] is what you would use in the C I C D pipeline, I believe.

And then Cyprus open is what we see when the test runner runs.

**Brian Rinaldi:** Okay. So where you run Cypress open, like from the command line or is it something you do? . All right. Awesome. So there obviously there's like a CLI you install and stuff like

**Bekah Hawrot Weigel:** that. Everything, as soon as you install Cypress, it all comes, repackaged in there.

It's really nice. Oh, that's

**Brian Rinaldi:** really nice. Okay. Awesome. So we did have a couple of questions. Michael ask, does this support internationalization? So if you're testing validation, error, is there a way to check that the error message is in the proper language?

**Bekah Hawrot Weigel:** That I'm sure that there I'm not sure, but I would think that you can pass that in to a property somewhere, but I have never had to do that.

So to be honest with you, I'm not 100% sure there. Okay.

**Brian Rinaldi:** Yeah. I kind imagine that they, you must be able to do that. So there's,

**Bekah Hawrot Weigel:** At the very least you write a test. Sorry, go ahead. [00:41:00] At the very least you should be able to write a test to know if this language is selected, then this is what you can anticipate happening.

**Brian Rinaldi:** Yeah. Okay. I guess it probably also depends on like how you have internationalized your site. Because typically these be not at the same URL, so you might have to write different set of tests. I don't know. . Yeah okay. Good question. I wish we had an answer. I know there's like some Cypress folks in the audience, so maybe they have an answer for that one if they want to throw it in the chat.

Okay. So next question is. Cypress entirely locally installed or does full functionality require an internet connection? I know it needs browser access, but are there any HTP requests going to external Cypress servers?

**Bekah Hawrot Weigel:** That's a good question. Another one that I am not sure what the answer is too. I install Cypress and then I use it and it works.

Yeah, you have to have it running [00:42:00] locally. That, that might be something, but I don't, I honestly don't know the answer to that question. Keep throwing me questions that I don't know the answer to. It's great. I'll find the que I'll find the answers for you.

**Brian Rinaldi:** Yeah, and I'm imagining if it's running in C I C D it's not, I, it's not like running in, it's running in some kind of headless browser in the C I C D I wonder.

Yeah. Do you, have you set that up before, or is that something you have

**Bekah Hawrot Weigel:** think I said up once, but it's been a while since I've done that. Couple of years since I've done it. And I feel like Cypress is constantly improving on all of the things they're doing. So ask me a question about what Cypress can do.

And I was probably, they can do it. yeah.

**Brian Rinaldi:** And so obviously this is primary. This is there's all different kinds of testing. This is all like testing your UI, not like unit testing, like you would te test your code, that entirely different type

**Bekah Hawrot Weigel:** of beast. Yeah, for sure. And that's what I'm talking about here.

And I know Cypress is working on expanding different things, but [00:43:00] for us, oh, somebody just tossed something in the chat. That might be a good example, but I don't know what question you asked. I forgot. Cause I, it was about,

**Brian Rinaldi:** The type of testing we're doing, cuz it, everything was completely focused on UI testing.

Not so different from like you, do you have your, a separate. Unit testing library and then use Cypress

**Bekah Hawrot Weigel:** For end to end testing. Yeah. And I know that, I think like component testing is in beta right now. So they've got some features rolling out, but like really I find end to end testing most useful for the stuff that I've been using.

**Brian Rinaldi:** Okay. And in, have you, does it matter if you're using like a framework, like react or view or whatever? I'm assuming it'll work with any of these things.

**Bekah Hawrot Weigel:** Yeah. Yeah. As if you can see what the user's doing and in the browser, then you should be able to test that.

**Brian Rinaldi:** Okay. So nothing, there's nothing specific you need to do to be able to use it with a.

**Bekah Hawrot Weigel:** No, you should be good.

**Brian Rinaldi:** Okay. And then there's another question. Is it possible to configure [00:44:00] tests visually in the runner instead of writing them out in code?

**Bekah Hawrot Weigel:** I'm not exactly sure that I understand the question, but I will say that there's Cypress studios I think, is in beta and this might be an answer to your question.

So rather than writing the test from scratch my understanding of. Studios, which I haven't used yet, but I'm really excited about is that you can open up that test runner. You can interact with it as a user would interact with it. And then there's like a save button or something like that will generate the test for you, which I would say.

That's awesome. Again, I have not used that and I think it's a great starting place. So it can get a lot of, it seems like you should be able to get a lot of general tests up and running pretty quickly, but there might be better ways that you can tailor the tests for your team based on what your needs are.

Okay,

**Brian Rinaldi:** That would [00:45:00] be really cool. So you just the idea that as far as you understand is you just go through and you run through like AC actually using the UI in the app and it'll convert that whatever your actions. Into test, at least the shell of a test. Yeah. Yeah. Cuz I can't imagine they know what it's supposed to say can, but it can tell you what actions you did I guess.

I don't know.

**Bekah Hawrot Weigel:** Yeah. In like when you're running in the test runner, there's already tools that are built in to help you write your test. So if you can't find an element, you can click on that element and then it will give you the command that you would be testing for there. If you're changing your class names often or what the elements are, then it becomes a little tricky because that's what they might be looking at.

And that's where you might need to make it more specific based on what your needs are, but it will have that that's available to you to make it easier to get up and running really quickly.

**Brian Rinaldi:** Okay. Awesome. And when you're writing these tests, obviously the ones you showed were like, like basic just testing [00:46:00] a simple form or something like that, but that some of these interactions can get complex.

Do you tend to break them up into smaller pieces to like, say, if it's like a multistep type of interaction, do you break it up so that you can test each little bit as it goes? Or do you make a really complex set of code to do a more. If you're dealing with a page that has more complex interactions, let's say just

**Bekah Hawrot Weigel:** really on form.

Yeah. That's a good question. And so for me, it always starts with, what does the user flow look like? So what can we anticipate the user doing? Maybe the user might transmit a form that doesn't have the data isn't exactly correct. and so it's going to fail and there should be an error.

And so I would go through what that workflow looks like and then stop there. So I wouldn't say, and then they correct it. And then this thing happens unless something important that I need to test does happen in that situation. But thinking about. How can we I also, like my background is in English, so it's [00:47:00] almost like paragraphs for me.

I've got this paper that I'm writing and each of these is a paragraph that's trying to prove something. And how do I prove that with this test? I prove that if the user fails in their journey, that they know why they failed, because there's this error message written or I show that. I don't know, something pops up and that the user's able to interact with that to help them to get back on track or something like that.

So in, in it like hashtag it depends, for so much of it. But I think that the general idea, the basic principle is to think about what would be the flow of the user from one point to the next. Okay. And

**Brian Rinaldi:** one last quick question. I know we're running outta time here, but. I know you said it's opensource.

There is obviously did have a whole, I didn't check out the pricing, but there is obviously a company, so they must sell. What do you, what's the difference between like just using opensource versus paying for it? Do you

**Bekah Hawrot Weigel:** know, they do, they have a Cypress dashboard that has a lot of [00:48:00] built in features, so you can definitely check that out.

And I think that's where the pricing comes into play. And I'm not exactly sure. Everything that's included in the dashboard. It's been a while since I've looked into that. But if you are interested in thinking about like, how do I use this on a much larger scale or something, then I would definitely check out what their product looks like.

Okay.

**Brian Rinaldi:** And then one last other question from the audience here. What about the reporting and Cypress apart from MOCA? Awesome. I don't know if

**Bekah Hawrot Weigel:** I'm not really sure that I understand that question.

**Brian Rinaldi:** Okay. Yeah. I don't know what Mo MOCA, why is it? I know MOCA is a testing. Tool, right? Yeah.

**Bekah Hawrot Weigel:** So it is a testing tool and that's part of the Cypress arsenal, there's a bunch of different things that Cypress has bundled together to allow you to use.

And there are a lot of commands that you can use that might be familiar to you if you've used mocha or Chi or whatever the other ones are. Which is another it decreases the friction to enter. I [00:49:00] think because a lot of stuff will feel very familiar if you've tested.

**Brian Rinaldi:** Okay. Excellent. That this was fantastic, Becca.

I love the presentation. It was a lot of, thanks Brian. Yeah. It's not easy to make te talking about testing sound fun and you did so really great

**Bekah Hawrot Weigel:** work. I once gave a testing talk where people fell as. Sleep. So then the next time I gave it, it had mission

**Brian Rinaldi:** impossible. Hey, I love mission impossible.

And the new there's new movies coming out, like they have a two-parter coming up and it looks like it's gonna be really cool. So that, and because the last movie was awesome. This is one of the few series that I feel like has gotten better as it goes along.

**Bekah Hawrot Weigel:** Yeah. I was hesitant. Like I'm a Jason born fan.

And so I always loved it and I was afraid to, but I watched mission impossible. I'm like this is different, but this is a lot of fun. I like it. Yeah.

**Brian Rinaldi:** It is a lot of fun.
