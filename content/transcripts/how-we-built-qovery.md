---
_build:
  list: false
  render: never
---

**Romaric Philogene:** [00:00:00] Thank you, Brian. Thank you for having me. It's great. And thank you for doing all of that. It's it's just a great work. Hello everyone. Happy to be here. So just before getting into the thing I'm gonna present myself. I'm a CEO and co-founder of recovery. But I'm also a developer myself.

I will still be a developer in my blood. I used to work in a different company in the financial industry, in the tech industry, working on different system infrastructures and also backend development. I'm super familiar with great languages like Kotlin, Rust, Python. Yes. I'm super happy to be here.

And today what I'm gonna just show to you and explain to you is what discovery how does it work behind the scene in terms of high level and also low level details. So if you are a developer, a CTO, a DevRel, anyone that is interested [00:01:00] Infrastructure stuff, how the things works behind the scene.

It's the great talk for you. I'm just also going to dig into a few details, like arrest things because we are using arrest behind the scene. So yeah, this is the talk that you should listen to. So that's great. Just getting to the thing. So how many of you are deploying the application on AWS?

I think today it's like nonsense questions because I know that most of especially all the, all users, all customers are using a lot AWS, but the problem and, all of that we were discussing about that with Brian is that there's like tons of platforms doing that. But the problem with AWS is that.

It used to be like super simple to use. It used to be maybe like 15 years ago. And now when you use AWS, it's super it can be like quite complex to deploy just in super applications. And basically the idea of query is to simplify the deployment application deployment on AWS. So basically we integrate the [00:02:00] platform on.

Working environment as a developer, you are using probably git like GitHub GitLab bit buckets. So the only things that you need to do is just first connect, cover to your AWS account. And from that selecting the repository and the dependency that you need to deploy, like the database and correct takes care of everything from the infrastructure creation, the app deployment, the run and the scale.

That's exactly. That's what we provide basically. And today we have more than 10,000 developers using the platform for more than 100 countries. So it's like very common. There is no bother for that. It's a very common problem that we are solving. As I told you we are building this platform that is running on the Aw account of our customers.

So we manage from the build to the deploy, to the scale of the application. That's basically what we're doing. Yeah. I have a small demo at the end of the presentation, but the goal here is not to just try to sell my platform. I just. I want to G into the details and just to [00:03:00] grab the details we need to get into the eye level view.

So basically how recovery works is super simple. So as a developer, you will connect to cover. Console.qovery.com to connect to that console. So we need to provide an API, obviously. So basically what happens is when you get connected and you have linked your AWS account and also your repository, your applications then query can start to work.

So from any events that we receive from a Git or GitLab, or even Bitbucket, we can react and start to deploy the application. So if you look at the Shima from the left to the right, you'll see that for a GitHub or GitLab event, the control pain. So what we call the control pain that is in charge of managing the authentications and also the signal to deploy the applications.

We will send that information. So all the events to what we call the cover engine and also the cover engine and then deploy the [00:04:00] applications. So it's, if you look at those parts, we have three parts. So the parts that are outside, so not managing, not manage by cover. We have the covering infrastructure.

That is running on cloud accounts behind listen, we are using ourself, AWS, and you have the part that is running on the infrastructure of our customers. And that part is super interesting. And that's what we are going to look just to, before that after that just to give you the responsibility of each pieces.

So you have the control plane that is written in Kotlin that is in charge of these business, logics scheduling and sending information to what we call the co engine that you have on the right. So this part is quite investing. You can see that is there is like a URL it's open source and written in rest and is in charge of abstracting the cloud provider, because I'm talking a.

About AWS. But in fact, we are our solution work also on digital ion scale away and soon GCP and Azure. [00:05:00] Oh my, is it still working? Yes, that's great. Yes. And you have also another part, which is the cover agent that is running on the side of our customer that is in charge of forwarding in real time, the logs application logs and giving the statues of the different application that are running on the side.

Because one thing that is super important in cover is that we it's like a remote control applications. We are not storing anything from our customers. Different pieces are running on their side and to manage all of that. We have different web different interfaces. It's not only the web interfaces, but we also have the CLI.

But this is what makes like super easy to use recovery. So that's basically what we are doing the different path. So if we get into the details of of that, You will see that it's a bit more complex, but not so much if we detect that. So I told you that when we receive like a gab an application event in terms of deployment.

So let's say [00:06:00] that you're a developer. You are like, you're doing any changes on your code. So you commit your you push your code and then from that career will hook your repository and start to deploy your application. So what happens behind the scenes is that. We have our control plane that has installed.

Linked create a webhook into your repos say, Hey, you have to send all the events that you send to our control plane. So this is just one URL. So an API URL. And then from that career, we receive the event and say, Hey, this is it. Like an application that I'm managing. Okay. I match with some applications that are managed because you can have multiple from one repository story.

You can have like multiple project and multiple applications that are linked to that. Repeat. So if we have to match the applications and then after that we have what we call the deployment rule process. So it's. Basically when you are using cover, you can choose if you want to deploy or not an application based on the specific rule, [00:07:00] you can be like business rules, but you can say, Hey, this is an environment.

Let's say that it's a feature that I've created. I've created a new branch and this branch, maybe you don't want, you don't want to create an environment. You don't want to deploy this application, or maybe you want to do it but manually. And this is what we. The deployment rules. So we have to match the deployment rules.

And when a rule is matched, then we'll choose like a Qovery engine that will target to deploy the application. Because with Qovery, you can manage from one single interface, you can start to manage different infrastructure, defense infrastructure on the same car, but also in different cloud provider. And this is way it starts to be like, Interesting.

So when we have matched the cover engine, then we'll send an information. So it's, in fact, it's not exactly the way that it works, because we don't have a direct connection to the cover engine, but the cover engine is connected to the control plane and that pick the information, [00:08:00] pull the information, and then start to deploy the application.

This is exactly what happens just after that. So if we look at the details here, so this part, if I just go back a few seconds, so that part is running. So if you look so the yellow square is running, so it's outside of the control of Qovery. Okay. And the covering fast is obviously the infrastructure.

So it's exactly what we provide and manage by recovery. But the part that is in charge of the deployment. So the cover engine and all those things is the part that is running on the infrastructure of our customers. And here, what happened is that we have different pieces. So if we break that part, we'll see that we have the AWS, we have the VPC, we have Kubernetes and we have name spaces and all the applications that are running into that.

And here, the current engine that is open source and written in Rust connects make establish the connection with the control [00:09:00] plane and then start to pull information deployment requests from the control plane. And this is where we manage and we deploy the application without establishing the connection with those cover engine for different reason.

The main purposes are the security and different things. From that when we receive so the information to create and deploy the application, then we'll use the Kubernetes. Because we have two different type of application that we are managing, we hit the stateless one and the state food one. But if we.

Talk about the stateless one. So all the application that does no state like compute like a simple application with no database then will use ES to serve, to deploy the application and all the application. So it's, EKS, we are not creating a Kubernetes. We are using our solution. We are using Kubernetes that is.

Provided by the cloud provider, because obviously we not do the same amount of work that they're doing. It's quite valuable and super scalable. And we are using the [00:10:00] manage services as much as possible that are provided by the cloud provider. So what happens here is that we are just creating, let's say that you have your user.

That is deploying in the applications. So we match all the different tools. And when we send the informations to the engine, then we'll start to create a name space and deploy the application to that name space. And this is where the current engine is also in charge of creating. So the different resources, like the network, configuring the security and all those things, and then starting to deploy the application, make it run.

This is what happens behind the scene, but we are talking a lot about the stateless part, but we also have the state full part. The state full part is when you ask what happens basically what happens when you start to, when you want to have access to database, for instance, So there's two things that can happen.

So you have the choice as a developer and recovery, you can choose between two options. So the container and the manage version. So the container, obviously it's just the [00:11:00] container of the service that you want that will spin up on your Kubernetes cluster. For instance, you can have like your positive SQL version that is running in the version of your choice, like a version 13, for instance, and in mode.

So what we do is that just creating. A new pod with a container and then attached to this pod a block storage. Okay. A block storage. So it'll help just to make sure that even if your pod is restarting, that you get in your data, but it's great for development, but obviously when you run in production, you don't want to, you want to have much more than.

Having the service that is zoning, you may want to have also the backup, the point in time recovery, the scalability, the security, all those things. And this is what we provide. Also, you have the mode. So the manage mode where we will not spin up a container, but we'll use directly the the cloud version.

So for instance, for AWS, if you want to Ize create, it'll be RDS and then you get everything [00:12:00] that's the best of the AWS services right after using coverage. So that's what we do behind the scene. Yeah, that's what happens maybe. Also one detail is that you may have noticed is that we are talking like if the infrastructure, so the application will was like ready to be run, but.

When you use for the first time career and you don't have access, so you don't have, it's the first time that you're using AWS, you have your account. It's great. You have all your free credits and you may want to deploy your application, but you have nothing. Nothing is ready. There is no EKS, no VPC, no nothing.

Just the account. What does cover is that with the cover engine? Two mode also. So it's open source food open so you can get take a look at that on GitHub. It's we are creating the infrastructure. So from the engine is in charge. So when you for the first time you use a recovery, cur will takes care of creating the infrastructure and all the dependency, configuring the network, all those things for you right [00:13:00] away.

And this is exactly what we. Look at, in the details here. So it's inside the cover engine. So inside the cover engine, you can see two different parts. You have the cover engine, what we call cover engine run time, and you have the bin. The cover engine run time includes like a run. The run time that is consuming a, the lib is open source and is in charge of just executing comments.

So it could be like external comments or internal comments, but also. Executing API request based based by the cloud provider that's using. So in here, AWS, and what's quite interesting into that model is that we have built the system. So it's a transactional engine that is in charge of if anything goes wrong.

During the different steps. If anything goes wrong, then there is a system where the engine will roll back into a previous walking state. That's super, super important. It's in the case of the infrastructure creation, but also in the [00:14:00] application department. So let's say that you have anything that goes on.

That's why it took so much time for us to beat that platform. It's because in fact, even if cloud providers and AWS, even if it's super variable, you can see that there's like a we got like a yesterday, even if it's super variable, sometimes you have Some problem. You can have like API problem at any time.

And let's say that you have your customer that are using the platform starting to deploy, and then you create like your load balancer. So the system is creating your load balancer, anything, and something goes wrong on the cloud provider side. Then you have to be able just to roll back in the two, like your previous walking states, because otherwise you are completely.

Okay. So yeah that's what is starts to be like quite comp quite complex. And that's what we solve with this transactional model. And because we can just river to improve this working version. Yes here. A few other words. It's concerning the way. Yes. It's also it's a transactional model, so I really invite you to just take a look at the [00:15:00] code of that, because it can be quite interesting.

It's a state machine actually. You have like different steps that can be in state that can be like executed over the time to to come to a walking and expected state at the end. And that's that's quite interesting the way that it works and it relies on those external APIs on the rest because, and also on different external binaries and Maybe something also to consider, because I'm pretty sure that we have the question at the end, but so why did we like choose?

Why did we decided to, to use rest over, go so first We are using go as well, not on the engine, but on the engine. If so, if I go back here the part that is in charge of forwarding the logs. So application logs, infrastructure logs to the control plane in real time, based on the request of the user is creating in, go.

And this part is talking to different agents. It could be like services provided by AWS, but [00:16:00] also there's some services that we are installing on. ES like low key to aggregate S so that's the part that is written in go, and we are also others part, but for the engine it's quite important for us.

Each time that we deploy the engine and we run any task on the engine is that we are 100% sure that is gonna work. And that's due by the, I don't know if you're familiar with reversed, but the time system of rest is guarantee and prevalence any like runtime error, because you can be sure that.

With the borrower shaker and the way that the compiler is working, it can be show that when you release something in production and you deploy it and you make it run, then it will run. At least it'll run and no crash. It doesn't mean that it will run the way that you expect, obviously, but it will run and no crash.

And that's super, super important for us. That's why we decided to make it in rest. Yeah. Maybe to get into the details of so I have like [00:17:00] just a couple of other slides, but we are almost done just to get into the details and the code of the transactional model. It's quite interesting, the way that it's it's just a trait, it's a system.

Interface system that you have into the language that we implement. So let's say that when we implement ES, so we want to manage communities or any service on co you have to implement a new interfaces. So you have to, you have your concrete object. So here it's AWS probably it's a ons.

So it's EKS and you have to implement those interfaces. So here. Just the . So the Kubernetes interface and we force the developer. So our developer to implement the different method, different functions. And here, what is that we are forced to integrate, to implement the deploy environment. A function and also the deeper environment, hair or function.

And what's what's interesting is that if you look at the results, so if you look at the return the object that we written, it's a [00:18:00] result with two values. It's the okay. Values. So it's the good values. So if everything goes in the radiation and you have a narrow values, What happens here is that if anything fails.

So if something fails into that function at any stage, because behind the scenes, like another function, that is a core, then we'll automatically. So it's the transaction engine that is created, will automatically core the deploy environment or the equivalent with the underscore. Function and we have all those functions.

So we have like tons of functions like this in the system, in the engine of Korean. That's what makes like super explicit all the errors that we have to handle at any time. Obviously we can like skip that and make like a panic, what we call a panic and then skip function. But it's not the case because we just wants to have the system that is working the right.

Yeah. That's basically what, so yeah, I invite you just to take a look at the, at that cut because it's quite [00:19:00] interesting the way that it was done. And yes, after that, when we have just at the end, so everything goes in the right issue. We have deploy the I patient. Then the developer is able just to take a look at the interface and see that his application is running.

That's quite. Yeah, that's quite easy to understand. And that's also what is quite frustrating for us because when you're a developer, you just wants to have like your application that is running. Sometimes you don't really care about how the things works behind the scene. And I can understand that's why we do exist, but yeah, it's like a lot of work.

It's a lot of work. And the way that we are, we try just to make the thing is not by abstract. All the things. That's why I'm making this this live session is just to explain how the things behind the scene work. Because I believe that you really need to understand how the things work, even if you don't want to be an expert, but you as developer, you need to understand at least how the things work behind [00:20:00] the scene.

And we really work on that and we really try to. Easy and transparent as much as possible without the hassle of all the complexity that, that you can get on 80 bus, for instance.

Just a quick notes because we are talking about one developers, one one application and other thing. But imagine that because cover is used by more than 10,000 developers around the world, we have customers from Intertech FinTech. He. And a different type of SA even ATS, we have like different kinds of customers.

And it's when you look at that let imagine that's like thousands of deployment per day and it's R and D teams that are working and relying on that product. So that's make a very, it's super interesting in terms of engineering, obviously, but it's also. Super complex at the end. It's super complex because your system must be like super valuable.

And that's why we decided to choose a rest for [00:21:00] instance, but yeah, that's something that you really need to consider when you look at covering yeah. The infrastructure is managed because. All around the world on their own cloud accounts. So cover is not like a hosting platform. We are really like deploying this agent and this engine on the infrastructure and all of that is working on the infrastructure, meaning that if they wants to get rid of cover and they no longer wants to use it, they can even use the platform.

By themself. Obviously they even have the configuration files that we are generating via Terraform and M and they are stored on their side. So all of that is possible, but it's also a lot of complexity for us because we are managing that at large scale. And in these situations, you can imagine I told you that it's.

Super important just to have a system that is super reliable. So we have created like thousand of tests and that's what makes the things quite appealing and easy to use for anyone. Yeah. And. Something that [00:22:00] is, and that's why I've changed the color. It's even if we are talking of all those, these days, it's what makes like super interesting and not so easy.

It's the developer experience in all of that is super, super better, because you can be like the perfect, the best product ever that is working one per 100% variable. But if the developer expense is not there, then you can be sure that as a developer. You, if your target is developers, they will never maybe probably use your platform.

So it's today being like a developer product is not only just a functional product, but it's also something with a very good and tough experience. Yeah. Yeah. Yeah. So this is the last point that I wanted to cover it's company how to build on top of coverage. If you are interested this, we have like different interfaces.

We have the CLI, the web interface. Obviously we have also like rest API that we are consuming ourself, where we provide like an open API documentation [00:23:00] and specifications that you can. Use to generate your own client. And we are also using a Terraform. We are providing a telephone provider to just to create your infrastructure, deploying your application and creating multiple environment from production staging.

And. Also development environments. So all of that, yes. I think I don't need to get into all those these days, but yes, co simplify, the AWS expense, you have to understand that co is composed into three parts. So the control plane, the query engine, the career agents that is running on the side of all customers.

We have built this transactional. So to transactional engine into the cover engine that you can take a look it's completely open source and happy to have your contribution. And we re strive for simplicity's broker experience Soly it's the key. So yes, that's it for today. And thanks for having me.

**Brian Rinaldi:** All right. Thank you. That was awesome. I, like I say I think as somebody who likes to build like web applications, but I don't like to know. I don't like to be involved in the infrastructure. So this is like infrastructure stuff confuses me. And when I get involved in infrastructure and particularly when I get into AWS and.

Search, I have to search among their thousands of different services to try and figure out what it is I'm supposed to use. And I was just at reinventing was interesting, cuz I'm curious if there, if you're app, if this is [00:25:00] something that using. Co would help solve a lot of people.

I, I talked to on AWS they don't even know, like they spin up stuff that sits there and they're getting charged for things that they don't even know what's running because somebody spun something up at some point that as part of some deployment. And then. Now it's running and they can't figure out what's running and why, where the costs are coming from is that I'm assuming like, because this is all contained and does handles all that deployment process for me, like this is will help me avoid that kind of issue.

**Romaric Philogene:** Yeah. AB yeah, absolutely. In fact, it that's the idea of career getting one simple view, one view where you can manage all your infrastructure, all your applications from one single. That's basically what we provide because yeah, at the end, it's quite confusing when you use AWS, but also other cloud provider.

You have to get into all the different view just to manage and get and grasp, the complete view of what you're doing. And, yeah, it's super easy just to [00:26:00] forget that you are like using your service that you are built for, but you are no longer using. And yeah that's basically what we provide this view and the ability just to manage and better manage your cost over the end.

Yeah.

**Brian Rinaldi:** Yeah. So Nick has a question he says, since it's built in rust, are there potential plans to leverage web assembly for certain scenarios or is that not part of the plan?

**Romaric Philogene:** Yeah, that could be a plan, but it really depends. I think it's something that I'm really interested in personally.

But in terms of like business cases, we don't have so much people like ING for that. But yeah, definitely. It's something that could be what it is city, especially when you consider, when you see how the containers are great, but how they are like also. Difficulty in terms of security management.

Yeah, I just hope that at some point there's like a valuable things that we can embed, like in terms of of web assembly. There's like some initiatives cross led I don't know if you're familiar with that. It's an [00:27:00] initiative operated by Microsoft. So a team of a engineering team that is working on creating a.

So it's a accumulating in rest that is managing web assembly resource. There's a lot of innovations and I'm looking forward to just seeing what we can do from from that. Yeah.

**Brian Rinaldi:** And so I'm curious right now, you just deployed to AWS, but you said like these people, like it's. It's your own infrastructure.

So can it, can you do other clouds outside of if an Azure or on or Google cloud, is that possible using the cover engine to deploy

**Romaric Philogene:** those? Yeah. Yeah, absolutely. In fact, it's the it's it's aligned with our vision of the cloud. So the meta cloud, what we call different stories that we own meta.cloud.

**Brian Rinaldi:** You do.

**Romaric Philogene:** Yeah, we do. And we are like a proposal from the company that, you know, behind that.

**Brian Rinaldi:** But what company? I don't know what company you're talking about.

**Romaric Philogene:** yeah. [00:28:00] That's and that's super aligned with our vision of the cloud, which was sort the cloud was the app section of the data centers. And what we are been doing is basically the abstraction of the cloud. Sorry, my.

This is the end of the day. I'm super sorry.

**Brian Rinaldi:** I know. Don't worry about it. It's fine. It's fine.

**Romaric Philogene:** Yeah. Sorry. It says

**Brian Rinaldi:** don't worry. Just keep going. We don't mind. We don't mind little kids screaming in the background. I've been there. Don't worry about it. Yeah.

**Romaric Philogene:** That's but yeah, concerning like different cloud portal, we do support Skyway, which is like a European cloud provider, digital ocean.

We plan to support Asia and also GCP for our customer. And the idea just how can you like build the future of the next generation of application on top of all those great cloud providers? And that's what we, yeah, that's what we are doing.

**Brian Rinaldi:** You got a couple of comments here from Ryan who said he used it to show off a proof of concept tool he developed for [00:29:00] his team.

And he said it was super quick to get running and he's impressed with it. And as well as Tony and yeah, sounds like you already have some fans. That's good. so tell me, I'm curious. where, what is your background and what made you decide to create this? I'm always curious, like people who like, go off and build a company like this, cuz they, they see an opportunity.

Like where did that come from?

**Romaric Philogene:** Yeah. Yeah. That's yeah, that's a great question. Thanks for asking. And I'm an engineer myself. I used to work on the financial infrastructure in productions for many years, for more than 10 years. And I met my cofounders at at uni, this Great company in the financial industry, I was in charge of managing infrastructure, mostly in the Asia, Europe, all those things.

And, at the end, we were like doing always the same things for all the best companies over the world. And at some point we just decided, we say, Hey, we have the choice. We can stick to build work for those companies. Because [00:30:00] all our former colleagues are now working at Datadog for instance, or we can just solve that problems that any like company in the work will.

Love to they would love to hire us at some point and which is, can build this product and make sure that they get access to it in just a few seconds. So that's what, that's how we started to think about cover, but to be honest, it's not our first company. It's our third company. And yeah you have a, we also have this mindset of entrepreneurship.

Yeah. And yeah. Yeah. That's something that you really need to have in the blood. And if you, if some of you in the are interested into building something, at some point, you really need to. Go for it. Don't hesitate. The only thing is that you really need to just know where are your strength?

Because it's it requires like a lot of effort yeah. To build something that is meaningful for customer users. Yeah.

**Brian Rinaldi:** Yeah. And I will say like most entrepreneurs. [00:31:00] Ever talked to, they usually don't, haven't just started one company. Or if they've only started one company, it's the fir it ends up being the first of mening.

They, I've never met an entrepreneur. That's yeah. I did one company and I'm done.

**Romaric Philogene:** Yeah. It's yeah, that's the story that you can hear from, and to be honest, I'm not like super politician, or I dunno, it's something that you can hear on the, on a TV show on anything when you hear to a successful entrepreneur saying that, oh yeah, I was doing that to just, it was the first try and then I succeed and it's when you look here and you look just behind the scenes not really the case.

Yeah. Yeah. It's not really the. Yeah.

**Brian Rinaldi:** Yeah. And even the ones who've usually become successful. It was not their, it's not always on your first try. Yeah. Yeah. That's what I say.

**Romaric Philogene:** Say, yeah, it's just you need to enjoy the ride and we are doing, I'm doing that. And I really love, we are working with a customer all around the world.

And when you start at five or six in the morning and you end at midnight you really need to enjoy what you're doing. [00:32:00] Otherwise you are lost

**Brian Rinaldi:** yeah. No. Totally. And so one last question from me. So what, how is it? You said that developer experience is like critical to any product like yours be successful and I completely agree, but I think curious in terms of what I guess the hard thing is like we say developer experience and whoa, it's very, yeah.

What does that mean? I'm curious, what does this mean to you? What is it that makes a great developer

**Romaric Philogene:** experience to you? Yeah, it's a, it's super it's. I think it's a very interesting question. It's a very good question because it doesn't mean anything. In fact, it's just for, I can give my definition, but the definition of building something that building a product with a great developer expense is when you really.

You are building the product for your developer, with your users. It's the point. And I'm spending from day one, I'm spending so much time with my users. We have a great communities that I thanks a [00:33:00] lot. We have like customer that we are spending like so much time with them just to make sure that.

Platform is exactly what they need. It's not tailored for their individual needs, obviously, but it's tailored for the common the needs of the target that we have. And that's what we, I call just the, having the best developer experience possible, because it responds to the needs.

Exactly. The needs of your your user and you have to spend time with them. It's not like you just saying, Hey, I'm meeting, putting with a great developer expense. Yeah. It can be like fancy, beautiful, everything. It's it's great. But if it's not usable by your users, then it doesn't mean anything or you have to change the users.

Maybe .

**Brian Rinaldi:** Yeah. I always think I think in my experience where. A lot of companies remid this in this, my, my perspective is that the people who are building the product are not the people who use the product and haven't really put themselves, haven't done, like what you're doing, which is talk [00:34:00] to developers who are actually using the product to understand how they're using it.

So they're. Often, oftentimes they're lost in the world of how the product is built and they'll build the feature, but, and the feature works but it's not usable. Like when the, somebody goes out there and tries, it's yeah, that doesn't work, fit in my workflow. It's really a counterintuitive or something.

And that's, and it's often like a disconnect between the people writing versus the people using. And and you have to have people like yourself who kind of bridge that gap between them and. Yeah, make sure they. Understand how developers actually use something, cuz it's often not what we expect

**Romaric Philogene:** when we initially create a problem.

Yeah. Oh yeah. Oh yeah. Oh yeah. And I'm learning like every day, every single day, it's exactly that. And you have to just reconnect your users and the developers and the product team, all those people. That's the most challenging things ever in a company like us. It's not like building a technical, very technical product.

We can build like anything, almost anything. There is no problem. [00:35:00] It's just building something that is meaningful and usable by your user because our our team is quite experienced. And I remember one time I had one of my engineers saying, Hey, I'm I. I I can't understand how people just can't use the cloud.

They can't like, it's super easy to to do that and that, it was like super easy for him. So what I decided just to, Hey, So you need to spend time with our users and customer. You have to come to the meetings and all the different events, because otherwise you would just say always the same thing and assume that everyone is like us proficient as you are.

And it's not good. It's not good. Yeah.

**Brian Rinaldi:** Yeah. Yeah. It's hard to put yourself in the shoes, particularly of some of the users who are less advanced than, cuz it's a, there's a, we sometimes make assumptions about who the users are and then suddenly you see that in oh, I thought they were really experienced in, I knew the X or Y and yes, it turns out they don't.

And a lot of [00:36:00] people, a lot of developers, hope that tools like this will, will answer that for them. And then the tool comes in assuming they already know the answers. Yeah. So Joel has a question for you. How did you get introduced to tech stars? I can answer that.

**Romaric Philogene:** How did you get introduced to textiles by applying

Yeah no, I that's. That's fun because I have like your textile party just after that event and yeah. No, we just we were just we just applied, but that's quite interesting question because the day that we applied was like the last day of applications. And yeah, we really decided to candidate for that for one single reason.

It's because we are like quite experienced. If you look at our team and you get into the slash team. career.com/team. You will see that we are all experienced with impressive backgrounds. Even my CTO is as written like a book on the, my square performances, high performances, we were, we are like super of [00:37:00] the infrastructure.

There is no problem, but there's one thing that is missing. To be like your successful companies, the network and the network. We didn't have any network, and that's why we decided just to jump into textile because the main value it's like the Y community is from what you get from them is the network being able to connect it, to be connected to anyone in San Francisco, anyone in New York, anyone in India anywhere.

It's like crazy, very crazy. It's something that is underrated when you build a company as a developer, as a technique tech guy. But trust me, it's what makes like today we have great investors. We have a fundraise like 5 million in total. It's our last one needs like a seed and we have do data content square people do check at.

That I've invested into our company. And just for one reason is because we are like super well connected. Obviously we know what we are doing, but it's because we are well connected. And so if you want to, and that thing, I think it's [00:38:00] if you have a good qualification in what you're doing and you really want to get into textiles or even like why C are just try, but try and really.

Ask you, why you wants to get into that. And then I'm pretty sure that you would succeed to do that. Yeah.

**Brian Rinaldi:** Yeah. I would agree with you like that network is super important when I've not like I've only recently gotten a, I've been doing this for a long time. I've only recently gotten to a startup world and and I've seen that the companies who succeed, it's a combination of.

Good leadership, good product, and a, product market fit, obviously. But that network, because so much of it, like you can have a great product, but if you don't have that network to build partnerships and get investors and things like that, it your great product and nobody really gets to.

To see it and yeah. You don't have the funding to keep it going and it just can die from there. So totally that's yeah, that's really good advice. There wasn't any other questions from the [00:39:00] audience and I know it's late on your end and I really appreciate you. Coming out late at, in the evening when your family is there.

sorry about

**Romaric Philogene:** worry doing that every night. She's coming into the evening.

**Brian Rinaldi:** I have like stuff to back block out background noise for me like this. Still programmed so that because of dogs and kids, I, my kids are older, but they'll still come up. If you think it's gonna end, just wait. I have a 15 year old and a 19 year old and they I'm on a, I'm on a meeting like this and they'll come up, they'll wander up behind and just start talking like, hello, do you not see?

I they're old enough. They should know, but they don't.

**Romaric Philogene:** OK. So it happens when they're like

**Brian Rinaldi:** older. Yes. I hate to tell you all right. So great chatting with you and thank you for the great presentation and hopefully we'll have you back. And obviously you all are moving very fast. So we'd love to hear more about this.

Maybe, six months down the line when you get further along, and we can hear some of the great updates.
