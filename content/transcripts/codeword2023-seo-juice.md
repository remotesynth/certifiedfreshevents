---
_build:
  list: false
  render: never
---

**Nancy Du**  0:13  
I am personally really excited to talk about this topic since for the last couple of years at wrangled my main focus has been around like anything headless CMS related. So SEO always comes up as kind of a gnarly topic that everybody wants to do better at, but not really sure how to approach. So beyond kind of the catchy, fun title, we're gonna be really talking about what your SEO strategy should be, especially in sort of headless architecture contexts. So let's jump right in. So before we get deep into the actual tips and tricks, you can use just a quick refresher on what is SEO and why it's so important. So I'm sure many of you already know, SEO stands for search engine optimization. And it's really the art and science of getting your pages to rank higher in search engines like Google. And as you can imagine, that can be very, very important, especially in this internet dominant age that we're in. So typically, with better SEO, you're more likely to attract more organic traffic, which tends to be very, the bulk of the traffic that most websites get SEO compared to other types of marketing tactics, like paid ads, tends to be relatively cheap to implement, and it tends to scale very well. So you don't have to continuously pay into paid ads every single week. It's something that once you kind of set up some good practices, it scales very well, long term. What research shows too, is that click through rates are actually higher for organic searches than pay dots, even though pay dots on Google Search tends to be the first thing that shows up. research tends to shows that people actually particularly choose to scroll down and click on the first non paid ads. One thing I think people don't often kind of realize when they're first thinking about an SEO strategy and improving SEO is that oftentimes, when you improve your SEO, you also get a lot of other benefits, like improved user experience. And that's typically because there's a lot of overlap between what helps you rank higher from an SEO perspective, and what good user experiences so things like faster site speed, or better accessibility, and just generally no broken links or pages? So what are the actually the different factors that could impact your SEO? And this one is not sort of a straight cut answer, there isn't like this one factor or a few things that you can do. There's kind of four major groups that you can focus on to optimize for better SEO. So the first type is your on page SEO. So that's optimizing for the content that actually lives on your page, keywords that you're trying to rank higher on. And that's all about, you know, how you curate your content. The second one is about your link building. So that's how you're curating your backlinks. So are you including enough internal links or external links on any one of your pages. And the third, and it tends to be actually one of the most important thing is actually around content marketing, and how and what kind of content you're actually putting on your site. So this is creating relevant and searchable content, that the type of user that you're trying to attract is likely to search for. So this can come in forms, like blogs, case studies, how to guides. And this is really what a lot of, you know, your content marketers are going to be focusing on. The last one, which is also we're going to spend most of this talk talking about is your target technical architecture. And this is about optimizing for your technical setup, to enable all of your content, ensuring that you're not getting penalized for your SEO. So before we jump in, just kind of a quick reminder on how a headless architecture can actually improve SEO. We hear this all the time. You know, a lot of clients that I work with specifically wanted to transition into a headless architecture because they've heard about all of the great IC O and performance benefits you can get for going headless. And I would say that that's only part of the truth. It's not like once you go headless, there's all these kind of improvements that come out of the box. What headless architecture really provides for you is the freedom To implement the right strategy for your business, which is really powerful, but very daunting at the same time, because knowing what to actually implement can be very critical and whether you succeed, or you fail on actually improving your SEO. So what are the actual factors that we're going to talk about that impacts technical, at least from a technical perspective, or SEO. So that's four major things that we're going to break down, we'll go into each of them in detail. And you'll get some tips and tricks for each of them on things that you can do for your site. So the first one is your site performance. Then we're going to talk a little bit about site structure, your meta tags. And lastly, we're going to talk about redirects. So let's get into the first topic, which tends to be the largest topic. And it tends to also have the highest impact for from a technical perspective, at least for your SEO, and that's site performance. So since 2010, Google has announced that site speed will be a factor that goes into their search ranking algorithm. And it's definitely grown more influential over the years. So although Google doesn't actually reveal details about their exact search algorithm, and with the breakdown and impact us, it is known that site performance is a critical factor. And it can impact more than just your SEO, but also your user experience. And this is really important for Google, because a slower website tends to be not a great user experience for your users. And they're less likely to actually stay on the webpage. So Google obviously wants to feature websites that are higher quality for their own platform. So beyond sort of the SEO benefits, performance actually directly impacts conversion rates. And a lot of these research have been done by Google on this topic. So 43% of visits are likely to be abandoned if pages take longer than three seconds to load. And that metric is going down sort of by the year as users are increasingly expecting more performant and fast websites. Like other metrics are things like improving load time, even by 0.1. Second can boost conversion rates by 8%. So even just increasing your site speed by a little bit can go a long way in terms of impact. And this is especially true on mobile devices, were specially in sort of an E commerce, industry. 77% of smartphone shoppers are more likely to purchase from companies whose mobile sites or apps actually allows them to make purchases quickly. So performance is very critical for SEO and direct conversion.

**Nancy Du**  8:11  
Before we get into how to improve SEO, performance, let's just kind of understand a little bit about how Google kind of views, site speed, and what are the different metrics they're actually using. So Google uses what they call the core web vitals, which is three different metrics that they use to kind of give you a score when it comes to performance. And if you're used to using tools like lighthouse, or PageSpeed, insights, you've probably seen a lot of these metrics before, along with maybe some other like things like speed index, and first Contentful paint. So the three that we're going to kind of quickly review today is largest Contentful. Paint, which is how fast the most important element on a page actually loads. We want to keep this as low as possible, so that your users are seeing your page. And the largest sort of most important elements on your page like a hero load very quickly, when they first land on your page, then there's cumulative layout show. So that's how much your elements are shifting as the page loads. So if you have an image that's taking a little bit longer to load, and it kind of moves the rest of the page, now, you'll get a higher number. So again, you want to keep the cumulative shift number as low as possible. The last one we have is first input delay. So that's time between the interaction of the user on the page to when the response when the page actually responds. So again, for this one, we want to keep the time as low as possible. When it comes to optimization, we're going to be talking specifically about load speed, and what impacts load speed. So there's four main things. There's many more than this many more ways you can find To optimize. But these are sort of the four key things that I've kind of found over the years that kind of has the largest impact. One is your rendering strategy. Two is the size of your JavaScript and CSS file. Three is the size of your images and videos, and the four is any sort of render blocking resources. So when it comes to picking the right rendering strategies, we first got to understand what are the different options when it comes to rendering. So we've got kind of these three main ones to pick from, there's the client side rendering, static site generation and server side rendering. When it comes to client side rendering, this is sort of your typical single page applications. Your web content is rendered when the user visits the site. So your initial load tends to be slower compared to some of your other strategies. This is ideal for sites with a lot of dynamic content, or very user specific content. So you have to wait until the user lands on the page before you can properly respond with the correct data. It does tend to have higher memory consumption, and it relies heavily on sort of your end users browser capabilities. And because the content is not available, right on load, it is harder for search engines to crawl and index. And then we have our static site generation, which is what happens when your web content is pre rendered during build time. And this results in very fast initial load time. Because what this, what you're actually getting what the users are getting sent back is the HTML file with all of your content loaded in already. So this is best for sites with static content that doesn't rely on maybe any user data. And it doesn't change very often. And because these are static files, you can kind of further improve the performance of your site by serving this through a CDN. Similarly, this one would be easier for search engines to actually crawl an index because your content is already available, right on load. Something kind of in the middle ground, if you do have more dynamic data where your data tends to or your content on the page tends to change a little bit more often is server side rendering. So this is when content is pre rendered on the server side and then serve to the user on user requests. So you still get that fast initial load. But it does allow for more dynamic content to be used compared to static site generation. And because the content is available on load, it's easier for search engines to crawl and index. So what I would recommend, especially when you're looking at a headless implementation, you're building out mostly content heavy websites, you're really looking at either SSD or SSR as your sort of rendering strategy. The next thing to kind of watch out for and to kind of try to improve is minimizing your JavaScript and CSS file. So the smaller your file sizes are, the easier and faster it is for your users to be able to download them as they're trying to load the page. So what I usually like to do is start off by just analyzing your current bundle size. And you can use something like web pack bundle analyzer to, to do that. And this is kind of like a illustration of what you'll see, which it really highlights what are the different packages and what is weighing the most, where, what is your sort of heaviest package, and then you can kind of start to make decisions from there, what I find is that oftentimes, you'll find libraries that you're not actually using very often that take up a lot of space. And you can either find smaller, like alternative libraries that are smaller in size, or maybe find ways to dynamically load in the library or certain components only on pages or instances that you need it so that for the majority of the pages, your bundle size and file size is as small as possible. The next one, I think, is one that you see all over the internet, like reduce the size of your image, this is going to make a huge impact. And it sounds like an easy enough advice, you know, you just make the images smaller. But I find this to be almost the hardest thing to really action on because like what exactly do you do? Right? You can just make, you know upload the smallest quality image because then it will make your website look kind of sketchy and not high quality. So where's the balance between sort of quality of the image and performance? The first thing I would recommend if you're not doing This already is utilizing something like a digital asset management or a dam system. And this is really going to simplify all of the other image sizing optimizations you do. A lot of these dams come with a lot of features in place, so that all you have to do is upload a single image of the highest quality of the highest size that you want to use. But depending on your use case, you can send or utilize a smaller size or a different format of the image that fits your either user's browser size or mobile size. Or, depending on your use case, you might only need a very small, low quality version of that image. So for example, a popular down that we personally like to utilize here at wrangle is cloudinary. And this allows you to customize your image quality, the width and height of the image and the format that the image comes in by just updating the image URL. The other thing to really keep in mind is that when it comes to images, one size really doesn't fit all. And you can't really see that, when it comes to looking at image sizes across breakpoints, they actually differ quite a bit when it comes to width and height. And the way that I like to think about how we go about curating image sizes is the same way that we think about responsive design. In sort of the web space, we kind of think about all the breakpoints that we're catering to when it comes to our users and our use cases. And from there, for every component that has any sort of image in them. We're specifying the width and height for each of those breakpoints, I tend to like to use the highest sort of breakpoint just so that we're providing the highest quality image for that particular breakpoint. So for example, for anything 767. And below, we're going to be using the second image over here. As you can see, if you're just serving a singular image, let's say we're serving the best quality image that we should be for our website at 1439 pixels, that's going to be 668 kilobytes compared to what is actually appropriate for mobile sizing, which is either 86 kilobytes for a small mobile or sort of a tablet size at 343. So this makes a big difference, especially if you have a pretty image heavy website, this quickly adds up and can really slow down your performance of your site.

**Nancy Du**  17:47  
The last thing to kind of watch out for when it comes to performance is really deferring any render blocking resources. So this tends to kind of happen over time. For a lot of websites where you start to add an analytics, you start to add, add in pixels, or any third party integrations and all these scripts tag starts to kind of appear in your header section. And what's really important to kind of know is that anything that you place in your header as a script is automatically treated as render blocking resources, meaning that it will load first before your page loads. And this can be really bad because of the third party script tends to take a really long time to load. Even though your own website is optimized, it will still result to a slow load time. So there's two things that you can actually do to either decrease the effects of that or prevent it altogether. And that's utilizing the defer and async attributes on your script tags. So async will, adding a sink will load all the scripts asynchronously. So if you have four or five of these script tags, by adding async to them, they will be loaded at the same time, which will greatly reduce the time it takes. Or if this isn't something that's critical for your initial page load. Adding defer will force the browser to load the script only after the page loads. So it's kind of moving the importance down and letting your page load first, before running the third party scripts. Alright, so the next thing we're going to talk about is site structure. And structure is actually a really vital aspect of SEO because the structure of your website shows Google which pages of your site is really important and helps Google to kind of or search engines in general, the bots to kind of know how to crawl and navigate your site. The better your site is structured, the easier it is for those ball bots to crawl it, index and then be able Will to feature content as they're being searched. And the great news is you can actually influence which content ranks higher, depending on how you actually structure your site. So although a lot of the improvements actually comes with maybe re architecting, your information architecture and your site structure itself, there is another way to at least give Google and the search bots a better idea about how to navigate your site. And that's by providing a sitemap xml file. And this is actually pretty easy to generate. And depending on which framework you're currently using, there's already automated tools to be able to generate those. So you don't have to be manually updating those as you add or delete pages, a lot of these great libraries actually help generate those Sitemaps for you. Alright, next one we're gonna go through is talking about all of the different meta tags. So meta tags are little snippets of code that tells the search engine important information about your webpage, they usually live in the head tag of your HTML. So they do kind of different things, there are some tags that will kind of determine how the content will look and your search results page on on these different search engines, or their kind of would indicate to the bots on how they should crawl your website. So the first one everybody's probably heard of this one is the title and description tags. So the title and the meta description tags are definitely confirmed ranking factors. And what I find is that typically when we build out these headless CMS platforms is really important to actually include these fields in your CMS that you're building, just so that your content authors has an easy way to be able to customize their meta tags and description. And oftentimes, you'll find that they like to experiment and make changes to them. So on the right here is just an example what we set up in the standard DCMS as input fields for authors to be able to input so per page, they're able to update both the meta title and the meta description. The next tag is the canonical tag. So this one's a little confusing. But essentially, a canonical URL is the URL for the main version of a duplicate page. So this is only really irrelevant if you have two pages with similar content or, you know, duplicate pages all together. So in those instances, Google is going to kind of make a guess for you on which is the main page does it because it doesn't want to serve the same repeated results and waste resources on that. So it's going to pick one page, that's going to determine to be the main page. And that's the only patient's going to be prioritized for indexing and ranking. So the good news is, you can, you can kind of make that decision yourself and not leave that decision up to Google to make by, you know, creating canonical tags in your pages. So some best practices around canonical tags, if you do have duplicate pages or pages that have you know, relatively similar content, it's best to kind of pick one main page, or the preferred URL that you want to send traffic to. So your canonical tag is going to look something like this where it's going to point to your preferred URL. For all other pages, it's actually recommended for you to include a self referencing canonical tag, which means it's just going to be referencing the current URL. It's not mandatory to do this, but it's kind of a safety net in case Google makes the wrong guesses. or for whatever reason, decides to point traffic away to another website, or another page all together, so it's best to just indicate the page that you want. The eight, the href Lang is really only applicable if you're kind of operating in multi language scenarios. So one kind of important part of indexing is for Google to understand what kind of pages is in what language and what market is trying to kind of serve. So as people are searching in different countries, it's kind of returning the correct results. So for sites that are operating in multi languages, you want to include the href Lang for all of your Mmm pages, the language that's and and the URL. So here, I have several different languages at play for this website. And I'm just going to include all of the different variants in my header tag. The last one is the robot tag. So this tag really is meant to tell the search engine, what pages to exclude. So what pages you don't want it to crawl, and to index. And this is really helpful for things like pay campaigns or short term marketing campaigns where it's gonna get a lot of traffic, but it's probably going to not be there in a couple of weeks or a couple of months. So you don't want Google to index this page and then in the future lead to like a 404 page. So some common parameters you can put here is no index, which tells the Prowler not to include the page and in the index and the search results, nofollow, which tells the crawler not to crawl any of the links that exists on the page, and then no archive which tells Google not to serve a cached copy of your page in the search results. Alright, the last thing that we're going to talk about is the redirects. So

**Nancy Du**  26:25  
typically, when the search engine crawls and follows through the different internal links on your website, they're either going to encounter pages with sort of 200, or other errors that you probably have seen before, like 404, or 500. So ideally, all of your pages have 200 status codes. But that's rarely the case, especially as pages are getting removed or updated, or the URLs are changing. Sometimes the links are forgotten to be updated, and they may lead to pages that are no longer in existence. So good SEO hygiene typically means avoiding your 500 status errors and your 400 status codes. And to really ensure this, it's really important to actually have a proper redirect strategy set up so that all of your links are being redirected to actual valid pages. So quick refresher on status codes. 200 is everything is okay, go ahead and load the page, your 300 error, the 300 status codes are reserved for your redirects through one is permanent, thrill two is temporary. And then you have your 400, which is when your content is either temporarily unavailable, or permanently gone. 500 would be like your server errors where the page is just not being able to be sorted by the server. So when we're kind of thinking about creating our CMS platform, it's really important to actually have some sort of redirect management set up directly in your CMS. This way, your authors can go in and update redirects, as they're updating pages. So as they're maybe changing the URL, they can also add in redirects to where the new pages located. This is really going to reduce the chances of you having broken links on your page. So it's always something to to think about when you're starting to set up your CMS. Alright, so before we wrap up, just want to quickly talk about how we want to measure these impacts. We talked about a lot of different strategies that we can employ, like, how do we know if any of them is working? There are various different ways for us to measure SEO, it's never sort of one way to kind of like know that your SEO is Boneco. Good. And there are multi. It's multi faceted when it comes to what actually affects your SEO. But the most common ways to kind of track it is through your keyword ranking, your organic traffic and your bounce rates. And what you want to do is you want to take a snapshot of your baseline before you start implementing changes. So you can kind of track the progress before and after. And since SEO changes takes a while to show up. And it's not just impacted by your technical choices. Some other leading indicators can be really helpful. So things like looking at your core web vitals or the number of full four links could be a quicker way to assess if you're moving in the right direction. So some tools I like to use is things like the Google Search Console, I'm sure if you're working with SEO often this is like your go to thing to use. But this really just confirms that your site is able to be crawled by Google If he will showcase any issues with indexing your pages, so just keeping an eye on how your website is trending, as you're making changes is really, it's a really important tool. The next one, which is also a little daunting, I think, for people who hasn't used this tool before is that Screaming Frog. So this is a website crawler that kind of, is able to do an audit of your site, and again, kind of features some helpful tips and tools to be able to get you to improve your SEO. So a lot of the things that were actually, we talked about implementing, they're actually tracking. So things like finding broken links, auditing, redirects, analyzing page title and meta description. So a lot of the data that you're getting back from scoring, Screaming Frog can actually look at a lot of the things that you're trying to implement. The last thing is the Google PageSpeed Insights. So this one is really about just tracking your site performance. And what's really cool about this tool is that it uses real user data. So this is a little different than lighthouse, where you can run on your machine, this is actually going to show you what your users are visiting your website are actually experiencing. So this is good to kind of keep track over time as you're making performance improvements to see if this is moving the dial in the right direction. All right, so I'm gonna wrap up by leaving you guys with this kind of TLDR jichi, about all of the kinds of different tool tips and tools that we kind of talked about today. Hopefully, you guys found that to be comprehensive and really helpful. But I'm happy to take any questions right now.

**Brian Rinaldi**  31:58  
Thank you, Nancy, that was great. You know, I feel like this is an area where I am not strong. You know, SEO stuff is where I feel like it's just black magic. And I really don't know how to invest. So like a lot of the tips you gave are things I'm like thinking, Okay, I think I can do that. I can implement that. So, folks, if we have a few minutes for questions, if you if you have questions, please post them in the chat or in the q&a module. But I got some questions. In the meantime, for you. First of all, I'm curious, because I've had like, in the past, like mixed signals, if maybe, you know, the answer to that long form content does better than than the short form like so, you know, used to be we were pushing out, like lots of blog posts, and just, you know, or, or, you know, any any kind of content, because we were just trying to get as much out there. And then it started, like I kind of got feedback, like in marketing departments in the past that doing super long form content actually does better long term. Do you have any insight into whether that's true or not? Or?

**Nancy Du**  33:06  
Or? Yeah, you know, I don't think I have a definitive answer on this. I think if you look at kind of the strategy that we use at Rango, we do kind of a mix of both. I think it's really more about the content of whatever that you're posting, whether it's long form or short form, it's really about are the content that you're putting out? Actually, what the kind of users you want to attract? Are they actually interested in this kind of content, because if they're not, whether it's short or long, is not going to be relevant for them, I do tend to see that there's a group of users that tend to gravitate towards content that's a little bit easier to digest, and they don't need to kind of sit down invest five minutes into reading it. But I think it's really like, who's your target audience? Like what are what is the content actually, because some content makes sense to be elaborated on versus like, a quick like, one paragraph tip it so I think that has more impact than the length.

**Brian Rinaldi**  34:10  
Right? Okay. So, okay, and then my other question is going to be in we may in like, the five minutes we have left may not be able to solve this. So, sometime earlier this year, I was forced to smooth switch to Google Analytics for like, so I use Google Analytics on the CFA site. And, and I thought, I thought maybe I was the only idiot who, who it seemed entirely broken for, like, all of a sudden, I went from like, you know, this much traffic to like, I mean, it was, like, impossibly low. There was no way and I'm like, Okay, did I not include it everywhere? And I talked to other people, and they've had the same thing they've seen, like just a cliff where it just fell off and they can't, it can't be explained. Have you seen that? Do you? Is there something we're doing wrong? I mean, what Yeah,

**Nancy Du**  34:59  
Oh, yeah, I find that whenever you're either re implementing or changing platforms when it comes to these analytics tools, it's always a struggle. And there's a period of time where you're like, I don't know if it can actually trust the data I'm looking at. Because, you know, like, is this implemented correctly, when we made the shift, I don't think there was a dramatic change. Because what we did was we kind of implemented it a little bit earlier on and let the data kind of run for quite a long time before we started to be able to trust the data. And that tends to be what I find to be helpful is like, leaving a few months there as baseline before you can do the comparison, because that's what really matters is like the trend over time rather than concretely the number that you're maybe looking at.

**Brian Rinaldi**  35:50  
Okay, yeah, you know, it's, I'd say there, I did run it for a while, I in I think, I maybe I misunderstood the instructions from it had both properties running at the same time. And I'm like, but I'm only including the GA for one. And yeah, I'm getting

**Nancy Du**  36:06  
lunging. And I think it also depends on like your, I think, from framework to framework, it can be different. Like, if you have a single page application versus like some other platform that you're using, like it could kind of change the data that you're working with. So it's definitely a challenging problem.

**Brian Rinaldi**  36:27  
And so do you do all like have an analytics like, to tool that you recommend? Or do you just use Google Analytics, because I also had, like, as an example, I hadn't Netlify analytics built in so like, I use it, that one actually maintain basically the same level of traffic. Whereas my, you know, Google Analytics just went off a cliff. So I'm, do you have like, a server side, one that you recommend? Or do you not feel like, it makes that big of a difference?

**Nancy Du**  36:54  
Yeah, so there's a few different kind of like analytics tools that we use. So Google Analytics, definitely the top one, we also use hotspot if you heard of that one before. So that one's more of like a visual analytics, where it kind of shows you like where on the page people are interacting with the most. So it's kind of a visual way of knowing like, are people you know, falling off like halfway through your page are people mostly concentrating on certain CTAs that they're clicking on? So that one personally, I like that, looking at that data better because it's, it's more visual and it's easier to digest than just looking at and like charts and numbers and graphs. So I will recommend that one and that does kind of have its own internal tracking of traffic and click through rates and things like that.

**Brian Rinaldi**  37:45  
Okay. Okay, well, we are running out of time here. So like that was that was fabulous presentation, and I definitely have a lot of tips and tricks I am going to take back and hopefully improve, you know, mostly this is obviously at the site, my work work, they handle it themselves. My CFE side like that's where I feel like I attempted to come up the greatest job so I need to improve that. Thank you for for the tips.

**Nancy Du**  38:13  
Awesome. Glad to be here. Thanks, everyone.