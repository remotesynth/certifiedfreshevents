---
_build:
  list: false
  render: never
---

**Ali Spittel:** [00:00:00] Thanks so much for having me. I'm so excited to be chatting with you. All. Serverless is one of my favorite things. And so today I'm gonna be talking a little bit about the AWS amplify admin UI, which behind the scenes is all different serverless technologies. So I am a senior developer advocate and I lead manage the amplify team of developer advocates, and I'm ape everywhere on social media.

So if you wanna chat about this after. And you can follow me there, but it's really exciting. Cause I get to work on the tool that I'm showing you all day, every day. And I feel very lucky to be able to do that. So our goals for this talk are to one, build a fun application, always important. The second one is to discuss the underlying services.

And then the third one is to learn a little bit about AWSs. What we'll do is we'll create data. We'll [00:01:00] model, a backend schema for application we'll test that out locally and you don't need an AWS account for this step, then we'll deploy it. Then we'll manage our data and then we'll extend it with the amplify command line interface.

So we'll be creating a video course throughout this, like a video course platform, something like a very simple egghead IO or YouTube or something along those lines. We'll be integrating all these sorts of services throughout. So AWS amplify is a set of AWS tools that is targeted specifically to front end and mobile developers, but behind the scenes, it's using a lot of AWS services that.

Are powering all the sites that you use. There's no toy part of this or anything like that. It's the real services behind the scenes, but amplify makes this easier for somebody like me. Who's more of a front end developer than a heavy cloud engineer to use these services.[00:02:00] I like to think of full stack development as evolving.

So back in the day, there were static websites with HTML and CSS, but then the web became no longer static with the rise of PHP and cold fusion and all of that. And then we went onto the framework era. So you may remember in 2005, Ruby on rails made this YouTube video on how to deploy a blog in five minutes, or create a blog in 15 minutes.

And that kind of brought on this era of framework development, where these frameworks made it easier to develop a full stack web app and Ruby on rails. And Jeno. Are two of my favorites. They write a lot of the code for you though. You can do like rails G migration and it writes your code for you. And then we have the serverless era where GSAC apps have made it so that the deployment processes for these apps are a lot easier.

You don't need [00:03:00] to worry about the crowd cloud infrastructure yourself, and you can mostly focus on doing that front end logic with a little tiny bit of back end where you need it. And. So you don't need to battle with the server stuff yourself. So I have been really enjoying watching this progression throughout my career, and I think that low code development might be in the mix here and take the developments from that full stack framework era and the server less era and put them together.

So I think this is a really scary term for a lot of. Developers it's is our job going to go away? People aren't gonna need to write code anymore. And I don't think that's the case at all, because there's been these sites like Squarespace or any of these other platforms where you can develop without code.

And it's just expanded our jobs rather than. Detracted from them. We still need to make the custom logic ourselves, but maybe we're starting at a place that we don't need to [00:04:00] write all the repetitive code ourselves. And the same thing with Ruby rails, where it generated a lot of the code for us so that we can focus on the exciting business logic rather than the boring stuff.

And so I think that the power of low code would be code generation. So using a visual interface that would allow us to have. All the code behind the scenes, but make it so that some of that code is written for you so that you can focus on the hard stuff rather than the stuff that you've implemented over and over again.

That's one of the reasons I moved to developer advocacy instead of being software engineer anymore. I found that I was writing the same features over and over again, and I was getting bored of it. So I'm excited for era where we no longer need to do that. So instead of having hundreds of lines of code to do something, maybe you can just do the same thing in one line of code or a couple lines of code.

A lot of that is abstracted away from the developer. At least the stuff that you need to implement over and over again. I think in some [00:05:00] ways the less code, the better, because code is really expensive. When we think of early stage startups, the most expensive thing for them to hire is developers. And I think that's true of companies throughout their lifespans.

And so code itself is expensive too. There's bugs in it and you

need to. Still have good customers ability and developer experience, because those are the things that allow you to build and scale. You don't wanna just be stuck at an early stage for an app. You want some technologies that will scale as you do. And I'm really excited about this idea of empowering developers to do more with less code and then the easiest way, if possible.

And so I think the power of low code would be this interesting combination of the framework, era of development and the server less era where we don't need to manage all the cloud infrastructure ourselves. We don't need to start from scratch with the code. We can combine these two pieces of technology and make it so that we [00:06:00] have something really powerful that developers get to focus on the hard stuff.

Again, we're gonna be talking about this AWS amplify admin UI, which I think does a lot of this. And again, it isn't a flimsy toy. It's got all the same AWS technologies behind the hood. If you want to follow along with this demo, you can go to sandbox dot amplify app.com and start out with me. I did all the demos via video because the live code at gremlins always come out to get me.

And it's the worst. So everything is prerecorded. I'm not just writing code really fast. So the first step that we're going to take on is data. So we're gonna create a database sche schema, visually.

Again, this is where, what you get to, if you go to that sandbox dot amplify app.com and you can click get started under, create an app backend to create the schema, then you can choose[00:07:00] Places start to data authentication or file storage. I'll start with data and I'll start with a blank schema.

There are starters, if you wanna see examples too, and then you can add in your field. So I'm adding a title and description again, we're creating a video course site. So you have courses and then videos that belong to those courses. So the video will have a title description and an order because video courses, they normally have order.

This is the first video. This is the second video. This is the third video. And then you can change the data types of these fields, too. It's a little dropdown. You can also check to make something required as well. And then you can relationships between the data. So one to many, for example, a course will have many videos associated with it.

Then you can test this out locally in your app, you can use a web app with react, view angular, or any of those web frameworks that you like to use. You can also use mobile either iOS, Android, or [00:08:00] flutter react native all of those work. So I'm gonna create a react app here because that's what I'm most comfortable with personally.

And then you need to install the amplify command line interface.

Now it takes a minute to run. Then you need to install the amplify libraries and initialize amplify. You also need to install type script just for the reason that the. Generated code uses type script. And so it'll make the developer experience a little bit better and you can see that a lot of code files were generated for me.

Most of these, you don't need to worry about the AWS exports. JS is going to be the information of where things are actually posted, like your API keys, your or not your public keys and your links to your APIs and the cloud and all that. There's also a graph [00:09:00] Q schema. So behind the scenes, the.

Data that you generated in that last step, visually it generated GraphQL code for you. So let's talk about the technologies under the hood here. So the first one is amplify data store, which is under the hood. Index DB plus the availability for that to sync to an online database. So when we're doing this first step where we're offline, we're not connected to AWS, we're not in the cloud.

You don't even need an AWS account to use any of this. All that data is being stored locally in index DB, which if you use local storage before, it's really similar to that, it just allows you to store more data. And it's also asynchronous. You then are able to automatically sync that with a database that is in the cloud.

So this case it'll be DynamoDB. We'll talk about that in a minute. And that's really helpful. If you need to create an app that's available both [00:10:00] online and offline. This is something that I've done so many times as a developer. I used to work at dev to. And they have all those offline pages for if you're offline, there's like a drawing page that you can do.

Also a fun one that I implemented is there's an offline online editor. So if you're typing a blog post, then you go offline. It backs that up using local storage so that you don't lose that blog post that you're already. And so data store makes it much easier to implement something like that. I have a YouTube video.

Blog post about that. If anybody's interested. App sync is on top or is below the hood for data store and it is a managed GraphQL API service. So instead of having to make that GraphQL API yourself on the backend, you can use app sync in order to do that for you. Then there's DynamoDB, which is serverless key value and document database.

[00:11:00] That's super scalable. Most Amazon services are running on it at some capacity. And so amplify is interfacing with that, storing the data in there. And this is all provisioned automatically for you as soon as you deploy to the cloud. So let's talk about testing locally in your app first. So in the last video, we talked about how to install amplify and get a react app set up again.

You don't need to use react. I just am most comfortable with react. That's what I did. But what we're going to do is what I call copy and paste driven development. So there's a lot of code generations, so you can copy and piece code snippets and then change them to what you need to for your app. So I'm creating a button where if you click it, it's going to allow us to create a new course.

So I'll. Create an ad course function here. I'll import data store and then my course model. So all of those models are generated as type script models. So you [00:12:00] can go into the models directory and see all of them within there. I'm using window dot prompts, which I'm not sure if you all have been following the latest.

Drama, but apparently prompt is no longer going to be in Chrome, which makes me very sad for purely the purposes of doing demos, but I'm making it so that you get a prompt for the title and then the description of the course, and it's going to save it to data store. And that's what that code looks like in order to save a new course, I'm also gonna add a use effect so that I pull down all my courses whenever the page loads.

So I'm creating a pull data function with the asynchronous ability there, and then I'm pulling the data. And then again, I'm doing this copy and past driven development where I am looking for the code to query for my courses, [00:13:00] copying and pasting that. And then there we go. I'm getting my course.

So creating another course, and then I'm refreshing the page. And now you see that I have two courses. So again, this is all done locally right now, nothing is being synced to the cloud and you do not need an AWS account for any of this. You just do this on your own machine.

So then the next step is actually to deploy this to the cloud with AWS.

And so you click the deploy to AWS button right there on the page. Also, if at any point you want to change your data model, you can go back to the model, data tab, change anything, and then round the amplify, pull to sync. Those changes locally follows this, get like model of amplify, push to deploy anything locally amplify pull to [00:14:00] pull anything from the cloud.

So then you can create an AWS account or log into your own AWS account. Most of these services do follow under the free tier. So I'll log in and then name my app in this case, I'll just do like video course, and then you wanna pick a region. So us east one is what I'm going for here. Then confirm that it's gonna take a couple minutes to deploy everything to the cloud.

Then once it's deployed, you can open this admin UI. And then in here you can view that data model so you can still update it within here. You can manage your app content. So it gives you a form where you can create a new course. So I noticed this all the time as a software engineer where you'd build the initial app for the end customer, but then you'd have to build a secondary app that the employees would use to update data on the back end side.

So it's kinda like a CMS of sorts accepts markdown too. [00:15:00] So I will create a new video as well and save the course, or I guess not create a new video yet just you can link those there. And then it has the local setup instructions, and you run this amplify, pull with the app ID and this will make it so that your app is synced to the cloud version instead of just the local version of.

So mine will be JavaScript, react source build, and yes, I will update locally.

So you can also enable authentication using this view as well, which we will. Also chat about, so the next step is managing your app, which we saw that you can [00:16:00] update your data model. You can also add authentication. So that's what I'm gonna do now is I'm gonna click add or enable authentication here. And so by default, it's gonna be email, but you can add in Google, Amazon, or send in with applicable, just launched last week as well.

So if you want to do that is now a possibility. You can also do multifactor authentication and get different information from those users. You can set a different password PO policy as well. Then you can save and deploy. Once it's done deploying, you can run amplify, pull to get those changes locally.

And then I'm installing the AWS amplify react components, which will allow me to use those react components to add them to my code instead of writing them from scratch. So the width authenticator, higher order component, I'm gonna use that. [00:17:00] And then it's going to give me a sign in form. I can create an account.

With my username, password, email, and phone number. I'm not gonna show you all my phone number though. gonna skip that step and then you can manage your users and groups within the admin UI as well. So I can do my email and then I can send a temporary password that they have to reset upon signing in for the first time.

You can also create different user groups. So admin, for example, you can also go back to your data model and add in different authorization roles as well. So if you only want, for example, an admin to be able to create raid, update and delete, you can set that up or you can make it so that only the owners.

Do and now you can do this with multi off as well, so you can make it so that. There are different. There are [00:18:00] multiple different authentic or authorization rules as well. In addition, you can give access to people without an AWS account to this. You can see that it's not within the AWS console. It's amplify app.com.

If you look at that URL there, and so this allows you to give access to your team members, without them having an AWS account, you. Either give them access to everything or only access to managing the data. So if you have somebody who's like a content editor who you don't want them to be able to remodel your data, but you want them to be able to upload blog posts.

You can give those permissions to people as well. So behind the scenes, this is using Amazon Kato, which does this users sign up and sign in for you as well as multifactor authentication. So then some of the services that amplify enables are via that admin UI, but some we have even more with the command line interface.

[00:19:00] So if you wanna add S3 storage, Lambda functions, if you want to add a. Like predictions, you can do all of those things through the command line interface. And if you're more comfortable with the command line interface in the first place, you can start from that direction as well. Both of these are forwards and backwards compatible.

So if you start with the command line interface, you can use the admin UI. If you use the admin UI, you can use the command line interface. So they go back and forth. What I'm gonna do is I'm gonna add my videos and make it so that they're actually stored in the cloud. So I'm mapping through my courses, listing them on the page, and then I'm going to create a component for my video form.

And I will import that onto my home screen as well.

Make it so that I [00:20:00] can add a video to each one of my courses. I'll also pass my course ID down

so that I can associate the video with its parent course I'll create my form now. So I do quick sheets for. Demos, but you would wanna make this much more accessible in real life. So two of the fields will be text fields. That'll be the name and the description of the video. Then there will be the number field for the order and then a file for the actual videos themselves.

Then I'll import you state from react so that we have a state field set up here. We'll do the title set title. And then also the description. So we have two state fields there. Then we need one for the order as well. We'll start with zero for that one, cuz it's a numeric field and then we'll need to store the video file as well.[00:21:00]

Then we'll add on change events to each one of my inputs. And again, everything that I'm doing here is react specific, but it does not need to be, you could use angular view or whatever instead.

That one I'll need to make it into an endurance of a string

and I'll take the first video file that's uploaded. And then I'll add in my on bit.

that will be another asynchronous function. And then we'll need to again, do coffee and face driven development. Grab my code from here on how to create a new [00:22:00] video. It's got the imports, but then also that second code snippet for saving a new video. So I'll piece that in, and then I'll use the data from the form instead of the mock data there.

So I'll set the title, the description, the order, and then I'll need to take the course idea from red props.

The other thing that I'll need to do is upload the video file. To Amazon S3. And so I'm going to enable storage for my app. So through the command line interface, I'll do amplify ads, storage, I'll store data in S3. When that comes up, where it'll be content that's stored, you can use the automatically generated names and things like that.

Then you can always do the least privileged principle of only giving [00:23:00] people access to what they need. So in this case, I'm giving everybody access to everything, but in a production app, you'd wanna give. And then you run amplify push to deploy that to the cloud.

So again, that get like model of push pull, then I'll import the storage function from AWS amplify and I'll do storage dot put, put makes it so that you can upload a file to the cloud.

So you need to have a key and a value for this. So the key will be the name of the file. So the video ID, and then the video file, I'll also print the default action to the page. Doesn't submit

and. Now, what I need to do is I've implemented the video upload, but what I need to do is I need to make it so that the [00:24:00] videos actually render on that homepage. So my video query will be a data sort qu query for all of the videos.

So I'll set my state with those videos. I'll just grab the first one for now. And then what I'll need to do is I'll need to query for my. Image within storage. So I'll use that key. So the video query zero ID, because that's the name of the video that I uploaded and the last step,

and again, in production app, you'd probably want to loop through all of them instead of just getting the first one. So now I'm gonna create a [00:25:00] video item. I'll have my source for it, which is that video file. I'll also add in the controls. And now you can see that I have a video hosted on the cloud. That is uploaded.

It's one of my intros for YouTube video. So it's my face. That is how to create a full stack app using AWS amplify. We're gonna move on to some quick questions. So if anybody has them feel free to drop them in the chat and I can try to answer them for you, but if you want to learn more, the best place to start is the docs do amplify AWS.

I'm always. Publishing new content on my platforms too. So I'm CEPI everywhere, except for YouTube I'm Alex's spit dev on there CEPI was taken. And the other thing is that if you want to also work on this all day, we are hiring. So reach out to me wherever, and I can link you up with jobs. Thank you so much for attending.

This has been a ton of fun.

**Brian Rinaldi:** Thank you, Allie. That was fantastic. I [00:26:00] actually I've only gotten to mess with the amplify admin UI a little bit, and I was, I'm actually very impressed with all the things you can do there. Without even. Necessarily digging into code, writing Schemos yourself and things like that.

So that was amazing. We do have some questions from the audience. But I also wanna point out one of the things I love was you're you mentioned how low code like kind of relates to serverless in, in the sense I think there is this. It you're doing serverless doesn't mean that you don't have to care at all about your server.

Yeah. You know where the stuff is deployed, but you have to, you care less. You're not so worried about it. And in, in a, a, it's almost like a code less, rather than low code where it's I, yes, I still have to know some code. I still have to be able to code. I can't just do this without knowing how to code, but I have to worry a little bit less.

The details of the code and spend a little bit less time on nitty gritty stuff. That really is time consuming, but not really the important parts of the [00:27:00] application in any sense.

**Ali Spittel:** Yeah. I very much agree with that. I think that's. A huge piece of this, that instead of focusing on the things that we've all implemented a million times I don't wanna write in another signin form.

Right. to something that I've done so many times in my career that I feel like that wheel has been invented and I don't wanna reinvent it a bunch of times. So I'd rather use a react component that does. For me and spend my time on the more complicated stuff that fits my application rather than the stuff that I've done before.

And so I think that's a big piece of serverless too, is that I've, but before the days of serverless, I spent so much of my life like deploying applications on our own servers at different companies that I work for and it takes a huge amount of time and that time could be better spent on making sure that.

You have something that's a less repeated process done in your company or something like that. And so that's where I think a lot of this [00:28:00] power lies is freeing up developer times so that we can focus on the things that are really important to the company rather than reinventing the wheel.

**Brian Rinaldi:** Yeah. Yeah.

There's, in anything you do that, I think there's a lot of boiler plate code for instance, that you just, if you don't have to write it, you don't, in fact, you brought up cold fusion. Funny enough. And I got my start in cold fusion. 20 something years ago. And I, one of the things I built was a code generator that did like what the, what amplify is doing for the model.

So I didn't have to like, actually write all the code to map out the model to the Codefusion code and, so yeah, I, these aren't new ideas, but, I think they it's gotten better. We've gotten moved a lot further now. So I do wanna get to the questions from the audience.

First up Jane asks what services are comparable to AWS amplify. And how is AWS amplified different from say other

**Ali Spittel:** alternatives? yeah, for sure. So I would say that probably the two most similar out there right now are [00:29:00] fire base and super base. So fire base has been around for a while. I would say what's different about AWS is that with fire base.

Fire store. You can outgrow at some point, whereas behind the scenes that AWS amplify is using DynamoDB. So it scales as you do. So that's one difference there. SFA base is really awesome too. They are also open source, so we are open source. You can go onto our GitHub, it's AWS amplify and see all the library code and all that.

I sometimes do that when I'm writing tutorials, I want to get under the hood and figure out what's actually going on. So I definitely do that. So I really respect what super base is doing as well. They are using Postgres. So a little bit of a different data model there where it's SQL instead of no SQL.

We also have a little bit more services supported as well, but those, I would say are the two closest comparisons within the industry.

**Brian Rinaldi:** Cool. So Michael S is it possible to use [00:30:00] amplify to build an app using oth and API, for example, but hosting it myself, I've found that amplify provides super easy Coter usage for me, but because I'm trying to go the root of next SSR on land eye have to deploy via serverless framework instead of.

**Ali Spittel:** yeah, for sure. So you can pick and choose the different services that you use. So I didn't mention hosting at all in this, but we also have front end hosting as well, but you can use your own front end hosting if you want. And then AWS amplify for the Cognito piece of it or the API piece you can pick and choose what you end up using.

I would love though to see that feature request for the next SSR. Cause I'm pushing for that really hard. We have next SSR. Now I'm fully supported and it's awesome. And I'm trying to get the scene for next. So if you can leave a GitHub issue on that, I would love it. Something that I'm pushing for,

**Brian Rinaldi:** And Oman asks costwise is different from other [00:31:00] AWS services.

If we run our own server two. So

**Ali Spittel:** that, yeah, that's a really good question too. So behind the scenes, this is using all of those AWS services. So it's using Lambda, it's using Cognito, it's using DynamoDB. And so all the billing for those is going to be exactly the same. So if you go to their pricing pages, it's gonna look exactly the same amplify.

Just adds this abstraction on top of those and amplify doesn't charge itself for any of. And depending on your use case, serverless will probably be less expensive than a server full option, unless you're at very large scale or something, but that's gonna be of the answer for anything serverless.

And then. The other side of it is hosting and that's the only one that is really its own service. And so that has billing information as well. There's billing for the hosting piece of it, but also the code building part of it as well. So if you're building a react [00:32:00] app, for example, it has to build that.

And so that's a charge as well. There's information about that at if you just search AWS amplify pricing, it takes you to a pricing page and you can view all of that on paper.

**Brian Rinaldi:** Awesome. Is Michael also asks, is amplify ever planning on offering a SQL option?

**Ali Spittel:** Oh, that's a good question. It's something that we have gotten requested a lot, and I think that in the future, that could be an option.

I think almost the best option would be to make it to that. Dynamo DB is so easy to use that it feels as easy as using a normal sequel option. Yes. And the other thing is that if you do some customization right now, you can use Aurora DB instead of dynamo DB. If you want to, it'll be a couple extra steps, but there are blog posts on how to do this.

It's in the documentation as well. So it. Does support it now, it just takes a little bit more work than [00:33:00] the Dyna OD the option.

**Brian Rinaldi:** Okay. And this might be a tough one. But Gary's what do you say to people like Gary who are concerned about these kind of tools when vendor locking? Like how do you feel?

How easy it would it be for me? If I chose to try do this on amplify to say, move some of the services.

**Ali Spittel:** Yeah, for sure. So I think that's a big concern for some people, depending on your use case. What I would say is to think about the different trade offs, which is always the answer of what is the reason why vendor lock in is a big deal.

The other thing is we have had customers write abstractions on top of this so that they could easily swap. Their backend service if they ever need to. So you can write abstractions yourself in your own code to make it so that process would be easier down the road. The other thing is that if you wanted to transition off of AWS amplify onto just AWS, all the cloud formation code is [00:34:00] generated for you and the libraries can be used with existing services that aren't provisioned through amplify.

And so that's another option as well. If your problem wasn. AWS. It was amplify specific.

**Brian Rinaldi:** Cool. I don't know if you'll know the answer to this one, but I don't know, may pronounce mispronounce his name Mo Moen asked. Do you know of, like if they plan to open amplify access in, I

**Ali Spittel:** ramp. Oh, that's a really good question.

I don't know of plans specifically, but I know that they're always adding AWS regions and AWS regions for amplify specifically, too. So I don't know of any specific plans for it, but I would request it and see what can be done.

**Brian Rinaldi:** Okay. Awesome. And I had a question about the code snippets, so does it, first of all, does it by default, like when you create the, that the data back end, is it always creating a GraphQL based like interface for.

**Ali Spittel:** Yeah. [00:35:00] So that's a great question through the admin UI. Yes, it is GraphQL and that's what allows for a lot of that code generation. But through the command line interface, there's also a rest API option and it will generate an express API on top of your data model. So you want that instead? You can definitely do that.

It'll create a rest API through API gateway and AWS lamb.

**Brian Rinaldi:** Okay. That's good to know. I love graph C myself, but I was just curious about that. And then the code snippets, are they always like JavaScript or look like they were all just regular JavaScript code snippets? Not like even framework based, right?

I mean it, yeah.

**Ali Spittel:** So there are some components that are framework based. So there react components in your components, view components. And then there's the libraries. So that was the JavaScript code snippets that I was using. But also that's supported for native. So if you wanted to use iOS or Android instead, or flutter or react native, all of those are supported as

**Brian Rinaldi:** well.

Awesome. Okay. And [00:36:00] so the last question, probably the most important question you're gonna ask today. So apparently Jayden was listening and instead of in Amazon Cognito, he heard Amazon taquito. Is there an Amazon Taketo on the works. fairly, everybody

**Ali Spittel:** wants amazing. Okay. No. Okay. So I love taco be taco bell is like my favorite.

Vegetarian. And then they're like the fast food place that does vegetarian food. So taco bell did a video for AWS on their cloud architecture and AWS amplify was on it. And I was like screaming to all my coworkers, like taco bell uses our stuff. Taco bell use amplify. You all have to check this out. So it's on the AWS YouTube.

If anybody wants to check out taco Bell's cloud infrastructure.

**Brian Rinaldi:** So basically what you're saying, is there already isn't an Amazon Tato.

**Ali Spittel:** Yes. Yeah. Yeah. I think that they named everything that they used too. Like all of their different apps, they name after [00:37:00] taco bell items too, which it was great. It was a great thing

**Brian Rinaldi:** to watch.

Oh, that's funny. All right. Ali that, that answers all the questions from the audience and all of my questions. That was a fabulous presentation. We really appreciate you taking the time to come. and share all this with us. And I hope you enjoyed it. Yeah. Thank

**Ali Spittel:** you so much. This was awesome.
