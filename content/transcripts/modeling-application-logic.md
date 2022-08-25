---
_build:
  list: false
  render: never
---

**David Khourshid:** [00:00:00] Hey. Awesome. Thanks for thanks for having me. Yeah, today's gonna be a little bit of live coding, a little bit of live knot coding, and you'll see what I mean by that. In a minute. First of all, a little bit about myself, I live in Orlando, just just like Brian here, but I am wearing a jacket cuz it's cold inside my house and he's wearing a t-shirt cuz I guess it's not cold inside of his house.

I don't know, maybe the air circulation or whatever is bad here. Not sure why there's a discrepancy, but. I have been a software developer for about 10 years, and I've been very interested for most of my career in state machines and state charts. Of course. And the reason that I'm interested in this is because application logic can get hairy, especially as you add.

More features and more requirements and specifications. And I suffered through this when I was a junior developer, we had all of these complex workflows where you go from step to step and like just trying [00:01:00] to organize all that logic, especially as you needed to add features it just got really confusing over time.

And it seemed that with normal programming languages and the way we normally developed things in frameworks, that there was no really good pattern to do this. And so that's why I took. Time travel trip back like KAA century and research, this thing called state machines. And so what's cool about state machines is that they're a visual formalism, which means that they could be visually represented and they're formalism.

So they're visually exact. So technically you could take those diagrams and make them, into something executable. So it's like drawing code or diagramming code instead of actually typing outs code, which. Seemed like a fantasy to me at the time, but that's why I started X data and wanted to just dive into how we could make something visualiz and also executable at the same time.

And so I'm gonna be describing like concepts of state machines and state charts in also how X state [00:02:00] works by doing an example. And so the example that I want to do is a a pretty simple example. This is a video player, like you would see on any landing page. And you could just imagine this as a specification or requirements that you got to implement in an app.

And so we might have user stories like and I'll just type them out here as a user. The I'm not gonna type out the full specifications, but the video player should be minimized. At first. So right now we see this video player it's like in image. And then when I press play, then the video player, so video should be maximized and it should start playing.

So that's where the behavior that I want. I don't want it to play in this small thing over here. I want it to do the thing where it goes full screen and then it it starts playing and [00:03:00] I'll actually show an example of that that I just saw because this is actually a pretty common pattern.

In, in the Elga website, there is a trailer video. So you could see this is just an image, but once you click watch the trailer, it goes full screen and it starts playing the video right away. And so this video is playing and if I press X, it's going to do a few things. It's going to stop the video and also minimize it.

So when I exit the video player, it should. It should be minimized and it should stop playing the video. Also when the video is done and, obviously we don't wanna keep staring at, the last frame of the video. That's not very useful. The video player should be minimized.

Automatically. So this is just an example of the series of user stories that you might get in, one of your applications that you need to implement. [00:04:00] And so our job as developers is basically to translate these user stories into actual code. And the way we would do this normally is just looking at this and be like, We could have a bullion let is playing equals false.

Let is minimized equals true at first. And just all of these variables, that's just just determine the state of, that part of the application that we're working in, but instead using these ion variables, which, definitely get messy, the more.

The more you add billion variables. I propose using state machines. And so here's how state machines can make things like a lot more visually clear. We're gonna take these same requirements and usually I would go to ex scale draw or something like that. But this time I'm going to go to state lead.ai/editor.

And so when you go to this website, you're going to be thrown into. This this visual editor that [00:05:00] allows you to create state machines. And don't worry, I'm gonna teach you like what state machines are if you're not familiar with them. So a state machine is comprised of a few parts. The three basic building blocks of a state machine are state events and transitions.

So a finite state machine has a, as you could probably guess a finite number of states in this case, we have first state and second. Now, when I say states, I'm not talking about any data such as the length of a video or attributes like that. I'm talking about behavior like states that can that can contain the behavior of a component of your application.

For example, one state could be playing and one state can be paused. I'm actually gonna make it lower case. That's just my style. It could either be playing or pause. And the application is going to have different behavior in whether the the video is playing or paused. And so that behavior can be things [00:06:00] like what's happening, what side effects are being executed.

And also what events are possible from that state. So for example, if your video is playing and I'm just gonna call this video player anyway, if your video is playing. You could pause it. You could stop it, but you can't play it again, like playing the video again. Makes no sense if it's already playing.

Same thing with pause. If the video is paused, you can play it, but you can't pause a pause video. You can, but nothing should happen. And so there's like at. At best case scenario, like doing events where those events shouldn't do anything it's just redundant. But at worst case scenario, you could get into some really serious bugs when a user tries to do an event in a states where they're, they shouldn't be able to do that event.

We saw this I guess a few years ago with the iPhone FaceTime. Apparently like when you started a video call and you added yourself to the conversation or just did a series of [00:07:00] actions you could listen in on the other, like to, to the other end of the phone call without the other person accepting the call.

And so that should be an impossible scenario. Another very common use case is when I'm submitting a form and I press that submit button or. Whatever the button says and I'm frustrated because it's taking a long time and I click that button a million times. It should not make another request.

Like either the button should be disabled or it should just not handle that action, but what ends up happening? And you could try this out whenever you see it next time is that it ends up making a ton of requests to the server. And you have to defensively program to prevent against that.

But using a state machine is just a really natural way of containing those different behaviors. So in our video player we actually have a, I'm just gonna call it closed and open states here one minute, or actually let's call it mini [00:08:00] and full. So we have our states. These are just like the two basic states, the video player is either going to be small and collapsed, which is the mini state, or it's going to be full and expanded.

And by the way, I already have some styles over here that we're going to be using later for when the player is full, how that should look. So yeah that's states now there's events and transitions. An event is something that causes transitions an event is in occurrence of something happening. For instance in the in the mini estate, we could have the toggle event.

I'm just gonna call it toggle. And so when the toggle event happens and we don't need to know the exact details of how that toggle event can happen, we just need to identify it somehow. So we have toggle it goes to the full. And then when we toggle it again, it goes to mini or you could call this closed or something.

These don't have to be the same event. I'm [00:09:00] just demonstrating this with the same events for clarity. So now we could simulate this and see that when we're in the mini states and the toggle event happens. Now we go to the full states again, if we're in the full state and the toggle event happens, now we go to the mini states.

What's cool about using this is you could actually export it to JS O but I'm gonna code it up manually, just so you could see how you would use X date in order to express this state machine which is a model of our application directly in code. Obviously you need to have X date installed and that's pretty much the only dependency.

We're not gonna be using any frameworks in this demonstration. I'm just gonna be showing you how you would do it with X date. And we're gonna go old school even before the days of J query and all that. And use document dot, get elements by ID, really useful stuff to know. I always recommend everyone brush up on their like core, basic web knowledge before jumping into frameworks or libraries.

Or things like that. So I'm going to [00:10:00] import it's called create machine from X eight. And so we're going to create a machine that basically describes these user stories and eliminates the use of bullying variables. So we're gonna make a machine yeah, I'll just call it machine equals create machine.

And this is going to, we don't need to give it an ID, but I'm just gonna show it here to just for clarity. And just because this looks nicer individualization. And so we need a few things in our state machine. I describe that three basic parts of a state machine are the states, the events and the transitions, but we also need an initial states, or we need to specify what is the first states that the machine is always in when it starts up.

And in this case, it's mini. So now we have a couple of states, we have mini and I'm just gonna make this an empty object for now and we have full. This is our state machine, and now we have to actually transition between [00:11:00] those states. So that would be on toggle full and full when we toggle.

So on toggle. We go back to many. All right, cool. Let's let's just verify that this works, I'm going to first console dot log, the machine dot initial state dot value. And so this is going to be the finite state value of that machine. Ignore this first line over here, but yeah, we. Mini right over here.

And so if I have next date equals machine dot transition from the first date, so the machine dot initial state, or you can put undefined it's up to you. And we pass in events like toggle let's consult out log the next date. Oops. Next date do value. So now you're gonna see that it transitions to. Let me show you that again.

Okay. It's not gonna do it, but that's okay. So you could [00:12:00] use machine do transition as a peer function to basically determine what is the next date. When I have a current state and I have this event, now you might be asking isn't this just really similar to Redux. And the answer is yes. It's Redux with.

You could consider machine, do transition to basically be a reducer. So now let's make this alive and by alive, not just as a pure function, but as an entity, that's actually holding its own state receiving events and updating its local states based on the events that came in. So the way we do that, we have to import one other thing.

Which is interpret. We're going to interpret this machine. Gonna call it a service interpret machine, sorry, dot on transition. And so this I'm just adding a listener. So whenever the state changes, I'm gonna console dot log, the state do value, [00:13:00] and then we're gonna start it. Right now it's just going to log mini because it is in the mini states.

But I actually want clicking this to, to toggle it. Sorry about that. I don't have Corona. I promise you. So I'm gonna add something here. This is like one of those, get the kick outta the oven things. But yeah, so we're going to add an event listener to the player, which is this.

And so whenever we click it, we're just going to send that's toggle events to the service. So the reason we're doing this is so you could see what happens when we click it, which Nothing right now. Let me just make sure that I have the right stuff. We have the video, we have the player. Yeah, let me just inspect this real quick.

Okay. So here's our player. Debugging is always good. Okay. So we have the player and, we want to send event. Let's just make sure it's being captured. So console dot log quick. Is [00:14:00] okay. There we go. I don't know why it wasn't showing that, but yeah, you could see when it's clicked, it goes from mini to full, to mini, to full see, so you could see it's going back and forth.

That was really weird. It's like a bug that solved itself that couldn't figure out why. Okay. What I really like about on transition is that you could actually impart side effects in here just to quickly test things out. So what I'm going to do is add that attribute the state attribute.

I'm gonna add the state do value to that attribute. So state dot value. So this is going to appear on the elements as data states equals mini or equals full. And so it's going to change that value. So now when I click, you're gonna see it goes to full screen. And when I click the player again, it goes to many.

So we have that part of the behavior working.

And so that is one of the most basic state machines that that you [00:15:00] could create. And so I know some of you might be asking like, okay, why would I do this? I could just use a ion for this. Remember, we have other requirements and S don't really scale for these requirements, and I'm gonna show you how state machines can evolve to become state charts and become a little bit more powerful.

So remember that one of our requirements is that when the player is full, we want this video to actually be playing. So we could do something called adding nested states. And so I'm going to. Actually, no, I'm not gonna add states that comes later, but we are going to add another state chart feature, which is actions.

And so I could say entry and I'm just going to do video.play really nice API. This is a video element, so we could just call.play and it's going to play. And it's pretty awesome. And so exit via video dot Stop pause because we don't want the video to keep [00:16:00] playing. Yeah. Let me demonstrate like what exactly these entry and exit actions are.

So in entry action. So I'm just gonna call this play video is executed whenever you enter a state and same thing with an exit action. So whenever you Whenever you exit this date, you pause the video. And so the reason why these are important is because there's three types of effects that you could do.

They're all the same sorry. Three types of actions. I meant there's entry actions, exit actions and transition actions. The ones that are probably going to be most common are these are these transition action. So I could have put play video. Over here. And so whenever this transition is taken, it's going to play the video and go into the full states.

So the reason that you would wanna use enter your exit actions is when you basically to dry things up. So when you see there's a lot of transitions and every single one of these transitions going into the full state plays the video. That's your sign that maybe you [00:17:00] should move that action to the entry and same thing with exit actions and things like that.

Yeah, let's let's see if this works, I'm gonna reload just to triple check. It's going to try and pile modules and do all that. And so when I click here, it's actually going to play the video. And so if I exit out the VI, it pauses the video. It goes here and it works just the same.

Okay. That's awesome. There's something else though that I want to add when this, and of course, it's part of our specification too. When the video ends, we wanted to go back to the mini state. And so this is what I mean by like by having those entry and exit action. So I'm gonna call this video dot end it.

So when this happens, We also want to obviously the video is gonna be paused, but we do want to go back to the mini states. And so you could click simulate real quick, say toggle, and let's say I'm watching the video and the [00:18:00] video ends. Okay. We verified that our logic is working. Let me go back here.

And so we're gonna do video dot ended. Many. And so what's great about this structure by the way, is that you could change these transitions. So let's say that after the video ended, you wanted to pop up a form that says, what did you think of the video, or enter your email to find out more information or something that does something different.

So now instead of like diving through the code and figuring out where to change that thing you would just change it right here in the transit. Now that video dot ended is going to be, we could hook up that event here. So video dot event listener ended. I love the video API. It's so straightforward.

Service dot send, and we could just send the video dot ended event. Okay. So now we can see that when we play this, it's gonna go in full mode. Thankfully it's only four seconds. And when it's done it shrinks back down. This is exactly what we [00:19:00] want. And just for more measured, let's say that we wants the video to to close when you press the escape key.

So Keith escape, mini, same sort of thing. And then we could just add an event listener. So I'm just gonna do that right over here. So that whenever the escape key is pressed down, we go back to the mini. Oh, so I forgot to press the escape you, so I'm gonna press escape and you could see that it just went back to that state.

So that is a very small demonstration of how this little thing can express like logic of, your. Complex applications. And just one more thing to show you while we're working on making the the brand's new stately visual editor, able to visualize applications, we already have live inspection utilities that you could use.

And if you import inspect, oops, inspect from X date inspect, and then we Inspect URL, [00:20:00] just date AI slash fi inspects. I think that's what it is. And I'm gonna do iframe false by default. The iframe is true. But right now we just wanna pop it up in a different window and then we just set have tools to true.

Then this is going to show you. The actual basically the same state machine that we created over here. It's gonna auto layout it and make it look nice, but you could see that's going like from mini to full and all of that. And so what's really cool about this is that if I interact with this application, you could see it's in the full state.

And right now it's gonna go back to many cuz the video's gonna end. Hopefully.

Oh, wow. Does the video pause while I, okay, so you see, it just went back to mini and it goes back to mini over here as well. You could see the log of events over here. And so basically you have an inspection tool that you could[00:21:00] look at. In real time with the state machines you're using for for your application.

Now this of course is doable with a reducer, but then the biggest thing that reducers are missing is a way to declaratively specify which actions or side effects are supposed to be executed. And so that's something that state charts really Excel at. Plus this is a lot. Concise than having to have switch statements or nest switch statements.

Yeah, you could just think of this as a superpowered reducer. But that's an overview of how X dates can help you visualize and visually create your application logic.

And that's it.

**Brian Rinaldi:** And I'm muted. Like really I didn't realize you were done yet. So I was like ready for the next part, cuz that was awesome.

**David Khourshid:** I would I could go on for hours, but

**Brian Rinaldi:** no, that was really cool. I love the little debugger that was that's. That's awesome. Under [00:22:00] normally if you have it in the iframe, is it gonna be just like showing at like at the bottom of the page or something like

**David Khourshid:** that?

It, it shows in an iframe, but you have to like style the iframe and put it somewhere on your page. There's a lot of extra work. Yeah. Okay. Yeah. But so might not be worth it to do that, but. I think all you really have to do is do I frame data X date? And actually let's see if this oops.

Can't do that. I did do. That I forget, this is not react. , if I take this out then yeah. It'll show in a very tiny thing. So you have to like, that's what you're saying, width and hide and everything yeah.

**Brian Rinaldi:** That's really cool. So we got a number of questions. Yara SL asks, how much of your app do you recommend putting

**David Khourshid:** into.

That's a really good question. So I If you have a new app you're completely Greenfield then using something like X eight can be really useful, even just as an organization tool for understanding what are all the events that could happen. What are all the states that [00:23:00] I could be in, but honestly X eight is not something that you have to use like everywhere.

It's not like an all in type of thing. It's something. Let's say that you have an app or a legacy app, and you have a new components that you just want. You have some special logic for it. You could use X a just for that tiny component. So it, it's not meant to be something that dictates the entire state of your application.

It definitely could do that. And it excels at doing that, but you could use it at the tiniest level to the biggest level in your app. So

**Brian Rinaldi:** you, so that you even, you could incrementally adopt it, say I just wanna to this component for now. And then over, over time kind of transition the application to use it.

**David Khourshid:** Yeah. Awesome. Yeah. That's it.

**Brian Rinaldi:** I think we in my experience, like when I'm building this stuff, like you start adding states. If you don't think about this ahead of time, you're adding states without giving much thought to it to like what the different states of a particular page or whatever part of the [00:24:00] application.

And then, you end up, that's where you end up with those kind of problems you described where it's I didn't really think about oh, I just sat there and I'm like, okay, I need to add, they asked me to add this in. So I'm going to go in and add it and didn't realize that, that conflicts with a different state and we end up with a mess of something.

So I, my, in my thinking there is. , it's probably good to add this. Even when the states are simple and you don't have many, but at least then it can grow without

**David Khourshid:** causing problems. Exactly. I say like a good rule of thumb is if there's any possibility that you might have say more than two states in your application.

Because a lot of people say, I don't need X data, or I don't even need state machines or anything right now because my application is so simple. And to that, I say, applications don't stay simple. And the applications that do stay simple, there's going to be like, and there already is like, An infinite number of tools that could already do those kinds of applications.

Like those simple crowd applications, which even those have multiple states in them, but you want to[00:25:00] code in a way that lets you scale complexity over time. Not in a way that's just like the easiest way to do it. And that's why, people say X a is a bit of a learning curve, which it is.

but you're not learning X state, you're learning, state modeling and state machines and adventure driven, architectures, all things that are really useful, whether you're using X state or not.

**Brian Rinaldi:** Yeah. Granted, X state better than anybody, so it was easy to watch you do it, but it didn't seem that difficult.

So I, it definitely seems like something wouldn't be that steep of a learning curve, but right. Okay. We got a bunch of other questions. Jimmy asks, what are your thoughts on how this aligns or differs with RX? These seem to solve similar issues in terms of state and derived state.

Do you agree? When would you use X state versus RX? When

**David Khourshid:** would you. So first of all, I'll say that X date actually works pretty well with RX JS the interpreted machine. So this service over here is actually Sable. You could do with RX JS, on states equals from, [00:26:00] and if, RX JS, you know what this from is so from service and then you're done you also have service dot subscribe if you want to subscribe directly to it.

And it takes either an observer or, those. Functions RX JS has a pretty interesting function signature for that causing some issues, it, it works though. You basically, this is Sable. The biggest difference though, between something like this and RJs is RX JS. You have a source in you're listening for.

Emitted values you can't really talk back to an observable that's unless, you do something weird, have a behavior subject that forwards those events over to a scan operator or something like that. But that's not really a first class concept. I would call like these things, which I call actors.

It's very similar to the actor model. I know people have a very strict definition of that, but these are things that are observer or sorry, observables and things where you could send data to. So you could send events, receive events, and it's like an it's like an observable that [00:27:00] could also spawn other observables too.

So there it's superpowered observables. Okay.

**Brian Rinaldi:** All right. I don't know a lot about RX X, J S O. So a lot of that was over

**David Khourshid:** that make sense to some people

**Brian Rinaldi:** hopefully, Jimmy, you got your answer. So Linda asked would love to hear if the visual tools would potentially be open to other state management tools in the future.

N GX.

**David Khourshid:** Ah I love that question. Yeah. We were actually just talking about how like within our team, how this could maybe take like a Redux producer or something from like you said, N GX and at least at the very least visualize all the events that are possible because most of the time, the way that those state management libraries are.

They don't have finite states like this. They have a bunch of bullying variables, or you might be defining these ad hoc with a status enum or something like that. But at the very least just having this and being able to simulate it is pretty nice. So it is one of our big goals and also the visual editor.

We have [00:28:00] much bigger goals than just having this as something that could visualize X state machines. We want this to be the directed graph tool for anything that can be represented by a directed graph. And it turns out there's a lot of things like that. Like even GitHub actions, C I C D pipelines workflows different things like that.

So we want both different inputs to this and different outputs as. Like being able to express this as a, an SVG diagram that you could put anywhere. We have a lot of big plans for this. So the answer is yes. We're thinking about other state management tools as well. Cool.

**Brian Rinaldi:** Yeah. I love your idea of the GitHub actions cuz I found when I tend to write those like kind of understanding all the different parts where the, when they get complex can be hard to visualize and.

Writing when you write it out in Nemo or whatever. It's just not, it's not hard. It's, trying to wrap your head around what the heck is going on here. The logic of it is difficult.

**David Khourshid:** Yeah. Nice. That's awesome. [00:29:00] So

**Brian Rinaldi:** Michael asks any reason to do play and pause and entry and exit on one state, not entry on both states.

**David Khourshid:** You can honestly, this state modeling or modeling your application logic is more of an arts than a science. Some people might want to just put this play video action on toggle and put pause video on this toggle that goes out to mini, or maybe this video ended thing, or maybe something else, like the key thought escape thing that we saw.

It's really up to you. So honestly, it's one of those things where you have to just keep modeling stuff, see what's best, but modeling is better than not modeling. And so the way we typically code applications, we forget to plan stuff out like that. But at least now you have a visual framework for, oh, I could put this here or I could reuse this over here or something like.

Okay.

**Brian Rinaldi:** Okay. That makes sense. Yeah. Jimmy also asks, are there X state integrations for native mobile?

**David Khourshid:** So I do native [00:30:00] mobile. It depends what you're asking swift and swift and Android. Not quite yet. I know that we do wanna support different languages in the future. People have used X state in reacts native applications though.

And anywhere that JavaScript is a target, you could also use X state. It has zero dependencies that work server side. Browser side, wherever you want. So in the future, we'll support other languages and frameworks too. Okay.

**Brian Rinaldi:** Yeah. So right now it's just JavaScript, right? Like the export.

Anyway. You could visualize any, anything here, but. But the export would be just for something that can consume job for X state JavaScript, right? Yeah. Okay. That makes sense. Okay. So Kyle wants to know, can we get the code for the example you gave?

**David Khourshid:** Yeah I'll share it.

Just I'll give you the code sandbox and you could distribute that however you want. yeah, we could

**Brian Rinaldi:** just throw it in the chat here. If you wanna throw it in our chat. And I'll copy the link over and put it in the chat here.

**David Khourshid:** Okay. Let's [00:31:00] do that. Yeah.

**Brian Rinaldi:** Awesome. Kyle, that was an easy question to answer.

So Kyle also asks, would you have multiple state machines in a single page app or just one?

**David Khourshid:** Oh yeah, you definitely can. And that's also one of the biggest deviations from things like UX, Redux N GX is that. There's no global like huge mega reducer that controls all of your application logic.

That's just not practical because you have local state, you have global state, but you also have state that's in between, shared between components, but not necessarily global or local. And so with X state, you could have many machines, for different parts of your app and those machines can also talk to each other.

And so that, that's what we find a really powerful part to all this. And that's a part of. What's called the actor model, which I definitely ran recommend reading up on. And so it turns out that, the actor model is actually really useful in front of the applications where a lot of things can be happening at the same time and [00:32:00] different things need to talk to each other.

**Brian Rinaldi:** Okay. So it would, you. Typically have these machines be per component or,

**David Khourshid:** Yeah, you can do that. But I just wanna note that it's also possible to have that global machine at top and have other things, listen to it and send events to it. Okay. Again it's a modeling question.

It's really up to you. Okay. You and your team

**Brian Rinaldi:** But when you do it, what do you, what's your usual usually have that global one and then,

**David Khourshid:** and yeah so I will say even in the visual editor and the visualizer, all of these are using X date, of course. And we do have multiple machines for example, we have a canvas machine over here.

We have a, it's called a press session tracker machine, just to track the interactions here. We also have state machines for even the smaller things like these inline labels and things like that. So that just gives you an example of how all these machines do work together. Oh yeah, of course we have a machine for [00:33:00] controlling simulation as well.

Okay.

**Brian Rinaldi:** Jimmy has asked again is there a first class idea of acing transitions between states or do you split, transition into started ended events, states think specifically about animation as a result of a transition?

**David Khourshid:** Yeah. State transitions are like by definition and we can't change this cuz it's the mathematical definit.

They're zero time. So conceptually, when a transition happens, it goes directly to another state. However, that doesn't mean that you can't express animations and actually animations are really awesome to express with state machines. Let's say that you want an animation here. I could have a state called opening and so on toggle we could go to opening and after two seconds, Then we could go to full.

And so you could actually see that over here. This was actually pretty easy to demonstrate, but if I click here, it goes opening for two seconds and then full. And then, so you could just imagine that opening [00:34:00] is some sort of animation or something like that. Yeah. Instead of saying that this toggle is an acing transition, cuz that's not something that exists, you would have a state that represents that's in between states.

**Brian Rinaldi:** Oh, okay. Okay. That makes sense. And so that middle state would actually change whatever, trigger the animation or would it be

**David Khourshid:** Triggered by yeah. You could even do something like Entry play open animation. And then like after some time go to full or you could even invoke something where, it source open, like we'll figure out the details for that later.

And then when that's done, you go to full. And that, that's how you could express that. Oh,

**Brian Rinaldi:** okay. Wow. That's really cool. All right. Mial asks, where can he get a cool stately jacket like that? he wants some ex state

**David Khourshid:** merch yeah. That's we actually don't really sell this.

This is just something that we had for our team, but a lot of people have been asking, so maybe we could [00:35:00] try to do that, but we do have other swags. So if you find me in person or whatever, we have X date stickers to give out. Very cool angular ones as well.

**Brian Rinaldi:** Maybe for those folks in Orlando, if you're at one of the odes coming up maybe they can get some state merch there. Yeah. Stickers at least. Anyway. And then we'll we'll we'll wait on the. On the jackets, they look, it looks nice. So not, I got long sleeves on. It's not

**David Khourshid:** like I'm wearing oh, okay.

It looks like a t-shirt. So I'm like, oh, let be warm there.

**Brian Rinaldi:** It's not that cold, but

**David Khourshid:** it's not warm necessarily, right? Yeah. Yeah. It's cold for Florida. Yeah. It has been

**Brian Rinaldi:** for a while. Hasn't it? all right. So it looks like that's everybody's questions answered. I really appreciate all the questions.

This was great. Having a conversation there after everybody seemed to have a lot of questions particularly Jimmy. Jimmy. Thanks. Thanks for all the questions . Anyway, David, thank you so much for this presentation. It was really cool. I think I hadn't checked out X state, honestly.

I didn't know a lot [00:36:00] about state machines other than the little bit, I think I've heard from you present before. So it looks really awesome and definitely something I want to check out. Awesome. Yeah, so thank you for that. And stately the editor. Looks great too. Congrats on that with the beta.
