---
_build:
  list: false
  render: never
---

**Domitrius Clark:** [00:00:00] Thank you. Thank you so much. First of all, thank y'all so much for being here. I'm super excited to get into some next JS and serverless today and just be here, live with y'all. I think that's like such a, an important part of the puzzle for me. Let's let's just dive right.

Cool. So today we're gonna be doing some serverless cloud area with next JS. We're gonna be dealing with dynamic API dynamic API routes, setting up the custom dynamic OG images through those routes and dealing with a little bit of upload inside of the serverless. For those who don't know, we just got a little bit of an intro introduction.

My name's Demetrius Clark, obviously developer experience engineer at cloud area, Twitch stream, community leader, and consultant, put some links on the side and I'll be sharing this notion space with y'all afterwards, so that you all can go through. And I've set up a couple of different ways. I have a walk through some quick overviews, some resources for you guys.

But just [00:01:00] wanted to have you, you all set up to be able to handle this, if you're watching this later and didn't get a chance to watch it live or just like to go at your own pace. So instead of going through any of these, let's just hop right into it. You'll be pulling down a repo we've already got that set up here.

So today we're just gonna go through we've got a couple of things set up already. Some components that really don't matter too much. Our pages, you can see we're missing our API or our API directories, so we're gonna be setting that up. But all in all, we'll be working really within components and then our pages directory.

So one of the first things that we wanna do. Set ourselves up. So you can see here, we've got our little upload form. It doesn't do anything quite yet totally on over to it. So we've got our upload here. So as you can see, we don't have much set up. We've got a couple of things for state set up to track what file we're uploading and things like that.

But let's just dive into one of the first things we gotta do is set up a couple of our dependencies. So let's go ahead and add in Malter stream of fire. We're gonna need Cloudinary and [00:02:00] Cloudinary build URL. So basically we're gonna be sending through a read stream to Cloudinary. So streamer and Walter are gonna help with that.

And then Cloudinary and cloud build URL. We're bringing in two packages. One will be for our node environments. The other will be for any environment we're gonna be using it within the client side, super small URL builder for Cloudinary that Maya Shavin shout out to Maya Shavin for building it super, super convenient way to get started.

With cloud area and how powerful the URLs are. One of the first things that we're gonna wanna set up is the API route that will handle our uploading. So we'll go in here, we'll create an API folder inside of that folder. We'll just create upload Dutch ass. Cool. So one of the things that we're gonna run into quickly is, and I set up an example for you.

Down here. Obviously I have mine and M dot local, but you'll need your Cloudinary cloud name, your API key and your API secret. So you will need to sign up for an account to, to go through this, but super quick and easy, and we have a very generous, free plan. Once you have those set up, we can actually just come in here.

We'll bring in mul, we'll [00:03:00] bring in stream of fire

and last but not least, we need some Cloudinary. We'll actually cons Cloudinary equals, and we're gonna actually do this so that we can pull out the V2 version of the node SDK, then we'll need to set up our Malter. So we'll set, let storage equal Malter dot memory storage. Thanks. Super easy. Then we'll set up our upload for mul and then we just need to set up our credential or credentials with cloud area. So we'll config that, and this is where we'll pass in our cloud name.

The fun thing about live coding is that it never does what you want it to do. process dot EMV, and then we'll get the Cloudinary cloud name,

[00:04:00] our API key.

And come on now. Swear. My keyboard never likes to let me caps lock. It's like one of the things that will always be my downfall cloud API key. And finally, we get our secret

cloud API secret. Boom. So we got that set up. So now we just need to set up the actual handler function for our serverless function inside of our routes. We'll do our export default, not in caps. Of course it wants to work now ex oh my stop. Thank you. Export default function, handler bang, not an array. All right.

And then we'll just get our record res from. Boom. So here now is where we'll start bringing in Malter end [00:05:00] stream of fire to set up the create read stream that will pass to Cloudinary for the file. So first we'll start with an upload dot single, which is an image and then we'll invoke that with the

**Brian Rinaldi:** rec

**Domitrius Clark:** And then a function callback function for our error. And we'll do stream of fire dot create, read stream and we'll pipe in the file buffer,

right. We'll pipe that through to CLA so in here, we'll do CLA do upload dot upload stream. And then in here we'll be able to pass in what will be coming back from our from our client side. So we will, we'll be able to define the folder. That's one thing we're gonna want. So the really cool thing is we'll be passing through a folder name and a public ID.

So it'll actually create that folder if [00:06:00] it doesn't exist. And then plop that image with the public ID that we define right in there. Another thing we want to do just for safe keepings is define the resource type. If we don't define that on the body, we will just set it to auto. And finally again, we'll go back and we'll do the public ID.

Okay, bang. And then in here we are gonna wanna have another call back that will allow us to get our result. So we'll just do some error checking. Oh, maybe we should spell our right. All right. If we do that, we'll do res dot status and we'll send back a 500 and throw the air in. If those things do work, oh, we still spelled Dar wrong.

Gotta get better at spelling error. Then, if we do, if it's successful, we'll just send through a 200 [00:07:00] and we will put the results back. And then we'll end. Awesome. Now the one thing we can't forget to do we're gonna wanna turn the body parer off. So we'll just export the config. API body parser and we'll set that to false.

All right. So we've got our serverless function right now. Now we're gonna want to jump into the actual upload itself. Like I said, we've got a little bit here. You'll see, we're using shocker UI. It's just really easy to set up demos with shocker. I don't think there's anything better for getting up and running quickly.

So you'll see, we have a couple of inputs, a button to upload some text to let you know that we're uploading the cloud and area. So let's just go ahead and start defining out some of the things that we're gonna need. So first we're our title here. We've already got our public ID. So let's just go ahead and set an on change there.

And we will just set public ID to the value.[00:08:00] Then we have our secondary one here, which is our file, and this is gonna be a little bit, more so we will end up doing another on change. And then we'll just use set file. Oh, not set public ID set file to upload. And inside of here, we'll just do e.target dot files and we'll grab the first.

And then finally for our upload, we're gonna wanna define a function for this. So right now we'll just say on click

and we will do a call back here to do on submit and then pass in. We'll pass in the file to upload. Okay. So let's define out real quick that on submit function.

So in here we are going to, we actually defined it. Unproperly down here. We actually, I don't even think we need this. We can actually just [00:09:00] pass in on submit. So in the OnIt function we'll set up our form data cuz we're gonna be passing it through as form data. So we'll do new form data.

Then we will append. Some of this stuff that we've been tracking. So we will bring in the image, which would be file to upload. We've got our form data to grab the folder which we're gonna define ourselves. We're actually not gonna have something to define the folder. You can set up another input for that if you'd like folder and we'll just name it, OG images.

All right. And then our last one we'll want to pass through the for the public ID.

Pubic ID. There we go. And then we'll just pass it to public ID bang. And then we'll do our fetch.

All right.

All right. And then we'll just go to slash API slash upload [00:10:00] and we will set up our method.

What was that?

Oh, thank you. Somebody in the crowd. Did they give me that feedback? Thank you so much. I appreciate you guys fine alone. So yeah, we've got our, let's go back. We've got our fetch set up. We will pass in the form data and we'll pass in some headers. We'll just do the content key.

And that will be cool. And boom. Let's see. We're looking good. We're looking good. And then another thing we have here, so we have this image, so we can actually say down here, we'll go image. Oh, and then actually for this, we're gonna have to set up some ways to handle the data. Once we get.

So we'll do that, then[00:11:00] we'll grab the res and we'll just turn it to JSON and then we will set up the results and put that right into image. And this will give us access to whatever comes back from that upload so we can make sure that we're good. So let's oh, results.

And then down here, we can actually say if something came back, let's actually just preview it to make sure. So we'll do source and we'll get a URL back if it's successful. I'll just give it a little bit of margin top. So let's looks like we're good to go. Da, let's choose a file.

Serverless, conf OG. I already got that set up and then we'll just name it the same photog let's upload that photo.

Not giving us the image back. Let's go check our Cloudinary,[00:12:00]

**Brian Rinaldi:** check

**Domitrius Clark:** our Gmail. So it did end up, it did end. It did end up saving to our Cloudinary account in the right folder, but we didn't get anything back. We don't have to spend too much time on that, but it should, once we get that response back, it should set up the image to be displayed down here. You can even set up honestly, inside of the set file to upload.

You could honestly set up a preview so that you could, even once you choose the file, set up a preview so that you know what you're uploading. But we'll skip past that right now. At least we got the successful upload, so we'll move forward. And now what we want to do is set up the way in which we can now.

Add layers onto the OG image, right? So we've got our OG image. Cool. It's a nice OG image, but it's got no information on it. And we've got blog posts and we wanna be able to make sure that we get some dynamic data onto that. So right now we should head on over to let's. Let's actually just try and get this let's try and get this working where we can see the image real quick.

So let's grab or let's import build image, URL. [00:13:00] From Cloudinary build URL, and then we'll do cons URL equals build image URL.

And we'll pass in. So it's OG images slash what was it? Serverless? Conf OG.

Okay. Let's just see if that works. Let's try. And I think we have to also set up the cloud name. So cloud name, and this is my cloud name for my MD next project. And let's go down here. Let's actually just throw in URL.

Let me see if on let's go where we're. So we've got the upload. Upload what's going on here. Little [00:14:00] URL. We don't need this anymore at all. Bang. Okay, cool. So we've got our image. Let's apply some transformations here. So one of the big things that you usually have to deal with is adding transformations for text.

So we'll just do chaining and chaining will allow us to add multiple layers of different text. So we'll first start with our title layer. We'll give it some gravity to let it know it should be in the center. And I've also put resources in the notion for people who are still learning transformations are just ways that you apply different.

Different fields to your images. So resizing and adding delivering the right images, things like that. That's what a transformation is defined at as at cloud area. So gravity just allows you to set up basically a, an area in which the layer will land on the image, right? So we've got our gravity and then you can also define your X and Y.

So for here, we'll actually just define Y minus 100. And then we will define our overlay, which will be text. So [00:15:00] text and we've gotta pass in a font size. And then we will, we'll actually for later, this will be useful. We'll do these this back tick so that we can actually add in and we're actually gonna need a little utility I wrote, which was clean text.

So we'll need to clean that text for the Cloudinary URL. And we'll have a title that we'll be giving it. Okay. So we can go ahead and let's pass in. Let's pass in a title, right? Con's title equals. Hey, there.

Let me just double check while we're getting no image back that if we're not. So if you don't get an image back in this scenario is actually a really good example to show. If you don't get an image back in this scenario, you're actually dealing with a borked URL. So usually you'd have to [00:16:00] go and check why the URL is borked.

What's breaking it. And that, and Cloudinary actually gives really useful error feedback. When you Bo something inside of the, in the URL for now, we're just gonna. Double check. We actually don't have text spelled. So that's the usual Demetrius way. All right, cool. So we've got our first layer.

Hey, there is now showing up. Now that we're through like 50 million screw ups, let's actually just get a couple of more things set up so that once we drop this into our dynamic page, it'll already be ready with the variables that we need. So we'll set up two more. So we're gonna set up one for the date and one for tags as well.

So I'll just go that, I'll go through that really quick. Gravity we'll do this in the Northeast section of the image. We will apply Y N X.

And then we'll have our overlay, which is going to be text and we'll spell it right this time. I promise you we'll do a 40, cause we don't want it to be extremely big. We'll do the same thing. We'll do some clean text, and boom, [00:17:00] change these to back text. Oops. Change his back and then date.

And then we'll actually, let's. Make this easier for ourselves. This is copy and paste it. That's how coding works nowadays. And then this one will actually do Southeast. We have 10 here and then we're gonna do tags. So let's quickly just make sure that they're all working. So cons date what's today's date, is it the 12th here at 12 and then our tags.

We will have let's just do next JS. Oh, that's not how tags are shut up next JS. And we will have Cloudinary save it reload. And then boom. Okay, cool. So we've got three pieces of overlays running in. So now, honestly, this right here is the most important piece of the pie. So we'll grab this. We'll just rip it out.

All right. Get rid of this. Cause we don't need this [00:18:00] anymore. So as you see here down in the we don't need that. Get rid of that too. Thank you. So as you can see in here, we have some blogs, right? Some nested blogs, some regular MDX set up the files. Let's actually just set up a new one called more serverless, right?

MDX. And then in here, we'll just grab what we have in here for the front matter. Cause that's really all we need. It's all we care about. More serverless. So we'll say thank you more serverless and team cuz you know what the team needs. Some thanks. Sometimes this is a hard thing to set up. Thank you so much more serverless team.

We'll do more. Serverless that's my birthday. And then a lot of this other stuff doesn't really matter. And then we can head right into our blog and our slug page. This is the dynamic API page, so what we're [00:19:00] gonna wanna do is we're gonna wanna quickly bring in the build image URL and we're gonna bring in the clean text function, right?

Cause we need those two for when we do this, not in the. Put in here, right? Oh no. Oh gosh. I think I screwed up, but I'm okay. Cause I can press control Z. All right. Now we're gonna go back. Grab this one more time. Delete this. So we don't have any errors. We're getting there. I promise. So now we can plot that right in here.

So as you can see, we're getting the post data back, and then we're setting it post MDX and post data for the front ma matter. So here we'll just need to do post data dot, and this will be able to grab the things from the front ma matter that we need Mader. Isn't that the guy from cars, Mader, I think it is post data dot tags.

So this should be good. And then we just need to add in OG. And we will set that [00:20:00] to, we have it defined as URL. And then in the page up here, we just need to bring that in out as a prop so we can grab OG oof. And then we will be able to set up right in here, the open graph. And let's actually just do this from.

Scratch. Let's get rid of this layout real quick. And we'll bring in, we have next CEO next SEO in, in here as well. So next SEO from next SEO, and then we'll just drop a fragment so that we can put it up top and then next SEO, save. So we get some formatting and then it is open.

Graph. And then we've got URL. We've got images.[00:21:00]

Images and that's an array. So you'll pass in the image here. So now we've got URL is equal to the OG. It's gonna be a width of, we already know the width cuz we set it up on our OG image itself. So we'll do a height of six 30. We'll do a width of 1200. And then we will. Just quickly set up inside of the open graph, we'll just set up the URL for the actual page.

Real quick URL is H PS H P slash local host 3000 slash blogs slash more serverless. And then we will save. Looking good. Looking good. Looking good. And then so I'm using SSI here and SSI actually, as an application allows you to check the OG images of the page itself. So let's go to blog,

got with, oh, [00:22:00] thank you. What's always. It's nice. You get like a mob programming session. That's my favorite. So let's check. Okay, cool. We've got our, thank you. More serverless and team by Demetrius Clark. Let's click into it real quick.

Cool. Title's there that's works, but let's. Bang. Awesome. So we let you know, we're at the end of this, let's go through real quickly, cuz we had to go through very quickly to get this done. We've been able to upload an image. We already preset a image of our own. So that is basically where you'll start in.

This journey is getting a template image that works for you. Working on the upload. You can do the upload through the cloud area UI. I just wanted to show y'all how easy it is to set up uploads in, in a serverless form. So you upload it to your Cloudinary account. Once you have that into your Cloudinary.

The world is your oyster. You can set it up in any which way that you want to start doing these dynamic things. You can do dynamic texts. You can do dynamic images that have text on top of the image. On top of the text, it's an endless matrix of things that you can do [00:23:00] with cloud area on top of your OG images.

And you can, as you can see here pretty quickly able to set up. A pretty complicated overlay system that, that passes right into our page and sets us up for really nice SEO and OG images. So thank y'all so much, two things. Thank you to whoever in the crowd and or Brian, who is helping me with my misspellings.

I appreciate you heavily. And two, thank you so much. Serverless comp, more serverless. This. Extremely fun to set up and I'm excited to, to engage in some Q and a and hopefully if anybody has any questions even afterwards, or wanna reach out to me, please do that's something I love doing is getting involved in the community and having conversations.

So thank you so much.

**Brian Rinaldi:** All right. That was great. And I can't take credit. That was Nick who caught that first typo. Thank you, Nick. He caught most of them, actually. I think the only one that I caught was that with thing was the with, with, yeah. Thank Ryan. [00:24:00] You know that usually like when you're life coding on like Twitch or something, you got comments there, so you can, people can give you feedback.

That's so nice. Like it's the best yeah. We had to jump in and like on your mic in your ear being like, Hey, by the way,

**Domitrius Clark:** Honestly I do this with like almost every conference and I think that's my favorite part is cause then a, who's paying attention and B you see how many people are willing to help you when you're growing up.

And that's like the best thing about the. So

**Brian Rinaldi:** That was really cool. And I gotta tell you, I'm sitting there thinking to myself, oh, geez. We're using cloud air. Why are we not doing this? Because I'm, every time I, we are, we're creating a new blog post. I'm having to go into Figma and manually create those images and upload them and whatever.

So yeah, that looked awesome. I'm gonna have to go back. Where rewatch this much, much slower, cuz I don't quite as fast as you,

**Domitrius Clark:** but getting this into 30 minutes, like that's why I had to pre scaffold, the upload component. There was even more that I was thinking of pre scaffolding, but I was like, [00:25:00] we can do this 30 minutes.

We can do this.

**Brian Rinaldi:** You, yeah, you type fast too. So yeah. It's cool. Alright. We got a few questions. Nick S I missed it at the beginning, but how generous is the CA Cloudinary free tier as someone looking to mess around with it?

**Domitrius Clark:** I will say the hard part about cloud area, I think is that we do a credit system and the credit system isn't extremely well defined for people. But I will say it would take you a generous amount of time and usage. They base it mostly off of transformations and they do a lot of caching for you. So it actually doesn't hit the credit system as often as you'd think. I would have to dig a little deeper and I will, and I actually did put in some resources for setting up an account and things like that inside the notion.

So I'll share that afterwards, but. My, my bear answer is that it would take you a long, a lot of movement to ever hit past the free tier limit. And if you ever do, honestly, cloud area is super generous, reach out to our support and we can definitely work with you. Cool.

**Brian Rinaldi:** All right.

Yeah. And I know like I've used it for a bunch of stuff. It is, has a pretty generous, [00:26:00] free tier. So I would agree with that. Jayden S what is the plan for next releases or new features? What's on the cloud area roadmap.

**Domitrius Clark:** Yeah. So I think one of the big things that we've heard from the community recently was that.

And, I've definitely felt it myself in a lot of the builds that I've been doing the Cloudinary SDKs are a bit bloated. They're a bit, they're a bit large and they're not well broken into pieces that you can import individually and split from. That's definitely something that we're super focused on for upcoming releases.

And I think that you. A lot of our products have been centered around moving into the multi-product space and finding ways to help people who are in marketing, finding ways to help less technical people set up a lot of the same, automation that we as developers can set up. But I would say as the developer relations team, we're like super focused on onboarding and setting up things like this, where again, Brian, you were saying.

I'm in Figma recreating these OG images all the time. I, I didn't even think to do it like this. I think there's a lot of features that currently exist [00:27:00] for inside of Cloudinary. That I still think a lot of people are struggling to learn while having to learn media at the same time. I think that's a really hard struggle to, to balance.

So I think that's something that we're very focused on as well.

**Brian Rinaldi:** Yeah. Yeah. And I think you, you showed the transformations, but I think even one of the things that was a key thing for me for offloading kind of, this whole conference is about taking things that used to be complicated and offloading them to somebody else's servers, basically.

Exactly. And one of those things for me was trying to get the right properly optimized images for the different browsers or for mobile and things like that. Yeah. Where I would generally just upload a single. Version and that didn't always work well on the mobile version and things like that.

So Cloudinary does take that kind of pain in the butt thing where I might have to create different versions of different images and does it automatically. So that's one of my favorite things. I think,

**Domitrius Clark:** yeah, I think it's oh, go ahead. Go ahead. Go ahead. Yeah. [00:28:00] Yeah, no, like to that point. So I think one of the things to point out too is, and we didn't check out the URL, but the URL itself, when generated from nodes K actually adds things like F auto and Q auto, and those are like the bread and butter.

Of cloud area that do exactly what you're saying for delivery and making sure that we have the right size and the right delivery format for a browser. Like those are things that we handle pretty easily out of the box and then things that next handles really well. And I actually have an extra credit piece inside of the notion.

With next image you can actually generate the URLs on your own, the same way that we were doing with bill image URL. Set up your next config to accept re.cloud mary.com. And then you get to now control all of your transformations on the image itself. And then next image will handle all of that, delivering to browser sizes, making sure that it's responsive, making sure that it's the right image format.

Like you can then combine the powers of being able to do a lot of transformations like overlays and things like that are really complicated in cloud area side. And then just give it. Image component. And I feel like a lot of these frameworks are coming out with things that make this whole process of dealing with [00:29:00] media a little bit easier.

And I think that's like really important in the ecosystem right now. Yeah,

**Brian Rinaldi:** definitely. I know, like even the older tools like CFEs built on Hugo and, but it has actually. Like all, I used to upload multiple versions of every single banner and stuff like that. But now it has that all built in.

So I just it processes them at build time and does all that optimization for me. So yes, definitely. Definitely. True. So an Anish S is the 25 gigabytes of net viewing bandwidth available under the free tier SU. Okay. Sufficient, I suppose we need clarification on what's sufficient for what?

**Domitrius Clark:** Yeah. I think without giving a specific answer again I think without the clarity, I think I can say if you find yourself in a moment where you're afraid of what bumps over the free limit reaching out to our support team, like we have an entire team dedicated to helping out specifically with plans and things like this.

So if you're a small team or an individual that's building a project and. You're trying to push the boundaries. That's actually something we're super interested in. [00:30:00] So reach out to our support. You can even reach out to me and I'll reach out to the support for you. I'll do all of the liaison work that you don't wanna do.

And we'll get you. We'll get you set up with something that's comfortable for your plan. We're really generous when it comes to that. When it starts to push into territory where you're like a business, trying to maintain a plan, that's a different story. An individual who's trying to get started and learn about how to use cloud area.

We definitely don't wanna stop you at our tier limits just because, so definitely just reach out to us. That's something that we can handle for you.

**Brian Rinaldi:** Awesome. That sounds great. And Jayden is gonna be it's the last question we have so far. If anybody wants to throw any others in there, we've just got a few more minutes.

He asked why you keep torturing yourself with live coding.

**Domitrius Clark:** So I love that question. So I don't mind messing up like the idea of development is centered around like this perfection thing. And it's don't get me wrong. I'm an egghead instructor. I get what, like really well articulated content does.

Since I started streaming and all of my, if you go and look at any of my talks, I do live coding for all of my talks, because this is what it looks like to [00:31:00] actually develop something. Obviously we have time constraints, obviously we're in a bit of a different time bubble than you would have you in live streaming or doing this, live in front of people, which I really miss doing.

This is something that, again The chat was involved. They were seeing that I was doing mess up. They're seeing that this is what regular development looks like is mess up. Is typos is screw ups like this, like these are the realities that you deal with as a developer. And I think a lot of the content nowadays, while it's really awesome shows like the perfect case scenario.

And I think we all as developers know that is just never, that it's just never the perfect case. So that's why I torture myself with live.

**Brian Rinaldi:** Yeah. Yeah. I really enjoyed it. I granted I'd enjoy all kinds of presentations, so this was a good change of pace. So Mike asked what differentiates you from imgix?

**Domitrius Clark:** Yeah. So imgix while it has, I think one of the really cool things about image X is it does a good job at not forcing you to learn a lot about what the transformations are doing or about media. It just gives you like a really clean and simple API. I think Cloudinary. Just has so much more to [00:32:00] offer from its API, from its core.

As far as like being able to handle many types of media in many different ways, like that's you look into the ecosystem and I think over quarantine, we saw this the most, like people had the time right now to be able to. To ideate and think while they were stuck at home and in this really terrible scenario, at least some did.

And what you saw come from that is like really awesome stuff. Like just talking about the next image component and the way that the browsers have been, like really paying attention to ways that it makes it easier for you to do. Your job without having to know everything. I think that there's a lot of tools that, that fit into very niche places.

I think cloud area is still all encompassing when it comes to what it can handle and the types of media that you will have to run into every day. We handle that in all of our SDKs. Cool.

**Brian Rinaldi:** One other comment that came through while you're you had your birthday up there and I guess I didn't see, I guess it was 93 and somebody said 93 damn.

Now I'm trying to figure. I don't know. Does he mean 93? Damn damn he's [00:33:00] old or 93. Damn damn he's young.

**Domitrius Clark:** I. I think I'm in the middle weird place now where I'm 28. And I could be either of those things to either person. I feel like when I'm in the room with people, I'm still the young guy, like I'm still the baby to everybody.

But then when I talk to certain people, they're like, dude, you're hitting near 30 and it's Maybe I'm old. Maybe I dunno. So let me tell you that all good question. I don't wanna put

**Brian Rinaldi:** exactly see my first year on there. so yeah, he'd be like, that Dan would be like, damn, alright thank you, Dmitri.

That was awesome. A lot of fun and I hope you enjoyed giving it as much as we enjoyed watching it. Oh,

**Domitrius Clark:** I definitely.
