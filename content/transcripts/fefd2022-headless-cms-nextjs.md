---
_build:
  list: false
  render: never
---

**Ifeoma Nwosu:** [00:00:00] Hello, everyone. I think Jen has pretty much covered the introduction and she said everything I had to say. So I will be what I'll be speaking on is how to add a headless CMS to next years for, to be able to carry on. So this is more going to be more like a presentation. Code instead of slides. And so to be able to carry on it will be helpful if you have some knowledge, react.

You don't have to be an expert, but if you have some knowledge in react, because next year is a framework, which is based off react. Before. Yeah. Talk how to add headless CMS to next GS. And so you might be wondering if you've never heard about what a headless CMS is. You might be wondering what is a headless CMS, and I'm sure everyone has been hearing about that.

We've all heard before I got to know headless CMS was I was always hearing about jam stack and headless CMS and all of that before that I was only [00:01:00] familiar with the traditional CMA. So for us to properly understand was the headless CMS is I. First of all explain traditional CMS and the concepts in the easiest terms possible.

So what is a traditional CMS? If first of all, a very good example of a traditional CMS is WordPress. So if you've ever used the WordPress website or you've ever built a WordPress website, you have an idea of how traditional CMS works and how they work is that we have our backend layer. And then we have the front end layer or what we refer to as a presentational layer, which is what those of us who get to use our devices, your laptops, your mobile phones, which is the layer, the section of the web application of websites you get to see.

So that is what I refer to as present layer. Now in traditional CMS is the presentational layer and the backend layer, which can be built with which contains the data you have to pay. You have the back, you have the database and you have the backend layer. They're all tightly coopered with the front end layer.

And most of the [00:02:00] time mean you do not get to choose as a develop properly. If you've ever got to build a tradition you've ever got to work with the traditional CMS, you don't get to pick what language you want for what language you'd like to write your presentation on your front end. It always comes to traditional sames.

It's mostly HTML. So we do not get as a developer. You don't get to decide. What language you get to use as for the front end layer of your web application in traditional CMS. So refer to this as being tightly, coupled you it's tightly coupled in the sense that whatever we get, whatever CMS we work, whatever traditional CMS we work with.

It's what has been given to us that we use that way. But with. With headless CMSs, why it's called headless is because we the head refers to the presentation and why it's called headless is because you get to choose as a developer. You get to choose whatever language you want your presentation, and if you want it in Ruby, if you want it in [00:03:00] react, you want it to view you want it in, you get that the decision lies in your hands.

So that's the beauty of, and you also, that's the beauty. Headless CMS and whatever it is, you write this in, it also gets presented in whatever platform you choose. Like it also, you also get to use it across several platforms on your. Your tablet, your smartphone, your smartwatch, and all. So that's the beauty of headless CMS is meanwhile, if you're going to do traditional CMS, you have to create these things specifically to each device. Now for, to display the data, you now front end layer for us to able to see, because we had the back end and you have database section. So for us to be able to display that section for users to get to see what.

We have built as fronted your front end developer. You want to be able to this way, this is where the concept of Jamstack comes in. And this is where you also, you get to use a jump start tool like next GS. And [00:04:00] you also for you to be able to properly optimize your tool, your job starts next year is we are able to that's this.

We are able to use tools such as Headless CMS. Now we have various types of headless. CMS is a lot of popular headless CMS. We have contents full, we have sanity, but for the purpose of this conference, I'll be making use of Storyblok. So whichever one it's you can get, you can work with whichever one you want to use.

And, but for purpose of this conference, I'll be working with Storyblok. Cause it's a CMS. I am familiar.

Yeah. So this is a, an illustration of what a headless CMS is. So it's a headless S you get to use whatever you want for representation. You can see here, we, I am using different heads to specify different languages you can use next, next react view felt. Yeah, it's head as you get to choose whatever front end technology.

You'd like to, so you, so I'm going to [00:05:00] go over now and present my screen

so that I can present my code and everyone is going to follow along. Yeah. So for the very first. For the very first section, because we're going to be working with nexts. What you're going to do. You have your code, you're going to have to install NextJS. You're going to create a NextJS application and to be able to create a NextJS application, the command we use is NPX create next app.

And then this, you replace these basic nexts with the name of. Your folder, your file or your application. And you can use the, if you one who also uses the instead of MPM, you can make use of the, so you just replace this MPX, which create. With creates [00:06:00] next app and whatever it is, you want name of your application to be.

And after that, so we, the reason why we are installing this is because we want to be able to get, we want to use next. And with this next provides us with folders and then features that we get to use right. Of, right of the bat. So NextJS is a, it's a framework, which it's a fully, it's a framework, which you can use in building.

Full website applications like using building server side during that applications. And it's based off react JavaScripts in the sense that once you already know how to use react, it's you already, you know how to use react. You could pick up picking up next. Isn't going to be. Difficult. And we also refer to it as a Jamstack too, because of these purposes, one of the purposes that I'm about to show, like why we're able to use it, because it provides us with all of these application folders and you really, you, and it deals with other.

It deals with other sections that normally if you were creating your application right of the battery, you have to take care of it such as SEO [00:07:00] it solves that issue force in sense. It also helps to like cash. Your app application helps with web performance. It enhances your web performances helps with your EO optimization, and it's also.

And it also helps with dynamic routing when you're creating and routing generally when you're working with your web application. So this is one of the reasons why next year's has become quite popular. So when we install that this, we run this command, the next command we're going to run is NPM install, storyblok, react, access.

So the reason why we are installing this is so that we can have access to using tools, provided to us by Storyblok, and we are making use of access. Cause we're going to be making requests to APIs and address is going to help us send those requests that we're going to be. So after this, you would want to, if you do not have a Storyblok account, you want to create, if you're going to want to use any head, let's say that you have to create an account.

So we're going to create an [00:08:00] account with Storyblok. And here I have my. I have my Storyblok accounts over here. And once you log into you create your accounts, it's very easy. You it's free. It's very, I want to also mention that this is not a form of promo or any. So this is just me sharing stuff that I have worked with.

So you get to. You get to have this account. And with this account, you are able to access we have what we refer to as stories in Storyblok. So using making use of stories, you'd be able to create items such as components, and content that you want displayed in your application. So this is what I, a simple static website I've been able to create, making use of next year's and.

Storyblok. And you can see here, we have a visual, and I'm just going to run you through give you an explanation of how we were able to display this insight here. Cause this is one of it also comes to the visual where [00:09:00] you also get to make changes. But we're going be focusing a lot more on its integration with next GS.

So you, after creating your accounts, you also create stories, just like what I have done here. And within that, we also get to create. So model you get to create components. Components refers to the contents you want in your application. Now for us to be able to make use of every, everything we have, like react provides, because remember we installed our Storyblok react package.

We have you'd first of all, you'd create. You create a folder for my own sake, create a folder. And inside that folder I have before I created a folder and inside that I have before, which I try to Storyblok, do JS and inside what this does is that I'm basically just initializing Storyblok in here.

And what I mean by that is that I'm trying to initialize a connection with the Storyblok API. So I can be able to [00:10:00] enable my use with my visual and. And be able to have access to all that things such as ING components like connecting my components. But as we go on, I'm going to explain that for that.

So when you start working with, we have your CMS provides you with an API. It is with this API that you'd be able to connect the contents you have created. For example, here I have all of these contents, which I created with story. And that is like the pet store, this type of pet store gallery image of blog.

Like all of these images, I got to create them inside story blog. I didn't do this inside my application. I did this inside story blog. And the reason why I have access to this is because I am able to access all of that data with the API given to me, I start my API environment variable and.

For you to be able to get your API, you would be able to navigate to the setting section. And once you click on your API keys, you have access to your API. That's that over there? I don't think I should be that way, but yeah. So I have [00:11:00] that in an environment variable, and then here I have my API options.

What it just is just, I'm just giving creating a scenario I'm able to control. Optimize my web performance. What is those that it's just basically helps like clearing up cache for web performance issues. And so here I have created my components just in case. You're wondering all of these contents, you're seeing where it's coming from.

And so this is where all of the content I have is coming from. And if you look at the top of my file, I am importing a package. I'm importing a package from. The Storyblok, edit table. So what the Storyblok edit table does is that it's provides what's. It provides us with it. It makes it possible for you to be able to make changes in your editor in this editor here.

So I'm able to make changes with

here. [00:12:00] So I'm able to make change using this function, the Storyblok table function. So when I use this function and I also specify this block, I'm able to couple my components in my next year application with the components I have specified inside my Storyblok application. And you can see here, I have my list and my styles.

So I'm getting that here have styles. He, and I've styled all of that inside this CSS file. I'm able to get access to these components here with the content, from my visual, from my headless CMS in and inside, because it's, that's, it's been, what is been, what is catering to that is this object I have here inside my components objects.

I have created, I've created my components and I'm assigning them as values to these components. I already have in my Storyblok github in my headless CMS. And if you check here and you see the names [00:13:00] do match the names I have here and what I also have in my Storyblok page, and you can see this page heading feature C and you look here, you see all of that.

So the reason why it's been displayed is because of this object here, this object is responsible for this now for all of this For my initiation of Storyblok, the reason why you'd have to be able to display that, okay, I have a pages folder and this pages folder that was created you was given to is installed when we install our NextJS package.

And in NextJS pages referred to components. So whatever, if your file, your Compli usually would usually have to any like an extension name, such as do JS or TS. So here, this refers to components and what this app do JS does is just, I'm basically just initializing my [00:14:00] Storyblok here. I could easily have done this inside or any of the.

Inside here, but just for file structure and proper arrangements is that's the reason why I did it inside my GS. So just to make it a little to just make it, Nant all of that. So inside my index, do GS, if you check close, I'm making use of I'm I importing head, and this is. A tag, which is provided to us by next year's you just automatically, once you use it, you just, your application just automatically recognizes that, oh, this is what is going to be in the head section.

Next year's provides us with these tags and there are several other tag that I provide us with. So that's also one of the uses of using next GS. And I am installing my get Storyblok API. What my guest Storyblok API does is that it provides me with. My API client and the API client I'm referring to in this situation is the one which I stored in my environment, variable, which contains the data inside all of this data [00:15:00] inside my headless CMS.

So I just want to show everyone the, and this is what's the data looks like here. I have a data to my pages section and the features section. Here it has a name and I just specified what type I would want to is going to be. It's going to be a text. And if you check, and when I open up my component, my feature component here,

my heading components here, you'll be able to see you might not. You notice that I'm not. Exactly. Putting in any specific text. I didn't have to type in any specific text. The reason why this is happening is because of this Storyblok the table, which I already explained that it's makes it possible for us to target the components we have in the, in CMS.

So [00:16:00] inside of my index, the GS, I am importing my guest Storyblok. API and my Storyblok components, which is all provided to me from my Storyblok react package. And here you can see, I have a function. It's my home function. And inside my head, the head section, to see, you can see the title here, head store gallery, every other data this heading, every other thing is, was given.

I got it from my API, which was wasn. From my Storyblok accounts. So now we have our get static props function. This is a function which is provided to us by NextJS and what it does. We use the get static props function when we want to. Retrieve data from a headless CMS, irrespective of the headless CMS you're using, this is the function provided to us by next years, to be able to access data from headless, CMS, [00:17:00] something other things.

It has other functions such as it's makes it possible. It provides you with if it also used when the data you'll be retrieving is one where you want it to be. You want your data to already be built before the user makes a request. It's usually used for applications that the content is going to be static.

So things like blogs or websites that you don't need to, that you don't, you won't always need or applications where you don't always need to make constant changes. And all of that, you, if you're going to be building something where the data, the user is going to be receiving, going to be constantly changing, we will not make use of get static props.

And another thing get static props does is that also. Render, whatever it's going to be rendering, whatever data is going to be rendering that we do users get to see, it's also going to optimize it for SEO, it's going to make sure that it's already SEO optimized. And it also caches all of that for the CDA in which all of this basically enhances web performance.[00:18:00]

So we have guest props and we are using it because we are working with a headless CMS. And here we have a guest Storyblok API. What guest Storyblok API does is that we are able to get I already explained this before, so we are able to just get interact with our API clients which contains data.

From our CMS and here we have our home slot. And what we're basically doing is just that we are saying that this is the default homepage. In CMS, we cater to that by specifying the real path, we specify the real path in, in the CMS. And what that does is, and you also, we make it of justice slash and what that does is that makes it possible.

For our application to realize that this is the base path, the homepage like of like when we want, where we create, we visit the application page. We know that this is going to be the very [00:19:00] first page that is going to get displayed. When we run our application, for this to be displayed in our visual, we make use of, we set whatever link next year's provides to us when our application has been run here.

And in the settings, you just would navigate to location default default environment. And you'd have to be the one to do these settings manually. It can be whatever next year provides you. Sometimes it can be 3010. The URL can be 3010 here. Mind. My local URL is 3000. So when you then here over here, we have.

What we are basically doing here. This is an important line. And so what we are basically doing here is that we are reaching out to our story. This is one of the reasons why we also get to use Azure, and we are just getting the data, which is being provided to [00:20:00] us from our CDN stories inside this, inside these stories here, we have our home stories.

This is gotten from this content we have. Right this log. And if you look closely, you see where it's specified here. So it's, we're basically just getting everything that we have inside of these stories in Storyblok, when you create contents that we, it is being referred to as stories. So here we have these stories and here it's indicated as content.

So whichever way you'd want to refer sweetest. And yeah, so this.

So this is us just getting everything that we have built from from our headless CMS. And we are passing it into our data, into the data object. Yeah. So this is basically how to connect the headless CMS, [00:21:00] depending on the headless CMS you use. Depending on the head CMS, you use it could range and it would be different, but there are setting, there are certain things that are constant, like the use of get static props, which is a function that is given to us by NextJS and the use of we storing, saving all of this.

The content that we'd like to display inside our pages folder and also creating a separate component for that the same way we would, if you were working with projects, if you're working like on a react project or if you project, so this component just, they are basically just referring to the components or the contents we already have in our C in our headless CMS.

And with all of that. That is how we are able to, we are able to achieve this static simple and static website, [00:22:00] if you would want to get more guide or you've never had to use next year's before you can easily just, you can easily go through the next GS documentation. It. Concise. And it's easy to understand, especially if you already have knowledge of reactions, it's really concise and it's properly documented.

And if you'd want to also maybe try out using Storyblok or any other CMS San full or whichever CMS that you'd want to use, you can also go through the documentation and you definitely. Where they specify how to integrate their head. NCMS using next GS. Thank you everyone. Oh,

**Jen Looper:** wow. That's really interesting.

And I think you, you showed us the value of using these headless CMSs. Yeah. And to give a shout out to Storyblok, they were one of our very first supporters. I was able to visit the head [00:23:00] headquarters in Lin. Back in the day, couple years ago. And it was really a wonderful experience to, to meet the team.

But I wonder if you have had other experiences with other kinds of cm, headless, CMSs, like people are talking a little bit in the chat about sanity and what's the other one Contentful, does Storyblok, can you do a little compare and contrast of these CMSs?

**Ifeoma Nwosu:** I haven't really worked with all the.

That CMSs the way I have with Storyblok. I have taken a look at sanity and documentation. I've gone through sanity before, and I think it's something I, that looks like something I could maybe pick a project and just to play around with it. And cause I really like the documentation. The documentation is properly is well written and probably written out and going through it.

It looks like a tool that. Will not be difficult to use. The reason I picked Storyblok is because they also provide a visual in a scenario where if you are not a developer, like [00:24:00] a developer gets to build. Developer gets to you get to build your application. And then if you can hand it over or hand it off to someone like the website, the web content manager.

And I know most of these people did some of the time, most of the time they are not really technical people. They just, they, what they get to do is Updates contents on the website. And if anyone has worked in, or you are familiar with our agencies work or something, you'd be familiar with this right web contents managers.

And so using Storyblok, it's just provides this visual edit and they can be able to make changes on just Storyblok. And those changes will be able, would reflect. In the application, you can also be able to add new pages, making use of dynamic routes. And I didn't really go into that because that's a whole, like the longer section and a whole Bluetooth, but yeah, they can also create pages.

Next year is also provides dynamic routes in the situation where you can create whatever pages using your headless [00:25:00] CMS, and your application is going to get to application just as if it's going to be as if develop. Created that from scratch, like from the application themselves, meanwhile was created by just.

You're not technical person. yeah.

**Jen Looper:** I can see a benefit for a company using a CMS, so because you have a team, you have your developers over here and your designers here and your content team here managing all of these things. What about if a solo person who's just wanting to create a portfolio like Annie's and then use a CMS behind it?

Is that a valid use case in your opinion, or does it too much,

**Ifeoma Nwosu:** Using, I would say you can create. Personal portfolio using next GS , but you do not really need a headless CMS for creating your. You do not really need to use a headless CMS if just I mentioned, you mentioned you can use a traditional CMS.

Those are CMS that come with. They already come with [00:26:00] templates and all of that. So headless CMS do not come with templates. You have to be the one to, you can see I saw the section where I created my styles and so you'd have to be the one to create these styles. And so you do not really need a headless CMS if you're except you want.

Showcase like you have a project where you've worked with the headless CMS and yeah, you can get to do that, but you don't really need to, if you want to make use of next year, that's very fine. That's all right. There's nothing wrong with that. That's one of the purposes we have jump that it's also, but.

If you, your beginner starting out, I would really not suggest just like a said, you can use just HTML and CSS to, so this is really for situations where as a developer, you build applications. And I know you have to hand them off to a content person who is going to where you're building a application that you know, has, is going to keep on having constant changes.

, the changes. Yeah. It's not a static. Yeah. Tion. Yeah. So . [00:27:00] Very, this is an approach, a good approach to use.

**Jen Looper:** Yeah, I'm remembering back now how we used Storyblok back with our first version of our first website@frontendfoxes.org. And what we did was we used it so that translation teams could log in and do translations of content that worked well.

So instead of, pushing to and expecting me to manage PRS that I couldn't really do so they could collaborate and get Spanish transla. So up to speed, that works pretty well. So that's another use case. Yes. Yeah. Cool. Thank you very much. It was a wonderful wonderful talk. I think we all learned a lot now.

We ready to level up once again.
