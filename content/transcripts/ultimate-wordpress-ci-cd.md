---
_build:
  list: false
  render: never
---

**Maciek Palmowski:** [00:00:00] First of all, Brian, you did a really wonderful job pronouncing my name. I will know. I know how difficult it may be. So without any further radio, I'm going to talk a bit about the, you ultimate WordPress, C I C D pipeline.

So first of all, I'm gonna admit that this title is a bit of a stretch because, uh, we can use WordPress in so many ways that it's difficult to create a one and only automate WordPress C I C D pipeline because some of us will use WordPress as a typical CMS. Some, some will use as a no code, uh, solution.

Some of us will build, uh, headless application based on workers. And with each case, this pipeline would look. Totally different or even you just wouldn't need it at all when you use it as a no solution. But I'm going to show some of the tools, some of the steps that are kind of universal and it'll be up to you [00:01:00] to move them a bit around, so it'll fit to your, to your needs.

So, um, This is me. I work at a company called, called body when, where we are developing a C I C D application. Uh, it's kind of easy to use. So if you would like to start your adventure with automation, uh, give it a try, go to body that works. But, um, even if today, I'm going to show some examples based on buddy.

Uh, This is not about body. This is about the whole methodology, because what is C I C D this, this, this a observation that, uh, many developers used. And I know that many people don't know what does it means because C I C D means few things. So first of all, the CI part means continuous [00:02:00] integration. This means that every time when we code something new, We always test, we always test it.

So every time we add something new to our code, we run all the tests, just like this. Thanks to this. We are working on small chunks of changes and those small chunks are constantly tested. So if we made a mistake, it's very easy to pinpoint when it happened, why it happened, just like that. So it's much easier to.

In the end produce a bug free software. On the other hand, we have this CD part. And this first of all, CD in this, this time doesn't mean compact disc. It means either continuous delivery, which means that every time after our code was tested, we are building all the assets and we are preparing everything for deployment.

It's ready. It just. [00:03:00] That our either senior developer or project manager or whoever is responsible for our project, press the button to deploy it on production. So this is continuous delivery and we also have continuous deployment. This is the Mo the most difficult one to achieve, because it means that every time when we will merge something into master or main.

It'll be released on production. So we need to have a very good testing suit. We have to be 100% sure about, uh, we can release it. So this is a bit more difficult approach, but don't worry. I hope that at some point. You will, you will get to this, to this point that every time you will merge something to master, everything will be tested in such a perfect way that you won't be.

You don't have to worry about the quality of, [00:04:00] of your product. Um, before we go further, we have to talk about, uh, a foundation of C I C D, which is version control because. If you don't know what is version control, what is GI? Sadly, you have to learn a thing or two about it. Good news is really learning. GI is very simple.

It's very simple. And it will help you in so many ways. Why? Because, uh, thanks to version control. You have that full history of all changes in your account base. So, you know who changed? What, when, why? Uh, I mean this, why is only when that person wrote, uh, this description, but let's hope that also thanks to version control, we can work with something called branches so we can work.[00:05:00]

Many things at once, and we don't have to worry that one, that one change in one branch will interrupt something in another. So overall learn version control, learn, get, uh, without it, uh, it's really impossible to think about this, this whole modern development and the problem with workers and GI is like this.

WordPress is older than GI. WordPress was developed. Let me see my notes in 2003. And let's remember WordPress was, uh, was a fork of another CMS and GI was released in 2005. So. Overall WordPress was never meant, uh, to, to be compatible with what we call now, this modern web development. And we can really see it when we, uh, when we see the WordPress structure, it's really difficult, uh, to keep it in, in, in [00:06:00] GI because, uh, if we have plugins, we would either have to keep it in the repository or.

The same goes with what, how, how to update the car. Should we also update it in the repository or, or not? And there are many ways how we can store workers in get repository. It, it really depends on, uh, what we are exactly doing with workers, because if we are, are, if we are theme or, uh, plug-in developers, that's easy, we just store our.

Um, our thing in the repository, our whole plugin, our whole team that's, that's it, the problem begins when we are an agency, we are an agency and we have to store not only the theme. We also, uh, have to keep track of all the plugins. We have to be sure that the plugins are compatible with each other. So there are many, many things we have to care about.[00:07:00]

I saw many ways how developers, uh, start workers in, in a get repository. I saw when they start like everything and they updated, uh, even the core in the repository I saw, uh, The approach when they only start the theme. And also they try to push all the functionality. Uh, they written inside of the team to have everything in one place.

Uh, another approach is to store the whole WP content folder without the uploads, but I would recommend one more approach. Using composer, because there are few, few ways, uh, that we can use composer to manage plugins and themes. Uh, in my example, this is, this is a tool called bedrock and, um, bedrock helps us to change the folder structure so we can [00:08:00] easily.

Have everything in our repository, all the themes and plugins and even core management is done. Thanks to composer. Uh, just a few words. If you are not familiar with composer, composer is a PHP dependency manager, so it helps you to not only. Uh, download some dependencies in our case plugins themes, but it also helps us to make sure that they are compatible with each other because we can, we can, uh, add some rules that for example, our plugin needs to have PHP at least, uh, seven dot four or something like this.

And if we will be running composer on an older version, uh, we will get an error that, uh, That it just won't work. So thanks to composer, we can manage workers. Bed is not the only solution. I know that LA is, is having a tool [00:09:00] called mantle. If I remember, uh, in SPDI has their own, uh, own suit. And, uh, probably if you would look over GitHub, you will find some other ways.

But I think that bedrock at this point is, uh, is the most, uh, popular approach. And, um, And further, I will show you based on bedrock, how to automate everything and, uh, how it can make your lives easier. Okay. So, uh, Brian, could you switch to the, to, to my video because, uh, I'll be honest. I am horrible. Just horrible.

At multitasking. That's why I decided to record the whole flow and I will talk about it in real time and I won't have to worry about clicking and, uh, everything else. So let me play the video. Uh, for some reason I see a black screen. I'm not sure. [00:10:00] Uh, you know what, let me try to upload it again because things happen.

So let me, uh, remove this from studio. Okay. Uh, yes, of course. Things when going life have to, okay. This time it should be okay. Uh, Brian, could you. Okay. Yes. So this is our, our, uh, our repository. You can see that it's, that's better inside and let's take a look at the composer file. There are a few interesting things here we can see.

First of all. We have this repository connected called WP GUI. It's a great way to install all the publicly available plugins and themes. On the other hand, here is the list of libraries that will be downloading and you can see route slash WordPress. 5 9 1. This means that every time when we will install everything, [00:11:00] we'll get also WordPress 5.91.

We can, of course change the version. We can set it to latest. So as we want, and this is also an interesting thing, how composer knows when to install, uh, which files based on type. So we know that mu plugins will go into web app mu plugins, uh, plugins go into web app plugins and so on. And. That's easy.

It's all based on the type. And in the end, we can see the WordPress install directory it's in web slash WP. So this is how the composit data on file looks like. We also have a very interesting thing in better cold and environment. We can create the whole sets, uh, of environments. And, uh, this is the development.

With this, we have all this DevOps, uh, turn to true, and we also have dis low indexing, uh, set as true. So this is something, [00:12:00] some something very, very, very useful. And, uh, we can set more of them. We also have staging. This is almost like the production one, but, uh, Also with DISD indexing. So we can be sure that our staging site won't be indexed in Google.

And, uh, if we want to change the environment in the do end file, we just have to switch this w P N variable, uh, to the one we we want. So this is very easy to, uh, to separate production from development from staging, just by setting the dot EMV. And this is our website. It's kind of simple. It says hello world.

And it's just another WordPress site. That's it, uh, I deployed the initial deployment to, to, to production. So we don't waste time looking at how files are getting uploaded, because this is kind of a boring thing. And [00:13:00] here we can see this action. That just deploys everything from pipeline file system, which means we will upload not only what we have in the get repository, but also the things we will create with all the actions, uh, in our pipeline here are of course our logins passwords and stuff like this and the remote.

When we are, uh, putting all the files and of course, uh, we are not moving them out modules because, uh, we won't need them on, on the production. Um, okay. So it's deploying, we saw that we have, uh, working workers, but one thing is wrong because if we will take a closer look at our theme in our SAS folder, we'll see that.

Color SA we should have body background, color yellow. And we saw that our website is white. So the reason of it is [00:14:00] that we deployed everything, but we didn't build any assets and we have to convert SAS into CSS to make everything look as, uh, as we wanted. That's why we are adding now an action called node.

And we are going to, first of all, uh, go into the directory of the theme because, uh, we will be working inside of this zoologist theme by Matic a very nice one, by the way. Uh, we are going to install all the. Uh, all the NPM dependencies, because there is a package Jason file, and we are going to run NPM run built.

This is kind of legacy, uh, project when it comes to, uh, those NPM packages. And we have to downgrade, uh, our note version to, uh, to number, to note 10 because it didn't work on the latest one. So, uh, we got it time to [00:15:00] time to execute everything.

At the moment we will be working that we will deploy everything, uh, manually the time when I will press the button and we can see that, uh, our S file was, uh, converted to CSS and everything was uploaded to production. So let's see if everything is working. Yes, it is. This beautiful yellow. You can see I'm a developer because I don't know a think about selecting.

Nice colors. Sorry. so now let's take a look at, uh, The file system, because this is an interesting thing. I mentioned that we will be deploying things from the file system pipeline, not the, not only the GI repository and all those blue icons are the files from our GI repository and all those VI ones or whatever color it is, [00:16:00] are the files that were altered in some.

With our actions. That's why we have the vendor folder created during composer install. And, uh, here we have inside of themes inside of zoologists, we see the assets folder that was created and the node modules, because we run MPM install. So this is also a great thing that we can at any time, see what is happening in, in our fault system.

Okay. So, uh, now let's go back into our workforce. We don't have any plugins and thanks to bedrock. We can't install anything from inside the admin panel, which is great because we don't want our client to mess around update things, install some weird plugins, right. That's why we are going to WordPress podcast and we are going to install.

Hello, Dolly using composer. That's why we are going back to our repository. We are going to, we, we are [00:17:00] going to edit the file. Composer, Jason, and inside of the require section, we are just going at to, to add this, uh, the, the thing we just copied from, from the repository. So that's it. We are just committing changes.

And when we go. Into into our actions. Now we have to add a new actions that will install everything from composer. So we have to. Run composer, either install, either update. It depends on our strategy. If, if we are using, uh, the, the lock file or not in our case, we'll just run composer, update, no dev. So only the things that are in the require section, not in the required section.

So that's, that's it let's press round and see what will happen.[00:18:00]

I mean, it, it won't be a surprise that we will install the hell of value. Right. And, okay. So we can see that composer update is running. It's taking a moment and we have downloading installing. So, so we have everything in our C I C D pipeline file system. Then it gets uploaded to, to the production. We have to wait a moment and.

that's it. We got everything pushed to production. Let's see if it's working. Yes, we, we, we see the best plugin in the, in the entire WordPress' history. Hello, Dolly is activated and it's working to be honest. This is, I think that the second time I ever activated hello, Dolly in my whole career. So. We got some things working.

We are installing all the updates. We are creating assets [00:19:00] and we are uploading it with the production. The problem is that we are not sure if the website is working until the moment when we go there and refresh it. So let's test it automatically because. Why not, we can do it. Every C CD platform will have some way to do this.

It it'll be some way of ping or web or whatever. In our case, we'll just after each deployment, we will ping our website and. Check if there, uh, if there is probably power that, because this is the part of the footer on, on this, on the website, uh, thanks to this will be sure that we didn't only get the, uh, correct status return, but the content was also generat.

So every time when we will deploy everything, we will check. If the website is still alive, we can also add some actions that will run on failure. So for example, if something went wrong, we can, [00:20:00] uh, send a slack notification or an email or whatever. It's up to us. So, uh, again, we have to wait for, for our, all the things to run.

Uh, a bit later, we will, I will show you how to make it a bit quicker. Um, so yeah. The the, the, the waiting part of, of a C I C D pipeline, sadly, it's, it's, it takes a while from time to time. Uh, but okay. Everything is, is all right. So we know that this website generated this probably power that, uh, section, so that's terrific.

But like I said, we have those things that are running on and on and on. Even if we didn't change anything either to CSS, either to composer. So. Let's run them conditionally because we can, so let's go into, into this action. Let's go into conditions [00:21:00] and we can select to run this action only, uh, if there were, uh, changes to the specific path.

So, uh, the only thing. We need to check if something change in composer, Jason, if we added some new plugin or things like this, uh, on the other hand, when it comes to NPM, uh, we have to check if something change in the, uh, theme folder slash SA. So, uh, yeah, I had to. okay. So we are, we, we are doing the, the similar thing where about themes slash zoologist slash sauce.

Okay. So. Until we will make any changes in those two places. Those two actions won run, which make, which will make our [00:22:00] deployment significantly faster. So let's see how it works as you, as we, you see, we get skipped and skipped. So thanks to this, our, our pipeline ran much quicker. That's perfect. So we have, uh, we have some basic, we are testing our application in some way, but let's test it more because this testing part is, is so important.

Uh, there are many ways we can test it, but, uh, let's start with the thing that is currently very, very important speed. Uh, we are going to add now, uh, A lighthouse action to check if our latest changes didn't cause any deterioration of our speed of our accessibility. Because with lighthouse, we can check performance, accessibility, best practices and co in this test.

We'll just, [00:23:00] we will check if it's higher than 50, but it's up to you. Uh, and to which value you. Used as reasonable. And also we are going to check the visual test. So we are going to compare, uh, screenshot from the last deployment with the current one. It's a great way to, uh, check if our changes didn't cost any visual regressions.

Uh, of course you should. You shouldn't only test your homepage. You should probably test all the, all the pages that are important for you. So for example, uh, a command section, uh, I mean, sorry, a contact section or some. Or sections that you know, that your clients are constantly visiting, that are earning you money.

So, uh, those are the most important in visual tests. Of course, this time, uh, we saw that lighthouse passed because, uh, our website is quite [00:24:00] quick and the visual test also passed because we didn't, uh, change because this was the first time we executed it. So let's change something. In the, in the SAS folder so we can see are the visual tests really working.

And, uh, uh, also after this, I will, I, I, I will tell you 1, 1, 1 more important thing about, uh, uh, about the order of running things, because currently we are doing a small mistake. But, uh, it's. I, I, I, I I'll explain it later. Okay. So we'll change the background color to blue. And again, like I said, I'm a developer, so I don't have a clue about picking nice colors, sorry.

And let's run it. Let's see what will happen. First of all, we will see that this time, uh, while the composer skipped the [00:25:00] NPM run, build. Round because we change something in the SaaS folder.

And the problem is that we are testing things after deploying them to product. So, this is kind of a mistake that I mentioned, but because we should have a staging server, we should first push everything to staging check if everything is okay on staging. And if everything is okay on staging, then push everything to production.

But like I said, this is an example. Uh I'm I'm just showing you how, how, how this can be, and it's up to you to, uh, manipulate it a bit. So as you. We had to approve the visual change and yes, we wanted to be blue. So we approved it. And, um, when we refresh our website, we can see that it's blue and it looks horrible, but that was, that was the plan.

So like I mentioned, [00:26:00] the order here is a bit bad. We should first upload everything to staging, do the testing on staging. And when everything is all right. Then we can push everything to production. This is the best practice. And, uh, you should probably go with that way, have a staging server or servers.

It's up to you. Uh, okay. So we get our application built, uh, test that in the basic way and deploy that is cool, but let's go further because our theme. Has a test folder that this means maybe we can run some unit tests on it. And yes, we can. We can see that in, in the composer file that there is, uh, P PHP.

So we are going to add a new pipeline in which we will run, uh, tests. But this time we will go with this with the continuous integration approach. So [00:27:00] we'll test it every time. So that's why we. Will, uh, run this action, not when I press the button, but every time when we create a new, a new branch. So for example, if we'll be creating a new pool request, it will create a new branch and this action will run.

So we ready. Let's add a new pipeline.

And now let's add just one action PHP. So first of all, we, because this is those tests are run inside of the theme. We are going into web app themes, zoologist, and next, we are going to run composer, install and composer run test because this is the script name.[00:28:00]

So, oh, and let's, let's add it. Let's add a nice name around pest PHP, by the way, pest PHP is, is really nice for unit testing. So if you didn't use it yet, give it a try. So for the first time I'm going to run it manually to see if it's working. And we can see that. Of course it it'll take a second to install the new Docker image, composer it installing, and we see CF E dev test passing.

Yes, it does. So our one and only test has passed. So this is great. Well, I had to push it manually, so now let's create a pool request. So let's go into our code. Let's do a very small change. For example in the readme file, we are going to add a smiley icon, uh, and maybe a bit below. Okay. A modern [00:29:00] WordPress stack smile.

Okay. So that's perfect. And this time we are going to create a new branch and start a poll request. So let's propose changes. Let's create a poll request and let's see what is happening. You see. We already have disconnected here and because our test has passed, we can emerge our pool request. I mean, I'm a, the owner of this repository, so I could merge it anyway.

But if configured in proper way, we could block, uh, merging of some errors, but okay. Maybe, maybe let's see. Uh, let's let's go and try to break. So. So let's go to the test folder and we are going to break the test to see how, what, what will happen if we will, if, if we will, uh, we'll try to, uh, push a bug. So expect falls to be true.

Of course, this is, this is strong. Let's [00:30:00] create a new poor request and let's see what will happen right now. We are waiting for a moment and all checks have failed. So this is this continuous integration. Every pool request, every change you will, you will push, will be tested and thanks to, uh, unit testing.

You can see which test has failed. And from this point, you can try to learn why. Of course. Unit testing is not the only way you can add more and more tests. You can add Cypress for end to end testing. If you have, uh, some rich JavaScript, uh, JavaScripts, you can think about, uh, just testing, you can think about functional testing.

There. We, we live in a beautiful world of so many tools, things to which we can test literally. Everything, everything. So we don't have to worry about pushing, [00:31:00] uh, bugs to production. So, uh, as you can see, we created at the moment, just two pipelines, one for deployment, one for unit testing, probably when you will start working, you will have more and more of.

Each one responsible for each environment, probably much more of them, uh, that will, uh, Brian, could you switch to my presentation? I would be glad. And, uh, more of, uh, more and more of, uh, of purposes of tests of, uh, many different things. And, um, but I hope. The things that I showed you will be a great way for you to start your adventure with, uh, with automating deployment, because I know that it may sound.

Difficult at first, but, [00:32:00] uh, the best way is to start, remember, start small, start with just deployments and then add a thing after a thing. So don't worry, uh, at first about giving, uh, your code 100 per percent coverage or things like this. Don't worry about it. Start small and then start adding more and more tests.

Be more. And. Confident about what you are pushing to production. And, uh, with this, I wanted to say, thank you. Do you have any questions?

**Brian Rinaldi:** Thanks much. That was, uh, that was really good. Um, and, and you time that whenever I do prerecorded things, I always find like I either do it too slow or too fast, but you, like, you had it really down pat.

Um, so yes, because

**Maciek Palmowski:** you don't have to worry about this later and you don't have to stress about one more thing because you just have to, uh, watch your record it then and talk about it.

**Brian Rinaldi:** Yeah. So, um, so if [00:33:00] anybody has any questions, we'll be sure to get to them. I did have, there was one question in there that I'll get to, but, um, but if you have any other questions, please post them on the chat or in the ask a question module and I will get my check to, um, Answer them.

So, so the first question from the audience was it's a great presentation that shows the benefits of a pipeline, but not how to implement it aside from using buddy, are there any alternatives to buddy? Obviously you work for buddy, but, but like if you were to do this, either you implement some of these pieces yourself or, or, or something like that, what, what would you.

**Maciek Palmowski:** Overall, uh, let's remember C I C D is a methodology. It doesn't matter which way you will implement it. You don't even have to use an application because you can use body. You can use GitHub actions. You can use, uh, GitLab bit bucket. Also has some automation, but you can also use, for example, kit [00:34:00] hooks.

There are applications called the scripts called Husky, or, oh God, I forgot the second name. Uh, but search for Husky alternatives. Uh, if you are working in a small team or even you are a sole developer, you can run everything, uh, based on. Before you commit to get, for example, if you, if, if you connect, uh, Husky, uh, you can set it up that every time that you press commit, you won't commit something before your files get committed.

All, all your tests should, will run and you don't need, you don't need, uh, you don't need body for it. You don't need GitLab, GitHub, whatever. But like I said, there are applications that can make your life easier. It's it's really up to you. Like I said, uh, I work at body that's, that's true, but, uh, for me, the most important part is that you automate and test your code.[00:35:00]

If you go to our, to, to our application, that's cool. Fine. But I would be much more happier if you will just learn how to test and automate all, all your stuff. This is much more useful rather than learning how to use one application.

**Brian Rinaldi:** Right. Right. That makes sense. And, um, You were saying that, that typically this pipeline would be, you'd have different pipelines.

One would be a staging pipeline and then you'd have a production pipeline. Is that, is there like, um, what do you for WordPress? Is there like a particular setup that you recommend? Um, do you, do you typically just have like a staging in a production or do you have something more complex than that? Or how do or do you even, I mean, I know when I build sites like in, I do a lot of jams stack stuff, right?

Like I it's common for me to like, if somebody committed a PR that PR actually gets deployed as, so I can see it live. Do you have anything that you do that sometimes?

**Maciek Palmowski:** It [00:36:00] depends. Uh, what, uh, what hosting, uh, I I'm using at, at the moment, because for example, Pantheon also has, uh, the thing that you mentioned that, uh, I can have, they, they call it that multi dev and, uh, you can create, uh, A new WordPress based on your branch.

And it, it, it keep it, it copies the database from the, uh, probably from the master one or something like this. But yes, you can do, uh, as, as, as you told, so you can have, uh, as many WordPresses as branches, if, uh, if I'm using some other solutions. I mostly go with either, uh, production and staging or production development and, and staging.

So the development is only for, for the developers to play around to test staging is, uh, for us and the client to see how those changes are working. [00:37:00] Are they okay? And the production. Well production.

**Brian Rinaldi:** Um, and forgive me because it's been a few years since I did any, any much WordPress, but, um, you know, back when I was doing it, typically when I was pushing the deploy, right?

Like the site was down briefly while the deploy was happening. I'm assuming that that's not the case for these kind of situations where typically. Are you deploying to like containerized, uh, WordPress or

**Maciek Palmowski:** it, it depends. It, it depends on, on many things. So, uh, there are so many ways we can deploy our application.

Uh mm-hmm I mean, the ways how we can deploy, uh, an application or even WordPress application, we could do a 1, 1, 1 more, uh, one more talk just about it, because either we can. Do it, uh, as you said, so we are pushing the file after a file. And in this case, there is a big chance that for a moment, our site [00:38:00] will be down because some files will be missing and that's, and that isn't a good approach.

As you said, you, we can also go with the container containerized approach in such case. There, there isn't a problem, or we can of course think about ATO deployment. So for example, we. Zipping everything. We are pushing the one zip file on, into another folder, uh, on our website, we are unpacking everything and we are using, uh, links inside of Linux system to, for, for example, to copy the, um, the uploads folder.

Thanks to this. It gets uploaded. We just change the folders on the production and that's it. Everything is working and we don't see even the moment when the site, uh, was changed into another one. So, so, so there are many, many approaches or, or of course we can go with the first approach, but first [00:39:00] enable some screen, uh, sorry.

Some changes are in progress by the. Right. Much better than seeing and error

**Brian Rinaldi:** screen yeah, no, definitely. Um, yeah, and I didn't even know that, I mean, this goesa show it's been a while. I didn't know. Atomic deploys were a thing in, in WordPress. So,

**Maciek Palmowski:** um, also I remember that amaz. AWS has had some, it was called beans stack, but it's also the way of continent of contentized, uh, deployments.

I mean, it's a really great solution for enterprise. The only thing that I really hated about it, that the fact that once we were doing one big were precise deployments took, took 40 minutes. So really there, there, wasn't a thing called a quick fix because each quick fix took 40 minutes. So it was horrible, but yeah, no that's, but, but we were sure about, uh, the quality of the deployment [00:40:00] because, uh, we were running few machines, uh, in, in parallel and.

first, only the one machine was deployed with the new version. All the smoke test run. It was tested for a minute or two to see if, is, is it producting some errors, if not. Other machines were, were changed to. And so overall wonderful one wonderful thing. Uh, it, it was really easy to go back to some other version and really everything worked, worked really great apart from the upload time.

It was, yeah,

**Brian Rinaldi:** that, that is a long time. I mean, that's where, which you mentioned about skipping things that aren't necessary because exactly something changed in that is important. So we had another question that. Bedrock introduces the use of N files. Um, how do you manage promotion of site from dev to staging to production keeping [00:41:00] database in sync?

**Maciek Palmowski:** Yes, let's be honest. Word percent. Database and database in sync is, is a pain is a real pain because, um, we all know how workers database looks like. It's pure chaos. To be honest at my end at, at some point I started just using WP migrate pro from D brains. This is this, this, this is really great tool. Uh, they have also a CLI version.

So it's so easy to use it as a part of your C I C D pipeline. And on the other hand, I just went with the approach that the production site is the only source of truth. So this is one thing. And on the other hand, I tried to. What is possible to be kept as a file. Some, some configurations, for example, advanced custom fields has this feature so that you can keep all your, uh, all your data about ACF, [00:42:00] adjacent files.

And there are more plugins like this and, and. This was the only, the, the only approach I was, uh, able to find. And it worked in, in, in the most, uh, in the most jobs I, I had. So, like I said, uh, production as a one source of truth. So you are always pulling from this and never push to production when it comes to database.

And on the other hand, WP migrate pro to make your man your and managing databases. As easy as possible.

**Brian Rinaldi:** Yeah. I mean, I think, you know, WordPress has its uh, special cases, but, um, but it's any database migration is complicated.

**Maciek Palmowski:** I think. So I would say that WordPress with, with it, um, lack of structure that's yeah.

I mean the, the, the way how, from, from the moment we introduce custom post types and the fact that many [00:43:00] developers. Use them. I mean, it's good. It's, it's a WordPress feature. So why, so why not? We, we should use it, but, uh, there are so many cases when we shouldn't use custom post types and use our own databases because it's easier than, uh, to, to do migrations, uh, Everyone who is working with newcomers knows the horror of trying to move.

Uh, for example, orders or something like this. It's E everything is kept in this one table and it's, it's a nightmare. But the good news is I know that after many years they decided to change it. And in some upcoming release, since, uh, there they're gonna be more separated, uh, commerce is gonna be more separated in terms of databases.

So at last ,

**Brian Rinaldi:** that's good to hear. All right. So it looks like that's it for questions from the audience. I think those were [00:44:00] very good questions and, and magic. I really appreciate, I. What time is it over there in, in

**Maciek Palmowski:** Poland? Uh, it's eight it's eight, 8:00 PM. And so,

**Brian Rinaldi:** okay. Not, not too bad, I

**Maciek Palmowski:** guess, but so, in, in, in, in, in the, in typical developer times, it's like the middle of the day, right?

if someone's, if, if someone was, uh, really like taking. Look look quite closely into my presentation. They could. So that time stamps there and they might be 3:00 AM

**Brian Rinaldi:** all right. Yeah. Didn't you said you have young kids. What are you doing up at 3:00 AM. didn't you mention? Sure. You had kids.

**Maciek Palmowski:** Yes, I have. And, and this, and this was the perfect moment because the kid was sleep.

I had, I had some time for

**Brian Rinaldi:** myself. Yes. When I had, when I, oh my God, my kid would wake me up so early that I, I needed some sleep. So I barely got any as it was so well, I really appreciate you taking the time outta [00:45:00] your day to come present this to us. This was, uh, really, really cool. I think it's it's. You know, I was really impressed with how easy it was to set that up.

I mean, I know, you know what you're doing, but like that, that seemed like a complex workflow that you managed

**Maciek Palmowski:** to kind of yes. And up, and, and, and this, and this is also the important thing about C I C D because, um, for some reasons I

think that C I C D and the whole automation, it's difficult. It doesn't have to, it really doesn't have to it's it's a really good thing to start. There are really solutions that can make it simple. And I'm not only, like I said, not only us, but in terms of WordPress, there is also, uh, a solution called branch branch CI, which, which is almost like body, but only for, uh, for WordPress.

And it's, it's great to start. And I think there's deploy HQ, also a very simple solution when it comes to [00:46:00] automating your deployment. So. If you think that working with all those Yama files of GitHub is too difficult for you. Don't worry. Just try another tool or, or like I said, maybe try playing around with those GI hooks, because this is also a great approach to, to start.

Although you have to, uh, configure everything on your machine, which may be sometimes troublesome, but it depends. It really depends. Yeah, there are. So, like I said, beautiful times, we have so many tools that we can play around with.

**Brian Rinaldi:** Definitely true.
