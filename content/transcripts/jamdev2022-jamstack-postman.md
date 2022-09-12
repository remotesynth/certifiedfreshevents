---
_build:
  list: false
  render: never
---

**Joyce Lin:** [00:00:00] I'm Joyce Lynn, the head of developer relations at postman. A lot of people know postman as an API client, a way to learn about and explore your APIs today. I'm gonna try to build a complete jams stack application in less than 10 minutes in postman. Let's get started. The first thing I'm gonna do is to create a new collection.

Let's call it jam stack. I'm gonna add a star here to bring it to the top. Let's add our first request. This is gonna be our API call. We'll only have one of 'em in this example, and we'll leave the HTTP method as get and put a placeholder. For going to a URL. If I hover over the URL variable, I can see that it's whoops, unresolved.

I haven't actually defined it yet and it'll be going to [00:01:00] slash data endpoint. Okay. So let's save that. The next thing we're gonna need is to add an example. So what would we expect back from our API call? If we go to the overflow menu, we can select add example. We'll call this example data, and you can see that it's an example.

I called it example, but you can also see from postman it's labeled as EEG or example. And so an example in postman is just a paired request in response. What do I expect if I make this type of request back from the server, we'll leave the request details as it is, but on the bottom we can update the response.

So for my body, I'm gonna have a Jason body. And I'm not gonna write any code in the next 10 minutes. So where do I go? When I want to not write code, I go to the postman docs and I'm gonna look for the visualizer. This is the page in the postman docs where I can learn about visualizing [00:02:00] responses, blah, blah, blah, blah, blah, blah, blah, blah.

Okay, so here's an example. I'm just gonna copy this to my clipboard of a Jason response body. Let's plot. This. And to be valid. Jason, we can't have any comments. So I'm gonna delete this little comment there in that du Hickey comma. Okay. Let's give our status code. Let's make it something pleasant like 200.

Okay. And I also want a response header content type, no surprise application, Jason. Okay. So this looks pretty good. Articulating, this is the request I want, and this is the response I expect and I'm gonna save my example. The next step is to add a mock server. So a mock server postman will draw from these examples.

So let's add our mock to this collection. Let's [00:03:00] call this mock data. and we're adding a mock to this collection. Any examples that we've defined in this collection will then inform what the mock responses are. Okay. I'm not gonna add an environment cause I don't have one yet, but I will leave this checked.

So I'll save the mock server URL as an environment variable. So after I initiate this mock server, I will have an environ. and the default setting for my mock data is public. So anybody can access this mock data. But if I had some sensitive stuff in there, I can always check this and then require an API key to access this data.

I'm gonna leave everything else as it is. I'm gonna hit create mock server and postman has generated this mock server URL. Okay. So I'm not gonna copy that to my clipboard because I know that the way I had the setting. Now I have a new environment called mock data. And if I go to the eyeball postman has created a, an environment called mock data with a [00:04:00] single variable called URL with the mock server URL.

Okay. That's what I wanted. I wanted to select that in active environment. Let me close some. Okay. So now we're back at our get request. Previously URL was undefined, but now if we hover over it, we can see that postman is reading in from the actively selected environment and has substituted in our mock server URL.

All right, let's see what we get back from slash data. Yay. Okay. 200. Okay. Here's our array. This is copied directly from the postman docs. It's an array of two people with their names and. Okay. So that's our data that we're pulling from a mock server. Now let's visualize that data and render it in a front end.

So again, I don't wanna write any code, so it's back to the docs. Okay. I'm scrolling down and I see this little snippet, let's plop it into postman and see what it looks like. [00:05:00] Okay. I'm trying to render the information that I'm getting back from my server. So I'm gonna be doing that under the tests tab.

Anything, any JavaScript that I write under the test tab will execute after I send the request, which means I have access to the response. So let's go ahead and paste that code SIM snippet. And this is a variable called template. That is a stringed HTML element. It's a table. With the first row being the headers of name and email.

And then this is handlebar syntax. It's gonna loop through each response and then print out rows with the name and email pulled from the response. Okay. We need one more piece here. Let's enter a new line and back to the docs. Okay. We need our JavaScript.

Let's paste it in and see what it looks like. Okay. This is JavaScript, but we have access to the [00:06:00] postman sandbox. And so that's oops, that's this little function here. PM dot visualizer dot set. There's two parameters. The first parameter is gonna be the template, which we defined earlier. That's this stringed, HTML.

and the second parameter is going to be the data that we pass through to render in that front end template. And in this case, we are parsing the response that we get back from the server or our mock server in this example. Okay. I think that looks good. Maybe let's hit save and hit send. Once again, we see our Jason response, but if we tab over to visualize, we see this beautiful rich table.

Okay, so this is not that beautiful to the table, but you can see how we're rendering information that we're getting back from our surfer. Now, if I want to update this information, okay, we're doing really great on time. That was well under 10 minutes. If we [00:07:00] wanna update this information, say I have more people than just Alice and Jack that I want to return.

I can go here. Example, remember EG and I can edit in real time and add new people and then hit save. And the beauty of that is that there's no further deployment that's required for updating your backend data or for AC updating your static data. Postman cloud is gonna be serving this on their mock endpoint in real time.

So I can edit that information. And the other thing I could do is if I don't wanna be calling my mock data, I really like the idea of using a mock API, but I don't wanna have people access it from within postman. It's good for me, but I have a friend that wants to access it, maybe in a mobile app that they're building.

So what you can do there is go back to the call and it's working the way I want it to the way I expect it to, I can see this is what I expect back. If you go to the far there's this code? that generates client side code for you to replicate your API call. So [00:08:00] in this case, this entire thing is a curl command that fires against this endpoint.

That's our mock server URL going to slash data route. But if I'm not building an app and curl, or I don't want my friend to have to fire curl commands, you can choose from other programming languages and framework. okay. So let's take a look at our baby jam stack app. This is a bit plain for me, but I'm not a CSS whi if I was, and I'm taking a look at this HTML template, you might think, Hey, I wonder what else we can jam into that template.

The world's your oyster. You can throw in a style tag. You can bring in additional CSS. And if you have favorite libraries that you wanna bring in, you can even plop in a script tag and pull in libraries from a CDN. So if you're not a super whi or maybe you are a whi, there is a place where you can go look for [00:09:00] other examples of jams, stack applications, and post.

I would look in, I would search in postman for visualizer and take a look at what other people you can see. There's a collection here. There's an entire workspace here. Here's a team that has created all sorts of data, visualization templates. If you're just getting started with jams stack applications, you can see what other people are doing and then either use their own mock API.

Or third party or public APIs, or if you are a w at this kind of stuff, you can also share stuff publicly for other people to check out.
