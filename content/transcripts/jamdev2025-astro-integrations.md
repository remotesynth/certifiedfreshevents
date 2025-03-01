---
_build:
  list: false
  render: never
---

**Florian Lefebvre:** [00:00:00] In this talk, I want to talk about Astro and how you can customize your project with integrations. I'm Florian. I am a self taught full stack web developer. I'm working as a freelancer and more importantly for this talk, I'm a maintainer of Astro since December 2023 and a co maintainer since June 2024.

If you want to reach out for anything, you can find my links on my website here. So first, let's see what Astro is. So Astro is a web framework for content driven websites. And it has [00:01:00] lots of features included that will make it very easy to make content driven websites. Uh, first of all, Astro shifts zero JavaScript by default because like Astro components are HTML only templating components, so there is no client side runtime, it's just HTML.

And so you can write Astro, Astro files in, I mean, dot Astro, uh, files. Uh, so here you have an example of, uh, of a component. Um, there is the front matter. Which is between the fences. So this part runs in, uh, on the server or a bit, a bit, a bit of time, for example, uh, for static websites. And then below the matter, there is the actual content of, uh, like the template, and this is.

A superset [00:02:00] of HTML, it's using a JSX like syntax, and like, it's a special syntax, so you can also have scripts and styles in there. A second point is, as I said, that Astro is server first, that means that everything will be pre rendered at build time by default, and there is no client side runtime. But, for a given route, you can choose to opt out.

Of pre rendering by doing export cons pre render false, and then this will run at runtime. And for this you just need, uh, several adapters like Netlify, Node, Cloudflare, or Vercel. Already any adapter that we support. Uh, If you know Astro, or if you don't know, a major selling point of Astro is its island architecture where you render the [00:03:00] majority of the page to static HTML, and on top of it you can have some small islands of JavaScript with interactivity when you need it.

So you only ship the minimal CSS you need, I mean, the minimal JavaScript. You need and it will be hydrated depending on some conditions you define, but we'll see this in a few slides.

Another selling point is that Astro is UI agnostic. Sure, you have the astro file extension for server side rendering, but you can use any UI framework you want, like React, Vue, and so on. And you can even use, uh, like several UI frameworks at once. As you can see here, like, this is completely allowed. And once you have your framework, you can add [00:04:00] some client directives, which, uh, which tells the framework when and how to hydrate the components.

So for instance, you can say, okay, load it as soon as possible, which is client load or loaded when the. The page is like there is no, nothing happening with client idle or only when it's visible, this kind of stuff. And finally, Astro is customizable with a lot of integrations. And so here we are really starting the talk.

Um, so what is an integration? Well, an integration adds a lot of functionalities, or maybe not a lot, but at least new functionalities. Uh, to your project by hooking into Astro's life cycle. So, for example, you can unlock UI framework, like React and Vue, uh, with a renderer. This is what we saw, uh, just now, [00:05:00] like all those, uh, UI from, UI framework you import in a astro file.

This is all allowed by integrations. You can, an integration can. Uh, enable on demand rendering is, uh, an SSR adapter, like Netlify and Vercel as we saw, you can integrate tools like PartyTown, you can add new features, uh, like having a sitemap, or you can just write any custom code, um, specific to your, to your project.

Um, you may not know that, but we, we have many, many integrations with scan NPM packages to find them. And so we have a, an official catalog. I should have been such integrations where you can filter them. You can see how popular they are. It's really, really useful. So if you're looking for an integration, definitely check them out.

I think an integration is super easy. You can [00:06:00] just use the CLI, Astro add and specify the name of the integration. And then it's going to install dependencies. If you want to. You're going to create the necessary files, and yeah, everything is done for you, but if you don't want a given step, you can also skip it so we don't force it.

Like, this is purely optional, if you want you can also set up an integration by hand, but this is really convenient.

Uh, and it's important to, to tell that integration are really first class citizens in Astro, like all integrations, including third party ones. This is part of our strategy because we want to keep the framework lightweight. So by exposing this API. We allow anyone to be able to iterate any tool or any feature, but without having it in [00:07:00] code.

So we really encourage the community to write integrations for what they need. So let's see, um, a few examples. So as we saw with React, uh, you can use React using integration. You just have to run AstroAddReact. And then you can just start writing React components in TSX and importing them in Astrophytes.

Um, there is the sitemap, which is an official integration. And so once you add it, it will scan your static pages and will generate XML files. In the right, uh, direct, uh, in the right, uh, location for SEO. There is the Netlify adapter, which is also official. So it allows you to deploy on demand rendered routes, uh, to Netlify and access some Netlify specific APIs like, uh, [00:08:00] EdgeContext.

Uh, a really interesting integration is the Starlight. Uh, integration, which is, uh, as well, uh, official, basically it's a whole, uh, Docs framework built on top of Astro. So it's really interesting because it injects routes, it injects CSS, custom, uh, custom bits and real plugins, integrations, because yes, an integration can inject all the integrations.

Like it's super, uh, interesting if you are looking for. Uh, like to build, uh, integration, definitely check, uh, Starlight's source code. And then here, this is, this is a, um, a community integration, which is custom writing from Enoch Stores, which allow you to have, uh, a code based routing system instead of file based.

And like, on top of it, you can build, uh, sorry, you can build abstractions, like having a routes. ts file. And then, yeah, like. [00:09:00] Like React, Router, V7. So yeah, let's, let's build an integration. Because I think that would be really interesting to see. Like, it's not so hard actually. So, an integration actually is, uh, an object with a name.

That doesn't need to be unique. And some hooks. And by convention, we return a function so we can pass options to it. And so these hooks have callbacks and data, uh, at various moments during Astro's lifecycle. So for this example, what we'll build is the following. When you're using Netlify, deploy previews, uh, indexing, indexing, sorry, is prevented by default, which is what we want, but if you use branch deploys, it's not the case because, uh, it's not the case, but sometimes you want to temporarily share a branch deploy without.

Wanting to, to index it. So we, for the no production build, we'll build, uh, an integration that [00:10:00] prevents indexing using a robot. txt. So first we want to export a function. By convention, it's a default function for npm publishing. This has the actual integration type, which I give a type hint, uh, with a name, smuhooks, as we saw.

And we'll start with the astro build done hook, which, uh, like runs after the static assets have been generated and we'll use the dir argument to get the, the URL to the client's, uh, dist. And so here we can just use a node API to write a file to this directory. So right now this is written all the time, but we want to rate it only if we are in production and identify to know if we are in production.

We need to reach for the context environment variable, and this should be, uh, production. So to get the environment variables, we're going to use [00:11:00] another hook, which is asho. config. done, which is when the config is resolved, and we'll use a Vite API to load it. So it's going to load it from process. env, env files, etc.

And V requires a dis, I mean, load end needs something which is mode, and we can get the mode through the astro confi setup, uh, hook. And so really this is only what you need to build an integration. Like it's really short and it can be useful for your project. So the goal is really to show you that you can build an internal integration.

You don't have to publish it to like make your life just easier. So if you want to make an integration, uh, here have few resources. If you want to publish one, you can check the Azure integration template that I maintain. Uh, if you are not familiar with the integration API but want some helpers, you can use the Azure integration kit that I also maintain.[00:12:00]

Uh, if you want to help, if you want help, you can go on our Discord server and look for the integration channel. And otherwise you can check out the source code of the, of existing integrations. That's really useful. So yeah, that's it. Uh, thanks for watching. That was my first talk. So I was, uh, I hope it was interesting and, uh, enjoy the rest of the, of the conference.
