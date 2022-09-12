---
_build:
  list: false
  render: never
---

**Rob Sutter:** [00:00:00] Hi, welcome to this session. Adding a GraphQL back to your gems stack app with fauna in the next 10 minutes, you're gonna see how quick and easy it is to add a back to your app using GraphQL and fauna. You're gonna sign up for a new account with fauna. You're gonna upload a simple GraphQL schema. You're gonna make some modifications to that schema to see how powerful faunas auto generation is.

And finally, you're gonna get some additional resources to help you learn and build more with fauna.

The first step is to create a new account and it's simple. Let's go do that now. Here on the sign up page. You see that you can sign up with your email or using your GitHub or Netlify account to make it even easier. Let's go ahead and sign up with email note that [00:01:00] you don't have to provide a credit card until you're ready to upgrade from the free tier.

Now that you have your account created, it's time to create a database and you could do that by choosing the database, give it a name, select a region group, and choosing. That's it, your database is created and ready to go with global replication, simple, easy to use serverless operations model. Now that you've created your database, it's time to upload your schema to fauna.

And when you upload your GraphQL schema, fauna does a few things for you, namely for every type that you include, it gives you a create a find. An update in a delete mutation automatically without having to provide any additional information. Here's a basic GraphQL schema. It defines an enum of frameworks such as [00:02:00] next JS and SPEL kit, and it defines a type of project.

This is a sample schema for you to track your jams stack apps. For example, from this, we would expect fauna to give us a way to create a project. To update a project, to find a project and to remove a project, let's go into the fauna dashboard and see how this works from the fauna dashboard, navigate to the GraphQL tab and choose import schema.

Let's select that schema that we just saw. And we get the GraphQL playground. If we choose the docs tab on the right, we see that we have queries to find a project by. I. And mutations to create, update and delete a project just as we expected, let's test these out to see how they work. First, we're going to create a simple project.

We're gonna choose some values that make sense for us. And we're gonna run this mutation. Fauna [00:03:00] automatically creates a record for us in our collection returns. The values that we've asked for in our GraphQL mutation. Let's navigate to collections and we see that fauna has also created a project collection for us.

And here's our new document in that collection. Let's see if we can use a read query to get this document back by its ID. We'll return to the GraphQL tab. Copy the ID from the mutation and run a fine project by ID. Note that this was also automatically generated for us by fauna when we uploaded our schema.

And again, if you forget which queries you have, you can always return to the docks on the right side of the playground. We run our query. And again, we get the same information that we ask for. So with very little effort, fauna has given us a collection to store our data and it's given us create retrieve, update, and delete queries for that data.[00:04:00]

Let's see what else we can do with. The next step is to modify your schema, to add some common data access patterns that you'll need for your application. Fauna can automatically generate queries for you when you provide query signatures that accept known attributes as a parameter, including no parameters at all, and return a known type.

For example, with this schema, we could add a list, all projects. That returns all documents from the project collection. And we could add a list projects by framework where given a particular framework, it returns all the projects created in that framework. Let's see what this looks like in schema. Here we've modified the previous schema to add two queries just before the cursor.

There's a list. All projects query that takes no parameters and returns, a list of projects, a known [00:05:00] type, and there's a list of projects by framework that takes a known attribute framework and returns, a list of projects, a known type let's replace our schema in the GraphQL dashboard and see how these queries are created.

Return to the GraphQL tab of the dashboard and choose replace schema again, choose, replace, select the modified schema that we've created. And once it's uploaded again, open the docs. Now we have two additional queries, the list, all projects query, and the list projects by framework query note that both of these return pages of projects.

So pagenation is built into your applic. Let's add some more data and look at what these queries look like. Here. We have a mutation that will create three additional projects, another kit project, a next JS project, and a N project. [00:06:00] When we run this mutation, we get three document IDs back just as we'd expect.

And if we navigate to the project collection again, we see that we now have four documents in our collect. Let's return to the GraphQL tab and run the list. All projects query that we created, we should expect to see four projects back. And then fact, that's what we see. Two Al kit projects, one next JS project.

And one next project. Now let's say we wanted to filter these by framework. That's what our list projects by framework query will do for us. So again, we run this query. Passing the argument S felt kit for the framework and we should expect to see two projects returned. And that's exactly what we see. The first felt kit project we created.

And the second one we created in the bulk mutation. So you see how easy and powerful. Faunas automatic generation of queries and [00:07:00] mutations for your GraphQL schema can be to learn more, including additional access patterns, authorization, and how to create a complete application for the jams stack using fauna.

Visit the link that you see on the slides, fauna.link/gql workshop. This takes you to a two part workshop that gives you the fundamentals of working with GraphQL and fauna and helps you build that applic. From there. We have a collection of tools and examples in fauna labs that will help you build more effectively and more complex applications.

Visit fauna dot links slash labs for code samples, tooling, and more. And finally share what you learn and share your questions with the community. There's always somebody ready to help visit fauna.link/community and post your questions in the forum. Or show off what you've built in the discord server.

Thanks for joining us for this quick [00:08:00] talk. I hope that you've seen how easy it is to add a GraphQL back into your jam stack with fauna, how you no longer have to worry about operations, creating, maintaining, and optimizing databases. You just store your data, define it in your GraphQL schema and build for more.

See the links here on the slide. Don't forget to follow us on Twitter. At fauna or myself at RTS underscore. Rob, thank you.
