---
_build:
  list: false
  render: never
---

**Amy Dutton:** [00:00:00] React server components were announced. The promise was. Bold. We have faster performance and better SEO. So for anyone building content driven sites that, um, like exactly what we've been waiting for. But here's the question. If RSC really delivers on that promise, why hasn't everyone adopted it yet? And that's what I wanna dig into today.

So we'll cut through both the hype and the skepticism and look at what RSE actually means for content developers, not just in theory, but in practice Now. My goal isn't to give you another next GS demo or show you a shiny new feature. My goal is to share what's really working and what's still hard and why.

Despite the slow adoption curve, once you actually get to use [00:01:00] React server components, it feels like this is the way. So let's start with the promises we were given and how they play out in reality. So when React server components first landed, the pitch was exciting. We were told basically three big things.

So first that our pages would load faster. We have less JavaScripts into the browser, smaller bundles. Snappier user experience. And second, the SEO would improve. So with HTML being rendered on the server, search engines would have more reliable content to index. And third, that the developer experience would actually get simpler.

Instead of juggling client side fetches and APIs and hydration, we just write react components and let the framework take care of the rest. And none of that's wrong. These benefits are real. But in production, here's what developers are actually finding. Yes, performance and SEO can improve, but to see the full.

Benefits you have to take caching into account. Without a solid [00:02:00] caching strategy. At the component level, at the server level, or even the CDN Edge, the performance story isn't nearly as strong. The truth is the clear gains show up in greenfield projects. When you start fresh, you can design your data flow and components to take advantage of RSE from day one.

But when you're migrating a legacy app, adoption is much harder. That's one reason we're not seeing big tech companies rush in the cost of reworking years of code is just too high. And then there's the developer experience. It's not exactly plug and play. There is a learning curve, especially when you're figuring out what actually runs on the server versus the client.

So. For example, just because a file has used client at the top, it doesn't mean that it never touches a server. It actually renders on the server first and then it hydrates on the client for reactivity. Those kinds of small gotchas are confusing at first, and. On top of that, you're dealing with new concepts like streaming and [00:03:00] bundling boundaries, which can feel foreign if you're used to traditional react.

But once you push through that initial friction, the payoff is huge. The workflow really does simplify and react becomes the place where you handle both your UI and your data without having to wire up fetch calls and custom APIs everywhere. So the pitch was faster, better, simpler. The reality is it's all true, but only if the conditions are right, and that's why adoption looks slower than the hype would suggest.

Which brings us to the deeper question. If the benefits of RSC are real, why isn't every framework shipping it yet? The short answer is it's hard. Like really hard. It's one thing to use React as a developer. It's another thing entirely to implement react server components inside a framework. That's a different level of engineering.

To get RSC working frameworks don't just flip a switch. They have to juggle server side rendering for initial HTML hot module reloading so you [00:04:00] can actually develop streaming so components can flush in chunks. Bundling for both server and client with. Separate pipelines and all of those things have to stay in sync.

So on top of that, some of the most important pieces aren't even fully documented. Frameworks have to dig into React terminals and DM the reacting directly to figure out how RSC really works. Next J S'S implementation is another thing. It was built on top of Turbo, but most of their frameworks are utilizing V where the story is very similar.

You're reaching into undocumented features. Just to get the bundling right. That's not easy work. So when people ask, why does it feel like only a few frameworks support RSC right now? It's not because frameworks don't believe in it, it's because the engineering lift is massive. You need teens willing to take on months of low level, sometimes experimental work just to make it production ready.

There's, that's the uphill battle for framework authors, but for developers, for [00:05:00] us, once that groundwork is done and you actually get to use RSC, the experience is incredibly smooth. That's why, that's why we reach for frameworks. So after all that complexity, all those challenges, here's the good news, once you actually get to use React server components, you realize.

This is the way one of the biggest wins is that you don't need to create API endpoints for everything. You don't have to sprinkle fetch calls all over your code base. Instead, you just load data directly into your React component on the server and render it and. That's a massive simplification, and because your data fetching happens on the server, your security story gets simpler too.

You're not exposing API routes that need. Guarding the server is where your logic lives and the client just get what it gets, what it needs to render forms. Another great example normally and react. You're constantly wrestling with controlled versus uncontrolled inputs setting [00:06:00] state for on change and on blur and wiring up on submit handlers.

With RSC, you can lean on server actions. You fill out a form. Hit submit and the server handles the rest. No extra plumbing. It feels a lot closer to the way the web was designed to work, and that's what I love most about it. The developer experience just feels natural. React becomes the place where you manage both your UI and your data.

You're not context switching between API routes and data hooks and vegetables. It's all just components. No. Yes, RSC does deliver on the performance and the SEO promises. But here's the interesting part. Those aren't necessarily the benefits you feel when you are building. The biggest difference you notice as a developer is how much cleaner.

Simpler your workflow becomes, you write less code, you spend less time thinking about wiring, and you spend more time focusing on the actual product that you're building. So the hype around performance and SEO isn't wrong, [00:07:00] but the reason RSC feels so powerful and practice is because it changes how we work.

And that shift takes us out of the weeds of boilerplate and back into building real experiences for users. So here's the key takeaway. React server components. It isn't just an SEO play. It's not just about shaving off a few milliseconds of your performance score, either. What RSC really represents is a shift back to web fundamentals.

The server does the heavy lifting data security rendering. The client stays lean, just handling interaction and reactivity. That's how the Web Al was always meant to work. We're just finding a way to bring that model into modern react and for content developers, that's the real promise. Sites that are faster because we're sending less JavaScript to the browser.

Stable SEO, because your content is reliably there. Search engines are ready to crawl it, and maybe most importantly, a smoother path from [00:08:00] your idea to deployed page because your workflow has fewer moving parts and less boilerplate. So yes, RSC can make pages faster and ranking stronger, but it's real significance is that it changes how we build for the web by leaning into the web.

What it already does best. RSE isn't hype and it isn't magic. It's a tool. And like every tool, its impact depends on where you use it. So for Greenfield projects, the benefits are obvious. For legacy apps, the path might be longer, but once you experience it, you'll see it. This is the way.
