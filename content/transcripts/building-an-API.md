---
_build:
  list: false
  render: never
---

**Lauren Schaefer**  4:50  
Thanks so much for having us, Brian. We're so excited to be here. So yeah, today we're gonna be talking about API's. And focusing in specifically on rest API's. Now, Taylor Swift concert movie was just released a few weeks ago, I guess a month ago now. So this is going to be Taylor's version of the talk, which I'm very, very excited about. Ken, how do you feel? Are you are you a Swifty?

**Ken Alger**  5:22  
My daughter is. So I guess I'm a swifty, the parent of a Swifty.

**Lauren Schaefer**  5:28  
The parent. Okay, that counts. So everybody joining us today you can either become a swifty for the day, or just think of this as a talk about API's. That's fine, too. Now, in honor of Taylor, I did want to kick things off with a song that seems appropriate, right? So I use generative AI to write a song for us about bad API's. And I want to share with you what it came up with. Now, Ken, and I did tweak it a little bit. Now, Ken, are you a singer?

**Ken Alger**  5:59  
Only when I want to scare people away? Like if you want me to start singing? We'll watch the ratings of this. Go to zero. So let's not have anything. How about you?

**Ken Alger**  6:11  
Also not not a singer? So you want to just read it?

**Ken Alger**  6:16  
Yeah. But okay, let's read lyrics. And hey, if somebody out there is really good at music and wants to put this to a tune and record it, that'd be amazing. But that's not my skill set. So there we go. That's my disclaimer. All right. API was a developer's lament. We built an API I thought it was okay. developers tried to use it, but it caused dismay, no version control, no docks to be found. We mean things haphazardly left them unreal. Now.

**Lauren Schaefer**  6:52  
There's a pre chorus. Developers called we broke their code status codes and errors we ignored. We rate limited them didn't care at all. Our API was a disaster. We watched it fall.

**Ken Alger**  7:06  
Oh the chorus. Look, what you made me do built an API that developers hate bad blood between us. I think that's kind of a that. So I think that's a reference to some filler thing. Bad Blood, but they can relate. Look what you made me do push changes whenever we felt like it. Now our API is a piece of okay, sorry.

**Lauren Schaefer**  7:33  
All right. Second verse. We used offensive language thought it was cool. Developers didn't think so thought we were fools. We broke their promises change the API. Inconsistency killed them. We didn't even try. There's a bridge and on our tailor. Now we know we messed up bad. Our API was the worst we've had. Well version it add some Doc's name things consistently. No more mocks. Take us home, Ken.

**Ken Alger**  8:04  
All right. Look, what you made me do built an API. The developers hate bad blood between us. They can't relate. Look what you made me do push changes whenever we felt like it. Now our API is a piece of something.

**Lauren Schaefer**  8:20  
Piece of something. Okay. Well, before we go any further, we should probably introduce ourselves. So we should do that. So hi, everybody. My name is Lauren Schaefer, and I'm a developer advocate at Grammarly. I started my career as a software engineer at IBM before moving on to be a developer advocate at Sugar CRM. And then MongoDB, which is where I met Ken. And then now at Grammarly. I would love to connect with you on social so both the QR code on the screen and the URL which is gram.ly/lauren_cfe. Both those will take you to my link tree you can find me on LinkedIn, X and Tik Tok. Alright, and Ken over to you. I see you have your cowboy hat on. You're a wild west coder. Tell us about that.

**Ken Alger**  9:17  
Yeah, so I do a live stream every couple of weeks ish with Cisco dev net, called Wild West coding. It's all about coding and Go Lang and creating an API and application with that. So I've been at Cisco for a few years before that I was at MongoDB. Met Lauren there. Before that I was an online instructor at a online learning place called Treehouse, and before that did a bunch of other stuff. Yeah, so happy to be here and let's head on down the trail of API's here, Lauren.

**Lauren Schaefer**  9:57  
I can't, with the Western references. Okay, so I think I think that's it. Let's, let's just jump in. So we started building a. What's that? With our boots on? With our boots on? Yeah. Okay. Um, so we started building a Taylor Swift fan sites so that Swifties can come to learn more about her tours, and her concert films, and more. Can I'm just gonna acknowledge the fact this is not the prettiest site we've ever built.

**Ken Alger**  10:34  
Well, like to be fair, none of my sites are pretty.

**Lauren Schaefer**  10:40  
Okay, but we're not designers. This is not a talk on design. So everyone just pretend that this is a beautiful site. Okay. What technology is behind this, this site?

**Ken Alger**  10:53  
Flask is kind of the main Python library. And then for templates for the website. It's all in Jinja, which is one of the templating libraries.

**Lauren Schaefer**  11:06  
Nice. And what made you pick up Flask?

**Ken Alger**  11:10  
Well, because I like Python, you know, and then as we were doing the Taylor site, I thought, huh, Taylor, one of her albums is 1989. The year she was born was the year of the snake in the 20s. thing. So you know, there's deep rooting stuff there. I guess I could have maybe gone with a different language like, Swift. But yeah, I'm not that fast.

**Lauren Schaefer**  11:45  
I can't. I can't. That's like Taylor level easter eggs there. I'm pretty impressed with that trail you made. Okay. So in order to get the information to include on the tours and the concert films pages, we're going to be accessing a Taylor Swift API. Now, Ken, and I created this API specifically for this presentation. So anybody here feel free to hate on it? It's not a real well, it really works. But it's not a real deployed API. So it's totally fine. We can be the haters. Do you get the reference can

**Ken Alger**  12:23  
say sadly, yes. Okay, good.

**Lauren Schaefer**  12:28  
Okay, good. Any love gifts? We know that. All right, so let's, let's jump right in and start out with our first API call. So I'm opening up VS code. And here I've installed the postman extension, postman is great. It does a lot of things. But it makes it really simple to make API requests. So I'm going to start out by making a get request on the root endpoint of our API. So I'm going to send that request. And the results pop up down here at the bottom. And it's giving us not a whole lot of information. So we've got tours URL, it's telling us is slash get all tours. And you know it can since since you're here, I'm just going to blame everything that we hate on you. So can what what's the deal? i Why am I only getting information about one endpoint here?

**Ken Alger**  13:24  
Because I'm mean.

**Lauren Schaefer**  13:26  
You're mean. Yeah. So are there more endpoints?

**Ken Alger**  13:31  
Yes. But I'm not going to tell you about them.

**Lauren Schaefer**  13:34  
So rude. So rude. And I also don't know if there's documentation or not. So like, this is all that I have to go on here. So I mean, I kind of hate this. When you're designing your API, you want to make it discoverable. Right. developers want to be able to navigate through the API simply by using the information provided in API responses. So I guess I'm going to try this one. API slash get all tours. Didn't even work can can't even work.

**Ken Alger**  14:10  
Wonder what should be get alltours tours, not get altours?

**Lauren Schaefer**  14:15  
Probably. Yeah. Love that typo. There we go. Hey, look at that. All right. So

**Ken Alger**  14:26  
I've never made a typo in my life.

**Lauren Schaefer**  14:29  
Exactly. I'm sure. It's very true. All right. So we're getting the information about all the chores, but I really had to work for it, which I kind of hate. So just kind of just kind of I'm not I'm not angry yet. I just kind of hate. So first way to build an API that developers are going to hate hate hate is to keep your endpoints like a secret like at this point, I'm still not sure what else this API can do, since that response from it, when I call the route endpoint only listed one endpoint, and I don't have docks. So how can we make this better Ken?

**Ken Alger**  15:16  
I mean, so if I was a nice developer, right, and like was making an API that people would actually like to use, you know, like, you could make things discoverable you could make doc you can use something like swagger, perhaps to auto generate Doc's just from your code as you're going along. Yeah. And then when you make changes to your API, your Doc's can be automatically updated. But this talk is all about how to make an API developers will hate. So we wouldn't want to use something like swagger and make things easy for them. We're trying to make this difficult.

**Lauren Schaefer**  15:55  
You're right, that was a bad question on my part, I'll try to refrain from asking you that in the future.

**Ken Alger**  16:00  
Refrain, isn't that back to a Taylor Swift song reference? Sorry.

**Lauren Schaefer**  16:05  
Excellent. All right, I'm gonna pop back to this API response. So we've got the response body here, I'm gonna take a look at the headers that came back. So we can see we've got the date here. This really is live. We can see the content type, which is not quite right, but I'm gonna let that go. We can see deprecation is set to true. So I guess you don't want me using this endpoint anymore, huh? No, no, no. Okay, so it looks like there's a link here related to the deprecation notice.

**Ken Alger**  16:46  
Did I do something right.

**Lauren Schaefer**  16:48  
Perhaps you have docs!

**Ken Alger**  16:52  
Oh. Yeah, I'm only kind of nice, little

**Lauren Schaefer**  16:59  
kinda nice. Alright, let's take a look at this documentation. So it's saying the get all tours endpoint, returns a list of Taylor Swift tours. That makes sense. And then there's this deprecation. Notice saying this endpoint has been deprecated. Because Only an idiot would use this naming scheme. Use API slash v1 slash tours instead. Yeah. Can we can't call people idiots. Okay. Right, that doesn't feel very, like kind or very inclusive. Honestly, it makes me afraid to like, contribute to this API, because I don't know if you're gonna call me out.

**Ken Alger**  17:44  
Yeah, I mean, that's, that's fair. Okay. Okay. Oh, you should use more more inclusive language. You're right. And there are a lot of resources out there for inclusive language, things that don't cut like a knife.

**Lauren Schaefer**  18:07  
That's right. Yeah. So there's lots of guides available, or you can use tools that will check for you. And offensive language can range right. There's there's seemingly small stuff like using the pronoun he for anonymous developers, like all the way to hate speech. And the impact is going to vary, certainly, but it's it all distracts. So you want to use inclusive language in your API and in your docs. All right, let's, let's flip back to that deprecation. Notice, it looks like you actually told me what endpoint to use instead, which I kind of like you must have been in a good mood when you wrote this.

**Ken Alger**  18:48  
Welcome.

**Lauren Schaefer**  18:49  
Let's, let's try that. I'm going to flip over to the response body. Hey, and it actually it's working. So we've got in JSON, I love that. Yes, we've got an array of objects each object looks like is related to one tour. So you've got all the tours here. Okay, this looks good, Ken.

**Ken Alger**  19:18  
Well, I mean, she only has what 7000 tours or something. I don't know how many tours she's, she's done, but it seems like every two years I'm having to cut a big check to feel her plane. My daughter go to concerts.

**Lauren Schaefer**  19:36  
I'm sure they thank you for it.

**Ken Alger**  19:38  
Yeah, I'm sure.

**Lauren Schaefer**  19:40  
Yeah. So let's take a look at the data that's in here. We've got a title of the tour, a unique ID for each tour. The date it started the date it ended, the album associated with it, the number of shows how many people attended, and then the set list which is an array of, of strings, each string represents one song. Encore, same thing and array of strings. Pretty cool. Okay. I do want to hit on this API slash v one thing. What's this V one about? Well,

**Ken Alger**  20:19  
in case you want to version, your API, change the data, just change how it's getting accessed. Again, if I was a nice developer and wanted to make things usable and friendly, you know, you would have given versions so that as somebody calls the API, they know what to expect when they get it back.

**Lauren Schaefer**  20:41  
I love it. So this is actually not something I hate. I actually kind of like this. There are a few different ways to handle API versioning. But this one is nice and easy to follow. So two thumbs up for you on that one. Okay, so we're getting information about all the tours, is there a way I can get information about just one tour? Yes. Do you want to share what it is?

**Ken Alger**  21:11  
No, I'm making this it's difficult and as challenging as possible.

**Lauren Schaefer**  21:15  
Thank you. Thank you. Okay,

**Ken Alger**  21:19  
I would venture to guess that if I were to put a slash and then the tour ID number. Like if you wanted the Fearless Tour, because you are very fearless. That you can do something like that. And you just get back. Look at that. So you just get back that that? Convenient? 

**Lauren Schaefer**  21:44  
That  is convenient. Okay, I like that.

**Ken Alger**  21:46  
It's more difficult.

**Lauren Schaefer**  21:48  
No, okay. So I'm actually using these API's in our fan site. Oh, look, we've got a nice wrapping here because I zoomed to lightful. So this tours page is actually calling that tours API to get or the tours endpoint to get information about all the tours. And then if I click on more details, I'm getting information about just one tour. So there I'm calling tours slash five. So in this case, tours slash Ursus a tour slash ID. Tour slash five. I hope you follow that. Clear. Okay, perfect. Okay, this page looks pretty good. I think I did a good job implementing this one. This looks pretty good. I gotta jump down to the heiress tour, because it just came out. It's my favorite. And did you hear she's back on tour? Do you know the scoop? She's back on tour this weekend?

**Ken Alger**  22:45  
In southern South America. If memory serves? Yes.

**Lauren Schaefer**  22:50  
And Travis was there it was a whole thing. Okay, I'm not gonna get sidetracked. But it was very, I was all over Tiktok getting the scoop. Okay. Take a look at the era's tour. Can this is a hot mess? Looks like the schema change?

**Ken Alger**  23:11  
Well, I think I would say that she changed her, you know, her concert setlist from a reasonable timeframe to a concert the last four days.

**Lauren Schaefer**  23:26  
So you're blaming it on Taylor? Wow, no, pass the blame?

**Ken Alger**  23:33  
Probably Probably back on me for, you know, doing two different versions of the data on the same v1 of the API.

**Lauren Schaefer**  23:45  
Yeah, I'm not really pleased with that, that this should have definitely happened in v2. Here, this, there's no reason that should be happening in v1. So what's up? Is that okay? Okay. I'm glad you agree with me. All right, let me go see what's happening in v2. I'm just gonna live live life on the edge. And I'm gonna make the update in my app. So I'm hopping over to app.pi. Can Can you tell us what this what what is apt up I do in this application?

**Ken Alger**  24:18  
It's the main controller kind of everything all as you scroll down there, like on line 18, you have an app route. So that's just your index route. And, you know, that handles the logic for that and tells it tells the application which page to return. And then, so any of the logic for the for the application gets handled in in app.py. Cool.

**Lauren Schaefer**  24:49  
So this is actually where I make my API requests to. So I'm just going to I think you told me earlier you released me to write me be maybe Okay, let's find out what happened. So I'm just going to update it to v2. This is going to update all my API calls everywhere. Okay, it looks the same here. Let's take a look at Fearless. Ah, let the schema got updated here. So now we've got that same instead of being a list of strings, it's a list of Acts. And same here. Okay, so did you fix it in v2 everywhere? Is that what happened?

**Ken Alger**  25:28  
Let's say yes.

**Lauren Schaefer**  25:29  
Let's say yes. Okay, let's fix this because this is this is super augers. Can't let this go. Alright, so I've got a loop in here that that prints out all the songs. I'm just gonna get rid of this. Oh, I'm just gonna get rid, you know, maybe we don't want it. Let me highlight. Okay, everything's fine. We're gonna start over. Because who can? Who can think with all that? copilots get it all sorts of usually copilots right. That's not right. Okay, so we want to do instead of let loose, looping through the list of songs. Now we want to loop through a list of Acts. So let me know if you see a typo can because, you know, live coding is always a good choice.

**Ken Alger**  26:21  
Oh, I do it every couple weeks. It's Oh, yeah.

**Lauren Schaefer**  26:25  
What's the name of your stream? Again?

**Ken Alger**  26:27  
It's wild west coding. Okay, was coater through Cisco.

**Lauren Schaefer**  26:33  
We're gonna find it. Okay, so we're gonna list through...

**Ken Alger**  26:40  
We're going to iterate through the acts of for acting tour. And not the setlist there.

**Lauren Schaefer**  26:49  
Oh, it actually got it. Okay, let's go close that that for loop. So I don't forget

**Ken Alger**  26:58  
one parenthesis and not. Or yeah, there you go. And then you have $1 sign there. I'm gonna get rid of that. Okay, there you go.

**Lauren Schaefer**  27:06  
Okay, we got a loop. Okay, what are we doing in there? We want to be right, we are we are getting loopy. Okay, we want to print out probably the ACT ID would be helpful.

**Lauren Schaefer**  27:19  
And the title of it. 

**Ken Alger**  27:21  
Yeah, that sounds like a great thing to do.

**Lauren Schaefer**  27:25  
Okay, let's make sure I haven't broken anything. Because you know what, sometimes you do this and then it's like, Oh, it worked. Okay. 

**Ken Alger**  27:36  
So sometimes technology works. Sometimes.

**Lauren Schaefer**  27:43  
Okay, then I want to print out all the songs in each act. Right. So. Sure. Yeah, let's do that. Thanks for agreeing with me.

**Ken Alger**  27:53  
I've learned that's the easiest way. Thank you. Almost like copilot got that.

**Lauren Schaefer**  28:00  
Ah, co-pilot? Yes. Okay, so let's review it. So it's saying for each song in our list of songs, create a list item and print out the song. Did it get it? Hey, that looks good.

**Ken Alger**  28:19  
There we go. Now you gotta go check and see if the errors were actually looks less wonky.

**Lauren Schaefer**  28:27  
Look at that. All 10 acts.

**Ken Alger**  28:30  
That is a long, long, event.

**Lauren Schaefer**  28:35  
Yes. Can you guess how many times I've seen the movie so far?

**Ken Alger**  28:41  
42.

**Lauren Schaefer**  28:43  
I wish. I wish. I've seen it four times already. It's been out a month. It's so good. It's so good. I've seen all 10 acts. Okay. So we cleaned this up. Right? So what were we talking about? Oh, it was so inconsistent. Your the schema was all over the place. So third way to build an API that developers will hate is to push your latest changes to your API. Whenever you feel like it. It's your version. So

**Ken Alger**  29:18  
my API, just do what I want, right? Do what you want, man.

**Lauren Schaefer**  29:27  
What you want. Thank you so inclusive. Thank you. Um, yeah, like I That's it was pretty frustrating and annoying that I when I found that that error is to our concert data, and v1 had a different schema from the other tours like that change should have never made it into v1. Okay, okay. What can we do instead?

**Ken Alger**  29:52  
I mean, you know, semantic versioning is a good thing. If you're going to make big huge Yeah, changes that are breaking version things. Do minor and patch version numbers.

**Lauren Schaefer**  30:08  
Yeah. Okay. So I agree. And building on that same idea of versioning. There's actually another thing that I hate here. And that's that there's no notification system for breaking changes.

**Ken Alger**  30:24  
What do you want from me? You hear? Let me hear let me text you. They're there on changing the API.

**Lauren Schaefer**  30:35  
That would be really delightful. Thank you Ken.

**Ken Alger**  30:38  
Maybe like in documentation? Yeah.

**Lauren Schaefer**  30:42  
Yeah. So fourth way is developers call your API again, and you break it like a promise. So I found it very irritating that the schema changed in v1 of the API without any warning, right? I want to notification, maybe, maybe a text, maybe that's a bit much, but like maybe in the API itself, or in the documentation, or in an email, letting me know. All right. Thank you. Okay, next time. Next time. Thank you. I also need time to adapt to these changes. So luckily, you didn't take down V one of the API immediately. But right, like, I need to guarantee that an older version is going to be supported for some number of months after a new version is released.

**Ken Alger**  31:26  
So now I need to support multiple versions?

**Lauren Schaefer**  31:29  
If you make breaking changes, yeah.

**Ken Alger**  31:32  
Oh, man. 

**Lauren Schaefer**  31:34  
Yeah. And then I also need to know, like, what has changed between the versions? So I know what what I need to change in my app, and what I need to test, I kind of was just guessing, to figure out what that new schema was.

**Ken Alger**  31:48  
Okay. Fair point.

**Lauren Schaefer**  31:52  
Thank you. All right, continuing on, let's take a look at the concert films page. So I've been meaning to build this. So I thought we could build it here together. All right. Okay, so heading back to postman. We've got this move this tours endpoint telling us about all the tours. And can I think you mentioned earlier, you've got a new endpoint I can use for this. Movies, movies. That makes sense.

**Ken Alger**  32:23  
You want to movies? Oh, or not? Let's, I mean, we have tours. Right? So movies seem like that would make sense. But since I know that you don't like it when I do mean things like this. Maybe I just didn't movie.

**Lauren Schaefer**  32:43  
Movie. ahead. Ken!. That's, it's just like a small inconsistency. Like, that's kind of irritating. If it should be movies, and tours or movie and tour. Yeah, okay.

**Ken Alger**  33:00  
We're naming things the way I want to name them.

**Lauren Schaefer**  33:03  
Fine.

**Ken Alger**  33:04  
I should call it like tires.

**Lauren Schaefer**  33:08  
I guess at least this kind of makes sense. All right, I'm gonna, almost I'm going to try to use this in my app. Let's see how it goes. So over an app.pi, that's this is the file we talked about earlier. It routes all the requests that come in to the Taylor Swift fan site. I've already got a function that is routing a request to the movies URL. So let's actually call the API. So I'm going to say response equals A copilots. Got it? Almost. Copilot things. That should be movies, too. It's not just me. Yeah. Yeah. Okay. So then we need to just process it.

**Ken Alger**  33:53  
Clearly, he hasn't, you know, mapped into my brain yet to understand my stuff.

**Lauren Schaefer**  34:01  
Sure. Sure. So I'm processing the response back and I just need to pass that over to the template. So I'm going to say movie info equals movies. And I'm actually just gonna go make sure I didn't break anything. Nothing should change here. But sometimes things go wrong. Hey, nothing broke. Progress. Okay, so this is passing the movie info to my movies templates. So I'm going to open that up. And in place of this coming soon, placeholder text, I'm going to just drop the movie info.

**Ken Alger**  34:40  
That seems like a reasonable thing. Hey, look at that. Okay,

**Lauren Schaefer**  34:45  
we're actually getting movie data back. It's not pretty, but like it's working. So you're

**Ken Alger**  34:51  
We're not designers, Lauren

**Lauren Schaefer**  34:53  
we are not designers, but I feel like even though I'm not a designer, I know that this is not good.

**Ken Alger**  34:59  
but I think To like, you can iterate over that that list right? Just like you did with the, in the tours. Like, that's not that complicated to do.

**Lauren Schaefer**  35:10  
Oh, that's good point. Yeah, it's gonna be very similar to this right? I'm just going to loop through the data and display it. Yeah. Okay, so let's do that, like every good developer. Let's just let's copy that for loop. Yeah. So whenever we talk about tours, we want to talk about movies instead. So I'm going to do a manual refactor here. So for movie in the movie info shout if I make a typo here. Let's print the movie title. The Movie Number

**Ken Alger**  35:51  
one an either put move.

**Lauren Schaefer**  35:54  
Sure do. Oh, you're being nice. Ken. Thank you.

**Ken Alger**  35:59  
There are moments

**Lauren Schaefer**  36:01  
Okay, the album associated with the movie that seems irrelevant. The date the movie started, that's good. movies don't really have end dates, like the heiress to a movie just seems to keep keep going. I keep thinking it's the last weekend and then I'm like, I just gotta go one more time. And then I find out. There's more Showtime. So we'll see. Number of shows. That doesn't really make sense here. I'm going to deal with this more details link later. That looks like it'll be a pain. Okay. Partial project, partial progress here. Yeah, so we are successfully looping through all the movies, but not really any data is getting displayed.

**Ken Alger**  36:51  
Yeah, probably because the data is not what you're calling. Right. Like the movie title. I think it's movie name.

**Lauren Schaefer**  37:02  
You changed it from title the name? Sure. Okay. 

**Ken Alger**  37:10  
Yes. 

**Lauren Schaefer**  37:10  
Ken! All right, the movie ideas? Right? How about associated album? Did you change it to related album? 

**Ken Alger**  37:23  
Yep. 

**Lauren Schaefer**  37:28  
Okay, and then start date?

**Ken Alger**  37:30  
The release date? Yeah, yeah, that's the ticket.

**Lauren Schaefer**  37:34  
Okay, I'm not gonna get as mad about about that one. That one. That one kind of makes sense. Okay, we got the data in. There were a lot of little paper cuts there. But we made it right. Okay, there's one more thing that's bugging me here. And maybe it's not bugging anybody else. But there's a particular date format that I really like to use, which is what I've got over here on the tours page. It's month, day, comma, year, I just think it looks pretty. And I did that by I wrote a little date, format or function that brings in the date from the API, and then formats it. So I gotta do that here. I gotta make sure my date formats match. Can we do that real quick? Sure. No, you don't have a choice. We're gonna clean it up. Here we go. So back back in app.py. I'm in my movies function here. Are you laughing? Nope. No, no. Look at co-pilot. Let's see. And saying for every movie in the movies list. If it has a release date, format it save it back. I think this is right. Let's take a look. That's not pretty. Um, so what it's saying is that the time data year dash month dash day does not actually match the expected format of day space month space year. Did you change up the date format in the two API's? Maybe. Okay, so to fix that, I'd have to go in and update my format date function to handle more than one date format. Okay, that's kind of annoying. I'm not, I'm not going to make people watch me do that. So we're just going to deal with that ugly dates for now. But that's kind of irritating.

**Ken Alger**  39:38  
Pleased to be of service.

**Lauren Schaefer**  39:41  
So fifth way to build an API that developers will hate is to name things as the mood strikes. Who cares if inconsistency causes death by 1000 cuts? That's definitely your motto here. There were a few things that irritated me. So we had the movie's endpoint It was movie singular, which did not match tourists plural. The naming of the fields in the response data did not match the tours API. And then the date formatting also did not match

**Ken Alger**  40:14  
The dates are in there, right?

**Lauren Schaefer**  40:16  
No, no, no

**Ken Alger**  40:19  
The data is in there.

**Lauren Schaefer**  40:22  
Okay, I guess it's better than nothing. But it's kind of irritating.

**Ken Alger**  40:26  
Yeah. So, you know, I think I'll pick up my mean hat. But my real developer hat on. It's one of the one of the challenges when you're dealing with a document model. That because it's so flexible, you can make these won't call them errors, but make these mistakes, if you will, very easily, right, it, it becomes very easy to say, Oh, I'm going to work on my movies collection now. And I'm going to call it release date versus start date or whatever. Title versus name, any of those things becomes very easy. So it's just something you need to watch out for. And you know, having clean data is an important thing. And it makes it much nicer when you're trying to make API's if your data is clean and consistent.

**Lauren Schaefer**  41:20  
Yeah, consistency matters. Like wanting consistency, we're all good. Probably going to be fine. But like when they start to add up, it can create real frustration. All right. Okay, you're back to me and Ken,

**Ken Alger**  41:36  
Back to mean Ken.

**Lauren Schaefer**  41:39  
Alright, so I've got this concert films page. I think my next step is going to be to start building out a page for each of the tours are each of the films. So let's go take a look at the API. Now with the tours endpoint, you let me do like tours slash five. Let's take a look at let's take a look at the era's tour because it's my favorite one right now. There is your film, this actually worked first try love that. Let's Yeah, you did it. Okay, let's take a look at Movie Number Two. The Lorax. Can why why is this in your, your your movies? Well,

**Ken Alger**  42:27  
she voiced a character in there and there's singing so it's kind of a concert a movie? Okay, not concert. But it is it's a musical. All

**Lauren Schaefer**  42:37  
right. Well, I don't think that should be in there. Let's let's come back to that in a few minutes. I'm gonna put a pin in that. Let's take a look at Movie Number One. What? What is this? I've been rate limited.

**Ken Alger**  42:51  
Yep.

**Lauren Schaefer**  42:53  
Come on. I kind of hate that.

**Ken Alger**  42:58  
You gotta pay me. What did he pay?

**Lauren Schaefer**  43:04  
So the sixth way to create an API that developers will hate is to rate limit whenever and however is convenient for you. It's fair that your API is not around. Yeah, okay. So can you mentioned one reason might be, you said it kind of sarcastically, like, maybe you want to rate limit, so people will pay you.

**Ken Alger**  43:28  
If you have a subscription model, right, like, clearly, Taylor Swift concert data is going to be the next big thing. And we, this app will be the only place on the planet that you can access it. So we're going to charge people. So you know, we will. As we're building out the, the API, you can get access to one tour day for free. And but if you want more than that, we're gonna we're gonna charge it. But in all seriousness, so you can have various subscription models, different tiers get access, you know, that's one reason why you might want to rate limit. Prevent denial of service attacks might be another one. Just you know, if you're having all your data up in the cloud, to prevent your cloud costs from going too high, and your network costs going too high, you might want to rate limit access to help, you know, our our Taylor Swift UI business. Keep our own costs down.

**Lauren Schaefer**  44:37  
Yeah. So those are all legitimate reasons.

**Ken Alger**  44:40  
To make sure that people really don't like our API. We don't want to publish those anywhere and let anybody know about it. So that Yeah. Okay, I want to document anything.

**Lauren Schaefer**  44:54  
Yes, yes. Because you're gonna you could break an app. unexpectedly if people are not ready for your rate limits, which is very problematic. All right. We're, we're at 67. So let's keep rolling. You know what, let's finish up by going back to what I mentioned about the Lorax. So we've got this this list, and it's all of her concert films 1989 reputation, her lover concert, the Lorax does not belong here. So I'm gonna delete it

**Ken Alger**  45:33  
might have to do disagree to disagree. Okay, that's not what is it? Agree to disagree? That never really made a lot of sense to me, but, okay. All right. So you're gonna, you're gonna get rid of some data and go to Delete. Yeah,

**Lauren Schaefer**  45:52  
let's do a delete request for the first time today. I don't want to delete all the movies. Let's just delete the movie too. Oh, it worked. Okay, we've got a stat successfully deleted message here. We've got a 202 accepted. Delightful. Let's go take a look it up. Let's go take a look at all the movies again. Still here, okay. Why? Why is it still here?

**Ken Alger**  46:26  
Cuz I like messing with the status codes.

**Lauren Schaefer**  46:31  
Ken! Okay, why am I getting a success message if it didn't actually get deleted? 

**Ken Alger**  46:36  
Because I mean, okay. Because I don't want you to like this API.

**Lauren Schaefer**  46:43  
Yeah. Okay. So the seventh and final way to build an API that developers will hate is, don't blame me for only returning the data, status codes lose all their meaning. I think it's super easy to just like, forget about status codes and just send back the success message right away. But you do want to have, you do want to send the right status codes, you do want to have meaning to them. Right? It's so much easier to debug,

**Ken Alger**  47:12  
debug and test, right? Like you can test a lot easier if the HTTP status code of 202 comes back then just successfully deleted. Again, who knows what that that means? successfully deleted. And maybe, you know, if it's me doing it, I changed that successfully deleted verbiage to y'all data just got or something right. Like, you don't know. That's what I mean. There's a reason for status codes. For sure, but who?

**Lauren Schaefer**  47:52  
All right, can you put your nice hat on for a minute? I'll try. Okay, so we've talked about seven ways to build an API that developers are going to hate. Let's take a minute and just flip them and talk about how to make an API that developers will love. We can do that. All right, we'll take the first one.

**Ken Alger**  48:12  
Make your API discoverable. I mean, you let people know what your endpoints are going to be through navigation, you know, provide documentation, let people know what's, what's available? And how, what they should expect when they are interacting with your API. Christian if you have to walk in to do certain things, and all those sorts of things.

**Lauren Schaefer**  48:41  
Yeah. All right. To what's next. Oh, hell, oh, you know, what helps if I go in the right direction to use inclusive language. So don't distract readers or cause harm by using offensive language. Be kind and use inclusive language. Oh, did you see that hearts came out? Did you do that?

**Ken Alger**  49:10  
No. But that might be like, oh, there we go. 

**Lauren Schaefer**  49:16  
Oh, my gosh, that's adorable.

**Ken Alger**  49:20  
Yeah. So the next next way is version, your APA. We talked about this. And this really hits in several different categories here, I think, but versioning your API and making it discoverable with different versions and documentation. Now, when you make breaking changes, it happens, right? Like Swift concert changed dramatically. Once you went into whatever her latest tour was, you did a whole bunch of different things that you hadn't done before. So that data dramatically changed. So make new versions. Yeah.

**Lauren Schaefer**  49:58  
Number four, create and follow a process for introducing breaking changes. So if you do introduce breaking changes, be sure to notify your users so they have time to react. Be clear about what those breaking changes are

**Ken Alger**  50:13  
Carrier pigeons. That's my solution.

**Lauren Schaefer**  50:17  
I like text better, I think your first idea was better.

**Ken Alger**  50:22  
Be consistent with names and types. Don't don't, you know, the death by a bunch of paper cuts really can add up to a lot of frustration. And really, not only from the API standpoint, frustration, but the coding to access the API really becomes frustrating when trying to code against it. And then reread the code and debug the code when it's on release date, instead of start date and all those various things trying to go through and like what is going on with all this. Consistency is key.

**Lauren Schaefer**  51:00  
Be clear about rate limits. If you choose to rate limit your API, be clear about what those limits are. Developers are probably relying on your API. And if they run into a rate limit, or an unexpected outage, it could break their app.

**Ken Alger**  51:19  
Use status codes appropriately. When one does, it's much much easier for developers to debug if there's an issue and determine if it's something on their end or on the API's and itself says codes really are important. There's a reason that they exist. And they should have meaning behind them. For sure.

**Lauren Schaefer**  51:42  
So when we follow these principles, we're going to get an API that developers will love setting. Let's wrap up by updating the chorus from the song that we shared at the beginning of the presentation. What do you think?

**Ken Alger**  51:54  
I'm gonna let you do that.

**Lauren Schaefer**  51:57  
Okay, here we go. Look what we made it do built a good API that developers love. No bad blood between us a push in a shove. Look what we made it do push changes with care when it was right. Now our API's a delight. Do it. So cute. Okay, so we actually made it in our our look at us. We've got time for questions. So if you have any questions, please drop them in the chat. I think Brian's going to there's Brian

**Ken Alger**  52:31  
Thank you for letting us join today for I mean, you know, I think Lauren, and I all speak for Lauren, we've had a lot of fun doing this.

**Brian Rinaldi**  52:40  
You could tell you all had a lot of fun building it. And yeah, this was that was a lot of fun to watch. So,

**Ken Alger**  52:48  
and the chat has been busy. So hopefully, Brian has some good, good nuggets from, you

**Brian Rinaldi**  52:54  
know, yeah. People really bought into the Taylor Swift theming of this, don't we? You know, go back and review the comments if you want more puns you can use when you if you do this session again. Because yeah, they they really went all in on the Taylor Swift funds. And I didn't know does that actually work for me too? Or is it just you all if

**Lauren Schaefer**  53:22  
you have to twist it just right. I don't know. Maybe?

**Brian Rinaldi**  53:25  
Oh, it doesn't seem to work for me. Maybe my hands just can't make a decent heart. But I've never seen that before. But that was cool. Um, so yeah, that was a really great presentation. I really, I really enjoyed it. And I mean, I can say like, as, as somebody who has used a lot of API's, I've run into almost every single one of the things you've mentioned before, I think the inconsistent naming is a big one. But I've also liked the rate limiting without telling you in advance, or even telling you that, hey, there are rate limits, but you'll know because you'll get back information that that comes in, that tells you how much you know, what's the current rate limit is? That's that frustrates me because it's like, Well, okay, I only find that out. Like really, it's it's one of those things that developers only really look at it's like, Wait, this broke, what happened? And then you go looking at it's like, oh, you know, you figure out oh, we got raid limited and then you're like digging into the documentation. It's, it's never like, quite so easy like to unless you're very upfront about rate limits. Like to figure that out. You're only going to find that in the in a time of frustration. Basically.

**Ken Alger**  54:44  
You only find it out on Black Friday, right when your app crashes because everybody's using like, no, sorry, you bought one thing for me this year. That's enough. Like it's, it's Yeah, highly frustrated.

**Brian Rinaldi**  54:59  
It's So do you have like thoughts about, you know, what are some of the best ways to, to kind of break documentation that makes this easy? I mean, I think all of those things you listed in that seven ways they make good, like, big one of that is just building the documentation in like, how do you how do you address like rate limits in a way that makes it easy for developers to find, as opposed to finding out when they hit?

**Ken Alger**  55:27  
I mean, for me, you know, things like swagger, that are going to generate your documentation kind of automatically as you're going along, work well. And then for things like rate limits, just document it and be upfront about about it. And oftentimes, you know, API users are good with rate limits, as long as they kind of understand the reason why behind it, right. Like, for this particular, you know, API that we built, if we have learned, and I decide to publish this on a website, and we're paying for it out of our pocket, we might rate limit it strictly for our own personal financial reasons, right. And like, oh, it's being hosted, you know, the data is being hosted on a cloud someplace that's costing us, you know, 10 cents a hit, or whatever it is. And so, hey, Lauren, you know, how much can you give us a month well, and now all of a sudden, we're going to rate limit everything to cap it at, you know, 50 cents a month worth of data access. So once anybody in the world hits it, five times it's done, or whatever, but be upfront behind what the limits are, and kind of some of the reasoning behind it. And then provide a way to contact the the owner of the API and say, Hey, is there a workaround for that? Like, if I'm willing to pay you a million dollars to unload my you know, to get more access? Is that even a real possibility? Anybody out there is listening. If you're willing to send Lauren and I both a check for a million dollars, we will open up the API quarter fours. Again, I'm speaking for Lauren. But I'm guessing that she would be happy with a check for a million bucks to open up the API?

**Lauren Schaefer**  57:19  
I would. Okay. safe bet.

**Brian Rinaldi**  57:23  
Yeah, I think I think that's, that's good advice. I don't think so. Because I know, sometimes API's differ. There's rate limits, depending on what you're doing. Like, if you're doing if you're reading like a list of stuff, like they might have no limit, but if you're doing like posts or puts or whatever, like, suddenly, there's a limit. And I think having somehow putting that in the documentation for that method, like, some very noticeable like, hey, just be aware of this particular endpoint is rate limited? Yeah, because that one, I've hit a bunch of times, and it's, it's super frustrating. You know, I will admit to having, like, put in lots of delays in my code, run in loops and things like that it rate limits that, you know, cause me issues.

**Brian Rinaldi**  58:20  
You know, so and then on on the version, I think versioning is a tough one for folks. Like, because, you know, it's it's, it's, it's a big deal for every user like in. And so it's hard to know when to move to another version versus not move to another version? Or how do you manage those different versions and things like that, especially with like with rest? Do you all have like, tools you recommend for kind of helping with with these kinds of things? Are there like any kind of like API management tools you found to be really helpful with with kind of handling like rate limits, or like versioning, or things like that?

**Lauren Schaefer**  59:05  
Yeah, so as far as deciding when to bump something to another version, I love semver.org. It, it'll walk you through, this should be a minor change, that should be a patch, that should be a major change. And what we do on my team, we don't have a REST API, but we do have an API that developers can call. And so we use change sets. And I'm I am not sure exactly what technology is behind that. But whenever we push a change up, we push our merge request checks to make sure we have a change set. And as part of that, we have to specifically indicate if it should be a patch, a minor or a major update. And so it's forcing us to think about it every time then when we do a release. It'll, it'll include a list of all those changes that went into that release. And so then it's very clear, oh, this really should be a major or a minor or a patch. So that's how we're we're managing it.

**Brian Rinaldi**  1:00:00  
Okay. Ken anything on your end? Or you just? Yeah,

**Ken Alger**  1:00:06  
I mean, I think, you know, automation is a great thing. And Lauren has hit a bunch of them. They're perfect.

**Brian Rinaldi**  1:00:14  
Yeah. Okay. Yeah, that those are those are all great tips. I don't have any audience questions, although James is Everhart is willing to send you a $1 million for your API, as long as you accept Venmo. So yeah, I think just reach out. Perfect.

**Ken Alger**  1:00:35  
Yeah. Reach out. I will join Venmo for a million bucks.

**Brian Rinaldi**  1:00:43  
All right, well, this was this was so much fun. I love kind of the back and forth, you all had go in there. And I think, you know, it even even if it was like worst practices, this was like really a good list of things that like, you know, I think we've said we've all run into, and and definitely are, are easier mistakes to make than you might think when you're developing it.

**Ken Alger**  1:01:08  
Like for myself, not only have I run into them as a consumer, but sadly, I think I've run into a lot of them as an API producer, as well. And, you know, just making an API, as long as you're not thinking of a lot of these things, they slowly kind of creep in, and then you wind up using it. You know, language isn't inclusive, you wind up doing naming things that are goofy. Sometimes you wait way too long to version, your API. And that makes all sorts of headaches or weak your oh, we need you know, if version 362 of this API, like it just came out last week, why are we on version 362? already? You know, I think there's a lot of that that happens out there in the industry. So moving all these things more to top of mind as you're both creating and consuming API's, I think is the important thing.

**Brian Rinaldi**  1:02:07  
Agreed. So yeah, and I think everything you gave here really is a good guide to building a good API. So I thank you both.