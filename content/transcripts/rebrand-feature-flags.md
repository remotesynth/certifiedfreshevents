\_build:
list: false
render: never

---

# releasing_in_secret_with_feature_flags (1080p)

**Kathleen McMahon:** [00:00:00] Welcome everyone. I'm Kathleen McMahon and this is for, And we are here today to show you how we rolled out a rebrand in secret using feature flags. Before we begin, let's get some details out of the way. You are just killing me, dude. , for those who like to follow along my presentation. We'll be posted on noticed.

That's https colon slash n ot I dot s t dot r e s o u r c e one one. The official deck will be posted after this talk, but if you want, you can take a look at my trajectory deck, if you wanna see image descriptions, code, examples, and if you need to have speaking notes if need some extra help with vision.

Okay. Th All right. So you can follow me at resource [00:01:00] 11 on Twitter, Instagram, and GitHub. But let's back up a little bit more so I can introduce myself better. So I'm an engineer and a designer, and I like to speak about things with, companion cats and I race bikes very badly. Mostly you'll see me in costume racing, two laps to your six at the back of a pack on a single speed with a bunch of onlookers in the crowd laughing at me toasting with their beverages.

So while I'm an engineer, designer, and speaker, I'm also a design engineer on the UX Next team. At LaunchDarkly, our team enables other designers and engineers to craft high quality experiences for our customers. Part of our work includes maturing the design system, and if you have ever worked on a design system, you know there are a lot of things to consider.

Similar to herding [00:02:00] kittens. Maturing a great design system can be tough with so many moving parts. If your squad is small, you have to be very strategic, especially when your product roadmap changes. For example, what happens if your creative team has refreshed the brand and your team is presented with an updated brand North Star?

It's definitely a surprise Pikachu moment. But you may ask, what is a brand North Star? There's this article by M 81 Creative that gives a great explanation. Your brand's North Star is the promise that you are making to your customers. Now, Launch Dark Lee's North Star is brought through in their core message software Powers the World LaunchDarkly empowers all teams to deliver and control their.

We lean into this mission with our colors, typography, [00:03:00] and our signature logo, even the position of our logo mark to the right of the logo type embodies our core beliefs. In a world where every company is a software company, launched starkly leads the way and saves the day. Creating a North Star takes time to do right.

You have to do things like. Strategy, competitive analysis, user and customer insights, creative explorations. And this process can take up to many months and sometimes up to a year. And once this process is done, you will have some key outputs like logos, colors, typography and such. And once that North Star is established, it's time for teams to go to work to roll those branding visuals into the marketing site and the product app.

Now, this is where it gets tricky. While our team was informed about the brand refresh at the earliest possible moment, we had one wrinkle, and it's a big one. The time to customer, [00:04:00] to the time to the rebrand. Rollout to our customers was in 13 weeks, and it had to be a secret project for most of the company.

That meant that the time to internal roll out to our teams was. 10 weeks. So we had to pivot to figure out how to get things done because the inherent differences between a marketing site update and a product app. If you look for example, at our MIC marketing site over the years, you can see that visual refreshes can happen.

A bit more often. These are the most recent sites from 2014 to now. And on the other hand, visual refreshes happen less often in a product app [00:05:00] because a rebrand can impact your established product roadmaps. And you need to be careful when visuals. When the visuals between your marketing site and your product app get out of sync because your product app will start looking outdated.

And because outdated product app visuals will break, that PR ban will break that brand promise. So our team regrouped and thought, how can we get this done and how do we do this without making any questionable? Decisions that may impact the product because you don't wanna be making questionable decisions like, I don't know, making dishes that include jello and shellfish.

It's just not a look good look. But thankfully we work at a company that has a really cool product feature flags. This means that we could set [00:06:00] up a flagging structure and rebrand and steal mode. We could make all of our changes alongside other teams not disrupt other squads roadmaps, all while the other product squads are not even aware that a brand refresh was happening at all.

So what do we use for flags in our use case? . We use them to control themeing data attributes, fonts, design tokens, HTL templates, and UI updates. And since we had to do this all in 10 weeks in secret, we had used this one ring well One flag as the basis of most of our changes and used it as a prereq prerequisite for other flags that we needed for testing out additional features in isolation.

So the one flag that controlled all of our other flags [00:07:00] were dependent on this enabled 2021 rebrand flag. And this flag was a predicate. Prerequisite, excuse me, prerequisite for other flags. So if this flag wasn't turned on, the other flags wouldn't work at all either. And because secret project, we could target specific users to be able to preview.

What changes we were working on. And once this flag was on, we could continue on work, continue working on things like fing support, using data attributes, and to control whichever theme we wanted to use. We would use these two attributes. Data theme equals Osmo data theme equals legacy, but we also wanted to use our new font, enter in our visual refresh.

We added the enable inter flag, and this would have the rebrand flag [00:08:00] as a prerequisite, and we could add that data attribute to our set of data attributes for theming. We would pair those data attributes, values with React context, and use hooks to create a theme context.

And we would use a theme provider that we could leverage anywhere we needed in our app, and we created this use theme function for wherever we wanted to use this theme and used our theme provider in the app entry point, leveraging our rebrand, FR rebrand flag value to set the theme. And we passed that themeing to the provider, which uses use effect hooks to set data attributes in the root element of our app.

Now, the app themeing was scaffolded. We could continue work on things like design tokens. [00:09:00] So before the North Star was revealed, our team was already refactoring our design token architecture. Our legacy token system was a blend of base and semantic tokens, and it wasn't scalable or teamable. And that's how we did this refactor.

That's why we were doing this refactor. But once this rebrand was announced, we had to adjust our token work, tokens work without losing any of our. Since we were using data attributes controlled by a flag, we could target data attributes in our CSS to control the token values. And considering this 10 week timeframe, we chose to focus on using the data attribute to map our semantic tokens, to face tokens and either legacy or Osmo theme.

Our squads have been leaning on using design token, so this would allow us to re the refu to happen seamlessly. We used a one-to-one mapping and tested our rebrand by toggling on our flag. And this was especially helpful because our legacy tokens were blending base and semantics [00:10:00] in their naming structure.

And we could introduce a new set of semantic tokens quickly without much fuss. And the tokens that we were most concerned about where our application level tokens. And so now we could have a separate set of base tokens for. For all of our colors and fonts and our sizes in our themes for Legacy and Osmo.

So by leveraging our data attributes through feature flagging, we could test out this, these values at runtime and without any, without impacting any anyone else's work and just adjuster values. And even better, we could use the data theme attribute to wrap locks of CSS code and when it's time to remove Legacy styles, we could do it quickly.

So if you've, I'm gonna give you some more details later about this, but let me back up a little bit. If you've never heard of design tokens, Sonke Rohde tweeted a great definition. Design tokens are an abstraction for [00:11:00] everything impacting the visual design of an app or platform. In other words, design tokens are designed decisions propagated through a.

Generally token span, three categories base, which are the raw values, semantic, which are alias to those base values and shared across the application and component tokens. Our legacy system was a blend of the, as you can see, a blend of bla base and semantic. And because of this, it wasn't scalable or them, because if you call something primary green base what if your primary color becomes blue?

This name doesn't make sense anymore. This is why we were refactoring. So with these data attributes, this is what we could do. We could take these set of semantic tokens that were mapped to our, those older, danger red base info, blue base, and [00:12:00] take those and leverage that data theme attribute in css.

And by doing that, we could map those, that those new names of like color error, dark to an a different raw value. And this would allow us to scale pretty quickly and adjust values on the fly. And we could do the same thing with testing out fonts. We could use those data attributes to swap out the alias the value of our new font into that font, family base, application level token.

We could also, and they hits us how we would do with component tokens. Here's the values that we would use for our legacy. . And then when we added the data theme for Osmo, our new brand, we could re alias those colors. And what's great about that, and we'll go back for a second, is old net value, new value.

And all we have to do is remove that old block, remove that attribute, and we're ready to [00:13:00] go once we're done our whole rebrand. So it makes this easier for us to pay down the tech debt as we go. We also use flags in other ways for things like performance optimizations. In our HTML templates. We use the GO SDK and go templates to back on the backend to bootstrap our flag data into our HTML templates to give us just enough information to render our pages.

And we use the rebrand feature flag to set the data stream a. As a performance optimization. This way we could have the HTL templates check for this flag and render the correct theme while we waited for the JavaScript to load and initialize the html. This way we, we wouldn't have a flash of incorrectly style contents.

We wouldn't have the wrong theme loading as this site's being boots strap. We also use the enable inter flag value to pre preload the variable font only. If the flag was [00:14:00] on this way. Our app performance wouldn't take a hit from loading any unnecessary fonts if the flag was off. And for UI updates, we use the feature flag to control we whether we would show or hide content on our left nav.

For example, if our rebrand flag was off. The legacy theme would be true, and we could show icons in each of our left nav link items so our users would have the expected UI experience in the legacy view in production. While we were working on the rebranded nav in secret for our top nav, we didn't have a top nav before, and now we do.

By adding the top bar spike flag, we could add the top nav into the rebrand UI by turning on the flag. And since it was dependent on the rebrand flag, we could test us in [00:15:00] isolation and just conditionally render this top bar through feature flags. And lemme go back. I'm missing a slide. We will double check.

Hold on. Click. You didn't, Okay. There is a slide missing, but I will tell you through, talk you through it. Okay. So this was our rebrand blend, but we also have we had excuse me. We used this environment switcher and. In our environments, we could, whenever you create a new environment in with launched darkly when you create a new project, excuse me, you get two default environments, production and test.

And they are set. These environments are set to specific colors by default. And when we were doing the rebrand, we wanted to trust, excuse me, test out new default environment colors. So what we did was create a new flag for checking, for a rebrand environment, colors. And we used a [00:16:00] multivariate flag here.

And in our multivariate flag, in our variations, we would pass in blocks of j o to test out color combinations on the fly. So in this j o block, you would see hex values, and we would use these when the flag was activated, we could add in that Jason value to adjust the color. And what's really nice about this is if we didn't like any of the colors, all we do is adjust the value of this variation hex value and save the flag, refresh the page, boom, it's there, and you get to test right on the flag.

And like I said, and we use go to store those values. Lastly, Fons. It's always a nice touch to have your fons ready to go when you roll up your rebrand rather than scrambling to update that little detail at the last moment, especially if you're using them in more than one environment. We added one more flag for this, which was the Fon environment Variations, which also [00:17:00] was it.

It was dependent on whether the rebrand flag was. and we would use strings in our variations here. And so with each of these variations, we'd have a different string and the optional name for what environment we were serving up, and we could serve up whichever Falon version we wanted, depending on the environment in our HTML templates, which is pretty slick

few. That was a lot. So to wrap up with the power of feature flags, In a take in a 10 week timeframe, we could implement a substantial amount of changes to our product and roll out a product rebrand in stealth mode. Thank you.

**Brian Rinaldi:** Thanks, Kathleen. That was great. Obviously I was sitting, I, I didn't even know you all had this going on. I knew the rebrand was coming, but I had no idea that the, this was [00:18:00] sitting in production Yeah, it's, that's pretty. Yeah. Whoa. It was 10 weeks. That's pretty impressive timeline.

That's crazy.

**Kathleen McMahon:** Yeah. 10 weeks. You're like, whoa. Usually can we imagine? Like when you don't have feature flags, you're like, How are we gonna do this? How are we not gonna impact things? Pass out, , take a, hey, took your cats and run, come back, take a breath. And

**Brian Rinaldi:** especially something that large, I think the big thing is for me is you end up.

So you might, so you say, Okay, I'll create a branch and we'll go off on that branch and we'll do, we'll do the work there, but then that there's all this other work going on in the main branch, and then you've gotta merge those two branches and it becomes such a mess. . And you also you have trouble sometimes like getting who you want to be able to test in that particular branch.

Yeah. To be able to see what you want them to be able to see. Yeah. You didn't really go that too deep into it, but you could, Did you even, did we roll it out or did we just say flip it on one day? Or did we decide cuz you could roll it out, which is we flipped it on.

**Kathleen McMahon:** Yeah. We tested it with we [00:19:00] had.

In our so when we had that flag set up since we had that one flag where we could just control the targeting and everything else was just dependent on whether that flag was on and off, we didn't have to control the targeting in the other, like sub flags. For all the different users.

That was just like, if that flag's on turn, like this will show if it's on. But with that main rebrand flag, we could just tar target a subset of users. We could, log in and test, in, front and only mode or, things like that. And then we could invite different stakeholders as users to be able to view things.

**Brian Rinaldi:** So in, in this case, like they were, so everybody was, this is just to clarify for folks, this was for the. The backend once you're logged in experience. So you knew who the users were. You had the token that told us, that, told you who was logged in and whether they were allowed to see this.

**Kathleen McMahon:** It's more so when you're in the flag targeting , the flag targeting view, you can add whoever it has a user account. And the, in the project. And so we could target, individual [00:20:00] users or say our team was part of a group of users, like this team, these users are part of this other, group that we could say, just target this.

And as long as we logged in as ourselves we could see it.

**Brian Rinaldi:** Yeah. And almost, yeah. I'm curious how when, let's say, when you said, Okay, we flipped it. Do you then go back and say, Okay, we're gonna remove some of that, like the data attribute stuff? Or do you just say, Okay, that we're gonna go with that kind of way of theming it from here

**Kathleen McMahon:** on out.

We're gonna do we what we can do? What's great about this is, so we had the two themes we had, we had Osmo and Legacy and what's nice about that is we can go back later on. When we decide that we've shaken out what we needed to shake out, we can go back and remove the blocks of codes that we're either targeting legacy.

or remove the blocks that didn't have the data theme, like of Osmo and CSS and just, remove that data attribute and then everything would just be ready to go. So we were just removing the old code and keeping the new code. So fancy get statements. Yeah. [00:21:00]

**Brian Rinaldi:** Yeah, that makes sense.

And I guess you would just go back and say, remove the in the go template to, there's no harm in it being there, but it just ends up cluttering up your code base. So you probably just went back and cleared those out. And I think the nice, the way you all did this with only a handful of flags, makes it easy to just.

find those references in your code. Did you, or I suppose we, did you use the code refs feature to be able to figure out where it was referenced or just manually, like global

**Kathleen McMahon:** search? We could use a code refs if we wanted to. Yeah. Yeah. But it was, it's since we had Six Flags that wasn't 25 flags or, all these other things.

Yeah. It's like you're having this one, yeah. One, main thing that was just like, Oh, it was pretty amazing.

**Brian Rinaldi:** Yeah, and I thought like your, the usage of the JSON token for the coloring and stuff like that is very cool cuz I, one of the things I, I feel like is, even for me, I'm relatively new, so I, Using this stuff, and I, that's the part that fascinates me is like the yes, feature flags can be [00:22:00] like true false kind of things.

Just is it on, is it off? . But they can also be more complex things like, Oh, I can send a whole batch of Jsun data and do. Complex logic based, and even with the dependencies and different rules you can create, it's almost like a rules engine with that can actually serve up complex state.

I'm personally, I'm fascinated by the whole kind of idea of like, how can you, what are some of the things you can do beyond just like flip flag on, flip flag off kind of thing. What can I do with some of these? More advanced data types. And that's really, I hadn't really thought about oh, I could swap out whole color values.

And what's that done using were those values, those were in the css, right? Like you'd swap it out in the css? Or how did you

**Kathleen McMahon:** end up doing that? For the for those the j the the multi-variate flag for the the j o values , what us were put into a go file. So it was like basically those flag values were sent in right file.

And it's it's basically, there was one Jason object for [00:23:00] Osmo and one Jason object for legacy. And it's if it's this serve up one, if you know if it's, if it's a serve up the A values, if it's B, serve up the B values. And it was really nice cuz then you don't have to go back in the code and serve up you.

Adjust the j find it and whatever. You could just in the flag the variation, tweak a hex code right there. Say it when refresh and you see it right away, and then you could firm it up. Yeah. Once you like remove the flag, you could adjust where those values are when you're not testing things, then you could, go back into the code and say, Okay, we've landed on this pallet.

I used.

**Brian Rinaldi:** So you use that to just tweak the palette and then, and finalize and be able to see Oh, this is what looks like with it on, this is what it looks like. Put it off kind. , like different flag values. Okay. That's really cool. I hadn't really thought about like how you would actually do that change stuff in css.

I guess if everything's getting built at the, on the server level, do you use like Just straight css or is it like sas? CSS modules. [00:24:00] CSS modules. Oh, okay. Oh I don't know a lot about CSS modules, so I'm really curious.

**Kathleen McMahon:** It's like sas, like it's CSS modules and post css.

So it's Post css allows you to write things in a SAS like manner. And what's, what was nice about CSS modules is so in react. Technically you could render in jsx, you know something that, the syntax for jsx or tsx, cuz we do type script components. It looks if you're using semantic html, it looks exactly like html, but it really, it's like it isn't, but it looks like, it's if you render, a button, it's not like it renders a button.

It's like document create, like reacts, like react, create element button and pass the thing in. Looks like this is spaghetti, object of the hood. But for, a better way in more of a, reduce that cognitive load, you. TSX or jsx, looks like it looks like html. So if you are good at html, you're like, I know this stuff.

And I, I can zip around here. But when in standard pH you know, like html, css, JavaScript, you'd pass in a class name, a class into, into [00:25:00] an element and you pass in a class as a string. And In a component you could pass in a class as a string. Like you could do that and be loading up some common files, but you also load a your styles file, as an import, and then use it, it will load it like an object.

And then you can say styles, dots, Style stop button. And then you say class name equals style stop button. And then it looks for button, the button and just applies it. But then you can also use you can use it's that whole object property value thing where you can start like mapping things, using class names, like this class names package to start concatenating classes and all these other wonderful things that you can do.

And with these efficiencies that, for me, I am more of a fan of modules versus. That CSS and JS thing, which is really not, it's not for me, just for me. It's like I don't, it's not great for separation of concerns, maintainability, and I'm not gonna start talking about the hot topic. You know about that [00:26:00] one particular library that everyone swarms in and says, that's amazing.

It like, But is it

**Brian Rinaldi:** I think I know which library you're talking about. Yeah. But was, I was at a conference last week and that it came up in. And oh my God. It, it was, nobody was in the middle for the most part. If, at least if they cared about, like they knew I'm in the middle because I honest, I'll be honest, I can, I'm dangerous with CSS in that I know enough to like screw things up, but that's about as good as I get

, but yeah, everybody who worked on that, styling of apps was like, they either loved it and they're like, everybody should use it or the. Group was like, If we hate it, nobody should use it. And I think I I'm assuming the audience would know what libraries

**Kathleen McMahon:** is. Yeah. But it's, whenever you hear this topic, you always see that meme come up of like a bunch of, five, five individuals over at, Sports stadium, all leading or saying, I think you're talking about this.

[00:27:00] Yeah. all way lower their opinions. that means, so yeah, ,

**Brian Rinaldi:** It's, yeah. That's and I hear you. I think it's divisive topic. Yes,

**Kathleen McMahon:** for sure. But yeah, CSS is really cool. And what was nice about this is you could the fact that you could like leverage flags. You could leverage flag flags to leverage data attributes.

Cuz data attributes and hdml are they're amazing the way you can do things, right? You could do, data theme and then it listens for things and you can lev in css, you leverage an attribute. You don't have to add all these things. It's yeah, there's so much power already built into the system.

It's. Similar to any language, any programming languages, like once you learn the rules, you understand, it's oh, there's a thing like Cascade. There's a thing like specificity, and there's also things like dependency load order. So there's all these things. And the dreaded important ,

**Brian Rinaldi:** is that still re is that still something you need nowadays?

No. Okay. Thank God. My opinion.

**Kathleen McMahon:** But there, there are times you really have to go nuclear on [00:28:00] certain things when you're trying to override, maybe a library that has already done. Used important, and then you're like, you have no choice.

**Brian Rinaldi:** Yeah. Okay. Okay. Yeah that's true. But hopefully most of those libraries are not using important anymore.

I don't even, I don't know. I don't know. Yeah. Yeah. It used to be back when I had to write some css, which I largely don't anymore. But yeah, it was a thing, like you had to use it quite a lot. Because stuff was just broken.

**Kathleen McMahon:** You just had to like, Yeah. You're just trying to like, like wrangle, you had to wrangle things. Yeah. Which is frustrating.

**Brian Rinaldi:** Yeah. Yeah. Yeah. And things definitely have gotten better and I'll have to check out, like using CSS model I avoid the CSS and JS myself. As well. Yeah. I never was a fan of it. I was, felt, I get I like that you, it's specific to that particular component, which is nice. So you can style that, that component without worrying about Oh, is this gonna affect everything else across my site? But, [00:29:00] It's just messy and like you said, not good separation of concerns and I think you end up being, if I feel like the times I've done it, maybe it's, cuz I don't know what I'm doing.

I felt like I was more, I had a lot of repetitive pieces , because I'd put. The same thing in multiple files and then fixing it was a mess.

**Kathleen McMahon:** Yeah, and that's, that's another reason why you have like design systems and sometimes you have like design tokens and then you also have CSS variables and like CSS modules are scoped to that scope, to that component, right?

So there, you're still right there. You don't have the collisions cuz you have something that's scoped the component and yeah, there. There's

**Brian Rinaldi:** so much that's, Yeah, I'd love to have you come back and talk just about CSS modules. That'd be so cool. Cause I really think, it's, we haven't talked a lot about CSS stuff and it'd be great to hear more about that.
