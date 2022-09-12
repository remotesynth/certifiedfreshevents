---
_build:
  list: false
  render: never
---

**Kapehe:** [00:00:00] Aloha everyone. My name is Kapehe and I do developer relations at sanity.io. And this is bella. Bella say hi she's a professional treat tester. So we have been building a blog for Bella. We call it Bella's blog.io. No, it is not live yet, but Bella had some questions and some needs. So one of our first questions was how does a dog or a human build a blog today with there's?

There's so many different like technologies to choose from different front ends, different ways to manage your content. We actually landed on what I think is really great, but next JS as our front end and sanity as our back end for content. Now I do work for sanity where we make a content platform for any framework.

So that would obviously be my first pick, but Bella needed more convincing before she put all of her bones in. One basket. So she needed some things to happen for this blog and a way for her team to collaborate. So let's [00:01:00] get into the details of this blog and what Bella expects from it. And what is happening when your content is stored in the content lake with sanity.

So in order to cover our talk on your data's journey from the content lake, we're going to look specifically at Bella building a blog. Bella has specific needs and requests for her bog. So let's look at that real quick. So the key needs for Bella's blog are she needs a way to rate treats. She's a treat tester.

So she needs an easy way to give a five outta 10, a seven out of 10 or a zero. Now she needs a gallery for all of her bones collected. So Bella likes to collect her bones and we need to wait to display those images properly. And performance is very key here. She has a lot of bone images to. She also cares about what other dogs have to say about her treat ratings.

So she wants reviews from other dogs. She also needs a collaborative way to work with her teammates. Bella's blog has grown from a one Bella team to a team of many and [00:02:00] will look at that. Bella also needs her content to be future proof. She wants the content to work, even if a new front end framework comes around and she wants to use that one.

I. So what Bella actually wants is structured content. And Bella wants that nice UI to help her and her team manage the content for Bella's blog. So I'm gonna have to help her with the coding part of it. It'll probably take her too long with her little pause, typing it up, but I do happen to know a solution that is perfect for her structured content and collaborative content editing needs.

And I think sanity is that perfect fit. And this is why I think it's great and how it's going to work. So let me show you all of.

so the content lake is going to solve our problems and those important needs that Bella has for Bella's blog. So in its truest definition, the content lake is a real time database. It will give you access to your content whenever. Wherever all that [00:03:00] content is stored as JS O this makes for great reusability across mobile desktop, wherever JSON can be used, Bella can take this content and use it.

And that is what the content lake is. So let's dive a little bit deeper pun intended into the content lake, but not too deep. Let's do a bird's eye view, but let's do a Bella's eye view of the content lake. And let's talk about what the content lake solves for us. Many different ways to interact with your content.

And that's all using different APIs that are already set up when you use sanity. Now, if we look at Bella's blog.io, there are different needs and ways that Bella would like to interact with her content. And all of that has already been set up and we'll take a look at all those APIs in just a moment. It now there's also the sanity studio.

There's a little glimpse of Bella's team, but here's San, the sanity studio and the team behind Bella's blog dot. This is a way for humans and animals to interact [00:04:00] and collaborate with the content in the content lake. So the studio speaks to the content lake again, using APIs and the last Bella view.

Bella. I view of the content link is the ecosystem. So you'll find a bunch of tools and libraries to make it easier to work with structured content. There's also a bunch of people in the community who are working on these things as well. A lot of these things can be found in a sanity exchange, which we'll talk about at the very end of this talk.

Now let's dive a little bit deeper into the content lake. Now, the content lake. To Bella's blog. One of the APIs that we'll talk about is a way to get our images. So the content link will deliver them exactly how we need them. Let's say we have a bone gallery with all the images of the bones she's collected over the years, and now we want to make sure it has the proper resolution, the best performance, all the bones, metadata.

[00:05:00] So that when she grabs it from the content lake, it knows exactly what to pull. And when it goes to Bell's blog.io, it looks good. It's loading correctly and there's no size or performance issues. so the content link delivers structured content, and that happens via gro. So gro is an open source query language for JS that the team behind sanity made this can also be done with GraphQL.

So whichever one works for you, we're going to be querying for our content using gro or GraphQL, whatever content she needs. It gets pulled into Bella's blog.io. So we have. Titles author info. Any content we queried for from the content lake will be display. So sometimes Bella is going to want to know when something has changed in the content lake.

So let's look at a specific situation. Let's say Bella has a web hook set up that whenever someone leaves a review on one of her treat reviews, she gets a slack message. There are [00:06:00] web hooks that you can set up that do just that or with the listener API, every time a change or something is typed into the sanity studio by any of the teammates, the content link is always listening and updating as.

And then we have the presence API where Bella can see where all of our colleagues are working within the sanity studio. The content lake keeps that tracked. So that let's say we have Bonnie in a blog post, why carrots are better than Scooby snacks and she's creating the blog post and Bella can see exactly where Bonnie is.

Working in this document, she can see exactly what she's writing if, what field she's in title or in the slug, but wherever Bonnie is working, the content lake saves that location and where wherever Bella is on her computer, she can see using the presence API where Bonnie is. So she's always got eyes on Bonnie, and then we have the [00:07:00] roles API.

So Bella went from one Bella team to Bella Corp, and now she has all these content creators, editors, developers under. And she needs to make sure that only certain people have access to the content link. So that's where the rules API comes in. And Bella doesn't trust cats quite yet. So she hasn't given full access to them, but Bonnie and Clyde, the bunnies have access.

So this is Bella's blog, it's important stuff. So she only wanted to give full access to some. So Bonnie and Clyde have access to the content lake. They're able to update, create, delete, do any of the things that need to happen. And Paul and Hilo, the cats only have read access to all this stuff. And Bella was able to set that up using the roles API, and then finally there's review changes and the history API.

So who has changed? What, when and does Bella want to revert that change? [00:08:00] So every change that is made in the content lake, the sanity studio will show that change. So let's say that Clyde made a change that Bella's just not happy with. Maybe he accidentally changed one of the ratings for one of the treats that Bella did earlier.

So Bella goes in, reverts it in the studio. The content lake will take that change, revert it and update it back to what she had it as before. And then finally, there's the export API, where you take your content wherever you need it. Like I said earlier, so we've been talking about the communication between the content lake and Bella's blog or the studio and the content lake, but really you can take all of your content wherever you need it.

So anywhere that JS O can be used, you can export it using the export API and use it across all those different things. Now, all of this was started by running the command NPM install and then installing it globally, the sanity CLI [00:09:00] and running the command sanity in it, which initialize initializes a new sanity project.

So if you'd like to get your own sanity project up and running, run this command and answer a couple questions and you'll have your own sanity studio that is talking to your content lake, all set up for. Mahalo everyone for joining and thank you for joining us on this data journey from the content lake two Bellas blog.io.

And if you wanted to learn more, you can find more information on sanity.io/docs. You can find more about the content lake about the studio, about anything, sanity. And then if you want us to join the sanity slack community, we do have. A great community setup. It can be found@slack.sanity.io. And then finally, the exchange that I was talking about earlier can be found at sanity.io/exchange, where you can share libraries, tools, plugins, blog, posts, anything that you have.

That you've written up or created. You can [00:10:00] share there, or you can learn from people who have already shared their content and you can find me and Bella on Twitter at underscore. Okay. Thank you again so much for joining and we will see you around.
