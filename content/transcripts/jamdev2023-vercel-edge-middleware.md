---
_build:
  list: false
  render: never
---

**Thomas Desmond:** [00:00:00] Hi JamDev, Thomas Desmond here, developer advocate at Sitecore, and today I'm looking forward to talking to you about making JAMstack more flexible with Versal Edge middleware. I've got a quick talking slot today, so let's jump right. I wanna start off with a quick, what is Versace? Versace is a platform for front-end developers allowing you to develop, preview, and ship your beautiful front ends.

It supports over 35 different front-end frameworks, so I'm sure your favorite front-end framework is there. They're also the creators of Next js. So the examples that I'm gonna be showing today are gonna be using next JS cause it has one of the easiest integrations with Versace, but it also, the features I'm showing off today support those other frameworks that are also.

On Versace, but what we really care about today is that Versace Edge middleware feature. Where does it fit into JAMstack? There's two big points that I wanna [00:01:00] make about Versace Edge middleware that really help JAMstack. First, it lets us push logics, the CDN layer, that content delivery network layer, which is as close to our visitors as possible.

So we're able to execute logic and have it as close and as quickly executed near our visitor. second, it allows us to have more information about our visitors inside that middleware layer. We're able to look at the request and modify the response that we send back. So now we can actually look at where the request is coming from, what country, what location, what city.

We can do authentication in there, and we can do a lot more inside of this logic at the cdn. So it's really great that we now have a lot more information available to us about the visitors toward JAMstack site. So how does Versace Edge middleware fit into a JAMstack architected application? So here I have a pretty generic JAMstack architecture.

On the left hand side, we have that build and deploy time. This is where that speed of [00:02:00] static comes in because we're building out all our static content and on the right hand side, we have our request. . And now when a request comes in, it goes to the CDN and directly back down to the user. There's no content fetching.

There's no generating of pages that happens to happen. That's why we love JAMstack. But with Versa Edge middleware, we are allowing ourselves to push logic to that CDN layer. The users and visitors have to go to the CDN already to get our content. . So why don't we sprinkle in a little bit of logic there and see what the user's requesting, where the user's coming from, making sure they're authenticated and doing other cool things inside of the Versace Edge middleware.

And what's really cool about this feature and using it with Versace is that they do the distribution, they do the process of security and distributing across the content delivery network. We can easily create one function inside of our applic. And that function will be distributed and executed for every single request.

So let's create a brand new next GS application and see how easy it is to get started with [00:03:00] Versace Edge Metalware. Here I am now inside a VS. Code in a brand new next GS application. I used N P X create next step with type. To generate this, and this is a brand new out-of-the-box next JS application, what do we need to do to get started with middleware?

How do we tell Versace that our application needs to have a single function distributed across the content delivery network layer that runs for every single request? Now, that sounds difficult, but Versace has made it extremely easy. Now, for next Js, all we have to do is create a middleware dot ts. At the root of our application.

If you're using a different framework other than xjs, you might need a little bit different setup. Maybe you put it in a folder, maybe there's a little bit different structure. But with njs, they've made it super simple of create one file at the root of the directory.

Now that we have our middleware Ts, where do we put inside of here? Well, we export a function called [00:04:00] middleware. So I'm gonna paste this in and we can even make this slightly bigger. And we now have this middleware function inside of our middleware Ts. It takes in a request and sends back a response. And now this is going to execute for every single request.

Let's verify that. So I'll put inside of your console log.

And let's start up our application. We can use M p m Run Dev inside of our terminal to start our application and off head over to my local host 3000. We have the template of our next GS application. This is the new template they've made, and if I refresh, we should see that the middleware function gets executed multiple times.

Now, here inside of the client, we see that in the middleware quite a few times. So why are we seeing it so much? [00:05:00] Well, I said that this was going to be hit for every single request and I meant every single request. So let's add a little bit more information on here so we can see what those requests. Back in VS.

Code. I will add the URL that was requested

and we now will see the U URL that was requested that got us into the middleware function. I can refresh one more time and then back in the terminal we'll see that we have the in the middleware, but now we're seeing what the reason was for getting into the middleware. Local host 3000. We have an svg, we've got a dollar of different chunks and static chunks and JS files inside of here, so we're getting.

Every single request is moving us into that middleware. Well, it's great that we're able to hit this every time. We might not want it for every single request. So looking back inside of VS code, I have this config at the bottom. I can bring this back. This is a config inside of our middleware that allows us to make different changes.

And the Matcher property that I have set to just the forward. That [00:06:00] tells next JS to only execute this middleware if I'm in the homepage or that single forward slash so only for the homepage execute the middleware. Let's verify that that's working. One more refresh on our page and we'll head back to terminal.

And we see now in the middleware is only being executed on local host 3000, not for every single request and every other JS and every other svg. This is all it takes to get started with Versace Edge middleware. We have this one middleware dot ts with our exported middleware function inside of here. And now this function will be executed for every single request that comes in based on our config down.

And what can we do with this? Well, we can look at the request that comes in, look at that information that we have available to us, geolocation information, header information, cookie information, and more. And based on that, we can redirect the user to different pages and send a new response back down to the user.

A common scenario for this is to have pre-rendered pages that are personalized. So you have maybe your page for this [00:07:00] particular state or this particular country. Maybe you have pages that are already internationalized, and you look at the geolocation of the user and send them down to the page that's personalized for them already.

So you can pre generate pages that are personalized, so you keep that super speed. But now we can look at the information on our request and send people to the page that's most relevant to. Let's take a peek at a quick example of this. So this is another vs code instance here, but this is for the Sitecore developer portal.

And I've got a quick little branch here where I'm using middleware to look at cookie information and redirect users to personalize pages based on their cookies. So I'm able to see what have they been doing during their session on my site. Let me take a peek at what their recently visited page is, and based on their recently visited page, I want to change the home.

To reflect how they can get back to the content that's most relevant for them. So we're looking at the cookies, we look at the value of that cookie. We see what the request and URL includes, [00:08:00] and then we rewrite that URL to the personalized page if it's most relevant to our visitor. So with this cookie, we're able to see what the user's doing during our session.

Something that wasn't possible with JAMstack. I can't show you all the examples or all the possibilities with Versace's Edge middleware. There's just not enough time for that. But I do wanna take you to their feature page where it has a lot of different code examples that we can take a pca. So on the feature page for Versace Edge functions and Edge middleware, they've got a lot of examples down at the bottom that I want to take a look at.

Here we can see this unlocked the potential of edge computing. We've got the hello world cash control authentication proxy. A lot of different examples. So what I wanna show here is to try and get you inspired and think, well, what can I push to the edge? What logic can I get down to that content delivery network layer?

And now that I have more information about my visitors, what can I do with that information? So you can do AB testing, rate limiting authentication. Cryptography, [00:09:00] geolocation, internationalization. Uh, there's just a lot of examples that they've got pre-built out here to inspire you in into thinking about what you can do with Versace Edge middleware.

So I'm really excited that I was able to be here at Jam Dev and show off to you Versace's Edge middleware feature where we were able to add flexibility to to JAMstack by pushing logic out to that content delivery network layer where we have more information about our visitors so that we can actually look at the requests that are coming in and modify and rewrite the responses that we send back.

Thanks everyone.