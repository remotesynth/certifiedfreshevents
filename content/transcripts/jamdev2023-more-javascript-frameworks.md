---
_build:
  list: false
  render: never
---

**Salma Alam Naylor:** [00:00:00] Hello and welcome to the most controversial talk at thejam.dev 2023. In June last year, I yolo deployed a blog post. I was feeling frustrated and I was overwhelmed. At the state of the JavaScript ecosystem, there was simply too much choice. And it's a meme, right? One JavaScript framework gets released every minute.

Now, this blog post links to a stupid website I built https://should-i-write-a-new-javascript-framework.lol? And at the time the answer was no. I did not recommend it. But this blog post and this website, the reactions to it and the conversations I had along the. Started me on a journey resulting in an update to that website where I said that, okay, maybe you should write a new JavaScript framework.

And I wrote about it in depth on my blog, and I'm gonna tell you the story here because yes, [00:01:00] we actually do need more JavaScript frameworks. You can quote me on that. My name is Selma Ala and I write code for your entertainment. And I am going to take you on a journey and show you why I changed my mind.

Now a common question I get asked in my Twitch streams, in Discord servers, I see it all over the internet. I'm starting a new project. What JavaScript framework should I use? And so to help answer this question, I built another website. What the framework, and it was intended to be a tool to help people choose.

Now the answer of course is always, it depends, but I wanted to encourage developers to drill into those dependencies and make a decision about a framework to use based on the type of site they wanted to build. No hype, no bias, and I tried to achieve this by asking just two questions. Silly. [00:02:00] I know it's far more complicated than that, but let's take a look.

Question one, what type of website are you building now, without biasing the answer with too much technical terminology, this tries to determine if you are building a static site, which is a website that's packaged up and served as static HTML files and. From a content delivery network, these sites are good for content-based sites that don't change often, or are you building a site that needs to be server side rendered where each HTML page is built freshly on the server at request time?

These are good for dynamic sites where each page needs to provide a custom experience for each user. Or are you building a combination of the two, some static pages, some dynamic pages, and are refer to this mode as hybrid mode. Question two was originally, do you want to maintain state across multiple pages, but you can [00:03:00] achieve that in more than one way.

So it was a bit of a weird question. So I gave more technical transparency in this question, and I asked, do you want to build a single page application in JavaScript? A single page application or spa is a JavaScript application that builds HTML for different pages locally in the browser. It needs client-side JavaScripts to run.

Alternatively you can build a multi-page application or an M P A where every route has its own HTML file that's delivered from the server and doesn't rely on client side JavaScript to load initial content. Now here we have a list of frameworks. We've chosen a dynamic site that's a single page application.

Now, these are all filtered based on the features available in the frameworks. Simple right is actually not that simple. There are only 23 JavaScript frameworks listed on what the framework, the criteria to include [00:04:00] these frameworks in the list that the code is actively. And the project has published a stable version one release.

But say my project needs to serve both static content and server ended pages, so hybrid mode, and I want to build a multi-page application. Here we have five options, Eleventy, Redwood.js, Next.js, Nuxt, and Gatsby. Plenty of options, right? Not really. When we look at what the frameworks. Next, JS or Gatsby aren't entirely appropriate from our use case because they are spars by default.

They use. Now there are ways to generate static sites with nex js or Gatsby to turn the site into a multi-page application, but you'd need to do a few workarounds and also static builds. Using these frameworks actually can't make use of server side rendering functionality, at least at the time I wrote this talk, [00:05:00] so it's a no-go for my requirements.

Eleventy is a good option. But the server side rendering on the edge functionality is currently experimental and it only works on Netlify, and I don't like vendor lock-in. So we're left with two options, NEDT or Redwood js. Now, Ned three specifically provides a hybrid combination of static and server side rendered pages as a multi-page application, but I don't know view right now, and I'm not sure I want to learn a new framework, in a new project. 

Redwood JS is a full stack framework, which could be a great option in theory, but it comes with loads of overheads and integrations that I'm not sure I need just yet. Given what the web is capable of in 2023, there are simply not enough options. I've presented only one problem here, my hybrid mpa, but there are many more nuance.

Zach Leatherman, the creator of Eleventy, points [00:06:00] out that there are also many ways to define server side rendering. So how do I decide which framework to use if I don't know which type of server side rendering I need, or if I even need server side rendering at all? And as the web continues to evolve, the choices we have to optimize for performance are.

Ben Holmes core maintainer of Astro ran some experiments using caching and server-side rendering, and he discovered that server-side rendering can still match your static site speed. This means you can do less pre-building of static pages and do more server side rendering and still have a fast sight. So service can give me better performance.

There are different types of service side rendering. I don't know what I need, but should we even be considering static sites anymore? There are certainly real world problems that could be solved with new frameworks and we're developers we build to solve problems, right? [00:07:00] As Ryan Carniato, creator of Solid JS says, we need new frameworks.

We need innovation. Ryan is committed to bringing framework authors together to work on building a better web ecosystem together, avoiding the framework wars and building a better web. But I talked to him in depth about all of these issues when I released that blog post and stupid website. So I recently researched into the history of the tech that powers Twitter, and it's an interesting story.

To summarize, in 2010, Twitter began implementing a new architecture almost entirely in JavaScript. One of the primary goals was to make page navigation easier and faster by providing a rich web application that behaves like a traditional website. That sounds like a single page application to me. In 20 10, 3 years before React was released in 2012.

Twitter announced that to take back [00:08:00] control of their front end performance, they decided to move much of the rendering from the client back to the server. And in 2013, just nine days after React was released, Twitter released a JavaScript framework fight, which they were using in production. It was an interesting alternative to react given it didn't lock you into templating languages, and it allowed you to render HTML on both the client and the server.

This was in 2013, 10 years ago. In 2017, Twitter released Twitter lite. Aimed at improving the mobile Twitter experience by minimizing data usage, loading quicker on slow connections, and taking up less than one megabyte of device space. You can still install that now. It's a progressive web app aiming to replicate the native app-like experience of a single page application.

The story goes on. You can read more about it in depth on my blog, but the bottom line [00:09:00] is the tech that powers Twitter and so many projects and products go on a journey much like I did last year. Let's render everything on the server web 1.0. Now let's do everything in JavaScript in the browser. Long live the single page application.

Actually, let's move everything back to the server because it's quicker. It's fine, it's good. We've got the power. Now, this isn't a bad thing, it's the evolution of the web and technology, but we can take two things away from it. And the first is that tech is always cyclical. Server side rendering is quite a new thing for front end embedded into JavaScript frameworks, but this is how Web 1.0 works and how a lot of the web still works.

And number two, Twitter adapted and evolved tech in response to how people were using the platform. Most notably, by prioritizing mobile adoption in 2017, the technical choices you make, [00:10:00] such as your JavaScript framework. Don't just depend on the features your product will need. These choices are also massively influenced by how people will use your product.

I will encourage you to ask meaningful questions. When you're choosing your tech, who is your audience? How fast is their internet connection? What devices do they use? Do they use more than one device frequently? How do they actually use the product? And because of all this and more what the framework is a pretty much entirely useless tool.

There's just no one answer as always, it depends. So if you are building something, if you can't make it work with existing tech and there's a problem you want to solve, build that new JavaScript framework because there is no perfect solution and there probably never will be, and it'll change and evolve even more.

And because we'll never solve every problem, for every use case for [00:11:00] every product, we actually do need more JavaScript frameworks.

