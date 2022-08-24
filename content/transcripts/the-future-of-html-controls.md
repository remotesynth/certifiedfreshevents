---
_build:
  list: false
  render: never
---

**Stephanie Stimac:** [00:00:00] All right. Hello everyone. I'm super excited to be here today doing another virtual talk. Again, my name is Stephanie. And I'm a program manager on the Microsoft edge developer experiences team. And I am super excited to talk to you today about HTML form controls which it turns out are a massive pain point for developers, even though there's some of the most commonly used pieces of UI.

So today I'm gonna give a brief overview of the past and present of form control. Talk about how we got to where we are today. The current problems we have with controls and how browsers and standards groups are proposing, we solve these pain points for developers. So let's dive into a little bit of history.

So in 1995 the HTML two point specification became the first official [00:01:00] specification that was ratified by w three. And with that specification that came our first set of standardized form controls, but the specification didn't standardize form parts or how they were constructed. It only standardized the method to enter data into an HTML document.

And for that data to be used to perform in action, such as logging into a website. So it's standardized what the forms were supposed to do, but not how they're built. so we have some standardized HTML building blocks in 1995. We can build some websites, but we're missing something at this time.

We're lacking a standardized styling language and so CSS wasn't supported by HTML until HTML three got two. Oh, in 1997. And it wasn't even until 1999, that browsers really embraced and supported CSS with the 4.01 specification. [00:02:00] So if we go back to 1995 we have form controls, but we have no styling language to style them.

So browsers had to rely on the operating system to render and style those form controls, and that sort of led to a technical dependency on the operating system for styling and rendering. Later, even with those early versions of CS. There were parts of the form controls that CSS just wasn't able to access for developers to style.

But the other side of this is that a browser vendor, browser vendors were also extremely reluctant to make controls scalable because they were a reflection of the operating systems, visual appearance. And so the idea that developers would want to change that kind of UI and make them look different.

Wasn't really like a concept. And so when browser vendors finally accepted that developers wanted to be able to change the appearance of controls. We were given the appearance property, but this only [00:03:00] controls the system level styling and developers didn't actually use it for its intended purpose.

And it wasn't even actually implemented as it was designed in the specification by the different browser. and that led to so many different issues. Lots of like partial support and interoperability issues and internet Explorer, which at one point was the browser with the most dominant market share, didn't even support it.

So it just made things, a mess with styling controls. And so if we jump forward now, if we jump forward 26 years That's 26 years of the web evolving that's led us to now. And the web has definitely improved since then. And form controls have improved since then, but in those 26 years, we haven't really done anything to make native form controls, easier to work with.

Even though there have been improvements and [00:04:00] again, we've added some new one. So if we look at the state of styling current controls today, I've got them bucketed out into three categories. And most of the controls that we really want more control over styling are in our third bucket, which I call the good night and good luck bucket because of how hard it is to style these.

If you can even style them at all with just CS. And then additionally, on top of that with our native controls, we have we have browser inconsistencies in the way they look. So as someone who comes from a background in design, like before I knew about the web platform, it was so hard to explain why my form controls look differently in different browsers to my clients when I was building a website.

And that was so frustrating. And this, again, boils down to that issue. We discussed initially. That form controls and their parts weren't standardized. So browsers en so browser engineers built and [00:05:00] styled these differently. And this is just looking at some of the top browsers. This isn't even all the browsers out there on the market.

And then additionally, on top of P CSS access and those browser inconsistencies, we can't actually extend the functionality of a native control. This tweet from Scott gel, I think sums things up perfectly. You have one problem. You want icons in your select menu options. You decide to make a custom select menu.

You now have at least 75 problems. And when you rebuild a control from scratch instead of using the native control, you don't get all the good stuff that's already baked in by the platform like accessibility and security and even performance. And so you have to add all that back in as a developer, and then you have to test all of that.

And it's a bad developer experience and it's time consuming, but it's necessary when you can't [00:06:00] extend your controls. That the way you need to a great example of this is the video element where a developer either gets all of the controls or none of them simply by adding or removing the controls attribute.

You can. Customize that at all, it's either all or nothing. And so when we want our HTML controls to look like this or even this it's no wonder that developers have just reverted to building forms from scratch. And so on the browser side we decided to take a step back and ask some questions because we wanted to make sure that this was an area to go invest in.

We knew it was a pain point for developers, but our better native form control was something that developers really want. And the answer was very overwhelmingly. Yes. Developers want. [00:07:00] Better form controls. They're a headache to work with as they are right now. And so my colleague, Greg Whitworth at the time he ran an initial survey on Twitter to start to dive deep into this space.

And he had a variety of respondents, about 1400 from different roles from full stack engineers to designers with varying degrees of experience working on the web. And one of the questions that he asked was which form controls did those survey respondents recreate the most? And these were the top 10 select was the most recreated with 10.7% saying select followed closely by checkbox and then date radio file progress, button dialogue, text, area, and text.

And then he wanted to know the reasons why controls are being rebuilt. And over a third said it was because they couldn't change the [00:08:00] appearance sufficiently. Another third just wanted to add functionality. So they wanted to extend their control. and then just under a third said again, because of browser inconsistencies, which we can probably assume has to do with appearance.

So if we group that in with that first third of developers who couldn't change the appearance sufficiently, that's two thirds of developers, recreating form controls, purely for appearance reasons. That's a lot of developer time. . And then Greg followed up with an amended survey with JS conf EU attendees in 2019.

And he asked two additional questions he asked, which form control gives you the most frustration and why. And select clearly still stole the show here with nearly 50% of respondents saying select the second re form control barely at [00:09:00] 17%. . And so these were some of the verbatims that Greg got when respondents answered that Y question.

And so one said select requires hacky tricks. Can't style, the option elements at all, to the extent we need to. But the amount of work it takes to implement an accessible alternative with complete feature parity is massive. And I can just feel the pain in this response here. So this sort of prompted me to do my own research.

I wanted to know how painful is it for developers to recreate a select element. And so I asked. Front end, I asked design and developer Twitter to please fill in the blank. I would rather blank than attempt to style a native select element. And it turns out y'all really do not select [00:10:00] at all.

I had over 250 responses to this tweet and all of the responses were very painful things. So I'll just highlight a couple of my favorites here. I would rather call each person attempting to use the form and ask them what option they would like. I'd rather build the entire site in flash. I'd rather support I E six.

I'd rather chew on glass. I'd rather boil my toes in lava. And then this is still my favorite. Even after two years maybe a bit melodramatic, but heat up a rusty old fork with a few times snapped off and broke it. And broken. And then with both arms thrust it into my inner thigh, then attempt to style a native select menu.

So clearly this is a pain point for developers. Let's talk about the future and what's coming and what's actually in progress right now to make controls better.[00:11:00] And I'm excited to say that the future is so shiny and exciting. There's been so much work happening on the browser side and in standards groups to improve controls with the help of the web development community.

So first off Microsoft edge, we've been leading the controls work and collaborating closely with Chrome to make updates to the native controls in the chromium project. So our first focus about a year and a half ago was improving the style of native controls in all the chromium browser. And bringing accessibility improvements to those controls.

And so we brought over some of the accessibility work from the edge HTML engine or into chromium when we made that switch. And then with the new styles the team landed on a much more modern and neutral look. And the hope is here that this lessens the time spent recreating form controls purely for styling purposes.

[00:12:00] While we work on the standards work to bring better control styling to browsers. And but that's not all we've done to native controls and chromium. This is the latest update we have for native controls and chromium. I'm excited to share dark mode for form controls in the chromium browser.

And so with this when a web developer expresses support for dark mode and the user has that mode enabled our user agent style sheet is gonna auto dark inform controls out of the box. Like you see here on this slide and like normal. Any styles that are added by a web developer or a user will override the user agent style.

So if you've made your text input background, like bright yellow you'll need to update that color yourself in dark mode using the preferred color scheme media query. But to render all document form controls in dark mode you, all you need is a man data tag declaration [00:13:00] to let the browser know which color modes the website supports.

And so our declaration here just tells the browser that it's safe to render controls as light or dark. And this is available in Microsoft edge on the desktop in version 87 Chrome for Android version 91 and future versions of Microsoft edge for Android. And you can find out more information about that and how to implement it.

At this URL here at https://aka.ms/dark-controls. And next up, I wanna talk about HTML because HTML it's not done. It's a living language. And we're looking at new native components and a lot of these proposals are coming out of our research and work that has started with rebuilding the select element.

And so while looking at how we wanted to build a new version of select the team identified this need for a universal popup element. And so this [00:14:00] proposed popup element is a transient user interface that's displayed on top of all other web UI. And these are things like action menus, form element suggestions, content pickers, and teaching UI.

And so the key differentiator here for a popup element from other aesthetically similar elements is something we call light dismissed behavior. And so light dismissed behavior means that the popup will automatically be hidden when either the user hits the escape key. The layout of the popup or it's anchor element has changed or focus moves outside of the pop book and its anchor element.

If applic. And so a generalized definition of this light dismissed behavior is currently being discussed in the open UI standards group, which I'll talk about in a little bit. And so examples of elements that don't have this light dismissed behavior are things like alerts, toasts, custom tool tips, and other miscellaneous persistent popover.[00:15:00]

And so let's take just a quick look at a basic example for the popup. So here we have a button element and a popup element, and to tie the button to the popup, we have our button ID equals menu button, and we've used an anchor attribute and set that value to the button ID of menu button. And currently right now, popup menus are not visible until show is called by the author.

So we do need some script.

There are a lot more details on popup in the popup explainer. So if you're interested in reading through that go ahead and check out that link@aka.ms. Slash popup dash explainer. And so there's also some other exciting controls and controls related work in progress. So we have a demo of tabs.

This is Again, an initial demo of what [00:16:00] tabs could look like in the browser. And so this is all experimental and would require proposing some new elements. But this is getting the work started to figure out if this would meet developers needs. So if you're interested in this demo and providing some feedback on that, you can go to AKA Ms.

Slash tabs demo. Another thing that we're working on is something called anchored positioning. And this is a proposal to allow the anchoring or pinning of a top layer UI, like the popup. We see here to a specific point on another element. And so how the top layer UI is positioned with respect to its anchor element is further influenced or constrained by the edges of the layout's viewpoint.

So in our example here we have a menu whose top left point is anchored to the bottom left point on a menu button. And when there's insufficient space in the view, port below the button, the popup menu would be rendered [00:17:00] above the menu instead. And so if you're interested in reading that proposal, you can go to aka.ms.

Slash anchor dash P O S. I know let's talk about fixing the current problems with controls. This isn't stuff that I'm most excited about. So last year, August, 2020 an explainer with proposed solutions for how we're going to approach enabling customization of controls. UI was released by the Chrome edge and open UI teams.

So the proposal for form controls is using something called the NBC design pattern where the form control is made up of three distinct parts, a model, a view, and a controller. And now the goals that this proposal set out to accomplish revolve around enabling as mu as much customization [00:18:00] as possible while reducing the overhead for the developer.

And so we're proposing three different solutions that offer a range of flexibility and customization, depending on what the developer wants. So in our first solution here in that brief history of controls that I talked about the root of the issue is that forum controls and their parts are not standardized.

And therefore they're not reachable by developers. and so open UI is the initiative under the Y C G, which is the web incubator community group to standardize form controls and components. The open UI team, which is open to anyone who is interested in participating is focused on researching and documenting design systems and frameworks that are out there today.

They're identifying patterns that are in naming and different use cases, and they're using those patterns to establish cow paths for [00:19:00] standards and eventually browsers when it comes to control. . And because select was the biggest pain point for developers in that survey. It was the first form control that open UI started to research.

And there's actually an editor's draft proposal for select in open UI. If you wanna go check that out. And so when I talk about standardizing control anatomy, I'll use select here as an example of what that looks like. So the anatomy of a select could be defined as consisting of one button part containing one selected value part and one popup list box part that contains zero to N option parts.

And then after defining that anatomy, we'd go on to define the expected behavior of a select what happens when you click it. And and so this standardized anatomy will allow the styling of native parts using [00:20:00] pseudo classes and the part pseudo element. So a developer will be able to change the color of a select button in an interoperable manner without replacing any of the HTML.

So in our example here we have our CSS class called styled select and we're utilizing the part pseudo element to target the button to change the background. Now notice here, the HTML code is just the code of a select today. So you wouldn't have to actually rewrite any of the form control. We're just exposing the parts of a select and giving devs access to that styling via pseudo elements and classes.

And additionally obviously other states will be standardized. So for example, the open state here for select. Would be standardized. Now our second proposal is our second proposal enables more powerful customization of controls and con [00:21:00] and content within the controls. And this is what something called named slots.

so a set of slot names will correspond to each piece of the controller's view that a developer might want to replace with their own content. So in the case of select, we would have slot equals button and slot equals list box. And that will indicate to the platform that custom content will be slotted in by the developer.

In addition to these developers would add part equals button and part equals list box, which I'll go into briefly in a moment about why that's needed. Okay. But if you've ever wanted to add like a country flag or some other visual content into your list box for select, which is just the dropdown this will allow you to do that without having to rewrite the whole control from scratch.

And slots also provide the flexibility to customize only certain parts of the control. So [00:22:00] let's take input type equals a range. As an example a developer could provide a slot and a part for the moveable thumb and the UI for the track would automatically fall back to the default provided by the platform.

And so you might be asking why do I have to provide both a. And a slot name. And so by adding part to your code, this is gonna signal to the bug platform that it has code to wire up to your control. And the platform will apply native event handlers where applicable to handle user input, which means developers can make UI tweaks without having to write tons of JavaScript.

And the platform will also apply the correct accessibility, semantics to your controls as well when you apply those parts. And so this is just letting the platform do what it was meant to do. And applying that accessibility for you out of the box, all you have to do as a developer is [00:23:00] add your parts. And then our final solution here is the shadow do replacement.

Currently attached shadow throws an exception. You can't call it on any form control currently. And so we're proposing that this restriction be removed when enabling customization for a given control type and calling attached shadow will result in the default user agent shadow, do being swapped out with a new shadow route that will be populated with content provided by the developer to create better controls.

Developers will still be required to label the core parts of their shadow do using the part attribute. Otherwise the shadow Dom will not be rendered. The platform just was not gonna make an attempt to guess at the correct behavior and it won't render an incomplete control implementation. So just add your parts.

If you're interested in the full explainer for that, you can head to aka.ms. Slash [00:24:00] controls dash explainer. There's a lot more technical detail. And that explainer that I don't have time to go into today. So go ahead and give that a read. And finally We need you as developers. So we need your feedback and your opinions on this work.

Because one, we wanna ensure that we're building what you need and it meets your needs. And so there are multiple ways you can get involved. So you can either contribute to the form control investigations on open UI. Again there's a discord and we have weekly meetings. Tell browser vendors what it is you need from your form controls.

Especially if there's a form control that doesn't exist that you think would make a great native control. And then additionally provide feedback on the explainers. I feel every couple months we have a new explainer coming out with some proposed, either a new HTML element or CSS. And so that's just another [00:25:00] avenue for you to provide feedback on that when those come out, because we want, again, we want your opinions on this.

And then you can go ahead and follow these folks. Craig Whitworth is he's now at Salesforce, but he runs the open UI working group. Stubborn is Nicole Sullivan. She's the Google Chrome PM working on this and I'm CI on the Microsoft edge team. And I'm here to help Greg and my dev team on the edge team who we're building controls.

You can always ping me. On Twitter with your questions because we're here to listen because these improvements they're for you. Thank you.

Thank

**Suze Shardlow:** you, Stephanie, everyone's going absolutely wild for these new feature. the the most popular one by far is dark mode as you probably predict. But yeah, everyone's really excited to get their hands on this and start playing with it. So we do have a couple [00:26:00] of questions and I really wanna encourage folks to ask any questions that you've got.

We have got plenty of time. We're scheduled to be here until on the hour, whatever time that means for you. For me, that's 7:00 PM. For some of you that's gonna be 11:00 AM or 2:00 PM, but yes. So please post your questions and we will put them to Stephanie. So the first question is you spoke about parts.

Do you think all browser vendors will adopt parts?

**Stephanie Stimac:** That's the goal? So I know that there, so even though this stuff is happening in just in edge, and it seems like just edge and Chrome, leading this work, but this work is actually being we're collaborating very closely with the open UI working group and they've actually gone into w three C standards meetings with the other browser vendors to talk about this stuff and try and figure out if this is the right direction and get agreement on that, I can't speak for Firefox and apple.

[00:27:00] But for the most part there's been. a lot of positive reception to this approach.

**Suze Shardlow:** Cool. Yeah, somebody has actually posted in the chat that they saw in. Can I use.com that part attributes starting to be supported by some browser of vendors? Yeah, that's definitely good news. So the next question is, would anchor positioning that you spoke about allow elements to pop outside of eye frames?

**Stephanie Stimac:** I'd have to go back and look at the explainer. I believe. There is a restriction on iframes due to security issues. But I go check that explainer to double check my answer.

**Suze Shardlow:** no worries. Yeah. I did post all the links in the chat for folks. If anyone wants to go check that out, that is the link is in the chat.

John would like to know what the best way to tell the various browser vendors. what we need from our form controls and other web platform requests.

**Stephanie Stimac:** So some of, so I [00:28:00] highlighted a couple folks who are well, so Nicole Sullivan is on the Google team. If you tweet us that's one way to get feedback a number of the different browser vendors, all have something called a platform status page.

And you can, some of them have that on GitHub. And so you could go file issues on their GitHub for platform status or even filing bugs. I think in some cases like, go file a bug in chromium. I can't think of the link for that off the top of my head, but that's another approach. So Twitter, or even if you have even if you just write a blog post about it, if there's something that doesn't exist in the browser you can write a blog post and share that with some folks on Twitter.

Like I'm just full disclosure. I'm always on Twitter. So if you were like tweeting me something about something you need in the browser I. Very [00:29:00] receptive to that. And also I also run an initiative called the web we want, so you can go to web, we want.fyi. And that's another way to give feedback on missing features, not just for controls, but the web platform as a whole.

And we check those submissions weekly. And that is a. Browser effort. So I work with folks on the Chrome team and Firefox and Agalia and Samsung internet to triage all those things that come in on the web we want as well. Cool.

**Suze Shardlow:** Okay. Thank you for that. Going back to parts somebody's asking, do other vendors have alternative solutions, like parts that you know

**Stephanie Stimac:** of?

Not that I know of, no.

**Suze Shardlow:** Okay. No worries. And Barry's curious to know if there's any work being done on easily integrated search or autocomplete via select, including dynamic load options.

**Stephanie Stimac:** Off the top of my head. I, [00:30:00] no but select is still. I will say, so we have a select editor's draft, but select is still something that is being heavily discussed often in those open UI groups.

And actually another way to give feedback about things you want in your controls is open UI. They have a GitHub, you can go file an issue asking about those sorts of things and someone will respond to you.

**Suze Shardlow:** Cool. Okay. We're nearly at the end of the question. So I just wanna encourage folks again, if you've got any questions please do post them in the chat for those of you folks who did pop in a little bit late, see missed the beginning, the recording will be available at the same URL you're at now.

So if you press refresh, as soon as we finish, then you can recap all the parts of Stephanie's talk that you that you missed the first time round. We won't recap that now, but if you need to do that, please flex refresh at [00:31:00] the end and you'll get the replay. Another question from Barry. So Barry did ask just now about integrating search and also complete barriers.

Also wants to know if there's any possible in enhancements to date or in integrated date, time control.

**Stephanie Stimac:** Not, no, not at the moment. But that is another control. We'll be looked at an open

**Suze Shardlow:** UI. Just so many things like you say is these things are old. A lot of them have never been there really changed.

**Stephanie Stimac:** Yeah. And even just with select, like having sat in on quite a few of these open UI meetings, like the amount of detail into just like a single behavior. Of what a select should do will take the full 45 minutes. And so it's like it's quite complex sometimes just even the smallest thing that we may think is like a simple interaction is actually again, we wanna make sure that we build it the way developers want.

And [00:32:00] so it takes quite a bit of discussion from all different folks. Yeah.

**Suze Shardlow:** Like I can imagine as well, because you need to make sure things are inclusive and accessible to. So you could be designing for somebody that's completely abled. Who said, I want this and they haven't thought about folks that can't access it the same way that they can.

So you definitely need to look at all of that stuff as well, which is why nothing's ever a quick thing to implement. Jane, Jay tho wants to know a number of these initiatives seem to be in their infancy. It was mentioned that aging premium is not necessarily imperative with apple or five.

do you think that this will lead to another break in browser support where developers will need to start coding for particular browsers? I think that's a really good

**Stephanie Stimac:** question, actually. I, so I think so with some of the control stuff, I think what initially is going to happen is some of these features will be behind the flag.

So it won't be on by default, but [00:33:00] they'll be available for developers to start playing with. And that already sort, that happens with things in Firefox as well, with things like subgrid for click in CSS. And but the I don't think you'll have to start just coding for specific browsers. That's not the goal.

Like we don't want people to have to do that. And If I am remembering correctly as well with these new controls that we wanna implement where we also don't want to break the old version of controls. And so we don't wanna update, how a select functions and then break a bunch of sites that maybe aren't maintained very well.

And so there will be some sort of fallback method to ensure that when these new capabilities. Come to browsers. We don't just break all of the web

**Suze Shardlow:** yeah, you'll be famous if you do that. Yeah. So that's another reason why, when you're sitting in these meetings [00:34:00] deciding, what you're gonna implement and how you're gonna do it, it's all about how this is gonna fit in and be rolled out as well.

Isn't it? It's not just about how it's gonna look in the end. Yeah. Because you don't move from one state to the other. There's gonna be some phases in.

**Stephanie Stimac:** Yeah. Cool. A lot of that is again again, I know it seems like edge and Chrome are leading this work, but they lots, a lot of the things that I've discussed, like anchor positioning and pop up that those are things.

Those are conversations we have in the open UI group which is comprised of edge and Chrome. But those conversations then get moved to the standards groups. So with like W3C working groups and they're discussed by people, not just working in browsers, but just on the web as a whole as well.

**Suze Shardlow:** Yeah. Yeah.

Definitely a lot of due diligence going on. Yeah.

**Stephanie Stimac:** Yeah.

**Suze Shardlow:** Somebody did miss a bit where you talked about checkbox and radio inputs, and I have to be honest, I can't remember what you said about this either. So they [00:35:00] were wondering if there's any proposed changes to checkbox or radio inputs.

**Stephanie Stimac:** I don't think I discussed those.

They're I think those are lower on the list and there may be I'm trying to recall. I can't think of any work that's been done because Select's been the focus one, but I believe there are discussions happening in some of the open UI issues on GitHub about checkbox and radio. Okay.

**Suze Shardlow:** Cool. And yeah, so we've only got one more question left.

So again, I would encourage folks. If you've got any questions, please do get them in. This is your last chance. We do have plenty of time, but if you don't ask them now, then we are going forever. Everything's not coming back. Maybe in the future. but not any time soon. Anyways. The final question that I've got for the moment, unless anyone else gets in there before we say goodbye, it is the million dollar question.

When do you think these changes could be in

**Stephanie Stimac:** place? I don't have an [00:36:00] answer for this question. It's really hard to answer because there are so many different moving parts. But I believe there's at least a prototype coming for select that will be behind a flag, relatively soonish in the, in web standards time.

So I don't have a definitive answer, but if you stay tuned in the open UI group, there's all sorts of information that gets shared

**Suze Shardlow:** there. Good tip. Yeah, that's a good place to stay. If you wanna stay ahead of the curve and find out things, but so I guess the answer to that is it's not gonna be next week, but it might be before the end of COVID, but we dunno when that's going away.

So I think that's probably a safe way. We leave

**Stephanie Stimac:** that. Yeah.

**Suze Shardlow:** Yeah, that is the the end of the question. So thanks once again, Stephanie, for coming and sharing all of that with us. Everyone's so excited about this.

**Stephanie Stimac:** Excellent.

**Suze Shardlow:** and it's really nice that you are open to folks contacting you on Twitter as well that you're ever present on there.

I know that's a [00:37:00] full time job in itself, isn't it? Yes, it is. cool. Yeah, please do check out those resources that Stephanie posted and. Feel free to reach out to folks on Twitter. If you want to to give your feedback or request anything, or just give your point of view et cetera. But yeah.

Thanks again, Stephanie.

**Stephanie Stimac:** Yeah.
