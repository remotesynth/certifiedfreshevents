---
_build:
  list: false
  render: never
---

**Jaeriah Tay:** [00:00:00] Hi everyone. Thank you for joining us today. And I wanna especially call out Brian at CFE for making today possible and accessible. And as mentioned earlier I'm really thrilled to be here as I've been part of front of Fox for just about two years now, helping with the bootcamp curriculum.

And overhaul of that as well as community engagement. Thank you to Jen. Luper the founder of front end foxes for creating this amazing and growing worldwide community. It's really amazing to see the array of events that we've put on over the last couple years with online workshops and round tables and streaming.

So I'm just excited to see where I can take off from here. All right. You I'm , you can find me on Twitter. And my first and last name I will also be uploading a blog format of this talk after on my personal website at.com. Please feel free to reach out. I'm more than happy to answer any questions.

If we're not able to get to any [00:01:00] questions in the end. I want to get a, just a bit of my background out of the way before we get to talking on one of my favorite current tools. I work remotely for a company called tackle as a software engineer based out of Vancouver, BC. My day to day at tackle is spent building software platform that enables other software companies to generate and skill revenue through cloud marketplaces.

So some of the big ones are AWS Azure, Google cloud, and red hat. Since starting a tackle, I've been exposed to working with some of the most modern and innovative tools. One of which is GraphQL. And while I'm here today, a tool that I've been intrigued with and eager to learn about since starting my tech career just a few years ago.

And I want to assume that a majority of you have heard of GraphQL, but if not, that's even better. I'm here to give a bit of an overview of GraphQL, what I've learned and what I believe, why I believe it is a powerful and intuitive tool to abstract manipulate and consume data in your modern front end applications.

And my only [00:02:00] hope is that by the end of the talk GraphQL won't just be some hyped up jargon made up word that you nod and say yes to by the mere mention of it. Because that was me just a few months ago, but that it would be a tool that you could dig more into and leverage for your next project or application.

Let's go over the agenda for this talk. First I will start off by touching on the comparison between GraphQL and the traditional rest arch. And right after that, I will go over exactly what graph keel is and give some examples of how to integrate it into your application. I will then summarize some of the benefits and what kinds of problems it could solve along with the drawbacks and when not to necessarily reach for the tool.

And then I will close off by recapping on what we've learned before I get into what exactly growth keel is. Let me make a comparison with what most of you might be more familiar with res API. let's imagine a real world scenario here. Shall we? We are all affected by the environmental damage that's [00:03:00] happening in real time and not to disparate with what the world is currently facing, but more so to continue to spread awareness and hopes to encourage atomic and industrial changes that will help to hopefully reverse the climate issue.

Let's say you're curious to visit a curated list of climate initiatives that you would like to get involved with. This slide shows an example, wire frame rendered from a request that was made to arrest API backend. So how the rest architecture works is that it relies on a set of rules. And one of the rules states that a piece of data, like the listing of climate initiatives resource, for instance, like you see here is fetched.

When you link to a specific URL or end.

Sorry, just working out my okay. The slides. So what you saw earlier was a list an array that is output onto a landing page and you would go to a URL like this one that you see here, and you ask the rest API to give you the list of initiatives available at [00:04:00] this end. How this works exactly is that when you visit the URL, it determines what response comes back.

The data typically return as a JSON or JavaScript object, and it may look something like this. At first glance, you can see that is a whole lot of data and nested properties. The limitation is that the restful architecture already defines what the resource looks like. Here and you really have no other flexibility than to return it all to the front end client.

There is an intuitive way to know what structure your data might come in or what type of document you're requesting for would be. You might say it's premature to look at a potential problem on a smaller application. But when you're thinking ahead of scaling an application with multiple page. And specific views.

It will become cumbersome to create different endpoints inquiries to receive the relevant results for your front end tick. For instance, you're given a new [00:05:00] view to implement where you need to display a list of categories for a specific initiative, you will run into a situation of meeting and IP an API endpoint for each front end need to demonstrate this caveat.

Let's go back to our climate initiatives example. If we need an initiative details page, we would need to create an endpoint that returns a specific initiative by its ID, along with its corresponding data properties. The second line shows an example endpoint you would also potentially need to create. If you want to return the list of categories for a specific initiative, this, get this could get quite unwieldy with having to duplicate code because of the need for either a full set of data or a sparse set of data.

Using different resources to model needed. Data is considered a conventional risk API architecture, as opposed to creating a single endpoint that returns the entirety of an object and all the records associated [00:06:00] with it. There will always be some trade offs when developing for various front end clients.

Especially if you have multiple ones like mobile or web, you will need to think of serving various subsets of the same data. And what other associated records you might. It ultimately comes down to the business logic and whether the project is more front end or backend driven.

The main issue that is prevalent in rest in the rest architecture is over fetching, unwanted data that the front end doesn't necessarily use. And also having to make multiple trips to cater to different queries, the contract and communication between the client and the server is fairly one side.

Because the client is forced to receive what the server gives to iterate the drawback. Visually here's a diagram that shows how the network request works with the rest API. So you can see at the very top, our client here relies on three different entities for data, [00:07:00] which means three times the network requests to get them necessary, information that we need.

Is there a way that we can reduce a number of. Yes, there are definitely ways to do that. For instance, like batching the categories API together to get the list of categories for initiatives listing. But this method might not necessarily scale is there is a tightly couple development workflow with the backend frontend teams with the backend needs to continue to be altered to suit the precise needs of the front end.

Especially if you're given new specs new projects and new apps to work. The other method would be to use one single endpoint, like I mentioned earlier, but then you're getting a whole lot of data back you might not use, and that will come at a cost for your performance. So when there are problems and limitations in the ever-changing web space, new tools, and inevitably always surface in an intent to solve them, especially in today's front end, web E.

That's [00:08:00] when GraphQL was created by Facebook to solve some of the challenges with a whole new, different paradigm of working with data in the front end.

In 2022, the state of API survey collect and service from what tools are being used worldwide with representation from a wide variety of organization, sizes, experience levels, and in. The survey concluded that the number of developers using wrist and production fell slightly while graph heel increase familiarity in familiarity and usage as with any new front end tool, you don't necessarily choose to jump on the bandwagon just because it's the next hot thing.

I would go into more details on the drawbacks. And when you don't want to integrate GraphQL in a much later slide, What exactly is graph keel by definition. That is a great question that I haven't covered yet. The graph keel foundation lays it out as it [00:09:00] is a query language. What the QL and GraphQL stands for APIs and a run time for fulfilling those queries with your existing data graph provides a complete and understandable description of the data in your API.

It gives the client the power to ask for exactly what they need and nothing more. And it makes it easier to evolve your APIs over time and enables powerful developer tools. So those are a whole lot of words, but let me get in, break it down and get into it a lot more. What I like to do is define graph, kill into these umbrella concepts.

It's essentially a data graph, a query language and a sche. Now get into each of these concepts later on, rather than going back to the explanation of the quote, let me continue to paint a visual model for you. Take a look at this visual graphic, which of course is graph HEAL's official logo. It might not be so telling [00:10:00] from first looking at what the logo is trying to portray the dots.

Each of these dots are what Graphco represents as node. Nodes are individual objects and the lines that connect these nodes are what we call edges corresponds to the relationship between these nodes. Going back to our climate initiative example again, to shed more understanding each of the nodes for business, a particular resource, like the initiative and article or a company, for example, the edges would represent the interrelationship between the.

What category and initiative is in. This is what your data graph essentially would look like. Graph QL basically works on the concept of graphs and the relationship between the objects and the graphs are treated as, for as class citizen.

How exactly does graph Kal server make working with data more intuitive for the front end? This visual is a bit of a start comparison between the rest API that I showed you earlier. [00:11:00] It shows a graph Q layer sitting between the client app and your database or microservices. The graph Q server receives a request from the front end and it would consult with a schema that is provided which I will show an example of later.

And then it would respond back to the client with adjacent document and you can render this out exactly how you need in your front.

I will start by showing you how you would create a view or component based on a UI and how the operation and implementation of GRA hill works. Let's consider our climate initiative again with a details page like, so

you can see that this page is rendering out a name, image, website, and description. And how this is displayed out is exactly how your query is asking for it. And going into more of the implementation set of things there are two ways to implement GraphQL. You can either do it as a schema [00:12:00] approach or code first approach, which one you go with fully depends on your project's requirements. I won't be going to details on using a code first approach, but instead.

We'll go over how schema first approach looks like you will see later on how schema first approach enables more readability and discoverability for your code to start implementing graph scale with schema based approach. Start with breaking the steps down in these components here. So you would first start with a data graph by defining your schema and your.

And an example of our initiative detail page, a query that we would make would include the field's name, website description, and the query would look something like this, but before the query can even get executed, it would need to be validated on the server to check that the types are correct.

And whether they exist. Luckily GraphQL uses a type system for validation on the query sent by the. [00:13:00] We would define our field types. So

there are two defined types here, our image type and our initiative type, the validation of the query will be done against the initiative type and the image type as well. As it is one of the nest step field properties of initiative. If we ask for say an article field in our query, The graph heal server will respond with an error outlining that the article feel simply does not exist on the initiative type.

Secondly, the server would need to know exactly where we are retrieving our data from be it a database or microservices. I would just briefly touch on what resolver functions are, but I won't get into an implementation of it as it can get quite. So basically what a resolver function does is that it tells a grapho server where to fetch and how to resolve the [00:14:00] fields and for the brevity of this talk.

It, it is simply just a resolver function that can be written in any language where you're able to drill down to the specific field and the exact data you need from multiple endpoints. So an example may look something like.

Once we've defined our schema types. We can write a query to ask for the exec information our client app needs and have an expected and succinct response from our server to use in our front end. You can use a query here and ask for the fields it needs and nothing more. And you can see that the response is given with the exact properties that you.

You can sparse this out, render it out exactly how you need in your front end view.

So with all that said, let's summarize what benefits graph QAL serves and what problems it aims to solve.[00:15:00]

Graph fuel allows you to dictate what the required data for your distinct front end would. The retrieving of data would use a single endpoint to get the response. According to the schema you provide. One of the main advantages I'd also like to highlight is the incredible developer experience and the ability to incrementally adopt graph keel into your projects with separate client entities.

You can start introducing a new feature or one domain of your application without having to overhaul everything in the beginning. And this is how we've done it in my team at tackle. Where instead of overhauling our whole API backend, we start with one domain area and work with that to introduce new features.

Developer experience encompasses everything across the graph, ke ecosystem from the documentation to the built in type system and the decoupling of backend and front end services and how easy it is for front end developers to [00:16:00] reason about their code. It's really giving the power back to the front end, develop.

Lastly, one more benefit that's worth mentioning is that graph hill has been adopted widely by bigger enterprise for their complex systems and microservices where multiple client applications are needed. Of course, there's no tool that is one size fits all. What may be some reasons of why you would not want to reach for GraphQL and what are some of the drawbacks.

Because graph Creole is such an intuitive develop, has such an intuitive developer experience. There are a lot of complexities that happen under the hood that are abstracted away. A lot that I don't necessarily know about this stage, like the extra services it provides or that it doesn't provide. And this may contribute to the tool of being more of a black box, where it may be difficult to debug.

Graph keel isn't necessarily a successor or replacement for rest which is worth mentioning or your [00:17:00] database. It is simply an agnostic query language to ask for data from your back end. It also might not necess necessarily be worth integrating graph keel if you're not working with a rapid changing system or introducing new features or if you're working with a small project.

So if you have an API backend that is quite consistent. The engineering effort that's needed to implement a whole server might not be worth it.

So I have come up to the conclusion of my presentation here, and I wanna close us off by recapping on what we've touched on. Everything that we touch on is at quite a high level. And I wasn't able to really drill into doing a implementation demo of it, but I'll be happy to share more resources of how you can read more about graph fuel after my talk.

So we've compared the differences between using a restful architecture and there are issues with over fetching under fetching of [00:18:00] resources and not having to make multiple round trips for. we went over the steps of how you would integrate graph keel at a high level by defining your schema types and requesting your data for the front end, with your specific query.

From that we understand how exactly the graph keel operation works. We briefly touched on what resolves, what resolvers do, and when you would need to stitch data together from multiple entities and how your data can be. Then I showed you an example of what a query might look like and the predetermined response that you would get.

All right. I hope that everything I've gone over has gotten you a bit excited to dig deeper and learn more about this new paradigm of working with data. Of course, I'm no expert at all. This was simply a new tool I started working with and wanted to share some of my understanding and learnings. I want to thank you all for being here and for listening.

Once again, thank you to Jen. Thank you to Brian. Thank [00:19:00] you to all the MCs and all the wonderful speakers that I can't wait to catch up. On the talks with I, I was able to dip in and watch some of the talks. I can't wait to catch up on them later on. And once again, feel free to reach out and connect on my Twitter, my website.

And yeah, so this wrap up my presentation. Thank you so much.

**Ifeoma Nwosu:** Okay, so thank you very much, ger for this really insightful and informational presentation. I have a question to ask you think graph, be placing rest through API in time soon. Do you think foresee a future or like in nearest future?

**Jaeriah Tay:** Yeah, I at this stage and with my experience level working with graph keel for the first time in a non price app I'm of the opinion that it's a very specific use case where you would reach for graph keel. With graph keel the benefits that it provides can also be its drawbacks.

So I [00:20:00] think ultimately it, it depends on the specific business logic say if you're looking at putting in all the engineering effort to implement the system as a whole, or would you do it at a incremental adoption process? I think there's still a lot of work to be done with the tool and right now with, being having a core team to work on it.

They will continue to solve problems that, that that, that come up with the Facebook app and across the ecosystem. I, yeah I would say it's at this stage it's an agnostic tool that you would continue to use on top of your rest APIs and. And how it can work in tandem together depending on your application or your business logic.
