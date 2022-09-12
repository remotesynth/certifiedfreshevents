---
_build:
  list: false
  render: never
---

**Brian Douglas:** [00:00:00] All right. What's up. Y'all my name's B Dougie and I'm gonna really quickly go to never really quickly got 30 minutes. So I'm gonna go through talking about release automation. And it's something that I've spent years as a developer, never really focusing on trying to think about cutting releases and getting those shipped into.

Production or for consumption. But it's something that I've actually started on the path of recently in the last couple years, I've been really focused on CI and CD automation. And I think the world of CI is it's pretty I don't know, fluid within the industry. Like people know how to run test.

There's a lot of tools out there to help you do that and then continuous deliver. Also pretty, yeah it's pretty widespread throughout the developer community. So if you're probably running your test on circle or GitHub actions or something similar, maybe even Cyprus you've had some Cyprus or have some playwright tests in there[00:01:00] CD you're probably using neti or Versace to deploy your application and they're are other pieces to the whole workflow automation.

And sorry, I didn't even call attention to this gift, but essentially this is a perfect C I CD work. in motion. But I wanted to also mention there are other pieces within this automated developer workflow, which I'm gonna cover. But my day job is at GitHub and my focus is really trying to UN like teach folks the primitives of GitHub, get home interested enough to automate portions of their workflow.

And that's what I do at my, with my team for developer relations. And. Workflow automation on GitHub actually is it looks like Git up actions, but there is different pieces. Like the API web hooks authentication. That's all stuff that you get at Git up actions, which I'll go in way more detail in a bit.

But what I wanted to talk about really quick at this event is about NBA GM and I'm a big basketball fan. I'm actually really enjoying the season. It's nice getting post it's [00:02:00] not post COVID. I don't know if we can, I can actually say that cuz even this event is remote, but what I'm getting at is.

I enjoy watching the games. I enjoy the spectacle of the dunks, but also even the three point game that's happening right now and that sort of genre of game play. But I like talking about basketball cuz it's like a perfect automation. Sports is like a good analogy for automation and workflows and the game of basketball.

This is the basketball court and I've given this talk before, so you probably see me other jams stack. Give this analogy I'll go into a different divergent, a different idea. But what I love about this analogy is usually with the game of basketball your object is to get the ball in the opposing team's hoop.

And to do that, you can just simply just two on two, if you're playing NBA GM, run the ball at the other side, and then boom, Shak, Locka. And I love that style of basketball. This is the style of basketball I grew up on which is NBA jam era. But. As of recent in the last, like about five to six years, actually probably 2013.

So like [00:03:00] at this 0.9 years sorry, math is off eight years, but there was a book that came out called SPRA ball and they identified through Hooper Nomics, applying statistics that a game of basketball where they found that 31% percent of the shots are made from this point. And this point it's because most players are right handed and there's like a arc and that comes into play and it's usually hard to defend.

If you know that the ball is gonna go in at this point of the hoop whether it's basketball, whether it's soccer or whatever it is, if there's a place where you have the best performance, you're gonna optimize for that. And that's why in basketball, there are plays there's automation networks.

So you have the triangle offense, which looks like this. So the one, two, and four making a triangle. So if a two gets the ball and they're not, they don't have the shot, the 31% where they're optimizing. Scoring, they can either kick it out to the three or the four or even the five at that point, if you're, if you are the two with the ball or the one.

So you always know no matter where you're on the court, you always can have someone the left or [00:04:00] the right of you. And I think with automation it's also the same. So if you have a failure in your test, you know exactly what happens when failures happen. Either someone gets not. Slack notifications that a build failed.

Everybody gets on a call or whatever it is. Something goes down in production. Like we set up all these sort of tools for automation, so that what we know, we can basically have our backs have each other's backs, have the backs of our customers because we know exactly when things go down, what to do.

And it's all in the playbook sports through and through. So this is actually an example of one of the projects that I work. It's called opensource. I'll get into more detail, but this is a quick, the showcase of me automating my releases. So like at the end of this talk, you'll have a good understanding of what you could do with automation, especially in releases.

This is my version 1.3, one release. This is for my doc site docs that opens up pizza and every single build, not only do I have atomic deploys on nullify, I've also got. Everything built atomically and statically inside of my releases. So [00:05:00] every time I cut a release, maybe it's just a bug fix or it's a minor release or even a full breaking changes with the website, maybe a new design that is now stored in my release notes on GitHub.

And I'm gonna show you how to do that. And quite a few slides, but more context. I'm a big fan of open source. I built a project to encourage me to do more open source contributions, to track my contributions to find new projects. And that project is called open source. Now open source is built on top of this tool called one graph.

One graph actually interfaces with the GitHub graph, fuel API and then that is actually talking to a react. And shout out to one graph who was acquired by nullify recently. And that is the bare that's the bare bones of my project. And yeah, and I basically built this because I wanted to have a central place for me to find.

New projects define new contributions. And I didn't wanna have to go through searching random GitHub repo or on Twitter all day, or trying to figure [00:06:00] out on Reddit like what GitHub repos are trending. So that's what I did. And I built this really as a need. I wanted to learn graph QOL back in 2016, it was super brand new for GitHub, super brand new for me.

Sorry, I misspoke. It's actually 2017, but. It that's exactly what it was. And I built it on the notion of this quote, which is Gucci main, which I've always wanted to get involved at open source. And this Gucci mane quote, just spoke to me if you don't got sauce and you lost, which is why I built this project, which is called open sauce.

All well, if you don't got sauce to do loss, which is this project open source. So I had mentioned that this talks directly to graphical API on the right is a GitHub repo on the left is the UI for open source. The way this works. I have no database. The database itself is really just a GitHub issues.

And I did this intentionally, cuz again, I wanted to learn GitHub GRA API. This was. Idea for a database, which is only get up issues. And what's funny enough is that this is actually, I've been doing this for five years. This is actually a really common [00:07:00] way to architect new side projects. We see jam commits, which is a cool dusty domains project that happened last month.

That is built on GitHub comments. And folks like SWX, who are also using getup comments. I also do that for my BW life site as well, but basically this is the interface. This is the, how I interact with open source. It's like the backbone of all my interactions for contributing an open source.

Opensource has tons of reposts. There's a lot of like different angles and a lot of different languages and stuff like that, that we've approached. And I say, we cuz there's a handful of contributors at this point. And we're just like trying to solve small problems. And then. The cool thing about this is we solve small problems that, but then we encourage other people to come along and contribute alongside of us, which I'll get into in a sec.

So some other we've got about at this point 26 repos we actually might be at 31. I think I, 26 is in my head, but 31 is actually the number cause I checked recently. So one of the projects we ship recently, actually over the summer is called explore that open source.pizza. This is built on, on, on one graph, their open source [00:08:00] dashboard.

For anybody who uses open source and you wanna contribute, if you wanna test any sort of graphical endpoints specifically for open source, that we're all leveraging, you could do that and explore that open sauce, that pizza. This was a quick project that was started together by one of our contributors.

And it's maintained through a series of GitHub actions that power, the releases and ship the new updates. Oh, you know what? I've okay. I keep hitting the end. Sorry. First time presenting on this keyboard. and I'm gonna have to realize I'm gonna need to get a clicker. Okay.

Okay. So explore opens up pizza. Docs do open source. Do pizza. I alluded this earlier. This is a DACA sore site is it's. It's just a series of markdown files just as you think of a docs DACA. So site, it also has Angolia and endpoint where we're doing doc search with it as well. And this was also put together by contributor.

And we maintain it through a series of GitHub actions and releases, which I'll get into. I've alluded the GitHub actions a few [00:09:00] times. I didn't wanna explain what it was GI up. Actions is a combination of primitives, and it's a combination of primitives that are given to you for free out of all GitHub, repos.

So public or private repos, you can now have access to GitHub actions. It's not only just a CI provider, so you could actually run your test of actions. You could also. Continues deploy with action. So if you have a cloud provider that maybe doesn't already have atomic deploys or automatic deployments, you do that with GI up actions as well.

But if you don't wanna do that, you don't have to do it as well either. So GI up action is again, it's the combination of primitive. So the API, the web hooks authentication. All built into a one feature and it gives you a lot of it gives you a lot of bells and whistles to leverage in your developer automation toolkit.

Cool. So real quick, get up actions. Is the feature and action is a reproducible automation piece, but if you have a combination of actions, it's called a workflow and I wanna bring that up because sometimes [00:10:00] that distinction can be confusing. I also wanna mention that workflows are triggered by web hook events.

So again, another primitive and these web webhook events could be on PO quest. It could be. Just push to the repo. It could be on open issues. It could be open cut releases. It could also be on things like starring a repo. Like all those things are web hook inside the sort of architecture of GitHub that we allow folks to build on top of.

And those are now given to access pretty easily through GitHub actions. Now workflows include multiple jobs and within a job you can have 20 jobs asynchronously. Inside of a workflow sorry, inside of a repo. And inside of that repo, you could also point to third party actions. So these are actions that could be on the getup marketplace.

They could be actions that I host open source inside of my repo. You can actually leverage 'em yourself. So this one would also point out you could have third party actions outside of your project that you wanna. Obviously just, if you're gonna leverage code on the internet, you wanna make sure that it's [00:11:00] trusted either, the maintainer or if it's the source code is viewable in license that you can convince your boss to basically add to your repo.

If you have a boss, not everybody has a boss, it could be working for yourself. Cool. So what I like to start with the, before, getting to like examples is. You identify a repetitive task and you automate that. So if every single period of time, there's an action that you wanna run. You identify that.

So every time the release is cut, I wanna send a tweet out to Twitter with an example you could do today. Or maybe you wanna update the discord channel. Perhaps every time you start a repo, you wanna invite somebody to. an email blast. I don't know. It's all possible within web hooks and the limitation of yourself and what code you could write or what you could find on stack overflow, the copy and paste.

So my example is every time we release or sorry, every time we merge a pull request, we cut a release and that's exactly what you, we do on the open source projects. So here's an [00:12:00] example of the Explorer pipeline. We build the application. So every time we basically have merged actually we do this also in development, but every time we merge, we do go ahead and build a container, which has all the files.

Hosted inside of a Docker file or sorry, inside of a hosted container. And then from there we then host that onto our release notes. So that way every single release has that. You could see here, we're checking for some semantic releasing. So we do conventional commits that happens in our.

So in our visualized workflow, we're moving to step two after we built a container and check for code standards and then at that point we deploy to a static host in our case it's nullify in production, but we do also use GitHub pages for staging. So GitHub pages also gets a mention in the middle of this and that's mainly cuz it's Outta sight outta mind, things can be hosted and we can click through that.

It's great for really quick prototyping as well. And then finally we clean up the action. So like we do decommission some artifacts if they're not needed or we clean up any sort of like [00:13:00] stage context in some sort of cloud buckets as well. Now, the way we do this is that we're, I mentioned the web hook.

So every time there's a push to the main branch and because in our projects, I actually protect the main branch. So you can't actually push directly unless you're a maintainer. Push to the main branch is really merge polar quest. So that's the distinction, but there are some cases where I do wanna push the main branch like force push for a quick fix.

Usually that's reserved for like me, but other folks just just to mention, don't push to the main branch, unless you, if you don't have to. Here, you can see that we have a job I'd mentioned previously, you could have 20 asynchronous jobs here. We've got a job. That's building our container.

It's shipping our dock file and making it produce reproducible for production. And this is another, oh, sorry. And the last thing is the steps. Now I didn't mention steps in the previous explanation, but within a job you could. as many sync synchronous steps. So these are not async.

These actually have to happen one after the other. But as many as you can use up to the file limit, so we have a file size limit. [00:14:00] I forgot actually, I don't actually know that from the top of my head. I've only seen one project. One open source project actually hit this limit before. So you have to have like probably a couple thousand lines.

Of steps before this actually hits a limit, but just keep in mind, there is a limit we ask. If you do hit that limit, just go to break up your action file. You could also talk two actions from O sorry. You can talk to different workflow files from other workflow files. So keep that in mind. If you do hit that limit, if you do hit that limit, hit me up.

Let me know cuz I'm curious what you would be doing. To hit that. But I doubt you'll hit that as well. A again, only one person in the last three years I've actually seen, hit that. Cool. So I went through probably about 20 slides about even introducing myself. My name's B Douggie. I work at GitHub.

This is my MySpace page powered by GitHub actions. And the way this works is anybody who opens up, open up the issue on my GI hub profile. You get added to my top eight. Technically I have more than eight friends. So you will. Like number 15 at this point. But these are my [00:15:00] top eight friends there. And the way I'm doing this is with another way, which is through local actions.

I mentioned you can do third party actions. I write a bunch of scripts that do random things inside of my repos. So whether it's a script to grab environment variables and ship 'em locally, or if there's a script to update a readme file I could do that within a local action. And the way I do that is through a folder.

I have. Which has a Ruby script and it works. I've done this actually in particular. I do have a Java script script as well. That's actually bumping the count of followers I have inside Marie me. I have a whole blog post on that, so definitely check it out. I don't have time to go into that, but did wanna mention that poor request events trigger action.

So we talked about push, but there are pro request event. Here's an example of Sam who's a community manager over at hash node, made a quick change to our docs. What's cool about this is that it actually triggered an action. It triggered that entire workflow that we saw inside the workflow visualizer to then push and deploy our docs into production.[00:16:00]

The other thing is that you could trigger action cloud runners. So one thing that I've. And this is something that I've, I'm super happy that we do this now at GitHub, because this is something I really liked about Netlify and I still use it with Netlify is being able to see my logs and have a runner to run deployed environments.

So as of last month, All GitHub pages, the runners run on GitHub action. So we're actually bringing the actions compute in the sort of forefront of a lot of the stuff we're doing with our features. So more to come on that, but here I'm actually building a statically deployed app and actually.

Setting it up to be deployed to get up pages. So here in particular, what I'm using with the peace Iris action, get up pages, V3 V3 is the actual tag. So you could also run actions on branches or tags. I'm actually just deploying it to a static branch and then that branch gets watched by nullify.

So we're not technically deployed as to get hub pages, but it does get shipped to net. The other thing I wanna point out to it shipped to LFI based on the branch name. The other thing I wanna point out is that we're building [00:17:00] artifacts. So that way, any previous version, just like atomic deploys we can actually go and check that out by actually downloading AR artifacts that are hosted and uploaded inside of GitHub releases.

I do this thing on twitch.tv slice BWO I host a stream every Wednesday and Friday where I do work on things like open source and also projects like slay bot is like the bay bot at bay. Bot's a Twitch app sorry, Twitch integration to do really cool things while I'm live on stream. And that is hosted and deployed by getup actions.

And I'm actually. Hosting a version of this in artifacts, on every release inside of my GitHub repos. And the reason for that is because I'm deploying that this in particular application to Azure and in order to do that Azure, once a zip file. And so I take my entire app. I bundle note that to a zip file that happens powered by Git action.

And I deploy it up and get a what I do is I ship a staging environment to. [00:18:00] First that way I can test it live while I'm on stream. And then from there, if it works, I merge it in, it gets deployed to production. So this is the YAML. I don't have time to go through every single aspect of the YAML, but this is the YAML that basically powers the cashing, the node modules, and then uploading it up to GitHub for and preparation to upload the zip file to Azure.

And this is deploy staging. The one thing I did will point out in line three, is there a conditional for watching for poor request and checking at the poor request itself is closed? I'd say closed and merged because I do want to actually decommission the staging environment if the PDR is closed.

So that way I can make room for other things as well. And there you go. In my Voco visualizer, that's the sort of movement that's happening. I'm uploading release notes, which happens a synchron. There's no chain of no dependency chaining at all. But I do wait until the bill is being completed and I'm doing that condition to check if it's a staging deploy, or if it's a production deploy in this case, this was a staging deploy, cuz it's still a PR [00:19:00] and Here is a GitHub script, which is something I've mentioned in different various blog posts.

But this GitHub script basically is gonna be commenting on to, and a GitHub script is a way to write JavaScript inside of GitHub actions. It's not as elegant as it sounds, but it's a nice way to prototype things really quickly. So what I've done is I prototype the idea of having comments on my PRS and give me a link directly to Azure to be able to click through and see that work.

The other thing I wanted to talk about is GitHub packages. So in this sort of cycle of releasing release automation is actually leveraging this tool called GitHub packages. So it's pretty common to go on GitHub in the GitHub repo, look for releases, look for tarballs. But if you wanted to deploy a something a little bit more than just a simple tarball or leverage your Docker image to host and share it for other folks to use in their environments that's what we're doing with every single one of our.

Inside of open source. And this is really because we now have a historical record for every single [00:20:00] release for our site, which is the doc site. And also the other sites that we also maintain I did wanna quickly also mention the another thing, which is updating release notes. There's a lot of, bit of automation they pointed to of this sort of host.

The tarball the zip file. And then the static distribution, which is the container the getup package. But the other thing I wanted to mention is about generating release notes. So last fall, we actually shipped features to actually add a button to all your releases. So if you struggle with thinking about what was shipped from the last tag to this tag definitely use tags.

If you aren't using them as a way to automate those with semantic versioning, I'm happy to talk about them more detail and don't have time today, but if you're leveraging tags, you could auto generate release. So if I click that button, that change that Sam made earlier is actually gonna show up in our release notes here just by hitting that button.

And what's cool about that is that Sam's gonna get a call out of being a new first time contributor. I didn't have to do any sort of all contributors automation or anything like that is just given [00:21:00] to me for free. From just simply GitHub and the release automation tool which is built in and not only is there a button there's also an API.

And so if you did wanna automate this through some of your tooling the only you have to do, only thing you need to do is when you do generate a new release. Is to generate release notes, true inside the the options flag that you send over to the API, and then we'll generate those release notes based on the template, either the default template, which what I showed you or the template that you could provide us as well.

So you can set up that template inside your YAML. In your doc home folder. Again, don't have time to go into great detail, cuz I only had 30 minutes to talk about this, but did also wanna point out that if you check out your github.com such your home feed, you'll see a number of different releases that are there.

Some folks like C Soro is using this feature. You just check it out there in your home feed as well. And then finally I wanted to also mention a new project. That I was able to turn around and chip in only two weeks over the Christmas break. And the reason I was able to do this is because we already had a lot of this release [00:22:00] and build infrastructure that we just copy and pasted over to hot, open sauce type pizza.

So this is the project. If you wanna look for the hottest projects or the hottest open source projects that are looking for contributions The second half of that is not complete yet, but we now have a feature where you can do, you can actually log in up, vote different projects in the future, we're looking to expose like good first issues, as well as identify projects that have really good onboarding or that are looking for new contributors.

So we'll have signals for that in the future. and so definitely check it out. Keep an eye on open source, the repo and the projects. We're always looking for new contributors. We also have an entire suite of actions that also automate a lot of this stuff. So we do have actions that power, the actual project, open sauce, dot pizza.

So if you wanna learn more about that and how we're leveraging super base to store data for making contributions for open. Def well, definitely hit me up and then check out super base. I have a slide here. I don't work for them, but I think it's a cool [00:23:00] product. So you should definitely check it out if you wanted to learn how to build MySpace in 2020, which is when I wrote that article.

Definitely check out that post and then a reminder, if you don't got sauce, then you lost. That was

**Brian Rinaldi:** awesome, Brian. Oh my God. I feel like I'm gonna have to go back and rewatch that in slowmo so I can get all the information I need to know what to do. Cuz you like packed a ton of different features and information in there.

We, yeah, we do have some audience questions and I've got some questions on my own. If anybody has additional questions, please feel free to post them and ask a question module right now and we'll be sure to get to them. So first question we've got from Mike what's the right way to pass required info from one workflow to another says I've done it with artifacts, but it feels a little dirty.

I've also done it with cullable workflows, but I believe they have some limit.

**Brian Douglas:** Yeah. So if it's a workflow [00:24:00] inside of the same repo call, I think callable workflows are the way to go, but you could also do another thing, which is repository dispatch. And this is the way that I originally started using it.

So callable workflows I've actually never used to be quite honest because. Back before we had all these other features for get up actions, repository dispatch is essentially giving you a web hook. So that way, if you want to pass data from one action to another, that happens to not be in the same repo or organization or if you want to click a button on a website and then call an action repository, dispatch it's pretty clean.

And what I usually do with that is put it into a serverless function. Unfortunately, I don't have a ton of content around this, but I have one blog post on dev dot. Specifically about repository dispatch that will help you get started? I think that's the only piece of content I've done for GitHub hackathon.com, that website, we end up using repository dispatch to manage passing in authentication tokens from.

Users that we don't have access rights to like we'd pass off, like the very read [00:25:00] access to their repos, to the thing that we were running. It was a bit, we had a blog post with who was it that the people that used to run the conference in Spain, there was another blog post about that for the hackathon website and how we built it.

So I'm happy. I don't have, unfortunately I have a lot of details on that. A lot of great answers, but hopefully to get you started. And also Mike just hit me up. I'm happy to look over your shoulder. Cool.

**Brian Rinaldi:** Awesome. Yeah. That kind of probably a little over my head I haven't needed to do that myself oh, I guess it's one of those things I'll have to, when I hit that problem, I'm gonna be like, oh, Now I remember Brian talked about this already.

So Sean asks, how would you coordinate a GitHub workflow with a Netlify build? I actually had the same question. He said, for example, I wanna run my project's test suite in a workflow, but I also don't wanna wait for the entire test suite to finish before starting a Netlify

**Brian Douglas:** build. Yeah. So like with Nefi the Nefi build it's it could run.

I guess, are they testing [00:26:00] on the LFI build? Because if that's the, if that's the solution or sorry, if that's the scenario they're looking for, there is an example which is the getup handle is Jake Jarvi. I'll never forget that name cuz the alliteration, but he has a lighthouse action to actually test on nullified, deploy preview.

So I'm gonna go outta limit and assume that's what you're trying to test. You're trying to test whatever's out, live in production or what's happening on nullified servers. He has, he's already solved, proved the pattern and the beauty of this it's open source. I don't know exactly how he did it, but he is waiting.

To build the finish check out the deploy preview that gets returned. And then he is actually running lighthouse checks specifically on nullify deploy previews. It's the only, only action I've seen that specifically works only like it works for nullify. So like it's a really good example to look into.

And the other thing I mentioned, again, all actions are that all actions, the majority of actions that you can leverage, they're just GitHub repost. And they're all like I tend to do a lot of cop in pasting of code and pointing [00:27:00] back and forth to things that work and forking and contributing. I would say check out Jake Jarvis's action.

And then. This is a question that comes up a lot for the Nuy team as well. So the nullify answers that nullify do com I haven't searched for a nullify question in a while, cuz all my stuff just works TM. But their form is also pretty responsive as well as github.community. So between the two forums, if you don't have an answer between what I just showed you you could probably find the answer pretty quick in one of those forms

**Brian Rinaldi:** and what so for your project you're you are deploying you.

To GitHub pages, but also to Netlify. So what, how is your Netlify? Is it just still hooked to the GitHub repo? Or are you doing something different to push the code onto Nety

**Brian Douglas:** you do? Yeah. So the nullify still normal, it's just, you basically go to Netlify points to your repo deploys happen and you.

From at that point the main branch that I deploy, the get up pages thing we do specifically for local proof of concepts and confirming our static build works. It's over, it's essentially [00:28:00] overkill. Like you don't need to do to GI hub pages sting in my solution. But because of where I work in my day, J job, like I also wanna confirm that.

Yeah. If you wanted to use getup pages, that's a solution for you as well. So I just inject that example. It doesn't hurt anything to have it a getup pages, branch, and then deploy that with the static function or with the nullify runner. But yeah, but as far as like the everything's normal with nullify, I'm just pointing into it and it's deploying and running it in their cloud runners as well.

Okay.

**Brian Rinaldi:** And so like your GitHub pages, you're used to GitHub page. Like you said it's overkill is essentially doing like a preview branch in a way, but

**Brian Douglas:** on GitHub. Yeah. So like the thing that we shipped actually last month is now GitHub pages runs on GitHub actions now. So it's like we had a very small change log announcement.

Wasn't a big deal, cuz it was in between holidays. But essentially. Before, when you posted on getup pages, you didn't really have any sort of insight of what happened when you ran the build. It was set it, forget it, hope for the best. And for the most part, getup pages has [00:29:00] always been a little.

Extra feature inside of get hub. So if you want a quick docs, proof of concept, GitHub pages.io or github.io Euro, like you have that for you. And then companies like nullify and Versace, they've taken it to another level when it comes to static deployments. And at the moment like GitHub pages is not really focused on like the level of introspection, everything you wanna do with nullify.

But if you just wanna get started, you wanna get a quick portfolio site, get up pages is a really good example, doc site as well. You can leverage it there, but we will be shipping more features. Like we do have multiple environments set up now. So that's hopefully gonna set up us up to be able to have staging and stuff like that.

Forget up pages down the road, but yeah. Wow. I can't put a date on it. But it's yeah, it's in the. Okay.

**Brian Rinaldi:** Yeah. And I remember honestly, like I got my start pushing stuff to get hub pages. Cuz I think that was the first place I could take my check site many years ago and push it to GI hub pages and have it automatically build and deploy for me.

Even [00:30:00] before I think Netlify was around, this was there. It's nice to see it finally, like evolving in a way. It tastes not quite, I guess if you're looking for something more full featured, you go with somewhere else. Yeah. But if you just need deploy

**Brian Douglas:** simple sight, Yeah.

And I would say it's no mystery that get up pages is not our main focus as far as GitHub. Like our focus is collaboration, right? So get up pages is like an extra feature amongst that collaboration piece that we're doing. So if we were working on a team or if we wanna ship to the the jam.dev site, like we now have we can access, use GitHub pages as our staging, if we wanted to, or a place that we sandbox most people might usey instead because you can do multiple branch deploys and they have a.

Really cool bells and whistles. So like recommendation is probably used nullify. But if you're just throwing a perfect concept or maybe it's a new project, you just need to throw, you don't need a team account. You already have everybody in the repo, throw it up on a page. And then hopefully you, it can grow with you.

And if it doesn't grow with you, then there's other options that make it easy, just log in with GI hub.

**Brian Rinaldi:** I kind. Not [00:31:00] specifically on the GitHub action topic because you brought it up, you mentioned it. And I, I suspect maybe a lot of people haven't even heard of it. You mentioned using docu source.

Can you tell folks a little bit about what docus source is and why you used

it

**Brian Douglas:** for that project? Yeah. So docus SOS is it's a fully featured, if you think of like static side generation, it's like a static site generator built for docs. So a lot of the sort of page management multiple markdown files, a lot of bells and whistles.

The reason we use Dacus we chose DACA SOS is because you can actually take your entire docs and make a book. So we have an action that will print the entire doc site. As PDFs. And just as if you had an O'Reilly book or a Manning book you can have the entire open source stocks as a book. It's a little underwhelming cuz we don't have that much stocks.

But in the future, I'm the plan is to eventually have some intro to open source content there, and then you could essentially just grab, grab the PDF and go look at it, look at it through, out an airplane or [00:32:00] airplane mode. Yeah.

**Brian Rinaldi:** Okay. That's cool. I, I didn't. know that feature.

I remember when I've looked at it, it has some kind of navigation and other types of things that like you typically want in docs. And the other thing that I thought was cool that people probably, if you're doing docs can be really important is the fact that it has versioning for so if you're yeah.

**Brian Douglas:** Yeah. So we haven't got that far yet. Yeah.

**Brian Rinaldi:** But that is one of those things that was like, okay. I need to get to the docs for version X kind of thing if I recall. So anyway awesome. There was another thing not related to GitHub action specifically that you mentioned that I thought was cool that I have seen a lot of people doing a lot more of, which is I wouldn't call it using GitHub as a CMS, but it is like GitHub as a data source.

Like one of the many data sources that supplying things to my application, like using comments, coming from GitHub or using, or even pulling. Content from directly [00:33:00] from GitHub, almost like actually I have seen it used directly as a CMS, not even necessarily using like pulling the files, you actually calling the API and getting, so have you done much with that?

Or is

it

**Brian Douglas:** some, yeah, I'm curious what your thoughts are on that. Done much is the understatement. So BW live, which is my main. The entire, all the blog posts are actually GitHub issues. So I think SWX does a very similar pattern for his not his blog post, but his comments as well.

SWX, I throw that name, like everybody knows who he is, but hopefully people know who he is. But yeah, all blog posts on BW live are actually issues, GitHub issues, and all the comments are GitHub comments on those issues. There's a GitHub open source project called utterances which you can embed GitHub comments from issues onto your website.

So if you wanna open up a issue like, Monday, all user feedback and that little chat bubble on the bottom, you can just connect that directly to a GitHub issue. And then are you able to source. There was another one that I don't remember the name where it connects to GitHub discussions is another open source [00:34:00] project got like 5,000 stars.

So it sounds it seems like it's been around for a bit and I just learned of it yesterday. But. To answer that question. My original pathway into using GitHub as a service or as a backend, essentially is open source itself. The entire backend. If you log in with open source, we create a re a repo on your behalf.

And then we install open source onto that repo with the GitHub app, which is a whole nother world that I didn't even get into in the talk. But That gives us the ability for you to track open source contributions you wanna make. We can also look at open source contributions you've made for the specific repo you're saving as a getup issue.

And we can start all that data inside the issue as like metadata which we do in me between the issue and some JSON files that we throw in the repo as well. So that way, if you decide, you know what, I don't want open source to know what I'm working on. Private that repo. Like we won't see it basically as well as if you wanted to basically just delete the repo, you could do that as well.

And then once you delete the repo, you remove yourself as an open source user. So there's no, [00:35:00] no database other than super base is a whole nother Another conversation that I can answer, but there's no real database for open sauce.pizza. Specifically, it's just all GitHub repos that the user owns.

Wow. Okay.

**Brian Rinaldi:** So that, yeah, I was gonna ask exactly that it sounded like pretty much, it's just pulling data from different places and GitHub and assembling it.

**Brian Douglas:** Yeah. And that's the like I don't want, I've always in the whole jams stack architecture. The one thing I've never wanted to do is start paying money for other people to use my cool idea.

So with GitHub, it's free up to 2000 minutes for actions. It's also free for you to create a op like a public repo or even a private repo. So if you just let me create that one repo for you and then have access that only that one repo in your account. We can make this open source connection work between us or between you and the app.

And yeah, that's part of the reason why I built it this way is because I just never wanted, I never wanted the popularity of a project, which to be quite Frank, the popularity is very low. I didn't want it to basically [00:36:00] cost me money. Yeah. Yeah.

**Brian Rinaldi:** I hear you. That's it? It is one of those things.

You don't want the, if you're starting a side project, like one of the deterrents can be like, once you have to start paying a ton of money for yeah. For things to keep it running. It's first thing I look at. Yeah. Yeah. So I hear you I've been there. Oh God. I remember the days when, like any project I released on the web, I had to.

I'm like, oh, I need a database server and I need to pay for web hosting and all. So yeah. Things have gotten

**Brian Douglas:** a lot better. yeah. I don't mind if I, for my work, if we could spit up a database server and pay for the service, it's oh, sure. Work's paying for it. But if it's this is not a work project.

Yeah, we're doing the. Ultimate free plan. If there's no open source plan, I'm looking at the pricing page and I'm like, okay, like most authenticated, like off zero and stuff like that. It's 10,000 users. And my joke is if I hit 10,000 users, I'm gonna get VC funded because at that point I've got product market fit or something.

Yeah. But yeah, just using all the free tiers of everything. [00:37:00]

**Brian Rinaldi:** Cool. And I think you mentioned it during the presentation, but when I started with Gith hop action, you showed a lot of. YAML, it's YAML, right? It's so a lot of YAML, but it's you don't actually have to know how to do all that stuff.

I was building some, I wouldn't call 'em super complex, but they did some decent stuff and I was just pulling from community ones out there and just assembling them together.

**Brian Douglas:** So yeah.

**Brian Rinaldi:** Tell people like where can they find all the community ones? I know there's even like a, you can search for them and things like that and just add them to your repo.

**Brian Douglas:** Yeah. So there's the get hub marketplace where you can search specifically. So if you want AWS. Action. Or if you want an action that connects to white house that's the best place to start if you want, like a, an action, which we basically, these, the most of those actions are from partners.

So like AWS, Google, Microsoft. But there's another repo, which is Sarah ner, which I think a lot of other folks might know. So SRAs on GitHub, she has this Rebo [00:38:00] called awesome actions which folks. Basically contribute to the readme and add their action in the list. So it's all organized by, based on category.

So if you're looking for actions to manage your JTS, or are you looking for actions to use GitHub as a CMS, which there's a couple of them that are out there? You could yeah, just check out that repo and you'll find an unlimited amount on. Cool. I'll have to

**Brian Rinaldi:** check that one out. I know. I used the regular, like searching through the marketplace.

I will say sometimes I came across like 10 and it was really hard to tell which one was a good one to use. So I was often like, just plugging 'em in. Okay. That one didn't really work the way I thought it would taking it out. Yeah.

**Brian Douglas:** There's quite a few out there. And I think GitHub stars is not the best indication for like popularity.

But I usually a combination of GitHub star is last commit contributor. How many contributors are on the team or how many open issues? Funny enough, I'd mentioned super base. So I'm actually creating this little. Side project, this algorithm to figure out popularity of GitHub repost. And I'm [00:39:00] basically taking open source users trying to see the stuff that they submit on open source in star, on GitHub and doing a very secretive algorithm, which is there's an open issue about it in the repo, if you wanna get the details, but essentially a combination of like how recent and how popular it is to then start recommend.

Project. So I'd like to do something specifically for GitHub actions. I just having, I wanna massaged the original project first.

**Brian Rinaldi:** Okay. Sounds like a little bit of like the kernels secret 11 herbs and spices.

**Brian Douglas:** Exactly. Yeah. 11 urban spices in an open source, repo in an issue it's just listed right there.

Yeah.

**Brian Rinaldi:** On a project about pizza.

**Brian Douglas:** Exactly.

**Brian Rinaldi:** In one last thing before you finish, so just talk about the NBA. Who's the team. I always forget. Who's the team.

**Brian Douglas:** Yeah. So Orlando magic, cuz I'm from Florida. Orlando magic has always been my team, but really they don't play out here in California. It's funny right before I moved to California The last day before, like the day before I went and got on a plane, I went to a magic [00:40:00] game and it was like the last game of the season.

And they lost 81 games, like or whatever. Like it was, I think they won three games that year. So whatever the max games that you can play, they won three of 'em. It was a really deflating experience, empty arena they're losing. And it's a bunch of people you never heard of cuz everybody's hurt. That I got on a plane to Oakland and that year Oak, that was their first championship year with the warriors and Steph Curry. And I was like, you know what, I'm a warriors fan now. it. It's different. When you watch a team that's winning versus a team that never wins. So I'm like, you know what? I feel better when I watch the warriors as versus when I watched the magic, I feel bad.

**Brian Rinaldi:** Yes. You just, you can't let go of your home team though. I feel you, I'm lucky cuz my home team's a heat and wow. We're pretty good. So nice.

**Brian Douglas:** But yeah, next time. Not to be bad years.

**Brian Rinaldi:** Next time you're in Orlando. We're gonna go to a magic game. And if they play the heat tend to lose to them for reasons.

I can't explain, but anyway,

**Brian Douglas:** So yeah, guaranteed at least four games a year. They'll win them. [00:41:00]

**Brian Rinaldi:** yeah. All right, Brian, this was awesome. Really grateful. You came out to join us this I learned a lot and I definitely gonna go back and rewatch

**Brian Douglas:** that. So thanks again. Awesome. Appreciate it. Enjoy the rest of the day.
