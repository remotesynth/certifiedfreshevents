---
_build:
  list: false
  render: never
---

**Caroline Frasca**  0:06  
Awesome. Thank you so much, Brian. Really excited to be here. As Brian mentioned, my name is Caroline. And I'm excited to be sharing an introduction on building apps with Streamlit today. So let's get started with the agenda. First, I'll give a brief intro on myself and an intro on stream live. We're going to walk through the process of actually building an app with streamlet. I'm going to share my thoughts on cultivating positive delta developer experience specifically for open source libraries. And finally, we're going to talk about supporting viral growth loops through developer experience. A little introduction on me, my name is Carolina Frasca. And I work at Streamlit, which is an open source Python library. Until a little over a year ago, we were a pretty small startup of about 50 people. Last year, we were acquired by Snowflake, which is a cloud computing based data cloud company at streamlet. I focus on improving the experience of developers using our open source library. I do want to note that although I work for Streamlit slash Snowflake, I'm presenting today on behalf of myself rather than a company and all views expressed are my own. With that, let's dive right into Streamlit.

**Caroline Frasca**  7:30  
At the most basic level Streamlit is an open source Python library, which turns Python files into web applications. This is different from the typical workflow that developers would follow to create a web app. Usually there's a combination of both front end and back end programming involved, whereas streamlet enables developers to use just Python. So like I said Streamlit allows data scientists to work in the language they're most comfortable with Python. Because Streamlit apps are so quick to spin up data teams can quickly share insights with stakeholders, drastically decreasing the amount of time needed to derive value from data.

**Caroline Frasca**  8:14  
Streamlit also makes it super easy to incorporate interactivity into your app with very few lines of code Streamlit widgets and compass functionality such as text inputs, file uploads, multiselect, and data visualization. Widgets are the building blocks of streaming apps and streaming is constantly developing new widgets that extend the capabilities of the library even further. Because streamlet is at its core, just a Python library, you can use it in conjunction with any of your other favorite Python libraries, such as Altair pie torch, Vega, light and more. The fact that Streemlit is a Python library also means that anything you can do in Python can also be done within a Streamlit app.

**Caroline Frasca**  9:02  
Streamlit has three core principles. The first core principle is that Streamlit embraces Python scripting, enabling developers to build beautiful performance apps with just Python. Streamlit also treats widgets as variables. In other words, there are no complicated functions necessary to retrieve the value of a widget. Instead, the widget itself is a variable, and the variables value can be accessed by simply referencing the name you've assigned to the widget. streamlet also aims to reuse data and computation whenever possible. Performance Streamlit apps typically make use of our caching mechanisms, including st dot cache data and st dot cache resource, which each specialize in a specific type of caching resulting in even greater efficiency. These concepts form the foundation of Streamlit. But once you've got a handle on the basics, There are tons of ways to take your Streamlit apps to the next level. Streamlit has widgets that can be used to arrange your apps layout, such as St dot sidebar, and st dot columns. Streamlit themes allow you to control the colors and basic fonts used in your app. While Streamlit components are third party modules that community members have created to extend what's possible with Streamlit.

**Caroline Frasca**  10:26  
Now, we're actually going to build an app with Streamlit, I'm going to play a quick recorded tutorial that will guide you through the process of building a Streamlit app that functions as a chat bot to ask questions to GPT 3.5. Now I'm going to walk you through the steps to build an app with Streamlit. The app that we're going to build is a chat bot that enables users to ask questions to open API's GPT three model. To start, let's talk about the Python packages this app will use. We're using Streamlit to build the UI of the app itself. And to take user input, we're using the OpenAI package to interact with GPT 3.5. And we're also using the Streamlit extras package, which provides some extended functionalities that aren't yet part of the main Streamlit libraries.

**Caroline Frasca**  0:05  
Let's move on to the Python file for our app, we can get started by adding import statements for the packages we'll be using. Again, we've got OpenAI, Streamlit, Streamlit chat, and Streamlit extras. We also need an OpenAI API key, which I'll add here using Streamlit's built in secrets management function. We're going to create a sidebar for this app. Just to improve the layout. The sidebar will contain the app title and some info about the packages used by the app. streamlet has a feature called session state, which allows you to share variables between reruns for each user session. For this app, we're going to use session state to track the user input and the responses generated by GPT three. In this section, we're just going to initialize our session state variables by checking to see if they exist. And if they don't exist, we'll add our initial values to both session state values. We're also going to create a container where we'll put the user input into container where we'll put the GPT three response. Next, we're going to write a function call to get prompt that will create a text input box where the user can provide their question for GPT3, and that returns the input as text. We'll call this function making sure that we're creating the text input box inside of the user input container we created earlier. Now let's write a function to actually pass the user provided prompts to GPT3, and return GPT three's response we're using OpenAI's chat completion feature, which enables you to pass a message or even a series of messages as an input, and return a model generated messages output.

**Caroline Frasca**  13:08  
Finally, let's put it all together by calling our generate response function and passing it the user input collected by our text input box. We'll also add the latest user input and GPT3 response to session state. Since Streamlit's execution model reruns the app from start to finish when users interact with widgets, we also want to make sure that we iterate through the entire chat history that we've stored in session state, and print each message in a chat style format using this streamlet chat components message method. Now we'll head on over to the command line installer requirements and run our app locally using the command Streamlit run and the name of the Python file.

**Caroline Frasca**  13:52  
That's it just 50 lines of code. And we've built a functional Streamlit app that allows users to chat with GPT3. Now that we've built a Streamlit app, let's get into one of my favorite things to talk about developer experience. When you're building a product aimed at engaging developers, I can't overemphasize the importance of devoting time and resources to developer experience. In my opinion, good developer experience has three main components enablement community, and ambassadorship. enablement means that when developers hit a roadblock, and they will hit roadblocks even if your product is awesome, they are able to find what they need relatively quickly. And that experience is as positive as possible. In practice, this looks like fast response rates on community platforms where developers tend to ask questions, including Stack Overflow, running product specific Discord servers and product specific forums. Not only do the his responses need to be fast, but they also need to be kind and patient, especially if your products core audience includes folks who are new to programming. enablement also means clear processes around GitHub issues and pull requests. Do you want community members to write PRs for features they'd like to see added to your product? Do you want community members to check with your developers before writing these types of PRs, it's usually a pretty bad experience when a community member takes the time out of their busy life to write a PR for an open source project, only to find out that the PR will never be merged. So make it clear to your community what the process is around PRs.

**Caroline Frasca**  15:40  
GitHub issues are a little different. Most open source projects, welcome issues for bug reports and feature requests. So the main thing we want to be aware of with GitHub issues is getting people fast responses, and being as transparent as possible about when bugs and feature requests will be addressed with code changes. Finally, this one is pretty obvious. But good documentation is one of the best ways to enable developers make it readable, make it nice to look at and include example code. Next is community. To me community means that we're enabling developers to connect with other developers that are using our products, so that they can share learnings and best practices and to really maximize the number of warm fuzzies generated by those interactions. This can be as simple as a subreddit, a Discord server, a forum, a Slack instance, or some other online place for your community to hang out. Community can also include events and resources like webinars, meetups and hackathons. User Groups are a great way to both bring your developers together and to make your developers feel special and appreciated. Finally, ambassadorship to me ambassadorship means that we give super passionate developers the opportunity to engage even further with our brand. This can look like a lot of different things. But some examples are an education program, where you bring students and educators together who are passionate about your product, or a more formal brand ambassador program that allows super fans of your product to evangelize the product to a new level. The actual meat and potatoes of these programs really depends on the product itself. But a few Streamlit specific examples would be having ambassadors build demo apps to share new feature releases or creating streamlet related content. Moving on to viral growth loops, one phenomenon that has been super important to streamlines journey is virality. In the growth loops that happen when apps go viral.

**Caroline Frasca**  17:50  
One of Streamlit's co founders, Amanda Kelly, wrote an awesome article about creating growth loops for your open source project. I highly recommend checking out this article. There's a shortened link to the article on this side. But the TLDR is that we have this developer journey where developers discover your product, they start building they share what they've built. And ideally, some of that sharing leads to virality, which then leads new developers to discover your tool and starts them on that same exact journey. Developer experience is critical in enabling these viral growth loops. In the discovery part of this loop Developer Focus content is super important. That includes docs, videos, tutorials, blog articles, example repos. Community Response is important here for users who are just getting started. And they're hitting their first roadblocks. In the build part of the loop community response and effective GitHub issues and PR systems are critical. Because as developers start to really build with your tool, they're likely going to encounter features they wish or tool had or bugs that you might not even know about yet. This feedback is critical to ensuring that your roadmap is aligned with developer needs and interests. Finally, in the share and go viral part of the loop, community response is still very important. But we also need to prioritize making it as easy as possible for developers to share what they've built. And depending on the product resourcing can also be really important. For Streamlit apps, this means that if they're hosting their app on Community Cloud, and the app starts getting some traction, and maybe going viral, we need to make sure their apps have enough resources on our back end, and also make ourselves available to help the app creators optimize their code. You might notice that there's a pretty obvious pattern on this side. So one more time, community response during all phases of the viral growth loop, making sure that developers get fast, kind and helpful responses to their questions is so important. community response rates are one of the best Northstar metrics you can use for a developer experience program. If developers don't get answers to their questions, chances are they won't stick with your product or library. On the other hand, if you can excel at providing developers a positive and rewarding experience, when they post questions about your tool, you'll cultivate long term supporters. And that is all I have. But I'd love to take any questions that folks have.

**Brian Rinaldi**  20:30  
Right. So folks, if you want to put questions in the chat, I will ask them of Caroline. But Thanks, Caroline. That was great. I am curious, first of all, okay, I'll give you my background is not as a Python developer. I'm typically JavaScript developer. So I was, you know, in the in your little demo there, I was impressed with how little code it took to write I mean, so at its core Streamlit is the UI components, or is it like, I mean, is it just is mostly that piece? Or is it more than that?

**Caroline Frasca**  21:10  
Yeah. So it is mostly the UI on basically using Python as a wrapper around things that would be way more code to write, you know, HTML, CSS, JavaScript, things that would take you a lot longer to write with those tools rather than streamlet, using Python to really shorten that. Another part of the reason that app is only 50 lines of code is custom components. So the chatbot that you saw, is a component that someone in our community actually built and gives you the whole UI of having, you know, a message here, a message here, you know, the response here, the response here, and takes out the work of actually building that yourself. So that's one thing that's really great about Streamlit is that people in the community are constantly building things that you can reuse, basically. But yeah, I would say the main thing that Screenland is providing is the UI, the user input, anything that you need a UI for anything that you need to take user input for, and then do something with that and your app Streamlit tends to be a really good fit for that.

**Brian Rinaldi**  22:15  
Okay. And so, and then I just deploy this anywhere, like where, yeah, so it's Python, or

**Caroline Frasca**  22:25  
you can run your apps locally. Obviously, we also have a free platform where you can deploy Streamlit apps, you can deploy one private app, and unlimited public apps direct links directly from your GitHub repo. super quick, super quick, you know, maybe like three click deployment there. But there are also a number of other platforms that support streamlet hosting as well. I think Data button is one of them. There are a couple companies that are like specifically focused on Streamlit apps. But you can also deploy your apps with just like regular hosting providers, Digital Ocean, Heroku, what have you.

**Brian Rinaldi**  22:58  
Okay. So if I like, when you say that they support stream live apps is like there's something that they have to have like to Streamlit library installed on there.

**Caroline Frasca**  23:11  
yeah. So some of them, some of them have. So products, like data about it are specifically focused on deploying Streamit apps. And that's really like what their product is. Whereas with Heroku, with DigitalOcean, that type of stuff, a little bit more effort on the developers part to deploy it. But I would say another thing that we have is with snowflake, we have a joint hosting solution is well, where you can build your apps within the snowflake infrastructure itself. So connect to the data that you have stored in Snowflake, and then the hosting is all handled by Snowflake. So you don't have to deal with figuring that out yourself. And that's another great option as well.

**Brian Rinaldi**  23:52  
Okay, very cool. And so I'd like if I, if I want to use those community plugins and things like that, does that mean, I have to make sure that that that's supported on the host? Or is that kind of comes with by default?

**Caroline Frasca**  24:08  
Yeah, that's a good question. So typically, it's going to be a separate Python library that you would just install. So you know, in the same way that you would install just some other dependency of your app, add it to your requirements, txt file or whatever dependency file type you're using. You would just add it there. But yeah, it's literally just another package that you install.

**Brian Rinaldi**  24:31  
Another package. Okay. Very cool. And I think I liked your your talk about developer experience, because I think it's something that well, I'm, I mean, I'm technically a developer experience, engineer, whatever that means. But you know, I think it's, it's really an important not just open source of any library. So that was, that was great as well. So what would you recommend like if if somebody wants to just get started, what's the easiest path to just for them to take?

**Caroline Frasca**  25:05  
Definitely, I would head over to our doc's at docs.streamlit.io. Our docs are awesome, and really easy to get started with. We also have a ton of example code in there as well that you can just copy and paste and work from there. Or, you know, the GitHub repo, if that works for you, too. And the great thing about Streamlit is that getting started is not this big, like nebulous thing. It's import Streamlit as st and then st.write hello world, and you have an app. So it's really just quick, and you get to that satisfying moment of seeing an actual app extremely quickly.

**Brian Rinaldi**  25:46  
Right. And can you customize the look and feel of those UI components?

**Caroline Frasca**  25:51  
yeah, so a couple of things, we have custom theming. So you can control the colors, fonts, etc. But if you want to go even further, you can add some custom CSS that's a little bit happier. Because the real idea behind Streamlit is to get you to something that's really nice looking that you don't have to necessarily worry about that, you know, cuz changing every little nitty gritty part of it. It's definitely possible. But I would say Streamlit is optimized for getting you to that nice looking app as quickly as possible. But it is it is possible, using STD Markdown and some custom CSS, CSS. And then custom components are also a great way like building those components. If you have a very specific UI element that you want. And you know, you know how to write it. With JavaScript, for example, you can do that via a custom component.

**Brian Rinaldi**  26:45  
Okay, okay. That makes sense. This looks really awesome. I'm actually really impressed, by the way.

Transcribed by https://otter.ai