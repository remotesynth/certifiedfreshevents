---
_build:
  list: false
  render: never
---

**Taylor Barnett:** [00:00:00] Awesome. Thanks so much, Brian. So thank you everyone for joining today. This topic of jams stack of databases for me has been a long time coming. So I was first introduced to jams stack a few years ago, probably 20 16, 20 17. I saw them as. These like very static sites, like documentation or marketing site, but really in the last few years, I've begun to see them as this much more like dynamic application, seeing like large corporations building whole like web applications on them to smaller companies doing some really interesting things with.

And so I wanted to dig into this topic of like, where do databases fit in the jams? So first I kind of wanna set the context for this talk of what is JAMstack. I imagine if you're joining this and if you've joined any other [00:01:00] CFE dev. Talks you've, this, but I think it's important because it sets us up for this topic of where do databases fit in.

So the three parts I think are always really important to remember is, pre rendering as much as you can at build time and then putting that in a CDN and then rendering everything else later building as much upfront and then pulling data that's needed is a core part to JAMstack.

The second is most dynamic functionality. Via JavaScript in the browser. So there's a lot of JavaScript conversations about this talk. And then the third is server side processes are abstracted by reusable APIs. Now this could be an external third party API that you're using. This could even be something you build yourself.

Less of a conversation and will be a large part of this conversation. But really the idea about using third party is you're leveraging domain experts who offer these product products and services via APIs that allow your team to have these like [00:02:00] superpowers and not have to worry about them.

It reduces some of the risk of what your team is maintaining. Just some of what is required to build. And I think that is the part of jam sack that I've always really loved is the API part. Come from a background of backend engineering and caring about APIs and API design and how APIs are used and how they've just expanded so much.

And so that's always been a very interesting part of James Z for me personally. And with this, I think the most important thing though, to remember. This whole talk and just about gem sack in general is jam. Sack is all about decoupling. Changing out a service or changing out an API should not feel like surgery.

It should be easily changed where we host something. It should be easily. Done to change what API we use in our application. Not everything should be strongly tied together and heavily dependent on each other, which was a thing more of the past. Often when we [00:03:00] hear APIs in the context of jams stack, we think ex these external services.

But again, it's really about just server side reusable APIs. Whether that could be an external service or a serverless function that you're posting on Nu fire Rochelle or. How did we get to this point though, of wanting to decouple these things? I think it's really important to understand to where we came from to how we got here today and all these different types of rendering.

So basically. This sits on top of a brief history of webs stacks. I'm gonna go through each of these. So I'm not gonna go in detail, in the late nineties, lamps stack was really popular. That's Linux, Apache, my PHP, and then sometimes Pearl or Python later came mean stack, which was Mongo express the JavaScript library angular and the node for the back.

And then came JAMstack but how did we get from each of these places? Cuz I think all of these kind of build up [00:04:00] to what is jams stack today. So the early days we had a browser that acted like a client for the user. We requested some page that went to the server, got that page, returned it and the HTML was rendered on in the browser.

then we started wanting to do more complicated programs. And so then we added a PHP program in there and then, that PHP program needed to connect it to a database server. And same thing, user request, something that server goes to the, and this is wildly like simplified, I will say.

But for the purposes of just like understanding high level went to the program and that program went to the database now. This is a lot of server side rendering. We're doing everything on the server side, and we're actually accessing the servers directly and we're installing and maintaining and operating all the software ourselves.

We started seeing, maybe there's ways we could improve the performance between the program and the database. That's where cashing [00:05:00] came in. Let's reuse some of the data that we're requesting all the time so that we're not slowing things. Then this idea of content delivery networks, our CDNs came in, quickly be able to transfer static assets and put 'em around the globe so that we can skip the server step a bit more.

And with all of this became, things became more complicated. We added in load balancers so that we weren't overloading the server. We, needed to scale and we had reliability issues and just things became more complex for having to maintain more. We have to worry about security.

There's just a lot of things going on there. And later then came mean stack. This idea of client side rendering came to be, there's more JavaScript. JavaScript was really having a moment around this time. Lot more JavaScript in general in node becoming really popular. And in some ways, things may be improved in some ways, but in other ways, things got worse.

Things got slower because of this blocking nature, you gotta download the HMO file and then you [00:06:00] need to download the JavaScript in the CSS. And then it has to be rendered in the browser. And there's just a lot of things that could be blocking in nature. Platforms like Google app engine or Heroku, if you've ever used them were more, less interacting with the servers as directly.

It was these like platforms as a service. I came up in full stack development in the age of Google app engine in Heroku. I thought. They were amazing because then I didn't have to go understand how to do complicated Apache server stuff sometimes, or didn't have to worry about server maintenance to the same degree.

And it was really awesome, but again, these performance issues and all of the other issues we had before with a liability security, like they didn't just disappear. And towards the end of mean, we had a lot else going on in the web development world. AWS Lambda was released in 2014, so that really like serverless came on the stage.

GitHub was becoming way more popular. I was moving from [00:07:00] SVN to GitHub, so then you could start having these get workflows and if you don't wanna SPN. Be happy that you don't know what SBN is. And APIs were exploding. You could send text messages with APIs and not have to maintain your own mail server with an API like sun grid.

And, all these things were coming to be build tools were maturing in the JavaScript world, CDNs, which already existed since lamps stack were having more innovation in how they worked. And static site generates, which also existed for a while. Also had their kind of like next generation of them.

And this idea of like different types of rendering, not everything has to be client side or server side came to be performance was improving especially with jams stack. And, but at first again, it was still mostly seeing with static sites, but now it's much more dynamic. I really like to show this graphic.

You don't have to read this whole thing. You can go to the URL in the Google developer docs and read it because I really think it demonstrates like the [00:08:00] wide spectrum that jams stack offered us in terms of rendering that before wasn't just one sided or completely on the other side, there's a lot more hybrid models now with how you render things.

I'm not gonna dig it all and in, but I think the more important thing to remember is, you really pick the right type of rendering for the job. And so it takes some thinking of what actually makes sense. What are we doing? Just cuz it's shiny versus what does actually serves the users the best?

Is it really important to remember? So we understand okay. We had all this complexity, we started decoupling things to make it slightly less complex, more portable, easier to work with. And if jams tech is all about using APIs, like where does like a database fit into that? And the reality is you can do a lot without a database.

There are tons of jams stack applications where a database just does not make sense, like having an actual relational database involved the right combination of external [00:09:00] services APIs, their party APIs is often, maybe the solution. But what if you're building something like the planet scale web app, for example, Jam sack gets built on top of next JS or anything that goes beyond just, maybe some content from a CMS or login or payments that you would use a third party API for.

And so I think it breaks down in a way that I really tried to demonstrate it here, but it's it's a little tricky because using a database is often. Based on what are you actually building? I, the best way I can summarize it. Are you building some kind of core business functionality that isn't served by the standard APIs?

Maybe your application has, you're building out user accounts for a new business that you're building and it doesn't make sense trying to shove it into an existing service. But at the same time, like you're not gonna reinvent authentication or how to do content management. You're not gonna [00:10:00] reinvent.

eCommerce or, any of the amazing APIs that are out there that are just like standard across companies. If it's unique to your business, maybe there is a role that, that the database plays think about just how your accounts are structured. What is. Thing, the app, the product, the business actually offering you're often building things that have never existed before and that, you need a database authentication, CMS, all those things.

Those are built on top of database too. You just don't see it. And so sometimes you have to actually use a database to create something brand new. And so even when the use cases are pointing yeah, I think we're gonna need a database to store this information. There's no APIs that are gonna service us for this need.

Not everything always fits into a relational database model. But a lot of them do. So when does it make sense to use a relational database? I think the [00:11:00] most important thing, I love to tell people who are newer to thinking about relational databases, like think of a table, like structure, like in an Excel spreadsheet.

For example, you have these columns and in a relational database, those columns are all of one type. You can trust that your name column is never going, will always be a string. It's not gonna suddenly need to become an integer and make it harder to query across all users, for example.

And this helps us have less concern about consistency cuz the database schema's enforcing like all names or strings. And if they're not, that's it's gonna reject that. And the data in this relational model is regular. It's predictable. Data integrity and consisting are important because then it makes it possible for you to easily query, sometimes in a non relational database, it is harder to do certain types of queries in a relational database where these there's this consistency and things are organized on the tables.

It's a lot easier to query across tables to join. 'em do more complex [00:12:00] queries across table. And this is all due to being able to rely on that consistency. There's other operational benefits of a relational database, such as mys you get things like backups and replication and failing over. If you know it goes down and how do you upgrade it?

This is across many relational databases, but I didn't include it here, cuz it's more on the operational side of things, but then those can definitely become important down the road. As you.

Again, just like nailing in this idea of this spreadsheet, like view of a table, you have a student table and you can see this like column like structure. It is part of a larger data model that has other tables and there's relationships between these. So like the student table, for example, is connected to the student section and that section is connected.

Student section is connected to the section table and having these, being able to map 'em out like this makes it easier to query later. [00:13:00] And just have, trust that consistency again. One important thing. I just want people to just stop and think what is something that you're working on that's new that maybe fits into this model?

Like where are those clear relationships between things? Could you draw something like this out, and do those data types, stay pretty consistent, then you have a great case for using a relational data. I think one of the reasons why I wanted to give this talk, cuz even myself had this like misconception of like where do databases fit into the jams stack?

Can you actually use them in jams stack applications and the answer's overwhelmingly? Yes. But because of the APIs and how do you connect to them? Always made it like a fuzzier thing. So I wanna look at how that is. That is even possible to connect between these two things. For example, I wanna look at specifically next JS.

I'm picking next JS because it's one of the most popular JavaScript, jam sack frameworks. Probably [00:14:00] pretty popular JavaScript framework today, too. It's built on top of react. We'll talk about some of the differentiators about it later, but I think it's. It's a really good example of all the different ways you can actually connect to a database and where you can do that in a next JS application.

There's actually four different places. You can do it. Some of them make more sense than others. For example, the first one build time with Git static props. This would not work well. If you. Data in a database that's changing often because you would actually have to rebuild every time to pre-render that data and get it out.

It's less dynamic. So the data wouldn't really be able to change much, which isn't a great example for when you want a database, that's pretty dynamic. The next one is at request time with get server site props. This is more dynamic, but it's also has less decoupling cuz you're tightly paired with the code in by using get server site props.

The fourth one is API routes.[00:15:00] Again, this going to this idea of the server side processes that are part of jams stack that are decoupled. I think I'm a big fan of using API. I'll later actually have some resources about showing how to do this more. But yeah, it's next has this great way of doing file based routing.

So you literally drop in a JavaScript or type script file in the API route and, add minimal amount of code in my opinion, compared to other APIs I've written and you already have an API that can be hit by. And then on the fourth one, which is a little bit different you separate out the API backend altogether.

You have a totally separate backend server that has an API running on it. For example, at planet scale, we have a next JS web application, but then we have a Ruby on rails API that is living separate and we call it just like we would call like an [00:16:00] external third party API. I think, I, maybe I gave it away, but like my favorite is definitely API routes.

I tell people what if accessing a database was just like working with a data API. Many people think you need to have a query API built into the database itself. That's not entirely true. You can basically create your own that serves the need. You have. And these API routes get deployed as serverless functions.

And there's that clear decoupling? So say for example, I wanted to change what database I was using entirely. I don't have to mess with who what parts of my application are using that API. I can just change the actual API code itself and, have it give the same response it gave before and the end user.

Or the end consumer of that API endpoint would have no idea that it even happened. I think that's really cool to have just that flexibility.

Oh, and the other thing I [00:17:00] missed one thing I wanna say the other thing is I think it gives the best blend of like developer experience of using the API routes while also. Getting you started like right away, but it also scales fairly well. Sometimes it makes sense eventually to split it out entirely, depending on what your business is, what the requirements are, it's gets into some details, but I think it, like I can get started with these API routes super quickly which makes it awesome now.

With JAMstack the shift from lamp to mean to JAMstack. There comes a few changes in what we need the database to actually be able to do that maybe before we had less of an issue, just because of the style of the architecture. So I have six different ones I wanna go over. The first one is connections.

So having the ability to have a support for high number of connections, jams tech applications need a lot of data. Connections, but why? Relational databases like my [00:18:00] SQL or Postgres use this very long term transmission control protocol, internet protocol, connections, or T you might have seen TCP IP connections.

You don't need to know super details. You can go look that up if you really want, but they use that to connect to a database server. It's its own protocol. This is a bit different than the HTTP protocol that rest API might use over TCP. And behind the scenes though, these are these short-lived connections to connect to a database, get data store data, and then they close.

These short-lived connections can really add up over time because every single user of your application is potentially triggering some serverless function that connects to the database to return or store some data. Sometimes one user could have multiple connections, even depending on what they're doing.

They really add. A lot of database providers either have limits on the plan. Like you get X number on whatever plan or they just [00:19:00] they cannot support a high number of these connections. You do have the option of getting into this idea of connection pooling and all these other things. But again, jams sec, we don't wanna care about these like server like details.

So I wouldn't want someone to have to go implement how to do a connection pool to share these connections just so that they can access their database. The second one is hosted in serverless. One of the manager benefits of JAMstack is that you're not dealing with this like toll of managing servers.

So why should you have a database that, that is requiring that of you? There's also this idea of portability through standards. I like that I can take in my SQL or Postgres database and switch providers. I don't wanna be locked into some proprietary thing where I cannot easily change my database provider, which again, Jams stack really encourages that like portability aspect, you wanna be able to scale up and scale down, I don't one of the things when [00:20:00] serverless came out, it was like, you don't.

Have to have a server that's always running that has certain types of resources available. You wanna be able to, like when you have spikes in user traffic, be able to handle it. And then when it goes down, you wanna be able to not only handle it, but also not be paying for what you had at the highest resource.

And so a database should also be able to have this like flexibility of going up and down. And with that also comes being always on if you've ever used Heroku, you may know of this like cold start problem back when you know, many of us were deploying applications to Roku, we really started realizing.

And when we tried to build slack bots, because if they had bought hadn't been used in a while, it was cold and it took a little while to get started again. Painful. Sometimes people would just write programs just to ping the Heroku app so that it never went down. We need a database that can be, immediately queried, [00:21:00] immediately have data stored in it.

We don't want that like cold start problem. And then there's latency. So what is latency? Latency's the time it takes for data to go from one point on a network to another JAMstack prides itself in this like amazing performance, because these static assets are stored on CDNs around the world and it makes it super fast.

And so we need a database that. Still fits that need, especially if we're getting data at request time, we weren't able to pre-render that data. We need a database that doesn't just slow everything down to a halt. This can depend on a lot of things. It can depend on the database you're using.

It could use where it's located. What CA what your caching strategy is with accessing data, a bunch of different things but it's important that we don't want the database to be the major bottleneck in our application. And then the last one is analytics. You can actually understand. So with this move to serverless, we [00:22:00] extracted a lot of things away.

We don't care when our apps are hosted that how much CPU it's using on some server that we don't even have access to or any of these types of details. But at the same time, You could still write a query. That's really inefficient. That's slowing things down. And so we need analytics to be able to like communicate to us as non database experts.

How, how things are going, where can we improve? And yeah, and just not, leave us being like, I have no idea. I. Need to be a DBA, a database administrator to understand what's going on in my database. You shouldn't need to do that. Jam sack, doesn't expect you to be a backend server expert, for example.

And so database give us metrics and things we can actually be useful with. And so those are those six there's of course, plenty more there's operational challenges and others. But I think those kind of hit on like the major pain points that if a database can't offer us this, then [00:23:00] we're gonna have some trouble.

The last section I wanna touch on is how to get started with, jams, stack and databases. I have a preferred stack that I'm going to share. It's maybe slightly not totally impartial. Cuz the P plan scale is the database there, but the next JS and the prism apart are decisions I've made.

I'm gonna walk through those, but first I wanna give a few I tweeted a couple weeks ago, like why do you like the stack? Because people love to rave about it. And so I wanted to share some from some users. Of the stack. Why they picked it rather than it just only coming from me. I'm gonna read from my notes MVP to scale with the same stack.

So meaning they, they could just be prototyping and then they could, actually have a launch product that grows on the stack. They feel like the tooling gets better every year. I probably say maybe every month at this point, it's moving pretty quickly which has its pros and cos great docks and mostly.[00:24:00]

Everything mostly just works is what someone said. Another person said that scale without thinking about scale. So that's like being able to scale up and scale down those kinds of things, connection, limits those things and they get type safety front to back. So that means that they're often using it with type script over JavaScript.

The stack has support for both and whole category of problems removed by simplicity. So again, the serverless model helping with some of that. And then the last thing they said, they don't need to worry about servers or connection limits. They can just deploy and forget. Yeah. And so let's break down a little bit why next JS.

So next JS is probably one of the most popular James deck frameworks today. Partially because it does support a wide range of rendering, these like different hybrid models of rendering someone. There's some awesome talks out there that break down all these different talks of rendering. But it has support for all of them.

It has [00:25:00] the ability to create API routes that run a serverless functions. It has portability. You can switch providers. If I'm on Versace, I can go to nullify. If I'm on Nu, if I can go to Versace and others. Or popping up all the time too. It's got a large community around it and it's just very heavily maintained.

Now, if I was looking for alternatives, there are a few alternatives. Closest alternative I would say is probably Gatsby. They've done a lot to also have some of these hybrid rendering models. 11 T, which isn't exactly a one to one. Like I can't totally replace everything, but 11 T did just release server.

Function support. I've been doing static sites on 11 T probably for. Four years now. And so it's always been a special place in my heart for static sites too. And so I was super excited to see about the serverless functions. And then you have the outlier, which is remix, which is a newer framework.

It approaches a totally different model. I'll include some resources about remix, cuz it's, that's a whole thing to explain how [00:26:00] remix differs from a next JS. But I figured I'd mention. The next thing Prisma. Why did I pick Prisma as my rom? Which an om, just in case you don't know, stands for an object, relational mapping tool.

Think of it as a database client that lets me connect to a database. Store some data query data. Chris was a little different from traditional ORMs, which many languages have their own many frameworks have their own built in sometimes like Rubion rails has its own Jengo has its own. Like they all have their own default ORMs Laville has its Prisma is a little bit more declarative in the sense that you have this Prisma schema file that has these three things in it.

It has the data source, which you can see is the first thing. I'm saying, Hey, this is a myse database. I give it a connection string that tells me where that database is located. And and some. Optional settings to that. Then it has a generator. So it's actually creating a client that helps me [00:27:00] speak to the database.

It has some settings related to that. This one is doing it in JavaScript versus type script. And then the last thing is it has data models. So you actually, this would be a lot bigger. This is just a tiny part of it. This is a post model. You kind. Describe what it looks like. I like it, cuz it, it feels more like readable language rather than just like super code feeling.

And it makes it easy to quickly look at a model and understand what's going on. Once you start like getting started with it. As I mentioned, it creates this client that talks to your database. This is a tiny part of a larger API route a file in under pages API. Of course you need to say what kind of route is it?

Is it a get is it a post? Is it a pu, like what kind of route is it? Some like TRICA logic, all these things, but I really wanted to just focus on the part where you know, you. Just query, get me all of the post and it returns it in JS. And then that can [00:28:00] be consumed by your front end. So what would be some alternatives if I didn't use Prisma?

My sequel two is one, it's more like your traditional database client. You will be writing your own sequel in it. But it helps you do that connection to the database, which you could also put in an API route the same way if you wanted. And there's just other JavaScript and type script or ums out there that you can definitely explore.

Now comes the last part where I'm probably the least impartial. Why planet scout? There's a lot of reasons why I could say why plan scale. I think for this conversation, it's the being able to have the high number of connections, which is done because plan scale is on top of the test, which is a project that was developed at YouTube to help.

Scale my sequel at YouTube scale, many years ago, and many large companies use it. Like slack stars, all their data in the test. For example, GitHub uses it. Like there's tons of companies that [00:29:00] use it. It's serverless, of course, like that. We said that was like a given, but I think one of the other things is like, it's get like features.

So with jams, Workflows became like a really popular thing. And, so our brain was thinking in this branching model. And so plan scale has this idea of data branching feature, where you can branch or whole database as an isolated environment and develop new features and test. And then once you're ready, open a deploy request that sees if it can be merged into your production database and and easily do that.

Locking up the database, and then if you're like, oh shoot, I shouldn't have deployed that. I deleted a table, I deleted a column or something. There's a rewind feature that actually rewinds that. And the last thing is it's standards based. It's my sequel at its core. And. If you really wanted to, you could go host it somewhere else.

Your mys database else, you might lose some of those features. But I think like just not being locked in is something that's really appealing to me. [00:30:00] And so I really, it breaks down to this idea of like scalability, but with developer experience, what do I mean by that? You get a feature set that helps you scale, like the connection and all those types of things.

While having these developer experience features that also just make it easier to use, make you work faster with less errors and problems that along a serverless database that is managed for you. I often see with other solutions. And just across the developer, other developer tool spectrum, you either have to decide does this scale, or do I get developer experience?

And I think this is the best of those, both worlds. So you never have to make that decision like down the road. Oh, I need something that actually scales. I have put up the slides for this talk on my, my, my noticed it should be like the first one right there. When you go to that URL, I also have some links.

I'm gonna be adding a few more links. While I was doing this talk, I forgot that I probably should add[00:31:00] and how to get started. My teammate James quick at planet scale has an awesome video about using next GS with Prisma and deploying it to Versace start to end, which I think is a great. Way to get started and yeah.

Other resources one of my favorite jam stack talks, like how did we get here if you are really interested in that history piece that I mentioned digs a little bit more into it and yeah, you can check those out. And I just wanna thank you so much for listening me for the last 30 so minutes.

It's really awesome. I really like sharing these ideas. I wanna see more people using databases in their jams, stack applications, pushing jams stack to be more dynamic. And I'm happy to help. You can find me on the internet and yeah that's it.

**Brian Rinaldi:** That was awesome. That was really great. So folks have been quiet on the chat, but feel free folks to ask your questions and we'll get them answered.

I do have a bunch of questions myself okay. Yeah. So if they don't have questions, [00:32:00] I've got

**Taylor Barnett:** questions I would love to hear your

**Brian Rinaldi:** questions. So one of the things that one of the things I was thinking about is how folks don't need to. With jams stack. It doesn't have to be the database doesn't have to be all or nothing.

Like those other stacks. It was like, everything was in the database, right? Yeah. But like jams stack, you can mix and match pieces of this. Okay. I don't wanna, I could put my authentication stuff, data like user data in the database, or I could use like osteo or whatever. Yeah. So you can still rely on those service.

Yeah, but have a database for those parts you need a database for, right? Yeah.

**Taylor Barnett:** Yeah. I think, yeah. Sorry. Do you have any thoughts on that? Yeah, no, totally. I've seen some interesting things. There's this library called next off dot, JS that yeah. You're, it's almost like a hybrid of those two.

You're using other off providers in a way. So say you have an app that you want, you literally can pick. I want Google, I want GitHub and I want, I don't know Okta or something. And you [00:33:00] can actually add that in and it'll. Even will, there's a Prisma adapter. I forget that might be the wrong term if it's adapter, but it's here's the schema that you just literally paste into your thing and you set up the Google stuff, you create like an O off app and GitHub and do all those things.

And then you have off with other providers. And so it's almost like this best of. It is like these models are still in my database and I can connect users to them while still not having to do the whole off thing yourself. And so it's again, like hybrid models of this, or you could just flat out, just go use off zero and only have that up.

It was like, you get that option,

**Brian Rinaldi:** Yeah, no, I think, that's one of the things I love about building jams, stack apps is your, is that flexibility to mix and match pieces as I need to. I, yeah, back in the day I remember doing like databases were.

Something. I knew well, but like we're also the bane of my

**Taylor Barnett:** existence because I think that's most people's [00:34:00] experience, I think with them, I think in, I think, and one thing I should have dug a little bit more into now. I didn't totally mention, like for example, I think Prisma has made it more friendly for like someone who was more comfortable on the front end to do database related things because of just the declared schema it's like easily readable.

Just like a really good developer experience for JavaScript and type script. Of course there's like those challenges and this goes to like analytics. You can actually understand, you can write a bad query with an ORM. Does it matter if it's Prisma or any other ORM and like being able to actually understand what is a bad query?

Like you shouldn't need to like, Have to deeply understand all those things, but you should be able to like, have some kind of tooling. That's Hey, heads up. This is, you need, you should like, maybe go prove this because this is slow. Oh yeah. Versus you having to look at it and just be like, oh yeah, I know that's a bad query because you're sequel expert.

You shouldn't have to be.

**Brian Rinaldi:** And that's yeah, I remember. [00:35:00] like having to deal, like people kinda understanding the database and indexing properly. Yeah. And then we they'd write a query. That was like, it was like ungodly slow once the table got big. Yeah. And it's you're primarily querying this column that you never indexed, yeah, of course it's

**Taylor Barnett:** insanely slow, but yeah, the index thing.

Yeah. Yeah, we have some interesting ideas to like help. People realize some of those things at planet scale that I'm really excited about. It's all out there yet, but Yeah. It's it's wild. How much, just like adding an index can change things. And also just if you're ever using databases with the price model that like an index can even save you a ton of money, basically.

So it has lots of implications of that, but yeah,

**Brian Rinaldi:** definitely. So this fellow named James. He ask. Good question here. You may know him . Are there any tech, new technologies that you're particularly excited about outside of Prisma?

**Taylor Barnett:** I'm really just excited with what, nullify and Versace are doing with like edge functions and [00:36:00] stuff.

I think. Like this idea, these ideas of pushing these like serverless, like okays Lambda came out 2014 and for a while I think people just there was like, This is cool. They weren't actually using it in production. Now we're at the places it's w being used heavily in production, and now there's like this, like second version of what can we do with serverless functions?

Can we write, like middlewares to handle different types of things, especially if you have an API that you need Rate limiting on or something like these like different things that make it more like the types of APIs we were writing on Toley server side, where we were accessing the server directly on Google app engine or Heroku, or even before that, with Apache and PHP and stuff, but like bringing some of these ideas of like better developer experience to write.

Legit APIs, like not just like toy APIs, like APIs that we can build businesses around that handle [00:37:00] scale and stuff. I think there's a lot of cool stuff going on in that space. But yeah, that, and I'm also just excited about this idea that like the whole window of. App the stack has shifted, like now a front end developer can do a lot more backend things today because of the tooling that has come up in just the last few years I came in from a backend perspective.

So like writing an API always felt like a very natural thing to me. I recognize that doesn't always feel that way for others, but I think a lot of the tooling that's come up is helping that. Be more of a reality so that a front end developer can kinda build almost more full stack, like applications without feeling like they have to be a server side expert.

**Brian Rinaldi:** Yeah. I definitely agree with that. Cuz a lot of these pieces now. You bring up next JS, but even other frameworks it's like building the [00:38:00] API is built into the framework you don't have to. And then you bring in some other libraries and you've, you have an API, although a lot of times you end up with this, there's an API and an API, like the backend for front end pattern, which yeah.

Like I've looked into quite a bit in the past. BFF, they, yeah. But the other thing he brought up there, which is super interesting to me is the edge functions, because I like how that plays into data has been a topic that's been fascinating me lately. Yeah. Because, because you're now moving.

All this logic to edge nodes or CDN nodes all across the world. Whereas in most cases, your data is still located in a single region. Yeah. Which I mean, to be honest, for most applications is fine. Cause you're dealing with thaty anyway, but

**Taylor Barnett:** That is, yeah, like at plain point of view is often that there's specific use cases where it makes sense to have.[00:39:00]

Multiple regions for your data, which we like now have support for, but right. There's a lot of cases where that doesn't and actually just like some better caching or like just being mindful. I think one of the things people just often forget is some of these platforms you're like serverless functions are deployed in one region.

Where's your database. Is it across the country? Is it across an ocean? And they need to at least be physically close. So if you're in an AWS west for your serverless function, you need to also be an AWS west for your database. So it can do a lot of. Improvement on latency just being physically close to where the function is running.

Absolutely. Yeah. And if I think we, with cloud computing, we forgot that like physical location still matters. It's coming up more with the edge stuff. But it's been an interesting conversation. Even just like wanting to deploy serverless functions to multiple places at once has been a thing that some platforms support better than [00:40:00] others.

Yeah, and I think there's two things going on all the innovation and like the compute side of things with the functions and all that stuff. And then the database side. And they're converging, but also they have different opinions sometimes. And so it's been very interesting to figure out what are some of the good patterns to, to follow?

Yeah.

**Brian Rinaldi:** It's definitely like an in not completely settled state, obviously

**Taylor Barnett:** right now. Yeah. Yeah. There's a ton of innovation going on and yeah, in that right now. Yeah.

**Brian Rinaldi:** Overlaps with that discussion of giving all these tools to front end developers to do stuff. And I'm.

Totally. I love that. Cuz I'm mostly a front end developer, but but I also feel like sometimes it gives you power that you haven't quite fully thought through, which is exactly this kind of thing. It's okay, now we've given you this super easy you yeah. You're deploying your APIs to yeah.

Simply, and they're probably deployed to a us west one. Yeah. Us east one or whatever. Or maybe you have some control over that and you know where they're deployed, but. Yeah, but now, okay, now we're gonna give you edge functions [00:41:00] and by the way, those are deployed everywhere. Everywhere. Yeah.

And that, that you haven't, and like what you do there with data to me is start to think a little more carefully about okay, exactly what you say the location matters and yeah. So now they're connecting to a CDN location in Japan, but I'm in us, east one for my data. I've now made it like super far apart, whereas I used to have them close together.

Yeah. And it's not that there's not that there's something hugely wrong with that. It's just something. Yeah. I don't think everybody, because it's so easy. I just created this little middleware function and boom. Oh yeah. And it's I'm not really thinking about Hey, that middleware function is calling an API.

That's living all the way across the world.

**Taylor Barnett:** Yeah. Yeah. Yeah. It's I feel like. Until just the last years, I wasn't thinking as much about all these and maybe it's just because performance of applications have improved so much. So now that we're like more sensitive to yeah. To the physical latency type problems that before we just didn't pay as [00:42:00] much attention, maybe it's mobile devices that have really pushed it.

And I, some people say oh, internet is pretty fast now. I'm like, yeah, but not all over the whole world. And so there are some of those, like still geographical type challenges that it depends so much on what you're actually building in for who? Yeah, I think, go ahead. It's like the soft problem.

So just who are your actual users? That people don't always think

**Brian Rinaldi:** about. Yeah. And I should know. You all have portals, right? Portals.

**Taylor Barnett:** Yeah. So that's the region. Yeah. So you can do read only regions you can. Yeah. And it replicates the data around. But but again, even when I was like writing the blog post for portals, I teamed up with a few different, as I teamed up with an engineer on one of our teams that does a lot on our Ruby on rails API.

And so I had him help. Work on a Rubion rails example, cuz Rubion rails has a way to switch out which database you're connecting to. And so he did that based on what server he was talking to. So it'd be really close together. And then we also worked with [00:43:00] the fly.io. They wrote some examples cuz flies really into the, spreading around the globe and so they, they also wrote a guide on.

Portals with plant with fly. And yeah but the reality is like not all the platforms really have the support that I actually need to like, make it work in the most efficient way. And so it's been interesting kind of seeing it all play out. , but there's definitely people who have business cases that, that stuff makes sense.

But for the average user doing a hobbyist application, or even just a small slide project that may turn into a business, like they shouldn't have to really worry about some of those things, I think. Yeah

**Brian Rinaldi:** no. Yeah. But, and even some of that little bits of latency, like they, it's, we might be.

Kind of yeah. Worrying about something that really isn't that may not be the bottleneck in your application. Exactly. Really like that little piece of distance that is traversing, there is not the robot and making

**Taylor Barnett:** your application slow. I think what people also like is they just like to know that if [00:44:00] they eventually came down to and they were like, yes, this is a problem because the actual physical.

Distance, like they actually instrument their code and actually get down to where the actual route the problem is. And that is like data latency. It's nice to know that they have solutions. I think sometimes versus, being like limited by those. And yeah it's nice that the portals exist.

I don't use them in. Side projects, but if I had an application that was serving a very specific audience and had. It was really sensitive, the latency and all these other things, and then it's there for me. But yeah, definitely.

**Brian Rinaldi:** I do think it'll, it's changing really quickly. So as people start pushing more and more things to these totally edge, yeah.

Functions and stuff like that we may need yeah, it'll become more prevalent. Like it's clearly like the next step is moving data closer to the edge.
