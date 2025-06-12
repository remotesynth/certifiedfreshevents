---
_build:
  list: false
  render: never
---

**Harshil Agrawal:** [00:00:00] Hey, you all. Thank you for joining in for my talk making Serverless Apps Stateful. Now, I know this might sound a bit. We are all interesting of how you can make serverless apps stateful. Well, the answer is already on the slides with durable objects. Now don't worry if you have no idea what are durable objects are why you would really want to make your serverless apps stateful.

In this talk, I am gonna cover everything you are at more serverless conference. Which means that you might already know what serverless is, so I'm gonna skip that part. But if you are really interested in learning what is serverless, I'm [00:01:00] pretty sure, uh, my cos speakers would have, uh, covered it. So I'm gonna talk about how serverless works.

Let's take a, a look at an example to understand this better. Let's say you have built an amazing application and deployed it on a serverless platform. Your user is trying to access this application and they make a request to your application. Now, the serverless platform will dynamically allocate the necessary compute resources to execute this code.

Now, this happens on demand, which means that the resources are only used when your code is actually running. Okay. Once that code executes, the response is sent back to your user, and the underlying infrastructure may be allocate those, uh, specific resources. This is good because your servers are not running all the time helping you save cost, but [00:02:00] there is a problem.

The problem over here is how would state management look like in a serverless environment? Let's take, uh, the same example but refine it. A use case for your e-commerce application. So the app that you built earlier was actually an e-commerce application, and you have an add to card functionality. The user clicks on the add to card button.

This on the server, uh, the add to cart button gets executed. Now again, remember, because you are running it in a serverless, uh, platform. It's gonna allocate the resources required to run this function. Once the function execution is finished, it give the response to the user and may de deallocate the resources.

But that is now a problem. Let's have more of a visual view for this to better understand the problem. So over here I [00:03:00] have an example, uh, similar to what I showed earlier. Let's just say this is a a e-commerce application, which has a stateless card. Now, in this I can add to my card, remove from the card, and also reset my card.

So if I click on add to cart, it adds an item to my card, and we can see the value increased to one. But if I try to add it again, we see that no value gets incremented in here. Now why is that? If we take a close look at a code. We are defining a state or variable within our fetch function, which means that every time a request is made, every time this fetch function is gonna be called, it is always going to set this value to zero, which makes this a stateless uh, cart.

So when a user is adding an item to the cart. They still get the [00:04:00] response of, uh, one item added to the cart. However, on our servers, we don't really have that information stored anywhere. And this becomes really, uh, crucial when the same user is making multiple requests from for the cart. As we saw earlier, we could not increment the value of, because again, every time the request was made, the value was set to zero, and then the increment happened.

So. The problem over here is that we are persisting these, uh, value within the function. This becomes really difficult to handle when the user makes multiple requests. Now, there are traditional solutions for this. We have found solutions on how to deal with this. You can either stitch it up with an external database.

To store the values in that database, uh, update or increment that value in the database and send that incremented value back to the [00:05:00] user. You can also have session management where within user session you are, uh, updating that logic and then sending the response back to the user. I have also seen people using caching to achieve something like this while these traditional solutions work.

They come with, uh, a set of their own problems. One of them is latency. Now if you take the example of, uh, using an external database for this, it would add a network latency because now the request, uh, goes to a server. From the server. It would go to our database. The query would execute. The request would come back from our database to the server, and then from the server to a user.

This adds on network latency. Oftentimes, these are complex to implement and they come with a cost as well, but this is where durable [00:06:00] object science, durable objects, gives you compute and storage together, so you don't need to have an external database. Durable objects are provisioned geographically close to the user where they, uh, where they first made the request.

So if your user is making a request from Australia, the request is gonna be served from Australia. But not just that, because now, uh, durable objects come with a storage attached, the storage or the database operation is also gonna happen within that same environment, and the user is gonna get a better, uh, result.

And another amazing part about durable objects is that they are highly scalable. You can have millions of durable objects, so for each user you can have a durable object. Let's take a look at the example of a stateful cart with durable objects.

So [00:07:00] over here I have a stateful cart. Again, it has the same functionalities of adding a value. Removing a value and also resetting it. Now, if I click on add to cart, it increments the value, which we saw in the stateless, uh, card as well. But if I click on add to cart, again, it adds the value again, uh, to our card, which means that with new fetch requests, I still can update my card value and don't have to really worry about storing this in an external database.

If I show you the code over here. Durable objects, uh, are basically class. So over here I have defined a class, and in this class I have defined various methods. In here I have a counter and we set the counter initially to zero, but we also check if this is stored in the storage, which is available within durable object itself.

Again, we are not making, [00:08:00] uh, an API call to an external database. This is within a durable object. We get that value. Uh, if that value is present in durable object, we store, uh, we ascend counter to that value, and then we have the increment decrement and the reset function as well. Swear,

right. There are a lot of features that durable objects have. Now, unfortunately, I don't have enough time to go in depth, uh, for each of them, but let me cover a few durable objects come with in memory state, which means that applications can use this in memory state to optimize the performance of the application by keeping important information in memory.

Durable objects also come with storage. API. We saw an example for, uh, the kv, API, but you can also use SQL. Now again, each durable instance has its own, uh, storage. So no dur, no two [00:09:00] durable objects will, uh, share the same storage durable. All objects also come with alarms API, which allows you to get, use the durable object to be woken up at a time in the future.

You can also use, uh, durable objects to build web SOT servers and durable objects, uh, allow you to have RPCs, which basically allows you to build, uh, applications using JavaScript's native methods. Now there are tons and tons of use cases for durable, durable objects. Uh, in today's time, if you are building AI agents or MCP servers, you want them to have, uh, some kind of state, you want them to be stateful.

Right, so you can use durable objects to build that. I will highly, uh, recommend you to check out our agents SDK. If you are looking into building AI agents or MCP servers or any kind of AI application, you can use durable objects to build collaborative apps, [00:10:00] real time chat apps, or even for distributed systems.

Now, here are the list of resources that you can use to learn about durable objects. The cloud for documentation has everything that you need to know about durable objects. We have tons of videos on our YouTube channel as well. And if you are curious about what the community is building with durable objects, I would highly encourage you to join our Discord server.

Now, this, uh, 10 minute talk could not cover everything but. Uh, if you have any questions, feel free to reach out to me. I would be happy to talk, uh, to you about your use case of using durable objects or just about building apps on serverless platforms. Thank you and hope you enjoy the rest of the event.