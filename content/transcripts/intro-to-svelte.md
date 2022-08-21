---
_build:
  list: false
  render: never
---

# Svelte

**Brittney Postma:** [00:00:00] Welcome everyone. This is starting with Svelte. My name is Brittany Postma. I'm a developer experience engineer at Netlify where I get to do all sorts of fun content like this. I also create content with coding, cat.dev. We do a stream cast called perfect.dev, and we're starting a weekly code with coding cat session on Fridays.

I'm really excited about. I also cohost two other podcasts. I know it's crazy how much I do remotely interesting and Svelte radio. And I'm also the founder of the Svelte sirens. It's the first group of the Svelte in the Svelte community for women, non-binary people and allies to learn, build, and teach about Svelte.

We do live streams and guest talks there on those Svelte society, YouTube channels. So you can find out more about that at Svelte Dov slash chat is our discord to get into. And so finally enough about me. So let's get into the actual, starting with felt stream. [00:01:00] So when starting on a path of web development, there are so many choices and path thrown at you figuring out which framework to learn and how to get started is one of the hardest decisions as a beginner.

One will suggest getting a complete understanding of HTML, CSS and JavaScript before jumping into a framework while others will push you into popular frameworks that have a better job market, but complicated overhead, both have their risk learning. All of the fundamentals can add unnecessary complexity that modern frameworks extract, but a framework also adds its own level of abstraction that may confuse newer developers.

What if I told you there was a framework out there that you can write vanilla, HTML, CSS, and JavaScript in without the framework overhead, that language is felt. I'm suggesting that you can learn everything you need to know about HTML, CSS and JavaScript inside of Svelte while slowly taking advantage of the sugar syntax and the niceties that Svelte includes.

So [00:02:00] what is Svelte. Svelte is a powerful framework for beginner and advanced developers alike. Unlike other popular component frameworks that use a virtual Dom to diff the changes Svelte is a compiler that takes the work out of the browser and into a build step that outputs, guess what? Vanilla HTML, CSS, and JavaScript, even the fancy declarative code you write and spell gets output as just JavaScript in the.

Svelte by itself is a component framework that allows you to break up your application into reusable chunks, built in animations and transitions and estate management system. With stores. All of this is built into Svelte without adding any extra libraries. And if you don't use it, it compiles itself away.

So why Svelte kit then Svelte kit is the fastest way to start building your Svelte apps. Svelte is the language you write, but Svelte kit is the framework you use to get started building web applications. The goal with Svelte Kitt is to [00:03:00] have a single recommended path for building everything from high performing web apps to static Bo pages.

A file system based router keeps your site organized and each page can be rendered to optimize its performance, hot module reloading with V and code splitting that makes your app blazing fast. Learning Svelte you don't really need any special knowledge to start using Svelte today. Just HTML, CSS and JavaScript will get you a long way.

However, if you want to learn how to do some of the things, the Svelte way, the tutorial is one of the best on the web. You don't need to have a local web environment to understand the command line or package managers to start using spell Orkel. The Svelte rep code sandboxes, pelt.new and stack blitz is Svelte kit.new all give you apps ready to start coding right in your browser.

In fact, we're going to use stack blitz as Svelte kit.new today for our demo. So let's get started with that. I'm [00:04:00] gonna Excel here.

We will go ahead and get into our demo. So I'm gonna head over to Svelte kit.new, and I can post that over in the chat as well. New. It's all you have to go to. And this will fire up the demo to do app that Svelte kit provides in the coli. So if you ran this in a terminal, you would RA MPM and net Svelte at next, and then the name of your application.

And that would get you a CLI tool that allows you to choose what you want to render, whether a skeleton application or a demo application. And this is the demo application. So this tutorial's designed to get you started by teaching the basics of HTML. We're going to use the free code camp, learn HTML by building a, I think it's a cat photo app.

Yeah. That they do. And we can actually take this [00:05:00] entire code, even this HTML head code from the last lesson in the free code camp tutorial. And copy this, take it over to our index. I guess that's the first thing that I should do here is, so this starts up fires up the app for you, but you may not know anything about the folder structure.

So the folder structure ins spell is a file system based router. So we have an SRC folder that includes all of our stuff for the actual application. There's a routes folder that holds any page that you need to create in your application. So inside of that folder, convention, To have an index file. And so this index dots spell file is actually this homepage that we're seeing here.

So if we take everything out of this homepage, backspace that, and then I'm gonna paste exactly what I copied from free code camp. And that's within HTML tag in it with a body tag in it stuff that we really don't need here, but this worked like everything actually just worked. And if we went and got to, let's see if I can find a perfect dev.[00:06:00]

Image. Yeah. And I'm gonna copy this link address and go to this URL here. So this is the form on the bottom of this. And if we paste that URL into the form and submit it, it actually works and sends it off to the free code camp. Post, like we didn't have to do anything. This HTML code just worked and still, which is one of the most powerful things.

And why I think that you can just start learning it as a beginner. There's obviously things that we can remove here so we can remove this HTML and body tag, and we can remove this HTML tag and this body tag, and then the head of the component, you can actually use something in Svelte called a Svelte head.

So if you do Svelte colon head, and then. My intelligence doesn't work in a stack blitz version, but this would auto complete if you had these Svelte vs code extension enabled, then that would've auto completed that, but Svelte [00:07:00] head will actually allow you to add in that title, into the head of your application.

So if we inspect this, we should see our head up here. We should see title and you know what I bet. The app HTML file has a head that's being injected into it. Okay. So I don't know how that works with stag blood. So let's move on to the next thing I was gonna talk about, but that does work there. If you want to do the head component installed.

So I'm gonna spell.dev here. We can find the docs. I'll link that out for everyone. And if we look for the head component Svelte head, so this is the way that we would do that. Yep. I just wanted to make sure that I was getting everything correct there. So Svelte head, and that will inject the title onto that page in your application.

If we [00:08:00] avoid this. So now let's talk about components in Svelte. So I already mentioned that frameworks like SPEL and react are component based frameworks, but what is a component exactly in English, a component just means a part or a piece of a bigger thing. Hydrogen is a component of water. A tomato is a component of a tomato and mayonnaise sandwich.

And inflation is a component of the. And web design components are pieces of code that are extracted into a single file. So it can be used anywhere in the application. There's no right or wrong way to create components in Svelte, you can lowercase or uppercase spell it. They can be in any folder. And in Svelte kit, you can even put them in the routes directory here, if you make it with an underscore in front of it.

So this layout that you see here is actually a special case, but if we did a new file and we just wanted to create something easy, we could name it like that. And that would be a component file installed because it would get ignored by VE when it. [00:09:00] So in Svelte kit, the convention is to have a lib folder and have anything inside of that you want to use inside your application.

Like I said, you don't have to do this. This is just of a convention that comes with Svelte by default. So if we look inside that lib folder, we already have some components here built for us in this demo app. And I wanna take a look at the header. So let me. Refresh this and that will take us back to, oh, head attempted to close.

Yeah, I got mad about that head. Okay. Now it's fine. So this header component is repeated on each of these routes that we have. So we have an index route and a bow app and a to do app, but it's included on every page and it is doing that through this layout component that I was just talking about. So this layout component is importing this header from dollar sign, lib, head.

Head or dot Svelte that dollar [00:10:00] sign lib is actually an alias. And I wanna briefly mention aliases because they could be confusing to new developers. So an alias inside of a framework is used to take the place of a file path to make the path named shorter and easier to write in Svelte kit. This isn't required.

You can type in the full path so we could come here and we could type in import header from. And let's see we're in the routes directory. So we need to go out of the route routes directory into the lib directory and to the header directory, and then get that header dot Svelte file. And we can comment that out and it should still work fine.

So that works as well. So you don't have to use that alias. You can use the relative path to import files, but that's a nice thing to have, and those can be configured. And I wrote a whole blog post on how to configure it. If you wanna get into that, I'll link that over there, make passing easier with spell kit.

So if you wanna read more about that, there's. So layouts in install [00:11:00] are another neat feature that come with it out of the box. There's. Named and nested layouts. So this is a base layout in install. It's just the default one that will grab your entire application. Once you create a Svelte kit app with a underscore layout dot SELT, which is another thing that might trip some people up.

So it uses this convention with the two underscores so that it can catch that in the build step to grab those and wrap the entire application with. Oh, somebody's asking for the typing to be bigger. Sorry. I forgot to zoom that in. So for sure, we'll zoom that in a little bit. So a layout file in the routes directory named underscore layout dots felt prefixed with two underscores will wrap the entire application in whatever's inside that file.

And the content of each page is passed into an area called a slot. That's this right here. A slot is important in spell because it's a placeholder for where the children content should go in a [00:12:00] wrapper component. So in the layout example, any other route or page created will drop into that area inside the main tag.

So any page here is inside of the main tag. If we inspect it, there's the main tag. And then inside of the main tag, we actually have the content placed through that slot based on all of these other routes.

Slots can have a fallback added inside of them. So they don't have to be automatically closed like this. You could have a fallback placed here, fallback code, and then you would just close that. Or they can be named also, so you can give them names in a component that needs to have different types of content.

And then you would use slot equals that name as a prop, which we will talk about in just a minute. So thinking in modules, the ability to have modular components that can be reused in your app, isn't new to front and frameworks, but it could be confusing to new [00:13:00] developers just starting. So we can look at components.

Small pieces of the page that are extracted into a single file. So they can be used in many places. These components get exported and can then be imported into other files with the import syntax. So these components that we see here are being exported under the hood, and then we are importing them into these other files using that syntax.

So props, like I was just talking about use that same concept ins. So props ins felt are pieces of data that are passed from one file down to another. Sometimes the term parent component to child component is used to describe this pattern in SELT props are exported from the component that initiates them and they can be used in a parent component to set the value of the data in routes.

Props are also exported from the route to receive data from an endpoint. And we'll talk about endpoints in just a minute after I show what props look like. So let's see if we can do some props [00:14:00] here or see if we have any props.

Okay. I don't see any props. Let me go ahead and create a new. Route. So I'm gonna create a new route and to do that in spell Kitt, all you need to do is to create a new file within that route's directory. And we can call that cat spellt and this will be a new route that will be at the cat point. So slash cat will then be added to our account and it's wrapping it with that layout file in the header and the photo, but we don't have any content on the page.

and something I just noticed, oh, I didn't save it. I was like that fallback isn't there, but it's still not there. That's strange that's not working either. That should be fallback here.

I wonder if something's broken and felt kit. So I guess something else to note was felt Kitt is that it's beta software still? Not quite to 1.0 [00:15:00] yet. And I have no inside information on that. If I did, I would so be happy to spill the beans because I once. 1.0, to come out. So beta software, there's some breaking changes happening.

There's lots of things that do change with it. But like I said earlier, this felt discord is a great place for help and for communication on all of the changes that do happen. So if any of those happen, we can let you know there when we know about them. so in the cat's file, I want to create a new prop.

So to do that, I'm going to use that export. Man that I was just talking about with the modules. And we do that in a script tag, just like vanilla Java script. We use a script tag and we say, I said, left export lit cats. And this initiates a variable called cats that can be used in other files now because we're exporting it out of cats.

We're allowing. Files and [00:16:00] components to be able to access that variable so that cat's variable we're going to use in an endpoint. And an endpoint is a traditional web development. You would need to have a separate backend to connect your APIs, databases, or anything that needs to request data from a server.

So you would need to set all that server stuff up. You would need to access it somehow from your front and framework. It was honestly like a lot of overhead that these newer frameworks like SPEL kit are trying to do away with and give you the ability to add these key features into these things called endpoints and endpoints in Svelte kit allow you to work directly with HTTP request and responses, right from within your application.

So endpoints are modules that are written in either JavaScript with a dot JS extension or type script with a dot Ts extension. They export request handler functions. Got a doc on that. I'm gonna copy this link real quick and paste that over so you can see the docs on [00:17:00] request handler. Excuse. And those correspond to the HTTP methods, get post, put patch and delete.

The delete method is handled with a D E function instead of delete, because delete is a reserved word in JavaScript. So we can do that by creating I'm gonna use JavaScript today just to keep it as simple as possible. So we're gonna create a new file and I'm going to call it cats dot, JS. And this is what we call a page endpoint in spelled a page endpoint is an endpoint that has the same name in the endpoint as the route that it's directed to has.

So these correspond to each other, and the things that we return from the endpoint are going to be able to go into this prop that we created cats here.

My voice is starting to go, so I apologize. So in the cat's endpoint, we need to create a get. Request. So export cons get, [00:18:00] and then we're going to use an acing function, error function here, and we're going to get a response from, and I'm using a couple of APIs here. Maybe I should link these over first, this one, the cat API.

So that is this one. I love cat jokes and puns. We use perfect dove and coating cat dove. So anything I can use with cats is fun for me. Okay. So a weight fetch. And then we have an API that we can hit there. And I'm just gonna copy this. I already have this little thing done. So this is the API endpoint, and we're gonna limit this to nine results here, and we are going to create another variable called cats, and we're gonna await that response.

And this is a JSUN API. So we're getting jig. [00:19:00] And then return that, and this is another Svelte kick convention. So we return the body and you can use like typical headers and stuff, but this is the convention. I sometimes get confused with this because we're returning an object and. That messes with my head sometimes to be honest.

So I'm returning that cat's JSON data here in this body object, and that's going to go and populate this data here, but we need to do something with that data now. So in the markup section, we can use like normal. Let's see H one and let's see if we can just get, I dunno, what comes back from this? I don't think it gives us like a name or a type of cat on this API, which would be nice, but console dot log.

So we can write just Java script in this script tag too. So we're gonna see on this cat's route, [00:20:00] what is in this?

Something is happening. Cat is not defined. Did I say cat? No, I didn't know. Oh, cat is not defined here. Okay. Oh, I see cats and it's an array, so I need to do that refresh. Yeah. So I don't know I'm doing something wrong with that. Console, where is my array breeds? What can we use? We could use the URL here.

So cats, zero dot URL. I just wanted to get something up there and to show that it will display that if we use some like fancy sugar syntax to get into the JavaScript, we just use the curly braces. And, but what I really wanted to show is the power of using Sveltes templating here. The regular HTML, like we could just type in, this is a group of [00:21:00] cats or something here as just like playing HTML.

This is a group of cats. So now we have that there, and then we can use the special Svelte syntax. And like I said, you can learn this incrementally, but this is the most powerful part of Svelte in my opinion. So we're saying each cat as cat. So we're taking an array and we're looping over that array, but in a much simpler, cleaner syntax here, and we need to close our each block.

So closing follows the same convention that HTML does with the slash and it's the same thing that you would use. So we. If blocks we have each blocks, we have ay, weight blocks. There's several different kinds of blocks that you can use, like this install. And inside of that, each thing that you are looping over is going to get whatever you put inside of that.

So we're gonna use an image tag and we're gonna get the SRC from the cat and it's thought URL. That URL that we just showed. We're going to use that as the SRC here [00:22:00] and alt unfortunately, because it doesn't have the name, I'm just gonna put a cat because we need an alt right. So I'm gonna close this to make this a little bigger here.

And we have just a bunch of random nine random cats. On there and just 10 lines of code. That is like one of the most powerful things to Svelte to me is that you can just do all of this so easily in spell and just incrementally learn these little bits and pieces. So the. Next thing I wanna do quickly, cuz I know I'm running close on time.

Now. I think I do wanna show off some of these others, so we didn't do anything with this nav file and we have that layout that wraps everything we have to dos. And this is also using these page endpoints here. You can also do a new folder and do like APIs is is similar to how next JS handles this. You can create this caps dot JS file [00:23:00] inside of here.

We can just copy all of this and put it into this other one. And then we could do in this caps file, instead of doing this, we would still leave that because we would still need it, but you can do a script context module.

And you do an export ay function and it's called load and you grab the fetch out of that. And inside of that, we do equals the weight fetch sh and we're going to await the dot slash API slash cat. I don't know if the dot needs to be on it and then console the rest and we need to return props [00:24:00] of re for now and see what that does were on the cats what's going on here.

I'm sure I messed something up. Reading length. So the array, oh, I'm just gonna comment this out, cuz we don't have an array of cats.

This is a group of cats, this, okay, so this is our response. Okay. So we got the response. So we just need to do S cats equals it's duplicating your work, which is why they created the page endpoint. But this will allow you to use an API folder if you want. What did I do now? Is it not JSON? Is that something.

Undefined. So I'm doing something wrong in this, but let me [00:25:00] get in the Svelte kit docs. I didn't link those either. I'll link those over for everyone. We can see the docs on how to do the load function. Floating load function, fetch stop. J on, did I not put, I did put jot J on. I think so maybe this was a weird pattern that we had to do for a while and felt, and another reason why they got rid of it and.

Allowed the use of just the page in points, which are much simpler. In my opinion, I was just, I went off on a tangent trying to tell you that you could use this API folder if you want. So use those docs there and ask for help in the cell channel. I'll use the page in points all the time now, cuz they're so much simpler.

They take away all of that overhead of that. File. So I'm gonna delete that folder since that is clearly not working right for me. And in our cat's [00:26:00] file, I'm just gonna take the module out and leave this. Take our console, log out, put our cats back in. Give me my cats back spec. And we have our cats back.

Oh, cute kittens. I love the kittens. Okay. So the last thing that I wanted to talk about is adapters and deploying in Svelte kittens, cuz this is a little bit different and this might be really confusing. So since Svelte kit is a versatile framework that allows multiple types of rendering, the built app needs to be adapted for different deployment platforms.

So as felt kit comes with an adapter auto that attempts to detect the production environment and select the more specific platform adapter. So if we look. Spell dot config dot JS file. We'll see that the adapter auto is automatically installed. And what happens is once, once you try to deploy, it will try to detect, attempt to detect the platform that you're on.

[00:27:00] And it will.

If we're going to Nety, which we will in just a second here, it's going to use the adapter Nety. And so it's going to automatically detect the platform that you're using for the specific deployment platform, and then install that adapter on that platform. And then there's also a no JS adapter for platform.

Forms like render and Roku and digital ocean. I know are a couple that you could use the node server on, and then there's also static, adapters and static will pre Ridder your entire application. You can also pre Ridder routes, just so let's do this. Let's go to cat dot spell and real quick export.

Let free render. Equal to true. And this will make this route only pre rendered. If we use a regular server side rendered adapter. So now I have this connected to my get hub already. So all you would need is a get hub account. It's free to do that. And I would [00:28:00] suggest if you're getting started with HTML CS and JavaScript to go ahead and get a GitHub account, anyways, learn in public.

It's one of the best things that I ever learned to do. And it's how I got both of my jobs. Learn in public, do everything that you can public facing, because it's so helpful in you learning, teaching yourself and teaching others. It's just, it's great. So once you do that, you can actually just go ahead and create a GitHub, a repository for your application.

So I'm going to name the C F E dev, starting with Svelte. I'm going to create the repo and push it.

And that's going to commit here, could not resolve reference head. I don't know what that means. I didn't try this part. So this is fun. This is like live coding stuff that happens. It's always fun. I do a siren stream for this [00:29:00] felt sirens too. And it's like live coding is really interesting. You always run into fun stuff.

Let's just go to GitHub and see if we have what we need. See if E dev. Yeah. So it already created it. It just made me think that it wasn't. And then I'm gonna go over to my Netlify account and log in. And if you already have your GitHub account, it's really easy to just sync that with your Nety and you can go ahead and add a new site.

Import and existing project. So there's a couple options there, but import and existing project means that it's going to link to your get repository. So the get repository that we just created straight from stack bullets in our browser, I haven't left my browser. I haven't touched the command line. I'm still in the browser with all this in these nice goos that allow you to do that.

Then we're gonna search for that repository.

don't she fail on mean [00:30:00] wouldn't that be something, it did master branch, but it's automatically detecting our build command and our published directory. And we're going to deploy the site and we'll see how long that takes to go there.

Okay.

We have nice fun games that you can play while you wait. I think it should be done in a second year though. Oh, no.

Like I said, I didn't try this part. So watch something, build MPM or build what happened. So if I did this from. I swear I did this from my vs code and it worked,

this is using the CLI and I have another [00:31:00] account where, or another site where it just worked. I think this directory to an existing site. Oh, wait. No, that's not what I wanna do. That's not what I get remote. Gotcha. It's this link. It's not a get repository. Just good in it. pH repo, create, sorry. This is using the command line.

So I am using the command line now. I apologize. Cuz now I'm SCR. Oh, you know what I wanna do. I'm not even gonna do this. I'm not even gonna go the complicated way I'm gonna go. So I use PMPM. I'm gonna PM. I install to install all of my local things and then I'm gonna do a PMPM run build. And this is using the auto adapter.

I want to show the static adapter at Svelte JS slash adapter static at next. and that will install the next version. So since we're still in beta, it installs the next version. [00:32:00] And then you have to add that there. And this is going to give us that static pre rendered site. And I'm gonna run that bell command again.

I don't know why the adapter auto didn't work, but it may be something with STTs version because STS has that template, that demo template. And it's using an older version than of Svelte kit. I'm sure of it. Or maybe some there have been weird like node environment, things like where you have to set your node environment sometimes, but I promise you that this did work when I ran it locally.

So this is taking a while too. So if you need to come in and cut me off Brian at any time, just do that. I'm just gonna keep working on it until you, you say I'm done.

**Brian Rinaldi:** Don't worry about it. I, demo gremlins are.

**Brittney Postma:** Oh, I know. And I, I think the reason though is like I was saying SPEL kit.new uses a version of SPEL kit that I bet is not.

It seems next though. I wonder if it just installs the [00:33:00] latest version. , I don't know what's going on with that, but I should have tried this part. I apologize. I did just wanna touch on the adapters though, to make sure that people knew that deploying SPEL kit isn't as simple as just like pushing it out there.

So that's the only part of it though. I think the rest of it's so simple that you can just write HTML. And that was really the powerful part that I wanted to show.

**Brian Rinaldi:** Yeah. Yeah. And I think in the end deploying, it's not that difficult. It's just, it's a little, yeah. It's a one time thing. Once you get the ride adapter and it's all working.

**Brittney Postma:** Yeah. I'm getting errors like even locally. So maybe, like I said, it's beta software. Sorry, folks.

**Brian Rinaldi:** Don't worry. I, I've I will say I've messed with it. And

**Brittney Postma:** this cat is me right now. That's

**Brian Rinaldi:** And been really impressed, like SP kit was awesome. And I'm sure, it's hard to do this live and in, in 30 minutes, so it [00:34:00] totally, I'm gonna go about it. I totally.

**Brittney Postma:** To my Nety site and see if I swear I had one deployed at some point, cuz I did deploy one of them, but I'll see if I can get it out for you. Okay. I do have Svelte kit sites that are deployed. I promise that you saw the yeah, we have Svelte sirens on Nety right there. So that is a Svelte kit site and it is deployed.

There it is. Cats have spoken it. Yeah, I

**Brian Rinaldi:** think there, there are a number of sites out there that are run on spell kit already that

**Brittney Postma:** know I told you I did this there, it. Yeah, there are there's tons that are, I don't know what is going on today. Something is happening. So here it is. And I had a little more in it, so I did a random that I didn't even get to today.

**Brian Rinaldi:** I think, for those of us in the us, we got a long weekend coming up, I think to like, all the servers are starting the weekend early. Don't

**Brittney Postma:** worry, I'm sweating. I'm like, oh, this live coding thing.

**Brian Rinaldi:** It just . Oh, look at that. Brian says he's doing all their sites to spell Kitt and loving it.

Yes, that's fantastic. I, I will say Like I, my limited experience with it is it's super cool. A as you note, the thing that I love about [00:35:00] it is that it feels like I'm just writing HDML. I'm just writing JavaScript. And it's just like little helpers here and the air, but it's, but it doesn't feel like it, it changes the way I'm writing.

Like when I do react, for instance It feels like I'm doing, I have to learn the react way of doing things. Whereas with felt, it feels okay, I'm doing JavaScript. And it's just a matter of okay, what little helper do I need here or there to be able to to, to accomplish what I'm trying to do.

Like

**Brittney Postma:** those it's like those template blocks. Yeah. Yeah, exactly. Like just those little things that read, like playing English and you can use HTML along with that incrementally learning those little each blocks and the templating. Yeah. Yeah.

**Brian Rinaldi:** Yeah, if you've ever done I used to do a lot of stuff in liquid and things like that.

It, it doesn't feel that different from that, right? Like it's yeah. You just have little template helpers and then the JavaScript is, for the most part, outside of a few little things here and there that are like, it's felt specific, but it's just transcript. So that's, I think, you did a good job of showing that and that's the thing [00:36:00] that to me, is like really powerful about SELT.

as well as the fact that ultimately, because it does all that stuff at the build time, you don't like, it's not like you need to download the whole felt framework. It only sends you, it compiles it down and only sends you what it

**Brittney Postma:** needs to. Yeah, it compiles. So even though that you get out of the box I didn't even show animations and transitions today, but you get like a lot of things out of the box, but they compile away if you don't use them.

So it just compiles away to HTML, CS and JavaScript. So you're not putting a framework in the browser .

**Brian Rinaldi:** Yep. Yeah, exactly. And Brian's mentioning about shadows,

**Brittney Postma:** shadow

**Brian Rinaldi:** endpoints. I know when I started messing with it, they were like brand new and I ran into some issues with it. But cuz I'm like, oh, that's so much better than that API dot J

**Brittney Postma:** JS that stuff that I was trying to do.

Yeah. Yes. And that was a mess. So I'm glad that they did. I'm sad that they didn't call them shadow endpoints officially though. so when people bring out the shadow, I'm just like, yes. [00:37:00]

**Brian Rinaldi:** Yeah, I know. And what did, there's just page endpoints, I guess that's that's the list. That's the less exciting name we do have a couple of quick questions I wanna get to.

So I'm gonna I forgive me if I mispronounce your name, Arianna asks. I'm a backend developer currently. Could you say a few more words on routing in Svelte and I think, you mentioned the file based routing, but how does that differ say from routing and other tools and how can you give a little bit of a breakdown?

**Brittney Postma:** Yeah. I would say like next JS, another popular react framework uses a similar system where it's file system based routing. I think a lot of these newer frameworks are doing that. So anything that you create in the routes directory as a dot Svelte extension is a new page or route on your site. So like I created that dot or that cat dot Svelte file and that.

At the very end of your URL, the slash cats, that's where that page correlated to. So any route with a dots felt file will [00:38:00] go to that and then any endpoint, the dot JS file. If so this gets a little more complicated because of the dot JS and the dot J sign. So we used to do the dot jig. So you could actually go to cats dot jig and it would give you that.

I don't know if you can still do that with the page endpoints. I know there's a way, I don't know, off the top of my head, though. Exactly how you do that, but those do create routes. So even the endpoints are routes that you can.

**Brian Rinaldi:** Yeah. And to just, I think those of us, for instance, who did express once put in other tools like that, used to have to create the files and then you had to go into an app do JS or whatever it is, and then go to your route. I hook in a router.

**Brittney Postma:** Yeah.

**Brian Rinaldi:** Yeah. And then tell it, Hey, this. That file like on this route, send it to this file, et cetera. So all of that's automatic for you now. And again, if you are doing like next J the router in spell kit basically is, feels the same.

It's like a next JS, it's just, whatever you put in that folder becomes a route.

**Brittney Postma:** Yep. Think [00:39:00] next JS uses that. Yes. that API folder that I was trying to do. That's how they do their endpoint. So they go into the API directory inside of the routes directory, right? Yes. I'm not mistaken.

**Brian Rinaldi:** Yes. Yeah. It's a but it's not a routes directory it's content or something.

I don't remember what directory. Okay. But yeah, if you put the API in. That's where that's yeah. That's where he's supposed to put it, but okay. So Brian says you can also do para space routing with variables yeah. In the file name.

**Brittney Postma:** So that is what I did on this random page here, but I don't have, I didn't show that, but I can link the GitHub pro GitHub repository.

I can't talk either. Yeah. So I'll find that and I'll link that real.

Yeah.

**Brian Rinaldi:** That's yeah, that, that's a good point. He makes a good point about you can do oh, lemme put your screen back up if you want. Are

**Brittney Postma:** you, oh, I was just looking for,

**Brian Rinaldi:** I think, oh, okay. So yeah, you can do dynamic routes where you put those brackets and even catch all routes.

You have catch all where you like do the double brackets. Yes. You can do this.

**Brittney Postma:** No you [00:40:00] do it with the dot.dot syntax. So it's like spreading an object, but you do that in front of the route name. Okay. And that will catch everything.

**Brian Rinaldi:** So you can have catch all routes and like even your folders can be the bracket, right?

**Brittney Postma:** Yeah. You can nest. And there is a request for comments right now. Rich is talking about redoing the entire routing structure and we're trying to talk him out of it because it's we're so close to 1.0, stop making, breaking change. So go out. I'll find that too real quick and link that. So

**Brian Rinaldi:** okay.

So we got one other question about about accessibility, yeah. How does accessibility figure into, to, and.

**Brittney Postma:** So Svelte is actually one of the best frameworks for accessibility because they give you accessibility, hints and warnings right inside of your markup. So like I said, that Svelte for vs code extension in vs code.

If you're using that as a tool will give you those hints. And warnings, if you don't have an alt tag on an image, or I don't know, there's various things that it will just warn you [00:41:00] about and help you with accessibility because we try to put accessibility first. So it's just making you have best practices with accessibility and nothing is perfect.

No framework can do the job for you. So you still have to test and do your accessibility due diligence, but it does give you a lot of warnings and helpful things that help you get to the best place.

**Brian Rinaldi:** Yeah. I recall when I was meth, when I was using it, like when you ran the compiler it automatically would tell you like as you're building, it would give you accessibility warnings in the console.

Hey, you should do this and that.

**Brittney Postma:** Yeah. And there's that request for comments? I just posted in the chat there. You're trying to

**Brian Rinaldi:** get us all on there

**Brittney Postma:** to tell him, oh, I know. I'm just, yeah, please. Don't

**Brian Rinaldi:** I would agree. It feels I think, it's very, like I said, it's very similar to next JS, but I don't think that's a problem because it makes it easy to move from one to the other without having to like, learn a whole new routing system.

But yeah, I think Again, so yeah, accessibility, we said built in. Obviously you don't have any [00:42:00] insight, but so right now it's not Svelte kit is not at 1.0, but you can use Svelte like Svelte is a, like a

**Brittney Postma:** one Oh yes. So Svelte is actually in three point. Oh right now they're talking about plans for 4.0, so Svelte itself, the it's a client side.

If you just ran it like that, like react. Is a client side thing too. So Svelte itself is the compiler. The language that part of it is 3.0, it's stable. It's fine. You can use that by itself, but you would need to add in like the router and the things that we were talking about with react. Sometimes you run into, those are things that you would have to add into regular Svelte , but Svelte kit is becoming this.

The goal is to have that be the place to start everything first felt, but you can still use felt if you need to like in bits and chunks, but to start a new application, start with felt kit. Even if it's in beta there's just problems. Yeah. Sapper was the old framework that was used. And so it was confusing for [00:43:00] developers going from Svelte, should I use Svelte or should I use Sapper, but now Svelte kit's gonna be all of them.

So you can do client side rendering, static generation or server side rendering, or a hybrid mix of all of them.

**Brian Rinaldi:** Yeah. That is a good point, which we, you didn't really get to talk about, which is. You can do server side rendering. You can statically render or you, and as you showed in that last bit, you can say, Hey this particular route is that pre render yeah.

Is pre rendered or statically rendered. And then the other route is server

**Brittney Postma:** side rendered. I feel like that concept. I wanted to talk about that, but I'm trying to like, keep this like more beginner friendly of people that are actually like learning. GML CSS and JavaScript. And it's hard for me to choose, which things to learn when you're doing that.

And rendering is like a foundational skill, but I feel like it's so complicated and hard to discern that I try to stay away from it. I just wrote a whole blog post on rendering and it was like way too long. I'm like, this is complicated.

**Brian Rinaldi:** I know I wrote a whole, I wrote a massive blog post in [00:44:00] rendering.

**Brittney Postma:** I read your blog post in notes for mine.

**Brian Rinaldi:** yeah. And it's, it was super, super long because then you get into I don't know, does S fate have middleware or anything like that? Any of this like edge functions kind of thing

**Brittney Postma:** built in? So yeah. So those in points are where you would write. Those functions.

So they would connect to your other so if you're using a CMS, you would connect to that in an endpoint. If you're using a database, you would connect in an endpoint. You just said edge function. So edge functions work in an endpoint. So you would just write the endpoint and that would return your endpoint back to your Svelte.

**Brian Rinaldi:** okay. Yeah. Cuz in next day I say added something like in a newer thing called like middleware, which would be like, okay, I could run it before I hit that API endpoint I'd run. The middleware would run at the edge and then you'd run the API endpoint. I would, you could have middleware that ran again at the, at end of that.

But anyway, here's.

**Brittney Postma:** [00:45:00] Here's what I got when I searched, spell kit and middleware. And I'm sure that we do, I just haven't used middleware, so I don't know exactly. Yeah. But it brought up modules. So I think it's called something different. It says handle sequencing, multiple handle calls in a middleware like manner.

So I think it's like middleware, but. Okay. I just posted that.

**Brian Rinaldi:** Awesome. All right. So yeah, and I don't see any more questions, but sounds like you have some convince some people about SELT and spell it already. You can't

**Brittney Postma:** even see my shirt. I'm like all out today.

**Brian Rinaldi:** Yeah. Now we, so you need to combine that with your net list by swag and have a once

**Brittney Postma:** I get it.

Yeah. Yeah. These supply chain issues are killing.

**Brian Rinaldi:** Oh, and Brian, one last thing Brian mentioned adapter would puts, felt endpoint code into the edge functions. Oh, okay. Yeah. So there's a, there is an, there's an adapter for edge. Okay.

**Brittney Postma:** No, there's not an edge adapter. So like on Netlify I was trying out the edge [00:46:00] functions and I used adapter Netlify, and I couldn't get them to work locally, but when you deploy, you can see the actual, like localization and the things that the edge functions give you are returned from that endpoint into your route.

**Brian Rinaldi:** Okay. Okay. All right. I definitely gotta check it out again cuz I, I built something with it and then you. My job is to mess with a lot of these things. So like I move on to something else and then something else. And I feel like I never get

**Brittney Postma:** on it.
