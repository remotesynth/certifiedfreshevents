---
_build:
  list: false
  render: never
---

**Ben Holmes:** [00:00:00] Hey there jam I'm Ben Holmes. And this talk is about how everything is a short. So if you don't know me, I'm be homes dev on Twitter. I use whatever web framework looks the shiniest, and I'm maintaining a project called slinky, which you can follow over here. What we're going to explore today is what shorts are, how they compare to our mental model of components like react, viewers felt and using them everywhere.

There were some practical examples, like image optimization and islands architecture. So before we get into that, I wanna go over some definitions. So first off, what is a short code? It's a function that takes in a set of props and returns, a string of HTML, like taking in the source and alt of an image and returning a stringed picture element that is optimized for your website.

And these short codes are called at build time. So during the pre rendering step, and they're often found in temple Stein site [00:01:00] generators, like JCO from the olden days and 11 and. So then we get into what is a component then? How does it differ? It's still a function that takes a set of props, but instead of returning a string of HTML build time, it's returning some framework specific code that could be run during server rendering or on the client.

And this is where they differ mostly. In that a component can ship some JavaScript alongside that markup to enable some state management like bringing in a counter or show and hide interactions on dynamic sites or web apps, like next GS felt kit and more. So they're enabling the future of what jams stack can do.

But in this narrative of components, I would argue that a key benefit of short codes has been lost. And that's this one, which is that they return a generic string of HTML at build time. And this means that short codes could solve universal problems, that components aren't solving across the board, like an image component, for example if I [00:02:00] wanna optimize images and put a picture element on my page if I'm using components, I have to have a react image component, a view image component, a SELT image component, different frameworks of the same thing.

But the beauty of a short code is that it's just a string of HTML. So if we invented say an image short code, but we could solve image optimization across all of those frameworks, as long as they can set inner HTM. Then we're good to go. So this talk is gonna be about how we can empower short codes to enable your dream codes.

Let's jump into some code. I have a simple example, pulled up here, built using 11. If you haven't heard of it before, it's a static site generator. That's similar to JCO or Hugo in that it just takes instead of templates and output, some clean HTML and CSS, no JavaScript bundling required. And we're going to add on slink.

To add some superpowers to our markup down the road. So I have an example pulled up here that was generated using the NPM and knit slink command. So I encourage you to try that out, [00:03:00] to get a similar output on your system and it'll generate three routes on our site. The first one is this index file.

That's just some markdown rendering. The text that you see here, the second is a JSX file. And this is something that slinky unlocks for you where you can use react as a ING language to output some similarly static, HDML and CSS over on the slash react route here. and the last piece is a deployment guide.

If you wanna put this on Netlify or your service of choice down the road. So this is a simple side with a lot of text. I wanna spice it up with some images, and the image I've chosen is this rainbow slinky that I think could spice up the banner of my homepage. So I don't wanna insert that image as is though it's a pretty large image.

And I probably want a smaller width for mobile users and maybe a WebP version. So that's more optimized and to optimize it, I'm going to use utility called the 11 image plugin. This is something that 11 gives you out of the box to take [00:04:00] in a source image like our rainbow slinky and turn it into a set of images with different wits and formats so we can serve the right version depending on your device.

So I'm gonna configure that. As a short code as they recommend you do. And it's a simple definition it's called image. And if you remember our definition of a short code from earlier, it's just a function that takes in a set of properties, the source, the alt, and a set of sizes and widths for different devices.

and it'll pass those properties to the 11 image plugin. And this will go on our file system and generate a few different images of those different sizes at build time. And that's the beautiful thing about S since they're guaranteed to run at build time, we can do things like file system calls. And then with the output of that, we get this little metadata object of all the images, 11.

He. We can pass those to another utility that takes in those images and spits out a beautifully formatted picture element that we can insert as a string of [00:05:00] HTML into our document to load the right images depending on the browser that you're using. So with all of that explained, let's go ahead and see this guy in action.

I'm gonna head over to my index from earlier. And I'm going to call on this short code function using nun, jug syntax. This is something that 11 helps you with where you can use nun Jux inside of your markdown. And we're gonna call on the image plugin. We're going to pass it the source and alt, and we're gonna use these little curly braces to turn that string of HTML into a little nun, jus template to put onto our page.

So if we head back over to our browser, We can see that beautiful slinky appearing on our page and inspecting the element. We see it's reaching for a number of images of different sizes and formats in a nicely formatted picture element for a browser to choose the right one. And each of these files was generated at build time using the plugin, and we can see all of those sizes.

In JPEG and [00:06:00] WebP glory. So that's awesome. We figured out image optimization from a short code. Now let's try transporting the short code to all of our templates because reremember a stirring of HTML, which should be supported by any ING language that you can imagine. So here I'm gonna run that same short code inside of a JSX template.

This is something that slinky helps you with. Where we pass the short codes to your page as a prop, and you can call on those short code functions like and this will generate an image component. This is going to take in the string of HTML that the image generated and turn it into some JSX that we can add to our page the same way we were using those percent signs to convert to a non jugs template earlier, and to pass in the properties.

As you might imagine, they're just component properties where I can say image and then the source and the alt text and insert it as another. head back over to react page templates, and we can see that same beautiful slinky being rendered onto our [00:07:00] page. So if you're wondering, how the heck did you turn a string of HDL into a react component?

That's something that Slinky's plug-in ecosystem is helping us with here, where we allow you. To configure any component framework that you wanna support in your project. One that we give you out of the box is reactive course, where it'll teach how we can render react to a template and how to hydrate it on the client, which will demo in a bit.

But it also has a utility to turn a string of HTML into a component. So here we have component from HTML, which is referencing this static HTML file here, which takes in the string of HTML that our short code gave us. And it wraps. With a react element here we're using reacts, create element, creating a slinky fragment.

This could easily be like a div as well. And then setting the inner HTML to that string that our short code gave us. So I call this the component sandwich where we have the bread on the outside, which is our JSX wrapper. And then the meat on the [00:08:00] inside, which is that inner HTML. And we can see that output in our browsers.

You might expect, we see the slinky fragment right here. With our picture sandwiched inside. So this is what I see the future of short codes being, where it's a way to do something at build time, generate some beautiful markup that we can add to our page without shipping JavaScript. And then we can transport that to our favorite template language.

So instead of creating like the react image component, we can create the image short code for everyone to. So I hope that excites you. And I wanna leave you with where I could see short codes going in the future because they don't just have to generate markup. Do they? They could also generate script tags or style tags or anything that a document could render.

so here we've created a partial hydration, short code. This is called react and it takes in the path to a component on our file system. Like this slinky dot JSX here, [00:09:00] and it takes that component and server renders it to some output on our page, head back, over to home, and we can see our server rendered.

And if we wanna make it interactive, we can opt in to adding a little script tag to the bottom of that string of HTML. And this is going to hydrate our component. This is a approach called islands architecture. If you've used a tool called Astro before very similar approach, but now we're doing it from a short code.

So we can generate this beautifully hydrated component from any ING language that we want. We're using the percent signs here for nun Jux, but you could imagine short codes in a view template, a SELT template to react template, to combine any component. With any other component framework, all with the power of partial hydration.

So if that future excites you, I definitely recommend checking out the slinky.dev project. We have a lot of features coming down the pipe, of course, and we would love to have you as a contributor and as a user. And [00:10:00] if you want to get weekly updates, as we build everything out and approach a beta version, you can check out our Twitter where I'll be posting weekly videos with my whiteboard to explain what we have going on.

So I hope you enjoyed the talk and enjoy the rest of your time at the jam.
