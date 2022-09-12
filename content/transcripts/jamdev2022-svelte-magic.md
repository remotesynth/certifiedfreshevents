---
_build:
  list: false
  render: never
---

**Brittney Postma:** [00:00:00] This is that Svelte magic and why you should try it. And I'm Brittany Postma from coding, cat.dev, figuring out which framework to learn and how to get started is one of the hardest things to figure out as a beginner. Some will suggest you jump into a modern framework as soon as possible while others suggest getting a complete grasp of the fundamentals of JavaScript before moving on the first way, risk not understanding what is the framework and what is pure JavaScript.

However, learning all of the fundamentals can add a necessary complexity that modern frameworks will extract for you. So what if I told you there was a way to do both learn the JavaScript fundamentals while using a modern framework. The job of a framework is to make it easier for us developers to write our applications in the fastest way possible.

It all comes down to having a great developer experience. Every single one of them does [00:01:00] this with some sort of magic that hides away the harder parts of web development simplifies, the amount of code we write and the way we build our applic. Svelte is a powerful framework for beginner or advanced developers, synonyms for the words Svelte are graceful and lean.

And that's exactly what this Svelte framework is. It even won the most loved web framework with the most satisfied developers in the stack overflow in state of JavaScript surveys in 2020. So let's take a look at what Svelte provide. Svelte is a component framework that allows you to break up your application into reusable chunks and provide some sugary syntax, making your code base more fun, to write and much easier to understand.

Svelte has one of the best tutorials on the web and you don't even need a local environment set up to start using it. Svelte provides a re to get started using Svelte immediately. There are three parts to a dot Svelte file, very reminiscent of a regular HTML file. We have the script tag for your [00:02:00] JavaScript, the style tag for your scope CSS and the markup, which will look similar to HTML, but is actually a super set of HTML providing some amazing.

With its lack of boiler plate code and easy to learn syntax, it feels as close as possible to writing vanilla, HTML, CSS, and JavaScript without the pain of actually trying to write dynamic applications in it, even without knowing any Svelte specific syntax, you can write a DOT's Svelte file with basic HTML, CSS, and JavaScript, but let's take a look at a more complex component.

So in this component, we're only showing the count. If it is greater than zero. in the script tag, we have declared a variable called count set to zero in the style tag. There is CSS applied that is scoped. So it only affects the elements that are in this component. And then we have the markup. This is where PTs power really shines.

In the HTML button element, you can see an on colon click where we have some magic happening. [00:03:00] This is how Svelte handles events. It intercepts the Dom click event and fires the inline function to increase the value of count and update it anywhere. It is used, making it truly reactive. We can dynamically show or hide the count using an if block the count will only be shown if it is greater than zero.

this makes it the most beginner friendly framework for new developers and incredibly easy to grasp for those transitioning from other frameworks. Now let's take a look at how to pass props in Svelte, instead of just declaring the variable in the count component, we're going to export it. This follows the same principle as modules, where we export what we want to access outside of the component and then import it into other components.

We can then pass the count as a prop in app dots felt file to be something different than zero. This is a pretty basic example here, but hopefully you can see Svelte takes basic syntax and gives it superpowers to create those truly [00:04:00] reactive experiences. Svelte is similar to react and view with one key difference.

There is no virtual Dom instead of shipping the framework to the browser and letting it do the work for you. Svelte compiles itself away during a build step into the vanilla HTML, CSS, and JavaScript making it one of the leanest frameworks out there. So then what is all this noise we keep hearing about Svelte kit.

Why did rich Harris, the founder of Svelte decide to move all new development from Saper to Svelte kit before it could be quite confusing for users new to Svelte to decide which path they should take when starting a new project Saper or Svelte. so the goal with SPEL kit is to have a single recommended path for building everything from high performing web apps to static blog pages.

It's the fastest way to build Svelte applications. with Svelte kit, we get file system based routing in the routes directory CSS scoping by default code [00:05:00] splitting to break up your app into small digestible chunks that make the startup times blazing, fast, optional rendering with server side static or hybrid, the ability to completely disable JavaScript.

Plus loads more. This makes it incredibly easy to build small apps or extensive complex projects at. Rich has now joined the amazing team at Versace to work on SPEL and spell kit full time. That means we can expect faster updates and more amazing features in the Svelte ecosystem. The community around Svelte is one of the fastest growing and most supportive communities.

I've been fortunate enough to be a part of the discord server is the place to be, to see upcoming events, get the latest. Answer your questions, or just hang out at the last Svelte summit. My co-founders and I announced a new group for women and non-binary people in the Svelte community. This Svelte sirens in conjunction with this Svelte society.

We're adding more content than ever to this Svelte society, YouTube channel [00:06:00] we're providing more talks and bringing on guests for live streams to show how to integrate Svelte with databases, content management systems authentication and more. You know, you want a little magic in your life with all the exciting things happening.

I think this is definitely the year of S spell and I hope you will join us in this amazing journey. Thank you.
