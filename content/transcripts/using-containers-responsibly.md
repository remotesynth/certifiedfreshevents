---
_build:
  list: false
  render: never
---

**Melissa McKay:** [00:00:00] Hi, everybody. Great to be here. I crossed paths with Brian at a conference in Atlanta, and it was a pleasure to be invited to come and speak on this platform. I just went through browsing a lot of the content that he already has out there. The more soba list stuff. Definitely take some time and check those out.

There's some really good content. I did not know you were working on transcribing those. So I am definitely more of a reader. I will love to go back and look through a lot of those, especially if I'm scanning for keywords, I'm interested in. All right today for this talk. We're gonna be talking about containers.

This is intro level stuff on containers. If you haven't used them before. That's okay. You're still in the right spot. We're just gonna talk about some high level things that we really should be concerned out concerned about and be paying attention to as we go through development and we start packaging our applications for cloud [00:01:00] native.

So this is all about using containers responsibly. We'll be focusing on supply chain issues building primarily.

So quick introduction. I am a developer first and foremost. Currently I'm a developer advocate for JRO I'm going on my third year with this position. But for over 20 years prior, I was a developer all the way from an intern to a product principal. So I've had my share of experiences with problems moving also from, the years where a developer would sit in a corner with headphones to the open space moving in with your team into an open room where you have to try and concentrate , but be able to com communicate with your team, and then later on to a DevOps team and starting to learn more.

Adding more tools to my toolbox that had to do with operation side of things and deployment very interesting experiences. I [00:02:00] am a Java champion, my primary job prior to being a developer relations person is was Java server side stuff. Rarely do I meet a Java, a person that isn't doing something else also we have our hands in a lot of things.

So I have my experience with Python and node and JavaScript. And. All of those things as well. I'm a Docker captain. So I do like to keep up with the latest and greatest on containers. What's happening? What are the products out there? How do we support the general public? Not just with Docker, but also with open source and alternatives to dock as well.

The idea is we want to be able to support developers. We want to be able to make your lives a little bit easier and make sure that we're not falling into places where we can shoot ourselves in the foot. Cause ourselves some problems by copy, pasting, too much code. We will be going through some of that later on in this talk.

Okay. So we are going to [00:03:00] discuss how we use containers today. A little bit about how that's changed over time. We'll talk about building containers responsibly. We'll talk about containers in our software pipeline. We'll talk about managing our containers and then securing our containers. Of course.

I remember back when you might be in a crowd at a conference and the speaker might ask, is anyone using containers? And maybe a few hands would go up. And today that's very different. A lot of people are using containers. Maybe even if they're not using in, in production yet they might be using. For testing purposes or for individual development per purposes.

It used to be that using Docker containers in production was considered risky. And even though the concept of containers has been around a very long time, this is really nothing new watching over time them becoming so widely used [00:04:00] over this past decade has been an incredible experience. This diagram I found the cloud native computing foundation website.

It actually describes the different stages of projects and the type of users that start adopting them over time. And I think this is a good graph. It's really for their projects for that foundation, but it's also a good graph to that. Shows how it can be applied to how container usage has increased over.

And if I had to pick a point where I think we're at, on this particular diagram, I think we've, we're definitely past that chasm, that period of time where people are experimenting. People are, not sure if they wanna adopt. But then, we started getting on a role. Some tools and frameworks have come out that have made the whole process a lot.

And I think we are probably either in the middle, at the peak or a little bit to the right where we're talking about, conservative users starting to adopt container [00:05:00] usage.

There are some reasons some dates in the past. We can point out that I believe are. Points they will help us explain why we've seen an explosion of usage. Of course in 2013, Docker is made over open source. So we see a lot of movement there. I believe that is prior to that chasm area in that last diagram.

But in 2015, a lot happened. That was the time when the open container initiative was announced. This is an organization that's under the Linux foundation. It has the goal of creating open standards for container run times and image specification. DACA of course is a heavy contributor to that organization, but in their announcement of the establishment, it was said that over 20 organizations were involved in this.

So clearly containerization had evolved to such an extent that a [00:06:00] number of organizations wanted to work towards some common ground for the benefit. And then one month after the OCI was established, the cloud native computing foundation was established. Part of that announcement was the official release of Kubernetes 1.0, which was donated by Google to the CNCF.

So along with containers themselves, we now have advancement in the orchestration of containers. Obviously that's going to help with adoption of getting these into production and using them more widely. It seems to me that it was around 2018 where containerization kind of crossed into that popular zone.

And we started seeing this explosion, some proof of that, which has been very interesting to go back and look This is about when organizations started doing some research on who is using containers and how are they using containers? What are the run times they're [00:07:00] choosing? And one of these was cystic.

If you're not familiar with cystic, it's a company that provides a pretty powerful monitoring and troubleshooting tool for Linux, and they started observing their customers just to, get some trends, figure out what people are starting to do, what people are interested in their production environ.

This one is one of the graphs that came from a yearly report that they do on this. It's primarily around discovering what are the run times that are popular. And in 2017 dock was so prevalent. They didn't even have a graph, but they were only observing 45,000 containers, 2018, that doubled, but I want you to see what happens the next year.

All of a sudden they're observing 2 million containers, including SAS and on-prem users. This was a pretty big jump. The next year, even 2020 another 2 million containers this time. They say that this is [00:08:00] actually only a subset of their customers. And also we can see some changes in run times that are being used.

One thing that's noticeable here is we have the Docker run time. We have container D we have cryo. Those are all popular run times. However, you will see this Docker run. Slowly go away because it's a little bit more than what you need in a runtime environment. And actually Docker has revised their service so that they actually use container D as the runtime.

So it makes sense. You're going to see Docker runtime, fall container D go up. Docker uses container D by default now. So if you've got a newer version, that's what you'll be using anyway.

Next year, another analysis of 3 million containers. Another point of evidence that supports that 2018 year was provided by Datadog. This is another company that provides monitoring solutions for applications. Pretty cool [00:09:00] product, by the way, I check them out. It's I know I've used them in the past for production products, for monitoring and stuff.

I learned a lot using. I took this graph from a report that they posted in 2018, it's called eight surprising facts about real Docker adoption. So they weren't focusing on run time, so to speak. They were focusing on whether people were using these containers or not. And so this was. Pretty interesting.

They reported that, 25% of the companies have adopted Docker. Now look at how look at their methodology here. They claim that their data came from 10,000 companies across the industry and 700 million containers. So that's pretty amazing that they have that much information to work.

Later on, they changed. In fact it was later on that same year in 2018, they posted a different report called eight emerging trends in comp in container orchestration. [00:10:00] Now they're done with reporting on. Adoption of containers is a given now they're reporting on how these containers are used.

What run times are they using for hosts, how many containers are running on a single host? Things like that. Interesting stuff. So I posted the link here. If you get a chance to check it out, I would, they have some interesting information

just because something is popular. We all know this. This does not automatically imply that it is secure. Especially in cloud native environments. Anyone who's done any development for any period of time knows this. You just can't take that for granted any product that you choose to use, any library or anything you choose to pull into your project?

It's always going, there needs to be eyes on it to make sure that there isn't anything in there that's going to cause your organization that you work for a problem. Also, you can't take efficiency for granted how you're packaging, your application or service into [00:11:00] containers will make a huge difference on both fronts.

You will learn as you, build containers and get more experience with them. You'll learn what makes a difference in what doesn't. But there are some pretty straightforward items that you can look at to make sure that you. For example, making containers that aren't absolutely huge bulky that are really hard to ship.

Really hard, to pull 'em down when you need them, things like that.

But before we talk about how and where container images are involved in our development and delivery process, let's talk about what steps are involved in a typical pipeline. So a lot of you probably in this audience, your developers yourself the pipeline itself can be pretty complicated. This is just an example of what I see in our corporate decks all the time.

This is, it just goes to show all the different steps that need to happen for a software to [00:12:00] be delivered. You go all the way from your developer checking in source code to that source code being pulled into a CI server and then being built. Both of those points, you might be reaching out to remote repositories to pull in, open source libraries or other libraries that you need, that your application depends on.

And then, going through all of the way to, automated deployment methods, things like that, what's missing here in this particular diagram is all of the steps that need to happen after an application goes. And is deployed that would include, monitoring other operation tasks making sure things get updated appropriately.

Maybe dynamic scanning. That kind of stuff, but today we're gonna focus on the steps that happen up to a deployment. Containerization of an application is not reserved for just the operation side of things. I hear that argument sometimes that, why would a developer be involved [00:13:00] in that?

That's really, a way that the application is going to be deployed and served, but in truth, Putting your application in an image is part of the build process. So a developer really does need to be aware of how that's working and what's going on also, just knowing that you're going to be using containerization or that you have a cloud native environment that you need to consider.

This is gonna affect your initial design decisions. We saw this when, microservices exploded and there were all of these different ways to split up an application. You can have, reliability you can scale it differently. Maybe a front end is scaled differently than the back end, things like that.

So here's a simplified version. Let's get rid of that previous screen. That was pretty busy. This is just a simplified version of the pipeline all the way up to deployment. Where in these steps from development to continuous integration testing, To deploy, where should we [00:14:00] care about containers? So in the development side Devs, design the code.

We build the code, we test the code, even if it's just sanity testing or just making sure that the feature we just added actually works. We troubleshoot things in order to address bugs and make updates. And then we repeat this process. This is our life every day. In that process, of course, is the build.

Containerization is part of that. It's also part of deployment. And I say, even at the beginning, a development is interested in deployment because you need to be able to reproduce problems that may require being able to run a specific version of the app in a container. And then you may Need to dev test or sanity, a new feature that also might involve deploying that to a development environment or your local machine even.

And it makes sense to deploy the same way as one would in a production [00:15:00] environment. Consistency helps eliminate a lot of problems. And of course this deployment is going to involve packaging in a container. Continuous integration. Artifacts are referred to here all the time. This is where, source code is merged updates are merged together.

New artifacts are built based on that. There's automated unit testing going on in here. Artifact storage when testing and building is complete and successful. Perhaps alerts are sent, build failures happen here. And then that is repeated. Build server is pretty busy all day, every day. It's our robot that keeps us running, keeps all of our team members in sync.

This is where we are really concerned about how our containers are built in continuous integration, this should be happening. This is where your artifacts, including a container image will be stored [00:16:00] for later steps in the pipeline. Testing, first thing you need is to pull that artifact, pull that image and deploy it somewhere so that you can test it.

This particular stage of focus on, integration, testing, how this container once it's launched from a container image, how it interacts with other components in the application or service, things like that. You can also, go through a time where, if testing is satisfied, whether that's automated or manual, you may want to promote this artifact now to further along in the pipeline to prepare it for a deployment to production.

And that's where we go to release. You may have a release process that this is another round of promotion, perhaps. You may be creating a release bundle in order to distribute it to clients or distribute it to end points where it's available. Finally, we have deployment again, when you're deploying, you need to be able to retrieve that artifact.

That artifact again, would [00:17:00] be your container image, which you intend to launch into your projection environment as containers.

There are plenty of places to be concerned about in your pipeline. Definitely show that, but in my opinion, these are the two that we really should focus on. The development stage and the continuous integration stage. Most of our security and efficiency concerns with regard to containers can be addressed here near the beginning of your pipeline.

This is the stages Both of them that result in these artifacts that we discussed the container images that will move all the way into production. This is where that container image is produced.

Let's talk about dependencies. If you're familiar with developing anything, I don't care what language you use what type of application most of the time. We are going to be [00:18:00] pulling in libraries that we have not written ourselves. Developers are pretty clever that way. Our applications and services are very complex today and we're able to create them faster and faster because we aren't reinventing the wheel all the time.

We are using stuff that other people have built that we've determined, serves our purposes. We pull those in as dependencies. Libraries that our application is based on. And then we write, code on top of that, of course, to use those appropriately, those dependencies that we've pulled in, have their own dependencies.

And you can imagine this can make an application pretty huge, pretty full of things that a developer may never have been involved in developing at all, reading that. Really important to make sure you're paying attention to this containerization building container images is a whole nother level. Not only do you have your application. That you need to pay attention to [00:19:00] dependencies. Now you're building another layer, another packaging around that could have its own dependencies.

Now you've gotta be considering OS packages. You need to be considering base images or parent images that you may be pulling in and building on top of this can be seen in Docker files. Using a talker file is pretty common. Definitely start with that. There are other ways to build without dock files.

There's lots of tools and frameworks out there. I'm gonna focus mostly on a dock file just because that's pretty common. That's where everyone a lot of people start with building containers and it's a pretty, pretty standard way to represent the blueprint of containers as they, before they get launched into product.

So you can use Docker desktop for that. Obviously Docker, desktop depending on the size of your organization it's going to require some money, some, a license for that, but it could be worth it considering they give [00:20:00] you a lot of updates all of the time. You don't have, a separate maintenance team that has to maintain that when you bring in other open source projects and stuff, of course you can make them work.

You can, use them. But it's going to require some maintenance, just make sure that you're accounting for that. If you choose something else. And another good example or an alternative to use is build a Build is primarily for a Linux environment. But really good to step into and use if you're already in a Linux environment, not as easy to use when you're on a, Mac or windows machine, which most, a lot of developers are on those as well.

Docker desktop has, pretty consistent deployment across the way across Mac and windows and Linux. You can choose not to write dock files as well. I have met developers that are pretty averse to learning how to write them. It, you can get yourself into trouble. It is something else to put on your plate.

There are ways to build without dock [00:21:00] files. Build packs is one, but. I would encourage you, even if you start with build packs, I'd encourage you to start learning how to do it with a Docker file, just so that you can customize your images a little more. You may find that an image you've built with build packs, maybe a different size or include different things than one that you would write with a Docker file.

So you do have a little more control when you're using a DACA file. Also build plugins. I'm a Java person. So used a lot of build plug, build plugins over time, both for Maven and Gradle. Jib is a good example of one. And then spring boot, Docker plugin is also a pretty good example. These also have their own methods of how they actually build the images.

Jib does a pretty good job of splitting up like a fat jar, for example, splitting it up into different components and then placing them in different places [00:22:00] in the image, creating the layers at different points so that you can take advantage of caching a little bit better. Docker images are built in layers and if a.

Earlier layer hasn't changed. It doesn't need to be regenerate. You can utilize the TA the cash that's already on your machine or on, even on a build chain build machine. And not having to regenerate layers is pretty valuable. It can save you a lot of time. You can really optimize your image, building experience by using something like jib spring boot, Docker, plugin, it actually uses.

Build packs PTO build packs to be specific. So just because it's a plugin, you put into your Palm file, make sure that you've done your homework and understand how it's actually building under the covers. All right. When do you build, obviously during active development, a developer, maybe building these images all the time.

You can argue that it's not necessary. You're not interested in [00:23:00] deploying. You're just looking at a feature you're just, making some changes in the base code or whatever, or, the base application code, not interested in building the image and encourage you to do that. I have been in plenty of situations.

Someone has made a change to the application code. They didn't consider even just sanity building and running on their machine just to make sure that it doesn't, horrifically fail and it does. It happens anytime you tell yourself, oh, this is a simple change. It won't hurt anything.

It likely will. So go ahead and do that build do your teammates a favor and don't check something in that will immediately fail when they pull it. During continuous integration. That's an obvious one. Your build servers are going to be building over and over again other times. We'll discuss that in a moment.

I don't think there should be other times where you're building images. Again we'll bring that up again later. [00:24:00] All right. Since Docker files are pretty common, pretty widely known out there. Let's just take a look at an example, Docker file and walk through some issues with it that you might have in your existing Docker files or issues that you might find in examples.

This is a contrived Docker file. Of course you can probably tell that right away. It's just written, especially to illustrate some points to consider when you're building container images. If you were to go online and look for working examples of Docker files, you'll more than likely find Docker files that suffer from some of these issues.

We'll talk about. And examples online are meant to be just that. They are simple examples for demonstration. They are not necessarily production worthy. You've learned not to just copy code from stack overflow and never look at it again. Do that with container image Docker files as well.

Don't just copy paste without understanding what's actually happening behind the scenes. Let's walk through this one and pick out some [00:25:00] of the issues. Obviously not this won't be an extensive lift list, but this is the common ones that I find. First one, you see that top statement, the, from statement, this particular image is going to be built off of a base image.

So Docker files work with a hierarchy. If you don't have a base image, then that first line would be something like from scratch. Meaning there's nothing else. It's this is the starting point, but here we are ha actually pulling in a base image that perhaps has stuff in it. We already need. So that we can keep our Docker file meaningful to our team in particular.

Keep it short. This is an untrusted parent image. Obviously these aren't gonna be named. Obviously a problem it's untrusted. What does that mean? Docker has a dedicated team. Helps maintain official images. These official images are ones [00:26:00] that are open. Anyone can look at them, you can see what's in those images.

They pay, they make sure that these images are keeping up with updates. When vulnerabilities are discovered they make sure that there's a process there that these are, these get updated in a meaning in a decent amount of time. And that they're, actively monitored just for fun.

I, I actually wanna show you what this looks like. It's one thing to say, use an official image, but another to actually understand what that means. If you go to Docker hub and let's just pick a base image that is pretty common. Alpine's a good one. And they're labeled like this. You can see Docker official label here.

Just because it's official. I still want you to go further and make sure that you understand what is in this image. And one way to do that is if you just search for Docker official images scroll down until [00:27:00] you find a link that is a GitHub link. This is where you're gonna find the actual Docker files for these images.

So you can see how they're built. And there is a this is the GI hepo for all the official images. In the library directory, you're going to see all of them that are available here. We chose Alpine. Let's go ahead and dig down in here and just see what it looks like. Make this a little bigger.

There's all of these are pretty consistent. You'll see the same information in each one of these files here. You will see a get repo right at the top. This is where the image is managed. Let's go ahead and check out what that looks like.

All right. Different official images can be organized differently. Pay attention to what branches are available. In this particular one, the branches represent different versions. Let's pick just, the [00:28:00] latest version of Alpine in here that we can find. And then these are, the OS specific images.

Let's dig down into this one here. We find a Docker file. If you look at this Docker file, this is truly a base image because it has this first line from scratch that I talked about earlier. Not all official images are base images. Some may be, coming from other parent images, in which case you'll need to repeat that process again, to figure out, everything that's in there.

So do your homework once you've done it and you trust it, go ahead and use it. But first things first when you're choosing a base image, make sure you know what you're including in your containers.

Okay. Moving on lines two through four there's a couple of different problems here, [00:29:00] so it turns out our base image. In this case, doesn't have some of the packages that we need, some OS packages. And so we go ahead and take the time to install them here. The problem with doing this is these packages that we aren't specifying versions.

It the next time you have to rebuild this image. You might get some D later version of a package, and it's very possible. I've seen this happen before where that latest version breaks everything. And sometimes it takes a while to figure out what changed between one build and the. To make everything break really frustrating, especially when you're a developer.

And you think it's you think it's something you just checked in and it turns out that it's a new build server, fresh cash. It's rebuilt the image and it has newer packages on it than everything else. Line four has a package. The image is specified, which is, or the version is specified, which is very good, but [00:30:00] it happens to be something that was not kept up with it's old.

It has vulnerable stuff in it. It needs to be updated and just hasn't. So another issue there, make sure that even though you're specifying images, you can't stop there. Those constantly need to be monitored and updated. When appropriate I'd encourage you to. Update those one at a time as you go through your processes with building your software, you don't wanna introduce too many variables to, make it a pain to troubleshoot, to try to figure out what changed and what started breaking the build.

So be mindful of that, but always make sure to include time to do that. Okay. Number six, this could, this is a copy statement. This is basically copying everything in your working directory, moving it to the demon context that is used to build your image with Docker and then copying it into the final.

Image problem with this, is it copies everything you know how in source control you have [00:31:00] a get ignore file. There's also a Docker ignore file that you can use to prevent this reasons you care is it takes forever. You're copying things that you don't need. There may be test stuff. There may be logs.

There may be configuration stuff that's specific to your development environment. There could even be secrets. Think about all of the dot directories, your dot get directory, for example, that doesn't belong in your final production container image. What you want to do is make sure to eliminate all of those in a dot Docker, ignore a file.

Moving on number seven. I see this a lot. This is relying on an external resource. I see curl statements. I see, w get statements. It's one thing. If this is a location or a script that you control and that you manage, but the moment you introduce something external like this, that you don't have control over, or you don't control the [00:32:00] times that it gets updated.

That's a big problem. I've had this happen before. This script could be updated. It could be updated in a way that is no longer compatible with how. Are building your application, putting it together, it could be deleted. It could be moved to another location. And you don't it's irritating to find that out.

Especially in, in your build server, just all of a sudden won't build anymore. Cause it can't find this resource. Then you have to go track it down, then figure out if you've got the right version, the right one it's a pain. So what I suggest is instead of relying on a curl statement or w.

Whatever resource it is that you need to need for your application, pull it in internally and store it in your own repos. That way you manage the updates of it. You manage where it's at. You have a little bit more control. Lastly the last one I'll talk about is line nine. There's a start script that when this container launches, this start [00:33:00] script is called.

It's gonna run as route. Unless you designate or create a group and a user in here and then run that start script with that user it's gonna run as root, not the best idea follow that principle of least privilege. Make sure that the script only has access to things it should. If you need to run as root, make sure you have good reasoning for that.

Don't just do it by default.

So again, base practices, just a quick summary use, trusted or official images. Don't use bulky images. I say that one because sometimes a base or a parent image could be used. That includes Maven, or it includes node, NPM stuff. These make your images pretty bulky and pretty large, and you don't need these package managers or build tools in your production image.

It doesn't belong there. It just makes your image bigger. So one thing you can do is use multi-stage build. This is a way where you can do the build in a Docker file, but then you [00:34:00] use a, you can transfer the results of that build to a smaller base image and be able to do it that way.

Specify versions, of course, use a Docker ignore file. I worked with containers quite a while before I even knew that file existed. Now, so you have no excuse make external resources internal. And then of course do not run processes as route. Okay. We talked about some tools that you can use that use Docker files.

Obviously Docker desktop is a good one. We talked about it not being free but consider the advantage that you get with support. And it's consistency and installation. Build a, again, there's a link here for build. It is intended for Linux. Docker is not required in order to build images using build, but build does not include.

Everything you would want as a developer for starting and managing containers on your machine. You'll need to use something like pod, man. They work very well together. Use pod man to [00:35:00] start and manage your containers.

If you just hate doc files, you just don't want to use them. There are options available. Understand how they're actually working. Here's a link two build packs. They are basically opinionated builds. It's the build pack that you use is determined by the type of app you're building.

So for example, a Python build pack looks for a setup dot. P Y file Python file or requirements that text file a Java, a build pack is gonna look for a Palm file perhaps. And then the build pack goes, you go into a build phase and that's when you might use a package manager like Maven or PIP install, for example.

These are, pretty widely supported. The cloud native build packs project is part of the CNCF. There's a specification there. You need to use a tool called [00:36:00] pack CLI in order to utilize build packs, you can configure it in different ways, pay it. There's nothing like reading the documentation on this stuff.

There are things you should con configure like what registry you're pulling from that kind of. Build plugins. We talked about jib a little bit spring boot, Docker plugin. They're also very simple to add to your existing build file that you're very familiar with as a developer. Jib is interesting.

It builds and pushes an image to a registry. So you do wanna configure that, make sure the registry is appropriate. I'm a little iffy on that pushing part, just because I don't think a developer should be pushing images anywhere. Unless it's a dev only specific place that's, one option, but that's certainly not something that you would be promoting or moving along the pipeline that would be just for dev purposes or, research and development purposes that kind of.

Oh, another thing about jib pay attention to the [00:37:00] defaults jib. Actually the default has assumed to be a distr image. Distr images are you can Google for those. They are there's many that are built by Google actually. They are custom based images that are as slim as possible, as small as possible with only the absolute tools that you need.

In order, for certain types of projects like Java or so these are very small images. That's the default that jib uses. So if you don't wanna use a base image, that's a OUS image or a OUS image, doesn't have everything you need in it, then you're gonna need to configure that to use a different base image.

And then lastly, we already discussed spring boot, Docker plugins. I use the Pheto build packs. Convenient, but just understand how build packs works. One thing about build packs is, there's like intermediary images that need to be used. The the build images. These are external resources.

So you might find it valuable to [00:38:00] make custom build builders for yourself and pull those into your internal environment rather than constantly pulling in. A new version of these build pack images.

Oh, let's see managing our containers whenever we're building our container images or we're pulling them for purposes of launching a container in a deployment environment or something. We need to get these base images or our final production images from somewhere. Where are you storing them? This is the first line from that docile we looked at earlier.

Obviously we're gonna change that to a trusted image, but you also might wanna specify a private registry by default. If you don't specify a registry, the default is going to assume Docker hub. Even if you're using an official image from Docker hub, it would be good for you to bring that image into your [00:39:00] internal environ.

And manage it there. There's a couple of different reasons for that. One is the way images are tagged aren't I don't like tags how they are. They're not real trustworthy. They're pointers and they can be overwritten by accident. You might even wanna consider using, a SHA or something to really designate what image you are using, but to protect yourself if you've got good processes internally I would bring.

Internally into your at least as a cash or something in your internal environment.

Remember when I said we shouldn't really be building images anywhere else. Other than those first two stages development and continuous integration it is best practice. Really. Once you start testing an image and moving it further along the pipeline to production you're, you need to make sure that what ends up in production is actually what's tested.

So if you rebuild that image in between, [00:40:00] you've you've missed the point. I've seen examples of projects. One is like Conoco, for example, it can actually build an image within a Kubernetes infrastructure. That's good. For some instances, maybe you would wanna do that in a continuous integration environment.

But. Doing that in production is not a really a good idea. Because you're rebuilding something at, there could be something you missed. When you rebuild, you don't know that you're getting the same stuff. So instead of rebuilding, make sure that you're promoting an image. This might mean moving that image from one registry to another, you may have a registry that's specific for product.

And only production services have access to that registry. And only that registry this way you won't do, silly things like having your production servers reach out to a test registry and accidentally deploy something that wasn't ready yet.[00:41:00]

Scanning, this is the last part we'll talk about securing our containers, obviously. JRO x-ray is pretty popular. There are other tools out there that you can use. For example, Amazon uses an open source project called Claire. Claire's actually managed under qua, which is, under a red hat that provides scanning capabilities in their ECR private registries.

Another example would be well Docker hub. They partnered with sneak. They provide some scanning static image scanning in their Docker in Docker hub. These are other good examples, but you should be using these scanners. Everywhere in your pipeline, not just one spot. You should be scanning before you check in.

You should be scanning after CI builds during and after testing scan at the very end before you deploy, then also AF even after you've deployed scan periodically and on demand because things happen. Things come out, [00:42:00] vulnerabilities are discovered all the time. So this is a process you wanna repeat multiple times throughout your pipeline, and even after a deployment.

Several options for you. One, I wanna show you that is really cool. And I like this just cuz it works very well with my Palm files. I'm gonna show you my IntelliJ real quick. So here I have a project that I brought in and it has a Palm file and I've connected it to JRO x-ray and I can get immediately, information about some of the problems with this spring boot starter test libraries I dependencies I can find out more information.

This is pretty small. But you can get some detailed information where a fix might be that kind of stuff. The really cool thing about this developers it's a big ask for you to determine [00:43:00] whether a problem is real or not. This is definitely something for a security team. , but let's say you see a bunch of problems.

You don't wanna, go investigate each one, but you are immediately aware that there are updates available out there. You might wanna take the time, go ahead and just change your Palm file. Get the latest update and you can get new information and discover that, maybe you're in a better place.

No vulnerability to work out. It's pretty advantageous cuz you can do this even before checking the code in saves everyone a lot of time. Another example of something that you can use, if you happen to be using Docker, desktop, they have extensions available. There's quite a few extensions available now.

These are interesting. This one is the JRO x-ray extension. You can also view vulnerabilities. This basically you take anything that's on your local machine and you can scan it. So if you've [00:44:00] been working in your local Docker file, for example, you've, you're ready to, build new images and you wanna check those changes in, you could actually build your Docker image right then and there and scan it right then and there before checking anything in pretty helpful

with any of these. Make sure you understand where the source of information comes from. Whether it's open source, whether it's a paid service there even might, there might even be differences in like subscription levels. Make sure that you understand what level of protection you get, because all of this information come from databases behind the scenes.

It's good to know. Who's updating these databases. Who's managing these databases. All right. Here's just some other options for you. Oh frog bot is interesting. That's for scanning and GitHub repos. There's quite a lot of other options out there too. That's helpful too. You've got your source code right there.

You might as well start scanning dependencies [00:45:00] right there. Lots of options. We have no excuse to be putting some of this into our pipelines. Okay, that is it. I think I've filled you with a lot of information. You have a lot of homework now to go look at your own pipelines and your own dock files.

Make sure you don't have any of these problems that are obviously fixable upfront. Yes.

**Brian Rinaldi:** If there's any questions I muted hi, Melissa. That was really great. We did have one question. I have some questions on my own, but folks, if you have any questions, we have a few minutes here that we can ask Melissa, any questions about her presentation? I, and there was a wealth of information, especially for me.

I gotta admit I'm like, not necessarily the most experienced I've used Docker here and there. I've realized. A lot of services I use actually wouldn't even exist without containers cuz how we deploy our applications now like as is as, even as like a front end developer, it's like all of this [00:46:00] ecosystem wouldn't even be here if it weren't for containers.

Things like Netlify as an example, right? It's all containerized. So I often outsource my containers to somebody else. Who's maintain who's doing that stuff, but. But I really loved the part where you went line by line. Cuz I think that cuz I was even gonna ask you, cuz you talked earlier about going through and investigating what like the base images and things like that of containers.

And how would somebody like if you're particularly somebody like, say me, who's not that experienced, identify those problems and I. You covered that in, in that, are there other like glaring examples? Is it, or would you use a scanner to identify those problems in the base images?

How are how would you

**Melissa McKay:** approach that? Yeah a scanner's a good place to start. I would start that immediately. Without even making any changes, just start there and see what you can find. Oftentimes you'll find, base images that, maybe using a old version of a BTU [00:47:00] or an old version of Java was installed or something, something that has obvious problems in it that you didn't even, you didn't write yourself, but they are there sitting in your container.

One thing that I've seen is it's not enough to take your Docker file and use it to delete stuff. Like you can run, you can do anything. You can run a shell script, you can delete directories. You can do any of this stuff in a Docker file. But the problem is because of the layering that happens, that stuff still exists.

You've just tacked on another layer where you can't see it. Immediately, but it's still there. So if you run into those problems where you have a base image, you can't use because of a vulnerability, it's not enough just to remove the vulnerability in a later layer, you need to rebuild the base image.

So scanning will reveal a lot of that. [00:48:00] Reading the Docker documentation is really helpful. I think more and more, we'll start pointing this stuff out because what I said and this has happened to me, I've stumbled because I'll use an example thinking that it's good enough when in reality, you just, it's not something that is safe to put in production.

There's a lot of efficiency stuff, learning, learning about layers. That's really important. Start there. When you start installing other. Other OS packages, you might wanna keep all of that in one line, for example. Yeah. I would focus too on your processes that happen before you even containerize.

X-ray will go deep into the layers and actually discover problems within your application. So even if all you've done to container eyes is copy a jar file into a container and then run. It will that kind of scanning will find problems in your application. So make sure you're dealing with those so that by the time you're [00:49:00] containerizing, you're mainly concerned with OS packages and base images.

**Brian Rinaldi:** cool. Okay. Good advice. So I've got a couple of questions from the audience. One is out of curiosity, what do you or your org team use to run containers locally and to build images?

**Melissa McKay:** Oh, to run locally. I honestly, I use dock desktop. I like it. Mini cube is good. That's a good one. When it comes to needing to launch, multiple containers or dealing with any problems that might come up with scaling we've got development environments that we deploy to and those have Kubernetes backing them.

So , that's

**Brian Rinaldi:** what we use. Okay. Okay. Good to know. And then actually we can end on this question cuz it's not really related to containers, but it's okay. But the somebody asks, is that a guitar in the corner [00:50:00] next to ?

**Melissa McKay:** That is a cello. a

**Brian Rinaldi:** cello. Are you

**Melissa McKay:** a cello back there? It's actually my daughters.

She was a cello player and it's funny you bring that up cuz she just bought a guitar last. So she's ready. Oh, okay. yeah.

**Brian Rinaldi:** She's moved on from the cello,

**Melissa McKay:** yeah. Yeah. So it's been sitting there for a while. I keep wondering if I'll break it open. I have in the past right now it has a broken string, so I need to get that fixed, but

**Brian Rinaldi:** okay.

It's funny what people notice, somebody obviously was curious. Okay. And for what it's. They were excited by the fact of it being a cello. So that's great. Cool. all right. Melissa, this was fantastic. I definitely learned a ton. I think you had some great advice. I think I would bookmark this and go straight to that section where you start digging into that file.

I think that's like a reference for folks. I don't know. Do you have it out there

**Melissa McKay:** somewhere that they ? I do, actually. I was. Let's see. Okay. So the top link right there, [00:51:00] that's actually a full on talk that I've done at another conference that goes through some of those items line by line as well.

It's might be a better visualization and there's some extra stuff in there too. In addition to what I talked about here, so excellent. Okay. That one would be a good

**Brian Rinaldi:** reference. Excellent. That's a, that is a good, okay, good to know.
