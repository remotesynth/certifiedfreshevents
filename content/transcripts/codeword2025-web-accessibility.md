---
_build:
  list: false
  render: never
---

**Abbey Perini:** [00:00:00] Hey, I'm Abby, and let's talk about why I think web development strictly equals accessibility. This isn't your typical, why does accessibility matter talk? I know you've probably seen at least one because any conference that picks up an accessibility talk probably picks up a, why does accessibility matter talk?

And it wasn't long before I noticed that accessibility advocates were burnt out from screaming that accessibility is a right, not a privilege. And I took a different approach. By saying you are technically incorrect. If you are building websites without thinking about accessibility, I wanna be really clear.

You should care about who your website is excluding, [00:01:00] but even if you don't, you are not building for the web if you're not building with accessibility in mind. Accessibility is the core philosophy of the web, and by that I mean the core philosophy of the web is give the maximum number of people access to content on your website.

When we think of the good old days of the web, we fondly reminisce about how anyone could host some content and we could all go find it in its hideous glory. And we complained about the barriers to that content. Uh, internet speeds, loading pictures, one pixel at a time. Uh, somebody in the house having used the phone.

So you couldn't use the phone line to use the internet. Uh, your sibling hogging the computer so you couldn't use it. And a lack of accessibility guidelines because screen readers existed, but there weren't. Widely available guidelines on how to make sure that your website worked with screen readers, which is where the Worldwide Web Consortium or W three C came in.

They have many mission statements, but the first one is called Web for All, and within it it says one of W three C's. Primary goals [00:02:00] is to make the web's benefits available to all people, whatever their hardware, software, network, infrastructure, native language culture, geographical location, or physical or mental ability.

And this is baked into the tools that we use to build the web. JavaScript is forgiving, so it's a, there's a better chance that even if you make a mistake, all your content is still going to end up on the page. This link is to a video by Mia called, why is CSS So weird? And one of the answers is, CSS fails silently in a way that usually keeps your content displayed on the page.

Yeah, it's annoying when you can't really figure out what the error is. But it's, it makes it a lot easier to make sure that your content is still being displayed poorly written HT ML was still displayed, which is why you should probably use a validator and semantic, HTML has information built in so that more people can access the content within its tags.

By that, I mean [00:03:00] a diviv roll button doesn't have anything baked in, but a button element has things like a focus outline, a tab index, um, an accessible name for screen readers, and many other things that become functionality that you're removing. If you don't use the semantic element and don't build a replacement with your div roll equals button.

So the freedom to write bag code and the inconsistencies we complain about are features. They're not bugs, they're on purpose. From the technology to the philosophy, the web is based on the idea that anyone, anywhere, on any device, should be able to access your content. When we think of our jobs. As web developers, we know we gotta deal with error handling and I, implementing that responsive design and progressive enhancement.

And when we add in extra JavaScript, we need to think about how that affects performance. But we al also [00:04:00] need to think about how that JavaScript affects the accessibility tree and, uh, navigating with assistive technologies on your site. And it's our job to remember to add things like alt text. You are not developing for the web.

If you've di disabled default accessibility features without building a replacement, it's built in for a reason. You think the browsers can't agree on the HTML five spec or image types and somehow a focus outline just made it into all of them magically for no reason. So just remove it. Yeah, that's fine.

You are not building for the web if the accessibility tree your website generates isn't useful. For assistive technologies, the accessibility tree is generated from the dom. The DOM is the most fundamental aspect of a website. It's the most fundamental job of a web developer. If your dom doesn't make sense, your accessibility tree doesn't make sense.

Thus, make it [00:05:00] very difficult to navigate your website with assistive technologies. You are not developing for the web if accessibility testing isn't part of your release process. Use accessibility tools. You use es lent or prettier. You can add an accessibility linter that will remind you to add alt text.

When you use an image tag, it's your job to add tools to your tool chain that support your ability to write accessible code. Just like it's your job to add tools to your tool chain that support your ability to write code well, uh, spell checkers for making sure you don't make typos, things like that.

This will all make your own life easier. It'll cut down on the work you have to do. You won't have to remember to add that alt text to your image tag. If you have a tool to support you, you'll end up writing cleaner code. Because you're aim aiming to write things technically correct, and using things like Semantic HTML, you'll have [00:06:00] to use fewer elements and JavaScript to do the same thing.

This will provide graceful fallbacks. Alt text isn't just to generate a image description for non sided users. It's what shows when they link to your image breaks. So if your image breaks, you, users will still see what you meant to have in that space. It'll also be cheaper and easier. There's a concept in digital accessibility called Shift Left, where Left is design and right is release.

It's in production. It's so much more expensive and so much more difficult to fix something after release than it is if you start thinking about it as far left as possible. I mean, I feel like QA is in the middle, so like as long as QA is in there, we're at least. Halfway there, and this will, I'll help you avoid lawsuits.

Information should be accessible for those who need it. [00:07:00] An inaccessible website only loses you money, whether it's you or your employer. Um, the European Accessibility Act that recently came into play means that it's not just your employer that can be sued for an inaccessible website and. This isn't just lawsuits, it's also if your checkout cart doesn't work with a keyboard or a screen reader, then that's millions of users that can't check out you.

They can't buy your products. More importantly, it limits disabled people's independence and options. So your checkout cart is for underwear, and somebody just needs to buy underwear, and they're an adult and they wanna do that by themselves, but they get all the way to the end of the buying process and your cart doesn't work.

So they have to go ask. Someone else for help buying underwear. And that's a, that's a really light example. Accessibility doesn't end with code. Documentation and documentation in the plaintiff's language are part of it. [00:08:00] Uh, this link is to my friend Julia S's presentation about how documentation provides equity if everyone can access the same information and that information helps them get.

Onboarded the job that's setting them up to thrive instead of sink or swim. It's providing equity and yeah, web accessibility is a huge topic with many gray areas. I hear a lot of people frustrated that there's not a one size fits all solution, but there is no a hundred percent accessible. What makes something more accessible for one group of people may make it inaccessible for another group of people.

But the only way to tell if a website is accessible is to test it with people who have disabilities. Nothing for us, without us requirements change based on the user and the browser. But as long as you are learning and listening to those who are being excluded or [00:09:00] harmed and implementing what you know, then you are building your site.

Your site for everyone who uses websites. You are building for the web. I have so many resources. If you would like to start learning about web accessibility or writing with plain language or accessibility tools that you can use in your pipeline, and also some testing resources, and I maintain a notion database of coding resources.

When I find new accessibility resources, I add them there. You can filter by an accessibility tag, and there's also some ways to contact me as well as a QR code with a link to these slides. Thank you so much for having me.
