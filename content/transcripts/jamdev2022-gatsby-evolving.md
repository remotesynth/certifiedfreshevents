---
_build:
  list: false
  render: never
---

**Abhi Aiyer:** [00:00:00] Hello, everyone. Thanks for having me. I hope you've had a great conference day SU thus far. I hope to close this out with something near and dear to my heart, which is Gatsby. And we're gonna get into a lot of cool technical bits. So the talk title here is Gatsby is Evolv.

I just wanna welcome everyone old and new to the jams stack we're Gatsby. And we can't wait to see what you'll build this year, but what is Gatsby? Today web applications are comprised of disparate data sources and Gatsby has a data layer that can source content and data from anywhere. And it gives you a consistent API to build beautiful web applications.

So literally you can source content and data from anywhere nowadays in our ecosystem. We're grabbing data from any [00:01:00] different third party tool. A lot of us are running, maybe headless CMSs, we're storing data and air table. We have Algolia to do our search, but if you were to just implement each one of these third party APIs into your application, you're gonna find yourself doing different things.

Each time to integrate all different providers, have different certain installation, initialization steps, and that's where gas comes in. We want to be that middle layer. GAE has a rich plugin ecosystem and it helps you connect data from services like CMSs air, table Shopify, and it helps assemble it into a really unified GraphQL API.

Gatsby we call this the content mesh. It's a central layer between the data of your application and the front end code. Gaspe also has a build system coupled with react to essentially help you build blazing fast applications with great lighthouse scores and good core web [00:02:00] vitals. Gatsby also has Gatsby cloud and Gatsby cloud is the jams stack delivery platform for Gatsby it's fast, secure, scalable, and available.

Now with Gatsby cloud, you have a whole jams stack tool chain that can build your application really fast and deploy it to a CDN instantly. Plus you don't have to sweat the details with setting up cloud infrastructure. We got. Gatsby cloud also has CMS previews, which is often a feature that's lacking in a lot of headless CMSs with Gatsby cloud.

You can preview draft content and share with all the stakeholders before you hit publish to production.

When I look back at 2021, I notice that a lot of developer tools are becoming cloud native, but what is cloud native? Cloud native is a set of tools and practices that allow organizations to build, deploy, and operate software applications, more frequently, [00:03:00] predictably and reliably. They leverage a network of cloud resources for tasks that may happen for your, in your applications.

And you would normally do these on a single machine or single process, or even just your a single VM. If you don't believe me. A really good example came out last year, which is GitHub code spaces. Code spaces is a cloud native environment for GitHub, which, GitHub is now using for their engineering teams.

It makes a lot of sense. GitHub is a huge distributed system. It has tons of different languages and services going on. And with code spaces, engineers get a cloud version of vs code. They get environments with different VM sizes and a standardized dev environment across your. We're thinking about this experience a lot here at Gatsby, but for us to get to this utopia, we had to do a lot of things in 2021 to bridge that gap.

So we're gonna talk about the 20, 21 recap here at Gatsby. And the theme [00:04:00] was really shifting left and the worst shifting left means if you assume. Or if you imagine, sorry that dynamic is over here and static is over here. In the beginning of 2021, Gatsby was what you would normally be hearing in the jams stack as the SSG static site generator.

And that's true. That's where it was, but where we're headed is not necessarily fully dynamic, it's like somewhere in between. So that's where we're going. That's where we were headed. That's where we're continuing to go somewhere in between, but definitely not as static as.

In 2021, we released fundamental building blocks for the future

one. We released Gatsby hosting. We partnered with Fastly to release Gatsby hosting and provide an easy way to get your applications to production. All of our S3 users thanked us. If any, it's so easy to enable Gatsby hosting for your project. If you're using Gatsby cloud, [00:05:00] you just connect a domain, we'll generate the let encrypt certificates and you're off to the races.

Next we release Gatsby cloud functions. I think cloud functions had a lot of hype last year as to add the dynamic pieces to your applications, whether you wanna do form submission read from third party data, we wanted to bring the dynamic world of serverless APIs, but in a way that's native to Gatsby, we wanted it to feel as part of your application as a, as opposed to something you deploy on the side, which people feel that pain a lot when they're using AWS cloud functions alongside an S3 or cloud front distribution.

So having that native in gasp is super nice, cuz you're, co-locating your functions with your, your UI. We also shipped something really interesting gas four, which we shipped just a couple months ago. It shifts with GA V DB, which is a new data store that we are leveraging to help Gatsby [00:06:00] cloud scale, as well as people running Gatsby on their own machines, maybe in circle CI and such.

What Gatsby DB allows the. To get back is the pain of debugging out of memory issues. So we've reduced peak memory utilization to use Gatsby in a bigger project. In the past you notice that bill times may have been slow or maybe your machine ran out of memory and it's constantly frustrating, right?

With GAE DB, we allowed the machine to utilize all CPU course. Prior to this GAFE was using Redux to manage state. And now we're using something called LMD V, which is lightning memory mapped database manager, which has a lot of really interesting benefits. And we use like the node port of this.

The maintainer is Dr. Evidence on GitHub, shout out to him for really having a well maintained library. It's changed the life of a lot of Gatsby customers. Before we had some customers who couldn't [00:07:00] do a warm build in like in the static world, a warm build is like your second, third build where you don't have to rebuild things you've already built before.

As opposed to what we call a cold build. Gas V with gas V DB, this, these customers can actually do warm builds. So imagine waiting an hour and a half for every build. Now, your second, third, fourth builds are 50% less, which is awesome. By creating this data store as like an external database, it gives you an interesting property because if you can export your database, you can restore it.

And if you can restore it, you can restore it in a worker, a serverless function. Where I'm getting at is you can query the data layer of Gatsby outside of Gatsby. And that's really powerful.

So here's like a little diagram. So we have the main GAFE process and GAFE is just a huge build manager where it's doing different tasks [00:08:00] for your website. It'll be gathering data generating HTML pages deploying cloud functions. What have you. And with GA we GA V DB, all these data requirements that are needed for your specific service within Gatsby, let's say you're doing image processing or fetching data from a CMS with a shared data store like this.

We can actually parallelize a lot of that work. We can run different tasks that are in parallel. You don't have to have sequential wait time. And if we're talking about cloud native here, this is definitely a glimpse in the future of like how we can scale different Gatsby tasks across thousands of workers.

We'll get into more of that later. What's really cool. Is these workers, they have access to the gased DV to fetch any of the disparate data sources you need, and then it can do whatever it needs to do in that worker.

All right. Now we're gonna get into the acronym world.[00:09:00] Last year we deployed at the end of this year, this last year, we came out with different rendering strategies. I was mentioning Gatsby was shifting left. And with these new rendering strategies, we actually give the choice to the user.

Like, how do you want to build your application? SSG is fine. What is SSG static side generation. The user wants to build their site fully at build. They don't mind taking extra time to build files that, a lot of the build processes generating tons of files and JavaScript, files, images, et cetera, they don't mind.

And at the right scale, let's say it's a hundred thousand pages. This might be the best UX available. It really depends on what kind of data you have cuz pages don't directly match. It's really about how much data you have. You need to create the page and how much time are you willing to wait for that page to be one, to get the data it needs, and then to generate all the files for it to be served.[00:10:00]

Some people may be fine with this, but if you're running like an e-commerce site and time is money, you maybe not have that luxury. So we wanted to introduce other strategies for users to, to build their applications. I'll explain static side generation as it's in the reflection of Gatsby cloud.

So Gatsby site visitor will come into Gatsby. It's deployed on Gatsby hosting. It'll ask for a certain page, which will then correspond to a certain file. We will get the request, it comes into the hosting layer. And then we tell a Gatsby cloud worker to pull the file from a file storage in the cloud. Then we'll return that response.

And with Fastly help, we'll cash it in the CDN on a second request. This file is cashed at the CDN and your file is, returned very quickly.

Next is server side rendering. This was the one that everyone was [00:11:00] asking us for like probably four years now. We finally got it to. At the end of the year server side rendering generates the full HTML for a page on the server. It's for develop it's for developers who are making hybrid websites, then they need to create personalized, real time and secure applications.

So for us, a lot of, with the content mesh, we have a certain way of sourcing data, but you may have your own APIs. You may want to hit up like a third party, AB testing service, like Optimizly or launch darkly. Like these are other use cases as like an escape patch from SSG, right? Not everything has to be static and we wanted to give this rendering mode.

So it's up to you. If you have use cases that require one, you're not waiting for long times for builds for certain pages, or you just have data sources that aren't really compatible with the ecosystem of Getsu right now. Or data that needs to change in his real time, [00:12:00] or, as time is a factor, SSR is for you, and it doesn't have to be every page.

It's only the pages that you specify. So in server side, rendering a request comes through to Gatsby hosting and it's a cash mouse. Our hosting router then sends this request to gas, to a Gatsby cloud worker. And it'll run a a function called get server data. So if you're, we're gonna get into more and this later, with enabling this mode, all you have to do is export one of these functions, get server data, and that'll do the calculations, whatever the user specifies, if you wanna go fetch something, that's the place to do it.

And then it'll return those. That result as props to your component. And then it's the same old react rendering that we do today, where we will then render the page and send it back to the user by default SSR pages do not get cashed, but you can set cash headers through the get server data function.

And then, [00:13:00] that's perfect if you want to, if you're doing calculations with comp computations and you wanna just cash them for a small amount of. All right. Last is our most exciting one, which is deferred static generation. This is called DSG. It's for large websites and businesses that need the performance of static sites without the wait time that comes with large sites.

So we have a lot of customers that a hundred thousand, 200,000 types of pages. And at some point static feels really like a bad decision. All of a sudden, cuz you're waiting an hour and a half to build a site and you just changed like. A couple pages. You did very minor things yet. You're getting taxed by the whole build process and we feel the pain too.

We totally recognize it. And I just wanna apologize for everyone having to waste time or, our tools, letting us say that it's okay to grab five minute coffee breaks or 20 minute coffee breaks between builds. That's not a productive world for us. [00:14:00] If we're trying to scale static and we're trying to ship our applications.

So this tax we jokingly, it's like an internal kind of joke. We call this the jam tax. You don't understand the jam tax when you enter the jam ecosystem, but you start feeling it later, right? When you stick around, it's almost like they're, if they you're charging for your citizenship here, but it shouldn't be that way.

And that's what DSG aims to. So in DSG, the first request is a cash mess and we send just like with anything else, we'll send that request to the GAFE cloud worker and it'll leverage the GA V DB to run any page queries that it needs to fulfill the data of the page. And once the page is generated, it gets sent back to the user of media in the background.

We store all the generated files from building that page in our cloud stores. So after this first run, it's essentially an SSG page again on a second request [00:15:00] because Gatsby cloud has done the dance and it'll, it'll just bypass the cloud worker and it'll grab these files necessary straight from the file cash.

And if, if you happen to have that response already cashed by the CDN, which you probably have, then you're gonna get that page faster because it is cashed at the CDN pop relative to you. And you'll get a direct response. I think with Gatsby cloud Gatsby hosting and these new rendering strategies, I think we're becoming really a really good platform for building on the.

You have the data layer that really puts all these pieces together and you have a really great user experience that kind of like forms it as well. So we're gonna do a little demo. Let me switch over to this. This is Gatsby cloud and this is a little demo. I want to put us all in a different lens for a sec.

I'm starting [00:16:00] a new startup. Okay. It's called P snuggles. And what is P snuggles? If you love dogs and you love snuggles, then you're gonna schedule time with the best dogs on this planet. And so this is my app. It's a Gatsby app and it has pretty much all the features we've been talking about for 2021. So first we'll walk through the app.

Like authentication is a big deal for most apps and with GAFE functions we're able to I'll OAU with GAFE functions. You can write in a function to create OAuth clients and you can write, redirect functions that will then exchange your codes for access tokens. And then you can use that to then, whatever, do whatever you like for authentication.

So we'll sign in with Google. I think I'm already signed in, but now it's, now it just did a O off handshake and now we're in the catalog. So this is my catalog. It's all the cool puppies that we have and dogs that we have for you to snuggle [00:17:00] this data here is sourced from Contentful and I pull up content here.

This is my Contentful space, and I have all my dogs and cats here. We'll get into cats in a second. All you cat lovers, but. Here's my catalog. I can view the details and see okay, for bozo. This is his title, image, and description. Now, if I wanted to change some information about this, I'll go into Bozo's post here in Contentful.

Let me make some changes. He is a great dog and is dope. He must support the Lakers. Then I'm gonna click open preview,

and this is gonna go to an intermediate router. So we're now in Gaty cloud territory, we're using our CMS preview product to [00:18:00] rebuild the site with justice change. I'm not publishing it to production, but I'm keeping it in a preview environment. And now if I wanted to go and share this with my colleagues, I can't just show, Hey, this is now this is the change that you wanted me to make.

Does it look good? Okay, great. I think it looks super nice. So I'm gonna publish it. If I head back to our Gatsby cloud dashboard and I go to our builds list, you'll see that the data update from content pool came in and now we're publishing this change to product. So that's cool. I know all of you listening are wondering, like, how do you make money in this business?

Like snuggles? Like how much does it cost? With any good business. And in this day and age, it's time to use Stripe to purchase things. I'm gonna purchase a snuggle session with bozo here. And this is yet another Gatsby cloud function that kind of takes advantage of stripes, checkout, API.

And I'll, I don't, I'll save you the boringness of [00:19:00] entering a credit card field. Okay. So that's dog, that's pop snuggles, and that's the future list there. I had a lot of users come to me and they said that I was discriminatory against them cuz I didn't support cats. I don't know if I necessarily wanna support cats.

I'm a dog guy. So I don't know if a cats are my thing. Maybe I should do an AB test because I should probably know how many people are coming in or would really like to snuggle cats or dogs. So I partnered up with my friends here at launch darkly and I created a pet police. I don't know, is this a random, cute name that I was thinking of?

And right now we're serving a hundred percent dog traffic. Let me just turn this off. And I'll save the change. Okay, cool. And let me just refresh my page here. Nice. We're in cat snuggles territory. So I just turned targeting off, but I could have done rollout percentages, like [00:20:00] 50, 50, 20, 30, whatever, 20, 80, whatever.

But now I can see, okay. Like how many of these people, how many people or customers want to snuggle? And a cool thing with launch ley is you can actually run experiments. You can see okay, based on my snuggle CTA, which is right here, how many people are tipping on dogs or cats? Dogs are winning right now.

So maybe I should stay in the dog business. So how this works and we're gonna get it to code a little bit in a little bit here, but how this works is this page is this catalog page is run through the SSR rendering. So let's actually get into the code and I'll get back into my slideshow here. Cool.

So first let's talk about the Google a right here. We are doing some copied code I got from stack overflow or the tutorial, and I put it into a Gatsby cloud function. In Gatsby, when you want to do cloud functions, we have a reserved folder called the [00:21:00] API folder and I just put express style handlers in there and it automatically gets deployed to Gatsby cloud and hosting.

And now I have that functionality. So here, I'm just setting up an oof two clients. I'm generating an off URL and I'm re redirecting the user then.

Next I'm doing the OAuth handshake. So that already happens. And then after that, I'm doing a callback, right? With every OAuth, you do a callback and in this callback, I'm gonna exchange the code I got from oof, with an access token, and then I'm gonna redirect the user back to their, the UI. In this case, we're going to the catalog.

All right. So if we're talking about the catalog page now I fetch that data with GraphQL. I have a query that FES all animals, so I'm fetching both, all the dogs and all the cats, and I'm gonna have that data available for the catalog. Next I'm gonna enable SSR. [00:22:00] So here I'm just exporting a get server data function.

It's gonna look for, you get the context of the request so you can get the cookie headers and see if you have a session ID. If you don't you'll create one, then you can call into launched Aley, get variance to see if the session ID is either gonna be dog or cat, and then you can set the cookie for.

In the case that you didn't have a session ID, the response can set a cookie and as well we'll return the data of that experiment to our component. And that should be available as props. So at the end, it's just react. Now I have my catalog component. It has data from Gatsby, which is the graph Q layer that we talked about.

With the Contentful dogs and cats API. And then we have server data and server data is the computation we did in the get server data call. And now this just looks like react, right? Like I have props and now I'm gonna build a UI on. So that's my app. [00:23:00] You show invest tons of money and time snuggling dogs or cats cuz we support both.

All right. So we're talking about 20, 21. I hope everyone enjoyed that. But let's talk about 20, 20, 20, 20 22 in 2022. We're gonna have, we're gonna just pretty much be doubling down on the things I presented here, but we also wanna explore a few more ideas. So now Gatsby is somewhat monolith. It does a lot of things.

And then it does it in a single process. We've done some advancements within that process. Like just, having no child workers parallelizing as much as we can, but if we're truly to be cloud native, it's we need to decouple the monolith. We need to run these different tasks that Gatsby requires for a successful build.

We need to run them. Different on different [00:24:00] resources. And now that we have this cloud native environment powered by Gatsby hosting the Gatsby. Tool is now an orchestrator. It's not necessarily an SSG or a server side rendering platform. It's not a functions platform. It's an orchestrator. It's the conductor of how you're gonna get your application made.

And. When using cloud native, that means we can take all these different tasks and just span them across. We can just throw, I like to call it, say, throw sorry, give it more juice. We can give juice to all these tasks, run them across several workers in the cloud. And now build times the jam tax goes down because we're getting smarter about how we run these things.

And also a lot of that. Is overcomplicated to do, I wouldn't want other or GAFE users themselves having to worry about any of this stuff. So I think it's really on Gatsby's responsibility to make it very transparent to the user that, Hey, this stuff is happening in the background, but [00:25:00] you never had to think about it.

You just get the benefits you just get to right. So that's the goal here and that's where we're gonna be really going deep in 2022 is figure out how can we scale GAFE and cloud to make it better for every user. So that's one thing, another thing, this one's a little complicated, but there's two main feature requests that we get a lot.

So hopefully this gets people excited. If you use Gatsby, one is like a pre-route middleware. So before you actually go to a route on your site, maybe you want to do something. And when I say do something, there's a lot of things you could do, right? You can check if someone's authenticated and that's what we're gonna go through this example with that context.

I need to check if someone's authenticated before I give them this page. So a user visits. A login route or a page that is blocked by AU authentication. You would be able to configure this pre-route middleware much like an express [00:26:00] middleware that will do some type of computation and then notify us that, Hey Is this unauthenticated well, if it's not, then they should go to the login page and go through this flow again, if they are authenticated, is the page that they're looking at.

Is that an SSG page? And if so, okay, let's give you them the results. Is it a DSG or deferred static generation page? Cool or maybe is it some SSR page that we need to render? And so that's this whole ecosystem that will happen before you hit a page. This kind of really opens up the doors for something like AB testing.

AB testing is the second feature that people keep talking to us about. They wanted bring experimentation into their platform. Now I did AB testing in the pub snuggles app, but that's not necessarily GA the Gatsby way. It's not integrated into the platform I had to bring it to the platform.

I think one thing we're gonna be really [00:27:00] investigating is how can we leverage our infrastructure partner up with other maybe AV testing providers, but give it in a way much like we did for GASB functions, where this is integrated into your application. So I just wanna say thank you for having me today.

This was really fun. I know we talked about a lot of things and we can talk about them more. You can always find me on Twitter at a IER. And yeah. Thank you.

**Sean C. Davis:** All right. A thank you so much. What a great presentation. Thank you for all of those cat and dog snuggles. Amazing. I forgot to mention before we got started here, that if you have any questions for a drop them in the, ask a questions little panel at the bottom of your screen I have a handful.

I would, that was super interesting to me. Let's start let's start with the jam tax. I hadn't heard that term. I, but I find that I find it really interesting. I was hoping you could talk a [00:28:00] little bit more about that for our attendees. Like why is it? Yeah, so exciting. And in a lot of cases really may maybe simple even to get started with the JAMstack, but what is it that makes it more complicated to scale and maintain O over.

**Abhi Aiyer:** Yeah. When applications start out in the jams stack, maybe they have single data sources. Let's just say you were building a WordPress site and you're just starting out. You're creating posts and pages, but after a while you're publishing your blogs for a year or you're publishing new content for a year.

You've accumulated content, different content models. Images, which is a big one, tons of images, I'm sure. And any other media, and after a while, you're having different items that are crosslinked within different pages. Everyone's built a similar articles component. I'm sure. So once you have this big data graph, Because it's not just your data from your [00:29:00] CMS.

Now, you're like in the world of you have posts have authors may have many posts and that scales so plenty of numbers you start changing an author's name. Now you're updating a hundred thousand pages, right? Cause they are a popular author. You start changing certain pieces of data that are found on many other page.

A great example is like the nav bar, your nav bar is everywhere on all of your pages. You change an item there. Now you're building every page on your site. So that's where the jam tax comes in or that's where starts to feel noticeable is because you're starting to build an application like you should.

It's all making sense. Like none of this doesn't make sense. It's just the time that it takes to go and build all those things. Plus you want responsive images, different image, formats different thumbnails and different screen size. You can just imagine the Cru gets built up. It's not even crushed.

It's just the complexity grows. And now you have this big tax paying. Okay.

**Sean C. Davis:** That's yeah. That, it makes a lot of sense. And you [00:30:00] mentioned in your in the SSG portion that it used to be the way that you would build a hundred thousand page website and you would be waiting a long time for that to build.

So it seems. DSG in Gatsby's terms is a good answer to that. What I'm curious about is what would you consider? What's the technically the difference between DSG and SS SSR with Cing enabled?

**Abhi Aiyer:** That's a great question. So there isn't much of a difference except the latency that you may have in the, on the first runs of these things.

I think for us, like DSG is a GA, like I, I mentioned this in the talk, but we're trying to do things the Gatsby way. So meaning like how would this fit into our framework. And so we have like with DSG, we, you get access to Gatsby's data layer and it's a first class citizen. Therefore like the querying of the data for the page is a lot [00:31:00] faster.

And then with SSR, it's still similar to this, but you're gonna have to then maintain the cash policies and stuff for pages that, It's you're putting more onus on the user to figure out how the applications should behave. So if it's a pure static page and the data is relatively static, then if you're using DSG or SSG, And Gatsby, like you're gonna get these common best practices for dealing with those file types, HTML JS O what's the max age, are they immutable, mutable.

And that's where the that's where the CDN plays in. And with SSR the data's for more that's, Ever changing. You could do the same kind of business. Like I'm not against it, but we've built this certain mode to serve that need. And we've outlined that the SSR piece is for a different use case.

**Sean C. Davis:** Okay. So in, in both cases your goal is the same. You're trying to [00:32:00] optimize the performance and get the content to the user as quickly as you can. But the, how a developer maybe should think about the difference has more to do with the. Maybe the frequency at which the content is changing.

Is

**Abhi Aiyer:** that what you would say, correct? Correct. It's definitely about content frequency. Cause the most expensive part is updating content and if it never changes, then we should never do any work to change it again. And with SSR, you leave yourself open for a cash bust and then having to do work unnecessarily.

That

**Sean C. Davis:** makes sense. Okay. We actually get, we've got a question here from Steve that says is Gatsby cloud running on an existing cloud service, such as AWS perhaps enabling Gatsby cloud functions to integrate with other AWS work that we've done.

**Abhi Aiyer:** Our platform is actually on Google cloud. We partnered up with them almost three years ago.

Our cloud function environment is run [00:33:00] through something called K native and using Antos. It's called Google cloud Antos cloud run for Antos. I'm sorry. It's so many words in all the products these days. So we do that there users who are rolling their own. It's you could deploy GA V cloud functions to your S3.

It's not something that we've written for you, but people like people in the community have already started to do that. There are a lot of self hosted individuals out there that we've helped them figure that out. I would also recommend against it because, we have all the monitoring logs, everything set up for you, and it's really.

You don't have to do anything to enable it. You just have to use Gatsby cloud, I guess that's the stickiness of the product a little bit. So I would recommend using Gatsby cloud, but if you're already with the S3 deploying to S3, then I would, look into the community and figure out see what the other solutions are for taking GA speed functions and putting [00:34:00] them in S3 or not in AWS.

Sorry.

**Sean C. Davis:** Yeah it makes sense. And I know that it, that tends to be a common refrain in this jams stack space is like the, just the ability to take all these different tools and marry them together to be your individual architecture for, to solve your specific needs. So with that is Oh, okay.

Question would be does SSR and DSG. Can you get those to work without Gatsby cloud? If we deployed to a Netlify or a versa.

**Abhi Aiyer:** It's not supported in Versace net. I did a great job trying to have a parody with us. And so it is available through their Gatsby plugin. I will say though, like I said, with the other things, we've designed it to work best in Gatsby cloud.

That's the advantage of owning the framework. If you're already using Netlify stuff, I'm not gonna say go to your boss right now and tell them a change. It's just not gonna be as good. Also if you're an image, heavy [00:35:00] site net LAI's version still is still needs to work on some issues with generating images in different thumbnails, et cetera, on the DSG render.

So there's some complexity there that you have to be close to the problem, really to get it in immediately. Like we did when. Launched it, but they're a fast follow. Netlify is definitely another option. But I'm not gonna recommend it publicly

**Sean C. Davis:** but this makes sense. This makes sense. Okay.

So similar related question is all right. So if we look at somebody like Versace, they. Like you, yeah, technically you can use next in other places, but it often takes some extra configuration and it's gonna be easiest to use it with Versace, but you can also use other O other static site generators, front end frameworks and deploy them to Versace.

So is there is I suppose this is a two part question. One, is it possible to use other frameworks with Gatsby cloud and two is that. Yeah. If not, is that something that you're considering or is it solely focusing [00:36:00] on the Gatsby

**Abhi Aiyer:** product? Yeah, so I think, let me answer this question a little bit more broadly and I'll get into it.

So today Gatsby is very much like linked together with react and having this whole build pipeline. I feel like it's like the build time wars of the past with grunt versus et cetera, our goal for 2022 and beyond is to figure out how we can make sure all the pieces of Gatsby are decoupled.

So if you wanted to leverage just the data layer you could with your own rendering, and of course we'd have a Gatsby rendering thing that still has our best practices involved, but maybe you bring your own front end code. And then when it comes to Other frameworks? We're not necessarily in the business of building and supporting the Hugos of the world.

One thing that we are interested in is there are a lot of auxiliary products to Gatsby. Storybook is one of them. Sanity, if anyone out there uses sanity, you have sanity studio, which is like your [00:37:00] CMS studio. These are the types of products that are really interesting to also get involved in deploying in Gatsby cloud, because now your JAMstack experience and anything auxiliary to it are related.

Can all be done together. Also be co-located in terms of an infrastructure. So I would say no to the other frameworks, but then the framework adjacent, or the Gatsby adjacent is something that we're really interested in.

**Sean C. Davis:** That's really interesting. And I, you said in the presentation you considered that Gatsby is becoming or maybe already is this orchestration layer more or less and less of a traditional static site generator.

And I, I think that's really interesting. Do you think I if you're gonna predict the future, do you think that's gonna become a common use case where someone might use Gatsby, particularly for the data layer? Then work that, that data into other systems, other frameworks and deployed

**Abhi Aiyer:** elsewhere.

I think [00:38:00] what I'm yes. And what I'm really excited about is. We have content editors out in the world that work on web mobile and Android. And today the web folks are having the best time of their lives. Cuz they get to use things like Gatsby next and then the iOS dev have to figure out how to write an API to WordPress.

And do the same exact thing the web developers do are doing, we've read ESPN on our phones and those content apps and why, a lot of them don't wanna do web views anymore. So in this new world of GAFI as an orchestrator, you have native apps now that can just use Gaspe for data.

Instead of react, or, you still have your web experience, but that same API, that same, everyone's still speaking the same language when it comes to GraphQL. Now we've unlocked native we've unlocked different frameworks, like not frameworks or front end libraries, like UJS spells, et cetera.

And, dare I say, maybe you could use next JS with.[00:39:00]

**Sean C. Davis:** That's yeah, fascinating. I just I don't know. This is it's got me really excited. It felt. Gatsby was all the buzz. And then next year is all the buzz. And now it's we should be talking about Gatsby for and Gatsby in 2022. It's there's a lot of exciting things to come.

So thank you. Thank you so much a for being here and for sharing all your experience and knowledge with us.
