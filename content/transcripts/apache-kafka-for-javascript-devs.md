---
_build:
  list: false
  render: never
---

**Lucia Cerchie**  6:22  
I'm Lucia Cerchie. I'm a developer advocate at Confluent. And I'm here to talk about Apache Kafka today, what the what the heck is that? Right? So let's get started. In 2022, the Stack Overflow survey results revealed that 34.16% of developers dreaded learning Apache Kafka, and I don't know about you, but when I have a feeling like anxiety or fear or dread, I try at least to respond with an attitude of curiosity. So why am I experiencing that failing so I can address the root cause. 

There are two reasons I can think of when it comes to Apache Kafka in particular one is that it's a new thought paradigm to start thinking about problems with so it's as if you were an API developer who had learned to build and make requests to an API. And, you know, all of a sudden, you're wondering about databases. So Apache, Kafka has a new, a new structure and it also involves thinking about things in terms of events. So it's, it's a new thought paradigm, and that can be a little bit intimidating. The first. The other reason that I can think my ad might be for this dread of running Kafka is that there is just this gorgeous depth and breadth of tools for Kafka available, kind of like there's a huge variety of ocean life and that can be a bit daunting to navigate at first. So in this talk, we are going to address those two reasons why you might fear learning Kafka and hopefully neutralize them. So let's go. 

Okay, so what is Apache Kafka is an open source distributed event streaming platform that aims to provide a high throughput, low latency solution for handling real time data feeds. So that's why we call a spiel right? And we will break the terms down and under your head get a deeper understanding of what this definition is, as we progress through the talk. Before we get into what the structure behind Kafka looks like, I think it's important discuss where Kafka is useful. So it's useful in things like event driven applications. That is an application design where instead of making a request to see if there's an update in an object, your application is subscribed to an event and as soon as a new event comes in, it can react to that new event. It can also be useful when it comes to designing data pipeline stuff like mainframe conversion and website clickstream analysis which it was used for its original use case at LinkedIn. So today, we're going to walk through the structure behind a mock app that takes in clicks so kind of like a clickstream analysis application and move them into Apache Kafka, and then we'll read them out in some walks. 

Alright, so if Kafka is event streaming, what is an event? Broadly speaking, an event is a thing that happens. Within maybe application design you can think of event is something like if you're writing a rideshare app, it could be that request for a ride. If you're writing, working with Internet of Things, it could be a change in the thermostat right? In if you're tracking clicks, it would be a click. So in Kafka events are represented by a key and a value. So here the value is a click with specified as a click on toggle right? And then you Surely you're gonna want to timestamp in there as well. So let's go back a couple. There we go. So how do we organize events? Say you were clicking on a page and there was a toggle and a search bar and a start button and you wanted to put all those clicks into one group, you would organize them into a logical grouping called a topic within Kafka. 

Now the underlying data structure of a topic is a log. There's a couple of things to note about logs before we move on here. One is that once an event is stored in a log, you cannot delete it. And you cannot mutate it. Sometimes people with data backgrounds come to logs with the understanding that, oh, if an event is read out log, it disappears. Because it's like a queue, right? That's also not true, an event persists inside of a log in a topic. And that's useful because that means you can perform analysis on events from several different positions at once without destroying those events, right. Now, topics are split up into separate logs called partitions. And each of these partitions can live on a different server in a cluster or grouping of servers. And that is what gives Kafka its low latency, high throughput quality. How do events get into those partitions, that's the role of something called a producer. So a producer is responsible for key assignment to partitions. So usually what will happen is if your key comes in and it's not know, then the producer will perform a hash function, and then it will assign each event to a partition inside of a general topic. Based on the key of that event. If the key is null, it'll do like a round robin thing. Also important to note, each producer can write to multiple topics. 

Now, if that's how events get into topics, how are they read from topics, consumers are subscribed to topics, they can read from many topics at once, and they can be organized in groups. So the thing that I wanted to point out here is that each consumer that's in a consumer group, if they're in the same group, they can't read from the same partition at once. So in this slide, consumer one can read from partition one and partition to consumer two cannot read from those partitions that has to read from partition three. So that was a lot of abstract contexts concepts. So let's get into some code, what we're going to do is we're going to implement a consumer and a producer inside a node clients. So the first thing that we're going to do is set up really these authentication details, I have a cluster of servers set up in the cloud. I'm using confluent cloud for that purpose. And I want to authenticate to it. So in order for the client to be able to do that, I have to give it this information. I'm using a utility file to read from it. Normally, you know, in node, we would use a dot n file. But this is part of a multi language suite of tutorials that was made for developers to learn Kafka and their language of choice. So and all them kind of use that same utility of just reading from from a separate utility file. So that's why it's this way in this code. This piece of configuration right here, the dr_msg_vb true. And what that means, basically, is that we'll be able to surface error messages to the client if we set it to true, so that's nice. And then to create the producer, we're going to pass in that configuration. And then this crate producer function returns a promise which resolves the producer and then also provides a delivery report and those errors that we're talking about, and then hooks up the producer. Let's move over here I've got I feel like I have to keep control of my mouse because it's a slide. But um, so here, what we're going to do is we are going to set our topic to click so that there's a clicks topic up in the cloud that we're connecting to. Then we have some mock data here that's going to represent our keys and some mock data that represents the data coming in from our, say our clickstream analysis application. So kind of like what we saw on the slides here. And then what we're going to do after we create the producer is produced random combinations of those keys and values into the topic. And we'll be able to see that once I pull up my terminal but I just want Need to point out also this function here, the flush function that just makes sure before disconnect from the producer using the terminal, all of the events that all of the events that get sent up 10 events will will be sent, it won't get interrupted.

So let's see how that works. So this is running the node file that I just walked you through. And we can see console logged a bunch of click events. So that can confirm for us that we have produced those mock events to the topic. Now how, how would we know that? Or how can we read those events? Let's create a consumer in the same client. So here we see a lot of the same configuration that we use to connect the producer.

And then we also have a group ID. This one doesn't matter so much since we have one consumer, so it's just going to boil into its own little group. But it's important when you're setting up applications to think about, say if you had like a micro service application, and you put two consumers in the same group, they couldn't read from the same partition, right. So you might want to instead use a UID. Because you want those consumers to be able to read from the same partition, if in your microservice architecture, they needed the information from the same partition, right. So just something to think about if you get started on it on your own. Here's the Create consumer function, I want to draw attention to this piece of configuration. Auto Offset reset earliest just means that there's an offset in the consumer. And what an offset is, is basically like a bookmark, that the broker or like the server that's in control of this information will keep track of and if the consumer goes offline, it can return to that bookmark and keep reading it. Then we connect to the consumer. And we will make sure it goes to the same clicks topic that we produce too. And we'll log what we're consuming once we consume it, so let's run that in the terminals well. Just change this to consumer real quick.

Okay, so we can see the events coming in that we produced. Some of them are from even earlier on in the topic due to that offset. And then once I produce, you can see as soon as new events are produced the consumers picking up on them. That concludes the code tour. Get back to it right now. So, as we saw, as soon as I produced the events, they were consumed by that consume where we could see it in the terminal. That leads a lot of people to refer to Kafka as a central nervous system because Kafka is able to transfer data in real time. So as soon as I produced that mock click data, we can see it coming in through the consumer right away. It's kind of like if you, you know, if your hand touches a hot stove, the classic like sense example, right? Your nerves are able to coordinate to move your entire arm away immediately. So hopefully, that addresses the first bit of the introduction of this new thought paradigm. The other part is how do we navigate knowing if say, we need to build something with Kafka, we're building something that's handling a lot of data and it needs to move very quickly in an organized way. How do we get started where resources and tools should be used? There's a lot out there. There's Kafka Connect, there's Kafka streams, there's K SQL DB, there's a bunch of different GUIs least for CLI tools, there's Kafka shell scripts, K, cat, KC control, confluent CLI, there's something called KIPs, which I enjoy reading, but there are Kafka improvement proposals, so Kafka is open source. And you can read the improvement proposals that engineers have created to kind of direct the future of Kafka. And that's super interesting if you're getting really into it. And then, like most technological topics, there's just a plethora of O'Reilly books about it.

Right. So how do you navigate this wealth of resources? I'm gonna throw it back back to when I was learning how to code in 2020. I don't think that was an easy year for anybody. No one's like, yeah, 2020 was my year. And for me, I was like, it's definitely no exception. Right? I was recovering from a traumatic personal loss. I was dealing with some gnarly health issues. use. And I was juggling childcare back and forth with my husband while I was going through a coding boot camp. And all that stress meant that I really couldn't debug my way out of a paper bag. So what I did was I turned to community for help. And the particular community at that time that was helpful to me was called virtualcoffee.io, there's going to be a link to it at the end of this talk, but the senior engineers there paired with me and showed me what kind of patterns to follow when you're debugging a but also when you're coding in general. And that really taught me a great lesson because now whenever I'm learning something new, I go to someone who's been using it for a while and say, Hey, what are what I have this particular problem with this particular constraints? And what are the upsides and downsides of using these tools have been considering so I would like to direct you to some community. 

So there's a couple of different ways that you can engage in community. So there's, if Kafka in particular, there's going to be conference in London Kafka Summit, London, this may 16 and 17th. I'll be there. I'm really excited to meet new Kafka friends. You can also check out your local Kafka meetup, I'm going to have a link that I can put in the chat, where you can access local, local Kafka experts. And then there's also current 2023. That's happening in California in September, which is a big, Kafka and then also like data related, centered conference. Online, you can use the conflict community slack, we will be happy to take your questions from, you know, small details, configuration details to large conceptual questions. Also, there's pretty lively Reddit thread, patchy Kafka. If you're interested in tech support, in general, to get support from your community, you can always go to virtualcoffee,.io. And then also, this one is great to Certified Fresh events, dot Dev, I highly recommend sticking around here. And that hopefully neutralizes the second fear for you. So let's return to that spiel. So Apache Kafka is an open source, distributed event streaming platform. So we discussed what events were that aims to provide a high throughput, low latency solution, thank you partitions for handling real time data feeds. And we saw how that data performed in real time. When we went down and saw a code example of a producer and a consumer. I'd like to present myself as your first contact in the Kafka community. This is my professional contact info, feel free to get in touch. I'd love to chat about it. And that concludes my talk. I'd be super happy to take any questions that came up. Yeah.

**Brian Rinaldi**  22:59  
Yeah, thanks. Thanks, Lucia. I, this was all new to me, too. I mean, I've obviously done event driven, like application stuff. Sure. Yeah. Using Kafka. We did get one question from the audience. And I've got some questions myself. But if anybody listening has additional questions, please just put them part of the benefit of these live, showing up to these events live is being able to ask your questions of the speaker directly. So Ryan asks, Have you seen any neat projects that emphasize WebSockets and Kafka are most front end Kafka projects over? WebSockets?

**Lucia Cerchie**  23:38  
That is a really great question. Um, I believe I have one for I can go

**Brian Rinaldi**  23:44  
join me. What's that? Something you're gonna see on the screen?

**Lucia Cerchie**  23:50  
Um, no, I mean, I don't have it right here. I mean, I need to look it up. I believe I have something that has to do with its live

data that comes in from the Norwegian Port Authority on ships. So yeah, that that's, that's something that comes in over a WebSocket. And Ryan, will get in touch in and get you that demo, because it's

**Brian Rinaldi**  24:17  
okay. Yeah, you can, if you if you find that you can post it in the, if you go back to the Chromecast or wherever, you can just post it in the chat or whatever. It'll be there. Yeah, it was. That's really interesting. So in that ship example, I'm assuming this would be like, the data is coming in about chips from an external system, and feeding it to Kafka. And then I can be on the site that's actually reacting to that ship data in real time, and maybe showing me location or

**Lucia Cerchie**  24:47  
Right, right. So yeah, that's this is a demo that I've been working on and really we don't have that like front end up yet, but we will. So yeah, um, Yeah, that's it's a great question what what other questions should you have?

**Brian Rinaldi**  25:04  
Yeah, so we've got more from from the, from the audience. Nick asks, at what point would you introduce Kafka into a project?

**Lucia Cerchie**  25:13  
Oh, that's a great question. Um, there's, so one thing that I know is that Kafka says, it accepts like conversion pretty well. So it's less why people use it for things like, like mainframe conversion. So you can slowly like incrementally introduce it in your org. So that's, that's something. But basically, I would do it if I was handling a lot of live data. So any any point where you have that, if you're using another way to handle it, then you can do do a pretty safe conversion, because of the fact that those topics can persist. Right? Um, but yeah, it would, it would depend on it depend on what like, I wouldn't use it for like, my personal objects, I don't handle any type of change on there. Right. So it's definitely it's definitely something

**Brian Rinaldi**  26:21  
that I'm thinking like, it's got to be very specific. Like, it's not just large amounts of data. I'm dealing with large amounts of data. They're constantly like streaming and like your ship example. Or like, if I'm tracking like, kind of similar to that, like, I'm doing. I know a lot. I know, people have friends who work in industries, where there's just tracking all the trucks that are delivering, doing repairs, or whatever, for, like I said in that kind of, like that kind of data that's constantly going in streaming.

**Lucia Cerchie**  26:53  
Right, right. If you're if you're executing batch data, and it's okay for it to come in, and 24 hours later from your when you execute the query, then yeah, but, but that the point is like, it's when you have that real time need. Yes. Right. And batch batch data queries that can kind of imitate real time up to a point, but they can't be as fast as like a truly real time system. Can be

**Brian Rinaldi**  27:23  
right. Yeah. And I think the key here, what you showed is that it's not just the it's not just consuming the data is that like, once I've set up that, like into Kafka, but like, once I've set up that consumer on my application, is that that's just streaming and constantly and automatically updating, right, so Right,

**Lucia Cerchie**  27:43  
yeah, it's reactive, instead of you having to go and make a query.

**Brian Rinaldi**  27:47  
Yeah, yeah, exactly.

**Lucia Cerchie**  27:48  
So a whole design.

**Brian Rinaldi**  27:51  
So Ryan, I had another question, which is that, would you suggest every browser session is a different Kafka Consumer? Or is it like a single consumer per? Like? It seems like, oh, okay, I'm going to set up this piece of application that has its own consumer, is it a consumer per session?

**Lucia Cerchie**  28:12  
Right, that is a great question. I will ask someone in my org, who is familiar with, like using it in browsers, and get back to you?

**Brian Rinaldi**  28:24  
Okay. Okay. Yeah, that is that is a good question. I guess. I'm thinking like, just offhand, obviously, I know nothing about that. Like, I'm only learning what you taught me. Like imagining that would really depend on the nature of the data, right? Like, yeah, because if everybody's viewing the same thing, then you'd probably be a single consumer for all those people. But if each, each session has to get its own

**Lucia Cerchie**  28:52  
data, then you might want to set up consumers. And you can also filter data. So those consumers can be consuming from different topics based on your user demographics.

**Brian Rinaldi**  29:02  
If you filter it differently for each user, then like if you had a single consumer, but I filter it differently, based on who's connecting. Is that possible? Or

**Lucia Cerchie**  29:12  
yeah, I mean, that consumer can consume from different topics too, but you might want to set up multiple ones depending on like, how much traffic you're dealing with. It's interesting, because I think this is also like, the hardest part of Kafka is like, it's like, okay, I got it. There's producers and consumers and events, they're storing topics. But then thinking about what you want to do with it, and how that works. And applying it to your concrete application. Like, recently, I was building like, kind of like a demo microservice application. And I had made the mistake of putting them all in one consumer group. And then I was like, why are some of my consumers not getting any events? When I see them being put into the topic, using the tools that I was using to to view the topic other than consumers? Understood? Oh, it's like, oh, they have to be in different groups because I was hoping To repeat the same partition, based on on a key, and they're all in the same group. So due to like the work sharing rule that is there, they could read from the same partition.

**Brian Rinaldi**  30:11  
And how do so how do you determine like, when, what your participants, the Kafka determines what the partitions are for me? Or do I tell it? Okay, this is this is, these are the different partitions,

**Lucia Cerchie**  30:25  
right. So there's a default number of partitions, there's six of them, and then you don't, as far as I know, you do not decide specifically which partition gets which, like, key assignment, but you can, there's settings on a producer that affects that. So it's also important to think about balancing your load there. Because if you know that, most people are going to say, in our example, come to a page and click on the toggle button. And that's going to there's going to be an end you want. Or say, instead of clicks, you've got clicks and clicks aways, and then you've got, like, other events on that screen, like arrow up and arrow down. But you know, clicks are going to be the biggest one, you might want to think about your partitioning strategy a little bit, because you know, that the partition with all the clicks in it is going to have the most load there. And you want to make sure that your load is distributed evenly to make sure that Kafka is performing to the best of its ability.

**Brian Rinaldi**  31:29  
That makes sense. Okay. Yeah. So it these are these are kind of feels like, like, issues, I haven't, because this is like a scale of application. It's like, I'm like trying to imagine all the, all this this amount of data coming in. But I mean, there are a ton of use cases that come to mind, like, you know, I'm thinking of like, anything with transactions that need to be able to update real time, and have the application react to them. You know, or like, some of your some of your other ones that I was talking about, about, you know, tracking locations or, or, or clicks and things like that, where there's just a lot of data and you have to react to that data. Makes sense? So well, one of the things so I just want to clarify like topics, is like the way I kind of segregate the different types of data that it's it's almost like, it's my thinking about it, right? If it's almost like, like, this is like my table in the traditional sequels. Like,

**Lucia Cerchie**  32:43  
surfing Yeah, yeah. So we've segregating

**Brian Rinaldi**  32:45  
different types of data, like, here's my click information data, but this is now my ship tracking data, you know,

**Lucia Cerchie**  32:52  
right. If they're making clicks to make a request, maybe you want to keep the request information in a different topic, right? Because one part of your application is analyzing user clicks. The other part might be tracking the requests that are being made for keeping the transactions. You know, like, what they are like transactions so that they there's no repeats or dupes them.

**Brian Rinaldi**  33:14  
Okay, that makes sense. Totally. All right. Well, I didn't see any other questions from the audience. But this is, I'm like trying to think what can I build? Using? Yeah, fun.

**Lucia Cerchie**  33:27  
Yeah, there's a, you can use GitHub as a source connector so that commits and things like that become events.

**Brian Rinaldi**  33:35  
Yeah, that's interesting thing, though. That might

**Lucia Cerchie**  33:37  
be that might be fun. I'll put a a link to I'm going to move it over. This, this link might change. works, but I will. I will put this demo. And he'll

**Brian Rinaldi**  33:51  
share some of those links. So you shared about coming in the in the chat as well. Yeah, okay. Okay. Let me share that demo. That's an interesting set of data. I'm like thinking yeah, any is another one would be I think any kind of like if you're tracking data coming in through any kind of social channel that you're reading from API's, maybe you kind of consolidating a bunch of social stuff. run updates on your application will be something that has a lot of things coming in. You want to be able to

**Lucia Cerchie**  34:29  
be reactive to Yeah, yeah. Like like LinkedIn.

**Brian Rinaldi**  34:32  
Yeah, like LinkedIn. Of course. Yeah. Who created Cafe there? Now? It's all comes together. Yeah. There you go. I think I think that okay, well, thank you Lucia. This was great. And, you know, hopefully everybody's interested in learning more about Kafka as I am because this was really interesting. So I really appreciate you coming out to speak to us, and I really appreciate it. Should everybody in the audience coming to attend and joining us live? Again, we have some upcoming events next week, we've got that uptime FM episode, which you really should check out talking about building well about like confidence building a business on open source. So that would be an interesting talk. That's with the CEO of Apple, right. So that should be really, really good. And then in two weeks, we've got that talk on ethics, and in in the workplace, so that should be really interesting.

**Lucia Cerchie**  35:38  
That one sounds like a lot of value. Yeah, that's

**Brian Rinaldi**  35:41  
to be a really good discussion. I'm hoping I'm hoping. It's great. So all right, well, I will see you all soon. Again. Reach out to me on Discord or via email and see you soon. Bye.