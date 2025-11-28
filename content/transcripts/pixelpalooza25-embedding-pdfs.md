---
_build:
  list: false
  render: never
---

**Raymond Camden:** [00:00:00] Hi, welcome to embedding PDFs, because as we know at the end of the world when everything is gone, there'll still be a lot of bugs. And probably still quite a few PDFs. I am Raymond Camden. Uh, you could find me@raymondcamden.com. You could email me. You could find me on Blue Sky at Macon. You could definitely reach out.

I am a developer evangelist who has spent way too many years. Working with PDFs. Thankfully, my new job has me outside the PDF world, but I still kind of care about PDFs until they'll talk about them from time to time. So why, why, why do we care about embedding PDFs? Well, browsers do a great job actually, uh, rendering PDFs.

You really don't need to [00:01:00] download Acrobat anymore or use any other. Operating system viewer when the browser can actually do a great job of showing you, uh, any PDF. However, it is a full body takeover experience, so, uh, your existing website. Goes away. The PDF takes the entire screen and you lose any context.

You lose any ability to, uh, show relevant content around the PDF and so forth. You basically lose everything. So what can we do to get around that option One. No JavaScript. Now. I know. I know, I know. I know what you're saying right now. Like that's That's wrong, right? You have to use JavaScript. No, you don't because we're gonna use an OG example in Iframe, which was first added way back in 19 19 95, along with Dua Lipa, Megan Thee Stallion, and Java.

Two of those things are really cool. One, [00:02:00] eh, not quite as much. It's a supported everywhere. Even safari. Like, yes, really, like even safari. Uh, it's again like ancient web technology that just plain works. So you take your HTML and then you add an iframe tag to it. It's a little bit off screen here, but basically give it a source.

You can give it a width and height. You can also use CSS. It also supports loading equals lazy, which is great, especially when we're talking about PDFs, which could be a little bit heavier, uh, such that this I frame won't actually load until it's in the view port. So. Because I'm using a web-based framework to render this presentation, I can actually embed, uh, the PDF in there and I get, you know, whatever controls my browser does for rendering PDFs, I get it within the iframe.

And, um, instead and. Yeah, this is a little bit kind of hard to read. If I get rid of the thumbnails and [00:03:00] increase the resolution, it gets better. It's not really a great source, PDF either, but you know, I could make this look a little bit nicer, but it was all of about three or so seconds to add into my HCML, and obviously this is a web-based framework again, so this is all in context and the PDF is just embedded in there.

Now you do get a little bit of control in terms of changing the experience a little bit. This is all done via URL hashes things like, you know, load a particular page or turn off the toolbar if you're really interested. There is a PDF from way back in 2007 that talks about all the different parameters, uh, that you could add to change the experience.

Take a ginormous grain of salt with this. In my experience, many of them did not work. Page seemed to work all over the place. Toolbar seemed to work [00:04:00] in chromium based, um, browsers, but like not safari. You'll see what happens essentially when you add it. So here's that exact same PDF embed that I showed before.

All I've vetted now is page equals six to jump to the end of this particular PDF, and I turned off the toolbar. Uh, so it's a bit nicer experience and what you use will depend on your website, the PDF document, et cetera, whatever makes sense in that regards. Uh, but you do have options to do that. Now what if you really, really want to use JavaScript?

Yes. You know, like you have to, right? Like you can't go on the web without using JavaScript. So what are your options out there? Well, there are a couple different options that you can pay for. I've worked for some of these companies. Or you can use a free open source JavaScript library you could [00:05:00] find@embedpdf.com.

And it is a fairly lightweight system. You give a diviv or you know, you put a diviv, uh, on your webpage that you could set height, width, et cetera. Uh, and then you use like. Five lines of JavaScript. You import the library and then you initialize it by pointing it back to that diviv and telling it the source.

And I'm like, that is it. So I have example, an example I'll show here. This is regular HTML with the JavaScript library in there and it just works. And if we look at that page source. We can see. Yeah, I just dropped in my div. I gave it a size and so forth and added my JavaScript. So you do have that. Uh, it is a, a pretty good system.

I will say, uh, library, I will say. Documentation is lacking quite a bit. There's a [00:06:00] lot of features they talk about that they don't quite actually show you how to use. Uh, I am talking with the maintainer of that project and they have promised me more docs are coming, something that I want to cover on my blog when that happens.

Uh, but you can use it and if you're willing to kind of dig and play around with it, uh, you can do more with it. So I hope this was interesting. I appreciate your attention. Thank you. And let me know if you have any questions.
