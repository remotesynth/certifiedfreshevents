---
_build:
  list: false
  render: never
---

**Michael Trythall**  0:13  
Hi, everybody, this is why teams abandoned their CMS. My name is Michael Trythall. I'm the Director of Strategy at Lincoln Loop. We built custom content platforms, I wanted to do this talk, because over the past 20 years, I've worked with a whole bunch of different companies and organizations who are moving from one platform to another. And usually, they're pretty frustrated when that happens. At Lincoln loop, we call these three platforms, it's actually a pretty standard industry term. These three platforms are pretty risky projects. Again, they're moving from one stack to another. It could be WordPress, to sanity, or in our case, some older solution to something like wagtail, or Django, CMS, they're almost always paired with a redesign. So it's fresh thinking right out of the gate. There's content migration sometime that's that's that's moving from one format to another, it could be entirely different databases, or a way of thinking about the data, there's almost always an SEO hit, there's usually some content strategy changes, a lot of them are infrastructure changes as well, too. So I'm moving from a managed hosting solution to the cloud. And because it's an entirely new system, there's almost always training and it takes time for people to get caught up and be effective. So yeah, it's a pretty big risky thing. And I really wanted to understand why, you know, a company organization would do this instead of just iterating along the way. So let's get into it. The first big set of reasons that I found for a replatform were governance failures. Governance failures are pretty obvious. If you've ever come across a website that just seemed kind of like a mess. Usually what happens is, is somebody builds a system, they start off with best intentions, they might have some limited documentation, or they might have a really enthusiastic product owner, Product Manager. A lot of these projects lose that over time. Either they don't start out with something like a design system, or good documentation or workflow, or the person who was championing it left, and nobody picked up the mantle. If you've ever heard of technical debt, it's kind of like that, it's a little bit like once you've started having designed debt and content, debt, and SEO debt and technical debt, and then people kind of just come in and implement things one way over here and a different way over here, you end up with a mess, it's pretty easy to spot you'll see inconsistent quality in the end user experiences. In the CMS side, you'll see that the modeling doesn't really match with how the organization thinks. So think about it in terms of how they might build products or services or something like that, or do configuration, maybe the naming doesn't match up with the what they're using on calls, maybe the object names are totally off, or the workflow doesn't match how they think about it, you'll see technical failures. Sometimes this is the technical debt sort of rearing its head, maybe the IT department or the development group doesn't really like the CMS or want to work with the CMS, so they've just sort of become hands off, or there isn't somebody who's super experienced guiding the development and the deployment of the app. 

**Michael Trythall**  3:25  
A lot of times, you can see it in the metrics, the site just isn't performing well, organic scalability, or stability issues, or it's just not resonating with users that can be a content problem. That just is, is that somewhere along the line, the plan fell apart, and there wasn't somebody to fix it, or to get it back on the right path. And over time, this just adds up as a complete mess. And a lot of companies just want to start fresh. The second big set of reasons is missing capabilities. This is probably the one that you're going to hear about the most if you're working in a consultancy role or if you're in a big org, and you know, a new department head comes in. And essence it's that the CMS or the management system isn't doing what the team needs it to do. The one big thing that I hear a lot is you know, I want it to work just like Squarespace. Or I want it to work just like Elementor and WordPress, or I need this thing from this other this other system. In essence, it's just software changes. And not everything evolves with the trends. And as people experience better user experiences, they kind of have a higher expectation for all of their tools in general. So if folks can't do what they want to do, they start to get frustrated. I see this with media workflow again, and again, as the site grows and gets too many images or too many videos or documents tagging falls apart or they can't search the way that they want to search. You know, it could be any slew of just missing features. 

**Michael Trythall**  4:57  
Integration is another one that really comes into mind You know, everybody's familiar with how much JavaScript exists in the front end these days and how many trackers there are. A lot of these larger websites and CMS is have integrations all on the back end, and it gets to be kind of fragile. If you've ever worked with WordPress, you've probably seen plugin soup at some point in time. It happens. One of the biggest things I hear from a capability standpoint is the inability to expand or enhance the CMS without a developer, that's really painful for content managers having to always go to a developer just to get any simple change done. And this kind of goes back to governance a little bit where if things weren't thought about, or aren't improved regularly, you just end up with with technical debt that turns into I can't do my job. So missing capabilities, usually, those one were usually one of those sets of features where the technology just hasn't kept pace or the or the organization just haven't kept pace with the needs of the team. Lastly, there's business decisions. business decisions don't always make sense to somebody who's handling implementation. But there could be cost issues. This one's pretty common, you know, the CMS is too expensive to run, let's look at headless or static solution. It can be difficult to move key metrics, sometimes higher ups just aren't happy with the way things are going and they want to throw everything out. It's not uncommon to have scalability performance and security issues, especially with older technology, security issues, especially can be really scary. I've worked on sites that were hacked, and we threw the entire stack out because really wasn't even the technology's fault, it was a governance issue. Brand changes, a lot of times an organization will just go through a huge change and want to just kind of do things top to bottom, they feel like maybe the brand wants to have a new exciting direction, and they want to match the technology with technology changes, or another huge reason that you know, aren't really anybody's fault. They are just CTO comes in or, and wants to work with a certain stack, because that's what he or she knows, sometimes it's hard to hire people, you know, for a more obscure CMS or piece of technology. So it's about risk reduction. You know, technology changes aren't always bad. Sometimes it's just, this is what works best for the organization. 

**Michael Trythall**  7:26  
And then lastly, the big one that I see is we just want a fresh experience. It's just something that companies or folks have in their gut, it doesn't always have to be some some big business reason. It's just you know what, it's old tech, or we don't like this part about it, or we just want to kind of start fresh with a whole new idea. And you know, that's, that's fine, too. Okay, thus far, it can seem like I've just given you a whole bunch of reasons why somebody ends up changing CMS. But if you understand the major categories, you can understand how to tackle this sort of project in the future. And the case of a governance failure, for example, maybe in the next system, instead of letting everybody just figure things out as they go, you assign someone who's responsible, maybe there's some documentation that you do up front, maybe there is a design system that gets built, and you get everybody on the same page. And you you build everything with this with consensus. In the case of missing capabilities, it could just be that the platform just doesn't have what you need. Or maybe it does, has anybody even done the research, maybe there's a plug in that that could get dropped in that gets you from point A to point B. Sometimes that can be all an organization needs to figure out the digital strategy, or you know, maybe not everybody's being heard on the team. And no one's built the capability because nobody asked for it until now. In the case of the business decisions, that can help you figure out the metrics that you have to hit or that could be $1 amount per month for hosting. Or it could be defining what a fresh experience really means. Those things can really turn a project around if they're defined upfront. All right, that's it for me. I hope I gave you a few things to think about next time you're doing a redesign or replatform are moving from one system to another just in general. This is a really complex topic if you'd like to talk about it more and then try it on the web. Or you can email me at Michael at Lincoln live.com. Thanks for your time and good luck out there.

Transcribed by https://otter.ai