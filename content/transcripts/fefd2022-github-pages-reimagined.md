---
_build:
  list: false
  render: never
---

**Rizèl Scarlett:** [00:00:00] Today, like Monica mentioned, we're talking about get hub pages. I've titled this get hub pages reimagined, deploying your first website without leaving your ID. So I'm gonna start off with. A non-technical topic more of a histo, historical, or maybe geography topic about the country of guy. So this is where my parents are born.

And it's located in south America, pretty close to like Brazil and Venezuela and Sona. People often get it confused with Ghana. I'll be like, oh, my parents are from Ghana. And they're like, oh, in Africa, I know that place. But no, , it just sounds like Ghana, but it's located in south America. And I think the country is pretty interesting because it's the only south American country where the official language is English.

Although there are 13 other languages spoken or more but 13 other. Main languages like Spanish, Portuguese, Chinese Hindi and so many more. It's a melting pot. I would say, cuz even the culture, the food, the [00:01:00] music and the language are heavily influenced by Indian and Afro-Caribbean culture.

And when I say the language I'm talking about like their English dialect that they speak something called Guyanese Creole. And you can compare that or say it's similar to Jamaican paua if you are, if you're familiar with that. So I say all of this to say one of my favorite things about their culture.

Is not just the food or the music or other things. It's some of the sayings they have. And now I'm gonna try to say this, nobody laugh at me. If you're Guyanese are from the Caribbean, I'm pretty Americanized at this point. But one of the funniest sayings that my mom always says to me is monkey mek you pickney till he spoil em

and what that means is it's essentially saying don't try to overdo things, keep it simple. My mom will always say that to me. If I. Making food. And she saw me like putting too many ingredients, like too much seasoning, or if I was doing [00:02:00] like an arts and craft project and she saw me just like putting mad, glitter, and stickers or something like that on it, when I was a kid, she would always say that.

And the reason I bring this up is because I think we have a similar. Saying or concept in tech and it is an acronym called kiss. It stands for keep it simple, stupid, but I don't really like the stupid part. Sounds a little crass and rude. So I just like to say, keep it simple. And that's what I'm gonna just say for the rest of this talk and.

I know that we have this saying in tech and we say, we go by this this processor, this concept, but it does make me wonder, have we taken our own advice and I will. Elaborate a little bit more on that, but first I'll introduce myself. I know Monica introduced me, but I'll introduce myself again. So my name Iselle Scarlet, I'm a junior developer advocate at GitHub.

Prior to becoming a developer advocate, I was a software engineer at startups [00:03:00] for about three years. I'm an advisor and I was a director at G code, which is an organization that teaches women of color and non-binary people of color to code. And I will say I'm passionate about social media. But some people might say addicted.

So if you also are on the interwebs or social media feel free to follow me at black girl bys on Twitter, Instagram dev dot two and hash note. I write a lot of blog posts there and then on Twitch I'm black girl bys one because I forgot my credentials and got myself locked out of my account. all right.

So back to the whole have we taken our own advice at keeping it simple? I wanna bring up some nostalgia and throw us back to the internet around the nineties and early two thousands. This was my internet. Around that time, keep in mind I'm 26. So around that time, I was like 4, 5, 6, 7, 8, 9.

I was still young so maybe this isn't your [00:04:00] internet, but maybe there's some things here that you're like, oh yeah, I remember that. So right here is a game I used to play called like my scene nails or something like that. And basically you would just be doing manicures on dolls nails. And then there was Neopets.

I loved Neopets. There was also Millbury to me that was like Sims for kids. And then there was aim where you did like instant messaging with your friends. I also was on the doll palace a lot. It was just like a. Dress up game. And then lime wire where I was legally downloading music, but I'm assuming everybody else was so so hopefully I don't get in trouble.

But one of my favorite throwbacks from back in the day is, or back in those times of the internet is MySpace. I loved MySpace. I was on that 24 7. I actually signed up for it before I was. Appropriate age, like they had an age limit and I was like 11 and I'm like, I'm [00:05:00] signing up and I'm just gonna use my mom's birthday or whatever.

I loved it cuz I got to do my top eight and. It put like a little music player and stuff like that. It was just like my self expression on a page. And it actually really encouraged me to learn HTML and CSS, even though I didn't know, that was what I was learning. And it wasn't like today's HTML and CS.

It wasn't HTML five and CSS three. It was like back in the day, HTML and CSS. But I was really writing a lot. a lot of HTML at CSS and part of that motivation was. 20% creative expression, I wanna express myself, but then the 80% was I wanna have a cooler profile page than some of my friends. I was like, oh my gosh, they added this.

I need to add that. So I would figure out how to make things bolded or have glitter, calm down, or have a marquee going across the page. It was good times. And I think as you can see from these examples the web's don't really like that anymore, so much has [00:06:00] changed and it's, they've become more complex as well.

Because we're not just having these bla, these. Basic HTML pages and people are like, happy to use them. You gotta have the works. So as web apps become more complex, so does web development. And this is my poorly made graph at how the web has evolved since it's not completely accurate, but, so basically.

I think like we started off with HTML and then we moved into like component based architecture with like frameworks, like react and view. And now we're coming up with these concepts of reactivity and hydration and partial hydration. Even it was such a cool thing to be able to use JavaScript on the back end with no JS.

And now we have bun, which is. J JavaScript's fastest run time. And we even, we started off like building on different servers and now we're moving over to developing in containers and using edge functions. And I have the question to y'all I have this question to y'all do we actually [00:07:00] need all of these And I think, naturally will evolve like in our technologies, like that's, what's supposed to happen.

We're humans with knowledge. And I think the evolution is beneficial, but I think we need to challenge ourselves some more. To say, should I use this or should I implement this because I need it? Or is it because it's trendy? Cause in my opinion, J qu did the job. Like we were okay with that.

But maybe some people will disagree. And I noticed myself, perhaps I've opted for more complexity and more. More steps and more complexity as well. So I'm actually going to, this was, I should have shared all of my screen, but instead I just shared one tab. So I'm gonna go to show y'all a website that I made when I first started at GitHub, I was I don't know what dev is and what I'm supposed to be doing here.

So I'll just make a website and play around with GitHub's API. So I made this. [00:08:00] And it's a website called cute emoji. It doesn't do too much, but basically has a fuzzy search for the different GitHub API emoji. So if I look up the word B O book will come up, bookmark tabs Pretty much just that and like the technologies that I've used to build it.

I use next JS tail and CSS. I use this fuzzy search, open source tool called fuse dot JS. And then I uploaded it to S3 bucket and I used paloy to connect to AWS. And I feel like I overcomplicated this, like I could have easily just wrote HTML CSS and then uploaded this on, get hub page. And let me go back to my slides really quickly.

Sorry about that. Do see if I can get to where I was at. Get big. All right. So yeah, taken a step back. I realized maybe I could have just used GI hub pages for this. Why was [00:09:00] I. Using all of these other technologies to do one thing. And I think there's a ease of use there, right? To be able to host my static web app, where I store my code is way less to think about way less energy.

Now I won't have random charges from AWS and not wait a minute, why am I paying 5 cents a month for this? . And really quickly, I'm gonna take a step back and tell y'all what GitHub pages is. If you're not familiar, it's a feature that was like created around the same time that GitHub was created in 2008.

And it allows you to host static web applications for free. So this concept in GitHub is not. is not new, but it's kinda underutilized, even though I do think there's simplicity in GitHub pages. Like I mentioned, you can host your static web app, right? Where your code lives. I think for myself, I probably had hosted one static webpage [00:10:00] for most of my career.

And that was like my first portfolio that I ever made. And I abandoned that and I see people do similar things. Maybe they'll use doc use it for documentation or like their first blog or their first portfolio, and then they'll abandon it, but I wanna reintroduce it to you. And I started thinking about different sectors of people or different levels of people in web development.

I was thinking maybe for beginner developers, it's a little bit more. Difficult to use GitHub pages, not because the process of using GitHub pages is hard, but because GitHub itself looks a little scary. Like I remember learning in coding bootcamp and I didn't know how to make a poll request. I was like, this thing looks like rocket science.

I'm not gonna touch it. So I ended up making a vs code extension where you can deploy an HTML, CSS and JavaScript web app. Without leaving your, I. So completely static. Remember that noted databases, and I'm going to show a demo video of that happening. [00:11:00] So I'm going a little fast, but basically I opened this up in code spaces.

I opened up my repo and you can see that I have an HTML file that says, Hey on it. And I'm gonna install my extension that I created called deploy to get her pages. So I go ahead and I install that. Once it's installed, I can leverage the command pallet to actually interact with it. So I click the boy to get her pages, and it's gonna ask me to authenticate, which is what you gotta do with every extension.

And now once I authenticate it, it shows me a list of different repos that I wanna push. And I choose the one that I want, which is this one. And I publish it and it tells me that in a few. This website will be available at this link. What happens when you deploy to get hub pages? Is it triggers an action?

So I'm just checking out the action right now. On the actions tab. So first it's gonna build it. Then it's gonna go ahead and do a deploy and all that other stuff. I'd like to look at the logs [00:12:00] just in case anything's failed. And I need to go ahead and fix it. So all of this looks like a whole bunch of words, but it's often telling you what's going on and why is it happening?

So it was successful for me. And once it's successful, it gives me that URL and oh, I think we cut it off in. In the screenshot, but , I did not realize that when I practiced, but basically that area had like a webpage that said, Hey so pretend you've seen that. So what is, so I figured that part out for beginner developers, and then I thought what is the benefit for an experienced engineer to actually use this?

Cause I know for myself. Even though I'm talking about keeping it simple, I did move on to other F frameworks, like reactive view. And I didn't feel like I wanted to default to deploying on newer trendier technologies, like Netlify and Versal. So I was like, whoa, why would I. Use get her pages, but the cool thing is recently get hub pages [00:13:00] released an easy, cool way to deploy different static site generators to get her pages.

And I'm gonna show you how so when I say static site generators, I'm talking next JS, I'm talking Astro, I'm talking 11, any static site generator you can think of as long as it doesn't have a backend can now easily work with, get her. Hopefully this demo doesn't isn't cut off. . So I'm first gonna demo this working with next JS GitHub actually created a couple of like template workflows template of workflows.

So they have one for next JS. They have one for Hugo. They have one for JCO and a few others. So I'm gonna show one with next. Yes. And then one with Astro and Astro doesn't have a templated workflow already created, but I'll show you how you can do that. So in this video, again, I'm gonna go to the settings page or tab in my repo.

And instead of deploying [00:14:00] from a branch, I'm gonna choose GitHub actions and it was able to determine that I want to use. Next JS or I'm deploying a next JS site actually. And what is created is a GitHub action workflow already set up for me and I'm just gonna commit it cuz I trust that it's right. Once I commit it, I can go to the actions tab and see it running in real time.

Again, just like the other one. I can see the build and deploy logs to, to check if it's actually successful. So setting up the job, it's doing the checkout process. This part takes a little bit. But we'll see. Yeah. Set up note and all that. Now it's done and I can go ahead and hopefully I click it.

Yeah. I can go ahead and click the link and actually I have something now, and this is a next JS site I built and it's a little restaurant menu type thing. So that worked out and that was like not too many steps right now. Let's talk about demoing or let's talk about if there's [00:15:00] no actual template for it.

So as we saw next JS had a templated workflow, what will we do if we're using something like Astro? You can actually take that templated workflow and just edit parts of it to work for your actual or your specific static site generat. So here I actually already made the workflow. And the only things you need to worry about changing as I scroll down is are you gonna be using NPM?

Is the command to install your dependencies? NPM C is the thing to build it and PM run, build. And is the folder I wish I would go a little bit slower. Hold on. I'll pause it right here. Oh let me show it one more time, but I wanted to pause at the area where I am go ahead and play where I'm showing the build folder.

So when you run NPM run, build Astro [00:16:00] creates a disc folder. Some other frameworks may create a.build folder. So you gotta check that out and make sure you just edit those three section. And then after that, you'll be able to deploy it, to get her pages. So I've committed that. And I'm gonna go ahead and set up, get her pages like I did before.

And yeah. Pages thinks maybe this might be AJE or a HTML site, but it's not correct. So I'm just gonna go ahead and run my action. I see the build startup. And then it's gonna go through the deploy process as well, and let's have that happen happened. And installing dependencies takes a while, but I will actually, what I'm gonna do is go to the website live.

Cause I cut that off in the video too. Sorry. Y'all Astro. Yeah, but here it is. I have a Astro site that's completely live after running that GitHub action. Oh. Back to the [00:17:00] slides and we are essentially, almost done. Y.

Okay. So we have that and I just wanna leave y'all with three thoughts after seeing all of this I wanna leave y'all with making sure you keep your web development workflow as simple as necessary. If you do need that. Complexity. Yes, please do that. But keep it simple so that it's not overwhelming for you, especially in terms of cost and maintenance.

And then also check out my fir my extension. If you wanna deploy your first website and try deploying it, a static site generator would get hub pages on the actions, workflow. I wanna thank front end foxes for having me speak. And then also thank y'all for listening in bye.

**Mónica Fidalgo:** Thank you so much there for your presentation. I must say that I loved the slides that you use. It felt like I was checking [00:18:00] my

**Rizèl Scarlett:** father's computer all over.

**Mónica Fidalgo:** Me. Is this a kid? That's

**Rizèl Scarlett:** yeah, I, the old school look . Yeah, that

**Mónica Fidalgo:** was really cool. Oh I have a a curiosity. Do you have your emojis API life.

**Rizèl Scarlett:** Yeah, where we can check it. Yes, I can put the was so fun. It's a really long, I'm curious to just try out . Thank you. Where should I post it in the private chat or the I guess only

**Mónica Fidalgo:** place. Yes,

**Rizèl Scarlett:** no chat. I'll do that.

**Mónica Fidalgo:** And click

**Rizèl Scarlett:** open link and let me post it in there. Sorry. So many monitors. Oh,

**Mónica Fidalgo:** okay.

Yeah, I have the link now I can also share.

**Rizèl Scarlett:** Thank you. Sorry.

**Mónica Fidalgo:** so not only for me, but for everyone. Here it go. Thank you. another thing is, do you have your [00:19:00] your tutorials somewhere? It

**Rizèl Scarlett:** is really yes. I actually have like blog posts on how to do. So I can I post it on the private chat again?

And then you posted to crowd graph? Yes, me do . Thank you so much. Yes, .

**Mónica Fidalgo:** I'm very curious about that. I never used that before, so I use GI pages for normal HTML CS projects, not with react or next or wherever. I always use net Netlify to do the build for me.

**Rizèl Scarlett:** Yeah, that's how I, I was like too I was like, what does that, I need to try that.

that's how I was as well, like before I started working here and then I was like, this is amazing. This is so cool that we can actually do this. I put two down, like two block book, one for something like Astro and then the other for next JS sharing

**Mónica Fidalgo:** with the audience. . Here it goes. [00:20:00] So this is our last talk of the day.

And anyone has any question that's wants to ask to resolve it's your last opportunity, please

**Rizèl Scarlett:** do and it's okay. I completely understand. After a long day of like conference talks, your brain starts to go to goo . Oh,

**Mónica Fidalgo:** cute. A little. Okay. Another thing that I felt curiosity is what's your favorite?

Oh, I'm not sure if I'm pronouncing this correct.

**Rizèl Scarlett:** S ski. Yeah. Yes. That site generator. I would say right now I'm really like an Astro, really like an Astro.

**Mónica Fidalgo:** Okay. I haven't tried yet, but I hear all the Fu fuse about the fuzz about Huro. So I need to also try that out.

yeah. And now you got me so excited with our presentation that I want to try everything that you showed.

**Rizèl Scarlett:** Yeah. Yeah. I'm glad even though there was like a couple slip [00:21:00] ups here and there. Yeah. I think one of the cool things about Astro is that. It's mostly HTML based and you can put in any components you want, if you're using reactor view or spelt, like they can all be in one, like code base and still work pretty well together.

Yeah, I think it's just a lot very flexible.

**Mónica Fidalgo:** Yeah. That is totally true. I need really to try that. Okay. I'm just checking out if someone else has any question, I'm checking also the chat. That's why I'm sometimes I'm just looking like this because , I don't see quite nice. The smaller words. Okay. I guess we are ending our event.

Thank you so much, Elle. . Thank you. Nice to meet you.

**Rizèl Scarlett:** Nice to meet you too.
