---
_build:
  list: false
  render: never
---

**Simona Cotin:** [00:00:00] Hi, Brent. Hi everyone. So good to be here. Thank you so much for having us. It's really wonderful to be part of this. Even if it's a virtual community, it's good to be back with all of you here with the gems stack community, with the F I T C community. As as brand mentioned, I'm a product manager on Azure aesthetic web apps.

It's one of my all time favorite products and I'm so excited that I get to share some of the wonderful things that we are helping build on. For jams stack developers. And I'm joined today by Anthony, my wonderful friend and colleague Anthony, do you wanna introduce yourself as well?

**Anthony Chu:** Yeah. I think Brian covered it pretty well. I'm a PM on Azure functions and Azure static apps. And today I'm just sidekick.

**Simona Cotin:** I'm hoping that you're gonna be the main kick rather than the sidekick, but yeah. If y'all are excited about learning about local dev [00:01:00] experience and kind of we have a challenge today, right?

Anthony, our goal is to. Basically do everything out of vs code it's it might be a bit difficult to get everything done, but we're at, Lee's gonna try that and we're gonna keep each other honest. So do let us know in the chat, whenever you have questions or whenever you see that we're not. Doing the right things.

So keep us honest. And I wanna bring up my screen if that's okay. So here we have, for those of you that haven't used a, or haven't heard about Azure aesthetic web apps in the past or before it is a service that automatically builds and deploys full stack apps. To Azure from a code repository apps are built and deployed based on code changes using GitHub and Anthony and I will show you today how it works and how we can achieve all of this from vs code.

And as you can see here, we're starting our. Pet coding session or maybe pair programming [00:02:00] session. Also with , our Clipy and cats and ducks rubber ducks here just in case they might be useful. Alright. So any, anything else that you wanna add to this, Anthony? No, this is dive into

**Anthony Chu:** it.

**Simona Cotin:** Okay.

Awesome. All right. The application that we're looking at today is actually an application that is a starter app that's been built by the strappy team. It is a eCommerce application that uses next JS, as well as snip card. I saw in some of the comments and the messages that you all have sent asking questions about snip card.

This is a great e-commerce application that you can use to sell stickers to your friends. We have here the JAMstack stickers that are basically going to are covering some of the things that we're going to look at today. So I have this application running in my local environment at local.

Close 3000 and I've started it here in the VSCO terminal. And the first [00:03:00] task that we have is to go ahead and deploy this to the cloud. And I did mention that we're gonna have a per pro programming session. Before anything else I do want to invite Anthony. To a live share session. So this is a live share envious code, and I can invite participants by clicking invite.

And I'm gonna share this in chat here in my message application. Let's see. And Anthony can join the live share session. And in order to deploy this local host application to to the cloud, what we're gonna do is go, we're gonna use vias code extension. So we have. Built for Y all this Azure static web apps via code extension that allows you to run and debug your static web app in your local environment.

So this means that you can basically run [00:04:00] side by side your, our next. Next JS application or any other type of front end application alongside our serverless APIs and other things that we're gonna look at in just a minute. And I see that Anthony joined as well, which is great. So first thing that we are gonna do here is create a new static web app.

And I'm gonna do that by clicking this in the aesthetic web apps extension, I'm gonna click the plus button and it's going to ask me, what's the name of my application. It already guesses that it, I might want to name it sticker shop because that's what my GitHub repository is called. And I want to add gem here.

So this is a sticker shop gem and. I need to reload. This happens sometimes just when Anthony joins the live share session.

okay. So I need to share this again. [00:05:00] All right. It's copied to the clipboard, Anthony. Repeat name. Yay. All right.

Sticker shop jam. And then we're going to deploy this application globally, but what what we have to choose here is a region for our serverless APIs or some of our staging environments. So I'm gonna. Choose to deploy to west us. And you can see here the a non comprehensive list of frameworks that are available for deployment.

We mentioned that we're currently looking at a next application, so I'm gonna choose custom here. And the location of my application is in my root folder. And then Next builds the production artifact in the disc folder. So that's what I'm gonna add here. And [00:06:00] now we're starting the deployment of our next GS application.

So we can see here that there's feedback from the vs code extension. I can go back into.

Into viewing and editing the GitHub actions, workflow that has been created for us by static web apps. As well as I can see here in my extension. All of my static web that I've created in the past alongside my sticker shop dam and the actions that are being that have run in the past for this repository.

And let's go ahead and edit the overview, the GitHub workflow.

Do you wanna talk a bit about what we have here, Anthony?

**Anthony Chu:** Yeah, absolutely. So we yeah, so this is a workflow that was created when Simon. Deployed her app to [00:07:00] Azure. And and so we actually commit this repo on your, or we commit this workflow to you, to the repo on your behalf. And it's a pretty simple GitHub actions workflow.

It has one main task here that that. The base is build and deploys your app. So we actually deploy, we detect the type of app it is in this case is a no, no JS based app, so we know how to build it. And then we're just gonna deploy what's in the dis folder after it's done building to Azure, and this runs every time you can commit code Topo.

**Simona Cotin:** Yeah. And we listen to pushes to the main branch as well as we generate preview environments. Whenever you create new poll requests against your main branch. So these are some of the events that we listen to and are being triggered, are triggering this job, build and deploy job. And then we also listen to.

Close poll request. We have a close [00:08:00] poll request job, which basically removes those FMR environments that we create with your poll requests whenever those are being merged. So I guess the next thing that we need to look at is whether, and we see here that our application has been successfully.

Built and deployed. And now it's no longer at our local host environment, but rather at this random URL that has been generated for us by Azure static web apps. And it's ready to be shared with everyone out there to get their awesome sticker stickers to put them in their, on their new laptops.

Everyone got new laptop. Recently at least I did. And I'm happy. okay. So that was our first task, right? Deploying things from our local environment. Did we do that was that we did, right? We did. Okay. Awesome. High five. Next thing. we also want to to add to this application, an [00:09:00] authentication feature.

So currently we see that we have a shopping cart. Which is empty. We have the ability to maybe buy some stickers, but we also want to create authentication, add authentication and authorization for our users. And Azure set web apps actually. Provides streamlined a streamlined authentication experience for everyone to use.

So you have access to a series of default providers like Twitter, GitHub, and Azure active directory that you can use in your client application by calling a set of endpoints that are available for everyone. So one of them, for example, is slash dot ath slash login. In order to log in your user and appending the authentication provider.

You can also configure custom authentication providers. If you wanted to, and I'll go ahead and [00:10:00] open the nav bar. Component and right here, I will rather than rather than writing the code which might take a bit of time, I'm just gonna copy and paste and we can talk through it with Anthony.

So the first thing that we're going to do is add the the links for this. So I mentioned that This is how we call the authentication endpoint in static web apps. And whenever this is being called, we basically invoke the GitHub authentication, Twitter or Azure active directory. And we do this only when we don't have the user information available.

And you might be asking Anthony, where do we get that user information from? Where do we get that from? ? There is another endpoint that we can query in Azure aesthetic web apps that's off me. So I just added here in our component, a method to [00:11:00] get user information, which basically.

Calls this AME endpoint. And usually it returns either. Now, if if you're logged in, then it will return your user details, user ID, username, and a set of user roles that you might have configured for your users. And if you're not logged in, it can return. No. Any, anything else that you think we should add, Anthony?

No, it looks great. Okay, so we can this out. We can test this, if I go back into my browser this is our production. We wanna go into our front end application and already we see these wonderful buttons that we've created for authentication. So logging in with GitHub, but. This page could not be found.

Why is this happening, Anthony?

**Anthony Chu:** Because the endpoints aren't there. They exist when you deploy it to the cloud. But when you're running locally they're not there. [00:12:00] What do we do?

**Simona Cotin:** So something else that, and I'm already using my browser, but I wanna show folks this other tool that we have built, that's called Azure static, web CLI which is basically a CLI that Allows us to proxy requests between your front end and your serverless APIs or your backend so that you don't have to deal with things like cores.

But also it, it emulates authentication for us. And it allows us to test authentication and not run into this page net found when we call these Azure aesthetic S endpoint. So I already installed the static web CLI and actually when you're using the vs code extension that is very well integrated with this CLI.

So we can go ahead and run this application, right? Yeah. And I can do that using vs code run into [00:13:00] bug. We have here SW run application and I'm gonna click. The green arrow button here.

So now rather than having our application running at local host 3000 we're connecting to the static web app CLI server which is running at. Port 42 80, and this is proxying the request to our front end. And our eventually our backend as well. And we can see that I've logged in. I've tested.

Wow. I've tested this in the past. Have I? such a surprise. So I'm already logged in here with my GitHub rep GitHub username and we can test the. Or me endpoint, [00:14:00] which will give us information about the, like the user information that I mentioned earlier. And now I can do also log out. And for some reason my buttons are not working.

**Anthony Chu:** One of the links didn't work.

**Simona Cotin:** Sorry, the links don't yeah.

**Anthony Chu:** That's okay. We can pretend they work. You can just type it into the the location bar.

**Simona Cotin:** Yeah. I can log in with GitHub and this is the later screen where we can hear it seems like my mouse is actually having trouble here.

Okay.

**Anthony Chu:** Oh, that's weird. My click is gone. Is it only in your browser? Can you click anywhere else?

**Simona Cotin:** Oh, maybe now. Yeah. Does it work? No. okay. Interesting problem. To have

**Anthony Chu:** if you want. I can [00:15:00] actually share my screen because I can actually connect to your your local host 42 80 over live share. Okay.

Let's do it. All right. Can you share that port with me?

**Simona Cotin:** Yes, let's see if I can. All right. Shared terminals no shared servers. 42 80. Okay. All right.

**Anthony Chu:** All right. I'm opening up right

**Simona Cotin:** now. Okay. And you should also start sharing your screen.

**Anthony Chu:** I will do that,

**Simona Cotin:** Anthony to the save

**Anthony Chu:** it's like we planned this let's figure out a way to disable Simon's mouse so that I can get some screen time. Hopefully, this works for me though. So yeah I can actually go ahead and click on one of these things.

So one of the great things about Azure static web apps is that it allows that the CLI that [00:16:00] we have is that, instead of figuring how to connect to the, The provider that you want to have set up. Most of the time when people are testing locally, we just wanted to test as a certain user using this login.

So we actually allow you to do anything here. So you can actually, no I could pretend to be Simon if I wanted to. But in this case, I'll just I'll just pretend to be myself. Let's

**Simona Cotin:** pretend to be

**Anthony Chu:** Brian. I can do that so I can be Brian and then I can go ahead and log in and. So yeah, so like after I log in you can see here I've logged in as Brian.

So I'm getting the same experience that I, as I would get in the cloud but I'm getting it locally and I can, I can test it out using Brian. Now I can log and test it out as myself. In case, different people have different roles. So it makes it really easy to try out all the different capabilities without deploying your app.

**Simona Cotin:** Awesome. All right. I think that was awesome. That was great. And such a good save. The next thing that we wanna do is push this to to the cloud. We wanna make a [00:17:00] PR we wanna create a new branch. Are you able to do that?

**Anthony Chu:** Let's switch back to your machine because you have the GitHub extension installed.

Okay. Because our goal is not to be in the browser. Too much.

**Simona Cotin:** okay. Already in the browser. All right. Let me share my screen. And here. So I have my changes, but rather than pushing this to Maine, we wanna push this to jam dev, a new branch. Yeah. And this is co-authored with Anthony of course, this way you can already Approve this poll request.

And then VSCO ask me if I would like to create a poll request for this branch. Absolutely. And it's giving me a nice UI here where it's asking me, where do I want to merge changes from? So from the gem dev branch into the main branch, and the reason why I'm doing, I'm creating this full. Is because once [00:18:00] I create a new pool request a GitHub action will start running.

And it will create a preview environment for us for this particular branch so that we can share them with our designer friends. And then they can tell us that these buttons are not centered. They don't look good. They need to be changed.

and while that's happening, there was something else we wanted to do. The other key thing that we hear folks a lot within the gems stack content context that they talk a lot about is serverless APIs. And basically you have built this, we have built this wonderful end application. And let's say we want to add, let's see if this works.

We want to add to our application, the ability to for our users to send us feedback, whether they want more stickers or [00:19:00] whether they want they want some other functionality. And I, I do have here a form that I've already created. But it's not fully implemented, so I've created the form, but the backend doesn't work and we wanna create a serverless API for that.

And we're gonna go back into vias codes into our Azure static web apps extension. And here we can create a new HCP function. So this would be an API end. And I can create that in JavaScript, TypeScript to sharp Python. Which one do you prefer? Anthony? Let's do

**Anthony Chu:** JavaScript.

**Simona Cotin:** Okay. Let's do JavaScript and this will be contact.

And I know you've written this function many times before. Do you wanna help me write it?

**Anthony Chu:** Yeah. Sounds good.

**Simona Cotin:** Okay.[00:20:00] And let me just go to the index file. So this is, yeah. Now we have a new API folder that contains our contact function. And I see you're already here in the correct.

**Anthony Chu:** Yep. I am here and now you're gonna watch me type really fast.

Whoa. I know amazing. That was like a thousand words a

**Simona Cotin:** minute. So impressive. How did you do that?

**Anthony Chu:** Yeah, I don't know. It must be this conference, cause I usually type 30 words a minute.

**Simona Cotin:** I don't know. I love it. We should come back. Yeah, that's right. Makes us very productive. yeah. Okay. But we have a couple, so what do we have here? Do you wanna talk through the code? Yeah,

**Anthony Chu:** it's a pretty straightforward code. We're gonna pull in a library from send, which we have to install from NPM and then we're literally gonna.

Call that use that [00:21:00] library to send an email. So this function's gonna fire every time. We make a call to slash API slash contact, and this is gonna run this really simple JavaScript here okay. Let's go ahead. And do you install

**Simona Cotin:** the, do you still have access to my

terminal?

**Anthony Chu:** I do. Let me try deleting some stuff and I'll find out whoa.

No, I have to request access. So you have to gimme some access.

**Simona Cotin:** Okay. So I have to make the terminal read, write for everyone Anthony included. Do we trust Anthony with our terminal?

**Anthony Chu:** You're gonna find out that in 30 seconds.

**Simona Cotin:** okay. please. Don't delete. Won't I

**Anthony Chu:** won't delete. I won't do anything right now. Okay.

So right now I am in your yeah, like in, in the folder where the app is running. Okay. I think I need to go into the API folder, right?

**Simona Cotin:** Yep. That's where our our serverless function is.

**Anthony Chu:** Yep. And then now I will N PM install, send good mail. Thank you. [00:22:00] And you're seeing my actual typing speed now.

**Simona Cotin:** wait, are we still in the conference? Yes, we are. What's happening, Brian? Yeah,

**Anthony Chu:** I don't I'm firing off yeah, superpowers only there it's like a little boost. Okay. So I've installed it. So what do we

**Simona Cotin:** do now? Okay. We also have a, an API key that we need to define in order to test this right. And we do that in our local settings dot JSUN.

This is where we can define basically application settings that can be used in our application. And I have my send grid API key, everyone, please don't use it. Okay. I'm not looking. Don't take screenshots. And I think now we've just, we've created our function. I think next step is to run it right.

How do we run?

**Anthony Chu:** Yeah, I don't know it's on your machine. Do we just press at five again? Does it just work?

**Simona Cotin:** I think it should. [00:23:00] So I usually go do the click thing where I go into the run in bug panel. And then I double check that here. I'm in my SW I'm using my saw conflict and I click the green arrow.

I like the green arrow and this will start now. Our front end. So it will start the next JS application as well as our serverless functions which in our, in my local environment, it runs Azure functions, core tools. And I think the most impressive part for me here is that we can debug our serverless functions in our local environ.

So do you wanna go ahead and add a break point here in, in our servers function? Just for the fun of it?

**Anthony Chu:** Yep. Let's do it. Okay. I just added one. Okay.

**Simona Cotin:** Line seven, right? Yeah. Okay. So I'll go back into my browser and test this contact us form. And now I'm[00:24:00]

quickly typing high jam dev. Okay. Whoa. Awesome. So now we're actually not in our serverless function. Where are we? We're in our we're in our view component. We're sending message.

**Anthony Chu:** So we're debugging the front end code as well right now. Yes

**Simona Cotin:** we are. So we can check. Is the name correct? DS.

Definitely. That's what I meant. and high down, down the perfectly. Awesome. Now let's run. Okay. And now we're stopping into the Azure function or serverless function we've seen earlier where Anthony added a break point. And we can see that our body contains the email message and the information we provided in the form.

Anthony, do you wanna step over

**Anthony Chu:** this? Yeah, let's do that. This is pretty cool. Like I'm actually debugging on my machine through your machine. And I can actually inspect everything [00:25:00] here

**Simona Cotin:** as. I cannot get enough of this live share thing. It is the most impressive thing ever. okay. But I'm just gonna go ahead and just play.

Just be like, okay, we're done to bugging everything works. I think we're ready to push this to production already. And we see that we're back into our view component and your message has been. Send successfully. And I would share my let's see, should I share my email as well? Do I share? Oh, you already shared

**Anthony Chu:** your API key.

Might as well share everything else.

**Simona Cotin:** okay. Let me just share my password. okay. Hi, damn Deb. You were so awesome. We're happy. This is nut spam for sure. Okay, awesome. And this one sent just zero minutes ago. All right. So we've seen how we can create a new or deploy a next JS application from our local environment from Fs [00:26:00] code to Azure aesthetic web apps.

It's now we know that. It's been deployed to the random URL we've seen earlier, the nice URL then we've added authentication and that should also be in our deployed in a preview environment. And we've also. Created a series of functions in our local environments, which we haven't pushed to the cloud yet.

But we were able to run and debug these functions. Is there anything else that we need to do, Anthony? Yeah, I

**Anthony Chu:** think we're pretty much ready to start selling some stickers. I think all we have to do is just, like you said, push this API code. It is gonna automatically build and deploy it to for us.

And then we probably just have to go maybe add a A custom domain after, and then it gives us a free SSL cert, and then we can sell some stickers.

**Simona Cotin:** I love it. Okay. I'm ready for that. That's that will be my side kick. That will be my side kick . Okay. [00:27:00] And let me see if I can find, so there's too many actions here because I have way too many applications.

So let's see if we can find the. Preview environment here. I'm afraid we might have to go to GitHub.

Do we have to do that? No, we have to refresh because we can see that this is our production environment. But then I think we should have a preview environment here as well. Yeah. And that's, this is the second environment and here I can browse the site. So this is our. Our preview environment with the authentication functionality we've seen earlier, I can now log in with GitHub.

And this is the real deal. This is the actual screen that asks me to authorize this application and log in with it. And then we can see that in the production [00:28:00] environment. We actually, is this the production environment? I'm

**Anthony Chu:** oh, you gotta remove the dash four and then put the one back in.

**Simona Cotin:** Okay. Yes. This is the production environment that doesn't have the authentication functionality. Nice. Cool. I think that's all, I think that's all we had today, right?

**Anthony Chu:** Yeah. I think we did

**Simona Cotin:** a lot. Yay. High five. I thought that was a very productive pet coding session.

**Anthony Chu:** Yeah. We didn't even ask for help from the pets at.

**Simona Cotin:** Are you still

**Brian Rinaldi:** best friend? I am here. Sorry. that was awesome. I do love the people were asking how they can get the animated Clippy there in their vs code. And folks were sharing the extension. So I I don't know if that definitely find it too distracting for me personally, but [00:29:00] that's cool.

It's

**Simona Cotin:** I think it's lovely. It gives wholesome to the whole coding session.

**Brian Rinaldi:** So yeah, that was really cool. I know, I think one of the things we do have a couple audience questions. One of the things I think that I wanted to point out that is, is unique about the way Azure aesthetic web apps deploys stuff, is that you do create this GitHub action as opposed to kind of being some kind of thing that's happening behind the scenes. You can actually sit there, you get the code for the GitHub action and you can modify that, right? Like you could do whatever you need to do to update that and create your own CI pipeline that goes into a static web apps.

Am I correct?

**Anthony Chu:** Yeah. So if you have any kind of really custom things that you want to have in your build process, or if you want to run, puppeteer or playwright test after to test your to your deployment, you can do all that just by modifying that workflow.

That's really cool.

**Brian Rinaldi:** Yeah. So that's neat. Actually one of the audience questions relates [00:30:00] to some of that integration, cuz obviously we're talking about GitHub actions and a GitHub repo and one of the audience member said, can you deploy code from a bit bucket repo to an Azure static web app?

It says, or they say, I know it's possible deploying to Azure web apps, but does it include the Azure static web app version?

**Simona Cotin:** oh, so I think it's great that we have this question. It actually anticipates some of the work that we're currently doing to add support for more providers including Bitbucket.

**Brian Rinaldi:** Okay. So basically the answer is not yet, but it's coming.

**Simona Cotin:** Exactly great. Okay. Awesome. Currently we have support for GitHub and Azure DevOps. Okay,

**Brian Rinaldi:** very cool. Then another question from Nick was, is the GitHub extension using the GitHub CLI under the hood? Yeah, that's the question. Is it, is he using GitHub CLI or is it doing something [00:31:00] else behind the scenes?

Do you know?

**Simona Cotin:** I think that's a wonderful question. I actually don't know because I installed it in vs code and it did everything for me as a lot of the vs code extensions too. They install things like the Azure aesthetic web apps extension as well. For example, if you don't have the Azure aesthetic web CLI installed it will prompt you to ask if you if you want to install it.

**Brian Rinaldi:** So the Azure static web apps, one is using the CLI under, behind the scenes. Yeah. Okay. Very cool.

**Simona Cotin:** And can you, did you just Google, whether that's the extension is using get, have CLI.

**Anthony Chu:** Oh, I was actually looking for whether or not the the GitHub extension is on GitHub. Yeah, I would imagine that it is.

If you want to find out, you can probably look there. My, my guess is why using the Octa kit SDK to talk to it.

**Brian Rinaldi:** Okay, cool. So I saw you deployed a serverless function really [00:32:00] easily there. One of the things, so you mentioned other languages other than JavaScript. What other languages are supported for that?

**Anthony Chu:** Ski sharp and Python

**Brian Rinaldi:** C sharp and Python. So JavaScript C sharp Python. And I didn't I must have missed it. Was it, did you put it like in a special folder and then it knows to deploy it off as a function? Or how do you do that? Did you have to go create it separately or was it in the application code?

I missed.

**Simona Cotin:** So we used the static web apps extension to create that function, which it asks you, what's the name of the function that you wanna create. And then it bootstraps Folder with the same name, where it creates an index dos and a couple other files that are needed for Azure functions to to basically run this function.

Okay. And what we do then is we deploy this function together with your front end code, to the cloud, [00:33:00] to Azure aesthetic web apps. And your function will be available at the API. Forward slash the name of the function that you gave endpoint. That's why in our front end code actually, which I don't think I showed.

We're basically calling this function by calling API for slash contact.

**Anthony Chu:** Okay. Yeah. And then that makes sense. Yeah. And then in terms of the repository yeah, like by default, we put your function app inside of a of a folder called API. And if you noticed we we didn't talk specifically about it, but in the workflow, we actually had API specified as where the function app lives, but it can live anywhere.

And as long as that's reflected properly in the workflow, we'll be able to build and deploy automatically. Okay. And all.

**Simona Cotin:** And I love that Anthony said function app earlier, because this is something that's also unique to Azure functions compared to maybe other providers with Azure functions, you can have.

Within your function app, you can [00:34:00] have multiple functions. So you can add a contact function. You can add say hello function, I'm lacking and it creates shopping cart, easier shopping cart. Yes. And I think that's great that it gives you this ability to manage more functions if you wanted to within the same.

Context and within the same application that then gets deployed and scaled together.

**Brian Rinaldi:** Oh, interesting. I didn't know that. So as opposed to like having build each one, self-contained you can de you know, include, build them together as a grouping and then share what, like in environment variables and whatever

**Anthony Chu:** else across.

yeah. Environment variables NPM packages it just makes it really easier kind, just think of all your functions as one thing versus a bunch of loose functions

**Brian Rinaldi:** everywhere. True. Okay. That makes sense. In actually I did notice in the, it caught my attention that you actually installed the MPM package on the function instead of [00:35:00] I've I'm used to actually doing it on the application itself and then including it in the function.

But you. On the function, which I think makes a lot of sense. And along those lines, so some types of frameworks, like next JS and stuff, for instance, they have built in API stuff in the framework. Do you all support deploying that automatically or do what I have to do some kind of set for deploying the API within a next JS application as functions on Azure.

**Simona Cotin:** It's funny, Brian, you are asking all the right questions and you are .

**Brian Rinaldi:** I'm sorry. Am I putting you all on the spot?

**Anthony Chu:** I, no, this is great. These are all fantastic. Leading questions.

**Simona Cotin:** yeah. And we currently with Azure static web apps. We support next JS and with static generated applications.

So your SSG applications and we are actually hopefully soon going to also be able [00:36:00] to support this automatic API routes and other functionality in next.

**Brian Rinaldi:** Okay. Cool. Excellent. That's great to hear. I'm sure. A lot of people are looking for that. And I also, I love the live share stuff.

I, it's one of those things, like I do a lot of solo coding cuz of the nature of my job, but like I, I think it's awesome that you can do that in. I didn't realize, I knew you could share the local, your local host. I didn't realize you could even give somebody access to your command line and things like that.

And debugging within the so that's pretty amazing. Yeah. Nice stuff. All right. I think that's it for me today, Simon and Anthony, thank you so much for joining. This was really a lot of fun and I like seeing the interaction of you two, see you coding there together. That was a lot of fun.

So thank you so much for coming out. And we've really enjoyed the presentation. Thank you for having

**Anthony Chu:** us. Yeah. Thanks for having us.
