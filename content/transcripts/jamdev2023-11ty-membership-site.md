---
_build:
  list: false
  render: never
---

**Stephanie Eckles:** [00:00:00] Thank you so much Brian. And hello everybody at the Jam. As you can see, we're gonna be talking about building a membership site with Eleventy, and I have a few assumptions going into this presentation first that you have at least beginner familiarity with Eleventy that you can write HTML and CSS. that you've worked with, non framework JavaScript, so in other words, vanilla, JavaScript.

And I just also wanna give you a heads up that we'll be moving pretty quickly in this 30 minutes. So definitely check back with the recording later if this is a topic you are interested in. So what do I mean by a membership site? Let's scope our project to a few goals and then we'll get going. We want to authenticate users and provide members only.

We'll also offer partial content [00:01:00] previews to unauthenticated users. We'll be building this with Eleventy Netlify edge and Supabase, and again, no frameworks or bundlers, just vanilla js plus a little bit of Deno on the edge. The project requirements for a successful build include Eleventy v2, the beta that was just released last week.

A Netlify account, the Netlify cli. And a Supabase account, which you'll need because of our user authentication functionality. Now I do have a lightweight theme prepared. So first we're gonna glance at that theme setup and then we'll get into building the membership features. . All right, so here's our lovely theme.

Possibly inspired by trends of the day, and a pretty slim Eleventy build. Just a couple things to point out here. I've customized our input and output directory, so we're gonna do all our work inside of the source directory. And then I like to add the layouts as well for just a bit of extra [00:02:00] organization.

And then also, since we're so tied to Netlify and we're gonna be using the CLI, we wanna make sure to customize the dev command because we have a little extra processing going on in our start. And we don't want it to make an assumption once it's used that Eleventy is being used in our project. Otherwise the build is pretty slim.

Right now we just have a post directory that's gonna be key later. That's where we're gonna have all of our posts for our members only content. And then as you can see, here's the initial look of our site in the browser. I have it flipped to the dark mode for this theme, and then a little preview of what we're working with for a very simple post template.

So let's review a couple of the required setup items within Supabase and netlify. For our Supabase setup. Once you get an account, you're gonna wanna make sure to allow new users sign up. This is actually on by default. The other setting to adjust on this page is to extend the expiring [00:03:00] limit to the maximum of one week.

So in other words, users that log in on our site are gonna stay authenticated for up to a week. We also want to go over to the authentication and u R L configuration and make sure to change your site, URL to your production u r L and a somewhat recently added feature is to add wildcards for both your local host and netlify deploys.

This is important because as we build both locally deployed to netlify, whether that's our production or branch deploy, we want our authentication to be able to redirect to the correct environment. Then within project settings for your Supabase, you'll wanna get your project URL and the public API key and go over to Netlify and we're gonna create environment variables for the Supabase.

Meaning your public key and the u r url, that's all of the setup that we have to do within those two accounts to get started. [00:04:00] So let's now look at actually initializing the lowest level of authentication that we can do a Supabase, which is Magic link authentication. So back over in our project, I'm gonna apply a few updates that we'll walk through.

Okay, so you can see that our site has updated a little bit here since I had it running and we now have a login form. So what's powering that? What's gonna happen with that login form? First of all, those environment variables that we just discussed, we need to bring those into our project.

And I'm doing that through the idea of elevens global data. So I have this environment JavaScript, and we're just simply pulling those in and exporting them back out. By the way, these are made available because again, I'm running the Netlify CLI locally, and because I have those in my Netlify account, that gets pulled in automatically when I do the CLI.

I don't have to manage those in both places. [00:05:00] Okay, so now that we have the environment and variables available, let's take a look at this login. that's gonna be in the, includes my components, and here's that login form. As you can see, the markup's pretty basic. We just have an in email input field, and then a button to submit.

And the key here is of course, the little bit of scripting that's happening. Now we're keeping things simple. I mentioned we're not using bundlers or anything to manage our JavaScript cuz we only need a couple functions anyway. And so we're able to get by pulling in the Supabase via CD n and then we have something that might look a little unfamiliar.

So we're taking advantage of Nunjucks Templ to include the script resources. So I have a couple here this Supabased one and then a login. . Now that Supabase one is actually additional Nunjucks code. So remember how we just created our environment variables as global data? Now we're using Nunjucks templating to pull those [00:06:00] in, and this block ultimately gets rendered as JavaScript code because it's within our script tags.

So that's step one, getting our, essentially our URL and our public key. And then let's take a look at what's actually happening in the login form. JavaScript. . Okay, so basic submit listener here on the form, which when it happens, we're gonna take that submitted value of their email and we're going to send that off to Supabase, which this is the only function that's needed from their a p i to trigger that magic link authentication.

And then we'll give just a little response to the user. So let's demo then what what's gonna happen after that? And I'm gonna do this part off screen, but you'll see our little feedback message and then I'll show you what actually happens on our site. After that magic link is triggered and somebody has clicked through from the email.

Okay? So I've done that, the [00:07:00] click through on the email, and what's happened is that Supabase is gonna save this local storage token. So normally at this. for a static site, you would maybe think you need to get a spa involved, like a next framework, right? And because you would need more client side JavaScript to continue managing what happens now that we have an authenticated user, but this is where edge functions are gonna come in.

So let's review what that means and then we'll learn how to use them. Our key partner in this is Netlify Edge. And what is Edge? I'm gonna give you a really high level summary. Okay. So Edge is low latency nodes geographically close to the user. This means practically speaking, that we get faster processing when you're using edge functions versus serverless.

And we can get user specific data, like their time zone or pull out cookies. It's essentially middleware to intercept page requests. [00:08:00] So this is gonna happen. Edge functions are gonna happen at the top of the page request before content gets sit down and delivered to the user for the page. So this lets us redirect or modify in your requested content for that page.

And just a note here, that Netlify Edge specifically is going to develop functions using Deno versus. . So the part that we're interested in doing is authenticating users on the edge. So you can use edge to authenticate pages and routes and to protect private tokens, again, via our environment variables, and also pass data from the client side via cookies.

that's great. But we are in Eleventy and Eleventy includes a Eleventy edge plugin. This lets us access any of the data that we create within an edge function in our Eleventy templates via this edge short code. This requires Netlify CLI V 10 [00:09:00] plus. Again, that Eleventy v2 and you also opt in from the config file. This is not a separate plugin install, so we will cover what that looks like.

But first, let's see how this really comes into practice for the authentication flow of our user coming in and getting authenticated on the. So you've already done this first couple of steps, our user can enter their email and trigger login. That's ultimately gonna happen either on the home index or a in individual post.

And then we saw how Supabase Auth is gonna send that magic link to the user's email. And this is where we're gonna change things up just a little bit for our next phase. So we are gonna have the user return through their magic. and specifically hit a page we're gonna call session On that session page.

Supabase is gonna do what we already saw. It's gonna save their session data to the local storage, but we're gonna add an additional script [00:10:00] SE session js that picks up their session variables and redirects them to the access route. That access route is what's gonna finally load our edge function, our login edge.

And this is going to save an access token cookie. Why a cookie? As I mentioned earlier, edge functions can read cookies from page headers. So that's how we're passing client side data into our edge function. And so we'll be using that to validate their session. And once all that happens, this is all just their initial login process.

The user will be redirected to the originating page. So the page they triggered that initial login from. . Cool. So let's move on and show the different steps that we're gonna incorporate to get that edge authentication. So I'm gonna apply a new set of changes here. We didn't really see a change for our login form.

It's gonna look virtually the same. So there's some behind the scenes changes that happen this [00:11:00] time. The first one is that within our login form script we were just passing email and that was sufficient for the first phase. But this time we're adding in this options parameter and we're going to have that magically come back, hit that session page we're about to create, and we're also gonna save our own query here to know where did the user come from.

So that's gonna get passed through back to us, ultimately to our edge function. Cool. So what does that session page look like? We want it to be as lightweight as possible. We don't wanna load this up into our regular Eleventy layout because we don't wanna load all the theme styles and everything. We want this to be very quick.

Ideally the user should be on this page for seconds, if less, if not less than that. So again, we're pulling in the Supabase via a p i because we need to authenticate the user on this page. We're getting our environment variables, and then we have our [00:12:00] new script. So what's happening there? Just in case the user is already coming in, authenticated we'll send them right over to the redirect.

Otherwise, here's where we tap into superb base and specifically the on off-state function. Change. , and once we've detected that they've successfully signed in, then we're going to pull out that redirect query per. , get their specific session data and then ship them off to our ultimate edge function.

We're capturing a few things along the way. First, that access token, that's gonna become the value of that cookie we talked about. And also, pretty critically, this expires at Variable, so we want to make sure that the cookie has the same expiration date and time as what Superba has recorded as the valid session for the.

and then that redirect so we can send it back to where they initiated login. Cool. So now it's time to take a peek at the edge [00:13:00] functions. So edge functions are gonna be outside of our Core Eleventy built. They're a separate thing, and our initial edge function really doesn't care about Eleventy at all. We're using pretty much purely edge powered capabilities for the first part of the login.

And because we're in Deno and because. We don't have a connection to our Eleventy build. We need to separately pull out the environment variables. So we're getting the same ones that we had before, but now we're pulling them out with Deno. And then our all important function to set our cookie, which we're gonna use to both set it and later as an enhancement to unset it when we log out.

So here's our actual login function. Let's see what's happening. Because we're in Deno and not Node, we are pulling this functionality out from the CDN U R L based. We're not importing Supabase, does not exist in the package for our project. And then getting those two [00:14:00] helpers, we just took a glance at.

And then finally we've arrived at the core part of our edge functionality. So when we have an edge function, we get two pieces of two parameters passed in that are important versus the request. You can see that's tied to things like the actual u R L that is being used for this page and also the context.

And so context is where we'll eventually be able to look in and get out to that cookie value. But off of the request, our main thing is to pull out the query parameters we discussed passing through via the magic link to our session. And now finally, they've arrived at the login edge function. And as long as we have a valid access token and at Expires app, we're basically just gonna go through.

do an extra check with superb based to say, is this still a valid user? Maybe that had expired somewhere in between if they didn't get to it right away. And essentially, as long as we don't have any error come up in that process, we're going to [00:15:00] set the cookie using that custom function, here's what it's gonna be called, and then setting that expires.

Finally, after studying the cookie, here's where that redirect comes into play, and the user, from their experience, is gonna have a pretty seamless transition from clicking the link in that email to finally arriving hopefully, at where they originated login, unless again, their session has happened to timeout.

Cool. So that's the major changes in this update. Let's look at the effect of what's going on. When we test this out, once again, I'm gonna do this particular step off screen. I'll eventually show you when we get to the next phase here, one moment while I have that link come in.

Actually, I will show you this time cause I want you to see that the redirect is in fact working. [00:16:00] Okay, this is from the first time I triggered it. Here's the second time. The most recent time, I'll click log in and, oh, of course I have an error because this is the live presentation, . Let's see. Can't get, oh, we missed a step on our nullify.

Let me do a, let me do a. , that's what I forgot. I forgot to re rebuild here. I wanna make sure that the CLI is fully aware of the edge function that we passed in. So one moment while we trigger that one more time. Okay. We'll getting in that built up here. Make sure our site's refreshed. Great. Let's try that one more time.

and I should mention that Supabase does enforce a a time limit of you wanna wait at least a minute between logins and so [00:17:00] we do handle for that case as well. All right, let's hope this one works this time. There we go. So it passed us all the way through. In this case, we got back to the home cause that's the only page with the login so far.

So now let's take a look at our application data. Check the cookies, and we do have that access token set in here. Great. So that's all well and good. We have our user authenticated, we have our cookies set so we're able to know whether or not a user's logged in. But now what are we gonna do with it? This is where it's time to talk about how to create that members only content.

Again, let's check out what the flow for that is gonna look at, and then we'll make those updates. So we wanna make sure that authors, whether that's ourselves, whether this is a shared project, maybe even if it's coming out of a C M S. In any case, we're going to have our author determine the gated or members only content within a premium [00:18:00] variable.

So after they've set that for a particular post and a user visits that gated post, we're gonna have Eleventy Edge check their off status with superb base. And we're gonna set a global data variable called is User, that global data is gonna be available within the Edge Short code. So now we're talking about things specific to Eleventy Edge.

Then if that is user variable is true. , they'll get to see the premium content and Otherwise they'll see partial content and a login form. So let's get to it and set up those steps of our project. All right, so we're gonna do this one a little more manually cuz this is of the bread and butter the newer steps and the things that are more specific to.

So our first step here, I'm gonna go ahead and shut down our existing build. Our first step is to come into the Eleventy config and I mentioned we need to opt [00:19:00] into that Eleventy Edge plugin. It's not a separate install, it's coming from the base Eleventy install, but we do need to opt in. So we'll import that in and then go ahead and include it with the Eleventy ad plugin functionality.

now at this point, we need to restart our Build Eleventy is going to recognize that we've now opted into the Edge plugin and it's going to create a starter function for us. So we'll let that do its thing. Can see that turn green to tell us that we have some new things in here and. Important step that you'll also find if you visit the docs later about Eleventy Edge is that we need to ignore this generated directory.

This is basically Eleventy kind of pulling in the things that needs to know about your Eleventy build to make it available for your edge function. But we don't really need that to be persisted, so we'll [00:20:00] throw that into the. Get ignore, and again, you'll find those steps on the docks official docks. Then we are going to go into our netlify Tamil and just like we added this edge function path to know that the access route is attached to the login edge function.

We also need to add one for the one we're about to create, and we're gonna tie this to specifically that post direct. because that's where our premium content is going to live. So I'm gonna say that anything off the route of posts is going to use the Eleventy edge function. Great. So with those setup steps in place, and we learned from last time, I better restart that so that the path works for us.

With those steps in place, we can take a look at the Eleventy edge function. So this state right now is completely default. This is what happened as I mentioned, after Eleventy realized that we're using edge function. It gives us a few [00:21:00] nudges in here with some comments of what you might be able to do. But what we need to do is specifically check if the user's authenticated or superb base and then pass down.

That created is user. . So in a similar manner as we did for our login function where we pulled in our utilities, we need to pull in a few of those same lens for the Eleventy edge function. So let me get those dropped in.

So Supabase and also the environment variables. And then before Eleventy Edge passes off the data to the template, we're gonna insert our logic of checking with Supabase and all those things we talked about. So the first thing we need to do is get that all important cookie. So here's where we're attaching to the context, and we're gonna get that access token and check for that being [00:22:00] existing in the user's browser.

Then we're gonna set up a, is user variable so that we can do pretty similar checks as we did for the login functionality. In fact, if you take a look at this later, you're gonna see that oops, I might have missed a, there we go. Just a little outta sorts there. . You might see that this is pretty similar to the login one.

Similarly, we're checking a superb base giving, passing out that access token. And ultimately, as long as we don't have an error, we'll know that we have an authenticated user. Otherwise, of course, it's gonna come through as false. So how do we get that information passed down to our Eleventy template? There's a portion in here where we can attach.

To the config. So we have similar methods as you do in your base Eleventy install, but in this case, we are able [00:23:00] to attach global data. Now, normally if we attach global data, to our regular config. It's available through outer templates. It's pulled during static build time and we can use it wherever. This is unique because it's only gonna be available within our edge short code.

It's gonna be dynamic and it's gonna be isolated to that particular page load that is using the edge function. It's gonna change per page load essentially for any given user session. So now that we have that passed down, let's go over to our example post and we'll just double check that's coming through.

So we're gonna do the very, basic edge short code here. It looks like this normally we're also letting Eleventy know that the templating language inside of the short code is Nunjucks. I'm gonna save that and then I'll switch over to our post preview. Good deal. We're working. , we've got yours are [00:24:00] true cuz we've already initiated through Magic Link and I did not clear out that existing session.

Great. So now that we have that available we need to move on to the portion of determining which parts of this post is premium content. PS don't be alarmed, . What happened there is I saved a post that's now attached to an edge function and the hot reload isn't quite working. Completely smoothly.

So if you notice this function, do a regular old browser refresh, you'll probably be back up in business unless there is genuinely an error that needs addressed, which is usually gonna pop up in your terminal. Cool. So we are going to. , we talked about using the method of setting a variable to denote which parts of the content is premium content.

So I have set this up so my Eleventy template will accept both Markdown and Nunjucks. So we're gonna use [00:25:00] Nunjucks syntax to set our variable, which looks like this. We're gonna say set, and then the name of the variable, which in this case is premium. and essentially we're saying anything after the first paragraph is very premium content.

We, we can't have anybody see this lovely cupcake ipsum if they're not logged in. Cool. So there's our inset on that, and you can see that's disappeared because we haven't told Eleventy to you what to do with that content. So at this point, it's time to bring in the logic of checking with our edge function, seeing if we have a user and either showing the premium content or showing a logout form, or excuse me, login form.

So how we're gonna handle that is we're gonna create one more component and we're gonna call it a gate. So let's get that created.

and I'm just gonna populate this in and walk through it. So again, we're gonna [00:26:00] this time process both nu jus and Markdown because we wanna process that markdown coming through via the premium short or variable Now, Edge is not familiar or aware of any data outside of itself. So if it's not passed in through the Edge function, then even though this is Eleventy edge, it's not going to be aware of any other data in your Eleventy build.

So we have to explicitly pass this in and due to some syntax reasons, if we want it to be a named variable, we have to use this object Syntex. . Okay, so essentially our logic is saying, as long as we have premium content, also check if there's a user, and if both those conditions are true, we're going to output that premium content.

now because we need this to be registered per page or per post. And because that premium variable is not set in our front matter, we do need to unfortunately [00:27:00] include that gate at the end of each post that this is relevant towards. Let me do a little refresh here. Okay. So since I'm logged.

Essentially it's worked, right? We're showing this, but let's do a just hack around our way to log me out since we don't have the logout function. I cleared that cookie and the local storage as well. Do a little refresh and we see the opposite logic working. , but we mentioned that ideally instead of just nothing, we wanna show a login form here.

It's gonna be the same shared component as a use on the homepage. So over in our gate component, we are going to bring that in. Now again, it's not aware of our Our includes or any data. So we have to set this up in a similar manner as that premium variable where we're actually tossing the markdown of the login form into a variable.

And then we'll tag that on to our edge function and add [00:28:00] the else condition. So if it's user, they get premium else, you wanna show the login form. It is able to use the. Filter of safe. Some of these are available for edge, so that just means instead of encoding the HTML output to actually render it, and there we go.

Now, one little kind of enhancement we can do really quick is at this point in this context, join or login isn't completely the right message that we would like to use here. So we'll make one more little tweak to be able to customize the headline for this context. The first step is to go into login form up to the hard-coded headline here, and we're gonna swap it out so that it'll accept the login headline variable or fall back on join or login.

And then within our gate, we can customize what that's going to be.[00:29:00] 

Cool. So there's our customized one. So we've got one last test run through to see, make sure this whole flow works. So if it works for us, what's gonna happen is I'm gonna get that magic link, get logged in, and ultimately come back to this post

and I will show you that flow as well as soon as that new magic link comes in.

All right, it's gonna log in. We'll come back to the post and there we go. Success, we not only got redirected, but we of course see that premium content and we're good to go. That is the very essential starter baseline functionality for getting gated premium content in Eleventy. So what's next? There's a few things we didn't quite have time to do in this initial starting point. So ideally we would change the homepage state for authenticated users. Right [00:30:00] now we're still going to have the login form appear in the homepage cuz we haven't actually included that in our edge. Routing. . Ideally we'd enable a sign out button.

And then some things you might choose to do are have some sort of user dashboard and you can persist even more user profile data back to Supabase. So we're only using the authentication, but you can expand that to more functionality. you might add in payment processing. Right now it's just, all gonna be free content just behind a login.

And I also encourage you to look into another new Eleventy feature web C to maybe save content bookmarks or perform other client site interactions again, so you can use the progressively enhanced methods without having to load an additional JavaScript. Shortly I'm going to be releasing what I just showed you as a little theme.

And so these first two steps have been completed in that theme. Thank you so much. I know that was really fast and furious, so again, check out [00:31:00] eleven.rocks in a few minutes. I'll post and chat when it's available to get the theme and dive into that a little deeper.

that was, 

**Brian Rinaldi:** That was fantastic. I've dealt with this problem before pre edge functions and did everything client side. It was never ideal and it I, so yeah, for a while at C F E you had to log in to be able to get access to like meetups and the archives and stuff like that. And all of it was client site cuz it was a Hugo, it is a Hugo site.

So like all the JavaScript was client site. But the experience was never ideal cuz you do get that flash like, where. I assumed you weren't logged in, and then if you were, I'd show you the stuff, right? And it's just, yeah, it didn't look right. Yeah. 

**Stephanie Eckles:** And it's also tucked behind. The other part that bothered me, just, you just made me remember is, in that scenario, it's technically just tucked behind.

You could hack your way into seeing that content, but with Edge, it's not there. It's [00:32:00] not gonna show up in the source. . Yeah, 

**Brian Rinaldi:** for sure. So if anybody has any questions, we got a little less than 10 minutes with Stephanie here. Just please go ahead and put your questions and ask a question module. I think, if you all were like me, you were like paying close attention cuz you did cover a lot of ground.

So I think your question's probably just coming to your head right now. . of the things I, there's a couple of things I wanna touch on because you talked a lot about Edge. Oh, you and I did wanna note, you mentioned Web C and Ray's gonna be talking about that at the end of the day.

Eleventy in web C. Yeah. So if you're interested in that, just Yeah. Stick around. So one of the things I wanna talk about, cuz I think people don't realize when you talk about. , like it depends on which provider you're talking about, what the run time is for. You are using Netlify, so Netlify is Deno, and then there are considerations you have to deal with the different run times.

Is there anything in particular you wanna you think people should know when they're dealing with that? Did you run into any trouble like having to integrate, being switching from like a node environment in [00:33:00] Leny to Deno for the edge or was it very Yeah, all seamless for. 

**Stephanie Eckles:** For this particular flow that we explored, it worked out

I have a project where the reason I learned about, figured out this flow in the per first place was I'm using a few more functionalities and adding in the payment processing. And so what I did learn from that, because I hadn't had a reason to get into Deno or learn the difference before all that was.

And I'm not gonna remember the name of it now, but there is something that you can use where some D node packages are able to be transformed or whatever needs to happen to work in Dina land. But I essentially, I would recommend that you make sure whatever you're interested in using is gonna be compatible in that environment.

So that's where the, like the Netlife I CLI is nice, or I'm not familiar with other providers, to know. What capabilities anybody else provides. But checking into [00:34:00] that ahead of time, making sure it runs locally, but also making sure it runs on a branch deploy. I hit that with my other project where I thought it was fine and dandy pushed it up and it didn't work all the way into end as I expected.

So yeah, if you can run into caveats, but overall, an intention of Edge is not to. Too much right to do one isolated function at a time. Ideally. There's obviously reasons to be more complex and my other project does have more complexities, but it's a different way of thinking for sure as well to know when's the right time to bring it in for your project.

**Brian Rinaldi:** Yeah. And I think one of the other things, which, I think if you're doing what you said, which is mostly like throwing small things at the edge, that people don't, people aren't ever gonna realize it, but there's strict limits on how long it can run, how much memory can use, yeah. That are. Much stricter than your typical serverless function that could run.

I think even Netlify now has the long [00:35:00] running, like background functions whereas like edge functions have very strict, very tight limits on, on how long you can run and how much memory you can use for that. For that too, most things I think it's gonna be fine, but yeah, good to be aware of.

The other thing I was, I think. , I wanna clarify for folks and I want to get you to discuss in maybe more depth is the difference between, you started off and one was a regular netlify function that you threw in the edge functions like the in Netlify edge function, you threw in the edge functions folder, and then the other was a Eleventy edge, which then was in a different place.

And I guess the key difference for folks is, The regular edge function isn't dealing in the rendering, whereas the net, I'm assuming the levy edge now has rendering aspects to it. Does that, am I understanding that correctly? 

**Stephanie Eckles:** The way we were using it? Yes. More or less. So the levy edge [00:36:00] is going to specifically be your.

if you're using Eleventy to pass data. That's where we had that global data edition. Whereas our login function that was separate was just using the general processing availability of Edge to make that login a little faster. And To set our cookie was the other functionality we had there. So we didn't need to do any rendering.

It was really just a pass through. It was in taking that information, setting the cookie, and then immediately redirecting away. So yeah, that's I think a strength as well of using Edge. 

**Brian Rinaldi:** So like that function, like you were able to set the cookie and I guess in theory you could modify the response agency now, but.

it doesn't pass anything back to your templates and you can't use your right. You'd have to like manually, go through and use a library to modify the HTML directly, right? As opposed to the le Edge now lets you pull [00:37:00] that data in and use your templating language and do everything the Eleventy way as opposed to throwing it in some other kind of function.

**Stephanie Eckles:** Yeah. So if you take a peek at the Eleventy edge, or excuse me, a template where you intend to all surrender from edge, if you look at your public folder, because that happens. later, right on page request. What's happening behind the scenes is you won't see anything in the dom, the natural static dom of that template.

You will see a comment that's essentially a placeholder. So when Edge runs on that particular page, that comment gets swapped out is what's actually happening. So yeah. Again, like I mentioned earlier, you're not gonna see anything. there. If there's nothing to show for the edge function, like if you're not actually running that page making it an edge powered route, if you will,

**Brian Rinaldi:** And so the edge stuff that you showed, this is exclusively the 2.0 [00:38:00] beta that, that came out like a few days ago? Or I, is it, was it available? . 

**Stephanie Eckles:** Yeah, it started the very, very first version was Canary V seven. So there was, I think, ended up with 30 canaries before the beta release last week.

So insult the beta is probably your best option regardless, especially if you're starting fresh or Looking to upgrade. And by the way, there's a post on Eleventy rocks on upgrading if you meet up with that . 

**Brian Rinaldi:** Yes. I did share that one recently. Yeah. So it was a good post . And what, speaking of that I know we were just specifically talking about the edge stuff, but my last thing, like what other given that the 2.0 beta just came out are there other features you're really excited about that, that are in two.

**Stephanie Eckles:** Yeah, so Edge was one of two big features. The other was web seed that we've hinted at. So yeah, definitely stick around for a Raymond stock later. But also there's some general improvements periodically. So I've definitely been one where I've, been [00:39:00] keeping up with it along the way as I've been continually, building various things along the way.

So I'm trying to remember what else would be really stand out. The good news is there's not really a lot of breaking changes. There's really minor stuff if anyone is concerned about that. And there's also an upgrade helper plug in, so it'll help you identify if you do have anything. That, is gonna be problematic.

But for, I think my understanding is most folks aren't gonna encounter anything too breaking. There's some just kind of quality of life improvements depending on how you like to run your setup, like allowing a little different name for the config. And there are some changes to be aware of related to the data cascade.

So look into that. If you are. Do we anything custom? There's also an update that kind of slipped in, in V1 late that I'm not sure folks were aware of that got enhanced to be able to accept custom template formats. So for example, making c s or SASS a first class templating language for your build.

So if you completely missed all that [00:40:00] would. A pretty standout feature that I still have to dive in a little bit more myself and update some of my starters to use. So check, that kind of thing out. 

**Brian Rinaldi:** And I know Lenay talked yesterday about the internationalization stuff, which I guess is no too, so Yeah.

Yep. . Yeah. So last quick, we're almost outta time. Last quick question. Completely unrelated, but , both of us behind the scenes were like Potter who was running the show and we were wondering how the heck did you blur out certain sections of your screen when you brought stuff over and not others?

We're like, oh, I've never done that before. How do you do that? 

**Stephanie Eckles:** I am in a chromium based browser and I just quickly found a plugin called, ended up being called Zero Blur. So I was able to either do all inputs or select which things to blur out to, like the email inbox, sidebar, . 

**Brian Rinaldi:** Nice. Okay. Okay. For those of us who'd like to present, that's super, super useful.[00:41:00] 

