---
_build:
  list: false
  render: never
---

**Roy Derks:** [00:00:00] Hey, good morning, or at least evening for me. Thank you, Brian. So my talk will be about using graph qu as a data layer for a user interface. So as we already jumps that conference, you probably know what the, a stands for, which is API and gr API is one of my favorite part of APIs.

So I was to stock actually four. Of course, for all of you, we want to work with the gems stack or actually are working with the gems stack already. It's also for those people in here who are curious about GUW, who might want to use graph? Maybe already use graph.

Sorry.

Wow. I was it's.

Share now,[00:01:00]

sorry folks. So somehow the screen share breaks. So you saw, you heard this slide, you heard this slide and we hear, so this talk mainly folks about how you can get a GRF quel API. If you don't have one already, so maybe already have a rest API. Maybe you already have a database, maybe you're just getting your data from from markdown, which I know I did for some websites.

But sometimes you're in a situation that you really want this gr 12 API, but maybe you have a backend team that says, no, we're not gonna build a gr API for you. And I've seen this happen a lot with different companies, front end, people being really excited about using GRF grill and then Beck people being.

Not neglecting, but maybe not so positive as strong that people are about graph, grill APIs. So in the stock, I'll show you how you can get a graph grill API without having to actually convince your backend team that you should build one for you. It's a little bit by myself. So as Brian said, I'm Roy I'm from [00:02:00] Amsterdam.

You can find me on Twitter with the handle tech team and I work with a company called steps in and with steps in, we want to make graph quel easier for people, and also give you graph API without having to worry about any deployments at all. And next it is. I'm also writing books and my most most recent one is called full stack graph grill, which I I call out with someone else.

And if you're curious about graphical after this talk, make sure to read it in order to know how you can build full stack Gral applications. So before diving into how to create a gr API, let's have a short look about what gr grill actually is. And I know probably a lot of you have Graphco experience and maybe for you, it's a nice it's nice, fresher up, seeing what Graphco is again.

So Graphco is a query language for APIs, and it's not important enough to keep stating it's a query. After all, because people also think Graphco is a framework on its own or Graphco is a technology they can use for JavaScript. It is technology can use the JavaScript, but it's [00:03:00] platform agnostic.

So Graphco itself is a query language for APIs. It's not directly tied to any language. So if you think graph curls, just for JavaScript people then you're wrong because she can use it for any other program or language you. But often it's quite often used by Java queer people and probably most of you are today.

So let's let's just keep assuming it's perfect for graph, grill and JavaScript people. So as a query language, it has it has certain specifics and the most important, specific being that you can get exactly what you want in a way you request it. So if you send a request like you see on the left to the left, you can see a query and this query will get us some data from get.

Get is actually one of the biggest companies with a public GRF grill API. So if you want to learn more about graph grill and how you can use with actual data, you might already have a look at the, get of GRF grill API. So on the left, you can see my query and my query is my ums, the information I sent to my to my API in order to return my data.

[00:04:00] So if you look at the left side, you can see all these fields defined. So you can see if a query called, get a query. I have a query called GI up and a score user. I'm gonna give it some parameters, which is a GI up username. And then it will regress some fields and you can see some fields are nested, which means these are also nest data.

So the data responds on the right side. You can see it as the exact same shape as the query we have of a left side. As you can see there, we're requesting a bio, which you can see is being returned. You can see we're requesting fuller information, which is. Relationship cause followers is a object and the edges and notes are actually an array.

So asking the data in a specific format and getting the specific format back in your response is one of the main things people like about graph 12. And it also lets me think about the song from the spice girls. So if you're If you have been around when they were popular, then you might recall the song and graph cor is also about, so tell, graph what you want, what you really [00:05:00] want, and you will get the data in that shape.

And the next specific of graph is that it offers a single endpoint for multiple resources. So you already saw, we had a nest relationship in a previous query. If we look at a different query this time it's Twitterer, it's not good. And you'll see why I'm using Twitter and get up later on. As I have a shared demo, which we'll be using both these APIs, as you can see here, we have this nest relationships and I told you about the nest relationship in the previous query.

But here you can see again, so you can see, we are requesting auto information about a specific tweet, and then we will return the nest information. And this can be coming from multiple resources as. So I'm not familiar. How are you, how familiar you are with Twitter architecture? I'm not that familiar as well, but you can assume a company this size has microservices.

And the nice thing about Goel is that you can use one query to get data from multiple resources and these resources can be multiple services. So in [00:06:00] case you have microservices, it could be that data comes from these different microservices and these nest relationships are perfect for this. And then the final thing that's important to know about GRF well is based on the type system.

So you might be using type script instead of JavaScript in your gems stack project. GRF is a similar type system, except it's not type script it's GRF qu query language or actual GRW Che design language. And it's all built on a based on a type system. So if you look at the query we just sent to Twitter.

You can see every field has a type definition. So we have a field called, created and correct, which has the shape of a date. And then we have a field called location, which has the field of a string. So you can see here, the type system is is comparable to what you might know from type script. You can see, we both have strings.

We have dates and dates will be a a custom type script. It's also a custom type in in GU. So you can see the type system is also a very powerful [00:07:00] specific of GRF quel. And then I often hear people saying GRF quel is seen as replacement for rest, and I can understand where we come from.

Cause typically you use to have a rest API, and then at some point you move to GRF quel as your main source of API. So that's how people see it as replacements. But I rather see the two existing Because by using them, co-existent you can actually do a lot of extra work or actually save yourself a lot of extra work by transforming rest into graph.

Automatically. And I'm saying automatically here, because you don't need that much information to do so it only needs to run a couple of CLI commands and you're actually being able to use your risk APIs S GraphQL endpoint or actually one Graphco endpoint. Cause if you keep notice in the first part of this.

This presentation Graphco has one single endpoint in which you can query all your different resources. So looking back, you might think about this in in the same way. So in a rest approach, if you have different rest [00:08:00] endpoints, you can actually transform them into one Graphco endpoint or specifically one Graphco API, which serves all your arrest endpoints to the magic of queries.

And how is that done as actually being done by using work schema as a single source of. So in a graph grow schema, you can define whatever rest endpoints you want to call and what information they should return to your graph API. And we're all doing this through a service called step. And with step 10, you can do many things.

One of the most important things you can do is have your graph grill API running in seconds, and also have it deployed for you. So you no longer have to worry about deploying a Graphco API or about bringing a server up in the air that hosts your Graphco end. Or actually single endpoint, when instead you can rely on a service, which is now called steps in order to do all this for you, what does it look like?

So typically it looks a bit like this on the right side, you can see steps in, you can see steps in as multiple ways to connect backends [00:09:00] into one API. And then on the left side, you can see you or your client sending requests over the internet. So over HTTP or HT DPSS and every client can send graph, grow carries two steps.

Over this to be clients, unless you don't submit any credentials. Of course. Cause we try to keep your graph, grill API as safe as possible. So you can connect any backender data source. Using custom directives and custom directives are a way to extend graph quel females or graph grill APIs without having to actually change the core graphical specific.

So directives are part of the graphical specification. So by using person directives to extend your graphical. You're staying well beyond all the limits, without having to write any code to connect any of these backend sources. So roughly you can connect any database using a DB query custom directive, any rest API using at rest, or even autograph APIs by using the graph directive.[00:10:00]

And then assuming you provide the graphical API build by steps and to work credential. You can query this from any client. And the nice thing is you can get a fully performance serverless of cloud API. So we even can start doing serverless APIs now without having to worry about the connectivity of this API.

Cause we all do all this for you. So as a front end or gems tech developer, you no longer have to worry about verte host your API or how to make it run. So let's try this out and to make this as simple as possible for. I actually worked today, a demo or for gr studio. So gr grill studio is one of the products sets and have, and in graphical studio, you can introspect gr quel APIs from your web browser.

So if you would go to GRF quel, do steps.com or scanning this SPQ code. You can find a graphical studio, which is a in browser ID in which you can explore different APIs. And these are rest APIs from. [00:11:00] Other services you might know, get up or Twitter, which we just saw, or even had the CMS systems like I could show you in a demo, there are multiple ones or combinations of all these different systems.

So that's one of the nice things as well. We also have community run APIs, which are brought together by communities, which I will show you on this page. If you would go to GRF quel those steps and com you would actually find this graph, crawl studio. Let's me can screen a bit bigger. You can see with all these pre-built APIs, which are either services like lag Gido, which we already saw or gile even or even CMS products like agility or.

Tenfold. So all these APIs are something you can find in those steps and com and it's good to know that these are pre-built for you. So you don't even have to write a schema in order to connect with them. The only thing you need to do is using them here in a studio or download them as I show you later on.

And actually the nice part is [00:12:00] these combinations. So these are combinations of APIs brought together in one schema. And as you can see, we even have community one. Which is want to combinate Spotify far with the Google API. And we also have the one which I'll be showing you today, which is something I like to call a developer publishing pack.

So this is perfect if you want to make a portfolio website. So I suppose you're posting articles on Def to your active on getup, maybe on the projects you're working on. And then you even like to send around some tweets like I do. So if you want to use the startup pack, the only thing you have to do is press.

And it will be creating this scheme for you. And then you can, of course configure your private API keys, which is something it's probably better to do in your machine, or you can just mock the data and by mocking the data, you don't even have to worry about putting your credentials instead, you will get the mock data and we will make sure that this is very much in line with what you will get from the actual.

As you can see, this query is bringing together multiple stuff. So it's bringing together [00:13:00] Def toe, which you can see here. It's bringing together Twitter because it's kept me some Twitter details. And somewhere in here, it's also getting GI up for me, but let's focus on the first one we go here, you can see, we have GI up details, Twitter details, and everything.

Just run this one and ask us to when the combined one, and you can see it's actually mocking my data. If it's smaller, so you can actually see what's going on. So they just mock the data for me and see, we still the same format as we saw on the slide. So you, would've a query. With this name, you have data returning to this name.

Then you have all these different fields and all the data smoked for it. And of course you can also insert your own credentials to make it even easier. And this is something you can already put into our projects that you're you're building on your own. So there are multiple ways to do this.

You can either publish this whole API into this endpoint, or you can just copy this fancy endpoint here and start using it in a product already. Sure. It's copied. [00:14:00] So now I will go to a a GM stack application in this case something react. The next SAEs I can actually send starts and queries to this specific thing.

So to this specific graph API that has been created by me in the steps and studio. And now I can actually query this from any application. So if you would go to to your code and I can share the location of the sample, which you later on you can find I'm using this query. I have a defined somewhere from the, have a defined here.

So here it is. So this the query which I copied from the studio. It has my Def toe query. It has my nest field to get good of details. It also has my nest fields to get Twitter information and from my For my component, I can actually fetch this and the fetching is being done here at the bottom server side.

Cause that's of course important to know if you're sending request to an API and you're passing along [00:15:00] credentials, make sure to do server side, unless you want to leak some credentials and often it's fine. Cause it could be the credentials from the specific user. That's sending the request in this patient settled.

If you're sending requests from your own API, like your own API keys, which you're using. Auto sales APIs, make sure to do with server sites not to lead them. So this endpoint is the endpoint from Garco studio, which has been deployed for me. And this is my query, which Richard just showed you. I'm passing a variable, which is my own Twitter name or dev to name in this scenario.

Cause dev toe is the leading query. And then I'm gonna use this to get my. And whenever I would start this application, so I can start application using MPM. It's gonna start my my next year application. It's probably my browser. And then it's loading here. It's showing mock data. But you can see it's getting data from three sources, right?

So we have the latest depth of tho article. [00:16:00] Latest get repositories and then also a pin tweak. And this is all mock data. Of course you can include your own credentials and by including your own credentials, you can of course create your own custom portfolio site. So later on, I'll be sharing a, get a page with you.

And on this, get a page. You can actually find this example and another examples as well. And the nice thing is here is by working together within the studio and also within your local environ. You can inspect here so you can see what it looks like. You can see whatever CHES are available and NGS use them here, make sure mock them unless you're putting your credentials and see what the results look like.

And by looking at these results for the first start, you might even copy over this Jason and plug it into your application and see what happens there. Or you can just actually publish this one. So by publishing it, you can also link your account to it, to make sure you don't lose. And if things are doing here, This publishing entry will get this endpoint that we already used in our gem tech [00:17:00] application, which you can also download and build it.

So by downloading it you'll be downloading the schema that we created in the steps in studio. So downloading the schema is something I already done for you. And I can actually take this this pulse. Take this pulse for you on my second screen. So here we have them and then we are actually gonna be facing them inside our gems stack application, top level, have these folders.

Yeah, just myself, luckily. And I can see here, we have this information and then we actually need to make sure that these kind of there moving down. It's. Okay,

so these are the files I just COPI. And then the final thing I need to do is [00:18:00] actually this fall this is my index fall. What I've just done. I went to gr studio. I created something in the studio, so I combined three APIs, which is dev to get up and Twitter. And actually, instead of using the API endpoint that generated for me, I'm actually gonna be taking these things inside my own project.

And by copying all these files that I can just download. From the studio. I can actually put it inside my project and then have steps I'm running here locally, which means if I run here locally, I can deploy for my own device instead of having to do it from the ID, which means I can also connect my own data sources.

So now we've been using pre-built data sources like these sales APIs or service APIs. You can also create CHES for my own inputs. So if you already have a rest APIs, when the connector. Or you maybe have a rest API that we don't go for in studio. You can bring them all in here and write your own Graphco team mouse in order to to run them.

So let's have a look at what these things look like, rid of [00:19:00] the name space for the directory. Cause I just got rid of them.

This, you can see, we have four different files. We have a index Perel fall, which is the main fall, which has all these falls that we want to include. That be an example of dev toe. And as you can see here it's actually calling the endpoints from dev. So you're using the defo rest API through step in and the same is being done for get up.

It's also using things here, but probably it's using the, get a API. Instead. It's a bit long to scroll through to start to the Twitter one. So on Twitter, you can see, we also have this schema that we downloaded from studio, and then it's also using the address connector. And so we don't connect any databases or autograph file APIs in here instead, I just connect rest APIs.

But of course you can perfectly well connect any API if you like. And then you can also start. [00:20:00] Steps in here locally and just fill the portfolio website and when steps and starts make sure that you're locked in before I'm already logged in when steps and start. It's gonna look for my index graph fall.

Then it's gonna take all these different graph files and make a graph grill API out. So what do we invite to the goal? Let's just like API slash the gem. Ham. Although I might like some ham later on again. Now it's gonna start and create my graph API for me. See, I'm missing of false copy over that last fall that we were missing.

We started and then we should be fine.

So now it's actually deploying all these Beel. And the the connections that we made to the rest APIs, two steps in which will make it available through a local host, as you can see [00:21:00] here. But it will also make it available on this endpoint. And this endpoint is a combination of my username and the API endpoint I just created.

So if you would be connecting to this from igenic application, make sure to always use this deployed endpoint cause we'll make sure it's performance. So that's ensure what I wanted to show you in terms of the demo. And if I would go back to my presentation, you can see, you can find graph studio right here by either scanning the code or we're going to graph step.com.

But I also have this link for you, which is all the code examples that we have. So actually just started generating a whole new suite of of quick starts, which you can use, which are in his organization for basically a little different types of, so either. If you're using my SQL input, my database, I wanna connect with the rest API and also make 'em available through a gem site application, go here and find all these examples.

So that was [00:22:00] mostly it. I believe we have I've also have a poll for you. Let me see already have the results coming in. See, yeah. My full question was what's making gr whale hard for. And I see most of the people said creating SKIMA is the hardest part. So if you find creating SKIMA hard, then please know that within stepson you can actually create SKIMA yourself.

You would still need to use graph and design language. So maybe it is a nice follow up question that we can take it in a Q and a or later on, on Twitter is why do we find it hard to create SKIMA? I also saw quite some people on. Deploying service is hard. So one of the things steps is actually covering for you is making it easy to deploy a graph 12 server.

So yeah, thanks for answering the poll. And also, thanks for listening. Yeah. Make sure to find on Twitter. If you have any questions later on that you maybe don't want to ask in the Q and a, and then I hope you enjoy the rest of the conferences. We just started out with a new day. Thanks.[00:23:00]

**Brian Rinaldi:** Thanks, Roy. That was great. I'm really impressed by all the work you all have done on steps in studio. It's really, it's changed a lot since the last I saw it. So like it's looking pretty impressive. Looks pretty easy to use. I know. One of the things that I think is tough for folks, cuz we've been so used to using rest APIs for so long.

And I think that can, what do you think is what's your advice to somebody who's like trying to make that transition from using rest to using GraphQL?

**Roy Derks:** Yeah my first answer of course, would be to use steps and things I showed. The most important answer I want to give people is Gral revolvers are not endpoints if you build your own server.

So within steps 10, we do a lot of things. When we combine different direct endpoints, we make sure there's cashing. We make sure you don't over fetch. But if you create your own server, which perfectly fine, of course, and you [00:24:00] translate every endpoint into a resolve. You need to make sure that you also have these optimizations because otherwise you'll still be having the same problems as you would be having richer rest API, which could be performance, which could be over under fetching.

So often when I see people going into graph world from rest is typically generating reservers from endpoints, which can be tricky if you don't take inter account all these performance issues that you might already have. And if you're actually copying over to graph.

**Brian Rinaldi:** Yeah, that makes sense. I know for instance, one of the things that that people seem to struggle with is like you said you.

You think of it? Rest is easy. I can just spit out whatever. And there's not really a thought, cuz I, you get what I send you, right? As we tell my kids, you get what you get and you don't get upset as the saying goes. Whereas with GraphQL like the person making the query can ask for whatever it is that they want, which is powerful from the.

Querying [00:25:00] standpoint, but also difficult to handle from the API building the API standpoint, cuz you can, I can ask for, you have to actually accommodate all the different things that they might ask for or deeply nesting different types and stuff like that to the point where, I think certain times you like, you have to be careful cuz you can nest it to the point that you blow everything up.

**Roy Derks:** Yeah, definitely. So an example I mentioned the GI up API, so GI up has both for, and a graph API. And if you would look at the amount of request you can do with both, you can see he's actually quite limited for the graph APIs simply for these reasons, because if you deeply nest, you might even get into some sort of infinite loop, if you keep nesting and nesting.

So you can imagine they had some sort of rail limiting, it was a bit more aggressive. But yeah, gr could definitely be hard from the backend. Because you need to do all these optimizations in order to make sure the front end or the person querying. So the client is being optimized, right? Yep.

**Brian Rinaldi:** Totally. Steve asks, how does [00:26:00] steps, hand handle availability or other error cases that occur on a graph sources it's aggregating?

**Roy Derks:** Yeah, so that would depends. If you look at how people handle errors in graph, you often have something called a nullable non knowable field, but really depends where you get your data from.

So often in graph, you don't get any data from a source. Even if you build your own or it steps in, it's gonna throw an errors object. And that error object will probably make sure that one of the values get notified. So we basically do the same thing. And if any Fisher service is unavailable, then steps probably also will be unavailable.

You can't give you data that you can't get for you. That

**Brian Rinaldi:** makes sense. So if, but if if I have a say a query that aggregates multiple sources, it would only be that one source that might have gone down that I can't access everything else should be accessible.

**Roy Derks:** Yeah, definitely. So if you get data from getup and Twitter and one of them is [00:27:00] down, we will get data from.

The one that's up and the one that's down doesn't return any data, unless you want to get data from Twitter. And then through Twitter information, get data from somewhere else. Because of course the first data source you're pulling from is in available. And you need input from that source or something else.

Then of course, that won't work. That makes

**Brian Rinaldi:** sense. So you have to take that into account. You're still aggregating many sources. So you have to account for like potentially errors within those aggregations in a way.

**Roy Derks:** Yeah, definitely. And we have cashing, but generally you don't want the cash results that are unavailable, so you could make users to guess that they'll be better.

**Brian Rinaldi:** It's okay. None of these things go down. Twitter. Never GitHub. Absolutely never goes down. So I'm not worried about it. Sean asks, how do you recommend we decorate content covering from an API? If a few APIs have most of what I need, but what my page needs a little more data. Where should I put it?

**Roy Derks:** Yeah. So could you [00:28:00] repeat. Sure.

**Brian Rinaldi:** He asks, how do you recommend we decorate content coming from an API? If a few APIs have most of what I need, but my page needs a little more data. Where should I put it? I think he's saying okay, I, I want if I'm aggregating different pieces, but I need to actually add additional data onto.

How would you recommend doing that? Can you do that in steps in, or do you have to, would you have to do that on whatever client's consuming?

**Roy Derks:** So depends what you're trying to do. The nice thing about steps in is that you can bring together all these sources. So if that extra piece of data that you need is coming from an API or a database you can bring it in steps and return it from there.

If that extra piece of content is coming from maybe a local. Then probably it's something you can use within your application. So if you have markdown a markdown file, an example, somewhere in your project, , you can probably use a markdown file and put it in directly instead of handling two steps in, if you would've those markdown files, maybe [00:29:00] in an API coming from different source, maybe a CS, or maybe a given prepository, they can just put it in schema and then put it from that source and combine it with all the other.

All the other data that you already have in steps now. Okay.

**Brian Rinaldi:** So one of the things I think, the benefits I've found of GraphQL as somebody who like, can mostly just consumes it. I That I wanted to talk about was the fact is it's self documenting in a way, right? So I found one of with rest APIs, obviously I can give you whatever it is, the result is whatever I determine.

I want to give you as the API developer. And so we end up with these like kind. Complex API docs, where, and every time I have to use a different rest API, I'm digging through API docs to figure out what it is I'm supposed to get and how I'm supposed to query each endpoint. And you'll have like docs for each endpoint.

And it's just it's and sometimes even different endpoints in the same API, aren't consistent in the way they send back [00:30:00] things and stuff like that. So tell us about how GraphQL helps to solve those problems for develop.

**Roy Derks:** Yeah, definitely. People also say Graphco APIs are self documenting, which is partly true, but partly not true.

So they're self documenting through the type system. So if you construct your schema, you're actually saying what all the types are of these different fields, you, whatever fields which could be a string, you have a field which could be some sort of nest relationship. So they would be referring to auto types.

And this is all documented in inter graph grill schema, and then there are services or tools that you can use in order to read those temas and then to explore your API. So I showed you steps in studio, which is using the schema in order to give you some sort of documenting. But also if you deploy your endpoint, you will get a graphic dwell IDE, or actually we try to call an IDE that's a bit like postmen specifically for a graph dwell.

And then there are multiple flavors of this. So , you have [00:31:00] turf grill playground which are all related to each other. But the thing you can do there is you can reach your schema in a more more visual way. Of course you can reach your schema within your own ID or from any API endpoint or to inspection because it's also something offers you can send a request to your server to ask for introspection and to turn the old.

You can do the same from all these browser based IDs or tools. So the graphical playground is the most the most popular one. And in that one, you can actually look at your schema. You can play with your schema so you can send queries from the playground as well for the interface. So you don't have to go to a terminal or go to postman, but you can directly do this.

From the playground, which your schema next to it. So in that way, it's, self-documenting because if you need a field, you can find it in the sche map if it's there or if it's not, but also Corco will use this in order to get you outta completion. So now you try to write down your query. You can already see if[00:32:00] a field exists or not.

So you can do this either from graphical playground or if you're using an IDE like Theo scope, which I do you can actually hook it up to your server and then have to out completion there as. So net pretty self

**Brian Rinaldi:** documenting. Yeah. The auto completion is something that is, is Fantastic. I guess the only from my standpoint, like sometimes I struggle with the fact that like you GraphQL, you also have to learn to specify everything you want.

You ha you get exactly what you want, but you have to specify everything that you want. It can't be like, like select star kind of thing. I have to tell it, oh, I want all these fields kind of thing. Which, so there's, but you do get that auto completion, which makes it a lot easier to construct those

**Roy Derks:** querie.

Yeah, definitely. Yeah. So with the rest API, you would get that select star select all. So if you would've rest API hooked up to your, my database to probably get all the tables from there and with graph you really don't have it. So that's also a nice part. So if you would be ripping [00:33:00] wrist API, GRW, you maybe don't have that efficiently layer.

If you actually have a database, then you won't have that select starting and you'll make sure our graph grill. Make sure that you will only get the fuel that you request. So that's a nice efficient bonus and out completion. I definitely help us with that.

**Brian Rinaldi:** One other thing you showed it a little bit in your presentation and I know it's a deep topic to cover, but I wanna explain to folks, cuz there was a bit of use of GraphQL directives in there and it's one of those features.

I think people tend to. Especially those of us who mostly end up consuming GraphQL really don't understand what a GraphQL directive is. What does it do? And like, how are they really powerful?

**Roy Derks:** Yeah. I think I briefly mentioned it, but GraphQL directives are, so there are some building directives which are used client.

But you can also use them use some server side. So we're using directive server side and then custom directive. So you build your own, [00:34:00] you can actually extend a graph server or a graph grow schema. So the way we do it in steps in is we use custom directives to handle data connections. So if you would want to get data from the risk API or from the database, we use a custom directive to do right from your schema.

So instead of writing resolver. Used customing directives to extend your schema to be able to get this data from different data sources. If you look at the building directives they're actually used to include or to hide data. So you might understand if you have a query and the query response as a certain shape, we can actually say if this field is no, I want to include something from a different part of my query, or if this piece of information is.

Over a certain value. You want to include extra value. So you can actually use this though. We looked at the relationships we had. So maybe you want to get the author of a post from your CMS. If the if one of the [00:35:00] fields in the post is empty, namely the fields that would get the idea of that that author of the post, then you already know you don't have to include an extra relationship.

So it is built in directives. We help you with things like. But custom directives like we use with steps and they help you to extend is schema by pulling in your your data sources from somewhere else, like your rest API, your Mar database, or your graph API but also to combine information from these things.

So one of the things we're doing is if you have a type called post in example, and I want to link it to the author and your author is coming from a different query, you can use another custom directive in order to. Responses from one query and combine them into a different query as well. So it are quite powerful now, especially for this extensibility.

**Brian Rinaldi:** Yeah. So I think, the key thing I think I wanted to share was that you mentioned is that this is part of the GraphQL spec. This is not oh, Hey, we're writing something. That's not legit GraphQL, like directives are part of the [00:36:00] spec and you can, and so steps, in's obviously created a bunch of custom directives, but then you're still writing legitimate.

GraphQL query language, it's not, or schema language, sorry. You're not like you're not writing some custom code here. It's still it's legitimate GraphQL because GraphQL has that extensibility built into the spec. And there are other directors right beyond just what stepson offers you can.

If you're building your own server, you can actually create your own or install ones to build by the community and such. Yeah, definitely.

**Roy Derks:** You see a lot of different libraries and other companies as well, creating their own custom directives and there are some built in, and then with all these other custom ones.

So it would be nice though. Maybe it's if someone meets a new startup ID, it would be nice to have some sort of directory, all these different person directives people can actually see which ones are taken and which ones. Yeah, someone really gets inspired by this talk about golf and has some extra [00:37:00] time please try created.

**Brian Rinaldi:** Yeah that's a good idea because I did notice there were certain ones, like you had different people do different implementations of very similar directives across different servers. So I think you could get into a place where you're, the beauty of GraphQL is that. Don't need to go through all those API docs all the time and try and figure out what, how this rest API works.

But I guess if there's, if people are end up using a lot of custom directives, you end up being a it can, you can alter the way that works in a way, make it a little more okay this API works this particular way, versus that API works differently. Yeah.

**Roy Derks:** Yeah, definitely.

Are you, as you can use custom directives service side and client side, especially it be nice to know which libraries are using, which custom directives. So you won't. Yeah. So you want to interfere at some point. Yeah, absolutely.

**Brian Rinaldi:** And [00:38:00] one, one last question. So obviously you have your book, but what if, since I know a lot of folks may not have even done a lot of grad.

In terms of either consuming, GraphQL or learning, how to build, the schema definition, language and stuff. What are your recommendations for places that they can go

**Roy Derks:** learn about this? Yeah, definitely. So if you go to the main graph website from the Graphco organization, which is graph.org, you find a lot of tutorials there and also really starter kit.

And I showed you a small implication of the GI up gr API. But it's also a really nice way to start. Cause as we discussed itself documenting in a way so you can actually start by using the Gieb gr API to see actually your latest repos and so forth. And it can be a nice way to to getting started with this.

With the auto graphical experience

**Brian Rinaldi:** Somebody in the chat mentioned that directives sound like NPM, but with, the custom directors are like [00:39:00] adding NPM libraries in a way. And yeah, in a little bit of a way, I suppose other than the fact that directives have to be specified in a particular way.

Yeah.

**Roy Derks:** But yeah. So for now it's mostly creating your own type, script type definitions and making them available to others. But it would be nice. If maybe in the future it could be like an MBM registry for these directors.

**Brian Rinaldi:** . Yes, exactly. Alright thank you, Roy. That was great.

Hopefully everybody learned a lot about GraphQL and goes and checks out the steps in studio. So really appreciate you speaking. Thanks so much.

**Roy Derks:** Yes. Thank you. And thanks everyone for listening. And I hope you will enjoy the rest of this day.
