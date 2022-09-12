---
_build:
  list: false
  render: never
---

**Ifeoma Imoh:** [00:00:00] Everyone. My name is Ifoma Imoh. I'm a freelance front end developer and tech content creator. I also have a YouTube channel where I make videos. On the fundamentals of JavaScript. So you can check that out. If you are interested. Now, today, I'm going to be talking about concurrent rendering area 18, and then I'm going to talk about one concurrent feature introduced in react 18, the start transition API.

Now, as we know, react, react 18 was released in November last year. Improvements to already exist existing features and some new and exciting features that enable concurrency in just the parts of your application, where you use these features. So the start transition API is one of the concurrent features, and we're going to see how concurrency is enabled in our application when we use this feature.

But first, what is concurrency? So [00:01:00] concurrency refers to having more than one task in progress at once or multiple computations happening simultaneously. And it doesn't necessarily mean, for example, if there are two tasks, it doesn't necessarily mean that it started at the same time, but concurrent tasks can overlap now since JavaScript is synchronous and single threaded, it can only do it.

Can only do one thing at a time. So it, it executes on a single thread and a current task running prevents the next one from. So react is synchronous and synchronous react can only do one thing at time. At a time. It can synchronous react can only handle one thing at a time. It processes updates, synchronously, and an update cannot be interrupted once it has started.

So if react is rendering and update and a user clicks, a button that click event will not be handled until react is done with what it's doing. And this isn't a good experience for the user. That click event will not be handled immediately because rendering [00:02:00] cannot be interrupted once it has started. So subsequent events are blocked until that rendering is complete.

And this approach is referred to as blocking rendering now to fix this problem, concurrent mode was introduced in react 16 and. That introduced interruptable rendering. So with concurrent mode, react can prioritize updates. We can tell react which update to treat as less priority. And this basically means that an ongoing update with a less priority can be interrupted by an update with a high priority.

So this rendering behavior was introduced in react 16. and upgrading your app to react 16 would automatically turn on concurrent mode for your entire application. Now in favor of a gradual adoption plan that allows you opt into concurrency at your own pace. Concurrent mode is now being replaced in react 18.

With concurrent features. So react 18, [00:03:00] introduced some concurrent features that automatically enables concurrent rendering, just in the parts of your application where you use them, not in the entire application, concurrent rendering react 18 is only enabled when you use these concurrent features in those, in just the specific parts of your application.

Now these features are called concurrent features and the one I'm most excited about that we're going to be looking at today. Like I said earlier, Is a start transition E P. Now if a page has updates that take time and can block user interactions, making the page feel unresponsive. Now these updates that take time can be due to slow network or slow rendering.

The start transition API is an amazing solution for that. Now start transition helps you keep your UI responsive by allowing you mark specific updates as transitions. Updates marked as transitions are called transition updates. They're not considered urgent. Now previously, all updates in react [00:04:00] were considered or no.

In fact, all updates in react are still considered urgent, but in react 18, we can declare some state updates as non-urgent, then reacts can switch between multiple updates according to priority team. Now an update that is considered a high priority can interrupt one with a low priority. Even if that updates with a, even if the update with a low priority has already started.

So now updates in react 18 can be grouped into two. We have urgent updates and these are updates that show direct user interactions like scrolling, typing, clicking, and so on. So for example, if you have an, if you're typing in an imput field and you don't get immediate feedback, That is the UI doesn't update as you type it doesn't exactly feel right.

Right. so typing is an example of an urgent update. And then we have transition updates that have to do with changing UI views and reacts [00:05:00] doesn't treat transition updates as urgent. So transition updates are not urgent update. Now, like I said earlier, react still treats all updates. Even in react. 18 react still treats all updates as urgent, but now to keep your page responsive or your app responsive, you can mark slow updates that may take some time as transitions by wrapping them in start transition so that they can be suspended or interrupted.

If an urgent object comes. Let's say we have a search imput field for filtering data. There are two important updates that needs to happen. The first is the value of the imput field. And we know that is an urgent update. The second is showing the search result, which isn't. And urgent update. Now we know that react still treats all updates as urgent, which means that if a user types, something and react starts rendering to search results.

If the user types in a few more characters, the user won't get [00:06:00] feedback for that interaction right now until. Until react is done with what it is currently rendering. The user won't get feedback for that interaction. And what if this takes some time, it means that on slower devices, it may even take more time.

So the user is left with a page that is not responsive or lagging, which isn't very good. Now there are common ways to walk around this like de bouncing or travelling, but in react 18. We have the new start transition API. Now with the start transition API, we can tell react, which update shouldn't be a priority by wrapping that update in start transition.

And when we do this react, just know to deprioritize that update. If an urgent update comes in while it's still render. What does react do when it's in the middle of rendering, a transition update and an urgent update comes in now, react will see that an urgent update was scheduled in our case that will be typing.

[00:07:00] It'll stop working on that transition update in our case, that will be rendering the search result. It'll stop working on that and start rendering the typing update and then go back to rendering the search results when it's done now, because our user has typed in a few new characters. React cannot continue rendering the old results from where we stopped, because the user is no longer interested in that old content.

So react to skip that old work that wasn't finished and start rendering the latest update from the beginning, it'll start rendering the search results from the beginning. This way, the user gets feedback while typing the page always feels responsive and react. Doesn't waste time rendering contents that the user isn't interested in anymore.

This is amazing and it's only possible. In react 18. Now another really cool thing is react. Also lets you provide visual feedback during the state transition. If for example, the search result is taking some time to get back and this can be done using the used transition hook. Now this [00:08:00] hook returns is.

A start transition function, that we can use to wrap our transition updates as well as an is spending flag. Now, whenever an update wrapped in your transition is rendering. The value of is spending will be set to true. So you can reuse this flag. You can use this flag to reflect that something is happening in the background or that, the search result in our kids.

It's taking some time or that it's, isn't ready. You can use this flag to reflect that by maybe deeming the result or showing a Spinna while the user waits for the results, which is really. Cool. Now, like I said earlier, the concurrent features in react 18 are opt in. So all you need to do is upgrade to react 18, to start using the concurrent features in your application.

Thank you so much for listening. My time is up and I hope you have fun. Exploring the concurrent features in react 18. Bye.
