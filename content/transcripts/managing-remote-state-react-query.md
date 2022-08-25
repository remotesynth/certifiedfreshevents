---
_build:
  list: false
  render: never
---

**Jarel Fryer:** [00:00:00] Hey everyone. I'm Jarel. Thank you all for tuning in. Hear me talk a little bit about react query and just remote state and react and how to manage and your side of your applications. So we're gonna go ahead and get started. Here's a little bit about me. So I'm Joel, I'm 25 out of Alabama. I'm a senior software engineering, technical lead at common bond.

As you can see, I am married to my lovely wife. We've been married now a year. So COVID wedding. We are expecting our first child here on April 3rd. It's gonna be a little girl. In terms of some things I like to do in my spare time. I'm a avid reader, so I love reading books. I'm also playing video games nowadays.

I got into the route wild goose chase of trying to get a PS five. So I ended up getting one. And so I'm playing ratchet and clank and Spider-Man on plays. If you wanna, reach out to me [00:01:00] find me on the web. You can know, can that's my handle tag right there. You can reach out to me on Twitter, Instagram, GitHub, all at the fryer CHHA fryer.

And then that's my personal website. So www dot JRE, fryer.dev. And national a bunch of information that you can use to get in touch with me. So we're gonna dive right into it. And I think every good presentation has to start off with an interesting quote, at least that's my opinion. Right?

So like this quote really resonated me as I was preparing, getting ready to to share with you all. We shake our tools. And afterwards our tools shape us. So this quote was very interesting to me, right? As builders, as developers, engineers, we're often building the next tool of building the next technology because we wanna make our lives better.

We wanna make the lives of other people better. If you think about the advent of the web we start off with very much service outrun applications, right? A lot of applications were. With PHP and they were [00:02:00] serving HTML templates, when you might have some out there that were doing Python and whatnot, but the web has started to, Transcend right.

We, we moved from, the days of Jake query and whatnot. And now we have these different S spa frameworks or single page application frameworks. So we have react and view and spell and angle in a myriad of meaning more and what's something that's interesting about these tools as the creators created these tools, it shaped our problems.

It shaped how we decided we wanted to tackle building our applications, right? If you're coming from angler world, angler is very much, it has library supported way to manage, state styling. Many other different facets of application do is very similar way then as.

Peel back the layer you go towards felt, and then react on the end of that react. Being a library. The creators with them shaping that tool. They wanted it to be very open-ended right. I could choose, how I wanna, I could style it. Every application I do differently, I could do state [00:03:00] management differently.

I could do all these different things differently and it really CR created a boom for creators. So like the real big thing that I wanna talk about today is that when you deciding how to build your react application specifically is state, we have. In every application you really think about, if I'm getting ready to do something, I have to save this piece of information.

If we're talking like the theme or, maybe it's a user's email or maybe it's response from an API. My fronting application has to manage all of these different states. And the way I like to think of it in just in general, we have sets of state that kind of live in our front end application.

Then we. The service day, right? If we're talking about the state that's living in that application, we might be talking about the router the URL of the application we might be talking about, if you're talking react world or use state hook, you might be talking about Browser storage, which is local storage session storage cookies, right there.

There's all different forms of state there that are in the browser that live in the app world, that the app can [00:04:00] control and be the owner of. But then you have this world of server state, which is where the server really is the source of. The server really owns everything about this data, right?

And so when we start looking at most of our applications that we're building on the web at the end of the day, most majority of our state really is state that's owned by the server. We're talking like data that we're trying to get into our applications and to show something to our end users. So that brings us to the real.

Thing that we're looking at in our applications, which is really a synchronous remote data, a synchronous remote data, meaning data that I have to get from a remote lo location where the server is the source of truth. But there's some things about this, a synchronous remote data that I have to, retrieve from the server that become, gotchas, if there's a change to that data, if someone in another, in on their front end makes a change or, they make a mutation. Or they make a post API call or put that [00:05:00] data now changes. So in my application, I might not have the latest data anymore. It might become stale. When we talk about dealing with a synchronous remote data in your applications, you get into a world of like, all right, how am I cashing these requests?

How am I de duplicating a lot of these requests. There's a lot of different things that you start to think about when you get into terms of managing your remote data. So like looking at this on the base level, if I'm doing this in react, what does managing my as synchronous remote data look like?

So at a very basic level, right? If I'm not using. Redux, if I'm not using X state, MobX a lot of these other, global state solutions or Joe tie recall if I'm not using anything, I'm just using the basics, batteries included pieces of building, managing remote state and react, I'm using these used state hooks, right?

So I, I might have a hook that kind of manage. The data, which is the [00:06:00] post, I might have a used state that's, panel that's gonna, manage the error or the state of whichever my API call is in. So then I also have to have a user effect call here. That's going to actually call my query function.

So while I'm making my actual API request to get post, right. And then this function here is gonna start orchestrating this state, . So when you get into thinking about this in one single component or one single page, you can have, you can be making five or six API calls to get data from different locations, especially if you're in the rest world, if you're in a GraphQL world, maybe, it's where I'm only making one API call and I'm getting all these data back from these different data sources. But if we're looking at this from a rest standpoint I might have five API calls from five different.

Services. And I have to manage all of that inside of, these pages and these components. So then now I have all these different forms this, a lot of code here now that could be an overload from someone coming in and [00:07:00] entering it. So I think there's, something about react query here.

It comes in. And it provides a nice, simple hooks based API. I think it provides a very small footprint, but has some aggressive, but same defaults that allow us to really manage our remote state in a way that's gonna allow us to build applications simpler quicker and much more effectively.

So let's move to the code. Let's get right to the code. That's what everybody wants to see really. So what is this, what does this look like? I'm here. I'm using this nice little Rick and mortar API, and this is what, we took this base batteries and batteries included way of getting fetching state and react applications and what we're gonna do here, when I run this application, as you see, and I visit.

My local 3000 traditional page here. And you'll [00:08:00] see, it was a little different than the other one. I wanna highlight a few things in the network request, the networks tab. You're gonna see here in this API call, we're making one, one API call out here to get this list of characters.

Okay. We have our list of characters and that this is the standard way that we would do getting this remote state. When I look at, taking this and wanting to look like react, query, leveraging rat query, and the water react query. We have these hooks right there. Does these set of hooks.

And it's the one that you're gonna use a lot is to use query hook. Okay. So use query hook when you use it, there's use query. It has these, this mechanism. That's gonna apply a cash to your query function. So that's two, two parts that make up this query. You have the key, the query key, which we'll talk more about a little bit later, and then you have the query function, and along with this, I could override some defaults, so I could, pass a lot of different other items here. [00:09:00] Enable use error, boundary notify on change, props, inclusion, a bunch of different other pieces that I'm gonna fill out this picture of what we think about when we're managing our remote state.

So when I, when we look at this in terms of just what the, what this looks like in the front end, the UI, right? We see that we're making this, we still have this one API call. Here and react query when you're doing development, it has these nice little dev tools that you can use, right? So you can see, you can see the data.

You can also see some of the things that we rap query is managing for you. And this is where I go back in. You're gonna see the power react query. It manages these queries using a cash, right? So it's gonna have this cash and you're gonna see here that it, saves this query that I just called with this key in the hash.

And you're gonna see as we do more queries, it's gonna make sense as to why the importance of this cash, that react query kind of manages for you.[00:10:00] And then we'll look at some of these defaults, right? So these options here that we talked about earlier, I was TA I was mentioning just a little bit, that this is the query key.

Doesn't really provide the function here in the UI, but there's a lot of different factors that you can see about your query with this dev tool. That's a cool thing about this library that I really liked. So also, As we dive down we continue to go down the rabbit hole of react query.

You'll see there are some functions to where if I need to re fetch a query, I can re fetch. If I invalidate this query, invalidate the cash, you're gonna see another API call was made right here. And I'll do it one more time, just so you can see another one. I can invalidate the cash and it's gonna say, okay, boom, you need to go.

This data again. Okay. And we're gonna see how these pieces can come in and make our applications much more optimistic in terms of making updates and a few more nice pieces. Okay. So that's, how, what a query looks like in general, but let's see some of the benefits of dealing with a query doing query like this with rat query.

So I'm gonna go back to a [00:11:00] traditional. This traditional way that we do it, right? So you see here, I have the traditional state that I'm saving to my application and I'm making a API call. Okay. What I did on this page specifically is that I am doing two of these components, right? And that's gonna be something that you see here about this there's this RM episode.

So it is Rick and Morty. These are Rick and Morty characters. If you haven't noticed. And in these Rick and Morty characters there's an episode for each one, right? There's a list of episodes that they play in. So I have this nice little episode component here that actually also host a query that makes more API that makes an API call to get episode details.

Okay. So it's gonna get the episode name, and we also have a traditional version of that. So we got a traditional version and the react query version, but I wanna show some key things to look at when you see a traditional. So we're gonna[00:12:00]

look at this traditional version here. Okay. So something interesting that I want to bring your attention to is that here in these API, here in the API request, I see that I. One API request for all these episodes. I have Mor Smith and I have Rick Sanchez up here and you see there's 51 episodes showing for each of them.

But you're looking here and you're seeing there's one API call here and this gets Rick there's a second API call. This gets Morty. And then you see all 51 API calls that episode, but something that's interesting that you notice that there's not a second set of API calls to get the, to get episode details for Morty.

And why is that? Something interesting to think about and I, my URLs a little off, [00:13:00] but react query is de duplicating some of these requests for us. So if I go in here and let's change. Traditional character so that you can see those API quest requests happen. All right. Not

we'll change it to traditional.

Make sure that he's exported the correct way. All right. And then for the sake of.

[00:14:00] So goodbye friends here.

Make API calls. So cool. So something interesting that you're gonna see now, and I intentionally did these in different styles. That now I removed the react query version of the episode. You're seeing now that there's two sets of API calls that's made for each character. So that, and that's what we would expect if we were doing it a normal way without react query.

But now we're seeing now that react, query DDoS, these requests for us, and right. And if we're saying, okay, I'm worried that these Requests are, this data is still I can come in and I can leverage, the validate queries function that we're gonna see in the API of react query here in a few moments.

Okay. So those are a few examples. I think one more that I wanna show off here.[00:15:00] And that's to think about is when I go back and I, we're gonna go back to the tradit, the normal page that's using react query. When I go to an individual's page, right? So we're gonna go view ABI Dongo cluster, princess, right?

We're gonna go view his page and we'll see, he's only in one episode, he's only in episode six here, I think, excuse me, he's only episode 27, which is rest and Rick cl station. So that's the only I call that gets made for this guy here. What we see now, if we go look at the characters specifically, There's this query key that we can do.

And with query keys, as you look at the react query docs, you'll see that there's an array that I can pass. And what you'll see is that this allows each query to be unique, but I can also invalidate the cash for all of these these characters. So for example we'll see it here in a second.

And I'll play around with some mutations.[00:16:00]

But if I go to Rick here and I open my nice little react query dev tools, you'll see, now that we see each query coming in through these dev tools, we see all the data and I can, re fetch that specific one and validate that specific one. I can invalidate the the character and it'll make all those API calls.

But what you're gonna, what you're gonna see here with these compact, with the arrays, you can also just invalidate the episodes key and it will invalidate all those episode queries. So let's add a button here just to show that. So

I'm going to add what's his name? Let's say invalidate button.

And with react query, we'll learn. Look, we'll look at the docs here in a second and talk about some of the APIs and how it kinda works in the background. [00:17:00] Okay. So let's do query.

Yeah,

going to do.

All right. So here's something that wants to show off this invalidate functionality. So when I click this invalidate function button here, You're gonna see that all those API calls were made here again in the request tab or do one more time, just so you can see and they're all made again.

So the cool thing is, instead of doing one of these specific keys here, I was able to validate all of the episodes because it's array functionality of doing the [00:18:00] query key. I could come back and, Do it specifically, and I can, invalidate the 25th one. So if I click my nice little invalidate button here,

so if I click it now, we should say that my 25th one. Gets invalidated. Cool. So that's what that, that invalidate queries functionality does. And it can allow you to, and validate the cash to make sure the cash doesn't get sta and you can do that. Imperatively right. But if we go look at the nice query docs, we can come through here and see if we look at the API for use query there's these set of defaults that you can override here.

And they allowed you to add a lot of different [00:19:00] functionality here and there. Some of the ones that are really interesting in terms of managing the cash or updating that data is re fetch interval. So you can, if you do re fetch interval, it'll keep re fetching that on a certain Interval time time, a set of time different time goodness gracious, lost my set of words there, but different time intervals.

You can also have the stale time, which sets when the cash becomes stale. And then the cash time is also which sets, how long we gonna save this entry in the cash before I need to make another API request. So we got those few keys there. We have a lot of different other ones that, provide some different value.

We talked about the query key and the query. A cool one is the enabled key, which allows us to say, all right, this API call doesn't get made until X criteria is made. Or, you can talk about, you got the retry key, which sets the amount of retries and right. So we talk about when I was saying some of these saying, but aggressive, important default react query sets for you, it handles retry [00:20:00] and exponential back off on API calls for you. You can, disable enable them as you. So please, we've talked about cashing them background updates. There's a lot of cool things. That react query handles for you. Key thing that note over here, and you'll probably see it in my browser over here, you see my mouse, you can also use it in react native, and that'll show you a nice little code snippet on that page.

Okay. So there's one more one more hook that I wanna show. Here. And then I'll explain just a little bit, I think dive into just, explaining how I would get it set up in the application. Okay. So we're looking at queries just now and queries are pretty much get calls, right?

That they're all those are pretty much our. If we're getting re getting information from our resources those are making get calls to our different services. Okay. But the mutations, the use mutations, which are puts patches, post delete [00:21:00] request, all those different things we wanna use to use mutation hook.

Okay. So I set up a nice little example here. That's gonna have that shows us the combination of this query along with our use mutation. So I got our use query. We'll see how query key here is to-dos and I also have the query function here, as you can see it's getting the data for the to-dos and then I have our mutation and we'll talk about a key difference of the mutation that you'll see.

Is that it does not have a mutation key set on it. But it does have a mutation function. And then you see this nice little object of different things. And we'll talk about what's happening in that object here. Okay. So let's go see what this does in the front end. Okay. So let's go to our mutation page.

Okay. [00:22:00] So I got me a nice little input. Here we'll type out fixed breakfast and cause that's the first thing. That's the first to do that I wanna do today, but we create it and you see here, there's a post and there's another, get to get that new to do. We'll come here and we'll go get car wash.

Okay. So you say you, you is something interesting that you're noticing. With this mutation pattern that I have every time I make a post after that post, it is doing a get call for me. And the key thing that we're gonna see here is that when you come back and look at this, what I'm doing here, I'm specifically doing an optimistic update.

Okay. And what I mean by that is a optimistic update. Is it makes the. With the intentions that from the back end, you're gonna get back success, a [00:23:00] successful data. So watch this. So what I'm doing here in it's on mu take function after I, someone makes the a, before they make the API call, it'll set the text to empty will counsel the queries before it's actually makes the API call.

We'll get the previous data and we set it synchronously with this query data, right? So this allows us to do an optimistic update, which is I can make the UI continue going on without waiting on the response from the back end. But when I actually get the response from the back end, whether it was an error.

Or it was, it ended up being successful unsettled. I could actually inva validate the queries and it makes that API call again for me. So you see me here in validating that query up to dos and that API call is getting made here again. So I show you guys that one more time. Let's see to do write some picnic tickets.[00:24:00]

Okay. Now you see here there's that post and then there's that get that's made immediately after, right? So that's the op that, that what I showed there was more of an optimistic update, but you could also do this with just the query heat here. So you could just set the, let me see if I see if, to have an example with using the query key that might have changed in the API.

Okay. But what I did was as, as you saw there in the code here, AF when I invalidate that qu those queries on the own, settle, it went back and said, okay, let's get the latest data from the server. Okay. So that's that's really cool. I think that'll allow, give us some powerful mechanisms, but it also does it in a little bit simpler way.

If you're looking in the red, if you're thinking in the Redux mindset, I have to, set up actions I have to set up reduces and whatnot to get to the point where I have all this [00:25:00] data inside of my Redux. With X state and some other different functions, other different state libraries, they all have their own separate way of managing remote state.

But I see react query as a very clean crystal clear API. So if, if you're looking for some. Resources, let get this back. Some resources to figure out, play around where we're at query. You can review the docs that just showed off. There's a guy, I don't even know his real name, but it's TK Dodo out of the outta Europe.

But he has a blog on practical react query and he provides a whole bunch of tips. Tricks that really help you to leverage react query and using in your applications. It's really cool blog. I suggest you all check it out and if you're more into the kind, you need a course, a structured learning environment the creator of the library, Tanner lens create a course to walk you through the essentials of react query and show you more about [00:26:00] react query.

That's all I had for today. I'm going to check the chat here for some questions.

**Brian Rinaldi:** Sorry. I said, it looks like there was a question that got deleted, but I got some questions and while I ask you questions, hopefully people will bring up their questions. So first of all, that was great. I'll be honest. I have not used query before. I, but actually watching that, I'm like, oh, I probably should.

So my first question before I get to the audience questions is. . Is there a situation in which you would not use react query? Like when is it, would you, is this something you use every time you need to do any kind of API calls or is this, are there situations where this would not be a good fit?

**Jarel Fryer:** I think, if I'm looking at react query and thinking through some of the use cases [00:27:00] for me, I would probably say that cases where it may not make sense for me is if I'm highly into the Apollo GraphQL environment, where, they have the Apollo Federation, a lot of cool things happening there with Apollo cash.

Because you can do graph, drill with react. But that Apollo environment is so powerful and they have a lot of cool tools and things there that I would probably leverage that if I was using, if I was using the Apollo toolkit tool chain to build out my API.

**Brian Rinaldi:** So they would you think they would conflict with each other?

They have overlapping feature sets is what

**Jarel Fryer:** you're saying? Yes. They have a very much overlapping feature sets. There. React query adds, some different cool things under the hood and whatnot that are really powerful and that you can actually leverage outside of react.

If you're talking like the query client if you're talking like query observers, you [00:28:00] can take that base level underlying API that's outside the hooks and reuse it in other. Languages. So to take for another example, right? If I'm a, if I'm a team that's using multiple frameworks, maybe, react query does not make as much sense.

If I wanna stay too of, agnostic set of Hey, I wanna be able to reuse this in spellt world or in view world. And those patterns are a lot different. But you know that's not the, that's not the majority of teams. , I probably, there's a lot of cases.

If I'm doing arrest API, I would highly suggest, using rat query. There's another library out there called SWR and this is it's made by the virtual sale team. They have that nice little, they have a nice little powerhouse squad of developers over there. You can see it has that nice little Barel look, but it is, it pretty much takes this still while we validate pattern, which is what react query is doing to an extent also, and is, returning the data and making it much more giving that cash to the front end.

There's a few other libraries out there are in, that are [00:29:00] in this space. I'm just a fan of react query. I've used it in my current role. I've used it in my previous role. I've probably been using it since maybe version. I think I've been using it since the second version. I think he's on pick tanners on the third version of react query.

Now a third major version. So I've been using, I've been a about a two, three year long user. Awesome.

**Brian Rinaldi:** Okay. We do have a couple questions from the audience, so first of all and hopefully you don't hear the bird going crazy. I have a bird and dog going crazy right here right now. So first question is, have you used any of the real time features in react query?

**Jarel Fryer:** I have not. And with that being said I think, it makes sense for some people to use it, but for me, our applications have not been as advanced where I feel like I need a lot of the real time functionality. There's there have they have react, query surprise and stuff like pation and that kind of, that infinite scroll , API look that, I'm I just haven't had the use case to use makes sense.

[00:30:00] Keep it simple if you don't need it, don't use it. Yeah.

**Brian Rinaldi:** Okay. And then another question was, you mentioned you can invalidate by key or all when the cash invalidates do dependent cash items invalidate as well, or is that something you need to specif.

**Jarel Fryer:** So I'm pretty sure pending also invalidate as well.

I'm pretty sure it it count, it counts with the one that's in progress and then makes out another, now I will I probably reach out and, double check on that question, but I'm pretty sure invalidates pending one pending ones also.

**Brian Rinaldi:** And Sean says that he's using pation in infant, infinite scroll and it works great. Yeah, that's definitely another thing worth checking out, if you're that way you don't have to B roll it yourself. So I'm assuming like react, query's pretty lightweight. Like this is not gonna add like a ton of weight to your application or anything.

**Jarel Fryer:** Yeah. It's around five kilobytes, so very lightweight[00:31:00] Not taking up much room in your application. If you're pulling in, if you're pulling up in other libraries, you're probably, taking up much more bandwidth footprint with some other libraries, but small footprint, you, it really won't affect, your bundle as much in terms of size.

**Brian Rinaldi:** Have you used it much with Graphco or have you not used it with Graphco much?

**Jarel Fryer:** I played around with it and just some personal as you, you wanna push the boundaries of the library. But I haven't used it in like production settings with graph Q, but I've done like some tests with it and you can use it with GraphQL.

**Brian Rinaldi:** Do you, you may not know the answer to this, but is there I guess would this be more useful, say if you're doing both rest and GraphQL than Apollo, or is, are you, do you really feel like there it's just a matter of taste about which one you choose?

**Jarel Fryer:** What it's a matter of taste and patterns like, with Apollo graph Q if I, want to call a rest endpoint, I can set that rest up that endpoint [00:32:00] up with the resolver and call, to call that, use that resolver to get data from that request. Versus if I'm, in query world, I can just set up another query and call that endpoint in the front end.

That graph you all in point that way. And there's an example here for anybody that wants to go check that out. What it looks like using GraphQL. This is tanners. Pretty robust, expensive docs, but what he's doing here, he has a nice little endpoint for graph Q and he's just using the GraphQL request library.

And then it is pretty much the same. The only difference in the API is literally that the Fe functional query function is different and it supports doing the GraphQL functionality versus actually calling arrest endpoint. Okay. So I can use it. So technically I could use it with soap API if I wanted to you know what I mean?

I don't think many people, you don't want, nobody wants, don't want, nobody wants to. But I could, because this query function is pretty much a. So anything that returns a promise, [00:33:00] I can technically hook up to react query.

**Brian Rinaldi:** Okay. That's interesting that, okay. So he's using Graphco request to handle actually doing the query to GraphQL.

I've used that before, so like it's super lightweight. But it's very basic. Like it's missing a lot of the key features. Apollo, but that makes sense. If you're using it combined with this, it ends up maybe mimicking this plus Graphco request is like a variation on what Apollo offers in the way.

Yeah. Very cool. All right. I don't see any other questions from the audience at this point. I think this is, I honestly looks really cool. I may try and utilize this in some of my applications, although, I'll admit my applications pretty simple. I'm building lots of demos and stuff.

but I, I do, I love that little debugger. That was very cool. Cause that is something that's, it's not always [00:34:00] easy to dig into what's getting sent back when you're running, like I'm often jumping a postman and doing it there, but this would eliminate the need to like, just do anything in postman.

I just do it here. That's really awesome.
