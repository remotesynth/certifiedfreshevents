---
_build:
  list: false
  render: never
---

**Jonah Andersson:** [00:00:00] Hi everyone. Thank you for tuning into my session today in more serverless event. It's it's great. So great to be here. I'm very happy. Thank you for inviting.

All right. Is it time to roll? Ryan. All right. Okay. So let me. Go ahead. So today I will be sharing about developing state full server as workflows using Azure durable functions. And before I I got started with that. Its. Topic. I think Brian already presented me pretty well, but I'm Jonah Anderson.

I'm based in Sweden and these are the things and the stuff that I do. And I'm very passionate about what I do, both in my data job in. As a software engineer or DevOps engineer, and at the same time, the community job that or not job, but contributes [00:01:00] contributions that I do as a Microsoft MVP and an Asher trainer sharing knowledge to everyone.

And I'm also currently writing my book to about Asher. So feel free to check it out. Today I am planning to go through a bit about serverless and as. Azure functions, but it is durable functions. The application patterns that you need to know to solve some complex workflow problems, and also an example use case and code snippet for each patterns and recommended learning resources.

And before we go through that, I wanna share with you about the dining philosophers problem. I'm not sure if you have encountered that before, but the first time I encountered this was when I was studying Java development. And this is a scenario where there are like five philosophers.

They only have five chopsticks in the table and they need to eat dinners. And of course, if you are eating [00:02:00] chopsticks, Spoon and fork or knife and fork you would need too. Of course. But if the problem that we have in this dining philosophers is that they, if both of them pick up the spoon or the chopstick from left to they're gonna have a problem.

They're gonna have a problem. Of course, for example, deadlock, because they won't be able to eat. And then of course they will get hungry and they will start. The point that I have here why I'm sharing this problem, because when I was learning Java, I thought it, and concurrency, of course, as a programmer, I thought it was very interesting to to have this example because this happens as well in our normal lives.

For example, in crossing in the roads, if we don't have control. About concurrency in the traffic. We don't have traffic rules then concur deadline can happen there as well. And I also think as [00:03:00] a developer, based in my experience for the past eight years as a developer or an it consultant working with both front end, backend, and then back and cloud cloud integrations, I noticed that one of the challenges that I have, or.

Bugs that are hard to a deep bug and fix our concurrency problems or raising condition problems or deadlock issues between APIs and backend services and how it is talking to the client. And I believe myself that serverless solutions like Azure functions, if you're working with the Azure cloud platform is a good solution for.

And to those that are new and serverless I, I assume that there are some of you that haven't worked in serverless. So just to introduce you a bit about it. So serverless is is actually a service where technology, where the servers and infrastructure are obstructed [00:04:00] and cloud providers like Microsoft Azure GCP and AWS and other great cloud providers are taking care of that infrastructure for us so that we can focus on like for example, developer productivity, and also delivering logic and functions to the business and have that flexibility and some similar integration within the platform.

And also. Other APIs that are ex external and one benefit of serverless as well, is that it has this consumption model, which means that you are, you only pay for the instance of your serverless or the the pay ego model when you're running those logic that you've created. So since Sweden is has this term Fe.

So we have this FECA is a tradition in Sweden where family, friends and colleagues gather together to get something to eat or sweet to eat [00:05:00] during a coffee break. And I wanna compare serverless in this way. So this is what we have today, the infrastructure that we know. So we have. The monolithic architecture, which is like layered cakes.

You have everything in one place. The data layer, the logic everything business layer it's in there. And then we also have the microservices that are like cupcakes, so they can be chocolate flavored and that chocolate play word. If translated to like a software development or cloud development, it could be a microservice that handles user management or order management.

And then we also have containers, like a box of cookies. We, where we have everything. In one place. So that box of cookies can be can be deployed to a Linux operating system. It can be something that works for windows or whatever. That's on premise that needs to be in containers and then serverless they're light.

They're easy [00:06:00] to carry. If you need something sweet, then it's can day, like you can implement a function to send an email. Through trigger using serverless. But the point that I'm showing is this team is not to make you hungry. This morning to those that are in the states right now, but also, or states or Canada or wherever you are.

But it's about my focus is the more you go to the left. That means you have more control, but that also means that you lose the productivity that you have for your software developers, your it team. And and the more we move to the right, which is what's going on in the trend these days is to do containers and server less.

The more we gain productivity so that we can deliver to to the business and. To start with the topic of today before I move to durable functions I wanna introduce you to Azure functions. So Azure functions is a compute service in Azure, where you can [00:07:00] code event driven and then you can.

Focus on logic and basically it's a code your logic, and then you have the events that you have, which might be a trigger like an HTTP trigger, or it might be a trigger that was generated because you uploaded an image to a blob storage in the cloud. And of course the data that you're gonna pass in through those logic.

And then the next one which is the highlight of today's session is the durable function. So durable functions is an extension of Azure functions. So this means that. The capabilities of Azure functions is in durable functions, but durable functions are more focused into it's designed for us to work effectively or to work with stateful workflows in serverless environments.

And one of the features of durable [00:08:00] functions because it's stateful is that it manages and checkpoints and restart the state for us, which is not common in standard Azure functions. The technology behind it, it's because of the durable task framework, which is an open source repo, that's that you can check on the linked through GitHub.

Right now in that link. This, the. Languages supported are actually the common languages that we have today. C sharp JavaScript F sharp PowerShell, and recently they also have supported Java for durable functions. So these are the programming languages. So since I'm a.net developer, but since we wanna learn what we can do with durable functions.

So these are the languages. So if you're, for example, if you're coding your ex, you're good in doing JavaScripts, it doesn't stop you for coding durable functions. There's a tool or support for that S the K [00:09:00] for this tool. And. When you're working with durable functions it is important to know the concept of the different types.

So there are actually four types that's documented. So there's the client functions. Which is actually the type of functions that can be, it is like a starting point of your orchestration. This is, this can be your H GDP trigger or a Cosmo DB trigger. And There are actually different types of triggers available.

And there's a list of them, but the point of client functions is that it kick starts the orchestrator functions or the orchestrator. It starts the orchestrator. And the orchestrator is where you're right. Your workflow. Depending on the type of pattern or things that you need to do for your activities.

So the activity functions are the [00:10:00] basic unit of work or the test that you need to do. For example, Send email or or get this data from the database or it can be anything else, a specific task that you want to do based on how you authored your workflow. And there's also entity functions, which is used commonly for a.net.

There's what they call durable entities. Which is it's it helps in coordinating the status or the state of of a class. For example, if you're working in context with database, so you can use entity functions for that as well. And the orchestrator actually is The Philippine national folk dance.

We call it in the Philippines. I'm Philippina also we call it tin link, which is a traditional Philippine folk dance. So the orchestrator, just like in any stateful workflows, it is important that all everything, all activities in your [00:11:00] workflows are designed in good coordinations, otherwise If there's a possibility that your workflow won't work properly, just like this tinkling dance.

So if this girl and the boy are not coordinated and synchronized about what they're gonna do in the stance, as well as those two two people that are holding the Bumbo, then it won't be a tickling dance. So there's there's a good example there. So writing the orchestrator. Plays a big role in making the state full workflow and orchestration work properly to solve our problems.

And the, so basically the orchestrator is our front, but it also. Is strict because it needs to be deterministic. And this is an important characteristic of, or of the orchestrator that new developers of server, especially working with durable functions needs to know. And this means that you, we have to [00:12:00] author our workflow.

In the orchestrator function in a deterministic way, which means that it expects the same result at the same time. And the entire function will be replayed that workflow will be replayed. This is an example of as an visual illustration to the left, we see that We see that there is a determined orchestrator that controls the workflow of all task or activities.

And here also is another example where you don't have the orchestrator, which means that it can be separated or isolated tasks and it doesn't have any control. For example, if this Azure function is provisioned in another. Logical virtual machine and that gets restarted. There might be a, you're gonna lose the state of that.

I think if you require stateful, I think I would recommend I would believe that it is recommended to use the orchestrator or the durable functions. [00:13:00] And then I mentioned something about orchestrator needing to be deterministic. So there are actually a documented list of documented code constraints for the orchestrator.

And these are, this is these are just a few of them, but there actually. For example I'm talking in the.net world right now at this examples. So for example, in the orchestrator, it's good. It's recommended not to not to write grid or random numbers in your orchestrator. As well as configurations or blocking APIs loops for example, but what you can do instead is that you can you can use the method new grid through the context, and then you can use your configuration through, you can pass your configuration through the activity functions.

And then if you're really need to repeat the process, don't use the loop. In the work in the orchestrator, but he [00:14:00] can use the context matter create as new. And this syntax can be different language per language. So those are the constraints. And if you wanna check the datas, the rest of that, there's you can find it on Microsoft.

Talks or the link on this presentation. I wanna introduce you as well to the different patterns of charitable functions, because that will help you as a developer or as an author of the workflow. Which type of pattern that would help solve your specific business problem that you're trying to solve with serverless?

Of course. So there are actually six known patterns. That's documented. We have the function chaining pattern. There's the fan out fan in pattern. There's the async H. CTP API pattern, the monitor pattern. We have the human interaction pattern and the aggregator pattern. So the function [00:15:00] chaining pattern looks like this, as it says, as you see here, it's It's like a chain.

So it executes a sequence of function of functions or activity in a particular or order. Which means that the output of the first function here F1 is a required input. Not really required, but it's needed as a Quin to the F the next function and so on it's and so forth. I can show you an example here in action.

So for example, we have two activities. Things are tasked to do. And let's say that you have a blob trigger, like you uploaded an image to cloud blob storage. So that means it got triggered. This means the workflow started and the orchestrator got started its work and then activity one is schedule.

And then while activity, one is doing its job, the orchestrator sleeps and then [00:16:00] activities. One is done. The orchestrator wakes up or activity two is doing its job and scheduled the orchestrator sleeps again. The. Activity to is done. And then the orchestration is completed, but that's the first step at the first play you call it when it gets triggered again it will replay just that's just like what I mentioned or shared earlier.

So the orchestrator. Can be really a sleepy head, like my dog in the morning, my labradoodle dog in the morning. But it's good when the orchestrator is sleeping, because that means that you're not being charged for the other activities or the task. That are not running. You're only charged for that instance that are actively running.

And this is as for specifically for durable functions, you are also not charged, especially on consumption model. You are [00:17:00] not charged when. You are waiting for an external event because you can also wait for an external event, which will be I show I'll show an example in one of the patterns.

So it's good. Especially if you want to take control of what activity or task that are being run by your workflow. So a practical example was a simple one that I have here. So we have an Azure blog trigger. Which kick starts the orchestrator function or the orchestra. And then that blog trigger can be saved.

The first function chain is to send the message to service bus. Azure service bus is enterprise messaging service in Azure, where you can save enterprise queue data. And then you can ask another client or application to grab it, or get the retrieve that data. After that it can always the blog gets you can create a function or activity to [00:18:00] send a message to, or call via Twilio API.

And then you can also send a notification by email using send grid. This example shows that durable functions gives us the flexibility to integrate it within Azure with its other services at the same time, integrated with external APIs like Twilio or send grid, which is commonly used today in other platforms.

So I did actually have this a demo or project mini project as a template. So it can be found on my GitHub, but currently it's that version is that net core. I know that net has recently upgraded to that net six and seven is coming. So I'm in the process of updating this template so that you can use it to get started, but you feel free to look at the code.

If you have.net core running in your in your environment, So the expected [00:19:00] result would be like this. I would get I did get the message to the service boss queue. I got an SMS and then an email and also a call via sun grid. And then the next pattern is the pan out fan pattern, which is used to execute multiple functions or tasks in parallel.

And then you wanna wait for the result and then aggregate it when it's done. So this is how it looks in the code. This is in C sharp. So here we see a here we see a list of of items. That we're trying tests that we wanna work on. And then in the loop you have a work and then you're gonna perform those tests in parallel.

And then you're gonna use the, when all method to process the result, aggregate the result as one in this. In this as well. And then the next one is the async HT DPI pattern, which pretty [00:20:00] useful and useful. If you have, you are trying to solve problems with long running operations with external APIs.

So one example of this is This simple one. I wanna have a long running to check if my website is available. And in this code snippet marked in blue, that I used the durable HGP response where I passed in my URL, my website, and then used the death method. And then I have a simple if condition, if else, condition to check, if what's the status in my website, and then I can further process.

That information or the content through the response farther through the code. And then the third pattern is the monitor pattern. Which you can actually do a recurring process in a workflow. Just for example, if you wanna do a pre periodic job cleanup so in his, in this snippet, we have a [00:21:00] well of here.

That's checking if the status is completed and then here also we have an expiration time. The checks on the time. And then here as we notice here, when the orchestration of it, when the orchestrator is waiting for that time, it's gonna like sleep. For the next check. So it's gonna wait for that next event for the monitoring activity that it needs to do.

And then the next one is human pattern interaction pattern. So this is useful if you have a business problem or a scenario where you want to like. Approve a human being to literally approve the process, just the approval process. So here an example in C sharp, so an approval workflow where you would have to create a durable timeout.

For a timer. And then you would [00:22:00] have a condition here that your approval event, you're gonna wait for that external event. And based on that event, whatever when any of them comes first a response from a human person, which can be a supervisor replying to an SMS or email. Or if the time out goes out, for example, here you have a time out of 72 hours.

What if that person that's supposed to approve are actually out in vacation? So you have that control to process further if no person or human being is doing that. And this one is also Pattern is the aggregator pattern or stateful entities, which is used for aggregating data like event data for, from over a period of time, which, and that data can be coming from Different resources, and then they can come anytime.

And this is also a powerful pattern and durable functions that I won't deep dive [00:23:00] deeper, but if you're interested to check it out, there's a documentation for durable entities. And this is widely used in that net. I'm not sure if it's supported in all languages yet. Also we have this so I introduced you to the different patterns that we have, but we also have this flexibility to create any patterns that we want.

I believe so myself because of this feature of sub orchestrations, In durable function. So if you see here, this is just a very simple one. So if you really have a complex workflow, you can use sub orchestration, feature of durable functions to do that. And I believe currently it's supported only in three languages that net JavaScript and Python.

So this is how it looks in a C. So you're trying to do a four each. To in your device list of device IDs, and then in your, each of your [00:24:00] device, you're doing something else. So that's the sub orchestration there. And if you. Ready to, to develop Azure functions after all the basics that you learned and the patterns that you know, then you can actually there are a lot of ways for you to learn.

It's everywhere. It's free. and you just need to have time dedication to learn learn by doing that's what I believe. So you can develop using Azure portal or your favorite ID tools basically. for.net or it's visual studio. But if you were like multi-language open source and lightweight there's vs code, and then the most important one is that you can develop locally.

So you would need to have Azure functions, core tools, the latest version, and some kind of postman like to do web request tests and storage Explorer. If you wanna check how's your storage and instances [00:25:00] for. For the workflow is doing because it's connect, it's logged as web jobs in Azure storage.

And then for coding, durable functions, there are good things that you need to know. For example, for monitoring I would recommend application insights to get integrated with that when it comes to deployment of making changes. So it's good with conscious versioning and Making use of deployment slots and then for security Azure volt is recommended to save your connection strengths and also Azure storage explore if you're developing locally.

And then error handling. Usually if something goes bad, , if you're in trouble, you already code your workflow. Not so good. So you're gonna get this function failed exception. So in order to prevent that from happening. So these are my recommendations. So you can actually use [00:26:00] durable timers to take controlled, for example, of the external And then you can also actually, if some an activity fails, you can have use the feature called call activity as sync would retry.

And there you can set your own configuration how often it will retry what it will do when it retries. And of course, the tri the typical standard Trico block that we do in in our code to prevent errors from breaking our applications. And then there's also durable functions monitor so deployment you can we have everything.

You can do infrastructure as code. You can deploy your Azure functions in windows and Linux, and also GitHub and the normal pub XML way from, for publishing. And for learning resources. There are good, there are a lot, but these are some of my recommendations. So [00:27:00] check out Azure functions, the Microsoft learn.

And also there's another MVP in Netherlands, mark, mark Dicker that has this school for Asher functions for both beginners and high level, and it's free and it's open to community. So I recommend that as well. And then I always believe in learn by teaching, not just learn by doing, but also learn from by teaching.

I also recommend being a mentor for serverless bit project, which was, I was also a mentor myself. That those are good ways to learn and learn more about Azure functions. So finally, I wanna conclude that as a developer, I love service. Because it helped me solve complex problems and helped me build modern apps.

And it makes me also productive. Thank you so much. And that's my labradoodle by the way. so if you have questions or if you wanna copy of my source code, feel free to connect. So I have [00:28:00] my link tree there when you scan the QR code, thank you so much. Ah,

**Brian Rinaldi:** thank you, Jonah. Of course, I'm an amateur.

I muted myself. . That was great. Love the labradoodle. I gotta admit I don't know a ton about Azure and Azure function, so this was like eyeopening to me, especially, cuz I'd never even heard of the concept of a durable function. So I've got a bunch of questions for you about that.

So I Because I want to dig into it a little more. So first of all, we talk about state, right? That orchestrator is that, where is the orchestrator where the state is kept? Cuz you said it only goes to sleep and then wakes up. So is that where like that, what keeps state across the different functions that are orchestrated by it?

Or how is the state like managed in, in, in that.

**Jonah Andersson:** I believe this state is in the entire durable functions like package I can call it because of the durable task framework behind it. Okay. But [00:29:00] yeah, so this is, that's why it's important to thanks for the question by the way. So that's why it's important to write the, add the flow, the proper way, just like I did, I had to share.

Constraints, because I think as a beginner, it's important to know that the code constraints for example avoiding infinite loops in the orchestrator because if you're a beginner and it's a consumption serverless model in the cloud, the con one, one example, consequence of that is you're calling lots of tasks, like calling an API and it's running in an infinite loop, then that can cost like cost consequences for that.

But yeah, it's the that to answer the question, that's the durable task framework behind it in that pretty

**Brian Rinaldi:** one. Okay. Yeah. And I'm guessing it would be easier in this kind of scenario to. Accidentally write an infinite loop because you call a function that triggers an event that then [00:30:00] calls, basically triggers the whole thing all over again.

**Jonah Andersson:** it's don't call that inception you, the movie inception, in like you have a workflow that we place. And then in the workflow you have the infinite loop and that's what we're trying to avoid in that loop. So if you have a. If you need to repeat the process, you can do the call another activity a sync, or you can do that wild loop in your activity test, like specific tasks that you're gonna work on.

Just like a normal application logic.

**Brian Rinaldi:** Yeah. And so I'm guessing like the benefit here besides like actually maintaining state is that it makes it easy for me to separate pieces of logic into like very distinct kind of. Uher functions, but then the orchestrator then handles okay, I need to call these in a particular order.

I need to call these based on a workflow or [00:31:00] any number of things. Like you said, so I've been so used to writing, just functions in that kind of, okay. I just call them within my code as needed, but never thought about having an orchestrator to manage all that. Yeah, so that's the benefit really is I can then write very distinct functions that do very particular things, but then have all of them linked together in this orchestra.

**Jonah Andersson:** Without using the state, also the state full workflow. So that's like the right, one of the benefits, because you can use you can code serverless with normal Azure functions. Just what I shared, but if you really want. The state of the test that you want not lose it. That's so that's a good thing.

It's a recommendation, but maybe some use case because we cannot do durable functions for everything. Just like solving problems with programming. Sometimes we have to choose specific solutions. So there are, that's why application patterns was a good good way also to [00:32:00] identify which solves this.

But one of my favorite is I think. What could benefit this is the human interaction pattern, and also that approval workflow that sometimes you have to do that, to automate a process, for example, or call an API and,

**Brian Rinaldi:** and would be what would be the big. Drawback say to using, because you said you don't wanna use these all the time.

What is it more of like a cost thing because of there's something different with how the durable function works that might cost more or just because of complexity or what would be your recommendation in terms of when I don't want to use a durable function?

**Jonah Andersson:** I think it can be with the complexity also.

I think so. I think it's important that what your workflow it's gonna be when and what you're trying to solve. I think it can be the com it can be complex. If you for example, I showed sub orchestrations in an orchestration. So if you're trying to do that as a [00:33:00] beginner it can.

Complex and when it gets complex, the debugging , it can be tough as well. So I it's powerful, but I'm not saying that it's not that durable functions that has that big witness. It's the other way around it actually, it is actually powerful. It's just that it doesn. It's not maybe perfect for all solutions, but certain solutions.

It's very powerful because I know some users or business that have saved a lot of money because they're using Azure functions or serverless in general.

**Brian Rinaldi:** Yeah. I can imagine it's basically use the simplest possible solution to solve the problem that you can. And if you don't need to have a durable functions framework going.

Go with a regular Azure serverless function or whatever. And then if you need to have this kind of workflow, this, then obviously this is super powerful. Excellent. Yes. All right. Yeah. That's awesome. I gotta, I say it's really [00:34:00] got my mind thinking about like how different ways I could structure some of the code I wrote in.

Can use something like this orchestrator to, to manage that. That's really cool. Thank you so much.
