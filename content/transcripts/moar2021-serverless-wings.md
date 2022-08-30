---
_build:
  list: false
  render: never
---

**Obinna Ekwuno:** [00:00:00] Hey there. I know you might be wondering why you have a gift of Ironman flying across your screen, but this is a visual representation of how I feel. Every time I launch a server less function that does a particular. So today we're going to be talking about serverless and how it gives you wings. And the other side note is a question I always ask myself, like, where do all the functions go?

Like after we hit deploy, what happens to them? How are they optimized for us? But I have 10 minutes, so let's make the most out of it. My name is Obina Ikuno. I'm a developer advocate at CloudFlare and you can find me on Twitter at speaks. I also do. I also function as a technical editor at the list. So this is a tale of two developers.

I'm sure that if you're a front end developer, you've [00:01:00] always you've. You must have been in this situation where you have to set up a proxy server to consolidate all the API requests that you're making into one server. And at this point, now you're moving a little bit away from like your front end UI creation and moving into creating proxy server.

And it always ends up in a place where there's a lack of ownership. And from my experience with lack of ownership with products or services, it always ends in a burnout where people are wondering, okay, who owns what? Whose dog? Proxy this, right? And then you see yourself like creating services that go away from life content, develop.

The front end development confines, and then you keep on like building and learning new stuff that makes you wonder who am I turning into? I'm learning Docker to like, make sure that when I build this or deploy, like the local is in sync with the production container and then learning Kubernetes to like scale and deploy.

And all of the sudden you're wondering, am I still a front end developer? What is front end [00:02:00] development? Have I moved away from this? Am I now something else? And. It doesn't end at just building, as soon as it gets to like a point, for example, if you're maintaining an eCommerce store and there's a spike, like if there's a sale on the product, you start to see all of these new users coming.

And then now you're worried about scaling because you are in charge of the writing, the deployment, the scaling and everything. And you probably have this expression every time somebody says, oh, look, I'm taking 50% of a very popular. The complexity continues to grow as your user base or your size begins to grow.

Because now, like I said, you are in charge of every time there's a backend change. You have to update your proxy server, which in turn updates, your UI, which in turn, you have to deal with the deployments and the scalability, which causes a problem. Now, mostly server less comes with a promise. The promise is.

Do what you can focus on what you will, and I will take care of the rest. [00:03:00] We have different platforms that supports this. I'm sure you've heard a lot about them today. We have AWS that's Azure functions, the CloudFlare workers. There's a lot of these services, and mostly my own implementation. My own story of using servers has been in the jump stock space.

And I feel like it gives me that superpower that I spoke about in the beginning. It makes me feel like I. Because I can do some setting functions that can do specific things in my code without having to evolve the backend person. And also the more users, like the more spikes that I get, the more it, it skills with it.

And I only have to pay for what I use per request. And like I said, you can, you have, you can focus on your business logic and leave the scaling to the experts. My own weapon of choice is CloudFlare workers. And there are certain reasons why I prefer to use CloudFlare workers. Not just because I'm a developer advocate.

I'm here to tell you the more some of [00:04:00] the advantages of using CloudFlare workers as your server, less platform of choice. So usually if you were, if you used a request based, or for example, another, say an example, AWS Lander, you would deploy your server less functions. Maybe let's say you built a function to populate an editable.

And every time somebody's like requesting from that function, it's going to go to a particular region because you deploy this function of the particular regions, but. Imagine if like somebody, if you deploy to region, let's say you're running an e-commerce and you say, okay, cool. Most majority of my users are in the us.

So I deploy to the us north America. But you have a user in Australia who's causing just message him about this site that he can check out. Now he's making requests all the way from Australia to the us to get your Your service working, right? He might not notice this, but he's paying over the cost overhead.

Now, imagine if it was possible to deploy these functions and have them run everywhere at the same time. [00:05:00] That's where CloudFlare workers strives. So I'm just going to quote Laura reverse by saying, so he said CloudFlare workers has changed the way we build our applications. We don't need to think about regions.

We just deploy code and works similarly around the world. And I explain why. So CloudFlare has what we call the edge network. So what this essentially means is that it's the same net. It's the same. It runs on the same BH engine as like the browsers. But what it does is that every time you fire off your, you created software.

It doesn't just run. The particular region. Instances of that function is run around process edge network, which is like a series of is in different regions and all of that's like your function exists in all of these regions. So therefore, when somebody makes a request, it just goes directly to the, directly, to the closest one to them and gets that request.

So you don't have to deploy to particular region and people don't have to pay that over cost. So this is an example of a CloudFlare function. The difference between using the cloud. Worker versus other servers providers, [00:06:00] the other less servers providers use containerized processes. So each time an instance of a language run time is run workers pay the overhead of JavaScript, run time once at the start of the edge container.

What this essentially means is that. I know, you're wondering, oh if this, if the functions are in every node, then every time a function is called, I have to start calling them separately. And that's a lot of overhead costs, but no, the process overhead is run once and your code is made available to everybody.

And I know that you might be wondering, what does this even mean? What is the point of all of this and what I'm here to tell you is that you two can become Ironman. Essentially you two can feel, you can feel more confident in the code that you deploy by choosing surveillance. It's it doesn't necessarily take away the backend that there's no need for a backend service anymore, but it offers you the ability to sleep at night.

Knowing that even though your, even if your platform is going to get a lot of requests, you're still going to be able to skill a lot of[00:07:00] a lot of advantages. That's. That's CloudFlare workers and serverless ASCO offers you. And I'm sure you hear more about it in this talk. Thank you so much for hanging out with me and made with you.
