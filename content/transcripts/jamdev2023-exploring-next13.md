---
_build:
  list: false
  render: never
---

**Alicia Rodriguez:** [00:00:00] My name Alicia Rodriguez. I work as a server engineer for Marks and Spencer in London, and I'm also a content creator. I create videos about my experience or advisors that will give to people who wants to become a server engineer. And tutorials of frontend technologies mostly. You can find me on YouTube at time to code and score with and score early or on Twitter.

It's just at time and score to code. In the last couple of months, I created a long tutorial, which was really well received in free code count community, as well as different videos about Next.js. In today's talk, we'll look into how we can improve the core web vitals scores by using Next.js. First we are going to talk about [00:01:00] what is Nest year 13 and why it's really popular, what core web vitals is and is metrics, and then I'll focus on the new features Next.js 13, introduced to improve the performance.

What is Next.js? Next.js is a trendy JavaScript React framework, really compatible with type of script. It's a powerful tool for building server render apps. Server render apps are web applications that are generated on the server and then sent to the client as a fully TML document. With nas, you can build up that optimized for performance and SEO and have a seamless user experie.

At the end of last year, nest year, release a new version with significant changes. Last week, I published a video on YouTube where I talk about some updates in Nest Year 13, such as the new app directory, how the Data Fe Works in this new version, and how to optimize your app by [00:02:00] splitting your code and render it dynamically.

So you want to learn more about this and more? Make sure you check that. Now let's move and talk about core web vitals. When developing an app is crucial to have a strong core web vitals scores. These are a set of metrics that measure the performance of webpages and the user experience they provide. The curve web vitals scores can improve the overall user experience, and they do this by en enhancing the speed, the responsiveness and engagement of the webpages, which this leads to a increased conversing rates and a prolonged user session.

The curve web vital metrics that we are going to look into today are the following. First input, delay, first content, full paint. Largest content, full paint, cumulative layout, shift speed [00:03:00] index, and time to interactive. First input, delay measures, interactivity, the speed of page loading the browser.

Responding to that interaction, first content, full paint. This metric falls under the first input to delay. It's a metric that measures the time it takes for any meaningful content to be rendered on the screen. Lower FCPS scores in the case that the page is loading faster and provides a better user Experie.

The largest content food paint measures loading performance. This measures how long it takes to render the largest image block or text in the view port. It can be used as a key indicator of how fast the site is loading for the user layout shifts. This measure, the visual stability measures how much a web page change positions while it's loading and during user interac.

A highest score [00:04:00] means that the webpage is shifting and respectly. For example, if a user is reading an article and an image suddenly appears counting the page to jump down, it will result in a high CLS score. The speed in this measures have fast. The visual content of a page is displayed to the user. The time to interactive measures how long it takes for a page to be completely interac.

You have worked with Next.js before, you'll probably know that Next.js takes optimization of the components really seriously, and that's why they decided to improve two of the main components, the image and the link. You can still use both of them, even if you have migrated to national team. Just need to rename then and your Abul career working and your AB will break and this new component can help with that during the Next.js community survey.

70% of respondents declared that their core web vitals improved when they started using the new [00:05:00] image component. Providing images in the ideal format, size and resolution can greatly help improve core web vitals scores, and improve user's experience. Based on the values you pass, net will create images in the ideal format, size, and resolution to enhance user experience.

For example, an image that is 1,450 pixels wide will be displayed in full size on desktop, but Next.js will also create a smaller versions of the image for mobile devices so that the user don't need to download and render large. So that the users will only download the image resolution that is best suited for their device.

This two improvements. Native lazy loading and optimized image size can help reduce the time and taste for images to load on a webpage. This helps with the first content, full paint and with the speed [00:06:00] index metrics. It also helps to display images without the layout shift, which improve the C L S metric cumulative layout shift.

Because we optimize the images, we are also rendering the data usage, and this helps improve the time to interactive metric tti. So if you have images that load faster and use less data, we increase the chances of our images being viewed by. And all of these factors can heavily improve the balance rate metric.

This metric measures the presentable users who leave your site after viewing only one page. Since they release the component, they have also improved the low time on the client site, and it's easier to style and configure. And this new version is faster than the previous. If we want to import the new images, we just need to import as we used to do with the image from next 12.

So import image. [00:07:00] And now from next slash forward image. To import the old version, you need to call the module next slash forward legacy slash forward image. Now let's talk about the link component. This adds the ability to do client sign navigation in the browser. This means it helps us to navigate between pages of our application, given the user as smoother and quicker website experience.

So the pages are loaded using JavaScript, and we don't make a new request to the server. We don't do a full refresh of the. One other features is the technical link perfection to preload pages. The idea is to preload the pages that a user is likely to visit Nest, so that the load is much faster. And one of the ways they do this is by preloading the pages when the user hovers over a link.

Reduce the time it takes for a new page to [00:08:00] load, which means that improve the time to interactive metric and also the first Contentful paint metrics link. Preloading also loads critical access for a new page before the user clicks on a link. By loading this in advance, we can decrease the data that needs to be downloaded when a new page is loaded, improving the speed index metrics.

Before this link have to contain an anklet as a child, and in most of the cases, we will also have to pass the prop pass href next year. 13 has improved the developer experience by removing the need of passing as a child and anklet so we can simply only define the link. Okay, now let's look into fonts.

Next 13 introduces a brand new font system while loading a font in our lab, we can run into performance issues in Next.js 12. The browser will have show a fallback font at a [00:09:00] full font while it's downloading our font. And this souNext.js good, but this will produce a blink and a leg shift when this team takes.

If we wanted to avoid this, we could prevent the phone for rendering until the one we selected has been downloaded, but this is not great either. So Next.js 13 introduces a new phone system to load phones. The phones will be now loaded from the server. The CSS and font files are downloaded at build time and self-hosted with the rest of your static.

We can also use our own custom phones. The difference here is that they will be loaded directly into our project, avoiding the problems of bringing in an external source. So this new system will avoid making a request and remove the layout shift issue, which will improve the C L S metric. [00:10:00] I hope you're as society as I am to work with this new Next.js 13 version.

If you want to learn more about all the features that are coming up, make sure to check me out on YouTube as I'm planning to upload long formal tutorials. Thank you for watching.

