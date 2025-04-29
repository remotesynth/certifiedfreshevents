---
_build:
  list: false
  render: never
---

**Mike Street:** [00:00:00] Super excited to be the first speaker of the first virtual coffee conference, so hope this all goes well. Hi. My name is Mike Street. As you can see, I'm on brand with my check shirt. As Bekah mentioned, I'm CTO lead developer at Liquid Light. We're a small web agency in Brighton. There's about 15 of us, but we look over after about 60 to 70 websites.

So for us, like processes, making sure things are. Making sure things are good is how we keep going. I've been a virtual coffee member for just over two years and it's great just to have a little community there whenever you need some help or a little bit of boost or something like that.

I'm one of these people that if something's broken, I like to try and work out why it's broken. Take it apart, try and fix it. If something works, I like to work out why, so I [00:01:00] take it apart and see what's powering it behind the scenes. If you wanna get in touch I am at Mike Streety on most social networks.

There's a couple which I may have been banned from, but I'm not gonna talk about those mainly for trying to hack Pokemon Go. But the rest of the good ones, I am there at Mike Streety, or you can head to my website if you want to get in touch. So unraveling gi, the secrets of the commit hash.

What I'm gonna cover in this talk today is I'm gonna briefly touch on what GIT is. Give a very quick overview of hashing combine those two bits of knowledge and talk about the GI commit hash. Oh. Sorry understand more about what goes into making and amending the Git commit hash. And then lastly I to try and give a little bit of context, I've added some sort of house rules, so how we use and treat git at liquid light, which will hopefully give a bit of context to some of the stuff I'm talking about today.

[00:02:00] The As to the why as I mentioned, like I tried to understand how things work. I saw the GI commit hash once and I just was really fascinated as to what built it and how if we can control it and if we can understand what it's doing. But also I. Anticipate when and why it would change.

And hopefully when you come across those scary error messages you are more well equipped for it. Just as a little warning, this is a very light touch overview of Git. I'm not gonna go into any inner workings. The, you could probably spend the whole day today just talking about GI. If you were that way inclined, but we don't, we're not.

It's just gonna be really brief, top level, cover a couple of commands. There are hundreds of commands hidden behind, but hopefully this will give you a little bit of knowledge to, to help you in your day to day. Git start at the top. What is Git and how does it work? The official definition of GI is that it is a distributed file-based version control system.[00:03:00]

So just to break that down in reverse order version control keeps track of the changes. Hopefully if your GI commit messages are really good it will give context reasoning, give the why as to the why those files are changed. And it also tells you who gives you a timescale. All of those things.

Things like Google Docs have now got a history, which is basically version control. A lot of CMSs and other things have also got version control built in. It's file based. And this is the thing that always surprises me. It surprised me and surprises other people. In your GIT repository there is a dot git folder and in there is everything.

Git needs to operate with your repository. You can move that folder around. You can move it between computers. You can go in, you can dive into the files. You can see that there's lots of recognizable names on things. There's lists of all your commits. There's no magic services running. It's just a command line interface.

And some files it's worth as a little bit of a tidbit. Branch names are like domain names. Branch [00:04:00] names mean nothing in Git. They just point to a Git commit hash. They're just easier to remember like a domain name. There is a file there if in your dot git refs heads folder, there's a file for each branch and that tells Git which commit it's pointing to.

Lastly, it's distributed and this is something that GitHub, GitLab, Bitbucket, all of those have a, kind of masking in the fact that when you clone a repository down from. From one of those, it's exactly the same on your computer as it is on other people's computers, as it is on their services. A repository is a repository.

There's no like primary one. There's no secondary. They are all the same. So if GitHub or GitLab were to go down, if they were to disappear, you've still got a copy of all your information locally. You can push that to servers, you can push that to other people's computers. You don't even have to involve GitHub.

Or anything like that. GitHub, GitLab, they are all just wrappers for git underneath. They do introduce nice things like pull [00:05:00] requests in the UI and stuff like that, but ultimately a Git repository. They are all equal no matter where they are. Hashing the other side of this talk hashing, this is a really complex.

Definition of hashing. A hash is a fixed size string or number derived from an input of any size generated using a mathematic mathematical algorithm. Basically, you put some stuff in, it does it, and then it gives you a fixed leg string out the other side a. So I've noted that if you put the same input into the same hashing algorithm, you'll always get the same hash out, and that's quite useful for comparing things for giving you a fixed length string.

A fixed length string for storing that data for quickly checking if it's the same. Examples of some hashing algorithms you might have heard of MD five SHA one, SHA two, argon two. There is a SHA three and a SHA 2 5 6. The main difference between all these hashing algorithms [00:06:00] is their security, their speed, and their complexity.

MD five gets a bad rep on the internet, but ultimately it is a very quick. Very reliable hashing algorithm for doing really easy checks. If you want something a bit more complex, that's when you start to look at the other ones. But if you just wanna see if these two text files are the same, MD five is a great place to start.

Other places you might find hashing usage is with passwords. That's the obvious one. Where the hash of your password is stored generally in the database of the site that you're signing into. And when you log in, it doesn't decrypt that password. It hashes what you've entered and then just checks that hashes are technically irreversible.

They're not definitely irreversible, but the idea is that you cannot get the input out from a hash. There's many ways around it, which again, is a whole nother talk in itself. But yeah, the general idea is you can't reverse a hash. The other [00:07:00] place you may have seen it is the integrity attribute on a script tag, and that is a hash of the JavaScript file.

For example, when the browser comes to download the JavaScript file, it can then check that hash against the one that it's generated and see if they're the same file. So now that we've got a. Basic understanding of git and hashing. We could smash those together and get the Git commit. Hash Git uses SHA one for its hashing.

It might be using SHA 2 5 6 at some point, which is even bigger, has less chance of collision, but it's behind an experimental flag and I couldn't find anything concrete of as to when it's gonna start being rolled out. Shawan again gets a little bit of bad rap 'cause it's not the most, secure, but GIT doesn't need it to be secure.

It just needs to avoid collisions. Because everything you're putting into a Git commit hash is public information anyway. But there is a number that is the chances of a SHA one generating the same hash from [00:08:00] two different inputs. One thing I did learn is that in the UK it's called an octillion, but in the US an octillion is completely different number and you would know it as a Quin apparently.

So the hash input, we know that to get outta hash, you have to have some input. But what does GI use for its hash when you commit? It uses the parent commit hash, the commit message. So what you've actually written the current date and time, your author details, which you set up when you configure gi, any file changes.

And then there is a little bit of magic because there's some extra bits that go into making the commit hash. But ultimately, these are the ones that we. Care about and can affect. It's worth noting that a merge commit has two parent commit hashes because it comes from two different sources. So how might, in your day-to-day life you go about changing the commit hash?

There's obviously hundreds of ways, but there's three main [00:09:00] ways that I come across most often, which we're gonna touch on. So there's the GI commit, men, a Git rease, and a git cherry pick. Before we get into this this is the diagram, the git log that I'll be using for the rest of the slides.

I didn't want to jam 40 character hashes in there 'cause it will take up the whole slide and be quite hard to keep track of. I've come up with my own sort of hash which is the first number is just what commit number it is. The second one is what its parent commit is. With, we've got a P in front of it.

And then the last one is just a random four letter word and that represents the contents of the commit message, all of those little bits. So hopefully as we go through and amend our commits, you'll be able to see what is changing. I. So the first one, a git commit, amend. Here it is a standard GI repo as we are.

We've just committed something. We've just committed our file changes [00:10:00] and doing a git log, we realize that we've missed a file or we've put a typo in the commit message, even putting a full stop. Removing the full stop and your commit message would completely change the hash. So we do this and we go, oh, we need to change it.

So we do a get, commit, amend, and then our commit five P four jump then turns into five P four able. It's the same commit. It's just got some different contents. It's where we were a minute ago. That is all fine and dandy. You can push that be on your way. The trouble is, or what trouble you might face, is if you've pushed that commit before you've then amended it.

So we, we are back where we were. We've got Jump, we do a Git push Origin Main, and then our commits are up on GitHub or GitLab or whatever. So we've chosen,

we then run a get, commit, amend locally. We've got this different repository now. So [00:11:00] locally we've got that five P four able, but remote, it's still got that P four jump. We know that those two commits are basically the same and should be the same. So we come to do a Git push Origin main, and we're faced with this.

And if you've done any kind of Git work, at some point you would be faced with this quite scary looking error and. All Git is doing is saying there's a hash that's local, that's not remote, or there's a hash that's on remote that's not on local, and Git keeps track, as I mentioned earlier, as to what those hashes are and what those logs are.

So if you head into your Git repository to those two different locations, you'll see there's just a file with a commit hash. And it's just looking at those and going, it's different. There is also in a slightly different folder, an actual log of the commits that are on each branch, and it uses those to compare.

So with that error, how do you solve it? It depends because most of the time [00:12:00] when you get that error, it's probably because a friend or a colleague or you on another computer have done a GI push. And there's just some commits that you need to pull down locally. So you would do a git pull or a Git fetch.

You'd merge it as you normally would, and then you'd push up your new commit and that is the happy path, as it were. But in this instance, we're gonna have to do a force push. Because we are, we want to overwrite that, commit on remote with what we have locally. And this is a little bit dangerous because that commit that you've pushed might have been pulled down by colleagues.

It might have been tied to a deployment or a Git tag or something like that. It might be, there might be further ramifications for that commit being there on Maine. So with a force push, it's very, you have to be sure what you're doing. You're basically saying, I am the best. My local Git repository is correct.

I'm gonna overwrite the rest of you. It's worth noting when I say a force push, there's [00:13:00] actually two different types. And you could do a git push origin main hyen force and that just bulldozes your commits live and doesn't really check anything else. Or you could do a Git push origin main hyen force Hyen width hyen lease.

And that just basically make sure that there's no, no additional commits on the remote before you're about to bulldoze it over. So with the amended commit and our force push, that's the first way that our GI commit can. Our get commit hash can change. So bringing up our house rules we never amend a pushed commit.

We have deployments, we have tagging, we have all sorts of things that are tied to those commits, so we don't ever want to do that. I. We never force push on main. Again, we have automated scripts that deploy and things like depend bot which update and might be committing. So doing a force push might undo their work.

We do allow force pushing on feature branches if you are the [00:14:00] only one working on it. The other thing with change it a commit hash and someone pulls it down is it can then get their local Git repository confused. Number two, the Git rebase. I think this. Some people were scared of a Git rease, but it's really a very powerful thing.

So here's our local Git repository. It's got a little bit more complicated now because we've added a developed branch with which we branched off band, did a few commits, and then either us or someone else has done an extra commit on Maine. And what if we want to get that commit from Maine into our developed branch?

We've got three different ways that we could do it. We could do a merge which is the most standard, straightforward way we could do a cherry pick, which we're gonna talk about a bit later. Or we can rebase if we were to merge, this is what it would look like. So on your developed branch, you then get an additional commit which [00:15:00] has got those two different parents.

It means that jump is now in develop. But it can muddy, it can dirty your developed branch, especially if you're doing a lot, if it's a high traffic repository and you want to keep your feature branch up to date, there's gonna be a lot of those merging made into develop commits, which I mean, I am. A big fan of neatness.

So seeing those, getting them merged into main sort of gives me a little bit of the ick. Sometimes it can't be avoided. Sometimes you do have to merge it 'cause no other sort of strategy works. But generally we try and avoid that. So the way that we can get around it is by doing Aase. And what that does is it reapply the commits on top of a new.

Tip, hopefully it'll make sense in a minute. So we're back to where we were. We've jumped on our main branch, and we've got those other three commits on our develop branch. We would then do a GIT checkout develop and a Git rebate main. [00:16:00] And ideally, this is what we'd think it would look like. So the commits are exactly the same, but our developed branch just comes off jump.

However, it's not what would happen if we go back to our hash input. The first thing is a parent commit hash, and by doing a rebate, you're changing the commit hash. So the way that GI deals with this is it actually takes all of your commits off the develop branch. It then makes a new branch. It sets develop back to what is now jump off main and then it recommits your commits, it reapply your commits one by one on top of that.

And you can see those that are eagle ied that the commit hashes have changed because instead of form coming off one and have it apparent of one. It's now got a parent of two, and because that hash has changed, it means that all the other commit hashes have changed that come after it. If you do a rebate, sometimes if it comes across a conflict, you'll need to solve [00:17:00] that as it's reapplying those commits.

But yeah, that is essentially what's happening behind the scenes on a, on aase. So the hash changes as far as gets concerned, that's a brand new branch. As a little bit of a side note commits actually have two authors and two dates associated with them. There's the author date. And the author, who is the person and the time and date that it was like originally committed.

This was like the original person and time of date who made the changes. Then there's the commit related author and date, and they are who has committed this work. Sometimes you can commit straight away for someone else if you do a GI commit author, but generally the author and the commit details are gonna be the same person, same time of day.

But in the in instance of Aase, it's gonna, because it's recommitting those, the commit and the commit date actually get updated. So I did actually do a [00:18:00] AASE on a local repository just so that you could see that those two things can differ. So the thing is now we've done aase, we do a Git push origin develop, and we are faced with that big error again.

But we know it's because the Git commit. Hashes have changed, but our branch is up to date. We are on a feature branch, so we're happy to do a GI push origin, develop force to get that branch up there. So adding to our in-house rules, we've got those first three that we had before. We use rebase to update feature branches with Main.

So whenever we're on a feature branch at Liquid Light, we use a GI Rebase to make sure that those feature branches are up to date with Main without getting all those merge commits in there. And then we use Merge to get. Feature branches into Maine. Those merge commits are something that we actually aim for and is part of our merging strategy so that in Maine we have those key points as to when feature branches were merged.

The third one is a [00:19:00] get cherry pick. So going back to our repository again, we've identified that the king commit the four P three king commit that we did on the developed branch. Is in fact fixes a bug that's on main that we need to get live as soon as possible. We don't want it held up with what's on develop.

And we want to just, yeah, it's unrelated. It was identified, we committed it, but we want to get it into main ASAP. So we would get checkout main. Do a get check, cherry pick of our commit hash. And if you read a lot of blog posts, a lot of tutorials, this is what they describe as happened.

They describe that you pick up the commit and you drop it nicely onto Maine. It knows that it's been cherry picked. Everything's hunky dory. It was interesting that when I was doing some research and looking into blog posts, rarely did they mention the side effects of doing a cherry pick. [00:20:00] So this is what a lot of, this is the happy path that a lot of blog posts explain.

But actually what happens is this, all it does is it picks up the contents, it picks up the changes of the commit, and it recommits it onto main. So now we have a commit on main and a commit on our developed branch, which are exactly the same. They've got the same contents, they do the same changes, they've got the same commit message, but because they've got different parents, because they were committed at different times, they're gonna have a different hash.

And the, going back to the Rebase commit, the king would have the author date and time and person of the original one, that the commit time and the commit author would now be you. And now, we need to get rid of that king commit really on the developed branch because it's gonna cause problems.

'cause otherwise, when you come to merge, develop into Maine, there's gonna suddenly be two commits that do exactly the same work. And Git most likely will be [00:21:00] confused. I've had it where it hasn't, it's just accepted it, but chances are it's gonna get confused as to what things to apply. You're gonna get Emerge conflict and all of that.

It's best after you've done a cherry pick to sort out the. Commit that you've picked before you move on, before you do more work. It might be that you wanted to cherry pick King because the other three commits are now trash and you're just gonna delete develop, in which case it's fine, but it might be that you want to keep the other three.

So there's a few different ways that you could do it. You could do an interactive rebase, which I'd love to go into, but there just isn't the time. And that enables you to I'd really encourage you to do some reading on interactive rebate. If you're on like a feature branch, for example, and you run something like get base head.

With a Tilda three, it shows the last three commits, and from there you can move them around. You could squash them, you could delete them, you can add extra commits. You can do all this magic. So by doing a GI base head, you could then [00:22:00] remove that king commit from the developed branch, and afterwards you could then do a GI rebate made to make sure that the king commit is where your developed branch comes off.

You could make a new branch off of form. Just going back, oh, sorry folk. You could make a new branch off folk and then Cherry pick the book. Commit onto that new branch. I. And that kind of skips the king. You could revert the king commit when you're on the developed branch, but I feel like this was untested.

But I feel like you'd get some conflicts when you then come to merge that into Maine because there'll be a commit that applies it, a commit that removes it, and it might all get confused. Or if it's a really small thing, if it's a one line change, then deal with it When you merge, develop into main. It all depends.

Basically it's, I can't give you a one line fixes all. It all depends on the size of the change and everything like that. So to add to the last of our in-house rules and to recover them we [00:23:00] never amend a forced commit. We don't force push on main or branches that are associated with environments.

We only force push feature branches if you're the only one working on it. Use Rebase to update your feature branches with stuff that's on main use Merge to get your feature branches into Main. And then lastly, we generally avoid Cherry picks as a rule at our company and consider squashing or using GI Base I before you merge your feature branch into main.

Just to recap and to hopefully if there's one takeaway that you get from this talk, it's this that intu a get commit. Hash goes the parent commit hash or hashes if there's two. The commit message, the commit dates, and time. And the commit user. So you, as you're committing it, then the author, date time, and the author.

And remember, they can change, they could be different depending on what's happening. The changes in the files, whether you are adding stuff, removing stuff, adding lines, removing lines. And then lastly, a little bit of gim [00:24:00] magic that I don't worry about on a day to day. And that's it. Thank you very much.

Feel free to reach out if you've got any questions. And I'd appreciate any feedback that anyone has.