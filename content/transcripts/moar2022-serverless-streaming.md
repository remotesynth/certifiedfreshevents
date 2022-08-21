---
_build:
  list: false
  render: never
---

**Geetha Anne:** [00:00:00] Welcome to the session. My name is Geetha together in the next 10 minutes. We'll learn about server stream processing with Apache Kafka, K DB and Lambda. Before we get started a few words about myself, I am an enterprise solutions engineer. I provide technical guidance, design advice, and thought leadership to key conference customers and partners.

So let's get started. It seems like now more than ever, developers are surrounded by CF terminology, but what does it really mean? Do we really need to know all these buzzwords and marketing terms? I believe we truly have to understand the real power to help achieve the development goals faster and with minimum development and infrastructure management in this talk, I will define what server is stream process.

And it describes arguably the most important pattern to build the even streaming applications with KQ DB and AWS Lambda one where you separate the state for data operations from stateless business logic. Before we do that, I'd like to introduce you to Lin, which is really the [00:01:00] creator of Kafka.

And we are pioneering the new category of infrastructure. Data and motion paradigm. So Kafka has solved many use cases in the streaming use or streaming use streaming space, but confidence is really different because our products are have three core attributes that define us conference is really cloud native, complete and everywhere.

Meaning that you can deploy Lin on cloud provider of your choice. Bare metal virtual machine. Or on-prem is hardware. It is really agnostic and it is complete because we are an enterprise grade product, which is end to end. And it is more than a product. It's a platform. We are cater into multiple personas like developers, architects, dev op engineers and executives, where developers are really focused on building apps and connectors.

We want to take away that from them. So we have built one 20 connectors for them and clients that are beyond just Java. And with the familiar SQL sequel developers are finding it much more easier to navigate Kafka ecosystem and DevOps architects really want a solution that is, that really [00:02:00] enables automation and tooling that will enhance the Kafka's performance in elasticity.

And we have taken that into account and we have built something that is out the box. And we also have an enterprise gate security features like our back ACLS and data compatibility, and global resilience in the form of cloud cluster. All of that is powered by our world class support which we take complete pride.

because this talk is about how CASEQ DB part of Kafka's ecosystem is going to be serverless. It is serverless and how it integrates with AWS Lambda. And the combination is really powerful. We need to know about CASEQ DB. So CASEQ DBS data based purpose built for streaming applications and very strictly relevant to Kafka.

And it allows you to develop application that will respond in real time to events that are occurring and streaming into Apache Kafka. Or confidence cluster. So KQ DB provides you the ability to build these applications with no code approach. Instead you use something developers from a wide [00:03:00] variety of backgrounds are very familiar with, which is sequel.

That's why it is called KC DB. Obviously there are use cases that are enterprise customers are really fond of using CASEQ DB four, like data exploration, streaming, ETL managing their real time infrastructure, data IOT data, and log events and whatnot. And finally. This is one use case, which you're proud of is material views, because how we will see how you can achieve an expose, a continuously updating set of results.

That's what streaming is about. You have these events that are coming in real time, flowing events. You want a continuously updating results set of data to external applications living outside of Cal ecosystem. Now coming back to settling back to the concept of servers, it is not new it's just that developers, some of them don't know the meaning.

Meaning that servers doesn't mean that you don't need a server, which means that you just focus on building applications and not maintaining service and that the provider. Lambda will take care of building infrastructure for [00:04:00] you, maintaining environments for you. And this approach is tremendously beneficial for business because it centers down the focus on the core issues and not the Seny of really building self-hosted applications.

So there is this concept of stateless and stateful processing. You probably already know this, but it's really important to know the difference between them in order to understand a true service business logic. So stateless operations are one form of service, business logic, where there fairly simple because you don't stir the state beyond the lifespan of that function, call all that didn't necessary to process.

They were distained within the event. That for that reason, stateless ING is simpler and easier for that reason. For example, Cate function, right? You invoke that function with either true or false. And the result is returned based on the given condition like values equal to success or failure and calling this method over and over will also result in the same thing, because you're not doing anything new.

No, no status stored. But this type of functionality, lacks [00:05:00] context. And so you really can only use this task for filtering the events and whatnot, but not eventually sending the state of this event on a next event, because you're not released doing data or state of that store. So in this case comes the requirement for state for processing, which is slightly different from stateless because state for processing applications like, Hey, SQL DB are a little complex because they store.

A basic example for this is aggregation. For example, you want to keep the track of fail login attempt after a certain login attempts are coagulate. You want the application to perform some sort of action. You can only perform this action. If your application keeps the track of the state of the previous events, and this is done by case equally, and it is done in a very fault tolerant way, which is in place and make sure the state can be quickly restored.

Even when the local store gets wiped. KC DB has something called rock TV, which powers all of these operations. I want to also touch upon function as a service, which is the ability to create discre chunks of [00:06:00] code available that is available and to run in response to certain events. so the developers can focus on the specific use case and right code targeted to solving that specific use case.

And this is ongoing or sporadically occurring that only occurs the functional as a functional service providers, traditionally pair this execution model with pay as you go billing model, because it makes sense and it's more attractive to workloads that are running intermittently. And the idea is that you create your code, upload it and attach it to a triggering event.

And your code only. When it needs to otherwise, it just sits dormant and your function is not executed. It is very highly attractive because it didn't curse no charges during this downtime. You only pay for your functioning location and execution. And now coming to AWS land, it is not new. It doesn't need introduction.

It is a service complete platform which runs cord without provisioning and managing services which is a classic example of function as a service. And. And now if you see, Aw, Lambda will take care of everything other than [00:07:00] maintaining application, everything underneath scaling your number of active instances.

When the load is high, low data mining, the optimum number of computing power that is needed for your code and get the job done. This is all what data Lambda does. If you look at it. Both KC KDB and AWS Lander deliver on the promise of service applications with both the technology, you can strictly focus on achieving a specific business goal, and don't worry about the computing power.

If you see in this diagram it illustrates the high level enter and overview of solution where. Streaming application streaming events coming to Kafka topic hosted on conference cloud, and eventually all this data is written to AWSs Amazon DB dynamo Dini with why AWS Lambda this way with this direct integration, the Kafka topics can now trigger a Lambda function and process the data downstream directly.

So we, we did this with the help of an example application that we've built. If you want the quote for this, I'll give you the good hub link. Please hit please reach out to me. The idea is that [00:08:00] this is an end to end example of integrating K SQL DB application with AWS S Lambda which is a two-way communication K SQL DB be performed some work and writes result to a Kafka.

The Lambda function then does more processing on the result and writes the results back to another topic or same topic on Contra cloud. And then KCB has additional long running queries to analyze the results of Lambda output. So the application is running on Contra cloud. Obviously this is a stock trade application where the stock trade stream represents simulated stock trade.

There is a sequel code that is written to create a table out of the streams and. and after the table is created, KC QB then performs outer join a left outer join to create a stream table join. This join actually enriches the stock trade data with the user data to execute the trade. We use a left outer joint so that we always have the trade information regardless if the user information exists or not.

This is where the stateful feature comes into. Where[00:09:00] there is this killer feature of K DB. It has rocks DB, which persists the records to local disc and by using an local store, KQB can maintain a running status of a stream state by constantly updating the materialized view. And also KQ DB ensures that your state is durable through the use of change laptops.

When K C DB is writing stateful results to K R D. The same record is persisted to change laptop. Also, in the case of failure of local discs or local store is wiped out. You still have your change laptop from which you can restore the state of the event and you can rebuild the rocks DB out of it. And this is how KC KDB is achieving the fault origins that can guarantee.

And coming to the scaling and performance, as you probably know, AWS Lambda provides the ability to seamlessly scale and the, in the face of increasing demand. It automatically pro monitors and progresses of the underlying consumers for Kafka. It'll spin up the number of Lambda instances that are required for this also in Kafka, if you have [00:10:00] one consumer for one position and there's eventually a Lambda instance attached to it, if you need more AWS can do it for you.

We've also performed a load test for you for this use case where there are a hundred thousand partitions and how Lambda is really dealing with that. And if you want, how those results are, those were astonishing and Lambda truly delivered what they promised you. If you want to know about it, please touch base with me and I'll give you the GitHub link for that.

Thank you so much for this opportunity. I hope it provided your glimpse into what a server streaming application is like with KC KB and AWS Lambda. Thank you.
