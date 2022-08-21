---
_build:
  list: false
  render: never
---

**Colby Fayock:** [00:00:00] High availability, infinite, scalability pay what you use. Wow. That's a lot of cool things. We all like to not have downtime and reduce costs. And I'm sure you've heard at least one of those things already today, but what are we actually getting ourselves? If I ultimately want to do a thing, I need a place to do that thing.

Traditionally, that's a server where through some PO posted forms or on page under, I might do some processing or work based off of user input or interaction, but you already know where this is headed. We're trying to avoid our servers. We want serverless. So how does this work? We're going to talk about how we can manage our media and particularly how we can do that without a.

So who am I? I'm Colby. FAOC, I'm the one hugging BBA. And Kyle ran over there. I work with the dev community as a developer experience engineer at [00:01:00] Cloudinary. You can find me pretty much anywhere on the web by just Googling my name as I'm the only one in the world. Now, as you might imagine, given this talk in my world, the thing I usually want to do revolves around media.

And when I say media, images and videos, and let's not forget our audio friend that often gets let out. Now, if the thing I want to do is manage my media. I also wanna figure out a place to do that. And if that's not server, where actually is it, that's where serverless comes in. My goal of this talk isn't to teach you about serverless itself.

Hopefully you learned a bit about that from some of the awesome talks today, but my goal is to teach you about how we can solve problems in the serverless world to do that. We're gonna use serverless functions, which is going to be the place where we do our media management work. It's likely the most popular type of serverless capability, but let's briefly recap what are serverless function.

You can think of it like any function you would write in your code, you have your optional input and output. You can also perform any kind of side effects you want, as long as it fits within the environment and the time limit. Ultimately, you just need to perform some kind of [00:02:00] response by firing a callback and basically declaring whether it was successful or not.

We have a lot of options for how we can deploy this function. Using typical cloud services like AWS GCP or Azure, we can deploy functions and set up services to invoke those functions. But usually this is set up to work alongside of an endpoint where that endpoint would actually hit that function. And usually you need to set that kind of thing up manually when directly using services like AWS, but.

What I find more interesting or at least an easier route are services like Netlify and Versace that abstract away, the need to manage all those pieces. All you need to do is set up your function code in a file and they deploy the rest. We can very easily scaffold new functions by simply creating file in our project, in the right directory.

By default, you can add your files to an API folder. The default folder does vary by platform, but then we use file based routing, which then makes the function available at slash API. Then your file name. So in this example, we have here on the screen. If I have my function dot JS [00:03:00] inside of my API folder, this is going to be available@mydomain.com slash your provider's API route slash my function.

At this point, I can really do whatever I want in this function, within the scope of the resources, a. So here I'm just simply passing back a message that says, hello. Now I'm a big fan of N JS, which provides serverless APIs as part of its tool set. If you're deploying to places like Versace and nullify, you're really doing the same thing.

The biggest difference is where the files are located, where inside of the next JS project, it will be available in pages slash API. Now, if you prefer, you could just as easily move the, to the folder configured for your favorite platform like that API folder we were talking about, you would then just need to likely use the platform CLI for local development instead of the next Jes development flow and how you reference that API might change a little bit given it's not as fully integrated into the, to the framework stack, but ultimately either way, you're deploying a serverless function as an API to that platform.

So back to our super complex diagram, we've already defined what we wanted to. [00:04:00] And now we define where we wanna do it. So now let's talk about managing our media inside of serverless functions. Most serverless providers support a few different run times, including no JS go Python and Ruby, but given we're in the next JS world here, and generally I'm a Java Des guy.

We can stick with no JS where then we can start using the Cloudinary note SDK to perform custom. and just to quickly note, if you do prefer other run times, Cloudinary has SDKs for each of those languages. So just so you don't feel left out, we do have Ruby Python and. But in node, we can start to import our Cloudinary module, configure our account by specifying our cloud name, where then we have full access to do whatever we want.

We're there, here, we're simply generating a URL by passing in a public ID, but this can start to be handy where we're doing this programmatically or more. So when we need to make secure requests, that requires sensitive information that we don't want inside of the. that's where using serverless functions really shine inside of this stack, where we can configure our API keys and secrets for our [00:05:00] Cloudinary account, allowing us to make signed uploads or perform any kind of action that requires authentication.

Like here I'm taking image data that was posted at this endpoint and passing it right inside of the cloud uploader, returning the results of that upload and essentially creating a secure proxy that I can now use within my applic. Now as another quick aside, if you're wondering about security around that, by default, the functions do not add cores, headers, meaning you can't make a cross origin requests that said you wanna make sure that your requests are only made from an app level, if they have the ability to do such as having some kind of authentication layer that checks, if it is an authenticated session, making that request.

Now, just to visualize this a bit before we move on, we're starting off inside of our next as application, where for all I intents and purposes, we have a react app. Once it hits the client inside this app, we can make client side request or our endpoint, which is where our serverless function comes in.

We're able to execute that serverless function. We built running anything we include inside, like running our cloud, earning SDK, [00:06:00] where we can upload and manage resources or do whatever we. once our tasks are complete. Our endpoint returns a response, including an HDP code describing whether or not it was successful, which lets our next a application handle that response client side, continuing on with whatever action our visitor was performing inside of the app.

But now we can take that to another level we utilizing cloud. We get a lot more features available to us on top of that simple upload. For instance, maybe we wanna customize our upload per. Such as self-generating a public idea, if I'm using my own convention and providing tags. So I have a San way of finding my images out of potentially thousands.

You could even set custom access controls, requiring usage of images to provide an authenticated token along with a variety of analysis options, to take a deeper look at your. But we're going to look at an example of how we can utilize add-ons that extend the capabilities of Cloudinary here in the snippet.

We're using two different examples of add-ons that we can use removing the background of [00:07:00] images with cloud AI and auto tagging with Google. First using AI background removal when uploading an image to cloud with background removal enabled cloud Andry will kick off a process that uses AI to intelligently remove that background.

Once complete, you can set up a notification endpoint to trigger next steps, or you could pull the resource until you see a completed status inside of the response. And while Keanu works really well as a. This becomes more interesting in other U CA use cases like eCommerce, where we can take a single well photographed product, and we can change the backdrop in which is presented, whether that's a simple background color to match the UI, or if we wanted to put it in an environment that's outta this world, we can also use Google's auto tagging auto tagging out on, which has a version available for both images and videos.

Might I add that lets us process our images using Google's vision AI to automatically add tags to all of our. This quickly becomes critical when managing huge libraries of images, where it can be very difficult to find a specific image. If you [00:08:00] have absolutely nothing to search on, rather than just a randomly generated ID or applying this to applications, maybe you wanna give your visitors a way to search for their own media or show related media based off of what they're currently looking at tagging can eat up a ton of resources.

If you're trying to do this manually with your team where you can get a pretty quick win with a add. But pulling this all together, we can provide a wide variety of capabilities and controls to customize their uploads, to work exactly how we want them. So what does this look like in a real world application?

So if you've been to some of the dev conferences within the past couple years, such as this one, there's a chance that you saw cloudy that was sponsoring. If the event was in person, we typically have a booth, but we wanted to do something a little bit more interesting than just us sitting behind a table.

So we built cloudy. While there's a million different applications we could talk through. I built this as a way to try to recreate filter oriented apps like Instagram and Snapchat. The idea being you take a picture of yourself with your own device, webcam immediately get access to a [00:09:00] wide variety of Cloudinary tech to customize your photos, whether you wanna deal with it or pretend that you're Darth Vader on what actually appears to be a.

While the application might seem like it involve a lot of complicated features to make it work. Really the most complicated part in this is the local state management next, is the portal into the react application makes this pretty easy. If we're dealing with the front end and using serverless functions for proxy media requests, we can let cloud handle a lot of the heavy lifting with its wide feature.

to get started. We wanna be able to snag a picture using somebody's device. We can use react webcam, which allows us to use the native browsers device, the native devices, browser APIs, inside of react. Once we snag that picture, we can set it into state and show the still instead of the live feed. At this point, we have raw image data inside of the browser.

Cloudinary likes raw image data. So we can forward that data right along to our end. in this example, anytime the image variable changes, which is what's storing that data, our use effect hook [00:10:00] fires, often in asynchronous function here, we're using a self invoking async function, which then allows us to use the ay waste syntax, which it's just a per bit of a personal preference, cuz you can absolutely chain on it.

Then at the end of that. But inside we have the fetch API that we post to our endpoint. Again, passing that raw image data that's stored in state. We'll get to the endpoint in a second here, but then we can grab that Jason response. we can then take those results and use react state to store that data, which here's a quick look at the results that we get from a Cloudinary upload.

Primarily in our use case, we're interested in the public ID and the cloud secure URL. This gives us our ability to reference our new image, but if you notice we're setting those results as the main property, this is allow us to get both the full image source, as well as having another image with the background removed.

So having those multiple options and pulling on that. We're going to do a very similar thing here now, where this time we're waiting for our state data to update specifically, we're waiting for our main image data to be available. And [00:11:00] once it is available, we're going to fire a similar post to our upload endpoint.

Only this time. We're additionally passing some options that we want to remove the background using Cloudinary AI, along with our original cloud upload, as the, up as the new source, we can simply pass the URL this time into the Cloudinary uploader, because it also takes in remote sources making us having to reduce that additional upload.

Now the tricky thing is our response object. This time will give us a new image, but our background removal status will only be pending. So we have two options here, which we alluded to before. We can either set up a notification URL by creating a new serverless function, which cloud Andry will hit once it's ready, or we can pull the resource.

Now in my case, I used the polling technique from the client. This code would follow immediately after the upload we saw on the previous slide, where we take the resulting image and start to check its status by requesting the resources details. This happens in a new serverless function API that I created that specifically returns the resources details with this recursive function.[00:12:00]

We keep checking if it's still pending, but each time we're getting response that looks similar to our upload response. But this time, we're waiting until we see a status to complete. And once it is complete, we resolve that status check and continuing on updating our local state. Now, at this point, we have two images uploaded our primary image, which is an upload from our webcam and we have a transparent version, but now we're interested in adding some effects.

We're at this point, we can be really as creative as we want. We have both the full library of default transformations that CloudNet provides as well as really being able to make up some fun ones of our. like adding some, dealing with it. Glasses deal with it. Glasses using cloud area, face detection. Here, I'm just using the simple gravity or the focal point that we can then add the glasses on top of, but you can also take this another step using the advanced facial attributes out on, but then we can add a background from the office or scratch that.

How about that? This is fine meme where, since we have the transparent image, I can add this as an underlay underneath the BA the image. [00:13:00] So we're adding it as a background, right? Followed by adding myself in a frame that was on the door of front. This one was actually tricky because not only did I need to use face detection for the glasses, I needed to detect the face of the person and then set up a crop that would center my face within that frame.

But once we have our finished piece of art, we want our visitors to share their creations. The cool thing is next JS is this makes it really simple where we could probably use something like SSR or server side rendering, but we wanna do this statically and use on demand generation so we can make a realtime request to anything that's available in our cloud and build it with a page.

so technically we could probably send them our existing public ID maybe include the transformations as URL parameters, but that turns into one big nasty URL. Given what we just went through, we can just as easily upload our image again, and then pass that public ID to the URL, making that sure. URL much simpler and less prone to break when getting.

So back into our code, [00:14:00] we're using guest static props to statically compile our page. This allows us to grab our parameter and use the cloud SDK to pack pass back our resource. Now the tricky thing here is when you use Git static props, you're typically mapping out all of your paths inside of Git static paths.

So next JS knows that the path actually exists, but we just created that public ID. So we don't know that it exists yet, and we really don't wanna run a whole new build just to build that one new page. So instead, we're simply going to say that we don't wanna pre render any of the paths and we wanna make sure our fallback is blocking, meaning that we're going to fulfill that request.

After the new page is generat. This will save us some time on build, but it'll also gives us the ability to build out that new share page on the fly with our new public ID and fun fact, if you're actually doing this on nullify, this happens via an on demand builder. That is a serverless function. Now back to get static props.

This works by using file-based routing where our file route is a dynamic route. We're saying here that in our brackets in a [00:15:00] name that the public ID is going to be a, our parameter. When next JS sees that in the URL, it uses it to build the page by passing it to our data fetching functions, where we can then load up that data.

But with that, we have our image and we can create an experience that makes it a lot of fun for people to actually share their results. So now it's time for a demo where we're going to see how easy it is to spin up cloudy inside of a serverless function. So we're going to bootstrap a new next JS project.

We're gonna create a new API and we're going to see how we can work with our media using the cloud notice DK. So let's go.

All right. So we're gonna start off here inside of my Cloudinary account, where I'm going to head over to my media library and we can see that I uploaded some images to start. And really this is just going to give us a starting point so we can see how we can work with these images, pull 'em into our application, and we're gonna do that with serverless functions, where particularly I'm going to use N AEs to see how this works, where.

Don't necessarily have to use [00:16:00] XGS it's just an easy way for me to get up and running with an application and a serverless API. And to do that, I'm going to run yarn, create next app. And I'm going to say more serverless as my project name, but what's going to happen now inside of the background is it's going to.

Pretty much pulled down the default next JS starter from GitHub or wherever it's stored. And it's going to install all the dependencies as well as reset GI history. And basically just gimme a starting point. So I'm gonna CD into that new directory. I'm gonna run yarn dev, just so that we can see what we're starting with.

We're gonna see that in the background, it's going to start to build this page and we have our new next JS application. Now the starting point, we wanna look inside of the code so we can see here that under pages slash API, what we're interested in is not co-pilot, but we're interested in this hello endpoint here, where by default, next JS gives us the serverless function that we can start to work with.

Now, if I run yarn dev again, and I actually try to go. API slash hello inside of my [00:17:00] browser, because we use the file based routing. We can see that we get our name of John DOE, just like the response inside of this function. Now we wanna create a new endpoint. I'm gonna call it resources because ultimately we're gonna return resources.

I'm going to make this an ay function because I wanna be able to use the ay away syntax in there, but just to make sure that our new endpoint is working, I can hit slash resources. And we see that is indeed. So now that we have our new serverless API endpoint, and literally all we did was create a new file with that simple handler code inside.

What I wanna do is start to use cloud area inside of this serverless function so we can see how we can grab our media. So to start, I'm gonna head to my terminal and I'm gonna run yarn. Add Cloudinary, which is going to install the node SDK. And we can see all the documentation for the node SDK, right on side of the Cloudinary docs, where we can see exactly how we wanna install it and set it up.

And we're gonna use particularly V2 of this library. So if I head back to my code, we can see that it's already installed. I'm gonna run [00:18:00] during dev again, so we can not have to worry about that later. I'm gonna say, I want to import constant Cloudinary. We're gonna set that equal to require Cloudinary.

We're gonna use dot V2, which is going to give us V2 of the Cloudinary library. Now, the only other thing we need to do in order to configure cloud area is also specify our configuration. So I'm gonna say Cloudinary dot config, where we're going to pass in an object and to. All we need to do is pass in our cloud name.

And I'm gonna add my cloud name of more serverless, where you can also get that by going inside of your dashboard inside of your account. And you see the cloud name right at the top there. So you can just copy that. Pasted it into the cloud name value, and now we have access to start using DSDK. So to start, let's try to actually just grab a URL of an image and pass it back inside the API.

So I'm willing to use constant URL is equal to Cloudinary dot URL. And here, what we wanna do is pass into public ID of the image or the resource that we want to. [00:19:00] So I'm gonna head in, go to my media library and let's choose this mountain with the sky, cuz I think this is pretty cool looking. I'm gonna grab that public ID at the top here.

I'm gonna add it right inside of that URL right there. And I'm gonna pass back the URL this time instead of John DOE. So if I head back to my browser at resources and I. We can see that we're now generating that URL by that public ID. We can see all the there's not currently any parameters, but we can see that it is giving us the exact URL structure that we need just by passing in that public ID, as well as our configured cloud name.

So if I open that up in a new browser, we can see exactly what we'd expect. We do have our new image that we would just pull from the. Now let's take that a step further. I don't wanna just grab that one URL. I wanna grab all of my resources inside of my account. So if we head back to the note SDK and we go to asset administration, I can scroll down where particularly what everyone would do is I wanna list my resources and we can see that we can [00:20:00] easily do that.

I scroll back up to or down to wherever that was. We can see, we can use Cloudinary dot API dot resources. Now, remember we're already using V2, so we don't have to specify that again. So all I need to do is use cloud dot API dot resources. So if I head back in, I'm going to say constant resources equal to a weight, cuz we're gonna be making a request this time.

Cloudinary. API dot resources. Now there's one thing we need to do. In addition, when we were just building that URL, we were just doing something that we need the cloud name for, but because we're actually pulling in and using the admin API to request these images, we need to add further configuration for our actual account and particularly.

We need to add our API key and our API's secret. Now, even though I'm just doing this for the demo, we wanna make sure we're always secure with these values. So I'm gonna add these as environment variables. So I'm gonna say process dot ENV dot Cloudinary, API key. And [00:21:00] process dot EMV dot Cloudinary API secret, but then we're gonna define those inside of our environment variable file.

And to do that, we need to create that file in the root of our project dot MB dot local, where I'm gonna say my API key. And my API's secret and we actually need to grab these values now from cloud nine. So if I head back to my dashboard, if I get out of this back to my dashboard, just where I was with my cloud name, we can see, we also have the API key and the API's secret.

Remember to first copy that key, paste it in as the value, and then the API secret and pass that in as the. Make sure I save my files and now if I restart my server, because I added those new environment variables, I have to restart my server. We're gonna be able to now take these resources and pass them back in that Jason response.

So now if I refresh that resource, we can see that not only do I have that URL, I have all those resources, including all the pictures. [00:22:00] Like the waterfall or the mountain or the city. Exactly. All those resources that I had inside of my late media library are now being returned in that response. And this works for everything.

Whether you wanna return all resources like I'm doing here, or if you wanna search for resources, really, you can pick how you want to get those resources and return 'em and do whatever you want to manage your.

Cool. So we saw how easy that was, actually guess me spinning up a new API, super simple. We even saw how quick we were able to get up and running with the Cloudinary note SDK and effectively manage our media. If you wanna learn more about how to work with the cloud note, SDK, the docs have a bunch of examples and everything you need to get started.

If you head over to space jelly.dev, or youtube.com/colby FAOC and search cloud area, I also have a bunch of use case driven example. As well as a new repository with a bunch of straight code examples using cloud iron projects more to come, and I'm also taking requests. And that's it. If you wanna learn more or chat about [00:23:00] the talk, you can find me everywhere at Colby.

FAOC also tweet out some of the links you've seen here today. Thanks everybody.

**Brian Rinaldi:** Hey we're here with live with Colby. We're gonna get to Q and a. So if you have any questions for Colby, please throw them in the, ask a question module and we will get to them until then. I have a few questions of my own Colby. First of all. I'm yeah, I'm curious about, so I had this idea watching, cuz I'm looking at all this cool stuff that you can do with removing background, adding filters, blah, blah, blah.

I have this idea. Tell me if I'm crazy. The idea is I want to do some of that, but using some of the AI to generate artwork and then use, and then maybe integrate that with cloud Mary, somehow like to do so you could basically like use that then overlay some header image like for blog images that are generated by what's the AI that generates all this

**Colby Fayock:** artwork and stuff like that.

So there's Dali and there's mid journey. At least those are the two of the ones [00:24:00] that I'm aware of that are on Twitter, but I love where your mind's at. Cause my mind's totally there as well. I I created this proof of concept where I generate blur hash using a custom function. Insert that into the Ry pipeline.

And I'm thinking I can do the exact same thing, cuz ultimately we can run a custom function, a custom serverless function and say, take this input, which is the image or media data. And then you can do whatever you want with it and return it. So why couldn't you use something like Dolly, your mid journey.

Now the only thing that has stopped me from creating a proof of concept like that is just, I. Found an API to use. I think mid journey is limited to discord and I think Dolly just doesn't have the API yet. I might be wrong, but I was only be able to poke with it in the UI.

**Brian Rinaldi:** Yeah. I think Dolly, you have to sign up to be on their waiting list to get access to the API.

Which I think I did and I have not. But if I did, I haven't heard. I'm pretty sure I did. Cuz I'm like there's definitely, I think serverless even is the way you could, obviously, as you mentioned, you can integrate a serverless [00:25:00] function to do that. So that's the way you could mix these two technologies together.

I was like, oh, what if, obviously the dumb example would be like blog, headers or whatever, but like on CFE we have all this artwork and not to put any. Are this outta business, cuz I have that all custom made, but , but I'm like, oh, I could save myself a little money and have Dolly generate art and put this stuff based on the titles.

And

**Colby Fayock:** And it's funny cuz I don't know if you've heard of Axios the the news thing, like I'm on newsletters and they literally had a section about that yesterday or day before where they were talking about how their journalist visual artists were talking about. The AI generation and, comparing what they would do in the newsroom compared to what these generation tools would do.

So it's really interesting to see those worlds melding together. Absolutely. And personally,

**Brian Rinaldi:** Even if it's just blog or article headers I would be glad to, I think there's one header of this guy with his he's working on the computer and he is put his hand on his forehead and looks frustrated sitting and I'm like, [00:26:00] That has been used in probably 2000 blog posts.

stock photos. I see it all the time. It's free. It's a free, it's a free one. I think that's why everybody use it.

**Colby Fayock:** As long as the AI is trained on just a stock photo site. I think we're good to go.

**Brian Rinaldi:** exactly. You end up with the same airway is up with the same photos generated by Dolly once we're all using it.

Another thing I wanna talk to you about a little bit, because You use, I noticed you use N JS. So I wanna dig into a little bit about your use of N JS, particularly like of some of its serverless stuff. Cuz we haven't really talked about that much in this session yet. And it's been brought up here and there, but can you tell people a little bit more of like how next J integrates automatically with serverless and I think, and also it does some edge stuff as well.

**Colby Fayock:** Sure. So in terms of like integration, it I'm thinking about how I wanna word this. So it's not confusing, but so like it's as part of the next JS tool set, whenever the platform deploys an X JS project is deploying [00:27:00] these functions as API endpoint. So I like to reference like actual like AWS or whatever your cloud provider of choices to connect the dots.

But so you have a serverless function and you have the services that allow you to invoke that function now Netlify and Versace and those kind of tools. Automate all that. So you don't have to think about it. So all you're doing is taking your serverless function, putting it in a file, and you're able to deploy that on their services.

And you now have an API endpoint that invokes that function. Now part of next JSS tool set is that it gives you that ability to create it, that developer experience, which then you can just easily integrate into your front end application, which for all intents and purposes is react app at that point.

But ultimately you're building an API. That may or may not have anything to do with the N X a app itself, right?

**Brian Rinaldi:** Yeah, it is. It is. I think NEX a kind of. Simplified things in a way that a lot of other tools hadn't yet, and it's now become a standard. Just even in the way, before you could throw like [00:28:00] on AFI, for instance, you could throw stuff in a folder and it would work, but it was all had to have mappings and so on and so forth.

But next day I was just like, Hey, just write the code, put it in a function. It's it knows what to do with it at that point. Yeah,

**Colby Fayock:** it's just that more, keeping on incrementing on building like a more fluid developer experience, right? Like it's these little things that help us just make it easier to build applications.

Yeah, definitely.

**Brian Rinaldi:** And we've also talked a lot about like edge stuff, and I know, you and I were chatting a little bit a moment ago that there's not necessarily like a Cloudinary edge, although I'm assuming the images are served from some kind of CDN of some sort like media server edge. But there's not like a serverless edge per se.

But we were talking like, you could still like maybe do some custom imagery that's running like at the edge, do some customization that actually involves images, not just swapping out text at the edge with the

**Colby Fayock:** SDKs. Yeah, absolutely. And, going back [00:29:00] to whether it's net five or sell whatever your favorite serverless platform is like the cool thing, because they support that edge.

Like you can really do anything you want. So for instance, I can serve whatever image I want based off of the input and output of that serverless function. While I know a lot of people like to think of the. The flag based off of where the person's located. What if you take that and apply it to something like e-commerce or maybe Netflix that everybody probably knows of where maybe you wanna show a different image or a banner based off of where that person's located.

So we can see where that person is. And we can return a cloud near URL that will ultimately serve that cloudy image. And they'll be able to customize it towards that. You can extend that to things like maybe AB testing, where you're controlling that those experiments so that people can do that. Or, even a higher level of personalization to make sure that visitors are getting something that is relevant to them.

But because we have that processing on the edge, you can really do whatever you want. You can shoot whatever cloud your URL, and you can even customize those parameters on the fly with cloud air. You're just having the orchestration of that image. [00:30:00] Come from that serverless. That's a good point.

**Brian Rinaldi:** I, in AB testing is one of those things that I think like edge stuff is cus it's like it's made for that.

Because currently a lot of, in a lot of cases with AB test, you'll find there's client side libraries or they have to do you either have to do server side or you have, or comes with a client side library that then has like a flash of content. And if you're dealing with images, A hundred percent gonna mess up the experience because you don't, this is not like some little text there, like hello, Brian, at the top of the screen that I'm swapping out at, client side, this is a key element of the page, any of that media being images or video, whatever.

And it seems like that would be critical to like, be able to do that at the edge, as opposed to have to choose either service side rendering or client side, swapping

**Colby Fayock:** it. Totally. And one, one simple example, a company that I used to work for, we had to legally, legally [00:31:00] and logistically have different sales depending on the country, right?

The United States had different shipping and things like that. So we served different images. Now we didn't use cloud area there, but imagine being able to detect on the edge, which country they are and deliver that promotion based off of where

they're

**Colby Fayock:** located, it's just going to make it easier rather than having to use some client side service, which we used that added more low to the page.

Made things more complicated. Yeah, I think, I

**Brian Rinaldi:** think this kind of move towards removing some of that client side code and pushing that onto either a serverless function or, even an edge function is really a good shift that we're seeing in the community now. Cuz it doesn't always, hasn't always made.

Great experience for the users. And when that stuff happens, client side, it's slow. For sure they have to download that.

**Colby Fayock:** Yeah. And not to mention it's not only just a shift, usually you can have a simpler code flow, right? Like inside that function, as opposed to having to load all the JavaScript needed to make those [00:32:00] transformations in the actual Dom.

Yeah.

**Brian Rinaldi:** So you showed some of the, these filters and stuff. So tell me some of. Can you tell me some of your favorites? Cuz I wanna do some like experimenting or some. What are some of your F like obviously you like the sunglasses. I get it, but there's gotta be more than just cuz swapping in sunglasses.

What are some other cool like clearly you have a lot of creative ideas. Where are some other cool creative ideas we can do? I think I,

**Colby Fayock:** I like. The Dali mask, particularly the money heist if you've ever seen that movie Casa de papel if in Spanish, but anyways the nice thing is like a lot of these are just custom creations.

So particularly overlays where like you can provide whatever mask you want. We just use face detection to. Plop it on the location so that it can be dynamically added to the image, which in my opinion is super cool. And one of the compelling reasons for it. There are a lot of baked in filters and color changes and things like that, but it's really the creativity of the developer that I think makes it such a cool thing to [00:33:00] be able to build into your application.

Like the photo filters. Yeah. Now you're

**Brian Rinaldi:** relying on my creativity and that's a problem. . Okay. Getting back to a little bit about, so I want, I wanna ask you again about next JS, specifically returning to that topic. So have you tried, is N JS really like the one you cuz you I've seen a lot of your talks and you talked a lot about XGS.

What do you think about some of these other, have you tried like Astro or any of these other tools that kind of. Taking on the model of next JS and taking some different angles to it, or you really like you're next JS all the. It's

**Colby Fayock:** been a while since I've used some of the others, like for a while, I was a big Gaby person and Gaby's still perfectly fine.

I just once I got on board, the next asked train, like I just, I haven't found a compelling reason to switch to some of the other frameworks. Not that they don't exist to be clear. I know I still need to try spell cuz everybody tells me that's just so amazing. But I don't know, actually, yes, I really enjoy the developer [00:34:00] experience and how they build their APIs close to the components and.

The way that they're moving forward with the project. So I've really enjoyed developing in it. So it's just something that I keep sticking in. That said, like Astro, like I, I tried that out when it first came out and it, I, it was really cool and promising, I haven't really given it too much of a shot since then, but I'm excited for the future of it.

So it's, it's a developing world and I hope there is more healthy competition between all these frameworks as things. Yeah, definitely.

**Brian Rinaldi:** I have toyed a little bit. I've done a lot of next JS, two I've toyed, a little bit with spelt kit. I really did spelt and and as well as Astro, I've done a bit with Astro and I guess one of the things is at least in my experience, you could pretty much do.

A lot of the similar things like deploying serverless functions as critical to this, what we're discussing here in each of those. I think we're not all of them have necessarily like edge stuff built in, but some of them do I know net, I was here talking about the [00:35:00] adapters for Astro and other ones that you, that actually will deploy like SSR to the edge, which is a really cool thing.

I, I think, I don't know if you. Tried have you done much edge stuff at all, or you since you're like, you're all about images. It's not so much

**Colby Fayock:** no, it's funny, like the edge, like I'm fully aware of, the direction it's going and everything, but I just haven't spent too much time building out content around it just cuz I don't wanna create another, here's a different flag depending on it.

Like I wanna come up with a compelling use case for it before I build content around it. And that's usually when I start to tinker with things more finding good, compelling examples to show people why it's so cool in the context of the things I work. Yeah,

**Brian Rinaldi:** for sure. And it's not, it may not be that like, for particularly when you're trying to like, serve up in like large media files, maybe, I don't know if the edge like plays as much of a role.

I think it can, but I haven't to, I'll be honest. I haven't tried it for that either. Right now. It's mostly yeah. Simple content workplaces or redirects [00:36:00] or other kinds of personal relations. Yeah very cool. Cody's my boss, Cody and Kobe Cody. Kobe is so good to have you here again.

Thank you. I always love your talks. They're really great. Very entertaining and I love the, I loved the demos. I was joking that I. I need to have the, this is fine superimposed over my image right here. Especially with me calling people the wrong name or having my mic on mute.

They're not gonna invite me back to my own event pretty soon. Anyway, it was great having you here col thanks so much for thanks for

**Colby Fayock:** having me for being here and.
