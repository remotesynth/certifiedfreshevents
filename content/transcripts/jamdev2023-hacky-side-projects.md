---
_build:
  list: false
  render: never
---

**Kevin Lewis:** [00:00:00] I am often impressed at the ability for carpenters to take a problem and engineer a solution to them using their skills. And that same skill exists in many forts of our lives. 3D printing has paved the way for DIY solutions. Those who understand circuitry can alter the behavior of products they own, and we as software developers are no different in that regard.

We have that same quality of being able to see problems and using. To solve them. And there are certainly big problems that demand big solutions and serious applications that need care, attention and quality. But I think the most fun way to learn new skills is building hacky, potentially Frankenstein duct tape together projects to make your life just that bit easier.

Hello there. My name is Kevin and by day I run developer [00:01:00] relations for an open source project called Direct uss, where we sit alongside your database and immediately generate rest and GraphQL APIs and spin up a beautiful web app to interact and create automations with that data. By night I run, you got this, a learning hub entirely focused on building your core skills for a happy, healthy work life.

We run free community events and host a free content library. And I want to start by talking to you about some of the small hacky projects I've built. How they've shaped up and what you can take away from them. So starting off in 2020, my first daughter was born and I knew that part of my role in the hospital was to play messenger with family members and close friends as events unfolded, let's say.

But what was more important to me was being in the room with my. So that's the problem. And in response, I built baby bot a small web app that would let me type a message once, [00:02:00] provide a passphrase, and then batch, send text messages to close family and friends. So instead of sending a dozen messages each time or worse, forgetting someone when it's an important update, I could just fire for fire and forget and be more present in the.

The application was a static no framework HTML page backed up with a serverless, netlify function, and an Airtable database. When I submitted the form to my netlify function, the past phrase was checked against an environment variable. All of the contexts were grabbed from Airtable and text messages were batched sent using the Vonage SMS api.

The company I worked for at the time this project was built in an. And was not in any way feature complete. There were few enough people that I didn't need to consider rate limits for this project. I chose not to handle inbound messages so people couldn't reply. But I did put this at the beginning of every automated message.

This project was built for my [00:03:00] partner and I, no one else, and it did everything we needed it to do and nothing. So our kid is born and we've made this choice not to post many photos of them online for various reasons, including the desire to allow them to create their own online image in time. But like before, we still wanna share them with family.

So Back Blaze is a file storage service similar to AW S three, excuse me, and I've been wanting to try out their API for a while at this point. So I built a photo sharing app with VJs where we can upload images to back blaze via our phones. Once again, laser authenticating with a fixed admin passphrase and a netlify function.

Users could then validate our family. Our friends could then validate with a fixed user passphrase, which was stored in local storage, if correct, and then used to load a list of albums, so all the different months or all the different [00:04:00] events. Then go into a single album and display all the images, and finally load single images each time for every request.

That pass phrase was validated by the respective netlify function for that operation. This was also a wonderfully simple little app that I built in a couple of evenings, but there were some things I would do differently if I could do it again. Having a single user passphrase that is the same password for you or you, it's the exact same.

Passphrase meant that if it was ever compromised and needed changing or I wanted to remove someone's access and that passphrase needed to change, I suddenly had to tell everyone who we'd given access the new key, a huge under. We also sent full quality images right down the pipe, straight from the back blaze storage bucket.

And in the album view, this led to very big and very slow pages, but alasan, nice little project built just to solve a problem I had in my life. [00:05:00] In a few months, my partner and I will be having our wedding, and as you might imagine, getting an accurate attendance list is critical for an event. An event of this complexity also has a lot of requirements, expectations, and variables.

People expect to be personally invited, and often a single invite will be addressed to more than one person. We must only allow one response per invite and to ensure that only those on the fixed list we provide can. . And also some invites, will invite you to the ceremony and others won't. So there's a lot of moving parts in this.

Now, as I mentioned at the beginning of this short talk, I recently started working at directors and it seemed like a perfect small little project to learn it when I started the job. There are three collections for this project, people. and RSVPs, every single person we were inviting had an item in the people collection.[00:06:00] 

An invite then can contain multiple people. It could contain one, but it could contain more than one as well. As well as containing some other metadata. And every time there was a response, an RSVP related to that invite would be stored. Excuse me. So I built a WebEx app once again with v js backed up by, can you guess what serverless, provider I used?

It was a netlify function. Every invite gets a personalized url. So you hit that url, it goes. And gets data from my Director's cloud instance about the invite, and then renders the correct information on the page and a form which includes every person included in that invite. We even allowed for that optional plus one on an invite.

And if enabled for an invite a new person be, can be created on form submission and attributed to that. So that's pretty nice. And you'll [00:07:00] notice on the people collection here, there are, there is an is plus one bull. So that will only be true if it was created as a plus one at the point of rsvp submission.

So now people can still be personally invited as invites, contain some custom text for that individual or individuals. But we have one true source of data which we can then use to have the best event possible. When an RSVP is made, it sends a confirmation message via SMS and email an insight status.

Fraud helps us understand our numbers, whether that's the attendee numbers. Those who said they can't make. The budget, the kind of shopping list, which obviously scales based on how many people are coming. And I actually tweeted a thread about how this was built and will link it on my website@lws.io.

And for what it's worth, not to sound like a shill or anything but I wish I knew directors existed in each of the earlier projects. For Baby Bot, we could have both stored contact details and triggered the batch s m s [00:08:00] end in a single. Kind of service for the photo app. We could have sent smaller images down the pipe.

With built-in image transformations, I might end up rebuilding this application. I use hacky side projects to solve real problems in my life. They don't need to be polished. They don't need to be well documented. They don't need to be built for others. They don't need to be built to be productized and made money out of.

They simply need to get the job done. And if it gets the job done, then they are a success. And so I hope this talk inspires you to build more hacky Frankenstein duct tape together. Side projects and not get caught up in perfectionism or the expectations of others while building them. Hope you found this interesting.

Thank you ever so much for listening to me. My name's being Kevin Lewis. That's my Twitter handle, underscore pH z n. If you wanna check out directors, we are at directors on Twitter, or [00:09:00] you can go to directors.io. Hope you have a wonderful rest of the conference. And I look forward to perhaps hearing from you in the.

Bye for now.

