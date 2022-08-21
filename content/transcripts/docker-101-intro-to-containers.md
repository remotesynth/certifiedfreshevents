---
_build:
  list: false
  render: never
---

**Shy Ruparel:** [00:00:00] Yeah. Hi everyone. I'm really excited to be here. I've got a couple slides to run through, and then I figure we could maybe spend some time doing some live coding today. I'm always a big fan of doing code. Live. But that does mean that things might break. Hopefully it'll be like a good roller coaster where it's all positive rather than having, a scary bumpy bit as well.

So let's talk about, let's talk about software containers. I guess I should probably tell you who I am and why, I'm, why I'm qualified to talk about software containers. I'm shy. I'm a senior developer advocate at Docker. I've been here since January. And so I'm still in my like learning phase of learning everything about Docker.

And I'm really excited to get to teach you all, everything I've been picking up. I used to be really into front end stuff. My, my last gig, I was doing content management APIs. And so I was building a lot of jammed. JAMstack stuff and doing stuff with Netlify as well. And so coming to Docker has been really fun for me because it's [00:01:00] been a totally new skillset and a totally new set of things that, that I've been learning and I've been getting to use.

Throw some emojis in the chat if you've had this problem. And I know we've got a little bit of a delay with with the stream and the chat. So I won't be able to react to your emojis live, but but hopefully everyone else can. But yeah. Raise your hand or give me gimme a concerned emoji, if you've had any of the problems that, that I'm talking about in the next couple seconds.

First off you've built something and it just doesn't work in the cloud. Like it does on your local machine. Maybe, you have a different operating system. Maybe you're physically working with like real servers instead of cloud servers. And, you have to go install operating systems or upgrade the machines or make sure you're using the same.

Version management, and it's a whole, it's a whole thing to keep all of this stuff in sync and keep all your dependencies working and configured and it can be a pain. And that's not even accounting. If you want to change clouds at some point, or accounting for the fact that [00:02:00] maybe, you're having version updates on packages you use or operating systems that you.

This is a bummer of a problem, and there's a lot of complexity and things. You gotta keep in mind to keep all of this stuff working and in sync and up to date. And yeah, so I wanna talk about how we can solve those problems, but before we go in there, I want to take a brief tangent and talk to you about shipping.

And I love this J I have a lot of model trained JS just as a tangent and they're the best. I love any excuse to show off model trained JS. So back in the olden days before, before color TV was invented when they were using wind in shipping, for the boats and stuff back when they did packaging, there was no consistency in like how goods or services were done, barrels of radioactive waste bags of coffee, barrels of rum, different size boxes.

And it was a whole, it was a whole disaster to, to make sure everything fit consistently on boats. And you had all sorts of different [00:03:00] ways. Transporting things. And they all have different requirements of like how you size things or how you made things. And so it was a whole hassle to get goods and services around the world.

Modern days. So we have color television now. Modern times containers have been standardized as a consistent way to do shipping around the globe. We have this standard container and it's the format that's used by about 90% of cargo across the world. You're able to optimize these these Transit devices around this format.

And, regardless of if you're using a train or a boat or a, storing it in a port or using a truck you have a general sense that this container format will just work and you don't necessarily have to worry about it being accepted from wherever you're sending it off to wherever it's going.

You just open it up, you fill it with what you need. And then it goes so it's really useful and you might be thinking shy. That was an excellent tangent. But how do you, how is this relevant to this talk about software containers? And Docker is set [00:04:00] up in a similar way. So rather than, taking all of these different things, your different operating systems and your different codes we take all of this stuff and we put it into a container.

And so we make those containers easy to deploy and push out to different places. They're reusable. So if your container is using Hutu and then flask and installing or lots of dependencies. It'll reuse things that are already there. So if those dependencies are installed in a lower section of the container, it'll be able to take advantage of them.

You'll be able to know that things in your container will just work. This thing is gonna be shipped with everything that it needs to run, how it runs on your personal machine is gonna be consistent to how it runs on the cloud. If you work in an engineering team where some people are using.

Windows, some people are using Linux. Some people are using max. It can be a whole thing to, to do deployment across operating systems and using containers just gets rid of that problem for you. You don't have to necessarily worry about it. So software containers are here to save the day. They let you [00:05:00] package up all the code and the dependencies as well.

And I think I already covered this. So I got a little image of kind of how they look and they run consistently. And we have a bunch of, pre-made stuff up on Docker hub. Things like base images programming languages, data stores. So you don't necessarily need to install my on your machine or build a, my container on your machine.

You can just go deploy the, my container off of Docker hub. And those are maintained generally by either Docker or the folks building things themselves. I know the no JS container is being maintained by the folks doing no JS development. You can be pretty confident that, as you pull it it'll stay up to date and it'll keep working.

And so Docker ho is a nice way to keep track of that. So I think that's enough PowerPoint for me for now. And we can go ahead and switch into some live coding. So let me go ahead and exit outta here. As well and let's get started. So I wanna show off one of my projects that I built. I'm a big fan of of [00:06:00] tracking like big data sets and.

Not to be too on COVID today. But one of the things that, that I built was these ING screens and I have them right here in front of me. They're ADA fruit ING screens. They're the they're called mag tags. They use this E S P. 32 micro controller. So it's a micro controller that connects to the wifi and can then render things out on the ING screen.

They're like 30 bucks on the ARU website. I love these things. I think they're great. I have a lot of them in my apartment. But one of the things I'm using them for is to keep a general sense of how vaccinated is the world? Cause it's just something I'm curious about. So I built a little FLA gap that I deploy with Docker onto a raspberry pie.

So one of the problems with these ING screens is that they only have two megabytes of Siam. On them. So they don't have the, a ton of capacity on them. And the data set that I'm using is being provided by this organization called our world and data. And they're great. They do a lot of compiling, they [00:07:00] put things together and they like consolidate all sorts of different data sets from across the globe.

It's a global data. Right now data is being put out by sorts of different entities across the planet. So in the us, it's the CDC in the UK. It's the NHS, there's a bunch of NGOs that are collecting this data and keeping on top of it. And so our world and data just takes that out and they compile it all together and make it, make it available in an easy to read CSV for us.

One of the problems I have with this CSV besides how great it is that it's a huge file. It's a 32 megabyte file which again, might not seem huge to you, but since I'm doing a bunch of IOT stuff, I don't have 32 megabytes to spare. I can't bring this file into memory on these bag tags.

It's just not gonna work. They're just not gonna be able to handle it. And even if they could traversing a 32 megabyte, CSV is gonna take forever for my raspberry. So instead of using a CSV or instead of, directly connecting to it from my mag tag, I have a web server that I've spun up using [00:08:00] flask.

And I think we can go take a look at some of that code right here. So this is a fairly simple FLAS gap. And I went ahead and I can run this on my local machine pretty easily. It runs with just a glass run. Oops. Yeah, I can get it going on port 5,000 fairly easily. And I'm running this on my MacBook, so the API is online.

So let me go ahead and make this a little bigger. Yeah. So the API is online and I can go and hit specific end points. If I wanna. Like the USA data set or something like that. I can pull that. This is a fairly basic FLA gap. It's fairly simple. It doesn't do anything too crazy. But I'm gonna go ahead and I'm gonna package this up and I'm gonna make it containerized.

And so I can do that fairly simply. So I, all I need to do to get started is to build a Docker file. So I'm gonna create a Docker file here in this repost. So save it as Docker file. And one of the nice things [00:09:00] for folks that are still learning Docker or are new to this kind of stuff is we've got a bunch of documentation on how to get things done.

We've got language guides and I always really like to use this thing called awesome compose. It's a repo that we maintain that has a bunch of templates, of all sorts of different setups that you can use to get get going. So in this instance, I'm just doing with FLAS. But if I wanted to do like a, an engine X node, Redis implementation, this is already set up.

It's a blank template and I could download it and I could get started. So here I can click into flask. I can click into the app and I can look at this Docker file as well. And it's got a general outline of what I need to get started. So first off, my first decision with with this Docker file is gonna be what do I want the image to be?

So I'm not gonna build this from scratch. I'm gonna build on top of something that already exists. Now, what I want to use is I'm gonna use something Python E so here, we've got the Python official image. It's maintained by the Docker community. So it gets updated fairly frequently. So I'm gonna get started by [00:10:00] using Python and with this project, I believe I'm running it on.

I can't see my. Yeah, so I'm running it on three 10, so we can go ahead and we can pull a three 10 image and we've got a bunch of different options here. We've got three, 10 bullseye. We've got three, 10 slim. We have a different level of like granularity with how much we wanna stick to things.

So if I wanna stick to 3, 10, 4, I can do that. If I'm fine with just any three, 10 version, I can do that. And if I'm fine With just, a generic three release. I can do that too. And I can pick what level of granularity I want. So I'm gonna use this three, 10 slim image. I like slim images because they're a lot smaller than the general Python image.

So by using this, I'm gonna be cutting down from about a gigabyte. When I make this image, when I build my image down to about 200. Which is gonna be really useful for me to save space. And especially since I'm planning on deploying this application on a raspberry pie it'll help keep things [00:11:00] manageable for me.

So to get started, we can do this I'm gonna do from and pull up vs code from. So my base image Python. Yeah. If I can spell. Hardest thing about computer science and being a programmer is spelling by far three dash slim. And then I'm gonna want to go ahead and let the container know, Hey, this is the port that whatever's running inside of the container is gonna need to expose out to the world so I can expose port 5,000.

And then I'm gonna set the work directory. So this is gonna be where all of the code that I run or copy over into this container is gonna sit so I can do a work and I'm gonna call it app. Now I need to think about my dependencies here. So this container just has a generic Python install. It doesn't have FLAS installed onto it.

It doesn't have any of that stuff. So just like I would do in a virtual environment, I can copy over the well copying over the [00:12:00] requirements file is a thing that I'll do here and I'll copy it into this app folder. But I can also go ahead and do an install so I can run PIP and I can install my requirements file.

So this will go ahead and take care of installing all of my dependencies for me. Next I'm gonna go ahead and copy all of my source code into the container. So I can do that with a copy dot and then push it over into this app directory. And one of the things I don't wanna do is I don't wanna bring along my pie cash.

I don't wanna bring along any of my any of the kind of artifacts that get generated when you're writing code. So I can use this Docker ignore file, and I can add a bunch of stuff in it to. Just, be like, Hey, Docker file. Don't copy these things into the container when you build it.

I want you to ignore these things or skip these things similar to how a get a, get ignore works. So I can copy all my Coda over and then I can actually run it. So I'm gonna run it as entry point. And this is gonna be in JSON syntax. So I'm gonna have to use double quotes and I'm gonna do Python [00:13:00] three.

And then I'm gonna set a command. So CMD and then I'm gonna do app dot P Y. So that's the name of my app for this project right here. So the reason I'm doing this is two different layers is entry point and command. We could actually do either of them. We could do just an entry point or just a command.

The nice thing about entry point is that let takes anything you type in after you run that container and will run it for you. So if I need to do some debugging, I can just use this entry point and maybe run specific files or specific functions. And if you leave that empty, it'll default to putting whatever's in the command section after the entry point.

So when I run this, if I just do a Docker run, this container, it'll run Python three. App and it'll run in this folder. So I'm gonna go ahead and save this. And I'm gonna go ahead and build it. So let me build this for my local machine. And I can do that with a Docker build [00:14:00] command, and I always like to do take a look at the, and let me actually move over to my terminal.

Cause it's a little easier to read and bump up.

Cool. So here, we've got my terminal. And we can do a Docker. We can check where we are. So we're in the app directory. We've got this Docker file. It's all saved. And we can go ahead and we can build this so I can do a Docker build. And I can name it. Like I'm gonna name it, just CFE OIT for this workshop that we're running.

And then I'm gonna tell it where I want it to build. So I'm gonna give it a path which is gonna be in this directory with all my code. Now, this is gonna go ahead and build I have a bunch of this cash because I've run this script on my machine. So it's gonna be a lot faster. It doesn't necessarily need to go out there and download the first version of Python.

Cause I already have Python on my machine, so it's able to go pretty quickly. So there it's built our image and we can go ahead and we can run this. We can [00:15:00] do a Docker run command and we can do it in a terminal or we can do it in Docker, desktop. And I think I'm gonna do this in Docker desktop, because it's a little more visual.

I prefer using the command line, but I think Docker desktop is really great for being able to share things. So I can just hit this play function. Oh, and oh, did that let me configure my port. I don't think it did. Oh, this is a different project. Sorry. That's why that's so here I can go to my C.

Yeah, , that's funny. So I can hit run on this image that I've created and we can see it's only 139 megabytes, which is pretty reasonable, especially since I'm gonna run this on a raspberry pine a little bit, and I can go in and I can name it. So see if the dev I can set a port. So I'm gonna set port 5,000.

So what I'm doing here is I've exposed port 5,000 from the container. And that's because that's what flask is. Flask is running. And I can go ahead and map the port [00:16:00] from my local machine, my local map of 5,000 to map to the port inside the containers. So when I hit local host 5,000 on my local machine, it'll go ahead and map to the container port of 5,000.

And let me just make sure I killed the flashover. Yep. I killed it. So we wanna have a conflict so I can go ahead and hit run. And Dr. will go ahead and spin this up for me. And then I can go ahead and click open and browser and with any luck oh, it opened on the wrong screen. So let me bring this over to the other screen.

We've got local host 5,000 and it's running just fine on my local MacBook. Now I wanna get this running on my raspberry pie. So I turned my MacBook off at the end of the day. It's a, it's a great machine, but it is a bit power intensive. Whereas a raspberry pie is a lot less power intensive. So I feel totally fine just letting this service live on the raspberry pie in my personal network and just running indefinitely.

So my mag tag, whenever it decides to refresh which I haven't programmed actually to go at 8:00 PM [00:17:00] every day. Or whenever I hit the button manually, we'll refresh and it'll hit that Rasberry pie server. And so I don't wanna leave the MacBook on, usually at 8:00 PM. I'm playing video games or I'm doing something gals like in the gym.

And so the MacBook is generally off at that point. So I wanna run this flash server. On my raspberry pie. Now the raspberry pie architecture is a little different than the one on my MacBook. So if I move this container directly over to my raspberry pie, it's not gonna work. What I can do though, is I can go ahead and actually make a build of this container specifically for my raspberry pie.

So what I'm gonna do is I'm gonna do a Docker build and I'm gonna specify the platform. And then I'm gonna go ahead and type Linux arm. Seven because that's what the raspberry pie model B that I'm using is is gonna need I can set the tag and I'm gonna name it shy. Ruel and then flask OIT, [00:18:00] parser.

And I'm gonna give it a tag of arm V. Now I'm naming it this way, because I'm gonna push this image up to Docker hub, and then I'll be able to pull the image from my raspberry pie. So I'm gonna go ahead and build this image. And again, it should be fairly fast because I have it cash on my machine. So I think it should be pretty quick.

Oh, it looks like maybe I deleted the cash. Oh, here we go. It is going pretty quickly. So I'm building it for this version for Myre pie. So it'll just take a second. , so we can chill out here while this is going and maybe I can pull up Docker hub and go ahead and take a look at the version I have already up there. Cause I already pushed a version as well, so we can do. Is Docker dock. So Docker hub.

And so I already have a version up here that I pushed about 20 days ago. So let me go ahead and just push this new version once it's finished. [00:19:00] But one of the things I can do now that it's up on Docker hub is actually, I can take a look at some of the vulnerabilities that are in here. So I push the generic Mac build up as well.

And we can see that we've got a bunch of vulnerabilities and most of these actually just come from the base FLAS or the base Python image. And it would be up to the folks who manage the Python image to resolve them. But some of them might be things that I've done by adding. Dependencies or packages.

And it's really easy to turn this on. All you have to do is head over to the settings and enable vulnerability scanning, and then Docker with the using sneak will be able to tell you, Hey, these are some issues that you have, you might need to resolve them as well. So let's go ahead and see, it looks like it's done.

I can head over to Dr. Desktop. I can hit that image and I can go ahead and push this arm V seven build so I can click and push it to hub. Cool. And so while that's going, let's go ahead and shift over to my raspberry pie. So I went ahead and SSHD into it earlier and I already actually have [00:20:00] this container running.

So let me go ahead and stop it. So Docker stop. And then I can give it the container ID. I can turn it off. This will take a second. So with the stop command, it takes 10 seconds to try and stop things gracefully. And then if it can't do it gracefully in 10 seconds, it'll just kill the process.

So there we go and make sure I haven't lost.

So here we go. And let me bump the front.

So we've stopped it. Now, when I go ahead and reset this mag tag, when it connects to my local network, it's just gonna error out because there's nothing on that server. So let's go ahead and run this process on the MacBook. So to start, we can do a Docker hashtag help, and just let's take a look at what the options we've got here.

So we've got a Docker pull, so we can go ahead and pull an image. So that's what we're gonna do. We're gonna do a Docker pull shy. Ruelle. Flask [00:21:00] O mag tag. Cause I believe that's what I called it. Yep. Oh, OIT, parser. I gonna copy this. I'm gonna cheat copy paste so I can do that. And then I can specifically pull the arm V seven build because that's the version that will that's a push.

That's not what I want. I want a.

There we go. So we've pulled that version that we just go, went ahead and we compiled on my MacBook. It's now being pulled to my raspberry pie. My raspberry pie is actually sitting behind my desk. It's hooked up to a thermal printer, so I can't move it super easily to show you that it's there. But yeah, so this is gonna pull.

And then all we need to do to run it is go ahead and do a Docker run. This will take just a little bit. It's gonna extract the image. There we go. Almost done. [00:22:00] There we go. So we've downloaded the newest version of this image and we can do a Docker run. And so let's see what I've got in my history. So I've got a Docker container start container S so let's do risk command. So I've got a Docker run and I'm gonna run this in detached mode.

So what that means is so when I do a DACA run, I'm gonna attach to the Whatever the container is doing. So whenever we have outputs we'll be able to see them. The downside to that is when I go ahead and control C and close out of that container, it's gonna shut the container down. So by using this dash D option, we're gonna make it, so the container will spin up.

It'll give us an ID. And then it'll just be running in the background. I'll create a background process to run this container indefinitely until it either crashes or I stop. I'm gonna use the dash P option, which will let it know that, Hey, I want port 5,000 on the local Mac or on the local raspberry pie to map to port [00:23:00] 5,000 of the container.

And then I'm gonna tell it the name. So I want you to name this container CF. CFE. And I want you to use this FLA image that we just put together, and I want you to use the R V seven version of it. So it's gonna go ahead and give us an ID. So now we know it's running and I can do a Docker PS to look at what's going on.

So we've got Docker, PS and now with any look, if I reset this thing, so I'm gonna go ahead and hit the button on it. You can see it's aired out because the server was down. So I'm gonna reset it. And while it thinks we can actually go ahead and take a look. My internet browser to double check that it's up.

Something super cool that I learned in this project is that raspberry pies on your local network, actually, as long as you don't change the names or turn these settings off, they actually just map automatically to raspberry pie dot local, which is so useful because then I don't have to manually specify the IP address so I can hit Rasberry PI dot local slash 5,000 and confirm.

Yep. It's running. And then if we take a look at the mag tag, we can see that the the thing refreshed [00:24:00] successfully, which is great. So this way I can leave this running in my background. I'm able to manage the code over on my MacBook. I can write it, I can do whatever changes I need to on my MacBook, and then I can build it in a way that'll run on the raspberry pie, pull it on my raspberry pie and just kinda let it go and have it living on the background in In my network somewhere which is super useful.

I'm super happy with it as well. If y'all have any questions, I would be delighted to hear them otherwise. I think we could maybe share some resources for folks that are looking for Different levels of content. I see the chats as well that some folks are looking for some more beginner content or just general refreshers.

And I totally hear you and I wanna make sure that I don't leave. Y'all There. So my favorite resources for getting started are actually are language specific guides. And hopefully a lot of this ends up being familiar. So I'm a Python dev. So I really like using the Python language specific guides over on the docu documentation.

There's no JS ones. There's Java ones. There's go [00:25:00] ones. So whatever kind of version is most useful or language is most useful to you as well. I think these are great. And then, we can get into deeper levels. If you want to do C I C D, or one of the things that I didn't show, which I think is really useful is this thing called bind amount, which is where, I can build an image.

And when I run that image, when I change my Python code, the image isn't gonna update until I rebuild it. But using bind mounts, I'll be able to have it point to. My original code. And as I change code, the image will be able to reflect those code changes. And so it'll make local development really simple as well.

And so that's something that you can learn in the documentation as well, but I'm not gonna go into it today. Also if you're curious about the repository, I've got that up on GitHub, it's just shy slash Docker mag tag OED for the FLA code. And then I also have the code that's running on the mag.

Right here. If you own one of these, you can go ahead and just copy paste the entire folder into the mag tag. And in theory, it should just work. Assuming you're matching the same [00:26:00] firmware as what I wrote it for it'll work, and you can see it's hitting the raspberry PI server and it's pulling an ISO format.

So the flash server itself is taking that 32 megabyte file. And just only giving us the specific details for the requested ISO. If I do. And ISO data. And if I look at just the world rather than having that huge 32 megabyte file, my raspberry pie is gonna hit that 32 megabyte file grab just what's being requested and then turn it into adjacent format that the Mac tech can eat and and and take advantage of and use without being overwhelmed by the file format.

Let me go ahead and I'm gonna go ahead and just wrap things up with, I have a little question slide that has some links. If y'all are looking for links that are useful. So if you want a shirt or swag or anything like that, you can grab that. But otherwise I am going to take a look at the chat in stream yard really quickly and take a look at the.

Oh, so we got a question from JJ Thornton. Hi, shy [00:27:00] outside of the Docker docks. Are there any other resources that you recommend? Yeah, I do have one that I really like personally. So one of our community champions, one of our community captains, Brett Fisher does a lot of really excellent technical resources.

He has a bunch of really lovely courses that he's put together about using Docker on Emmy. If your work gives you Paid educational materials or anything like that. I think this is a great use to use like an educational benefit on. So let's see, we have a Docker mastery. Yeah. So we got his course, and this goes on sale fairly often as well.

And it's really great. It's about 20 hours of video content and he goes. The very bare beginning all the way up to, using things like Kubernetes and swarm and some of our way more advanced features that, that I don't think I can go into in a one hour, in a one hour meetup.

And so if you're looking for 20 hours of content really recommend Brett Fisher's stuff, I think it's really great. And and yeah, so let take a look. Are there any other questions Jerry says he [00:28:00] loves they love the P 32 board. So this example really works. I'm really glad to hear that I'm a big fan of them too.

I love doing T stuff. I think it's a lot of fun as well. And I don't, we also had that question from, go for it. In ask a question module from Alexis, he asked Fort what raspberry pie model do you. If you can get your hands on the latest one, get the latest one, but they're pretty hard to find.

I think the chip shortage has hit them fairly hard. I think just any of the model the four or the three models will get you far enough. I really wanna mess around with the four, cuz it lets you do 64 bit architecture, which I think is a lot of fun and I wanna play with, but I haven't been able to get a hand a handle on it or a hand on one of them, myself yet.

Your mileage varies, I think, on, on whatever you can access. The only one I would hesitate to recommend to a total beginner is the raspberry PI zero, which is gonna be like a version that doesn't come with G P pins, and you're gonna have to do soldering and stuff to get it powered up and.

[00:29:00] That one's really great for hiding inside like L E D displays or things like that. I really enjoy it, but in my head that's like a very specific use case. If you just want a general thing to like hack on hack on highly recommend the Rasberry pie standard model.

**Brian Rinaldi:** Okay, cool. We also had a question from. Yeah, because yeah, a lot of my team issue has issues with Docker on M one, max, are there any tools or resources for this?

**Shy Ruparel:** Yeah, so we're actually still working on making the M one support more robust. And so my recommendation is go ahead and log support tickets with us to let us know what the issues that you're having are.

So we can make sure to prioritize 'em and get them resolved. But we are aware that M one support is still. Coming. We are actually talking to the apple team fairly regularly as well. And I know we actually just implemented a new let me pull this up in Docker desk, a new setting that makes Docker a lot faster.

Let me see if I can find it. I think it's an experimental. Yeah. So we've [00:30:00] enabled this new fall sharing system, and this is something that we were able to do because they added a patch to I need to actually in turn this back on, I'll do this after the talk. It they added a couple internal like APIs that we were able to take advantage of on an operating system level.

So we're definitely, we definitely hear that M one support isn't where it needs to be, and we're definitely still working on improving it. So make sure to file those tickets and support things so we can and bug reports so we can make sure that we're able to address them and resolve them and they're brought to our attention, but I don't have any specific resources on like resolving M one issues beyond letting us know what bugs you've got.

So we can make sure that we resolve them. We want it to be a seamless experience, on all machines, whether it's Linux or windows or either version of like apple hardware.

**Brian Rinaldi:** Okay, sounds good. And Oscar asks can you show us a little bit more of Docker hub to run projects, et cetera?

**Shy Ruparel:** Yeah, totally. So I really like Docker hub. It's I, in my head, it works a little similar to [00:31:00] GitHub in the, I can push my images up and I can share these URLs with my friends and they can download those images rather than getting source code though. I'm getting generated containers.

So I can push images up and you can pull them down. There's also a lot of really great stuff in Docker hub itself. So we can go to the Explorer and we can see, we have a bunch of different base images and we also have stuff like pre-run programs. So if you wanna run Postgres, for example, rather than having to install Postgres, you can just do.

A Docker run Postgres, and it'll just get started on your hardware. So here we've got Docker run, naming the container, some Postgres setting the environment. So the Postgre default password is gonna be whatever you tell it. And then it'll just go ahead and run and you can just connect to it.

I don't know if I have any Postgres stuff installed on this machine so we can maybe just connect. Oh, cool. I have Posto. Let's go ahead and try it and let's see what happens. We're gonna do it live. I have no [00:32:00] idea how this is gonna work, but we will find out. So let me get off my raspberry pie cause that'll kill it so we can do a Docker run Postgres.

We'll set it detached and we'll also set the port to let's leave the port alone. I'll just use the I'm hoping the default one will get picked up by post co Yeah. So this is a really useful thing that you can use Docker for is find those programs that you need to run locally. And rather than installing them, you can just run them in a container.

And most of these are maintained officially or by verified publishers on the Docker hub. And so you can just get a version running really quickly as well. So it looks like it's done and it's running it's, I've got my ID of where it's running, so you can pull up dock, desktop and see.

See that it's running here and we can go ahead and add a new, go ahead and let me double check that. I dunno, have any real passwords in here.

So I'm gonna go ahead and set the [00:33:00] post, the password to whatever we set here, which was my secret password. And with any luck when I connect, this will just work. So I have some. Connection issues. Is it running on port 5, 4, 3, 2. So check that so I can do an inspect and see where it's running. This is running on 5, 4, 3, 2. Oh. But it's not bound. Okay. Let me go ahead and actually bind it. So I'll stop this and I'll go back to my Postgres image run. We'll make sure it bind it to the setting. Leave it blank. So it'll give me something generic. Looks like it exited.

Oh, because I didn't give an environment variable. So let me do that actually from the command line again. So dash

5, 4, 2, 3, 2,[00:34:00]

commit to something else from Postgres two.

So it's running and now when I connect again, it should hopefully worth this time. Yeah, there we go. So I'm connected to this post scroll database. I had Postgres running in like a couple seconds and that's something that I think hub makes really easily. There's a bunch of different stuff up there. You could just get it running on your machine really efficiently and really fast.

I have a Postgres server running on my machine. I can hit that port and start connecting to it. One of the things I could do is I could also attach like a volume. So rather than when I bring this down and bring it back up, it forgetting everything that's in there, we can give it persistent storage.

So it'll actually store whatever changes I make to the Postgres data dynamically, which I think is really, indefinitely. So as I restart and restart this container it'll maintain my data. And if I mess something up, I can delete that volume and recreate it. Or I can back it up somewhere using time machine or something can roll back fairly.

Fairly quickly, which is really useful. And there's a bunch of [00:35:00] different stuff on hub. I know we've got Plex up here. If anyone runs media servers, you can download Plex. And there's a bunch of different community options that, that various people have made. And then we have the official stuff as well.

That's generally being maintained by the folks that are building the software itself. So like the Mongo one. It looks like we're maintaining the Mongo one. But there's all sorts of different ones across within like the Docker hub ecosystem. Hopefully that shares some more of the cool stuff that you can do with it and why I like it as well.

**Brian Rinaldi:** Yeah, that's really cool. And one of the things we talked about, like just obviously deploying to raspberry pie, but I think one of the, one of the powerful things that, that you can do with Docker is. Share your development environments where whereby, oh yeah. It used to be really complex to okay, you're coming on board.

We need to onboard you get you set up. It's spend a full day, at least maybe more setting up your local development environment. Whereas in this case you can just okay, everything's in this container and you just work off that.

**Shy Ruparel:** [00:36:00] Yep, exactly. Yeah. And you don't have to, you don't have to, don't have to worry that things aren't gonna work on different.

Regardless of what you pick. Exactly. Alexis has, as the next version of Dr. Desktop, we have dock extension we'll have Dr. Extensions. Can you say more about that? Yeah, totally. So I'm super excited for this. It's actually gonna be really releasing at DockerCon, which is I wanna say 11 days away.

As well. So we're doing a DockerCon event and we'll be launching our extensions. So extensions are letting you add more things to Docker, desktop. I have them turned off while I'm publicly demoing, but I've got access to them. And they're really cool. So with Docker, desktop, we have the standard stuff but you'll also be able to add third party tools here.

So like sneak that scanning software I use will be right here. Or if you use circle CI and circle, CI builds an extension, you'll be able to see click into it and get all that information from inside dock desktop. We're shipping some default stuff as well, like better logging. We have an extension that, that has logging [00:37:00] that's way more detailed and actually a little overkill, unless you're really into logs.

We have an extension that we're doing for. Image management and dangling stuff. That'll take care of it but really it's for letting folks outside of Docker build things and have them work inside Docker desktops, which I think is gonna be really exciting. We have doom running in Docker, desktop as well.

I don't know if we're allowed to ship that, but we did manage to make that happen for folks that are excited about, it's really important about that. Yeah, we did get doomed. I think that was probably the first extension they built. And also we're gonna be adding Linux. Formally. So I'd be believe Linux support right now is in beta still, but it'll be hitting general access as well.

A DockerCon too. So all those will be coming out in two weeks. So keep an eye out. I'm really excited about them and I'm really excited to actually get to build tutorials and stuff on them. Cause I think it'll be a lot of fun and be really great way to make Docker more useful.

**Brian Rinaldi:** Awesome.

And just Antonio would like your slide deck.

**Shy Ruparel:** Yeah, I'll probably pull this up, throw it on my GitHub at some point I'm still like working on these slides. I'm not like at a point [00:38:00] with them where I'm like happy with them. So let me run this talk a couple more times and make more changes. But generally I keep all my talks up on my GitHub.

It just shy flash talk. So you can see I've got a bunch of. Up here. So this will be up here at some point whenever I'm happy with it. Okay. As well but you'll, you can get a lot of the same content on the Docker docs and in, in some of those resources as well, but my stuff will be up eventually in this repo.

**Brian Rinaldi:** Okay. Sounds good.
