---
_build:
  list: false
  render: never
---

**Shy Ruparel:** [00:00:00] Hi there, I'm Shai. I'm a developer advocate at Super Blocks, and I wanna share with you the project I built over this past holiday season. So I had about 12 days off for my holiday break. Usually I take the time between New Year's and Christmas off and just relax and I do coding and having kind of the time to build stuff for me.

So one of the things I do. , like looking for a new project to build is I like going to Google Domains and seeing what's available. And I have a bunch of other domain websites I use. But in this case I use Google Domains cause I find that it's pretty transparent with the pricing. And for me, I'm looking for a URL that has a reasonable renewal fee and not too crazy and upfront.

So shout out online. Never happening. One of the ones I did find was shout out party and I felt great great inspiration to build something when I saw that url. So I'm gonna share with you a tool I've been using a lot in New York. So I'm really into this website called Particle, and so are all my friends.

It's an event kind of management thing. It sends you texts to your events, lets you know [00:01:00] who's coming, give some details, give some pictures, track all the things. I don't think I've been invited to an event that my friends have hosted in the last six months that hasn't been through this service.

So it's gotten pretty prolific in New York City. Facebook events aren't really a thing anymore, and , I felt like this would be a good excuse to rebuild it. So I went ahead and I put together a shout out party. So this is shout out party. If you go to the url, that's what you're gonna see. And I had a couple constraints here with building this website.

So first off, it had to be fast. I had 12 days off and I was hosting an event on the 16th. So I had a dinner. yesterday. And I didn't wanna waste too much time putting that together. I need to give my friends time to RSVP and all that stuff. I didn't want to deal with user auth. Part particle does user authentication through a text message code.

So kinda like a two factor. But only the authentication code. So you get a six digit number, you type it in and you're logged in. Didn't wanna deal with any of. I also wanted to use some things that I'm using for work. So I wanted to do a bit of dog fooding and use the product for the company I've been employed at for four months.

I felt like that'd be a good use of my [00:02:00] time and would end up being valuable as well. And I didn't wanna do any deployment nonsense. I didn't wanna deal with AWS or GCP or any of those guys. . So I ended up dealing with Netlify instead. Netlify was my solution to the deployment problem. And that worked out really well.

Cause it ended up also defining my stack. Netlify is a static site provider, which meant I had to do something in the JAMstack world. So I'm a Python developer and I love using flask. And you might be thinking, okay, flask, that is not a static site generator. But there's a library out there called FRAs Flask Frozen.

And flas frozen is really cool because it'll crawl through your. and it'll create html pages based on what's on your website. So it's like a static site generator for flask and it gives you the bill directory. Netlify can support it. You just let it know the version of Python that you're using and then everything just magically works.

And so that's what I ended up building this site in. Now to deal with the RSVP constraints, I wanna show you my database and how I've set things. So I've got three tables in here. I've got an attendee table, which has my attendees and their dietary restrictions and also their [00:03:00] phone numbers.

But I've gone ahead and hidden that. And we've also got a events table. So this is when our events are happening. You can see I've got the next one up already, and then the entire website is managed through this junction table. So every time I create a new event, it goes ahead and it spins up a bunch of new junctions for me.

I have a script that gets run whenever I. And what it does is it gives me all of these unique IDs. So these are all nano IDs. And if you go to one of these nano IDs, you will go ahead and you'll get a page that is for an event and for a person. So let's go ahead and look at one of those pages.

So this is shout out party slash rsvp, and then it's got a nano ID for. In the database. And so this is a custom page that theoretically only I'm gonna get to see. Now all of my invites get sent out via text message. So I'm gonna text you this invite custom, and that's really easy to do. I just use Twilio for it.

So this site gets built when Netlify goes and actually triggers a deploy for me. There's a couple things in here that are [00:04:00] being done dynamically. So the status of if you're attending is not, dyna is not hard coded into the deploy because then every time I would need to update a user state, I'd have to re-trigger or deploy, and my deploys take about 30 seconds for just the flask stuff, and then another 35 seconds for the netlify plugins, things like Lighthouse and stuff like that.

Not really a viable option for a user is to wait a minute. And then also, who's coming as well. So I don't wanna have to rebuild any time, any of this changes. And then I also wanna be able to let them click things and, feel like the event is changing and the page is changing, and give them the feeling of state changing.

And Those are my constraints here. And so what I ended up doing is I used some of Netlify built-in stuff for this. So Netlify has a bunch of really built-in cool stuff. It's got, lighthouse scoring. I'm actually really bummed that my SEO is in 92 and I will explain why later. But we're also doing some function stuff and we have a Lambda function that's managing our attending, not attending.

And then we have an edge function that gets triggered anytime you load a page. And the edge function is really cool[00:05:00] because what it. Intercept the page loading and we can go ahead and take a look at the code for this as well. , let's go ahead and take a look at this Entendi rcp. So this is just a HTML image and whenever I run this website, whenever I freeze it, it goes through and it, generates a page for every single event junction based on that nano id.

So everyone will get this page custom and then we'll go ahead and put in the status unknown and attendee unknown. And we'll use the edge function. So over here the edge function will get run before the page load. So it'll intercept the page load. And what it's doing is it's making a request to Super Blocks, which is the company I work for.

And it's asking super blocks, Hey, can you go ahead and do a quick database, look up for me, and then pass me back the format of the data that I want, and then it'll go ahead and just do a replacement, and then it'll return that replaced page. So over on the Superblock. , we have these things called workflows.

Workflows are like steps here. You can see I'm, I've configured the workflow. We're doing a lookup. We're doing a who's attending and we're [00:06:00] humanizing it, right? And then we're passing that back over to. over to the net five function, which then does the page replacement. And Superbox is giving me a URL that I can call this function from.

I can also call it from inside a Superbox application. And superbox applications are pretty solid because this is how I'm managing all of the event logistics and stuff. So I can see who's attending. I can get a link to my little custom page if I. I can create new events, which will also build my entire new junction table for me.

I can create new attendees. I manage my invite sending through this as well. So I've got a little button that I can click that'll send all my text messages. So it'll do a lookup of who's invited and what the event is. I'll grab the time, humanize it, and JavaScript, and then send out a custom bespoke text message to all my attendees with their private RSVP link that they can check into to let me know if they're able to come.

So that's how everything is run on the super blocks end. And we also have another function that I use for form handling. So that's how I'm using [00:07:00] the state update here. And we can go back to VS code and we can take a look at this RSVP again. . And if we scroll down to the bottom, you can see we've got a bit of JavaScript in here that handles an event handler.

So each of my buttons has an event handler on it, and it calls my Submit RSVP function which is just calling a standard form submission. But what we're doing is we're gonna go ahead and intercept the form. So Netlify has a. Bunch of built-in form handling, which is great. But I actually don't really care about the data.

I'm never gonna look at the response of the form. So what I end up doing is I disabled the default form behavior. and then I go ahead and I make a quick request again to a Super blocks url, which is gonna go ahead and update my status for me. So it's acting as a serverless function for me.

Essentially, I'm, I could have done this on Lambda, but instead I did it on Super Blocks. And so I'm gonna go ahead and update my notification and then I can go ahead and add a little message and update the text. So a user. The updated behavior and feel confident with [00:08:00] what's happened as well. And so this is a pretty easy way of, I think managing it and running it all through netlify.

And the code for that form handler is all right in here as well. So we're calling the netlify function, which is then calling the Superbox function as well. And it does a bit of spam protection as well. And it handles like the the API keys and all of those things for me too.

So this is a pretty cool little way of doing it. I'm essentially just using serverless, which I feel like is a pretty common way of doing. The dynamic functionality as well. So I'm really happy with how this website turned out. Like I said, I'm a little bummed out that my SEO score is only in 92.

I have a bunch of, I have the entire website actually disallowed via the robots at TXT and . I feel like it should be a zero instead of a instead of a 92. But if anyone has any other ideas of how I can make the SEO score worse, please let me know. I don't really want people using this website unless they're my friends or my found family.

Like I wanna be sending these bespoke invites to the people that I care about. And, this is a website that's, Only gonna be used by me. And that's okay. And I'm [00:09:00] into it. I'm really happy that I actually managed to build something on this and do something useful with a domain for once.

Normally they just sit there or get act as like redirects for my personal website as well. But yeah, that's that's what I built. And it's all up on GitHub. You can grab the code at chai slash party and if you want to ask me any questions or follow me, I'm on Twitter as well at Chai rual.

And yeah, that was my lightning talk. Thanks for tuning in. I hope this was a lot. Bye everyone.