---
_build:
  list: false
  render: never
---

**Micha Rodriguez:** [00:00:00] Hey everyone. I'm Micha and I'm really excited to join you today. This is my first time to give a conference talk and I'm feel the butterflies. I'll be talking about one of my favorite topics, though, accessibility. But first, think first. Let me introduce myself. I'm based out of Austin, Texas, where I've lived since 1997.

I've got an image on my slide of old Austin around the time I moved here when I was still a teenager. At the time. There was a pretty iconic record store called Sound Exchange, and it had an infamous mural by Daniel Johnson. It's a funny looking cartoon frog and it says, hi, how are you in Capital letters.

The mural has been preserved. All those sound exchanges long gone. [00:01:00] Austin has changed a lot in the last 30 years, and if you can believe it, so have I. When I moved here, I was a submarine technician at Thundercloud Subs Sandwiches. That is today. Im a technical writer at DQ Systems, which is a leader in the digital accessibility space.

In addition to being a writer, I'm a front end developer and accessibility advocate. I really love Coffee and cats. My cat, Selena may make a guest appearance in this session. I'm a swimmer and Pilates nerd. I'm also a bookworm, and reading is what led me to accessibility. I. So a little more about me. I'm not a total newbie, but I did come to the tech scene pretty recently when the Covid pandemic shut everything down.

My life, like so many others, got flipped upside down. For years, I had worked in the restaurant industry, but I knew I wasn't going to continue to do that. I was underemployed, teach [00:02:00] teaching English as a second language in the middle of the night, tending to new houseplant during the day. Spending a lot of time on social media reading a ton and trying to figure out what my next moves would be.

I started learning front and web development around the same time that I start started learning about disability justice. I first came across this concept in a wonderful book edited by Alice Wong, featuring first person essays by and for disabled people. I have an image on my slide of that book surrounded by pill bottles and a handholding, two white pills.

Disability visibility is an awesome read. I really recommend it. It gave me some much needed perspective on what disability is and how disabled people move through the world. As I said, as I was learning about disability. I was also learning front end development. I was introduced to a few web accessibility concepts in the curriculum I was following, but I was [00:03:00] really motivated to dig deeper all the time to seek out the knowledge of accessibility experts and to share my developing knowledge of accessibility with others.

That said, it's a journey. I don't know everything. I'm always learning. When it comes to web development, programming languages, best practices, new technologies and accessibility, there's always more to learn. And that's something I really enjoy about this field. So today I want to emphasize that accessibility is for everyone.

What do I mean by everyone? I think because of how I came to learn about the importance of accessibility, I really want to center disabled users. What is disability? Let's look at a broad definition. Disability is the experience of any condition that makes it more difficult for a person to do certain activities or have equitable access within a given society.

The World Health Organization notes that more than a billion [00:04:00] people in the world today experience disability. These people generally have poorer health, lower education achievements, fewer economic opportunities, and higher rates of poverty. This is largely due to the barriers they face in their everyday lives rather than their disability.

Disability is not only a public health issue, but also a human rights and development issue. The WHO also says that disability is universal. You or someone close to you will likely experience disability at some point in your lifetime, especially as you age. When you think of the word disability, you might get a certain idea in your mind of what that is, but disability encompasses many different experiences.

Keep in mind that one can be born with a disability. Or one might develop a disability later in life. Some disabilities are visible while other disabilities are [00:05:00] invisible. Temp disabilities may be temporary, or they can be permanent disabilities, may be cognitive, developmental, intellectual, mental, physical, sensory, or a combination.

People can have multiple disabilities.

So there's a biological aspect to disability, but also a social one. As we just touched on, the World Health Organization refers to the social model of disability when it says that the barriers that disabled people face in their everyday lives are what limits their educational and economic opportunities.

I personally, and hopefully a lot of us here, want to help remove these barriers. And in the context of working in tech, that means we want to make sure that disabled folks can use our websites and apps. We want to make them accessible. The Worldwide Web Consortium says web accessibility means that websites, tools, [00:06:00] and technologies are designed and developed so that people with disabilities can use them more specifically, people can perceive, understand, navigate, and interact with the web, and they can contribute to the web.

We are going to talk about some ways to do that, but I wanna come back to the idea of accessibility being for everyone. We talked about how the designing and developing of websites and apps with accessibility in mind can be with the goal of creating digital equality. But accessibility more often than not, improves the experience for all users.

Most users are going to appreciate a consistent layout throughout your website. Predictable form labels and controls, conventional navigation and plain, easy to understand language. It's easier to read text on your site if you break up those large blocks of text if the user doesn't have to side scroll or squint.

Using clear [00:07:00] instructions and error messages reduces frustration for everyone. Wouldn't it be so helpful to know ahead of time that your password needs to be at least 10 characters? Have at least one capital letter, two and a half numbers and four symbols, but not the ampersand and responsive design is just imperative these days with users accessing sites with so many different devices.

When we're talking about how accessibility benefits all users, remember that users often experience situational limitations. Things like glare and sunlight. Readability can be addressed with accessibility principles. Same for folks who are in a noisy area or can't use audio on their device. People who have a slow connection speed need you to keep accessibility in mind.

Here's another situational limitation. Your prankster coworker has encased your mouse in jello. And what are you going to do without a mouse? You might need to use your keyboard today. Other things [00:08:00] that may make it more difficult to interact with the web are a headache, a sprained wrist, a child who has fallen asleep in your arms and so on.

I get my eyes dilated once a year, and while it's ridiculous for me to try to use my phone or computer in that condition, I still try. Using a screen reader and or a voice control would probably help me out. So when we add accessibility to our sites, we help all these folks. Accessibility is for everyone.

We've talked about everyone being our users, but let's talk about the other side of that coin. Whether you're a designer, developer, tester, or project lead, you play a role in creating accessible website software and apps. It will be easier to achieve that with all hands on deck. Shifting left is the idea that we can think about accessibility early on in the development process.

It's going to end up [00:09:00] saving us time in the long run, and it's going to get us closer to that goal of digital equality. So if you're a designer, you can think about appropriate font styles and sizes, good color contrast. You can make designs for mobile and desktop and other devices. Developers can use best practices for writing accessible code.

Things like alt text, semantic, HTML, landmarks, clear labels and instructions for forms, captions, and keyboard accessibility. I'll dig into this a little bit more in a few developers and testers can use assistive technology, browser extensions, linters, and so on to check for accessibility. Teams can incorporate automated tests in their development pipeline so the issues can be addressed before that code goes to production.

It is important to think about the different ways people interact with websites. People are using [00:10:00] different types of devices, a phone, a point of sale device, their smart tv, and so on, and they may use different equipment to interact with these devices such as a keyboard, a mouse, a track pad, a remote control, a screen reader, adaptive input devices like switches or head tracking.

This slide has images of a large print keyboard, a chin mouse, a joystick headphones, and braille keyboard, and a standard mouse. So how do we do all the things? How do we take into account all the different technology and equipment that people will use to make sure that they have an accessible experience with the web?

It can feel overwhelming to learn all the guidelines and check for everything, but it's okay. Slow down. You can't go from zero to 100 with accessibility. You can't even go from 50 to 100. You can take one step or a few at a [00:11:00] time and build your toolkit.

I don't know if you're familiar with the book Atomic Habits. In this book, the author James Clear talks about a concept called habit stacking, where if you're trying to build new habits, you link them with existing ones, creating a sequence for your brain to follow. I think you can do some habit stacking with accessibility.

Start with one or two things and make those routine. Once that becomes more automatic, you can think about incorporating more accessibility standards into your development practice. On this slide, there's a picture of a hand stacking pastel color jingle blocks. Another thing clear talks about in Atomic Habits is to remove obstacles for yourself that will allow you to build a new habit.

So I think some things you can do there are use automated tools like the Access acts, accessibility linker, or have web components or code snippets that factor in accessibility. [00:12:00] One code snippet I made for myself is a CSS class for screen reader only. This could be used with something like a skip link at the top of your page, for example.

There are a lot of different considerations when it comes to accessibility, and I couldn't hope to cover them all in one talk, even if I had another hour. But I do want to offer a few action items that you can take with you today to get started with accessibility. I watched a great session by Ben Allen at Axon this year.

That's another virtual conference that my company DQ puts on focused on digital accessibility. And in Allen's talk, he offered an accessibility workflow for beginners. And what he hit on is that it starts with writing and linting the code. Then you can move onto the browser, check the layout and the color contrast, make sure controls are working and so on.

And from there you might start incorporating accessibility checks in [00:13:00] automated tests. That's something that will be baked into your development pipeline. And then as part of the big picture, hopefully you can start to have more communication in your team about accessibility.

So with that in mind, if we're starting with the code. We want to use semantic HTMO. It might sound like common sense, but use heading elements for headings. Don't use them to get a particular font size or weight use button. Elements for items that are going to change something on the page. Use form controls appropriately.

Indicate your input types. Make sure your inputs have labels. Use the select element for dropdown menus and so on. Make use of landmarks such as header nav, footer aside section article. This is going to help users, especially with screen readers, to follow the structure of your website and navigate it more easily.

So [00:14:00] speaking of Symantec, HML, I always like to encourage people to avoid div soup. No diiv soup for you. On my slide, there's an image of a character from the sitcom Seinfeld, a New York chef who refused to serve his soup to the main characters. He has a stern face and he's holding his finger up in front of his face to say no soup for you.

The reason I say to avoid Diviv soup is, for example, when you use a diviv instead of a button, that element isn't automatically tapable or clickable. You have to add that functionality a lot of times. You have to add that functionality in. A lot of times Semantic, HTML elements already have built-in functionality.

They're pretty much ready to go, just right outta the box. You might have to tweak it a bit with CSS, but that's all good because you're already going be able to tap to that element and you're going to be able to use the inter key or your mouse to click on that.[00:15:00]

Another thing that's often mentioned when it comes to accessibility is alt text. This is text that we provide for an image element that will communicate visual information to your users. This will help people using a screen reader for sure. I. Also, if you're having a performance issue, somebody has a slow connection.

The image isn't loading, a link is down, or whatever that alt text will show on the page so that the user can still get the information that we wanted to communicate visually. There's some rules of thumb with alt text. You don't wanna say image of or picture of a man with a skinny curly mustache. Just go ahead and describe what will have already been identified by a screen reader as an image.

You don't need to go overboard with your description. Just a few sentences we'll do. You probably don't want to use more than 200 words to describe an image, but you also want to make sure the main information you're trying to convey can be communicated to your users who are not seeing that image. [00:16:00] On this slide I have a picture of a post from Blue Sky and it's got the alt text modal popped up, and the alt text reads a lap pool just after sunrise, a lifeguard and pants and a hoodie is posted at the edge of the deep end, which has steam rising off the surface of the water in the morning light

one other. Action item I'll task developers with is to make sure that links have descriptive text. Avoid read more, and click here because those links won't make sense out of context. At the same time, using the URL as the link text should also be avoided since this can be difficult to understand when reading or hearing read aloud.

And style links with consistency. Typically, links are underlined and have a different color than the surrounding text. If you want to remove the underline, you should include another visual [00:17:00] cue besides color to indicate something is a link. So

moving on from the competitor. You can do some in browser testing for accessibility as you're in the development process. You can use browser extension extensions. One that I really like is the wave evaluation tool. It's awesome. You can turn that on and it will give you some feedback about what you have on that page.

It will flag issues so you can go ahead and fix them. You can also look at color contrast tools and colorblindness simulators. You can inspect pages and check in the developer tools for accessibility, and DQ has a tool called acts, dev Tools, which is a browser extension that you can use as well as we continue testing in the [00:18:00] browser, I think you should test with a screen reader if that's not something you do already.

There are different screen readers for different systems. There are Jaws, NVDA, and narrator for Windows and voiceover for Mac. If you aren't used to using a screen reader, it takes a little getting used to. So I always like to share this resource, these shortcuts for screen readers. This because shortcuts do depend on the screen reader you're using, it's handy to have a guide to that until you get used to it.

This can help you to navigate easily. Instead of having the screen reader read every single thing on the page, maybe you wanna skip around. Maybe you want to figure out how somebody using the screen reader would move from heading to heading or move between links or go back to the navigation menu. So check that out.

Screen reader testing overlaps with testing with a [00:19:00] keyboard. This is something else that's really important to do. So unplug your mouse or put something on top of your track pad and try navigating the web with a keyboard. I've got another link here with some techniques for keyboard testing, but some of the keys that you're going to use, some of the main players are tab shift, enter and space bar.

You use tab to navigate to each interactive element on the page, and you can use shift plus tab to go back to a previous one. You wanna make sure you can access each of these elements with the keyboard and that they have a noticeable focus state. When you're ready to interact with an element, you may use enter or spacebar or arrow keys.

Another thing that we want to do in testing in the browser is to check different viewport. Make sure text is still readable. The layout is still intuitive. Navigation is still fluid on different screens. [00:20:00] Accessibility is for everyone. Most of my knowledge about accessibility practices pertain to frontend web development.

I don't want to leave anybody out though. Someone asked me a while back, what about if I'm in backend? I don't personally have much experience here, but I did look into it and I learned that when you're building APIs, you can consider reusable structures and ensure that the content requires accessible roles, names, states, or properties.

Also, APIs can enforce requiring things like having captions and transcripts for videos and audio content and alt text for images. Maybe some of you here today aren't in development at all. You're here supporting a friend or family member. Hi, mom. I want to say that you can help make the web more accessible too.

A lot of us are on social media or use communication tools like Slack and Zoom. If you're sharing images, a [00:21:00] lot of apps have advanced settings that allow you to add al text. I honestly really enjoy adding that info because I can use it to give additional context for the image. If you're using an app that doesn't let you add all text, you can still use a comment or caption on the post or in the chat.

Another thing you can think about is adding captions for recorded audio visual content. Again, some apps have settings built in. That will enable this pretty easily. But if they don't, you can look for external apps that can help you with this. Wrapping up, I've talked about how accessibility helps to create digital equality for disabled users.

It's going to improve the overall user experience, help people who are experiencing temporary disabilities or situational limitations. And I've said that shifting left is a group effort. Everyone who's involved in the development process can work on this. [00:22:00] Remember, you can't assume who your user is or what their given situation is.

You create a better experience for everyone when you incorporate accessibility and you don't have to be an expert. You just have to get started.

I hope you try some of the tips that I've shared in this session. And here's a list of some of my favorite resources so you can continue to add to your toolkit. I've got, there's a course here, an Introduction to Web Accessibility, and I found a quick reference for how to meet wca, which is the Web Content Accessibility Guidelines.

Somebody shared this resource the other day, intentionally inaccessible websites. You can take a look through those and see if you can spot some of those issues. I've got links to color contrast checker, the Wave tool that I mentioned earlier, the browser extension, those screen readers shortcuts.[00:23:00]

Keyboard sheet keyboard shortcuts, and a link to Ax Con 2025, which already happened, but you can sign up for it now and you'll have access to all of the talks that were given. And, something really cool this year at Axon is that the keynote speaker was Alice Wong, who I mentioned at the beginning of my talk the author of Disability and Disability.

So that was a real full circle moment for me to be actually participating as in, in Axon and to witness that Awesome keynote. So I hope you have a chance to check that out. All right, and got some of my contact info here. If you ever wanna chat about accessibility, please get in touch.

I'm happy to share what I know, and if there's something I don't know, we can look into it together. If you have something you wanna share with me about accessibility, please hit me up. I'm always wanting to learn more.[00:24:00]

Thank you to everyone at Virtual Coffee for the Amazing Community, and thanks to the organizers who gave me the opportunity to speak today. Thank you everyone for being here today, and please enjoy the rest of the virtual Coffee conference.

**Bekah Hawrot Weigel:** Woohoo. Amazing job, Mika. That was so wonderful. You are definitely came off as a seasoned professional speaker, so just extra applause and hats off to you everyone.

This is Mika. This is your first conference talk, right? Yeah, definitely. There's a lot of love for you in the chat. Everybody really enjoyed the talk, so definitely check that out. And I know this is something that we talk about all the time in virtual coffee. And it doesn't matter if you've been in tech for a long time or a little bit of time, as a book camp grad.

I don't remember doing that much about accessibility. And so a lot of it's like. Trying to fill in those knowledge gaps, but I know people that have been in tech for many years and also didn't know about it too. So I think [00:25:00] it's, unfortunately one of those evergreen topics because ideally we wouldn't have to talk about this, right?

We would build it into our process. And so this is why I just really appreciate that everything that you just shared, because it's so important for everybody to know.

**Micha Rodriguez:** Definitely. Yeah, I think so too. And that's why I just won't stop talking about it. And I'm really excited that I get to work with a company that has digital equality as its mission.

It's a dream come true. So wonderful.

**Bekah Hawrot Weigel:** We're so happy for you. So if you had to pick one resource to start with, let's say for somebody that's really new to tech and is just learning front end development, which one would you send them to?

**Micha Rodriguez:** I think maybe that, that first item on my list of resources, there's, that's like an introduction to web accessibility from the Worldwide Web consortium, I think.

I think that's what it was. I think Odin Project and Code Academy probably have intro to web [00:26:00] accessibility. I wish I did have one thing that I was just like, this is the one, but I feel like I'm always just hopping around and, digging into different resources. Yeah.

I have to say DQ of course, is a great resource They have, a university where you can do some courses there and they have a lot of articles and resources that you can use when you're checking for accessibility.

**Bekah Hawrot Weigel:** Absolutely. I find that I've learned the most actually through going to conference talks because I learn so much and then I know oh, I can reach out to Mika about this thing or if I have a question, because sometimes like you'll find that with accessibility resources.

Maybe just general tech resources, they could be a little hard to navigate. They're like dry or I don't know what you're talking about. And so having something for every level of understanding can be really useful and like talking to people like you makes it more accessible to find those things.

**Micha Rodriguez:** I get that. Yeah. Having conversations and just, and. Doing things interactively. Maybe in a [00:27:00] presentation you can see those real life examples. And yeah, and just practice accessibility. Do accessibility audits if you wanna try it out today, if you're a developer and you're familiar with it, like just go to a website and and download that wave evaluation tool and run that at the same time and see everything that pops up and you can get an idea of some of those issues.

I think there's a statistic, like 95% of websites are their homepage is not. Totally accessible. Not to say that it's a disaster, there will be issues and stuff. Hopefully we can get to a better place with that.

**Bekah Hawrot Weigel:** Yeah, absolutely. And it's, it starts with this, it starts with these conversations and understanding.

So thanks again. I think you did an absolutely wonderful job.

