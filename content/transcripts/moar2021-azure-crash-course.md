---
_build:
  list: false
  render: never
---

# Azure Functions

**Gwyneth Pena-Siguenza:** [00:00:00] Hi everyone. Thank you for joining us here at more serverless. My name is Gweneth Panza by day. I'm a cloud at Microsoft and by night, I like to consider myself a YouTuber over the next 30 minutes or so. I've got an Azure functions crash course for you. And my goal with this talk slash demo is to kickstart your Azure function.

Journey. We've got a little picture of me and obviously my face is here. I'll have some resources and some next steps in the social media. So you can ask me any questions towards the end of the demo. Okay. So let's start off with what is Azure functions? What is serverless? Microsoft docs tells us that Azure functions is a serverless solution that allows you to write less code, maintain less infrastructure and save on costs.

But if you were to ask me, Gwen, [00:01:00] could you tell me what serverless and Azure function is in six bullet points? I would tell you first off serverless to you as the builder, as the developer, as the engineer, who's utilizing serverless technology to build solutions essentially is server maintenance list.

That's not as catchy as serverless. So yes, here we are. But you do spend a lot less time provisioning and managing. Infrastructure since all of that is handled by the platform. You've just got some options to select when you're, creating your functions and such. It does become server maintenance list to you.

Azure functions is a fast stands for functions as a service. And it's probably the most popular subset of serverless. There are others, you have serverless databases, you have serverless storage, serverless messaging, but fast is probably the one. Is most spoken of most used and such. AWS has Lambda.

Google has cloud functions. Azure has Azure functions and I'm sure the other cloud platforms have their own offerings as well. Each Azure function [00:02:00] will run in response to an event and in Azure functions, land, these events are known as triggers. and each function must have only one trigger depending on what you want your function to run in response to you'll use a different trigger.

If you want it to run in response to a file being changed, you could use blob, trigger a change in the database. You could use cosmos DB, a change in. I don't know some messaging queue, you could use the queue trigger and so on and so forth. There are several options as well. I'm going to have the documentation page where you have all the bindings and triggers listed in the resources page.

Speaking about bindings are a way of declaratively connecting other resources as input or descent output to. From your function. So say you want your function to run in response to some HTTP event, but you also want it to pull data from a [00:03:00] database. As input, you could use an HTTP trigger and then an cosmos DB input binding if cosmos DB was your database, and if you wanted it to save data from that function back to the database, you could use an output function, output binding, excuse me.

From that function. And I actually just described the demo that we're going to be using, but more on that later, no different plans for different needs. If you need something more dedicated, more premium, more processing power, we have plans for that as well. But I wanna talk about the consumption plan where.

It's I believe where Azure functions and fast in general really shines. It's the best like bang for your buck. You're only paying for when your function is running. So if your function runs 10 times a day, and for each time it runs I don't know, two minutes. Then you are only paying for the time that it's running.

There's no dedicated infrastructure for you to pay for. You don't have to pay for something that's running 24 7. Nothing like that also with our consumption plan per subscription, you get a million executions and a [00:04:00] grant per month. So if your function stays under that, if your functions stay under that, that grant that you get every month essentially your compute, your function costs will.

Be free that you might still have to pay for storage and other services that you might be using with your functions, but in terms of the functions, if you stay under the grant, you're not paying anything. And currently C sharp of sharp JavaScript type script, PowerShell, Python, and Java are supported languages.

Yes. You heard it here, folks, contrary to popular belief. Azure, we do support many other languages outside of C sharp, be shop in PowerShell and we support them well, and they are documented . Alright let's talk a little bit about use cases and what are some things that I can build with functions and how can I have some fun with functions?

So this first idea I have is a customer product review page. We've. Static page customers can go and leave reviews on a product that I sell. The data of the review can be stored in Azure storage and cosmos DB. And if I wanted to implement [00:05:00] some sort of moderation, I could use an Azure function to leverage Azure cognitive services and perform that moderation.

I could also build in an Azure functions solution that will format and submit some files for me. So let's say we have 50 XML files that are generated from another website that we don't necessarily have access to. Another part of the engineering team handles that, and we need to grab these 50 XML files between.

Nine and 10:00 AM every single morning and each file needs to be uploaded to a website, but each file also has a specific set of credentials. So what ends up happening is you'll have one file. You'll download it from where it gets generated from you'll grab the data and then you'll upload it to this.

You log into this website, upload it, wait for success messages, log out, and then repeat that 50 times. Or how many times you, how many files do you have? We can create an Azure function with a blob trigger that will run whenever the [00:06:00] files are uploaded, it'll grab each file, grab the name and it knows which set of credentials to use, depending on the name.

It can go to Azure alt. Pull the correct set of credentials, come back, parse the data and then submit to the website that it has to submit to using their API, that they have. It is actually a solution that I built when I was a system administrator. And it was one of the solutions. That allowed me make my case for promotion to cloud engineer.

So that's why I added it here. It's actually something that I built and this ended up saving the company. I believe two hours of two employees time, every single day. That saves times saved money. And the solution ran for, I believe, I think like 30 cents a month. And that was mainly on storage costs, not the function, because it was running under the million execution grant.

But yeah there's a couple of other things that that we can build with functions, scheduled task [00:07:00] reminders and notifications. Also, if you need to make stateful functions there's the Azure durable functions extension that you can utilize lightweight APIs we can run background tasks and a bunch more.

Also keep in mind that functions are great to build full on solutions. But you could also use it to say, implement a feature of some sort of solution already. You don't have to necessarily build something full with servers or Azure functions. So keep that in mind as well. So let's dive into the demo.

Let me just talk a little bit about what we're actually building. We have a visitor page that already exists. So this kind of falls into that category of let's create an, a feature or functionality with the serverless specifically Azure function. So we have a aesthetic website. It's got some Java script code in it to display this visitor counter.

and we have a Azure functions, which is going to become the, a the API that we call it from the JavaScript code, the function whenever it's called, it's gonna go to cosmos DB, grab the BI [00:08:00] counter data, return it to the function. And also we're going to increment that one each time that we're retrieving the counter because.

Visitor counters work each time there's a new visit. There's a new page refresh. We have to increment that counter. So very straightforward demo, but it's gonna show us quite a bit. All right. Let's actually move into showing you the static page that I have. So straightforward. It's like the landing page.

I have all my social media links down here. I've got my Twitter, I got my blog. got my YouTube and such, but the important aspect here is this line here says. And this page has been viewed times in a little smiley face. We've got the web console opened here and of course we get an error because we haven't built the API.

Let me show you the JavaScript code. That's actually working on this now, please. I am not a JavaScript developer by any means. So do not roast this code. But [00:09:00] essentially what's going on here is when the page is loaded, it's gonna call this, get visit count, and this get visit count is going to fetch the API, the data from the API and parse J on and give us the count.

But I have this local function URL in the production function URL. So the local is once we build our local function, we're gonna put the URL here and then we can get it locally. And once we deploy the function to. To Azure we'll pull the production function URL and make sure that works as well.

What I'm actually gonna do is open up terminal. And from here, we can go ahead and make a new folder unless I already made one. Yes, I did make one already. So let's move into that counter folder and then we're gonna open this up. Now I'm gonna be using.net. I am a.net developer. . But. You could develop this in any of these supported languages.

I'm gonna try to keep the programming or the code aspect as general as I can, and nothing too specific [00:10:00] to done net. Visual code has the Azure functions in the Azure extensions that you can utilize to scaffold The creation of functions. So it's this little icon down here. I'm gonna go ahead and click on the create new project.

And since I'm already in the folder that I wanna create it in, I'm just gonna select that one, see sharp. And then it asks this is specific to.net, but I'm gonna use the.net five runtime. And then we have all the triggers that we could utilize. We. Queue blob event, service bus event grid, cosmos DB.

So again, to mix and match for your needs. So I'm gonna select the HT D P I'm gonna call it counter. Here we go. Oh, we're gonna have to excuse my typing. I just got a new keyboard and I'm still getting used to it. Probably not the best time to get a new keyboard. right before a demo. But here we are.

All right. And I'm gonna set the access right to functions. This essentially tells us oh, who can access the data that's being provided by the function. And I'm just gonna set it to functional. All right, let's give this a quick minute or so. And [00:11:00] depending on which Lango, you'll use, there's certain things that you'll have to download for.net, you'll have to install the version of.net you wanna utilize.

And you'll also have to install the Azure functions, core tools, which is a CLI that enables us to create functions and things like that. Alright, so what we're actually gonna do right now is run this function because even though we just created it and made no changes, it's already. Full on running function.

It's a pretty straightforward and simple one, but it actually does work. So let's go ahead and run it. And in the terminal, we're gonna get an output. We're gonna get a URL that we can navigate to. And it'll actually display the output of our function. Now to not get too in the weeds of the code, essentially what's gonna happen is the function gets triggered because of the URL that we visit.

And it's gonna give us a response message that says welcome to Azure functions. If everything works correctly and as expected.

All right.[00:12:00]

here we go. Functions and we have counter. Now, this is actually a list. If we had more functions in this functions project, we would get the name of the function and the URL, but we only have one here. So I'm gonna copy this one and head back into browser and paste it right here. and we say, we got that message.

Welcome to Azure functions. Fantastic. So I'm gonna stop this one. And what we're gonna do now is head into Azure actually, because we are going to utilize cosmos GB as the database for storing our counter data. I went ahead and provisioned a new cosmos D V account. To save us some time, but I have a database here called more serverless, and then I have a collection inside that database called counter this cosmos DB, we're utilizing the serverless plan and we're using the SQL core [00:13:00] API.

And then the collection encounters has our items and our idea is one and our partition key is I set it to the ID. So it will also be one. And we have. first item here. We could also right. Click on items and select new SQL query and then just hit execute. And we'll also see our items in here and we just have one item.

So what we wanna do now is get our function to pull this specific item and display it when we hit the URL. So when I go here, instead of it saying welcome to Azure functions, I want it to show the ID in the account of this item. All right. First thing we actually have to do is grab. Package from new get if you search for Microsoft Azure functions, work at work, your extensions, it'll show you all the packages that you can use for when you're working with.net five functions.

I'll make sure to add this and some related documentation about this in the resources. But since I want cosmos DB, I'm gonna scroll down to cosmos DB and then grab this one here, and then we're [00:14:00] gonna head back into. Our function here, pull up the terminal and then just paste in that. Not F five now, certain bindings and we'll need different packages and some won't need any it'll be in the documentation list of what you have to install.

Okay. To utilize Cosmo's DB, we also need to have its connection string. I'm gonna go into our Explorer here and open up our local, that setting such a on this is where we can keep our environment variables and such. This file does not get uploaded. This specific file does not get uploaded.

When you deploy your function to production. There are other ways to configure these like your environment variables. And I'll show you that later. So we're gonna call this cosmos D B I'll just call it cosmos DB, and then we're gonna grab the actual string. And if we go into the portal and we go to keys.

We have this primary connection string.

It's getting, being a little buggy. There we go. [00:15:00] And then we'll paste it in here. Fantastic. Alrighty. So now we can go back into the. Counter file. And we'll add to the binding, the input binding for cosmos DB so we can display the data. So we'll add it down here. It's called cosmos DB N DB input. There we go.

and I know that we need to provide the database name which is more serverless. And we also need to provide the collection name. Which is counter. I believe it's counter. Let's take a look once more, just so I don't make that mistake more serverless and yes it is counter. Okay. Let's head back into here and let's set it to counter.

And it's gonna need to know which connection string we're utilizing. So cause most the connection actually, is it just connection, [00:16:00] string connection, string setting. Here we go. And it is cosmos. DB. And then we also need to provide the ID of the item, the actual yeah. Line item that we're pulling.

And it's one, and then the partition key, which is also one, because it matches the ID. So I'm gonna close this here. Just so we have a little bit more room and we also do need to save this to an object. I'm going to go ahead and create a class in here. We'll call this public class counter J on, I believe this class already called counter, so we can't have the same fantastic.

And in here we have Yeah, I'll look at that. already suggesting the code for me. So I have an count and then we also have a string ID. There we go. So this is describing the. The data, the item that we're pulling from cosmos to [00:17:00] be, I just wanna make sure it does match. So if we go into here and we go into items, we see that we have ID lowercase and it's a string.

And then we have count also lowercase here. And it's a number, so it's an in there. But since these are, following of the correct sick tax, we're probably going to need to use adjacent property here. Jason property, I believe it's name. And we're setting it to count and then we'll copy the same thing here.

And whoops, go down here. We'll set it to ID. And this is because this count here is a upper case and the actual J SL case we're probably gonna need to, there we go. Yes. Okay, awesome. So now that we have. The class we can save the input here as an object. And we can say counter Jay and we'll call it counter.

And yes, we need that com at the end here. [00:18:00] Alrighty. So we don't need any of we could keep this is just a message to the council. We can remove this though, and we're going to display the counter. Data. So we'll grab this here and then we'll just say return the counter data. And we're probably gonna have to change the return type because it's no longer an H CTP response data.

It's going to be an object. All right. So we've got our connection string. All right. I think we've got everything we need. Yeah. So we're telling cosmos DB input. When this function executes go to the more serverless collection. Database then go to the counter yeah, or go to the more service database, go to the counter collection.

And you connect to that. Using the cosmos to be connection string, go find the item that has the ID one and partition key one. And then save that item into this counter object and. We're just going to return that counter object. Okay. So let's go into [00:19:00] here and let's add some break points just so we know what's going on here.

We'll do one. Yeah, right there should be fine. Let's go in, run this thing. Quick water break.

Okay. So the URL shouldn't change because we haven't made any changes to the function itself, or we haven't customized the URL, anything like that. So we should still be able to go to the browser, refresh that tab that we had open and view the output of this item.

Few more. Okay. It looks like we haven't had any errors yet, so we should be able to get, here we go. So it's that same URL. Let's head into the browser and let's refresh this and let's see what we get.

Okay. [00:20:00] It hit our break point here and we can just open up variables here. We are take a look at our counter and we see, we have the count in which is one and then the ID, which is also one. So let's just move forward there. And now we see our JSON being displayed right in the browser. I'm going to actually remove this.

We're gonna disable that break point. That way. If I go into cosmos DB here and say, I wanna update this count to be. I don't know, 56, then I hit update. When I go to the URL and refresh it, it should now display an updated count 56 right now, the thing now is, as I refresh, it's always gonna be 56, cuz there's no functionality increasing this, but we can do this.

Adding a cosmos to be output bind. So we're gonna stop this here and to bind [00:21:00] the output binary, we have to actually add it as a attribute. So we're gonna say cosmos, be output, and it's actually going to be the same

settings as we have here.

There we go. I think we've got everything right. And we don't need to add the partition key or the ID because the function is assuming, like you're already working with some sort of cosmos DB object. So I don't need to know the ID in here. All we have to do now is increase the look, look at GitHub co-PI.

All we have to do is increase the count. So I'm gonna go into counter, which is the object that we're grabbing and it's count property. We're gonna increase that by one, and then we're gonna return that one. So now we should be able to run this one smore and each time we visit the URL, it's gonna go up by one.

Ready? Let's snap. Make sure we take a look. So let's look at the value right now. It's 56 and inside of cosmos DB, it's also 56. I'm gonna actually pull up a [00:22:00] new sequel query here. and we're gonna run this year and just to make sure we get the same data there. Okay. It's 56. This one is still running for us.

It's about to run actually, no errors so far successful demo, I would say I always get it nervous when running demos. You never know what's gonna work. What's not gonna work. okay. So again, should still be that same URL that we could access our function. Cause we haven't made any changes there.

Alrighty. So if I go in here and I hit refresh, it should return 57, a real 57. If I refresh it once more, it should give us 58. Perfect. And if I go into cosmos DB and I hit query, we see that it's also getting updated here. And if I go once more. 59. Fantastic. All right. So now what we're gonna do is grab this URL and then go into the, ah, I forgot one thing already.[00:23:00]

We're gonna need to enable course if I go to the local dot setting such JS on, and then I'm gonna have to add another item here and it's gonna be called host.

and we need local HTTP port is going to be 70, 70, 71. Cause that's the one that the function is running on. And then we're gonna say course is enabled. We're just gonna add a wild card in here. Oops.

There we go. Okay, cool. So now if we run this once more, it'll run with these core settings and now let's go into the index at HTML and then provide the URL that we just copied this local host. And then let's make sure the function is pulling this correct URL. Yep. So it's saying fetch local function URL.

Perfect. Alrighty. And. This should be saved [00:24:00] already. So if we go into the aesthetic site, as soon as this function is running, we can go ahead and refresh the static site and it should be pulling that data for us. Okay.

Few more seconds and it should work. All right, cool. So now if we go into the site and then hit refresh, let's take a look at what happens. All right. No error so far. There we go. 60 times if I hit refresh there now it's 61. If I hit refresh again now it's 62. If I go into the cosmos DB. Account and execute is also matching so great.

We've implemented this functionality. Now the last step is to deploy the function to production. So let's stop this. And if we go back into our Azure functions, extension, there's a little icon here that we can utilize to upload the function to Azure or deploy it. We can click on that. [00:25:00] I wanna click on the subscription that we wanna utilize.

I'm gonna create a new Azure functions and we're gonna call this more serverless, serverless counter. And it's done at five that's the SAC I've been using. I'm gonna use east S two and it's going to go ahead and deployed. I went ahead and already deployed one for us just because it does take a couple of times.

And I don't know how much time is left for this demo. I think we have a few minutes left, but I already deployed one. That is the exact same functionality. And I'm in my function apps and I'm gonna select the more serverless. If we needed to add environment variables, like I mentioned before, if we go down to configuration here on these left side, we have all of our application settings function, run time set in general settings as much.

And I have this cosmos to be connection string in here with add value set. We can add more using this new application setting or if you need to add any of the other ones. Set them in the individual tabs. All right. And also [00:26:00] course settings. If we scroll down here, go to here. We also have these enabled, I have that wild cart in there.

Just is this for a I guess development production, you would wanna be more specific as to which origins you want to utilize. So on the left side, I'm gonna go to functions and I'm gonna grab our counter once more. And then I'm gonna go to code test and grab R U URL. get function URL, and this default is fine.

I'm gonna copy that. And I'm gonna paste that into the browser and we have 63 and 64, and this is pulling the same exact cosmos DB item from the same collection from the same database. So I'm gonna just grab. Your again, and then go into our aesthetic site and paste this in here.

And then I'm also going to tell it to use the production function instead of the local function. Fantastic. Let's save that and then let's go first. Let's just, it's 64, just to make sure [00:27:00] it is pulling the right one. I'm gonna update this item to be refreshed it. Let's refresh the actual page. It wasn't pulling the proper value counter item.

The item is oops, here we go. 64. Let's set it to 164 right now. Then we'll hit update. Okay. If we now refresh the page, it should be pulling from the. 165, and it's calling our production URL now. Let's go back to visual studio and just make sure it did upload. It still looks like it's still uploading at the moment.

This does take a few minutes. Let's give it a few more minutes, but yes, let's summarize what has happened. Yeah. We created the Azure functions using virtual studio code and we selected the scaffolding options at the beginning. Give. A lot of customization I'll hold on. This just uploaded. So deployment to more server.

Counters completed. And we AC actually upload our settings here. [00:28:00] So what it's gonna do is grab that local dot setting slash J on file, and then add it to your settings that I just showed you the connection strings and all that kind of thing for us. So if we go into our list of functions we'll go back here and we'll hit refresh here.

We should see that more serverless counter in here. And if we go down to configuration we should be able to see. That the cosmos DB connection string has been added here for us. We would have to customize an add course and all those things as well. And if we go into the function here and then select the counter and then go into code test, we could pull it URL on and things like that.

And that is actually it for this demo. Let's head back to our slides just to cover some next steps and resources. So added a bunch. Documentation and articles and things that you can take a look at here. And you could always reach out to me. If you have any questions add made by GPS on Twitter, I'd be more than happy.

And I know we have some Q and a time here too, so we can [00:29:00] dive right into that.

**Brian Rinaldi:** Thanks Quinn. That was a fantastic presentation. And you changed clothes in, costume like that how'd

**Gwyneth Pena-Siguenza:** you. Yeah, I had to get refreshed to answer all these questions. ,

**Brian Rinaldi:** Now, it's really interesting to me cuz I I think, my experience with serverless is primarily doing function.

This is really interesting to me cuz that's where I spend most of my time when I'm using serverless is arriving serverless functions to work with my primarily jam stack applications, not, not.net, but dot net's cool. Yes it is we do have a number of questions from the audience I'm gonna get right to 'em first up far ha asks is go, going to be supported in Azure functions.

Do you know?

**Gwyneth Pena-Siguenza:** I don't have an exact answer for that. I would say the roadmap is prob which I'll link. In the resources, which there's a GitHub re I'm not sure if I provide the link. Is that something we can get in the put in the chat? Yeah, we can put in the chat. So if you GitHub slash made by GPS you'll find the more serverless demo there and the resources of the roadmap will be there.

And you'll [00:30:00] see if that's planned on being supported. I think so, but I don't wanna like lie.

**Brian Rinaldi:** Yeah, totally understand. So Nick ask. For the static run method you used, can it be typed better than just

**Gwyneth Pena-Siguenza:** object? Yes, absolutely.

**Brian Rinaldi:** Okay. That was quick and

**Gwyneth Pena-Siguenza:** easy. yeah. I just tried to keep the the code as high level, like not very.net specific to keep it as general as possible, but yeah, you can, at the end of the day it's code that you can use to however you'd like to.

Okay.

**Brian Rinaldi:** And Nick also follows up with. Will rust be supported, I'm guessing go to the same document for

**Gwyneth Pena-Siguenza:** the roadmap or I'd like to say yes, I'm not a hundred percent sure, but I know there's a lot of talks about rust. So yeah. Keep keep a look at the roadmap.

**Brian Rinaldi:** Cool, cool. And so it was github.com/made

**Gwyneth Pena-Siguenza:** by GPS.

Yeah. Slash more serverless demo, more

**Brian Rinaldi:** slash, okay. We'll get that in that chat. Okay. so another question, how long can an Azure function run for?

**Gwyneth Pena-Siguenza:** If you're on the consumption plan, I [00:31:00] believe the highest that you can increase it is. 10 minutes. And the consumption plan is the one that's the best bang for your buck, where you're not paying for dedicated anything really 24 7, just for the amount of time that your function is actually running.

**Brian Rinaldi:** Okay. Okay. So

**Gwyneth Pena-Siguenza:** if you need more longer, you might wanna look into something like durable functions, where you can create like stateful functions. And if you need human interaction or need to wait for something, you'll have that, or you can look into the like premium plans or other options that you have in terms of like the pricing.

**Brian Rinaldi:** Okay. Michael asked, this is not related to Azure functions, but I have a feeling I know what it was, but what was the extension plugin that you used to blur out your connection, strings and keys? Is that the one John Papa wrote?

**Gwyneth Pena-Siguenza:** Yes. I believe it's called Azure mask or AZ mask, something like that easy mask.

**Brian Rinaldi:** Okay.

**Gwyneth Pena-Siguenza:** Yeah, but if you'll Google, you'll probably be able to find it. It's. Top result.

**Brian Rinaldi:** Yeah. Yeah. It's, I've run into that problem too. And somebody tipped me off on one of those those plugins recently, too, that, cuz I'm usually like [00:32:00] using my second screen dragging stuff over, doing it over here, dragging me back kind of

**Gwyneth Pena-Siguenza:** thing.

Yeah. For it's a pain. So it's quite a nifty nifty little extension. Absolutely.

**Brian Rinaldi:** So Ryan asked is visual studio code best or the preferred way to edit, to work on Azure service development?

**Gwyneth Pena-Siguenza:** I would say. It depends on what you're actually building. I think visual studio has more like tools, but visual studio code can get you just as far I would say.

And it's, I think it, it will come down more to preference. I love working in code. It's just easier. Plus it looks nicer. In my opinion, don't tell the visual studio code, the visual studio team that I said that, but it's at this point, I think it's up to pre.

**Brian Rinaldi:** Okay, we'll keep it a secret. Don't worry.

Michael asks, what are the requirements to run an Azure function? Locally example, do we need to have Docker installed or is it all part of the SDK?

**Gwyneth Pena-Siguenza:** So you'll have to download obviously whichever like programming language you're working with, you'll have certain requirements for that, but in [00:33:00] terms of like specific to function, you'll have the Azure functions, core tools.

And then if you're using visuals to do code, you're gonna have to have some extensions there that make it easier to like scaffold functions and deploy things to Azure. But outside of that, I don't think you need anything else really. But again, that is also linked what you need to run locally, depending on which language you select is gonna be linked in that could have a repo at the bottom.

**Brian Rinaldi:** Okay. I will add that as soon as this is over hard to type and chat and yeah. And follow questions and so forth. All that stuff at once. So I, we're down to like just a minute and a half left here before we end. So I just wanted. Time to thank you for your presentation.

Thank you for answering everybody's questions. This was great. I think we all learned a lot. And hopefully you enjoyed it as.

**Gwyneth Pena-Siguenza:** Oh, yes, it was great. If anyone wants to chat more about this, if functions serverless Azure in general, or cloud computing in general Twitter, I'm always available.

My DMS are open and feel free to ask me any questions. I have a bunch of functions related content on my YouTube. If you're interested in that as well, [00:34:00] a bunch of tutorials on there. Awesome.

**Brian Rinaldi:** Actually I got one quick question from San Kate came in at the last second. Sure. He says, is there a way to update application setting in Azure functions automatically, for example, secret

**Gwyneth Pena-Siguenza:** keys you want to update 'em or I need a little bit more context as to what's what you're trying to do, like in production.

Update 'em from that once it's in production, you wanna update 'em from local?

**Brian Rinaldi:** Not sure,

**Gwyneth Pena-Siguenza:** actually it, if it depends on where it's at, if you're using like something like alt, you would have to get, 'em done inside key Al or use the SDK. If you're using in production, there's this, there's an area for this which we did cover for the function settings to change.

'em there. If it's local, you can look local at settings at J on. It depends on where you're trying to edit.

**Brian Rinaldi:** Okay, that makes sense. Great. Thanks so much.
