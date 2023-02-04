---
_build:
  list: false
  render: never
---

**Scott Fuller:** [00:00:00] Thanks so much Brian, and good afternoon everyone. As mentioned. My name is Scott and I'm a software developer and consultant from Rangle.io. I know you just saw a little bit about us, but Rangle is a modern digital consultancy and we partner with global brands and funded scale-ups to help them build their next generation products and digital experience platforms.

We really love being part of the tech community and getting to be a part of events like this. So make sure to keep an eye out for us, and if you haven't heard of us before, please check us out now. I'm really excited about what we're gonna be talking about for the next half an hour. , we're gonna be diving deep into the world of headless, and specifically we're gonna be looking at headless architecture from an E-commerce lens.

We're gonna be looking at some of the advantages of going headless for your e-commerce site, but we're also gonna talk about headless a little bit more broadly as well. So we're gonna look about generally what the concept of headless is, and we're also gonna take a look at how you can use a headless CMS with your headless e-commerce.

Now, there's a ton of [00:01:00] reasons why I think going headless is a great idea for an e-commerce site. So let's not waste any time and we'll dive right in. Now, you might be wondering why are we talking about e-commerce today? And I think the stat on your screen right now shows a really great example about how more and more retail shopping is moving online.

Now, I don't know about you, but at the start of the pandemic a couple years ago, I think the only thing that would bring me joy was receiving packages in the mail and I got addicted to online shopping. Unfortunately, that is still something that stays with me today and I'm sure I'm not the only one here who's felt that.

But it really shows how important it is and we can all agree more and more retail shopping is going to be happening. Now major brands who have worked to optimize their e-commerce platform have seen huge gains because of it. One example that I love is thinking about Adidas. They did a big website rehaul a few years ago, and they were able to quadruple their sales from their e-commerce store going from a billion [00:02:00] dollars annually to 4 billion.

So it really shows that having a highly performant, unique e-commerce site is really becoming a must in the competitive online l. , and that is where headless e-commerce is gonna come in. Now, before we start talking more about headless, I want to take a second and level set to make sure we're all on the same page with what we're talking about.

I know we're at jam dev and we're talking lots about JAMstack architecture, but you may still be wondering, what is headless? What does the term mean? Very simply, when I say go on headless, what I mean is separating your front end presentation layer of your site, which is often known as the. From the functionality that makes your site work.

So that's your backend, also known frequently as your body. So going headless is literally separating that body from the head of your site. Now, there's lots of reasons why you may want to do this. It's a super modern, scalable approach to web development. It gives you a lot more flexibility and freedom to customize both your front [00:03:00] end and the back end of your store without necessarily needing to go and touch both aspects at the same time, you have a next separations of concerns between your functionality and the site that your customers end up seeing now, there's lots of different ways that we're able to separate some of the front end and back end functionality, and we're gonna be going over two popular methods of doing that today.

Headless e-commerce and using a headless c m s. Now, before we get into that though, I wanted to show this visual because I think it shows a really nice, simple overview of how headless architecture works. . Now, very simply, when you're doing headless, you have some sort of frontend presentation layer that is connecting to your backend resources via an API, and that's ultimately why I like to show this image here.

It's because a lot of us are very familiar with the concept of consuming an API from a backend on the front end. So with a lot of these headless methodologies and this headli headless architecture, we're [00:04:00] really following these same kind of patterns. The big change here is we're making, doing something different than the traditional platforms, than traditional e-commerce or traditional c m s.

This is definitely breaking it apart into those separate layers for having more flexibility. So I'm hoping that helps clear up what headless means a little bit if you're still unsure. That's all right. We're gonna be going more into it in just a. , but other, we're all generally on the same page about headless.

Let's dive in deeper and look at headless e-commerce specifically. . Now, I also really this visual because it shows another super simple overview of the difference between traditional e-commerce sites and a headless e-commerce site. So if we look at the left side of this image, where we have this monolith, monolith is another name for traditional e-commerce sites.

But what essentially we mean is it's a platform where the front end and back. Are super, super highly coupled, so you don't have a lot of flexibility or customization of the [00:05:00] platform itself. And the front end and backend are highly coupled, meaning if you update one aspect, you'll likely need to update the other.

In comparison, if you look at the right side of this image, we have an headless e-commerce example, and here you can see we have multiple different front end resources who are all communicating with the same backend via an api. So you can have different customer experiences for native, for web, for wearables, and you're able to consume the same data and have the same functionality since they're all hooked up to the same backend resource via an api, so that those sort of functionalities think things like checkout your inventory and payments.

But again, we're decoupling our front end and our back end for greater flexibility. Let's zoom in on both of these a little bit more and talk about both styles. So here we have a traditional e-commerce example, and if we look at this image here on your screen, you're probably pretty familiar with other sites that look like this.

And it's the idea of a templated app approach that you can get from a [00:06:00] traditional e-commerce platform. If you decide to go this approach, you get everything all in one box. It's great because it's super easy to get this type of e-commerce site up and running since you don't even really need to code a lot of these different tools.

They're super user friendly, so all you need to go in there is to go in and add your information and you're able to create a store. That does come with some limitations, though you do have some design con constraints and you're pretty limited to using specific templates and pages that the platform has.

you're also often forced to use specific languages or frameworks that are decided by the platform. So some common examples of traditional e-commerce platforms, we have things like Shopify or Square. So for example, if you're using a Shopify store and you wanna customize something in the layout or the template need to go and write Shopify's liquid language.

So that is another learning curve to being able to update a traditional e-commerce. Now [00:07:00] let's look at headless in comparison to our traditional e-commerce platform. So like I mentioned with headless, we are consuming the backend through an API so we can go and create a variety of different front-end solutions.

And ultimately, the best part about this is it gives you a ton of flexibility. You don't have those design constraints because you're not working within the same templates and pages that are required from a traditional e-commerce platform. It's also framework ano agnostic. You can choose to write your code in whatever framework you want, whether that's view, react, angular.

Since you're consuming all of this data and the functionalities from your back. You also have endless possibilities for new applications. Since you are consuming this via an api, you can pass this data onto a wide variety of things. Like I mentioned you can do web apps, you can do native apps, you can even send this data and functionality to in-store kiosks.

So it really does give you a lot of different [00:08:00] flexibility in different tools that you're able to go and really optimize your e-commerce. Now before we go any further and continue talking about headless, I want to take a break here for a second and look at a couple examples of a traditional versus a headless e-commerce platform.

And for this example, we're gonna be using Shopify for both of them. I have chosen Shopify because they have both a traditional solution and a headless solution for their e-commerce platforms. And so we're gonna look at how the Shopify store can be used in both. Now, the only reason why I'm using Shopify today is because it does have these great both options that you can go forward with.

I'm not saying that this is the best one to use, but I just wanted to give that a, the little caveat here before we go into it. So we pop over into this tab here, we can see the sample Shopify store that I set up. Now, I set this up the other day and I made it completely bare bones. What I mean by that is I went through the general setup process.

Came on into this [00:09:00] Shopify UI and all I did was add in three sample products. We're gonna be looking at an imaginary shoe store that we're creating here today. And so within the Shopify platform, this is where you can go and add any of your products. You can go add the descriptions, things like media, the price, all of that.

Good. As I mentioned, I went in here, I took about 10 minutes. I plopped these products in there. And with Shopify's traditional e-commerce platform, you immediately get a templated view of what your site would look like. So let's take a look at that. Now, here's what Shopify just immediately gave me without choosing anything.

You can see an outline of a page. You can see all of the products that I added into my store are being rendered here on this front page. You can click in, you can do all sorts of different interactions with them and really get almost instantly a great idea of what your e-commerce store could look like.

Now that's great that we can get up and running super quickly, but like I [00:10:00] mentioned, there are some limitations like that. Would that come with that? What if you wanted to customize something on this page and change the colors? I personally don't know how to write liquid, so that would be a big learning curve and difficult for me to be able to update.

Say I wanted to create a specific store or a specific page on this store, it's much harder for me to go in and make those customizations. Also, since I'm just using a generic template, my store could be identical to one of my competitors who is also using the same e-commerce platform, really not having a lot of uniqueness or customization to the.

Now I've gone and taken this exact same data and gone and pulled it into a headless application built with next js. And essentially what I'll be doing here is I'm just pulling all this data and just rendering it into a new page. Shopify has an API called the Storefront, a API I, which wants you connect to with your own private token.

You get access to all this functionality and all the products that you have stored [00:11:00] within the platform. So let's take a look at what my feature product page would look like on my custom headless e-commerce site. So here's an example of what I've made it look like. Added in some fun animation effects.

You can see that these products, they're much more prominent. I've also added in a button on all of these page or on all of these items. Allowing us to go and directly add these enemies into a cart, but not stopping us from needing to go into another page. So this is a great example of how we can add some of that customization, some of that uniqueness, a bit of a different look and feel by still consuming the same data from the e-commerce platform.

Okay, let's get back into what we were chatting about now that we've had, now that we've seen how we can customize our stores with headless e-commerce. . We're gonna switch gears for a second and we're gonna talk about another very popular way, Q'S headless architecture, which is using headless CMS now.

You're not sure what a CMS is or the term is [00:12:00] new to you. A CMS stands for a content management system, and that is a platform that allows users to create, manage, and update content for websites and experiences. And one of the awesome things about using A C M S is you're able to update content without needing to go through a developer.

There's typically very user-friendly UIs that allow people to go update and manage their content. content can be a wide variety of things from text, images, videos, even so far as page layouts depending on how you set up your C M s, and it also acts like a content database to storing your content and allowing it to be sent to your front end.

There's different types of C m S products. We have traditional C CMS products, which are also known as monolith CMSs, and then we also have headless CMSs. So let's look at both of these a little bit more as well. and the image of the top left, you can see a bit of an overview of what a traditional c m S architecture would look like in this [00:13:00] world.

The front end and the back end. They are highly coupled. So again, if you wanna update one aspect of these, you often will have to update another aspect of it whether that's the front end and the back end. You're required to use a lot of front end templates. You might be limited by designs, and you're also typically forced to use specific languages or frameworks that the c m s decides.

So some very popular traditional C m s examples. We have Squarespace or the original WordPress product where is the traditional side of things. Those are all some really great examples of what a traditional CMS product looks. On the flip side, if we look at the image where we have ahead of the C M s, you can see that we have a separate backend, which is where we're managing and storing content, and we're gonna be passing that to a front end via an api.

So similarly with the e-commerce side of things, we can pass this into any number of front end solutions, and it's also framework agnostic. We can use any sort of front-end JavaScript that we want to be able to [00:14:00] consume this content and then to be able to display to our end.

Now, after taking a look at both some of the e-commerce side and the C M s side of headless, you may be thinking to yourself, wait. There's actually a lot of similarities between the two of these things, and the awesome thing about is if you adopt headless architecture is that you can use both platforms.

You can still connect to an e-commerce platform to be in charge of all of your. And your checkin checkout functionality, your inventory, but then you can also add an c m s to add additional content to your site whether that's images, texts, and videos, to really give it a robust, exciting experience.

But you may be asking yourself, what happens if I need to reference some of my product information within the content in my cms? How am I gonna do. , do I have to add that product information in both platforms? And then remember if I update something to go into both? Luckily, these different platforms have already [00:15:00] accounted for this.

Let's jump back to this image we looked at the beginning where we have a front end consuming multiple different backend resources via an api. Now if we're looking at this front or this headless e-commerce architecture, we can see one of these backend resources is the e-commerce platform, and we're also gonna be having a C M S both communicating with our front end.

Now we're gonna go from this where we have the front end communicating independently to these two different backend resources to this, where these two resources are also communicating with each other. Give you a bit of a better idea about how this works. Let's go back to our shoe store example. We were just looking at, what I didn't tell you when we were first looking at this page here is that I actually built this with both headless e-commerce and headless c m s.

Rather than pulling this product data as directly into my next JS app, I've gone and added it into a headless c m [00:16:00] s product called Sanity. Let's go take a look at that. Here's what the UI for our C M S product looks like. And this is specifically the page where we can edit anything on that featured product page that we were just looking at.

So we can see here, we have this title field and you can see it says feature featured products. And we can see that map straight to the words on the page. If we wanted to make an update to this, all we'd have to do is publish or change, come back over here. Do a little refresh and we can see that content has directly updated.

Now, when we look at this page, we can see there's lots of different information that's being used to populate the actual template. We can see some of these different data fields, but we can also see I've selected three specific products. Now, if we click into one of these products, you can see additional data coming here.

And if you notice that some of these inputs, they are grayed out and they are. That's because this [00:17:00] data is coming directly from Shopify and being populated in our c m s, that means that our e-commerce platform is gonna be maintained the source of truth for our entire application, and we're able to pull that into our c m s to use that content throughout our website.

If we look at that from the e-commerce platform side Shopify has a very handy little app which connects with sanity and is able to. Very seamlessly sync all of your product and inventory data over to the c m s. Now, lots of different e-commerce platforms and c m s tools have some sort of app or plugin that allows you to do this kind of thing.

But it's always good to double check that the tools you're looking to use, support what you're really looking for. And what's awesome about this tool is it automatically synchronizes your data whenever there's a change within Shopify, so you can feel. Safe that all of your data that's coming into your CMS will be up to date and match exactly what you have within your e-commerce platform and [00:18:00] that source of truth.

Now, I know we've been looking at a lot of examples and going over some of it more theoretically and looking at the platforms. So you may be wondering what's happening underneath the hood and what some of the code looks like now through this whole presentation. My whole goal is not being to be focused on specific languages or tooling, but to give you a general idea, but I didn't wanna show you how all these pieces connect together in our next Js.

So this this little piece of code is all that's being used to build that featured products page. And you can see within this constant of products, that's where we have our J S X, where we're rendering the data coming from our c m s that's being passed into this component as a prop, as data. And then we're destructuring that and injecting it in specific places of the page so that we can render that content.

So for example, you can see within this age two here, That's where we're rendering the title that we've set within the cms. [00:19:00] Now, I do wanna call out that this is not the only way that you can use, had the CMS to create pages. You can make it a lot more flexible where the authors within the CMS product can actually move things around and change the page layout.

But I've decided to keep it as simple as possible for this example here today. Now, the other thing in this code that I wanna call out is if we. Further down on the jsx, we can see that there's a button that has a click method that's calling this function called AB Decarb, and we're passing in the specific product ID when we're clicking on that button.

we're then going to connect to our e-commerce platform, headlessly, which we do up here in this function, and we're gonna connect to a method that Shopify has provided us that allows us to add this product to a checkout instance. So all we have to do is pass in the ID for the checkout and the specific product, and it will populate that and add it.

Give us a URL back that then we can go and share to our end users making it feel [00:20:00] like an completely seamless e-commerce experience, even though we're using different platforms. What's also awesome about this approach is because we know all the data is ultimately flowing from Shopify into C M F and then into the site, we can feel consistent that all the data will work, and that when we press this button, it is referencing the correct product id.

Because again, that data has come directly from shop.

Now, I know we've gone over a lot today, a lot of different concepts of headless, a lot of different tools that you can use, and so there might be a lot to sink in. But before I leave you today, I want to go over some of the advantages of going headless and some of the reasons why we love using headless architecture at Rangle.

Now, I like to say if you use headless architecture with an e-commerce, that you really get the best of both worlds. You're using each platform for what it's best at. You get all of the strength of the e-commerce platform's, functionalities, all of the great [00:21:00] checkout, the security, all of that kind of good stuff.

And then you also get the great flexibility and user-friendly authoring experience of your CMS tool. As we've talked about lots, the API connection is super easy. Something that as web developers we're typically quite confident and able to do, you get a ton of flexibility when you decide to go the headless route.

As we've talked about, your get to be framework agnostic, so you can choose the framework or language that you want to write your code in. You can use these backend resources across multiple channels and multiple. And you also can even use performant cloud-based hosting and build services like Netlify or Versace using headless.

It's really great to scale. It's very easy to continue building more pages and building out your entire experience, and it also gives you better security as there's less areas for a potential attack. No. Do you wanna, again, caveat this all with I [00:22:00] love headless, and I think a lot of the times if you're looking for a unique, flexible experience, it's a great way to go, but it depends on your use case.

Headless may not always be the answer for you. As I mentioned earlier, you do need to have technical skills to be able to build and maintain. It's not quite as simple as just entering a bit of data and having an e-commerce site pop up for you. So you do really have to examine what you're building for, who your client is and what is the best kind of architecture moving forward for you.

So I wanted to say thank you so much for listening to me today. I hope you've learned a little bit more about headless architecture and that you've gotten excited to play around with headless e-commerce tools and c m s tools in the future. But I'm gonna wrap it up now and I'd like to pass it back off to open it 

**Brian Rinaldi:** up for question.

Thanks Scott. That was great. Any, if anybody in the audience has any questions, please be sure to, post 'em in that ask a question module and [00:23:00] we have time to get them to Scott before we go to break. I had. So you obviously covered, you said you're not trying to be prescriptive on what tooling to use, but I'm assuming given your role, is more of a consultant type, where you do for different clients like you've used a lot of these different systems or do you tend to stick like with one in.

**Scott Fuller:** Typically, yes. Right now at Rangle, at least from the c m s side, we really using sanity. We also are quite comfortable in using Contentful, and typically we went more of the Contentful route. But we've recently fallen in love with sanity, especially because it's. More affordable solution.

. When it comes to the e-commerce side, we're often more limited by the tooling that the client is already using. Typically, if somebody's already in e-commerce space, they have some sort of system already set up. So whenever we can, we try to use whatever e-commerce platform has already been implemented.

**Brian Rinaldi:** Okay, that makes sense. Cause I, I've [00:24:00] had a little bit of experience. I, and a lot of it's me, like I wrote the chapter on this topic in the JAMstack book that Ray Camden and I wrote. And I ended up like covering a lot of, cuz it seemed like there was, your, you talked about that.

Kind of monolithic solution like Shopify without, not the API version, but the full version. But then there was also like ones like, I don't know if you have any experience with SNP cart and other ones that are more like An embedded storefront. So like I can customize a lot of things, but but then some of the aspects of the product display and cart are all like embedded.

Do you have any experience with those? It seems like a slightly different than the straight API where it's okay, I'm not, I don't have to build all the pieces myself, but I can customize parts. . 

**Scott Fuller:** Yeah, it's really interesting because I think a lot of different e-commerce platforms are really expanding their reach and going beyond what the traditional model has been.

I personally haven't worked with any of those kind of in between headless and traditional [00:25:00] models like you were just mentioning, where you have more customization. But I do think that there are great e-commerce solutions for different people depending on what problems they're really trying to. 

**Brian Rinaldi:** That makes sense.

Yeah. And it seemed to be like this middle ground if you wanted to get something up quickly, but you didn't wanna get into you didn't have the resources necessarily to customize all the pieces, but you wanted to customize a lot of it. Anyway and let's see.

We did have a question. Natalia asks, what has buried in your experience working with Sandy over something like Tenfold? What? What do you think are the key differences to be aware of? Yeah, that's a 

great 

**Scott Fuller:** question. Depending on the c m s that you decide to use, the authoring experience and the entire developer experience can be very different.

So when we're looking at Contentful versus sanity specifically, one of the interesting aspects about sanity is when you're creating the actual pages for people to enter a specific information in inputs, you're actually doing that all in code. So it does require your developers to. Schema that are [00:26:00] used to then populate the data in the CMS platform.

If we look at Contentful, for example, that's all done within the actual Contentful ui. It's not a code change, it's not something that's committed into your repo. It's something that's done fully in the Contentful platform. So what really does also depend on what kind of resources you have about what tool you might wanna use moving forward.

If you have developers who are able to go. really set up a bunch of the system at the beginning. Maybe you want to go more of a Contentful route because you don't need as much developer support in the long term. 

**Brian Rinaldi:** Yeah, that makes sense. I've always thought of it in two, two different aspects. There, there's the developer aspect which is obviously important, whether you have the resources or not to work with something a little more granular like a sandy, but also I think it's also important to think about.

who's gonna be making the changes to the content and what experiences they're comfortable with. Because one of the differences, at least to me between Sandy and Contentful, was Contentful had fewer [00:27:00] options. But sometimes from an editing standpoint, that can actually be a little bit easier for some people to deal with than Sandy can get really granular and can be hard to.

Might not be the experience that people are used to, but did even allow you to customize the UI of the CMS portion, right? Like of the admin, so you could do all kinds of Yeah. . That makes sense. And have you, we talked a little bit about like images and stuff like that in some prior presentations where, you could use something like an ImageX or you can use a cloudinary and then actually, maybe customize images and things like that.

Have you had much experience with integrating that? Would that be something that you'd have to use like a plugin with Shopify or a plugin with one of these other tools to be able to source those images from something? 

**Scott Fuller:** Yeah, definitely. Yeah. There's often lots of different tools that we can go and add in.

A lot of the times we like to do it within the c m. Piece rather than the e-commerce side of things, because that's ultimately what's [00:28:00] passing all of our data into our front end solution if we're going ahead of the c m s route. But yeah, we've done multiple different projects where we have an integration with Cloudinary right.

Within our c m S platform. I know sanity and Cloudinary have a really great tooling together, so you're able to go and get right into the cloud, near UI, select different. Assets that you want to go and embed within your content. So yeah, a lot of these different tools have created a ton of great different apps and plugins that let you customize it and bring in lots of different resources to create a really robust user experience.

**Brian Rinaldi:** Adam mentions in the chat that he likes the Shopify Plus Sandy integration. He was scared it was gonna be, inventory was gonna be managed in Sandy for a minute. So obviously all of that stuff like the product related things like inventory are all gonna be in. . Okay, so actually that's a good question cuz it's what pieces, when you do that integration, what, cuz you, you had the product name and the description was in the cms.

And then the, like what [00:29:00] pieces are actually outside of the cart? Is it just inventory that's in, in the Shopify piece? And cuz you don't, obviously not gonna repeat all the description and things like, . Yeah, so that's 

**Scott Fuller:** actually all of that data. All of your product data is coming from Shopify, and we're just populating it within a determined schema.

In our C M s, so Shopify, the e-commerce platform maintains the tr source of truth. You can't actually edit any of those names, you can't edit any of the descriptions. If you wanna make any of those changes, you need to go into the Shopify platform, make that change there, and then have that be res synced to your c m s.

That way we're still maintaining anything that's e-commerce product related. It makes the most sense to maintain within the e-commerce platform, but anything that's more content, Things that you're just gonna be showing your end user that makes more sense to store that in the cms. 

**Brian Rinaldi:** Ah, okay.

I get it. I get it now. So essentially all now it gives me, I don't have to call two different [00:30:00] APIs necessarily. Like I can just get a lot of that data straight from the CMS for at least populating the page content. I don't need to go to the shop, to cms, then Shopify for different pieces.

It's all, it all comes through the c. 

**Scott Fuller:** Exactly. Yeah. The example that I, in the example that I was showing, all of the data all came from the c m s. The only headless e-commerce piece. There was actually when we were going and calling the Shopify client to add any item to a cart. Other than that, all of the content is actually coming from the c M s.

**Brian Rinaldi:** Okay, that makes sense. So at that point it's just handling the cart and checkout process and all that stuff. And I actually, I've got questions about that part cuz it's been one of the pieces I've struggled with is that the, like, how, what is your experience in terms of the checkout process?

Do you, some of these providers allow you just to say, Hey, you know what, I don't feel like building that. Just send it. To them, and like the point at which you hit the checkout, you're going through a kind of a, an experience that you may be able to customize to [00:31:00] some degree, but then it's actually run on their servers versus, other ones like, or some of 'em allow you to both options where okay, no, I want to create my own checkout experience, so then I have all the APIs to be able to do that.

What is, what's your recommendation? Do you have or is it really just depends on what you need? I think it depends on what 

**Scott Fuller:** you need, depends on the platform that you're using. And it also depends on how much flexibility you have. Like I know for example, with a Shopify experience, once you actually get to the checkout page, it's pretty difficult to go and edit that experience.

So it might not be the tool that you'd want to use if you wanted to have a very. Checkout experience. It does get a bit difficult when you're getting into a lot of some of these e-commerce functionalities. I think the main goal should be to try and update more UI pieces and continue to have as much functionality be controlled by the platform itself.

**Brian Rinaldi:** Yeah. I, like I, I've built shopping carts in the past. . Honestly, if I could avoid building 'em again, [00:32:00] I'd rather never have to build it again myself. It's this is one of the things I love about the whole, like about doing development in kind of a jam stack methodologies. There are things that I had to do in the past, I've had to build like, login, the whole registration and login experience or an authentication and and or having to build a shopping cart, and it's Once you've built those once or twice, you're like, God, I really don't wanna ever have to do that again. It's much, I'd much rather hand it off to oh, let's do identity via zero or whatever, and shopping cart via Shopify, and then I never build it. . Yeah, 

**Scott Fuller:** exactly. I know for me it's a date picker.

That's one I never wanna personally build again. . Yeah, that's one of the great things about going headless is that we can, you can make it really composable and take pieces that you want from here and there. Say you're using like a search on your e-commerce platform that's coming from your e-commerce platform and you're.

Not really liking how that's functioning. You can pull in a different resource and have that within your front end to have all the pieces work together. So I [00:33:00] think that aspect of getting to pick and choose what works for your overall architecture and your overall experience is one of the huge benefits of it.

**Brian Rinaldi:** Yeah. That I hadn't really thought about. So most of these e-commerce tools provide some kind of product search. Is that what you're saying? That you can integrate straight into your. 

**Scott Fuller:** It depends that was just an example of one type of thing. Yeah. But if there's different functionality that it may not be serving you as it comes directly from the platform you're using, it's nice because you're able to go and add your own aspects into it rather than being really confined by what the platform has decided.

**Brian Rinaldi:** Yeah, totally. But it just made me think, like I, I hadn't really thought about whether they had the integrated search or not. I've always used personally end up using Algolia in the end for like my search and it works great. Which usually it's pretty easy to connect Algolia to like, to sanity and then like I've got, or Contentful and all of my content then would.

my products would be searchable, my content's searchable. [00:34:00] All within an integrated interface. Exactly. Yeah. Yeah. Cool. I wanted to ask you one li we have just a few more minutes. Let me make sure I didn't get any, miss any audience questions. Oh, yes, Derek, ask any thoughts on. 

**Scott Fuller:** Strappy.

Great question. I actually personally haven't really used strappy myself. I know that there is a lot of talk about it, and it does seem super interesting. I don't have much experience with it though. It is definitely a c M S product. I wanna check out more though. 

**Brian Rinaldi:** Yeah. It's not one I've used myself either.

I think so far my, all of my experiences via there been Sandy or Contentful. . And as I said I think those are, they're very unique in, in the way they do things. Like one of the things about like Sandy for those who haven't used here right, is you d you don't define in the ui.

You like, like actually have to sit there and define in code your, the different types of content you. and then it, it automatically will generate that whole [00:35:00] UI for you, for that admin, which is why like you can then customize that, right? I don't know if you wanna talk a little bit more about, about how it works behind the scenes.

**Scott Fuller:** Yeah, you hit it pretty much. Exactly. Where you have to go and define the schema and this type of data you want on a specific page within code. It's a very interesting aspect of working with sanity. I why I went from first working in Contentful and then moving to sanity and having to go and define these content models in code.

I hated. At first I was like, why would anybody go forward with doing this? But after getting over the learning curve, I actually have fallen in love with the amount of customization that you're able to do, and you're able to really drill down and figure out what sort of data that you'd like. It's also nice because it gives you a little bit more control from the developer side.

I know we talked a little bit about flexibility earlier, and that's one of the difficult things with. Platforms is often flexibility comes at the cost of usability. So sometimes if you [00:36:00] wanna make something completely fully flexible, it may end up being a platform that your end users don't know how to use it and they can't end up updating or entering content.

So I think it really is that balance of figuring out how to build things properly and having the control insanity of determining what those content models. rather than letting anybody go into the UI and define a new one, really helps to streamline some of those pages and components. 

**Brian Rinaldi:** Absolutely. One other thing that, like I always thought it's not necessarily important for everybody, but when it's important, it could be really important and it's hard to know upfront sometimes with whether this is gonna be important, is that, You can customize the validation, so and Contentful as an example, right?

Like every content type has a specific set of validations. It may only have one validation, is this a number or actually numbers allow you to say, okay, it can pass to be within this range, but then you, that's the limit [00:37:00] to like the amount of validations you can do. And so on with all of their different types.

It's like this type has this validation or that validation which you can enable. Whereas like in Sandy, you can actually write code that custom validates the content. So if you have a specific need for this value has to be within a specific range and has a whole bunch of customization.

Like I can actually write my own custom. 

**Scott Fuller:** Exactly. Yeah, it's great because you have that flexibility to add that business logic right? From the place where people are entering content. People aren't gonna ultimately be able to enter content that's gonna break your layouts or break your pages.

Yep. Yeah, 

**Brian Rinaldi:** it's really cool. I like both products. I've used them both in. and I think they're both great and everybody in the chat's mentioning some of their own we had the question about strappy. There was another one mentioning content content.ai content with a k.

But as another option, I honestly ha. Haven't used, I know of content, but haven't actually [00:38:00] gotten to use it yet. And it looks like all these different tools, like they're mentioning already have like connections to tools like Shopify. I don't know if there's any, are there any other, we talked a lot about Shopify.

It's the last question. Like what, are there other options that you're aware of that like people might look into beyond Shopify? Or do you just be like, oh, if I were recommending I'd stick with shop. 

**Scott Fuller:** No, I think there's a bunch of different ones you can look into. Like I know that you look at Shopify, you could look at Square Big Commerce.

So there's a lot of those big names and there's a lot of these different e-commerce platforms. They include integrations with different CMSs. But I always like to recommend to people if you. Aren't sure of what you're going be using. You're not sure which E-commerce platform and or c m s take a bit of time to do the research if you're looking to use them together, that they have some sort of integration.

Otherwise, that would be a potential big headed for you.