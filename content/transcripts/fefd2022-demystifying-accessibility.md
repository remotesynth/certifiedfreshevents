---
_build:
  list: false
  render: never
---

**Josefine Schaefer:** [00:00:00] Hi, everybody. I hope you're enjoying friend and Fox's day. I wanna talk today about web accessibility and ways in which you can get started with it. Just before we get started. My name's Josephine. My pronouns are she, her and I urgently come from a communications background. I got to web development actually a couple years ago through a coding bootcamp.

And on my first job, we had an implement accessibility. That's how I got in touch with the topic. I was surprised how many also experienced web developers were not super familiar with it. So that's why today I wanna give a brief introduction of what that means and how you can get started with it.

so what is web accessibility and why is it important? Web accessibility basically means that websites, tools and technologies are designed and implemented in a way that people with disability can use them to [00:01:00] part and participate equally on the web. It's also a basic human right defined by the United nations.

If you're still wondering if that's something that's relevant, maybe for your website or your project, I have a really big number for you. So there was a report by the world health organization on disability, and they have found that over 15% of the population, worldwide experiences, some form of disability and that's over 1 billion people.

Of course, global data is really hard to measure and the experience of disability. Of course really difficult to put into numbers, but even if it's just the ballpark, it's a really powerful. and also as a society, we're generally growing older. So this number tends to get larger in the future as well.

So even if you are looking at this kind of from a business perspective I hope that the sheer amount of people that are affected by this and their massive spending power [00:02:00] convinces you, that this is also rev relevant for you and basically for everyone. And if this is not. I have here a table that shows many of the potential user groups.

There are different kinds of disabilities physical auditory, cognitive, neurological speech or visual disabilities, but you can also. See here, people without disabilities. So for example, people using mobile phones, so you're on a smart, small screen. And maybe you have a different input type, like maybe you're trying to U use smart TV and put in through the remote control.

Something that you're looking for. We already talked about older people. There are also temporary disabilities, like a broken arm, or maybe you have lost your. Or situational limitations such as bright sunlight or maybe you're an environment where you can't turn up the volume or you have a slow internet connection.

And all of these are cases in which web accessibility is very beneficial. If I have convinced you now, what does web accessibility look like in practice? [00:03:00] It could mean providing enough color, contrast, providing transcripts or captions alternative text be open for different input methods.

Like not only mouse, but also the keyboard. Or assistive technology, it could mean providing compatibility with different kinds of platforms or things like explaining unfamiliar terms and not necessarily assuming that everybody has the same base knowledge. Speaking of unfamiliar terms in web accessibility, there are a couple of terms that get thrown around quite a lot.

And I just wanted to get them out of the way. The most common one, is the a 11 Y that means accessibility and the 11 stands for the 11 letters between the a and the Y. Then we have the w C a G. So those are the web content accessibility guidelines. That's a shared international standard with different levels of access.

we have the level, a double a and triple a, and these are basically the different [00:04:00] kinds of inclusivity and strictness. If you will, when it comes to accessibility and a is the least strict one and triple a is the strictest one. And these different levels are all created by the vet accessibility initiative.

W I. And they provide background information, documentation, further links on what you can do to make it more accessible. Now. Where can you start? Just a disclaimer. I will mention a couple of tools here. However, I have no affiliation with them and there are many other great tools. So if you have some favorites, I'd be delighted to learn about them.

Feel free to share them in the chat. Always very curious. And these are just, yeah, some personal preferences really. Let's have a look. So the first topic I wanna talk to you about is semantic HTML here. We're basically laying the foundation of all things, web accessibility. So it basically. Using thel elements for their given purpose.

So each element [00:05:00] has a specific meaning, right? Like the H one is the most important headline of the page. We're using an AAC for a link, a UL for an unordered list. And there are many more, I'm continuously being surprised of how many, and if we use them in the way that they are intended, we give the page structure rather than just presenting everyth.

And of course you could use CSS to style things and JavaScript to make things function that way that you want to, but there are many good reasons to use semantic HTML. the first one being the context that you provide, for example, for screen readers. So some of these elements come with basic default styles and inherent functionality, build in keyboard accessibility, for example.

So we have the button element, for example, which has a standard look that you of course can override if you wanted to. But it's clickable and it already has built in the fact that you can click it, that you can tap to it. That it's interactive when you're using the [00:06:00] keyboard. We also have, for example, different kinds of cursor styles when an element is disabled and all these things come out of the box, also it helps structure the code. It makes it easier to maintain and to read, and it helps with SEO and performance. What can you do? You can return to your code with semantics in mind. You can, for example, check if there's maybe a more precise element that you can use for your intended purpose.

So for example, check the difference between an article and an aside, you can check for alt attributes and make sure you include alternative. For important visuals select the correct input type also very helpful, especially for example, when you're on mobile, add labels, all these kinds of things.

Let me switch over to the browser and we can have a look at what that could look like. I have, for example, this small tool it's for Chrome, the web developer tool and I can select here my CSS tab [00:07:00] and turn off. All styles and it's not gonna be pretty, but you're gonna see what prior or what kind of layout you have on your page?

See, for example, so this is one of the most important headlines you see here. We have a list with all our links and these things are really important to check. When you wanna see if you have used semantic, HML, what does your site look like? To a screen reader for. I'm gonna turn the styles back on and what you can, of course also always check is in the developer tools, inspect the elements and check for example.

Okay. So this is an age one. That makes a lot of sense. Or is this is there a navigation element for example, used in the right place, are we including for the images alternative text? For example, in all of these things we can check here in the Def shows manually as well. Now, [00:08:00] another important topic is color contrast.

Cala and contrast are vital to accessibility is one of the most important things or one of the things that most often goes wrong. And basically we're having a look at the perceived luminance or brightness from the front, from. Foreground in the background. So we wanna make sure our content is perceivable and that's the contrast between the text and the background and the foreground.

We want it to be at least 4.5 to one to match level a double, a standard. And so there are also tools that you can use. To check for example, this color contrast checker I can use to select the background color and here we already have for the foreground color. And I have a contrast of 15.3.

So this means we have enough contrast between the background and the foreground, which is quite good.

There are also some tools that give bit more of a general overview to simulate the experience of disability. And this can be quite nice [00:09:00] to to figure out how different user groups experience your website. For example, you can choose the web disability SIM. And here I could go, for example, for a D total colored blindness, and I can see what the site looks like.

With colored blindness, I can find out more, or I can go for red, green color, yellow, blue colored lightness, for example, and this way I can play around with it a bit and see what different people might see on my page, even though this is not a hundred percent accurate, of course it gives the general idea and open up, opens up the The horizon little bit.

And the last topic I wanna talk about is keyboard accessibility. Many people with motor disability, for example, rely on the keyboard and also assistive technology depends highly on whether you can use a page with a keyboard blind users. For example, also use the keyboard for navigation. So of course, it's also very important for general user experience like being able to tap through everyth.[00:10:00]

and there are a couple of things that you can do. So you wanna make sure that all the elements are reachable with the keyboard that you cannot only tab there, but also tab away. So you don't trap your user. You wanna make sure the tab ordered. So the logical flow through the page actually makes sense.

and also to include all the functionality that you have with a mouse also be a keyboard. And and very common issues. Hover, for example, you have some functionality with a hover state that you then don't have with a keyboard and you wanna make sure everything is accessible that way. Semantic HTML will help you here.

It's also important to have enough color contrast for the focus states. So you see at every. Where you are with your keyboard. And yeah, you can, as a challenge, try to navigate your page with a keyboard and see what it's like. If you can get all the places that you wanna go, and there are also some tools.

I have here, the it's called tab ally. I can run that on my page [00:11:00] and you'll will see, visualize the tab order in which I would go through all the interactive elements on my page. And here we go. So you see, we have we're going from left to and from top to bottom, which is really good. It looks quite logical.

And so we this is how you can visualize what that would be like. In addition to manually testing, of course, That was already all from my side. Thank you so much for coming for listening to my talk, I hope it was helpful to you. And please keep in mind that in the case of web accessibility, 10% done is better than nothing.

It's an ongoing process and every small step counts. If you have any questions about web accessibility or anything else that I talked about, feel free to reach out and I would love to connect. Thank.
