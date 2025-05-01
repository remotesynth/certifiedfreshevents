---
_build:
  list: false
  render: never
---

**Trillium Smith:** [00:00:00] Hey everybody. I'm Trillium. I'm gonna do my best to provide this entire presentation without using my hands. We'll see how it goes. So here we go. Slide next. Hey who am I? Slide next. I'm Trillium, I'm an open source software developer. I live in Los Angeles. I am a partner dancer. I've had a pasta massage therapy.

And over the years through that work, I've worn down my body a bit. And over time I had a lot more aches and pains and I thought to myself, wouldn't it be great if I could do a lot more of my computer based actions without having to actually be in front of a keyboard and mouse? It all started for me in, excuse me, slide next. It all started for me right around like 2021. The pandemic had completely shut down my previous work and I was looking for something [00:01:00] else to dig my hands into. And I came across a talk by Emily Shea about her journey with RSI and how she got into hands-free computer use.

And the system has. Developed a lot since then. I think the hands-free computer use systems have been around for a while. But in particular, over the past, like four or five years, the community who develops the open source command set for talent, voice has really has really honed the API of exactly how you should, how one can use this system easily.

Slide next. So why use a hands-free system in the first place? Slide next. The first reason, of course is accessibility for anybody who doesn't have easy access to their hands and their fingers, or, typing can hurt, things like that. Maybe your arm just doesn't work as, as well as it used to.

Having the ability to do to access the same web experience, [00:02:00] computer experience as regular people, able-bodied people is super helpful. Of course then there's also productivity. There's things that I find are easier to do for me in a voice-based format. And then of course, when you get to do hint free computer use very well.

It looks like magic. It's super fun. Slide next. So the state of voice accessible tools at the moment, there's been a lot of changes. Specifically with tools like chat, GPT, slide next voice assistance for your phone, Siri and Google. Chat, GPT. And then there's also vehicle voice assistance.

One of the things that I find. A bit constrictive about those other environments is that the ability to change them, to update them, to have them do exactly what you want is very closed. Whereas a system like Talend voice everything that my system is gonna execute is user defined in a way that I can go and look through the code and change things up if I need to slide [00:03:00] next.

What exactly is Talon Voice in the first place? Talon Voice is a, an application written in rust. It has a, an audio language model that is constantly listening in the background slide next has an audio language model that's constantly listening in the background. When it hears an utterance that will match some predefined command set it, it finds the one that matches it the most and then it executes that action.

Slide next. So what operating systems can can run talent, voice. And the answer to that slide next is currently all of them except for Linux with with Wayland because the current accessibility suite is not super great at the moment. They're working on it. But if you are gonna use Linux and you have to use X 11 slide next.

Do you need to run an internet connection when you're using Talon Voice slide next? No. No, you don't. One of the great things about it is that it all runs [00:04:00] locally. So if you happen to work at a FANG organization or somewhere that has their systems more locked down for security purposes, you should still be able to get an A system like talent, voice authorized if you need it.

Slide next. All right. So how. What exactly is happening when it comes to how we can use a system like talent, voice? Slide next.

So if we were gonna write spell out a a website for example, we'd have to do something like say HTTP. Colon slash www dot. One of the challenging things about the English alphabet is that a lot of the letters sound the same. So B-C-D-E-G-P-T-Z, all those letters have a very similar sound.

They rhyme. And so essentially a model trained on audio is gonna have a harder time [00:05:00] determining it's gonna have a harder time determining those sounds. We need to use an alphabet that is more easily recognized by by some sort of computer system. Slide next, and an alphabet like this already exists.

There's probably multiples of them, but for example, the NATO phonetic alphabet that's used by pilots. It's very easy. It's good to be able to differentiate the letters, but one of the problems is like November for N, that's three syllables. And if you're speaking all day long that can be a challenge.

And so talent, voice uses its own the over time the users have of talent, voice have determined that there's like words that are more easily recognized by the system. And you can use words that are shorter. And so the talent, voice, alphabet that is recommended from the get go, looks like this slide next.

Yeah, so if I wanted to write the letter air a, I would use the word air, A, b, c, air back cap. This is the default alphabet. I [00:06:00] pulled this, image from the Emily Shea's website from quench Club. My Alphabet, I've updated it a little bit. It looks a little different. Help Alphabet. And so I've been like testing out other words.

And for r I've got risk. And for o I've got oats that are both in there. And one of the nice things is that if you wanna update your alphabet, it's a pretty easy process to get more letters and that you can test out, help close slide next. And so where, what is talent good at? If I were to want to integrate talent into my regular workflow and I don't necessarily need to use it all the time.

What exactly is the. Areas where I would want to integrate talent easily in my workflow. Let's see here, slide next. Talend is really good at writing text from the current cursor position. So if I wanted to do any sort of dictation, Talend has an integrated [00:07:00] dictation option for that. Organizing window positions, I tend to find it easier in voice.

Formatting variable names one of the like hardest parts about. Voice coding is making sure that the everything matches in a code window. And that can be more challenging if you're having to dictate special characters. So yes, entering special characters like dollar sign, curly brackets, and then of course repeating actions.

One of my favorite things about this system is how simple it is to repeat actions. Slide next. So what's hard about using Talon Voice? One of the things I find challenging about it slide next is complex mouse actions. Any sort of action where I need to do some sort of clicking and dragging. Doing it purely by voice is pretty hard.

Sometimes I will move back to my my track pad to be able to do that. Or there's also a DA couple different coordinate type systems that can be used. And then of course there is a humongous [00:08:00] amount of commands already that ship with the talent, voice or talent hub community command set.

And so discovering those pre, like pre-made pieces of code is a bit challenging. I learned about a new one recently that I'll show off in a little bit. And then of course. Using Talen voice in a, in o easy space makes it so that sometimes other people's speaking shows up and messes with my computer a little bit here and there.

Luckily, I can turn it on and off when I need to. And then of course remembering the commands like the, I feel like the learning curve can be pretty rough in the beginning. Slide next.

One of the great things about talent is that it's also extremely extensible. Being able to hook in other tools into talents, pretty simple. Or I guess I wouldn't necessarily say it's simple, but it is very doable. Slide next. There's a bunch of extensions currently that will, increase the usefulness of the Talen voice [00:09:00] system. One of my favorite ones is called Gaze, OCR and OCR stands for object character recognition. So if I wanted to interact with texts on the screen, gaze, OCR will take a screenshot. Of the current screen and then index all of the words on the screen.

And then I can do like complex actions like selecting or moving the mouse before a thing or double clicking on a thing. Ringo is a Chrome extension that I use to navigate the web. I find this one essential. It renders a, list of characters, like two characters, one or two characters, alphabetical characters before every single interactive button.

I know Mecca had a talk earlier on accessibility and Ringo uses accessibility tools to create voice-based interactions on websites. Salis it's one of my favorite, tools and Talon Voice. It's what got me interested in the system in the first place was how can I use a voice-based system to write code on a daily basis?

And curses list makes that way easier. There's AI tools [00:10:00] that I currently don't use right now, but they allow for running LLM, interactions. So if you had some text selected and you wanted to format it or check for spelling, things like that. And then there's also a extension called parrot, which lets you train custom sounds.

So for example, integrated into talent by default as the pop sound. But if you had the, if you wanted to make another sound, like knocking on the table, or making a, a louder click sound with your mouth. Something like that. Those sounds can be associated with different actions in the talent, voice system.

Slide next. We've arrived at the demo section of the of the talk, and I'm gonna do my best to make everything so seamless. I, let's see here. So the first thing that we're gonna do is slide next. Take a look at how to format text specifically variable names. And then, let's [00:11:00] see here.

So right now there's a gray icon in the top of my screen with an RO in it. When the icon is blue, that means that the system is in command mode. Currently it's in sleep mode. And so I've authorized some actions like slide next and slide previous, which is gonna do a thing right now. Let's see if it actually, no.

Okay, cool. So just listening to me sometimes. When I talk about the next actions I'm gonna take, I have to deal with the results of that in the system. All right I'm gonna wake up Talen and then I'm gonna go to a a text window and then I'm gonna do some formatting. Wakey focus, Chrome, zoom in.

Third sentence, the quick brown fox draws. So my sleep board is d draws. So when you hear me say that, I'm turning off the system. And right now in the top there, the icon is gray and so it's in sleep mode. And of course there's still a couple things that are slipping through there that allow me to do go forward and go back actions.

Okay. So that was the format or sentence? Tell and wake [00:12:00] help Formatters. I'm gonna move this outta the way of my mouse. Currently my action for putting stuff to sleep also takes away the help windows. And so I'm gonna use a key to turn the system off right now. Oops. There we go. Get that outta the way.

Thank you. Talent. Wake lap. All cap. The quick brown fox lab Kimmel, the quick brown fox. Dros. Cool. So that's using Formatters to insert text tale Wake focus beta. Slide next. Oh, hey dross. There's also dictation. Tale Talent has an integrated dictation mode, and so let's see how that goes.

Talent Wake slide, previous. Oh, slide next.

Focus Chrome command, air clear left mode dictation. Okay, so now I'm [00:13:00] in dictation mode. And that's gonna take everything that I'm saying and as the system recognizes my voice utterances, it'll write 'em down. I can do things like period question mark. Within dictation mode. And those are fairly simple.

But they don't necessarily use the same like shorthand, like for example the shorthand that I have for a comma in when talent is in command mode looks something like drip. Oh, nevermind. There it is. I thought it would be harder. Mode dictation. Excuse me. Mode command focus, beta slide next.

All right. Ross. As I said earlier the main reason why I got into this in the first place was so that I could do voice coding and there's a extension. Oh, we're, I guess we're gonna demo curses list and I coding at the same time. There's an extension [00:14:00] called Curs List, which will render a dot.

I'll just show it off right now. TALEN Wake focus code draws. It'll render a dot above every single important block of text on the screen. For example I've got the, I here with a dot virtual. Excuse me. There's an I above the, there's a wor, there's a dot above the I and the word virtual.

And so if I were to use the word for I in the system, then I could interact with with this line here. Let's see here. Talen Wake help Alphabet,

take sit draws. I should really change that currently. The, of course, when I say draws, it's gonna get rid of the help windows. Talen Wake help Alphabet. Okay. We've selected the. Word virtual here with the token for the word for I, which in this [00:15:00] case is sit. So if I wanted to do a more complex action tale and wake, comment line, sit, tale, and sleep.

Tale and sleep, there we go. If I wanted to do more com complex action, I could say that I want to interact with the line associated with the token eye. And in this case, we used a comment action. And so since the line has already commented it, would, it uncom commented it, and currently curs list, or excuse me, tele voice also does hot reloading.

And so if I were to save this file then I should be able to use this action right away. TALEN wake. Command history,

disc lap third, virtual coffee emoji draws. There goes the help windows again. That's okay. So yeah, so this is a really easy way for, or here's an example of generating a command [00:16:00] in talent. Voice and then, now I need to get rid of this. 'cause if I say this again and it's gonna make the file error.

Wakey. Wakey chuck line draws. Oh wakey. Focus beta Slide next draws. Okay. What about actually navigate the web and Chrome. Let's see here. Wakey focus Chrome. Go tab one, tale and Sleep. So on the screen is a bunch of rendered letters above every single in interaction, like a link here.

So if I were to say the words let me see here. If I wanted to go to, I'm already in the graphs. If I wanted to go to the base of the repository and look at the Read Me, I would say Fine. Made Talen Wake fine, made.

Okay. Of course that's navigating links, but what about actually tapping down the screen or, moving the, where the viewport is [00:17:00] tale wake, wakey, wakey downer, dross. So there's a simple view window shifting with the word downer. And that, just moves the window.

But of course if that's a little saying downer every time is probably not the most ideal. And so we can get into something like repeating actions. And so if my system is awake telling Wake Downer draws and I make a pop sound, then it'll repeat the previous action. Yeah. Okay. Talen Wake Focus beta slide next.

Dros. And I talked about tiling. Tiling ISS pretty great. Let's see how it works right now. Talend, wake focus. Chrome Snap, right? Focus code. Snap left dross. Okay, that's said easy version of tiling, but what about something a little more complicated? Talen Wake. Wakey. [00:18:00] Focus. Chrome snap, right?

Two thirds, focus code snap, top, left, third, focus terminal, snap, bottom, left third draws. Cool window. Tiling it. It's pretty great. Talent. Wake it. Focus beta. Slide next. Ross. Okay. Does anybody have any questions at this time? If you got 'em, put 'em in the chat. I'll do my best to answer things.

And I think what I'm actually gonna do is hopefully make, be Becca handle the questions and I'll answer them as they come in.

**Bekah Hawrot Weigel:** Excellent. That was so amazing. I think like you really showed what you can accomplish with that and navigated some problem areas and so there's a lot of people in the chat.

I know that there were like some concerns about it being a little difficult or challenging to get started with. So you know, what kind of tips do you have for that?

**Trillium Smith:** So to actually get started with the system, one of the first things that [00:19:00] needs to be done is just to to understand the alphabet itself.

It takes a bit. And I would probably use flashcards for something like this just to get them in my head at this point. I know my alphabet pretty well, and sometimes when I'm actually spelling things out in the world I'll use the wrong words for the alphabet because to me, in my brain, they're equivalent.

Yeah. So Alphabet. And then what other things would I use? It really depends on what your problem areas are. I would also maybe do your best to write down the things you're having challenges with. And the Talon Voice also has a really vibrant community that with a bunch of helpful members and a Slack channel.

And if you have concerns or things that need you, you need assistance with. There's, I don't know, a hundred thousand, something like that. There's a lot of active members in that Slack, and people get back to you pretty quickly.

**Bekah Hawrot Weigel:** Yeah. And okay, let's see. One of the other questions was like a cheat sheet.

What, how do they have some resources that folks can download or use to, ease into it?[00:20:00]

**Trillium Smith:** I honestly don't know about a town hub community command set cheat sheet. I bet there is one. I. I haven't had to use one for a minute, and so I don't have that on hand. Yeah, there is a curs list, cheat sheet for the voice coding. Wakey, wakey focus code Snap. Full curs list, cheat sheet.

Oh, come on. Help Curs list.

Of course, it doesn't want to demo it right now. There's a really great cheat sheet that's let's see here. I'm using my hands now. Cheat sheet. We go for Curs list itself, I'm gonna turn off Ringo Wakey, wakey hints off draws. Yeah, so here's the curse list cheat sheet. So if you were going to, gonna get into curse list, this is I guess step two of the voice coding process.

You have to learn the alphabet and stuff first, and then this, but there is this cheat sheet exists. And one of the nice parts about it is that when you launch it properly from your vs code window it'll actually [00:21:00] insert your own words for for the d different defined things here. Like for example, in my in my setup, let me see, where's the colors?

Yeah, I have other colors besides blue, green, pink, red, yellow. I have a word for my yellow is the word gold and my, I have additional color. Purple, which is the word plum.

**Bekah Hawrot Weigel:** So what do you think are some of the commands or the use cases for this that you might have stumbled over initially, but you find to be really great to use right now?

**Trillium Smith:** I think, like when I think about this question, I think of more about what do I find that I like more in, in curs or in the talent, voice environment. And I don't necessarily spell as well as I used to. And so I have always used voice tools, whether it's a system like talent, voice, or a voice assistant on my phone to make sure that I'm spelling words correctly.

Wakey. Focus code when tab new [00:22:00] word discombobulated draws. I wouldn't spell that properly for the first time. Yeah. And also I can say it faster than I can write it things like that. There's also like just a bunch of little small like silly things like that just bring me joy. The default wake and sleep command is not wakey, wakey draws.

But I put that in there because I thought it was fun. There's also like it, I have it hooked into my raycast very easily. And so let me see here. Wakey, wakey. Ray confetti, lap, RAs, others, I don't know, just small things like that bring me joy. As far as like where to go first I think it's like a targeted approach.

If I wanted to for example, one, one of my desires was to be able to use this system while I was rowing on my row machine, which is like right here. And I have a big TV right there. And so I've got it set up to where I can do voice coding and then [00:23:00] interact with my computer with a microphone.

And then do things like return text messages. I've reviewed poll requests, I've read like online forums while I'm getting exercise. So combining actions, things like that.

**Bekah Hawrot Weigel:** How hard is it to review a pool request? Because I feel like it's almost a different language there too, to be able to go through and navigate the different spaces and leave comments or,

**Trillium Smith:** Let me see here.

Wakey, wakey focus chrome. Go. Tab one. Go way up. Hints on. Hints on air red.

Let's see here. Downer,

cap trap

draws. As far as like getting to the point where I have enough [00:24:00] context to to start to review better, I can go through and read this conversation here Wiki, that fine. I can also go through and look at like the actual code changes. And I don't necessarily need to fire this up in my system, but if I were to do that then I would want to pull this particular pull request down.

I don't have this set up on, on my system right now, but I have some terminal commands that make that pretty easy. And I don't know. I it's like. When you are editing your own Bash profile, like I've got a lot of things that, that I have built up over time that work for me. And those things help me do things like reviewing portal requests or getting the code onto my computer by voice faster.

**Bekah Hawrot Weigel:** I love that. I love seeing how you've built this into your workflow and all the different capabilities that you can use with talent, voice. So

**Trillium Smith:** yeah. And there's so much more. It's, I it's like it's, I couldn't demo it all right now. I wish I could. Wiki, wiki, focus beta slide [00:25:00] next. I think we're already in the next part slide next dross.

And yeah. I think we're supposed to transition now. I'm over time, but I wanted to say voice tools to me are like one of the most fun ways to interact with devices and I really love the API that the people within the Talon Voice community have developed. I think it's really effective and I wish that it was on Android and iOS.

But yeah, if you wanna check it out, feel free to send me a message Slide next. Here's my information, and then of course, if you wanna take a look at the slides, that link on the rights to slides and then.