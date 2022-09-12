---
_build:
  list: false
  render: never
---

**Patricio Vargas:** [00:00:00] Hello, everyone. I'm super excited to be here. This is my first gems tech conference today. I have a very cool topic, which is anger and slowly, Z power. Couple. Who am I? I'm Patricia Vaga. I go by Patto. I'm a senior developer advocate at one. I'm also a Google developer expert on web technologies. I'm a Auth0 ambassador.

I'm a postman supernova. I'm a Twitter champion. I'm a hos community builder, Google woman tech maker, and a media developer expert at Cloudinary. Feel free to follow me on Twitter. My username is Def. So yeah let's get started, but before I get started, hold on, I'm just gonna take a quick pause. I wanna thank the organizers and I wanna thank my employer [00:01:00] for letting me allocate time to create a presentation for this stock.

So let's begin. We're gonna start with the basics. What is jump. Based on the definition that the jump stack org is giving us jumps stack is an architecture designed to make the web faster, more secure and easier to scale. The jumps stack architecture has some super powers. It pre renderers, everything. It leaves your application as a single page app, right?

It caches data calls during the pre render. It leverages the power of CDNs decreases the cost of the server calls and increases your security in your application.

So now let's talk about Scully. We finally have talk about what is the Jamstack. And [00:02:00] so we have an number architecture a number idea of what it does.

So why don't we take a look at the Angular application that we're going to convert into a gem stack app using angular and Scully. So this is it. This is my beautiful website. As you can see ISA doc's website I miss pop poppies right here. Boy, doesnt matter what it matters is how beautiful this pop is.

I wish I. And well, anyways, this super complicated, super enterprise level application, right? It has four pictures of dogs and each dog do one, do two, do three, do four, have their on page. So I'm gonna click on this one right here. And as you can see, it takes me to a different page. The route changes to dogs back slash do one.

Go back to the dogs. And same if I go to dog two. Beautiful. So why don't we [00:03:00] go ahead and get our hands dirty with the code and convert this application, this angle application into a jumps stack app using Scully. So the first thing that I have to do is installed. Install angular Scully. I already have Scully installed in this project.

And is the comment that I previously told you about, which is NG at Scully IO slash in it and what it does. It adds this file that I told you about before, which is the scholarly, the name of your project, which in this case I'm so creative. I name my project. Scully to dot config.ts as you can see, my routes are empty.

This project has this basic routing, and you can see that my package that Jason already has the scholarly MPM package already installed. So now my, my application is essentially done. So what I want to do is now build it using the NG build [00:04:00] pro command and then convert it into a Javas stack app.

So I do NG build dash product and wait for angular to do its.

Just take a few more seconds. Beautiful. Now I'm just gonna clear my console.

So now what we have to do is convert our angular application into a jump stack app using Scully and we do by running the following command and npx scully, check it out. Scully's gonna do the magic behind it. So awesome. It took one point 74 seconds to build right. And create my [00:05:00] static site.

As you can see, I only have one page. It should be five. Why should be five? Because I have my homepage which is the the road page. Then I should have four pages, one per H dog. So why that didn't work? Why? Because we had to tell Scully about this dynamic route. If I scroll up, I'm gonna see that it says no configuration for route dogs calling dog ID, right?

So we're gonna make use of a plugin first call, which is the adjacent plugin. I'm just gonna pay this code that I already have written up. And as you can see, I define the route, which is the same route that, that you see down here. I specify that the dog ID is gonna be pulling that information from the server, from this json array.

And we're gonna be making use of the property ID. So now I'm gonna rerun that command. I'm gonna clear my console and rerun it one more time. [00:06:00] Now I should have five pages. It took 2.2 seconds to build. And as you can see, I have five pages. Be. If I go on this side and go under my, this folder, static says dogs and I see 1, 2, 3, 4.

These are my static pages per dog. Beautiful. Now, if I go back. Refresh my page. This is my actual jumps stack website. So as you can see, Scully is super easy to use. Very simple to get started with Jamstack applications and angular. If you want to get into schooling, they have an awesome community.

They have a Gitter chat and they have awesome documentation. And anyways, so if you have more questions, feel free to bring them up and I'm gonna leave my resources. Right here, which is the Jamstack org Scully.io and right here at the bottom, that's [00:07:00] the ripple for the project that we just built into a Scully app or the same as a Jamstack application.

Just Angular thank you so much for watching.
