---
_build:
  list: false
  render: never
---

**Abbey Perini:** [00:00:00] Hey, I am Abby. And I'm here to talk to you today about semantic HTML. What, why and how, what is semantic HTML? You ask two rules, use HTML elements for their intended purpose. And separate content from presentation here. I've got on the left, a decrepit old being captioned nearly HTML and on the right, the beautiful young woman that being turns themselves into with magic caption, HTML, and CSS.

Why HTML will literally do your work for you? It's really important for accessibility. It will only help your SEO, which is search engine optimization. You'll write more consistent code, which is easier to style a CSS and easier to read how [00:01:00] let's start with two general tips, ask yourself if there's a tag with more meaning you can use when you reach for a diviv or a span and Google.

If HTML does it before building it. Now we're gonna start by putting together a really basic HTML page. But before we start, I do wanna say that I have a blog post by the exact same name as this talk. So don't feel like you have to scramble and write down every single HTML tag that I'm gonna go over because there are a lot, it's all there for you listed out with even more information.

So let's put together our basic page. First tag that's important is your duct type HTML. This tells browsers and machines that this is an HTML document. Next, you gotta wrap everything in an HTML tag and you have to include the Lang attribute, which stands for language. My page is gonna be an English, so I've used the E in value in there.

You got two tags, [00:02:00] head and body. Body is gonna hold pretty much everything the user is gonna see. And some more head is mostly for your SEO, which we'll talk about next.

I'm gonna start with a few of the unique ones. Link re icon is your FA icon. It shows up typically in the tab, in your browser, when you save a bookmark stuff like that, you often notice it when it's not there. When the little gray and white globe shows up it's, it shows up exactly like this HTML tag in my vs code window tab here, title, keep it descriptive.

Keep it under 60 characters, include the brand. If you've got one. You can use description of keywords, tags, search engines are pretty good at populating these, themselves these days. So it's optional, but if you do have something unique that you think a search engine won't pick up, definitely add those in for your SEO.

next. We've got a few meta tags, which stands for [00:03:00] metadata. We start with our car set attribute, which stands for character set. It's typically UTF eight. This tells the browser what your characters are encoded in so that it can easily decode them and display them on the page for you. Following that is your meta name, viewport tag.

Search engines, look for this and will wait your site based on whether or not it's there. If it's there, they consider it a responsive site and they'll put it up at the top. This also tells devices not to resize your window, which can mess up your CSS. You're saying I will make the site responsive.

Y'all use my media queries. I'll make it look good. And that's only good for your SEO. I'm gonna cover briefly four other meta tags that you might find really useful, especially for SEO. Open graph will make the preview on Facebook for you. Twitter cards will do the same on Twitter. Schema. Markup will show edit the preview in search engines and [00:04:00] robots will tell web webs scrapers what they can and can't do with the content on your page.

Now we should talk about how sectioning and heading elements work together to create a document outline for your page. When people talk about how semantic HTML is important for accessibility, this is one of the main things that they mean it browses your HTML document and creates a summary of your page and exposes it to screen readers in something called the accessibility tree.

You can look at this in most devils and it creates. The way that a screen reader user can navigate your page screen reader. Users can even look at just a list of the headings and use that to jump to information that they're interested in. It's super important. And speaking of headings, they're in the sending order, starting with an H one, you can only have one H one on a page and [00:05:00] you have to have one H one on a page H amount HTML five spec said, Hey, Let's start reorder the heading.

Every time you use a section element, it's gonna be great. And browsers went, no, we will not be implementing that. So that is not a thing. We don't do that one and only one H one let's skip levels after H one comes H two after H two comes H three. There's rarely any reason to go below H three, but it does go all the way down to age six.

If you. Use consistent query like headings for SEO. If your heading has something that a user would be searching for, search engines can grab it easily and suggest it to users. And you'll get more views. Next. We have to talk about landmark sectioning elements. Landmark roles are information that's read to a screen reader user about.

The HTML tag, three important ones that you usually need are header main and footer. These are the ones that can appear once and only once per page. I describe [00:06:00] header as top of the page things, but top of the page as a presentational concept, what I mean is things you expect to see at the top.

Immediately right in your face on every single page on a website, I'm talking a company's logo, a company's name, the main navigation stuff, intuitively you know, you are looking for immediately at the top of the page. Main is the main point. It's the main idea. It's the main content. It's the main reason we're here.

All of the stuff that you want to present to your user is usually wrapped in main and you have to have a main head and footer are pretty optional. Footer once again, I'm gonna say bottom of the page, but when you go to a company's webpage, especially if you're job searching, you can scroll all the way down to the bottom and probably find their open roles about an about page for the company their contact information, maybe a contact form, stuff like that.

That would go on your footer. The copyright is also a good example. And then we have to talk [00:07:00] about Ary. Aria stands for accessible rich internet applications. It's a set of roles and attributes that add more information to HTML tags, and you can add them yourself. So if I had a diviv and I added role equals navigation, and I had a nav tag navigation would be read to a screen reader user for both of those elements.

Similarly, if you have multiple navs on a page, screener users need to know. Why what is this now for? So you would use a labeled by to differentiate between your main navigation that you may have at the top and your photo navigation that you may have at the bottom. There are some reusable, sectioning elements, article wraps around anything like a blog post, or like a New York times article that you could take out of that page and put it in a completely different website.

And it would still make total sense. Section groups content together. So you can use it inside article. You can use it inside main. It's basically just saying, Hey, all of this [00:08:00] content is gonna be on the same. Aside is complimentary, but not vital. So say I had an article about emperor penguins and I also had a really adorable emperor penguin shirt that I wanted to sell.

So I wanna put an ad next to my emperor penguin article. I can wrap that ad in aside and slap it in my article. And then everyone knows that this is not vital for information, but it is still about emperor penguins. So they go together

finally. Check your outline. Check it with an HTML validator, navigate it yourself with a screen reader, multiple screen readers, multiple in multiple browsers. If you find gaps in your document, outline that it would be confusing to navigate with a screen reader user. Then you can put in more aria if you need.

Now let's talk about enriching your content with HTML. What I mean by that is you can make the data on your page, easier to work with for machines, for users, for developers, you can also add a bunch of data without displaying [00:09:00] it. It's just in the HTML. A great example of this. Going back to that separate content and presentation.

If you wrap text in an em tag. Yeah. It's gonna be italicized, but a screenwriter user is also going to hear that this has been emphasized. So that's adding more information and the at size in totalization is separate. It's. Not as important, strong is going to give you bolded text, but it's also going to read to a screener to user that this text has added importance.

So if you're thinking about a presentational concept, like bolding, your text, use CSS, don't use BNI. And if you're using em and strong, remember that's too add more information. The presentation of the text is easily changed with CSS and does not matter. Tables are tabular data, not layout. If you have a bunch of data that would make sense on a table, put it in a table.

If you're trying to [00:10:00] put a bunch of things in squares, use CSS grid, large tables, especially ones that have confusing layouts or things that span multiple columns or multiple rows. Get really difficult to navigate with a screen reader. So let's look at some tags that can help you. Give more information and maybe do the same spanning multiple rows thing without making them more confusing.

Let's start with caption. This isn't going to be displayed, but it can give screen reader, users a lot of information that they really need. If your table is interactive, if you have sorting buttons, you can tell them that as soon as they enter the table and then they'll be like, So many things I now know that I can do at this table.

This is lovely. Call, group, and call allow you to style related columns together without actually making them span multiple columns or anything like that. T head these [00:11:00] T elements and tee foot allow you to add more information.

Repeating yourself in every single cell. So column headers, when a screen reader user uses the arrows navigate horizontally are going to be red. When they do it vertically table, row headers are going to be red and the scope you can set to either column or row. And that way it's easier for screen users to orient themselves in the middle of your table.

Cuz if you were tabbing through each individual cell, it can get really confusing really quickly in a giant table. These are a couple of Smaller more fun. Examples. If you have an image on your page that is necessary for understanding content around it, like a illustration, a diagram, a flow chart, use figure and figure caption like table caption.

It'll add more information to your figure [00:12:00] without you having to display it. And it'll give the context necessary to non sided users, if not use image and don't forget your alt. But let's say you had a quote that you wanted to display on your page. If you put it in block quote, we've already got some indentation presentation.

That's just a nice ad. And then you can add your fig caption if you've got it wrapped in figure and say okay, here's who said it? And then you can add a site tag. Currently my very fake URL saying that this presentation is happening and I said it in this presentation. And then you have so much more added information about your quote without having to type out everything manually in just a paragraph element

can also give the machines more information. This is useful for browsers and for search engines. If you have contact information, wrap it in an address, and then. Automatically it's [00:13:00] associated with the parent element, which means if you put it inside footer, it's identified as the contact information for the webpage owner, you can format your own code blocks, pre stands for pre-formatted, which means everything that you've got it wrapped around.

You've already got all the spaces and tabs and everything that you want. It's going to display on the page. Exactly like that. Is code VAR are variables. Usually these show up as monospace fonts, you've typically seen them on blog posts and stuff like that. But wrapping these code blocks using these elements, CR makes it easy for you to style them and make your own stylized code blocks.

Just using HTML. You can also tell the computers that it's machine readable data date and time will tell computers, Hey, I can use this. They also have attributes that allow you to make them easier to use in code as a developer, you can put text that is the [00:14:00] date that you wanna display and then have an attribute in the date tag.

That is a JavaScript datetime object that you can just pull when you're interacting with the. We can also define a bunch of things with HTML. Abbreviations always define your abbreviations the first time you use them. And also the, a, B R tag with title automatically creates a little hover over or a little box that appears when you hover over the element with the definition of your abbreviation you can also create definition.

With DL DT and D here, I've got sailor. Moon is the soldier of love and justice. And now we know that I'm defining sailor moon right here, just using HTML.

Can also talk about letting HTML do your work for you. You don't need to build so many of the things that I see people build it's already [00:15:00] right there. Forms are a great example. With the form action and method attributes, you already have access to HTT T HTTP messaging without writing a line of JavaScript, no veteran, none of that.

If you put a button in there and you say this button is type submit, it creates a button that will submit your HTTP form. No JavaScript type reset. Creates a button that will reset all the controls in your form. So someone is I hate everything. I just entered here. They hit the reset button. It's clean.

They can start over. It's fresh. We can look at some other form fun form controls. I have both the code and the output field set is a great way to group any of your form. Controls, you can use list elements paragraph elements, diviv section and form within your forms. But field set by itself creates a lovely little border and your legend shows up in that border.

Like it's a pretty nice built in already [00:16:00] without you styling anything. Here I have my select, which automatically creates a. Dropdown menu. It looks different depending on what OS you're on. So I'm on Mac, which means it's styled like this text area is a great way to have multiline user submissions.

And we already looked at a select, but within select, you can add an option group that will create these lovely little section. With headers. So I have some video games here. Obviously, all of this is hideous because I have used no CSS but my crafting games or T my, an animal simulators include untitled goose game.

And with the multiple attribute, I can select one. And then using command on Mac and control on windows, select multiple. Here I have a progress bar and an optimism level meter that I hard coded in my. [00:17:00] Form using some numbers to show like what the max is and what I have it currently said to which would be great ways to create a visual progress through your form.

If you have multiple steps in your form, multiple pages in your form, et cetera, it's good for letting people know that there's light at the end of the tunnel.

Did you know that the input type attribute has 21 possible values. You can use dataless to provide auto, complete suggestions to it. And we're gonna dig into the 21 possible values. Just know that button submit and reset our. Type values that you can use, but they're not interchangeable for BU with buttons for a few reasons.

They were useful when we were trying to support internet Explorer, six and seven, and it did not standardize buttons the same way as the other brow browsers, I guess they, so here I have [00:18:00] my 21 possible input types. Most people know about checkbox and radio. There's one here it's just hidden. And I can't interact with it as a user.

We've got date pickers. I accidentally clicked my file picker. Another progress range, but this time the user can set the range. Date pickers time pickers, date, time pickers, week pickers. There's a color picker, so I can go over here with my eye dropper and on my little hamster image here. Get that blue color.

There are some here, all of which I should have labeled that are things like password, email, URL number I think there are a few other that I'm forgetting telephone. And they all have validation built in the number has a lot of interesting attributes that you can use. You can set maximum, you can set it [00:19:00] to like only integer.

There are a lot of interesting things you can do with that. And then, yeah, this hamster is a button I can interact with him like a button, but it's an image. And that is something that you can do with.

As I just said, always associate a label with your inputs and other form controls. It's accessible screen, your screen reader, users need to know what box they're typing in. Going back to everything that built that's built into form. If you have labels associated with your inputs and you have your your H C DP messaging setup and your submit button.

It will automatically create key value pairs in a multipart form data message in HTTP. So you get your HTTP message on the back end and you've already got, it was put into this input and here's what the user submitted in key value pairs. Don't associate a label with a button or an input type button reset or submit.

We'll get into some of the built-ins in buttons later, and that will make more [00:20:00] sense don't ever put a heading in your label. Now we'll get into how buttons are different. And that makes more sense. The second thing that people really talk about semantic CML being use useful for, in terms of accessibility is how much is already built into some of these elements, buttons, and links, and other interactive form controls have buttons, other interactive form controls and links have built in properties, behaviors in states.

Links are for navigating to another page or another part of the page button is for actions that change the page, screen readers, treat links and buttons very differently. I keep saying links while you're looking at an a tag. An a tag is an anchor tag, which creates a link links will be grouped with other links.

So just like I said, you can get a summary of all of the headings using a screen reader. You can get a summary of all the links on the page and just go straight to whatever link you want. It's very useful. Otherwise, you're just [00:21:00] tapping through a lot of information, buttons and inputs and other interactive form controls are in tab.

In tab order buttons can be triggered by enter in space links are not in tab order. They can only be triggered by enter and. You get SEO for the links built in. If you went and built any of this yourself, you would have to create JavaScript event listeners for clicking, for interaction on mobile for focus for hover, for for.

Focus on however you can do with CSS for JavaScript, you would have to add event listeners for intern space as well. And this is a lot of code, right? When HTML, just hands it to you on a silver platter and things like focus can be difficult to manage with JavaScript.

Finally, let's talk about some other elements that can do a ton of work for. so we're used to building responsive sites. We've got our image, we take our media queries and we [00:22:00] say, Hey, take my image and make it this size. If it's on this screen with picture, you can have multiple image or source elements wrapped in picture and feed a media query to picture, and it will select the smallest possible image to display on the screen.

So say I. Only needed to load for a tiny little mobile screen. Someone's using mobile data. They don't want my site to be slow. It's gonna be way better for performance and everything else. If I can load the smallest possible image, rather than a huge image that I need for like desktop and then squish it down to the size, it's also better for raster images that don't like to be smooshed around like that.

They'll pixelate. They'll look weird. We gotta think about aspect ratio. It's a whole. It's a lot of math. I don't know about you, but that's not my cup of two. Iframe is cool because you can trap code execution in the iframe instead of in the full window. So that code doesn't have access to everything that your window has access to.

It's [00:23:00] great. For security reasons. Number one rule of validation is never trust anything that a user is inputting. So it's great for that. And then I think I have three more examples. Yeah. So with details in summary, I have created a lovely little toggle here with no JavaScript, no CSS, nothing like that's just working.

We're doing great. I didn't have to do anything. This is audio controls. If I pressed play it would play a lovely three second clip. I can interact with volume. I can adjust playback speed. All I did was put a little audio tag with a source in here and said, yeah, display controls. Finally, we've got our video controls.

And again, you have a lot of things built into this. I could make it full screen. I could download, I could adjust the playback speed. I could do picture and picture. And all I did was add a video tag with a source and say, yeah, give me my controls. [00:24:00] So with that, I hope you enjoyed. A tour of semantic HTML.

And I am happy to ask question or answer questions if anybody has any questions.

All right.

**Ifeoma Nwosu:** Thank you very much, Abby. A question to ask would be now that we do have a couple of framework. Where HTML gets replaced. For example, in react, we don't exactly make use of HTML. And what we write is the exactly HTML. Sometimes you get to see people using, we don't even, they don't get to use the helpful tags that actually make up for semantic HTML.

So what does. What do you think about this affecting the output of the application, maybe in terms of S E O optimization? What do you think about this? Or maybe the performance [00:25:00] since we know HTML provides us with these tags, that can be helpful.

**Abbey Perini:** Yeah. So the reason that I talk about HTML and not specifically react or any other type of framework is because those frameworks are built on top of HTML.

There are a lot of concepts that you get here that you can translate directly to using in a framework. If, for example, That you can reach for some of these tags that you didn't know before. It's easy to implement them into JSX and JSX in react is built off of HTML. And there are things like I talked about the FA icon, I talked about the head tag that is still, it still exists in react.

You just have to go find it in a different place, but if you didn't know that existed at all, then. It's gonna be hard to find it. It's people talk about how the life cycle hooks have really abstracted people away from understanding components being rendered on the page. So you have to go and dig and look at what that [00:26:00] process looks like to be able to use the hooks to their fullest, which is why I like to talk about how HTML and CSS work in.

Okay.

**Ifeoma Nwosu:** Thank you. So another question, is there any particular. One of these lesser used HTML elements, like these tags that you really wish people used more and they tend to be really helpful, but people don't get to use this elements, these tags. Is there anyone you wish people used

**Abbey Perini:** more? Yeah, I think picture with the image and source elements rather.

Prepp in them. Is one that I read about in Mozilla developer networks getting started with the web, which is a guide that I highly recommend for any web developer. And it really makes finding images or using images as small, as possible, much easier, which has a lot of benefits beyond that.

Really understanding that there's a lot of meaning behind every tag that you use [00:27:00] as they're read to screen readers is. Yeah, that would be my top two answers picture and understanding that there are a lot of semantics that you don't normally see unless you use a screen reader. Okay.

**Ifeoma Nwosu:** Okay.

Thank you very much. You have answered good questions very well. And to the understanding

**Abbey Perini:** of, I think everyone, I think so.

**Ifeoma Nwosu:** Thank you very much for joining us.
