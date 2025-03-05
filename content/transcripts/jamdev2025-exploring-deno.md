---
_build:
  list: false
  render: never
---

**Jo Franchetti:** [00:00:00] Thank you so much for having me. My name is Jo and I am part of the developer relations team here at Deno. Uh, and if you've not heard of Deno before, it's an open source JavaScript runtime. Uh, so if you're used to using Node, it's very similar to that. And it's also like Node originally written by Ryan Dahl, who was the.

Original creator of node. And he took all that experience that he had after 10 years of learning lessons and, uh, created Dino. It's written in Rust. So it's super fast and it comes with a whole load of really useful built in tools to, we're trying to make your developer experience delightful. And whenever I mention Deno to developers, [00:01:00] I often hear the same response, like, Oh yeah, I've heard of Deno.

Deno sounds really cool. I keep meaning to check Deno out. And while that's a really lovely sentiment, it's actually not great for my OKRs. So today I'm going to show you some cool stuff that you can do with Deno that doesn't take up too much brain space and hopefully gives you a taste of what Deno really is, how much of a Delightful developer experience it can provide you and maybe convince you to try it out for your next project.

So this is the Deno website, uh, that you can see here. And so the first thing that we're gonna have to do in order to use JavaScript is we're going to have to install it. And I really want to give you the absolute beginner experience. So just to prove that I don't have it installed, uh, let's just do a quick check.

Zoom in here a bit. So if I do deno minus v. You can see [00:02:00] I don't have Dino installed, so we're going to need to install it. So we'll get the command to install it off the Dino website. So if we just scroll down here, we can see I'm on windows. I'm just going to copy this and I'm going to paste it directly.

In here, you press enter, and we're going to get Deno installing. And this should be a super fast, super easy install. Uh, in fact, there we go. It's already installed. Um, and just sort of to prove how easy this is, like, I understand I'm on a fast machine here. I'm on a wired connection, uh, but the other day I wasn't, I was in a shared office space, uh, and I installed Deno on a Samsung Z Fold 6 phone, uh, so this is it running on, yeah, the Galaxy Fold 6, uh, using Samsung DeX, so it's running natively in ARM, I've got VS Code side loaded, um, and I'm able to code on my phone.

[00:03:00] Make my DNO projects like you can basically run it anywhere. It's super great, but yeah, we've got it installed now. So let's open up VS code and let's start a new project. So I'm going to open up my terminal.

And I am going to cd into my dev drive and let's make a new project. So Deno has a bunch of tools. As I said, one of the things that it has is a initializer, which will scaffold a basic project for you. So let's just do that right now. So we can just run Deno init. And we'll give, we'll give it a name. So let's call it demo project.

And it's going to create that demo project for us. And then it tells us that we want to CD into it. And then it tells us all the things that we can do with it. So let's do that now.[00:04:00]

And then let's open it up in code.

RBS code, you can do this.

There we go. Okay. So this is what Deno has done for us. It's set us up these three files. We have, first of all, our main. ts file. And this is our entry point to this little app that it set up for us. And you can see, it's just put a basic application. Here for us. So all it's doing is it's making a function to add two numbers and then returning the Some of those two numbers.

Um, and you can see we've got a couple of red squiggly lines here. Uh, and that's because VS code at the moment doesn't know what Dino is. So what we're going to do first in order to make this [00:05:00] dev experience a bit nicer is we're going to install the VS code extension. Uh, which is going to give us all of the power of the Dino LSP, the language server, which is going to give us things like, uh, code, auto completion, suggestions, testing, all of that.

So let's find the Dino extension and get that installed.

Cool. So now if we go back into our project, back into our end point, those red squigglies are gone. So now let's have a look at, uh, the code itself. So we, as I mentioned here, we've got a main TS file. We've got a configuration file, which is this Dino JSON, and we've got this main tests file. Uh, and I can run this project by, uh, using dean alone.

Name. [00:06:00] ts to run the project. And I can see here, uh, it is output. Uh, the little, the answer of the code that we were running in our main TS. Uh, and just, if we just jump back in here, if you've not seen import. meta. main before, uh, the main property checks to see if the file is being called directly by Deno.

So if it's the entry point of your project or if it's being imported. As a module somewhere. So this code will only run if it's being, uh, run by Dino itself. Uh, it's a super useful little tool there if you've not seen it before. Uh, okay. So let's have a look now at our tests. So we set up this test file for us and you can see we're using this Deno test function which comes for free with Deno.

So this is something that actually, uh, we don't need to install any third party tooling. Deno really wants you to [00:07:00] be writing good tests and for you to be able to write tests without sort of thinking about it. So the Deno testing API actually comes for free with Deno. Uh, but you can see here, we're getting a red squiggly line and that's because we haven't installed yet.

Oh, our, um, special guest has arrived. Thank you for your help puff. Uh, so let's do our installation and this is exactly what you're used to from your node project. So it's just going to be, you know, in school and that's going to do those installations for us. And now we've got rid of our red squiggly and we can run our tests with clean and test.

And if we change the test, we can watch it fail.

Uh, and yeah, as I said, this is all built into Dino. Uh, you define your tests with the Dino test API. Um, it's just, it's part of the Dino test [00:08:00] framework. And what we're doing here is we're importing, uh, so that equals from the Dino standard library, which I'll talk about in a little bit. And then we're importing our main TS file, which we're actually going to test.

Uh, and so we briefly saw the dno install command, uh, which leads us nicely on to our final file to have a look at, which is our dno. json. So, again, if you're used to Node projects, this is going to be kind of similar to your package. json. This is where you're going to set up the configuration for your entire project.

Um, and we have tasks, which are similar to your node scripts, and we have our imports, which are similar to your node dependencies. And when we did that installation earlier, it is going to have imported, uh, this dependency for us. [00:09:00] Uh, and this dependency, you might not recognize, uh, this. So JSR is a JavaScript package repository, uh, much like NPM.

It's a place where you can, uh, publish your JavaScript packages. The lovely thing about JSR is that you can publish also TypeScript packages, uh, directly to JSR. And Dino has made a whole bunch of packages. For you in this thing called the standard library, gives you just some nice blocks of code that you can use in your own projects.

And a standard library is something that a lot of you might already be in, might be something you're used to. A lot of, uh, programming languages have their own standard libraries. JavaScript doesn't have one yet. And I think that's sort of a shame. Uh, but Dino is. Dino has made a whole load of these packages, which [00:10:00] are blocks of code that you're going to find yourself needing to use regularly here.

We don't want you to be reinventing the wheel. Uh, so the standard library is there for you to get going quickly. And let's, um, let's just have a look at it actually. So if I. We open up a new tab and we go to jsr. io and then we search for the standard library. Uh, so let's look at what is actually available to you here.

So you can see you've got all of these modules that you can import and use. And these are just things that you're going to find yourself having to write regularly. And instead of having to do that, the standard library is there for you. Um, it's super fast. A lot of the, a lot of these, uh, packages are written in native code.

So, uh, it's going to, yeah, it's going to run nice and fast. You're going to save your time, not sort of reinventing the wheel, as I mentioned. Um, [00:11:00] yeah, so let's jump back into VS code. So something else that you might notice here, which is a little bit different from your Node projects is we did an install there.

So we, we've installed this standard, um, assert package, but we've got no mention of it in our project. And that's because Deno doesn't have this sort of modules folder in the same way that Node does. Deno, uh, installs, caches your, uh, packages in a, in a global cache. Um, I personally think this is actually quite nice because it doesn't pollute your project folder.

Um, it, it just, it, it means that this whole project is a, is a lot neater. It also means that if you're using the same dependency across multiple packages, you've got it installed in one location rather than having it installed in, in multiple different projects. Um, I [00:12:00] personally think it's, it's quite a nice way of doing that dependency, uh, dependency usage.

So let's jump back into our dno. json file and have a look at what's actually going on in here. So earlier we ran the project, uh, directly using just the dno run command. So when we did, you know, main. cs Uh, what that is, that's an alias, like a shorthand for dno run main. ts and you can use dno run to run any JavaScript or TypeScript file.

Uh, something I haven't mentioned is that this is a TypeScript file and we were able to just run that without, uh, without having to do any compilation step, without having to do any configuration. Uh, dno can just run your TypeScript files and just deal with them. Uh, and if you want to, there are configuration options for the way that the TypeScript compiler works.

So if you do want to configure them, you absolutely can do in your Dino JSON. [00:13:00] Um, so why don't we try messing up one of our, um, why don't we make this into a string, for example. Uh, if we do that, because Deno understands TypeScript, Deno's able to give us some suggestions for what we might have done wrong.

So you can't assign a string to a type of number. Um, and this, this is what comes for free when we install the Deno LSP earlier. Sorry, the Deno extension earlier. Uh, Yeah. So, sorry, that was a brief tangent on TypeScript. Let's go back into our Dino JSON and just have a look at that task. So we saw we can run the file directly, but if we want to start doing slightly more complicated things.

Like, um, you know, adding in, uh, a, a build step for a Vite project, [00:14:00] for example, uh, or a dev step, uh, we can absolutely do that with our tasks in the same way that we would with our node scripts. So we can, instead of running dno main directly, we can say dnode dev. There we go, and you can see that it's doing the exact same thing that we did before.

It's outputting the answer, but it's also adding in this watch flag so that now when they update the main TS, uh, it's going to rerun the script as we make changes. Uh, and, like, that's super helpful, um, the type safety of, you know, being able to use TypeScript straight out of the box, having those hints right in your editor, I think are super useful.[00:15:00]

Uh, but let's take a look at some of the other tools that come for free with Deno. So let's say I add a new variable to this function. So let's say I add in, uh, C, which is also going to be a number. You can see here VS code is going to tell us something. So I don't know if you can see that squiggly line.

I hope you can. Let me just zoom in a little bit, maybe there you are. So we're getting a hint here from VS code saying you declared it, but you've never used it. And this is part of our linting. So Dino also comes with a linter built in, uh, and we can see the output of this if we run Dino lint. There we go.

So that's going to tell us the exact same thing, uh, that, uh, C has been, uh, initiated, but never used. And the [00:16:00] linter again is a tool that just comes for free with Dino. We don't have to install any third party, uh, libraries to do this. It's just right there for you. And then let's say, uh, you're working with a team member who is Unhinged and decides that they want to write their JavaScript like this.

So, uh, they've maybe done that. They've, uh, what else can we do here to make this ugly? Uh,

we'll do that. We'll do a console log. Uh, maybe we'll drop that onto a new line. They've written some code, which is not the standard way that you would like it to look in your projects. Deno also has a formatter built in so we can say, Do you need a format? And that's just going to reformat that file to make it look the way that you want it to [00:17:00] look.

And both the linter and the formatter are configurable. So you can choose what rules you want. You can choose how you want your code to look. And it's just going to fix up any random formatting, and it's going to catch any linting errors, uh, while you are in your, uh, While you're sort of editing, uh, and you can absolutely hook these up to things like GitHub actions.

So if you want to check that your committed code matches specific rules or matches a particular look, you can hook up your linting. You can hook up your formatting as part of your CI pipeline. And that's just going to stop devs from being able to merge code that doesn't meet your style standards. And all of this just comes with that initial install.

Uh, and Deno also has a whole bunch of useful APIs for you to use in your project. So we saw very briefly earlier, we saw the test one. Um, we've also got, uh, things [00:18:00] like reading and writing files. Um, we've got, in fact, why don't we take a look at the docs. And just take a look at the list of stuff that we've got.

Um, so one thing I haven't shown you yet, this is the DenoDoc site. Um, this is my, my, uh, Magnum Opus. I've spent a lot of time working on these docs. Uh, and if you want to see everything that you get with the Deno API, Every single, uh, API is available to see here. We can actually see the list of every single one in here.

Um, but you can start to see things that might be useful to you. So we've got our file system. We've got things like, uh, an HTTP server that comes out of the box, uh, support for web sockets. So let's have a look at some examples of these. So let's dive into our main. ts file here. And we're going [00:19:00] to, uh, create a new text file called hello.

txt. And we're going to add some code into it. So let's just delete all of that for now. And we're going to say, const text equals wait, wait. The co pilot is going to do the hard work for me. So we're going to read the, uh, the text out of a file and we are going to just make that file in here. So we will, uh, Create a file called hello.

txt and in there, we're just going to type in hello world.

And so now when we output, when we output this, we would hope that it's going to say hello world. So why don't we try running our. Ask [00:20:00] Dev, uh, we're gonna say yes to that. There we go. And we have output Hello world in here. And we can also write to files too. Uh, so we could maybe make a whole new file so we could say D.

Yeah, no awai. Oh, there we go, VS, um, ProPilot knows what I want to do already. Uh, and we're going to just update that to be a new file. And we're going to say, hello world, the second. And now when we run this,

we should see, there we go. Hello, hello world, the second has been written. Um, and so that was just writing a string to a file. We can also do some exciting things with an array of bytes. So, uh, let's. Here's [00:21:00] one I made earlier, so, uh, we're just going to create an array of bytes here, and when we run this,

we'll end up with hello3, which has given us the word hello, which is what that array of bytes was. Um, so that's just a few different ways of using the, uh, file server APIs. And that's just write text file and write file and read text file. But there's a whole load of different options available to us.

And in fact, one of the nice things about again, installing that VS code extension is that we can do, you know, And we can get suggestions for every single thing that you might possibly want to do. So let's take a look at another example. So I mentioned we saw in the docs there that Dino can do a bunch of cool, uh, web HTTP server stuff.

Uh, so why don't we try [00:22:00] that? So we'll do Dino docs, uh, and we're just going to give it a request. Let's see. Yes, if a co pilot can do this for us, then we'll return a new response. Hello world. And that will do fine.

So that's going to set up a very basic HTTP server for us.

There we go. Uh, so you can see there, we've set up an HTTP server that's running on localhost 8000, and it's given us a response of. Hello world. Let's see if I open this up here.

Yeah,

there we go. There's our web server running on core 8, 000. Like this really [00:23:00] is nice. I hope nice and simple. Um, and I hope, uh, makes sense. Deno also supports a load of node APIs. Um, so if you did want to do, for example, your file system stuff with effort with node FS rather than, uh, with the Deno tools, you absolutely can do that.

Uh, so you can do that via, uh, importing the actual, uh, Node module. So we could do, in fact, let's just delete all of this. Let's do that. Uh, we are going to need to run and install. Uh, cool. Okay. So that should, uh, that should now have updated our, hello. Oh, no, that's reading from our hello text. Yeah. Uh, [00:24:00] so if you want to use your node, uh, packages, you absolutely can.

You just use this, uh, node colon, uh, which will allow you to do that. Um, and Dino also supports a load of web APIs. So if you want to, you can absolutely, in fact, let's have another look at the documentation here.

So these are all of the web APIs that Deno supports out of the box. And one of the real, one of my favorite ones is fetch. So Deno supports fetch, uh, natively. So if you want to, uh, you can absolutely do a fetch directly in your project. So let's try that out.

There we go, uh, so I've just fetched a load of information about dinosaurs. All we're doing here is, uh, yeah, using, using fetch. [00:25:00] So

if you, I mean, you, you will have noticed actually while I was running these, uh, let's And run it again. So I don't know if you noticed while I was running these, we got this little pop up here that says, um, access to something has been requested and Dino has a security model that we think keeps you a little bit safer than Node does.

Um, and what it's doing here is it's just. it's checking what has access to what. Code that you run with Deno won't have access to sensitive APIs such as file access, network access, environment access, that kind of thing, without you explicitly granting it. Uh, so the reason for this is, you know, it's a bit of a wild west out there with the modules that we depend on.

Like we're using all these [00:26:00] third party modules every day, but we don't always know you know, who's writing them, what's in them, whether they're being maintained, whether they're safe, whether, you know, they've, they've been hacked. And this permissions flag just allows you just a little bit more peace of mind.

It allows you to have a little bit more of a granular control over what your code has access to. So we've been given a prompt here saying that the Fetch API need. Access to the network, which like, of course it does. Of course it needs access to the network. So it's saying here, we can say, yes, allow, we can say no, or we can allow all net permissions.

So I can just type A in here and then it's going to allow that access. Um, but what we can also do, if you don't want to have to type that in all the time, Dino has a bunch of permissions flags. So I can put in my task. I could say, for example, allow net in [00:27:00] here, and that would allow it to run without. Uh, without the need for that permission.

So there

we go. So the, that time it ran, I didn't need to type in the A. Uh, and if I'm in dev mode, I don't even need to use these allow flags. I could just say minus A, which is just going to allow everything. Uh, super useful tool for when you're in dev mode. Absolutely do not recommend that for anything that is actually going live.

You should definitely be looking at the permissions that you're using rather than just allowing everything. So the absolute final thing we're going to look at, uh, and I'm sure you're all thinking it is, you know, I already have a working node project. Like, I don't want to have to learn an entire new tool in order to run my projects.

It doesn't matter how many nice tools you've got. Um, I don't want to have to migrate over. And the nice thing is [00:28:00] that Dino absolutely can run your node projects. Um, we have a whole load of support for, uh, the node APIs already built in. If you need to, you can use the node colon suffix to make sure that you're getting the packages that you need.

Um, but I just want to prove this to you. So we're going to have a look for a project and we're going to try and install it and run it with Dino. So let's go on to GitHub and let's search for a project that we can use. Uh, so let's have a search for, uh, why don't we search for node. JS demo,

okay, this look like a demo actually use [00:29:00] let's get it and install it. Get

that installed and then we're going to cd into it

and let's

open it up. So I can see in here, we've got a source folder and in there is our package JSON. So let's cd into source.

Let's try installing it and see what happens.

Okay, [00:30:00] fingers crossed.

And I know you came here to watch Taskbar Load. Okay,

let's see if we can do it without that, but we may need to just install those unsupported packages. Let's try and run it so we, we open up the package check on what have we got in here? We've got a script to start. So let's do genome

what? 3000 do we believe it Let's. Have a look.

Yeah, there we go. Demo app up and running. [00:31:00] Uh, Deno can run your Node projects, so you don't have to learn an entirely new way of doing everything in order to use the Deno tooling. Um, it's super fast. All of your, your testing is built in, your linting is built in, your formatting is built in. Um, I hope that this has been an interesting sort of whirlwind introduction to Deno.

Um, I hope that maybe this gives you, uh, the opportunity to get started with Deno for your own projects. If you do, I would absolutely love to see what you build. Um, and yeah, uh, I've been Jo Franchetti. Uh, I hope you've enjoyed this talk.

**Brian Rinaldi:** That was a great talk, Joe. I loved, I love that you just like, randomly chose a Node project without worry of like, what you might end up doing. That's my trust.

**Jo Franchetti:** That's my hand. [00:32:00]

**Brian Rinaldi:** Yeah, yeah, you know, well, it worked out. So, um, I was more like, not, I wasn't so worried it wouldn't run on Deno. I'm like, well, what, I wonder what's in this project, you know?

Yeah, that's true. Oh my

**Jo Franchetti:** goodness. Yeah. We could have had anything.

**Brian Rinaldi:** Exactly. Um, Oh yeah, it's puff. Hey, um, all right. We got a couple of questions here. Uh, from one from Michael. Sean. Um, what are some of the biggest benefits of using, you know, for node when working within the context of a site framework? So I think he means like, like some of the.

Frameworks like Next or Astro or whatever.

**Jo Franchetti:** Yeah. So one of the things that I, I didn't mention is support for framework. So Deno absolutely supports all of your, your modern web frameworks. Um, the, the advantages of Deno [00:33:00] over Node are, so first of all, I mentioned that security model. Um, it's something that I think is super important and it's only going to become more important.

You know, we keep getting stories of packages that have been, um, excuse me. Packages that have been hacked or, um, you know, had some other security issue. And I think just having that overview of what is accessing, what is super important. So Dino can give you that sort of granular rundown. Uh, not only that, uh, I mentioned very briefly Dino's built in Rust.

So it's actually. It's faster than Node, um, so if, you know, your dev time is important to you, especially if you're working on larger projects, um, you may find that it sort of shaves off a few seconds from your, uh, developer experience, which, you know, is something we're always looking for. Um, and then I guess the final [00:34:00] thing is all of the Deno APIs, like, uh, you know, there's a lot of nice things built in there.

And one of the, you know, one of the things that a lot of people have been talking about recently is the fact that, you know, node is now starting to support TypeScript out with the box node is starting to have its own test runner built in. But these are things that Dino has had for, you know, like five years now.

Um, it's something we're well practiced in, we're well tested in, uh, you know, we are taking feedback from the community constantly. We're able to very quickly iterate on that feedback. So if there's stuff that you want to see, like we may well be able to get it into the next release, whereas Node is huge, much slower.

You know, they're going through, everything has to go through a committee before it can be decided on. Um, so yeah, [00:35:00] those are the things that I love about teaming.

**Brian Rinaldi:** Yeah, I think notes TypeScript support now, it's like somewhat. It's not full TypeScript support, if I recall. It's kind of like a rudimentary TypeScript support.

It's like, hey, you can use TypeScript and it won't break. Yeah, exactly. It's

**Jo Franchetti:** not, it's not quite there. Not to say that it won't get there, but I think also You know, the same with having browser diversity, I think having runtime diversity is so important for the JavaScript environment as a whole, um, and the community as a whole.

It's the only way that we're ever going to foster any kind of, uh, iteration, any kind of development, any kind of improvements on the community if we have. Healthy and happy competition. You know, Deno can try this out and then Node can get it in five years time.

**Brian Rinaldi:** Yeah, one thing I was actually looking up while you [00:36:00] were speaking, because I was like, you know, I have used Deno in the past and really liked it, um, but I do a lot of AWS stuff now, you know, mostly focused on AWS, and I was like, you know, can you use it in AWS?

I did find you have something that says you can. Use it in lambda. So, um,

**Jo Franchetti:** yeah,

**Brian Rinaldi:** so I'm, I'm, I'm definitely gonna check that out. Actually. I want to look into it some more. So,

**Jo Franchetti:** yeah, nice.

**Brian Rinaldi:** Awesome. Okay. We've got more questions. We've got one from Nick. When I used to work at Netlify, we'd handle process. env in edge functions, uh, which Netlify edge functions are in Deno and map it to deno.

env. I think process. env is supported natively in, with no compact or no?

**Jo Franchetti:** Yes, it is. Yes.

**Brian Rinaldi:** Awesome. Okay. Quick, quick and easy answer there. Just yes. Uh, okay. Yeah.

**Jo Franchetti:** I don't know if a lot of people don't [00:37:00] know that, that, um, the Netlify serverless functions are run by Deno. Whenever I ask an audience, you know, have you used Deno before?

A lot of people say no. And I'm like, Oh, you might not know you actually have.

**Brian Rinaldi:** And I think there was another one, another company whose edge functions run on Dino. I'm forgetting who it was. It was like a cloud, like data store type thing. Like, um, I can't remember their names. Anyway.

**Jo Franchetti:** It may well be there.

There are quite a few, I mean, and, and one of the things that I haven't mentioned. Is, um, Deno's, um, uh, deploy offering. So, you know, if you, if you want hosting, you want serverless functions, Deno absolutely has that as well. So yeah, check it out.

**Brian Rinaldi:** Potter, our man behind the scenes here, reminded me it's Superbase that uses Deno for their edge functions.

**Jo Franchetti:** Oh, right. Okay. Yeah, yeah, yeah.

**Brian Rinaldi:** Uh, [00:38:00] so Anthony asks, have there been measurable site speed improvements in using Dino that you know of?

**Jo Franchetti:** So it won't improve the speed of your site. Um, unless you're, you know, if you're running, I guess if you're actually running Dino, yeah. I mean, it's an interesting question. I don't actually know off the top of my head.

Like I don't have stats that I could give you. I'm afraid. Um, but I can absolutely look them up and see if I can tweet them out afterwards.

**Brian Rinaldi:** Okay. Um, I know that's not necessarily stuff you have on hand all the time. So, yeah. Uh, and forgive me if I mispronounce your name. I'm going to say Benino says Is there an NPM audit equivalent in Deno JSR?[00:39:00]

**Jo Franchetti:** Uh, yes, there is. So, in fact, it's recently just been released. Let me, um, go to the blog. And, uh, I believe that there has just been a whole blog post about this. Well, maybe, maybe it's coming soon. Um,

**Brian Rinaldi:** you divulge that, you know, pre release information. You get it here first, people learn about it may

**Jo Franchetti:** well actually be in the release that is either going out today or tomorrow, but yes, there is either, either it exists already or there is going to be an equivalent.

Yes. Um, again, I will tweet that out when I have the access to it.

**Brian Rinaldi:** Awesome. Um, one other thing you, you talked a little bit about how I could run my, my existing node project on there. Obviously, um, if you're going to do that, I mean, [00:40:00] what, what, what's, what's your recommendation for like, how somebody then goes about migrating to take some of the advantages of, of, you know,

**Jo Franchetti:** after they've got their project running?

I was very lucky with that project. You know, if it had been using common JS instead of SM, we'd have maybe had more issues. Um, so there are things that you will have to do in order to migrate your node project over. Um, yeah, you will, there are some APIs that you will need to use your node colon specifier.

Um, there are maybe some packages that you might want to start installing from JSR instead. Um, you're going to have to update from common JS to ESM, but I think that that's something that we should probably all be considering doing anyway at this point, like, you know, you're modernizing isn't never going to be a bad idea for your project.

Um, and then also you can [00:41:00] consider bringing TypeScript in the nice thing, and I think the important thing about migrating over is that you can do it. Incrementally. Um, so, you know, you don't have to change everything over to Dino APIs immediately. Uh, you can start doing it like as you, as you add on to your project, you can start using, you know, the Dino file system instead of the, instead of NodeFS and, you know, maybe once you have time to tidy up, you can do that later.

Um, I think that's something that's super important to a lot of developers. Like they don't want to have to. Do a massive overhaul of their project. Um, so I'd say that the biggest overhaul is going to be CJS CSM. Um, and then it's just a case of sort of incrementally swapping over to what I think did the nicer APIs.

**Brian Rinaldi:** They did look cleaner. Um, for sure. So the examples you showed, like definitely seem easier than, than node. [00:42:00] Um, so I guess, so the immediate thing would be if I'm. If I'm migrating project, I have to make those changes to like, that's not an optional change. I have to make those changes to the ESM. Yeah, Dino made,

**Jo Franchetti:** they took the decision to not support CJS.

Um, right. I think it has been contentious and I can understand why people are maybe frustrated and confused by that. Um, we also in our documentation have a whole load of help on how to do that. So if you are moving over, uh, we have, where is it? We have a bunch of documentation on Node support and what you can use from Node and what you can't.

And then we also have, um, a migration guide, uh, oh no, that's migration from one to two. We do have a migration guide from, um, Node to Deno. [00:43:00] And we have also a bunch of examples. So if you're moving from

**Brian Rinaldi:** Oh, you look, does that mean if a third party library? And it doesn't, like, it's only as a common JS version. Does that mean I won't be able to use it? That does mean that you won't be

**Jo Franchetti:** able to use it. Yeah. You would need to find a, um, yeah. Yeah. But you know, there, there are plenty of modules out there.

**Brian Rinaldi:** Yeah.

Yeah. I mean, and you all have, I mean, in JSR, we'd have, it might be easier to like, find in many cases, an alternative already in there and start the migration process. Okay. That makes sense. There's a

**Jo Franchetti:** CJS to ESM example in here somewhere, [00:44:00] but my, I'm, I'm snow blind to it at the moment. Um, and just also to mention something that I didn't mention is that we have all of these examples.

Oh, I'm not showing my screen right now. Uh, if you go to dno. com slash examples, Um, sorry, I thought I was sharing my screen. Uh, if you go to see, uh, docs. dno. com slash examples, there's a whole bunch of example code in there. It's designed specifically to be little tiny blocks of code that you can literally copy and paste into your projects.

There's also videos, there's also walkthrough tutorials. So like you're not on your own with this stuff, you know, we really want to help you have a good experience. Um, and there's also the Dino discord where a lot of our engineers hang out. So if you To decide to migrate over to Deno, we're in there and we're happy to help, you know, if you find that you're sort of stuck on anything, do shout in the discord and one of us will [00:45:00] help you out.

**Brian Rinaldi:** Sounds amazing. And, you know, and, and congrats on the docs. They look, I, when I've used them in the past, they were excellent. I didn't realize you were the person behind them. So, um, yeah, they look great. And there was even a bunch of compliments. About it in the comments too.

**Jo Franchetti:** Oh, nice. Awesome. And, and the one, uh, one final thing I will show you, um, if you do find anything on any of the docs that you wanna change, right at the bottom, we've got this feedback form.

Um, and you can tell me what you think. Um, and this, I collect this, I read it every day. If you find something that is missing that you wanna see, tell me and I can literally update it and get it there for you the next day. Like, I wanna make this as nice as I possibly can for you.

**Brian Rinaldi:** Awesome. That's great.

Well, this has been, this has been really great. I think, you know, based on what I saw in the comments, you actually got a bunch of people who are ready to just jump in and give Dino a try. So, uh, that's [00:46:00] always a sign of a really good presentation. So thanks so much, Joe, for coming out, um, and, and talking to us.

**Jo Franchetti:** Absolutely. My pleasure. Thank you for having me.
