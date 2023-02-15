---
_build:
  list: false
  render: never
---

**Alex Patterson:** [00:00:00] yeah. I'm Alex Patterson. I'm a senior developer advocate for Appwrite. And we just introduced not that long ago, a new capability to use GraphQL within Appwrite. So we've always had our rest based APIs that you were able to access and as well as our JavaScript s stk. But I thought it would be cool to come on and Brian.

Thankfully let me come on and show off some of this GraphQL side of things. Probably should have showed that. There you go. There is that nice slide that Brian had up earlier. You can find us on Appwrite.io to join our Discord. We have a amazing community. I feel like it's what separates Appwrite from a lot of the other backend as a service.

So that's at Appwrite.io/discord. And everything that we're gonna be talking out about, you can also find on our GitHub repo too. So it's github.com/Appwrite is the org, and you can find everything from there. So the interesting part as we dive through this is, You may ask, why did we like, [00:01:00] introduce this whole GraphQL piece?

And it, it took us a while. Our engineering team was hired at work probably over the course of six months to a year, really honing in on getting this right. And the reason being that people were requesting it like crazy. So we're very much a community focused as far as introducing new features.

And this one kept popping up . So it was something that we were working on as well as continuing to build out that the Appwrite infrastructure as well at the same time. And one of the things that often gets asked, which we'll go through here, is why not just stick with the rest APIs? We have that as well as GraphQL.

And one of the reasons for that as we dive through here as you can see, Some of the improvements that you'll get from GraphQL. I'm gonna start on the rest side of things just to offset this conversation a little bit. I don't want it just to be all GraphQL when there's so much more to it than the, so in our basic, or in our old version and current version, we have the arrest APIs.

And why would you [00:02:00] use those outside of GraphQL? Fine tuning specific queries and we'll talk about. Some of what that means and the specifics around it as I go through the demo a little further rest can do everything that GraphQL can do. So we all know that because we had it before. There's actually some items in our rest, API that doesn't match up with GraphQL, and I think you'll find this across the board.

I'm also part of the AWS community and they use a product called Amplify. Amplify. Is a reverse from ours. When you decide which backend to use, you have to pick that up front. And the reason for that is, , if you're down the GraphQL side of things, you'll actually get the synchronization at that point.

If you're using the rest based version, you won't get that. And that's the same for Appwrite as well. If you're using our GraphQL version, we really would rather have you use rest for that, not our GraphQL. So just know that upfront. However rest can do. Everything that GraphQL can do. So I [00:03:00] don't wanna put that down as we go along.

Some of the tasks that are more complex using GraphQL, when you set up like an Apollo client, or if you're using one of our SDKs, when you first get started with that, you have to learn a whole new paradigm. If you're used to using GraphQL, great. Like I think you're already in that and you can probably use that for a lot of applications.

But if you're using a, an application and you just want something quick and easy to get set up, rest tends to be a lot easier to set that up. Especially as we go down the list here the error handling is what I find is probably the hardest thing on the GraphQL side. Once you're used to it, I think it's fine, but if you're used to like status codes and HTTP statuses coming back and forth.

That can be a little bit of a challenge as you go through that. So definitely understand the pros and cons there of staying with rest versus the GraphQL side. So why use GraphQL? The biggest reason and I'll show you some of this is the multiple data sources. I can't preach this enough.

You've probably [00:04:00] seen Brian was just talking about Netlify they just acquired Gatsby. And Gatsby has a new product that they're utilizing for GraphQL as well. And when they are using that, they're taking. Tons of different data sources and putting those all into a single graph ql space, so you're able to hit that one end point and get back a ton of different data as you query it.

So that's number one. I would probably put that the highest on I list for going down the graph fuel side of things. It really simplifies that task of going out and fetching everything but not having to find different APIs, different schema types and things like that. Secondly and additionally, the bandwidth concerns. So a lot of times when you're calling rest APIs, you're just getting everything back that they can send you. With GraphQL, what you do is you ask for exactly what you'd like back, and that's what it sends. So that's the reduction on the bandwidth side. And as many of you probably know what that means for mobile is huge.

So if you only ask [00:05:00] for a small amount of data when you're on the mobile side of things that's gonna help out a ton for those users. The data fetching control, that's that piece of it. And then we talked about the rapid prototyping. So the interesting thing. Conversely to what I was speaking about on the rest API side of things.

When we talk about rapid prototyping, if you only have to hit a single API and you're doing the backend and front end setup, it becomes a lot easier at that point too. So that allows for that design to go full stack across what you're working on. . So I just wanna read this one. In arrest architecture, the client makes an HTTP request and data is sent as an HTTP response while in GraphQL the client requests with data, with queries.

And so this is probably better as an example to show. And so on the left, we have multiple gis that are occurring here. So you'll see that on. Top one, you have a single gi and that is, is grabbing a piece of data for user. And then on the [00:06:00] bottom one you have posts and followers. So those are all get calls multiple of them.

On the right side, you have your GraphQL post GraphQL call is always going to be a post. And that's part of the learning curve. You can't just hit a in a browser. You can't just hit this because those are all gets So on the right side, what you have here is a query and that query is asking for In the user side of things, they have posts and followers within the data endpoints.

And you'll notice al also under posts, they're just asking for title under followers, just name. And so you get exactly what you want back. Reducing that data payload too. So you can see the pros and cons as we keep going down the list here. Of rest versus GraphQL. I am going to show you this in a live demo as we get going here.

But this is a comparison on two react applications that we have. On the left side is using the rest based architecture, and you'll notice if you ignore the that c s ones there. All of these different calls have data coming back in terms of [00:07:00] one kilobyte, two and a half kilobytes, three, 3.1 kilobytes, and they all take time on the right side.

What we have over there is 11 kilobytes of data in 39 milliseconds, which is almost the equivalent to about two of these calls on the left, and you can see that in a single call. We're getting all of that data back. So it's really important to see that in real world terms, what that actually looks like on a rest versus GraphQL call.

Oh, this is my gift that doesn't work, Brian. That's okay. Basically what this slide is representing is just how the GraphQL piece works on the app right side of things. So what this is basically showing is I'll show it to you once we get to the demo side of things, but it's where we place GraphQL in our architecture in appre.

So it. Equal or beside the rest api. So it's actually going to get all of our security protection, all of our all of those nice firewall pieces above it [00:08:00] too. So here in our explorer you can see different ways of actually getting the graph fuel data. So a couple different examples out here, and I'll walk through our docs so we can of compare this too.

But this is an example for account creation. Account, create email sessions so you can actually make both of those calls directly within the GraphQL, just like you would our aRESTapi.

the database, create side of things. So on that first one that's more client based on this one. This is, this tends to be more on the server side. So when you're creating a database or a collection you can almost think of collections as tables. So when you're doing those items, those are typically activities that you're doing more on like a admin side of things.

If you're setting up an application and you want to create those backend features as you're going maybe you have a self-hosted like CMS and you're allowing those users to set those things up, [00:09:00] this is the call that will allow that to happen to. So I just wanted to call out here. It's not just client-based.

You can do this on the server as well. So these are the demos. These are all gonna come from github.com/Appwrite and then demos for React. And there's two different spots we're gonna look in there. Brian, if I can switch over to the the screen share You got, thanks.

So in this example, let me open up vs code first of all, just to show you what we're looking at. So both of these examples are in, in that repo I was just talking about. One is the locale example, and that's gonna be on our rest based APIs. So that's this one here on the. And then we have the example graph ql, and that's gonna be this file that you see here on the right.

So I've actually gone ahead and spun both of these up. So we can take a look at the application. They're very similar and we're continually trying to get these closer and closer so people have [00:10:00] less confusion on these. But I just wanna show some of those live. So again, 51 73. This port, sorry, port 51, 73.

This is our locale example using our rest api. So you'll see here, if I re refresh this page, you'll see that the locale was called. And here's a preview of that data coming back again, it's a get call. I see a 200, which is a good status, and the data is represented back on the screen. So as I go down the list here, you can see countries are coming in now EU countries, phone codes, and this is that makeup as we go along.

All of these are get requests because they're just grabbing data. There's no update necessary. So for rest, that typically means you're going to make a get call, not a put, not a post, not a delete, anything like, So as we continue down the list here, you'll see that every one of these calls that represents data up here has to be called [00:11:00] individually.

And that's the big difference on the rest side. Now with GraphQL, if I compare just the locale example here, I can do the same thing and we'll walk through the code on each of these and you'll get those individual calls. So let me bring the network tab up. So if I go EU countries phone codes, you'll notice all of these are hitting the GraphQL endpoint.

So if I flip back real quick, these are named, so this is another big thing that people like to compare and contrast on GraphQL especially in our some GraphQL endpoints have some different naming mechanisms and things like this. But typically what you'll see are named routes here on the rest.

And on the GraphQL, it's always going to be the same route that you're hitting. You can see that it's a post call that comes in, and it's always gonna be that 200, whether it's an error or not an error, unless something is like really bad and then you're gonna get a 500 or something like that. So here is what is actually sent over.

And this can also be a little bit frustrating for [00:12:00] people to read through. There are some cool like plug-ins that you can get to list out these queries. But we'll take a look at the queries and vs code. So just know these are all set up as individual calls. And then I have one large one at the end here I set up called All and All actually has every single one of these made in that single call to graph.

So here is our GraphQL query with all of those different things in it. And then I'll dive in after I walk through the code a little further to show you the databases. I'm just gonna sneak out Brian if there's any questions as I'm going on here. I don't see anything at the moment. Gatsby is cool.

I agree. Okay. So as I'm walking through here, let me jump out to VS. Code again. So something I wanna just call out for Appwrite. We do have SDKs in all of the major languages. I'll bring up some of the docs as we go [00:13:00] along here.

As you can see, we have web flutter, apple, Android server. We can have as many SDKs as we want as well. So if there's ever a SDK that you're interested in and we just don't have the platform listed out here feel free, pull request it. There's awesome ways to do that. The one thing I wanna call out on our docs, we do have this overall GraphQL, but and this is current, this might change in the future.

Let me bump up the a little bit. So this is our main GraphQL page where it talks about how to make these different requests and how to get that where's the authentication piece going? It walks through similar to what I'm talking about, graph kill versus rest, selection sets, all of that.

But more importantly, when you start to reference our api. Now, if I go to account. and I'm in this web sdk. What you can actually do is switch this out to GraphQL so it gives you a better example of each of these, so [00:14:00] you can actually see when you go through here. Now I have a mutation call out, so that's on the create side.

If I were to flip this back to our rest call, it'll actually show you that same post equivalent. So it's an easy way to learn GraphQL through our end points too. If you wanna dive back and forth between. Okay, back on the VS code side of things we're gonna look at exactly that, what I was just showing you.

So the get local endpoint, if you were to go through our documentation, it is just this locale where we instantiate it and then once we have an instance of that, the locale dot get is going to make our rest API call for. The very same thing that we make in our GraphQL side of the house looks like this.

So it's always going to be GraphQL. You won't get multiple endpoints. So if I switched from say, database to locale, we'd actually need another one in here. Like this. You'd need [00:15:00] database equals new.

We would pull that in from our sdk so it would come in here. So every time I needed some new piece of data, I would actually have to update that. Now there's not that many, but just as comparison, if I go over to my GraphQL side, I can jump between all of those. Here is a database example down here where I am updating and creating, here's a list of documents.

So I'm still using our GraphQL endpoint and using a different query for that. So just keep that in mind as well. It, in my opinion, it's cool that I can stay all within that same GraphQL call in our SDK . So here is get locale. We just looked at get countries, same thing. So you have your list countries here.

What it's going to do on this side is locale list [00:16:00] countries and so on, so forth. But the big one for me on all of this call, we get down to the bottom, and you'll remember on the screen what this looked. , we have this all tab that I couldn't do on this API side unless I did all of the API calls at once.

And a good way to do that would be like, do promise dot all and let them all resolve back, and then you could push the data. But you have to remember that on the HCP side of things, you're still gonna get all of those calls no matter what. The difference here is this this function that we have.

So the get all locale function is actually going to specify a new query where we have every single one of these locales presented within the query itself. So that's why we're able to call out to GraphQL in one in one shot, one.

We're out here too, which is really cool for all of our data points. So that's how you can compare and contrast, [00:17:00] just even in a generic sense if you wanted to check out rest versus GraphQL. That's the read side of it. So these are our get commands. What I wanna dive into next is just a simple example of how to use app rights GraphQL to write to a data.

So in order to do that, I wanted to just show off our new console and what it looks like. So this is our new organization called Demos Free Act. I could have named this Dev or Dev cfe or whatever I wanted, or cfe.dev or whatever I wanted to the project that I have, you could have multiple projects within a single.

So this is my project level. All of our items at this point, you can click copy and you'll see I've named this one Demos for React, just for simplicity. But this is typically like a generated id. So in here, I also have a database created. So our default database right now is Maria db.

That could change in the future. We have work going on [00:18:00] and I'll probably get killed for this later, but we do have work going on for Postgres and Mongo db. They're in the works. I don't know when that's the part I won't give away. So we have these databases out here, and just to test this out, I'm gonna look at our to-do database.

And the collection to-dos. So you'll see here I have data that's already in here in our collection. You can think of this as just a table in a database. And let me jump out to our database example. So here's that first to-do. What I wanna do is break all of these down, so I'm gonna put it on here.

Let me just put CFE for the first one. I'm gonna click add, so let's take a look at, actually, I wanted to clear that first. Let's try that again.

So this is actually a mutation at this point. So you'll see local OS version one. That's our endpoint. We're hitting the GraphQL endpoint always for this. [00:19:00] And instead of a query, we were actually doing a mutation this time. So if I take a look at our payload, there's different variables that we're passing in.

So here is our collection Id. Our database ID and this unique is a unique thing, . So that actually tells the database, go ahead and create a document ID on your own for this. Now, the response to that, what happened was all of this. So this came back as a database create document, and it has data of to do it's not done and all of the different permissions.

The cool part about Appwrite is we can wrap all of these different permissions around who's allowed to create that. The only item that came back is this id, and that's from creating that in the payload. So if I take a look at this unique again, When we look at the preview, that's the ID for that specific entry.

So I'm gonna go ahead and jump out to the console again [00:20:00] and check that out. Oops. So here is our document ID that we were just created. I can take a look at this document, everything in Appwrite. And this part I just find mind blowing still today. We can wrap security on individual items in that database too.

In that. So you can see, you can assign all of this as well. Currently I just have our settings set up for our security just to allow anything right now. , which is a little nuts, don't do that in production, like wraps and rolls and things around it. But this is that check mark, so you can do document level security as well.

So I could say, No one's allowed to create read update except for a certain person. Maybe I'm an admin. I can say for this role as an admin, go ahead and allow, create only, and then the document security would provide that back to whomever I need granting that. So maybe it's just an individual user or, or what that might look like.

And that goes for our rest APIs, our GraphQL creating data through [00:21:00] functions, you name it. That's going to be applied every single time. So to continue our little example here, we have our create document and we have these created. I'm gonna go ahead and rerun this query so we can get a look at what list documents does.

So if I just refresh, you'll see this ha hits the GraphQL endpoint again and it brings back a document list of documents with the correct IDs and. I am gonna also click this X, which runs delete. And you can see here there is a mutation that occur. And this mutation is to delete document at that endpoint and it specifies the collection id, the database, and the document ID that was in that list.

So that's the back and forth of how GraphQL typically works and how it specifically works in [00:22:00] apri. So you can see there's some pros and cons involved in all. The difference being mainly that the naming mechanisms endpoint names, that is verse, hitting a single graph Q endpoint, the timing, if you do a lot of these.

The other cool part is you can do multiple mutations when you're calling the Graph Girl api. So there's a couple things in there that we walk through that really set those off. And Brian, I don't know if you're able to, but at some point you can share out the YouTube videos.

We have a deeper dive on the new graph features and things like that. But that's probably the long and short of my demo. Do we have questions we wanna break into or.

**Brian Rinaldi:** That was cool. I 

**Alex Patterson:** told Brian in here quick. Sorry. . . 

**Brian Rinaldi:** Yeah, I'm here. That's totally fine. So folks, if you have any questions put them in the chat or in the ask a question module. I'm gonna, [00:23:00] I'll ask a few of mine. So just to just to get a quick understanding at this point we are querying it is like I can.

I can get the information out of Appwrite via rest, or I can get information out of Appwrite via GraphQL. Is that like a choice I can make at app within my application? Like any of them? Both those endpoints are available regardless of yep. When I create the thing, they're both available.

**Alex Patterson:** Yep. You don't have to like, not like the AWS amplifier where you had to make a decision upfront. You can use both at any point in time that you want. In our setup for appre. The one thing to keep in mind is the real time real time currently. We are doing that mainly through the arrest endpoint and that, that could be different depending on the sdk, but that typically holds true.

**Brian Rinaldi:** Okay. And the real time is just ob obviously streaming data updates and stuff 

**Alex Patterson:** like that. Exactly. So everything in Appwrite, which is, it still blows my mind [00:24:00] if you're used to using Firebase or something like that your database updates tend to be realtime or near realtime depending on if you're using the realtime database or fire store.

However, in. , everything has eventing to it. So if a function finishes, we know there's an event. If a database updates, there's an event. So you can subscribe at any level within our system and get that subscription of venting. So I guess the easiest example, or the easiest way to say it, is yes you can do real time updates.

You can have two, two different windows open. Brian. You could be updating comments and they're going to stream over and I'll pick up the comment on my side. Okay. 

**Brian Rinaldi:** Very cool. Tony wants to know, is there like a Gaby plugin for Appwrite already 

**Alex Patterson:** or so? I did write a Gaby plugin. It's accepted. Someone.

If you're using it let me know. I haven't seen it in the wild quite yet, but I think it's this one. Yeah. So there is a Gatsby source, Appwrite it [00:25:00] basically just has whatever databases you want to go out and list. What I've, what I did a demo on for this was just a blog.

So essentially you're able to take any of your blog posts, go out and grab them from the database and it would list them out. Okay. I haven't used this in a while though, so please let me know if you try it out, I should probably update our examples. Yeah, it's probably 

**Brian Rinaldi:** what, do you know which version of GA you wrote it?

**Alex Patterson:** It wasn't that long ago, so I should, but I don't, what are we up to now these days? I don't even remember. 15 5 7 . 

**Brian Rinaldi:** I, it's five 

**Alex Patterson:** something, right? I think, yeah. I wanna say I wrote it during the last bit of four, but I think it will still work. Yeah. Now you're gonna make me wanna talk. Queen 

**Brian Rinaldi:** Ray is here. She, I'm sure she can answer that question.

Oh yes. About which version of where? Gatsby up to 

**Alex Patterson:** it. It might be in the get repo too. Like which one it's designed for. So we can pop that open, find 

**Brian Rinaldi:** out. Okay. I'm [00:26:00] assuming it, it should work for the new one, 

**Alex Patterson:** yeah, it should. I tried it on the new one. I know that. Yeah. 

**Brian Rinaldi:** And Theory would mean it would work in Valhalla.

I don't know a lot about Valla too, but 

**Alex Patterson:** I'm guessing. Yeah. So that's something I wanna play with with Valhalla is to see, because I know Vala, you can take different endpoints for data too. So for folks, I think this is the real reason why Netlify ended up buying Gap. Oh yeah. Buying, absolutely.

That's me. But. I don't know what of Ashes is . 

**Brian Rinaldi:** I can't spell . You're live searching on it. You never know what's gonna come up ? 

**Alex Patterson:** That's true. They had a great post on it not that long ago. I don't know where it was. . But anyways, you, you can take, Hey, there's Queen Ray right there. Maybe she can tell us all about it, right?

**Brian Rinaldi:** Yeah. I need to get, I need to get around to do a presentation all about Valhalla, cuz I'm very curious. 

**Alex Patterson:** Yeah. I'm pretty excited about the Valhalla piece. So currently NFI has their, what's [00:27:00] it called? API graph or something like that? Yeah, open graph products. Those are gonna like smoosh together and those are gonna be fantastic.

To 

**Brian Rinaldi:** be clear, like one interesting thing I found when I was researching a blog post that I wrote just the other day, that one graph, the one graph piece, so they named it Nety graph. Is now not open for new signups. 

**Alex Patterson:** Yeah. Closed it. I feel like at one point you could like PR and add data sources.

Yeah. I mean they were 

**Brian Rinaldi:** working to have partners and stuff do, yeah, data sources cuz they were talking to us. But it LaunchDarkly, which to be quite honest, like for LaunchDarkly it doesn't make sense. We tell you not to use the API for most things unless, don't, you're not gonna use it like in your.

unless you're trying to do things like add users or change the back, like getting flag data that through the API doesn't make sense. But 

**Alex Patterson:** anyway. Yeah, I know I used it with Contentful, I tried some things out in Shopify and we were doing a GitHub type of [00:28:00] example too, so it's definitely gonna be easy to grow that thing like crazy.

Yeah. Cool. 

**Brian Rinaldi:** What do you think in terms of your advice for folks, like obviously you built the app twice, like is there, what would be your guidance as to when would you suggest they go with the rest APIs versus when should they use GraphQL? Should they should they just go stick with one and use that continuously, or do you think, is.

**Alex Patterson:** I'm gonna, I'm gonna give my consultant answer and it depends, right? Yeah would say first of all if you're very comfortable with graph fuel and that's what you use day in, day out, use it. , but there's some caveats. Like I said if you want those live subscriptions to the database and things like that, you're still gonna need rest.

If you're just spinning up something like super simple example for projects, I would just recommend using rest. It's gonna be a lot more clear from the endpoint stand. Part of things I think it gets a little confusing, especially if you're trying to teach like newer devs on GraphQL and [00:29:00] like what specifically those data points are and things like that.

, we do have one. I shouldn't say drawback, but it's a necessary thing. Appwrite, we try to accommodate everyone, right? So it's it's not as like specific to one thing and we can't tune it specifically for one thing. On the GraphQL side of things. When you're setting up all of your database tables, you own the schema, right?

So you can update those tables to have whatever you want in them with whatever foreign and everything else. What's difficult though, from a GraphQL endpoint, we can only give you the options for Id created deleted like all of our base stuff. And then you get the data piece. You can't say which columns in our database, and this is today.

This is still something that we're trying to decide on, but the CPU cycle hit that it takes to say give me these three columns of things. It's pretty intensive. So we did that on purpose to, we always want app rights core. to be as fast as possible. So I guess long story [00:30:00] short I would recommend if you're at the database point of that decision and you think you can choose whatever data you want coming in and out, don't do it that way.

Don't pick GraphQL because of that reason. Now, if you have, okay. 25 tables of data. You have user profiles, you have comments, you have a post all of those things that you would normally have with a blog or whatever, and you need to pull those all at once. It might be a great option for you at that time because you have like smaller tables that you're pulling all of the data at one time together.

So again I think it, it's skillset one is probably it's always DX developer experience, in my opinion. That's gonna keep your company afloat and people happy. So go with that, first of all, and then secondarily make some decisions after that. Yeah. 

**Brian Rinaldi:** So what you're saying is the way the way that it works,

I like if I'm posting to to the Graph Q endpoint, it doesn't, it won't, it has to be everything. Or is it even reading from I get everything. 

**Alex Patterson:** So even [00:31:00] reading on the database side, all of our other Okay. Endpoints are pre-specified, they have a schema ra, oh, okay. A great example is probably if you wanna bring it back up, I could show you like this is our locale example.

. In this, I can remove any of these. Like I can go like that so I can, right? I can take out everything. But single field, when we get down into the database side of things, when I go to lists, so here's my listing of documents. Uhhuh, . I actually just have this where it says, 

**Brian Rinaldi:** Oh, I see.

Okay. 

**Alex Patterson:** Yeah. And if I didn't have that, so again, when I'm out here in my to-dos, I get to pick these columns all at will. So when I call the rest API for this, no one cares either. They're getting all of the data, but there's an expectation in the GraphQL world that would allow me to say, oh, I just want, yeah, I just want.

To do or done or [00:32:00] something like that. Yeah. And that's the part that gets really intensive CPU wise for us to do because it's now, it's manipulating like here's the data, here's Acomb. Go search this. Like it does a lot of stuff. We tried it that Yeah. Cause but it's full rough. , 

**Brian Rinaldi:** you'd have to generate a schema Yes.

For every single database that a user creates. Exactly. To be able to make that API work. And then anytime they make a change, you have to update that schema. Yep. Yeah, totally. I get it. Because, yep. Like I worked for stepson for a while. Yeah. And we had similar issues that and like people could easily, because they could create their own, nesting becomes an issue in GraphQL where like, how deeply you nest.

Exactly. Cuz I can in theory go infin infinite number, like layers deep, but then that gets performance-wise can be a big drawback. So 

**Alex Patterson:** yeah, it can be really difficult. Yeah. So in, in general, if I speak just more in general [00:33:00] terms as well, I think there's great capacity on the GraphQL side.

If you're, if your team and you're a developer that wants to head down that road, especially like if you have some Gatsby folks that are really. Yeah, totally. That's a fantastic way to go because that entire data layer is gonna be GraphQL based, so it's gonna be important to know it. And then you could pipe in our stuff if you have them doing like static page layouts and things like that from a Gatsby side of things, but then you're gonna add in whatever, live commenting or something like that, you could still use our GraphQL side of.

right? Yep. 

**Brian Rinaldi:** That makes sense. And I guess the only negative being of the data aspect there, like the putting is over fetching, which. by default, you'd get unrest anyway. Rest is, yes. Is by default over fetching. . I guess in, in a way you lose the benefit of not over fetching, but you get the specificity and the ability to do like a single query for all the things.

That's a benefit. That's okay, I get it. [00:34:00] That's really. Cool. Alright. I didn't see any other questions. So we, 

**Alex Patterson:** I saw a lot of c I CD talk, but I'm not sure uh, yeah I, that was, 

**Brian Rinaldi:** Tony was asking about C I C D, but I didn't quite know. I didn't get the question if it was a question.

I guess we, Give him an opportunity to put it in there. But yeah, no, this looks really awesome. I hadn't, I haven't had the chance like to mess with it myself, but it looks really cool. And I like, . I think most places that I know of have not had the ability to be able to have both GraphQL, like it's like I choose one or the other like I've done the AWS thing and you have to set up things differently in order to use the 

**Alex Patterson:** GraphQL.

So Yeah we're trying to keep the feature parody as, as close as possible on all of this stuff. The graph kill piece. It was definitely an engineering challenge. We're not a big team at all. And so for we had one main guy, shout out Jake. He did a lot of work on this, so it was pretty exciting.

Get this one in. Awesome. Shout out for the the Appwrite side of things. On Thursday, we actually have office hours. Two. [00:35:00] So if you happen to catch this even at a later time every Thursday, 11 AM Eastern, we do office hours now. So feel free to ask more questions and we'll dive in. Nice.

All right. 

**Brian Rinaldi:** Yeah, so join Alex and the office. Oh, wait real quick. We got one question from come in real, if you don't mind. I'll try it. , where in an e-commerce solution is the sweet spot to switch from rest to GraphQL and vice versa. Where do you get the most performance for each and where where to avoid different types of.

So it's I guess a follow up to, to, the question I asked about your advice. Is there a specific advice you'd say like for if you're building e-commerce is it, is there a benefit to specifically using Graph Coel instead of instead of rest or, 

**Alex Patterson:** yeah. Is it kinda, so I think that at times there can be it depends.

So like a, Shopify's usually a popular one. There's a lot of different. . On the GraphQL side of things, there's a lot of different things you can ask for very simply. So if you're trying to keep your application light again and you have a [00:36:00] listing page, let's say the really cool part on the GraphQL side is you could say, I just want the URL for my image on u URL or, and and my price and that.

And so that keeps the payload just tiny. And it allows you to search through that. I haven't used that in a long time though. I'm not an e-commerce expert by any means, but so that, that helps things out. And then when you go to like full page, you can actually do, in one single call, you can grab out all the product information about that single product and doesn't have a listing page.

So in that single call, you can go grab that really quick too. So there's a lot of benefits on the graph kill side. I think I really like it as a spec. I'm not gonna say that, performance wise and things like that, outside of bandwidth and things. , there's caching that you can account for those things on the rests API side of the world too.

There's always the, yeah, it's probably equal when you get down to it, when you get brass tack, it's gonna be close. But I do like it for the bandwidth side on e-commerce applications for sure. Yeah, 

**Brian Rinaldi:** I think we're, where I've [00:37:00] seen it. Just to throw my 2 cents in here the benefit being like if you're talking about e-commerce specifically, a lot of shopping is done on your mobile phone, and so if you can eliminate over fetching.

Via, like you can slim down that data and potentially improve the performance of your application slightly. It's not gonna be dramatic, but every little bit of data, especially when you're doing mobile, It's helpful. And then the other benefit being if you have scenarios where you are doing like, oh I query this to I'm gonna get this ID out of here and then from this API, and then go back and query this other API with that ID and that information to get this other data.

And sometimes you have this sequence of rest calls can be very slow. And so if you can eliminate that and do a single query well that, that can actually be a significant benefit in that particular case. But you have to, it has to be like, somehow you have to have the graphical i p i to support these multiple different endpoint calls that you would've had [00:38:00] before.

Yeah. Anyway that's. Take on. 

**Alex Patterson:** That's a fantastic point. The chaining verse batching. That's huge. Anytime you can take out the time delay on rest calls, that's a big one.