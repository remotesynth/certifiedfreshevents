---
_build:
  list: false
  render: never
---

**Martine Dowden**  0:19
Today we are going to talk about HTML. It's one of as web technologists, we do HTML a lot, and I feel like it's one of those things where it's really easy to get started with and do very simple things, and it's also very easy to forget that there's more than just a handful of elements. There's actually a lot of them. And so this presentation kind of focuses on what are those other elements that we can use and why we should use them. I'm going to skip that since y'all thank you so much for the intro. I'll put links on my social about my socials at the end, for those who want to find me. But first, let's start with the div, right? The quintessential cornerstone of HTML, it's a generic container. It has no CSS styling to speak of. It can do anything. It's block scoped, right? We kind of have its friend, which is not mentioned here, which is a span, which would be the inline version of it, but it's, it's just just the container, right? And if we look at the dev tools in our browsers, we can kind of look at what it has in terms of information under the cover. And it literally has nothing. It does nothing. It has no role. It has no information. It is just there. So it's a great element to do a lot of things, but it doesn't really provide any value in terms of helping for the structure of our content. So let's look at a page, and this presentation is going to follow this kind of portfolio that's been put together. We're going to kind of work top to bottom and look at various elements that we could use to make it better. So this version is made with entirely divs. Every element in here is a div, and we can see that if we don't style it in any way, shape or form, it's just words on the page, right? There's no structure to the content. Now, if I go in and look at the and look at the under the covers, what that looks like from a semantic standpoint, it's all text. There's nothing to indicate that anything has any particular value over anything else, or what that structure might be. Now, if I use actual other HTML elements than divs, now we start to even before we apply CSS, see that now there's a structure we can start seeing, even though this is, you know, greatly zoomed out, we can start seeing that not all content is created equal, right? There are some pieces that are more important than other, and that's going to be true both from a visual perspective, but also from a technological standpoint, where things like SEO might look at this and be able to determine, oh, this is the important bits of content. So there's both an accessibility benefit to using proper elements, but there's also an SEO benefit to doing that. If we look at what it looks like under the covers, now we can start seeing that there's a major there's a structure to our content. And not only is that going to help us in terms of styling long term and in terms of being able to tell what's what when just looking and reading through the code. It's also going to help us again with SEO and accessibility. Then, regardless of which which type we use, we can style it however we want, but that's where CSS comes in, right? That's a whole different ballgame. So let's work through this page and see what kind of elements we can use to make this a little bit more interesting and to make it better in terms of our HTML, I'm going to start with the landmarks. And then landmarks are things like your headers, your nav main and what those do is they allow, they allow for things like assistive technologies to be able to navigate the page more easily. Many of the screen readers now will allow users to skip from various landmarks to various landmarks, so that they don't have to listen to the entirety of the page every single time. For example, they also denote things like, is this aside, for example, would denote that it's a little bit less important than maybe what's in the main region. Those kinds of things forms obviously have some sort of functionality behind it. So those are all elements that are going to help us in terms of determining what are the important bits of the page, where are the important bits of the page and where our content is going to be if we continue starting at the very top of the page, and kind of look at those landmarks. The first one that is on the page is a header, and so you'll see that the first element I've put in there is, first of all, nature, one most pages at some point. Are going to need to have an h1 right? That's going to be what the page is about. And inside of there, you'll see a Ruby tag. Now that's one you may not have seen too often before. And the cool thing about Ruby, the Ruby to element, is that it allows you to go ahead and put the pronunciation for a particular name. So in this case, the name Skylar Lewis. Well, first off, Lou Lewis could have been pronounced Louis or Lewis and Skylar. There's many ways to to spell it. I want for the most convoluted one I could find on purpose for this example. But that would give somebody an example of how to go ahead and spell and say then the actual name in question, the Ruby. If we look at how it looks like under the covers, we'll see that it has the actual RT element. That's where you're going to go ahead and put in that con, that pronunciation. It's usually the most oftentimes when you see it is going to be for Asian characters. However, can sit for anything else that's going to give you pronunciation guides, right? But most of the time where you're going to see it is for Asian characters, and can be done in the the actual bit that's interesting is, if you look at the spec, although it's usually used for pronunciation, it's actually just a simple annotation, so you could actually use it just to annotate text, and by default, with no CSS whatsoever, it's going to be displayed above the word. So for example, like how I have it up there. This is over here on the on the left side, you'll see this is the default formatting in Chrome. It's just going to stick it above the word. The thing is, not all of the browsers actually support the styling quite yet. So what you can do is add a second element, so you've got the RT, which is the pronunciation, transit, translation or transliteration, that's going to be required. That's the part that gets put above. But you can also put an RP, which is the fallback parentheses. So in an event, such as an edge or Safari that don't support the styling and wouldn't just stick it above the word, like Chrome does, that would conditionally put in the parentheses for you, so that would allow it would be beside the word in parentheses, instead of above the word. So if the style is supported, it goes ahead and ignores the parentheses. But if it's not, I'll go ahead and put them in for you, which is kind of cool.

Moving right along, we have address now, address is interesting in the sense of, at least when I started with HTML, I was pretty convinced that address was exactly for that address. Well, you can actually put a lot more than address inside of the address element. You can actually put it's for any kind of contact information, really. So it could very well much be an email address, your phone number, any way that's going to be to contact the person in question or the entity and question that you're referring to. So in this case, can put, we can go ahead and put it. What's interesting about it, though, this that there seems to be some interesting question as to whether or not, like, SEO takes it in consideration or not, which is, you know, kind of an interesting concept, especially when you look at the accessibility tree for it, which is, it's a generic there's really no semantic meaning attached to it. What it does do, though, is it makes it really obvious, if you're looking through a code base from a just a developer experience perspective of, hey, this is where the contact information lies. So there's a little bit of controversy on the internet as to whether or not it helps with SEO. But it exists and it's there. It doesn't have it does have a default style, which it's it will go ahead and put things in italics. So you can go ahead and, you know, choose to restyle that as you please. But that's kind of how that one works. Moving down to one of my favorite elements, actually, which is the definition list or the depending on where you look at it, it's sometimes called a description list, sometimes a definition list, depending on the documentation that you read, which is kind of interesting. But that one allows you to go ahead and create lists of things. It's really it's really beneficial for things like glossaries, metadata, those kinds of things. I tend to use it a lot in blog articles, for example, where you have, like, that little bit of information at the top, where you might have, like, how long does it take to read? When was it published? You know, what technologies does it refer to? Like, all that kind of, like, bit of information that's related, where you have a key and a value. So oftentimes you're going to have the key, key value pair, kind of association with them. So you're going to have your term and then your definition. So if the browser, we can see that it has under the covers. It'll show you a term and definition in terms of those, how that goes, like the order of the HTML really, really matters, because you can have more than one definition for any given term. So you're going to have your term, which is the TD, and then your DD, which also has under the covers, says its description. It is styled a little funky in Chrome. So usually, I mean, personally, I'll use, generally, end up using a grid to go ahead and put them side by display grid to go ahead and put them side by side. But you can do whatever you want in terms of styles, right? CSS will let you do what you want. What's also interesting there is that the role is going to be Term versus definition, even though the the actual name is often referred to as the DT or the definition title, or you'll see any like, I don't know why the documentation is so haphazard in terms of the naming, but there you go. So from there, all of these are totally legitimate, which is interesting. So if you look at a list, for example, you can't put a div inside of a list, right in order to style it differently. If you have a UL, you can't just randomly stick a div in the middle definition list. You can totally do that. You can also put more than one term for one definition, or more than one definition for one term, that's perfectly legitimate, but it's going to look at the order to differentiate how you're going to go ahead and put them together, and how it's going to group them from a semantic standpoint. So for in the case of the one where I have one in English, one in French, and then and you know an answer for it, you're going to go ahead and those two terms are going to be at are going to be associated with that one answer versus the pronoun. One pronoun, one underneath where you have one terms, but two answers or two descriptions, is going to go ahead and associate those three together simply based on their order in the HTML. But this, this particular element, I think, is probably one of the ones that I think is more underused and could be so much better, because we do things with metadata all the all the time. So that's one that, hey, don't forget this one. It's one of my faves. Anywho, moving though right along, we have section. Section is really convenient for grouping, like pieces of content in one kind of group. Usually, a section is going to need a header inside of it, or that's to be able to tell, Hey, what is this section about? In this case, we've gone ahead and put all of the about stuff for our profile in there, including, you know, the images and stuff. And we, in order to handle our image, we have the picture. So picture has a lot associated with it, and you can do an entire talk on just picture and image optimization alone. I actually I have one somewhere. But the point is that what this allows you to do is not on what picture allows you to do is not only determine, hey, based on the multiple based on screen size you want to give different dimensions or different pictures. So for example, let's say in how often do you see a website or something where I have a big banner image, which is absolutely huge because you want it full width on desktop, but then on mobile, like now suddenly don't need a, you know, 3000 pixel wide image on mobile and it takes forever to load. This allows you to go ahead and put multiple images and define a screen size and to say, hey, in case a, look at this one. In case B, look at this one, and so on and so forth. And then you put your default at the end. So let's look at that a little bit more closely. What ends up happening with that structure is, for each source, you're going to go ahead and determine which what image it is. You can go ahead and put in height and heightened width. It's not required, but it will help you with things like reflow. So you can go ahead and give it what that dimensions are for that image, so that you end up with the aspect ratio, and that way, as the image loads, then the HTML doesn't reflow, you're going to give it a size that's the final rendered size for the image. So let's say you have a 300 pixel image, but you're only going to end up being, you know, 250 pixels wide because of the screen width, right? We can go ahead. We need to go ahead and determine that size based on how it's going to be rendered at any given point in time. So that's where. And you're going to use the same media queries as you would and for CSS. So in this case, we're giving it like the max width goes for the media query, and then we can use calc in order to say what the size is going to be, and then your media is going to be, actually, that has a typo in it, that max width should only be on media. But anyway, I'll have to fix that slide. Yeah. So we can go ahead and set not only the size, but then when it is going to be applied, which is that media query image type, obviously, is exactly what it is. In this case, I've put it a WebP, but that can work with SVGs. It can work with any, you know, PNGs, JPEGs. You just got to go ahead and give it that image type, and that's the standard MIME type for it, and then finally, you're going to have that fallback for browsers that don't support picture, although at this point, it is pretty well supported. In the end, the fallback image is where you're going to put that alt text for being able to have it available for assistive technologies. So this is a really cool element because it also means that not only can you resize your images based on the width of your screen, which and serve up much smaller images when it you know only a much smaller image is required, but it also means if you want to be able to say, crop your image differently based on your scoop size, you can totally do that, because nothing says that the image that is served for your six your bigger than 640 pixel wide screens has to be the same as for your smaller pixel, you know, your smaller size, screen size, and vice versa. You could put something totally different in there. So it also allows you to tailor that without having to do a bunch of fancy JavaScript and all that fun stuff. When we look at kind of to just reinforce the point, when we look at the network tab for each of those, we can see that, depending on the screen size, it only loads the one it needs, which is also cool. So based on whatever your screen size was, when it loads, it's going to load that one. And as soon as you change the width of the size, on reflow, it'll correctly load the correct one that you need. Or on resize, it'll correctly load the one that you need at the moment that you resize the screen, if you hit that break over point for needing a bigger or smaller one, our skill going down the page. We also have a skill section, which, in this particular case, has been made as a as a list, the in our skills, what I we have a couple little interesting elements, and we have the ability like we I made it so that they were clickable to kind of be able to look at the concept of the dialog. So let's kind of dig into that really quick.

If we look at our list, the first thing we have is we noticed that some of the words in our list are abbreviations, right? CSS is an abbreviation. For example, it stands for Cascading Style Sheet. In this particular case, in order to face have it go ahead and give the I made it an on click. It's a button we can we're going to talk about that here in a minute. But the title means that, by default, when we go ahead and hover over it, it's going to give you the full name, right? So we want to make sure those match. We only include the title if the definition is not available somewhere else. Like, don't if you have, like, if you're writing a paragraph and you introduce a new abbreviation and you have the word right there, there's no need to put the title in there. You're only going to do that if the context around it doesn't have the abbreviation as part of it. So let's look at that a little bit closer, if I have so this would be the two use cases, right? Because there's no need in the redundancy in the title if you're going to have and have the content right there already available, and the spec actually specifically points that out. So worth noting that don't go ahead and put the title otherwise. The The thing is, if you think of screen readers, they're going to read out those titles to people, so they're going to get that redundancy of like, it end up doing something like, I love, you know? And then it's going to read the title, and then it's going to get it again, right? You're going to get the text, and then you're going to get the title. Again. So it actually gets really noisy for people that are using assistive technologies, which is why you don't want to do it. The other piece that's here is, I actually added the dialog. What's really cool about the dialog element, which has actually existed for quite some time, but is now actually fully supported across modern browsers, which is super cool, as it allows you to go ahead and create a dialog without all of the extra craft of having to use a library or anything like that. Historically, one of the number one reasons I'd start pulling in something back in the day was jQuery. Now it's either, you know, Angular view, pick, pick your flavor. We can get into the religious words as to which one is the best. It doesn't really matter. But one of the reasons, you know, you pull in libraries as dialogs, which were so difficult to do, and so especially once you start thinking about things like focus traps and keyboard accessibility and being able to make sure like focus was in the dialog. And so. On. It's it's a lot of code. Well, this, the dialog element allows you to do that right out of the gate, and has all the accessibility already written in. And you can get to the to open and closing it with very minimal JavaScript, like the what is displayed currently on the screen is the all of the JavaScript, nothing more. And it has things like pressing ESCAPE to close it already built in, and everything. It just works, which is awesome by default. They're kind of ugly, you can they kind of need a little help on the HTML, on the CSS aspect, but they do absolutely totally work. And you'll see that it does have under the covered under the covers, a lot of information already built in, including that it's focusable, that it's a that it's a modal, it's and so on and so forth. So all of that is already pre baked in, which kind of limits, like, especially for small projects, and, you know, websites where you may not want to bring in a big old, you know, Uli a UI library or framework opens up a lot of doors for being able to do those pretty easily. Keep on continuing down into our profile, we also see the time element. So time is really interesting, because time, of course, is it takes a date time attribute. And so now we've gone to date time can take any date or any time. It's kind of Lucy, it's the amount of we're going to look at here in just a second, of all of the options that we can potentially put in there, even though it's a time you would totally put it like, for example, this conference on their website. I don't know if they did. I'm going to poke at them just a little bit. Could totally put a time element to say which dates, like dates and times that the conference with that. And so you go ahead and put it both visually as in the human readable version, inside the element, in between the two tags, you know, the opening and closing tags. But then you're going to put a machine readable version, which is that date time attribute. And so there you can go ahead and put any slew of options, including just a year, just the time, a local date time, a duration, which I mean, if you want to get into the fun of how those duration like looks like the cat said on the keyboard, kind of code works out. Have fun with it. But the point is, it's going to be your basic ISO stuff, or a duration element, and that's and you can go ahead and put even though it's the time element, you can totally do it's kind of same as JavaScript that have kind of, you know, meshed up date and time together as to one big concept in this big fat mess. Yeah, that does it too. So yay for consistency. Um, going down our line, we also have the concept of block quote. And, um, block quote is super cool because it allows you to go ahead and you know quote people want, and then you can go ahead and cite what you've done now in this example. And I need to update my slides on that, because it was pointed out to me earlier and I didn't have a chance to update the slides because I was not doing it like right before my talk site is technically only used for when you're citing a piece of published works. So it would be to be able to so in this case, this example is actually incorrect. You wouldn't want to use the site if you had say a quote from like, I don't know, Tale of Two Cities, or something like that, then the site would be the reference to the published work by Dickens, or something like that, the but that's how technically speaking, you're supposed to use the site element. I've seen it used incorrectly in this way multiple times before. However that that is worth noting that, hey, you're supposed to only link to where you reference the actual published, published works. Figure is super cool, and you can put a number of things inside a figure. You can also put images inside a figure, and that's how you would link something like a image in a caption, or or a diagram in a caption, for example, or things like that. So you can totally put images in there. You can totally put your blog quote in there. In my case, I went ahead and put a quote in my site inside of my figure to group them semantically together, and you can see that it has the details the the figure itself goes ahead and references in the inside, under the covers, go ahead and references their fig caption or their figure caption to determine what the details of what is being shown. So that does two things that are super cool for the first thing it does is that when, let's say, you're trying to lay out your image. Somewhere. Let's say it's an image or a diagram. You're trying to lay it out in your page. You know your caption is going to stay with it, right? So you can go ahead and move that around, like, float it, you know, juice, flex, dip, grid doesn't matter, but it's going to, they're going to stay together, which is super cool. And then from a semantic standpoint, it'll make sure that assistive technologies and SEO know that, hey, that's a description for that piece of information. The Fit caption is optional as a side note. The Oh, I already went down my my little tirade about site and it being incorrect. So y'all already got that piece. There's two ways you can do a site. You can go ahead and cite on the block, quote itself as an attribute there. It will be semantically there, and it'll be there from a programmatic standpoint, but it won't show or you can use the site element, in which case, there it will be visible to the user. But for the attribute itself, it will not actually be visible to the user. So that might be a situation where you want to make sure, for no legal purposes or whatever, you're citing your references, but don't necessarily need to display it. You might do that, but if you want it visible, you're going to have to use the the attribute. Don't use both. You're using one or the other, right? So if you're putting it as an attribute, don't also put it as an element and vice versa. It's definitely one of those, one or the other, and they do both come with a little bit of styling by default. In Chrome, in that the block quote comes up and kind of shoved over to the sides. It has some it's got some margin on it, and then this site will go ahead and be in italics. So after that, you can CSS at all you want. But that's kind of how those are come by default in most browsers.

Blog code versus Q. Q is if you want it to be inline. Basically, they have very similar purposes, and they work in very similar ways. They do have a handful of differences in that your block. Quote, you can actually put paragraphs on it. It can contain, it can contain other elements. You could put a list in it. You can put paragraph and it can contain other block and as a block level element, quote is in line and cannot have paragraph tags in it, right? So if your quote is long enough that or what you're referencing or citing is long enough that you need paragraph breaks, you're going to block quote. If it's just like one line or somewhere, then you can go ahead and put, just put the the quote, and it'll be an inline similar to your, you know, your span versus the block quote has the default styling, and it's a lot more similar to div, and then it's a quote. So I know I threw a metric, but ton of elements right there, really, really fast at everybody. So I do have a all of the I have this the code for that little profile up on GitHub under it's MartineDowden Slash, diversity, diversify your HTML and the you can also find all of my stuff, including links to my GitHub at Martine dot Dev. It has all of the things, all of the links to all my publications, social medias, everything and and a and under publications, you'll see it has a link to this presentation and these slides. Thank you so much, and I'll take any questions for those who have it.

**Brian Rinaldi**  28:41
Thanks, Martine, that was, that was great. So I know, for my, my, you know, I was commenting about the fact that I have not used a lot of those tags, and really should, some of them I didn't know existed. Other ones. I'm like, I know that I knew that existed, but I just finished redoing a whole site, and I'm like, I should have used that there I was making notes like, go back and fix these things. But So for folks in the audience, we're going to have, we have, you know, a few minutes here for questions. If you have questions, please put it in the Ask a Question module, or even in the chat. We'll get to it. I until then, I have, I have some questions myself, so let's say I just, like, I just finished redoing that whole site, and there's lots of places where I could have used tags that I like this that I didn't. I mean, what? What tools do you use to kind of evaluate, what, how, where you might have, like, missed opportunities for using semantic HTML or or things like, is there anything you can use to say, hey, you know this, you're missing that here and there.

**Martine Dowden**  29:51
Um, so I haven't found a very good like one that suggests like new tags, or say, Hey, you could use the. Yes instead of that, but one thing I definitely always recommend is to run your stuff through an HTML validator, because oftentimes it's really easy to forget, where are you allowed to put, yeah, well, elements. Are you allowed to put a paragraph tag or not, inside of and versus and all and those kind of details. And so making sure that the HTML validates at all is definitely a great first step, because it's, it's just easy to, you know, you easy to miss one, right? Yeah, happens to everybody. And then the other piece is to look at accessibility tools, like accessibility insights for web, which is a plugin by Microsoft, or you can just run lighthouse, which comes in Chrome by default. Both of those are pretty good, and they'll give you AX also works pretty well on that. It'll give you suggestions, especially if you have best practices turned on. Most of them have a setting for best practices, and it'll tell you things like, Hey, you're missing, you have no landmarks, for example, or your your you don't this. So that's a big, important one from an accessibility standpoint, make sure those landmarks are there for easier navigation, but it'll give you some hints on that so that you can start improving your code. But I haven't found like a magic, like a magic tool that's like, hey, this should, you know, you've got divs here, and it should really be like a list. I haven't found a good, a good tool that does that now, yeah,

**Brian Rinaldi**  31:29
that's too bad I need, I need, like, some kind of assistant just sitting there. Hey, by the way, you know you didn't use picture here. You should. You can stop using just image and use picture and things like

**Martine Dowden**  31:40
that. Well, I mean, Image, Image is fine. Like, if it picture is one of those, like, the nice way to figure out, should I be using picture and doing that whole, like, multiple image size thing is to kind of look at your load time. Because if you look at your load time and you realize that the biggest clobbering thing that's making your your your first load slow is your images, because your images are huge and like, that's a great one to be, because the big thing there is performance, right? So if your performance is suffering, that's a really great pictures are always the thing I look at first, because it's really easy to go on something like Unsplash and be like, I want the, you know, the biggest, baddest high def picture. Put that in the site, and now you're, you know, down three, four seconds to get it to load, because the damn thing's huge.

**Brian Rinaldi**  32:29
Yeah. I mean, absolutely the I was, I was thinking even, I mean, getting into, like, the topic of, like, some of the tooling and frameworks, which can sometimes make it hard to say, take your HTML, just validate it, because, if it's you know, if using something like React, for instance, like, just div city, but, but, but, one of the things I was thinking is a lot of these tools have built in, like, image like, Sorry, asset processing, right? So, like, I easily could have done it and just put the picture and said, Hey, give me a version of this image for this size, because I know in my CSS, I have, like, styled that image down when you go to, like, mobile versus, you know, that's and it would have been easy. I don't actually have to manually generate the images. I was just would have told the tooling, hey, I'd give me these two different very, these different variations of the same thing. And, yeah, I didn't

**Martine Dowden**  33:32
have it the auto generation as well. I think, like 11 D has a thing where a little auto, like, scale the images and everything. So that's, I think, more than anything on that, is remembering to do it. Like, that's always the hard part, like, it's setting it up so it'll do it,

**Brian Rinaldi**  33:50
yeah. I mean, eleventy, does i? Most of them do. I'm we. I was rebuilding a site with Astro and Astros got all the image processing as well. It's just, I could do that for a straight, like image tag, or I could have done multiple sources for a, you know, for a picture tag, and it would probably would have been better. So anyway, didn't do it. Need to go back do that. I probably need to do the dialog tag too. I think I did like non accessible modal. There's

**Martine Dowden**  34:22
two options now with dialog, because so dialog is really well supported, which is really good, but depending on the use case, there's also the popover API now, which allows you, which has all the accessibility built in. The problem is it's not quite as widely supported yet, but that one, like for snack bars and things like that, is really powerful. Or even for, like, tool tip type stuff, is really powerful, but the support isn't quite there across browsers and it's really new. So you're gonna, you're gonna, especially if. You're trying to support people not running their updates quite as frequently as they probably should. You're you're going to get people for whom it doesn't work. Dialog is a lot safer from that standpoint. So kind of, if you're needing to retool on that, definitely look up the popover API, because that one has the, it's just, it's more of a they have different purposes and built in things about them so the they're worth. So it just depends on what the need is. More than anything, they both have the focus taken care of, like the pressing ESCAPE to cancel it, the backdrop, the backdrop element to go ahead and, you know, style it the way you want, and do blurs or background whatevers they all have. They both have it. So at that point, it's just which one has the functionality that you need.

**Brian Rinaldi**  35:53
Yeah, I think, you know, there was nothing too complicated in mind, but I I wanted to go back and check because I don't think I use the dialog. And I'm like, I made some notes to go back because we just finished rebuilding the site. And I'm like, I, you know, I did not check a lot of these things. I know some of them I use, but not all of them. And and there are places where I could have for sure. Um, okay, well, that's, that's really all, all my questions for today. This was honestly, like, super useful, because I need to go, like I said, I need to go back and look at stuff you mentioned the CFE dev site, where I'm like, don't look at the code there. That code is a little bit old, and I, you know, and it's, it's a, it's a big Hugo site that I just haven't updated all the stuff yet. So I really should, I mean, if you're not,

**Martine Dowden**  36:49
I kind of always feel like, if I look at my code that I look that I wrote six months ago, and I'm not irritated at some stupid mistake, or I'm not embarrassed by it, then I'm probably messing up somewhere and probably need to retire, and I'm done, like, I feel like everybody looking at code that they wrote more than a couple weeks ago is like, oh, shoot, I should have done that different. Or, you know, I know better now. I think it was just part of part of technology. Yeah.