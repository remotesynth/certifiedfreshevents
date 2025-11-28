---
_build:
  list: false
  render: never
---

**Jason Pamental:** [00:00:00] I am gonna give you a fast talk about even faster web fonts, uh, talking about typographic magic and exploration of performance and expression with type. Um, I work on the design system at Chewy and I've been working with web fonts for about 15 years. Uh. Speaking about them all over the world and writing a book and, uh, generally carrying on about it way more than most people ever really want to hear.

Uh, so what can we do with this to overcome some of the nos that we hear, uh, all the time in engineering, uh, when it comes to wanting to add fonts to the site? So, um. Apart from design being important, uh, performance is the first visible aspect of design. Uh, so we want to make sure that we give browsers, uh, a good map and directions to go [00:01:00] and find stuff so we can get stuff on the page quickly.

Now, that's gonna be things like DNS, loading hints, uh, font optimization, fallback tuning, and we don't wanna forget about the basics, like image attributes and loading priority. So here's our page, and, uh, we've got. A little bit of stuff that we can take a look at here. We've got some product cards. We've got a few different photographs of Leo and Henry.

And as we, uh, start to take a look, we've got our, excuse me, our fonts from loading from Google, and, uh, we just pasted in a line of code and moved on. Now, uh, that looks maybe not too bad. Uh, largest Contentful paint, one point, uh, oh three 5.021 for cumulative layout shift. Now, uh, take a look at this waterfall down below.

You'll note, uh, this line down around line 11. Uh, that's the fonts loading. And until we get those fonts, the CSS first. So you can see that's 300 milliseconds, just to make the response for the CSS. And then we've [00:02:00] gotta load the font assets. So we're way out around a second before we can start really putting stuff on screen, uh, and having the design come to life.

So I think there's a lot of room for, for improvement, and so we wanna make sure we are prepared. Uh, so when I talk about pre, uh, we've got a few different things that we can do. Um, and uh, that's going to include pre connect, preload and prefetch. So. What do we mean by this? Pre connecting warms up the connection, makes it faster to load those resources and then just ask for the, uh, them when we need them.

So we're kind of warming up that, uh, that directions, uh, on the map. And then, uh, for things that we know we want to have before we start rendering the page, we'll load our. Basic CSS, um, and we're setting the fetch fetch priority to high as well. So we're doing everything we can to tell the browser that these are the most important assets to load before we can start processing and rendering the page.[00:03:00]

We can also do this with a font, uh, so we'll just get one of them. Uh, if you're using static fonts, I would load the load, the regular weight. Uh, in this case, we're loading a variable font, which I'll talk more about in a moment. Now we wanna do this sparingly, so that's why we don't load too many files.

But, uh, because this will block the rendering of the page. So keep, uh, keep note of that. You wanna make sure that you're doing this wisely. Um, and then for things that you don't need right away, but you know, you will need, you can use prefetch. Prefetch is sort of in the middle. It uses that warm connection to ask for a resource.

Um, but it'll get it when it can. Now as we're going about optimizing, uh, we wanna make sure we're doing this wisely. Uh, we're looking at, uh, starting with Google fonts, and then we're going to optimize them and load them ourselves. And then think about maybe loading variable fonts instead. And if you take a look at this waterfall, you can see that.

Uh, the circles up top, it stretches out the amount of time it takes to go get those [00:04:00] assets. Where if you look at the one below that tiny little circle right there is the loading of the first font file when we're self-hosting. And then the prefetch is the one that it goes and grabs later that it doesn't need right away.

Uh, we're also gonna make sure that we're using font display swap, and that means the browser can go ahead and render it in the fallback font right away and then switch it over to the web font once it loads. So most of the time you won't even really see that if we're using these other techniques, but we can also tune up our fallbacks.

So this is a neat little trick and I've got a, a link to a resource for you with this as well, uh, that we'll share later. And then, uh, you can. Have the fallback fonts more closely match the metrics of what you're putting on the screen. So there's less visible change Now, visible change, uh, we'll also, uh, get into that quite a bit, um, by the FI just, uh, using a variable font instead of a static one.

Noni Sands has four different [00:05:00] axes to play with. Um, I could explain everything on the screen here, but I know it's always better to show rather than tell. So we'll bring Leo and Henry back. And they'll give us a hand. So these, uh, different axes are built into the font file itself. They're not distortions, they're whatever the typeface designer decided to expose.

And so we can get things like width weight, uh, even X height. And of course, we're gonna bring Tristan and Tilly back here to illustrate slant. Now all of these are available just with CSS once we've loaded that file. So we can get way more expressive than the typical, uh, here's two or three weights of a font.

That's it. Uh, don't ask us for anything else. Okay. And then finally, we don't want to forget about optimizing image formats. We'll get web P when we can. We always wanna specify the width and height so that we can tell the browser how much space to preserve. Uh, the important thing there is the [00:06:00] aspect ratio.

It doesn't actually have to be exact to the size that you are displaying it. They could just be the original dimensions, so you always know what they are. And we're saying fetch priority high for the first asset. So we get that loaded quickly and then loading lazy for the one down at the bottom of the page.

'cause we know that's nowhere near the viewport just yet. Now where does this get us, uh, after we've done all of this? Well, uh, we've cut our largest Contentful paint almost in half. Uh, we've dramatically reduced our cumulative layout shift. Total blocking time is again, still zero. Uh, and when we look at the waterfall here, the fonts are loaded.

And we can start rendering content on the page over half a second sooner, uh, in the right fonts. So, uh, there's a tremendous improvement that we've made here without really doing anything other than reorder the way we load things. And now we can get way more expressive and have some fun. So we can play around, uh, with all kinds of things to be more [00:07:00] responsive.

On the small screen, uh, we're keeping the text a little bit tighter. Um, it's not quite as big. It's not quite as open, uh, which is fine. Um, because it's a small screen, we don't need that. It's still perfectly legible and you can fit a little bit more content on the screen this way. Um, we're using clamp to fluidly scale the font size.

We're using media queries to set the font width so it's a little narrower on the small screen, so we fit more content on a line, and then we're tailoring the font weight for regular and bold. So that works really well with this typeface and the design, and even tweaking it a little bit more when we get to dark mode.

So you can see what happens here. As we scale to the larger screen, we've opened up the line height. We've increased the font size just a little bit. It's more appropriate for the space that we have. And then again, with dark mode, we've lowered the weight a tiny little bit so that as you get into that. Uh, reverse contrast.

The text doesn't fatten up a little bit, um, and get a little bit less readable. Um, I've also used the new light dark [00:08:00] syntax to set this up too, which was pretty neat. It really cut down on the amount of CSS that I had to write. Now, since type is the close are words where, uh, we want to not stop at just getting things on screen, we really want to ramp up our expressiveness and take advantage of what CSS has to offer.

So we're gonna look at things like leveraging writing modes. Uh, sometimes we want a little bit of visual friction to slow people down, to take in a message. Um, we also want to balance our text a little bit, so again, we've got a new property, text wrap balance, add one line, and all of a sudden we can start to.

Even those things out and have a a few, a few fewer widows and orphans in our text without ever having to go back and resort to any hacks or workarounds. Uh, and even works in longer passages of text. Uh, it'll work with up to four lines in Chrome. Uh, safari is actually able to do the whole page. So again, one line of CSS, everything balances out.

Uh, it works perfectly in the context of [00:09:00] A CMS because you don't really have to add any special markup. It's really pretty great. And if you do wanna make sure that you're supporting, um, uh, older browsers that don't have full support for tech strap balance yet, you can actually use feature detection and then layer in hyphenation.

So that actually is something that's been supported for quite some time and you wouldn't have any concerns about putting that in. So, uh, we started with static fonts. We added a whole bunch more expressive flare. Uh, we ended up with something that is much more interesting, uh, and really engaging and still very sustainable.

And by the numbers. We've made incredible improvements in performance even when we have ended up. Adding a little bit to the download. So even with all of that that we've done, uh, we've made it way more interesting, way more sustainable, a lot more performant, and, uh, we're still able to carry on and do exactly what we want to do, uh, and have a much more engaging site.

So [00:10:00] have some fun and thank you very much. Slides and everything else will be available up, uh, at the link that you see here.

