---
_build:
  list: false
  render: never
---

**Julia Undeutsch:** [00:00:00] Hello everyone. My name is Julia and I'm a self-taught accessibility and front end developer. Living in Vienna in today's presentation. I want to talk to you about common myths and misconceptions about accessibility. First. I'll give a brief intro. Of what accessibility is and why should care about when creating a project?

Then I will go over of some of the most misleading concepts about accessibility and provide answers as how they are misleading and simply not true. By the end of my presentation. I hope you'll get a sense of how important accessibility is and how you can take my arguments as good reasons to convince your team and boss to include accessibility in the next web development process.

From the very beginning. Let's start with a short introduction of what accessibility [00:01:00] actually is. Web accessibility refers to a website, an app, a document, or other type of electronic communication. It means that all users, regardless of disability have equal access to information. The internet nowadays is an important part of our daily lives.

Whether for work, for leisure or even socializing, it is the ultimate source for most people to search for inform. Therefore it is more important than ever that all people have equal access to the content provided. Unfortunately, certain disabilities such as planters or promoter control can prevent people from easily accessing online content.

That's why it's important to design your website with assist for assistive technology, such as a screen. We are becoming more and more dependent on online interaction. So all people with different abilities should have the right to interact without barriers. So why should you care? Primarily, it's just [00:02:00] the right thing to do.

Web accessibility is designed to ensure digital accessibility for people with disabilities, but other people can also benefit from the tools and techniques of accessible design. Creating an accessible website can benefit people who are such generation limited, such as people who work abroad in a noisy environment and be heard before.

So they can't hear their sound properly or people who can't see the screen properly because fighting conditions. This can happen to any of us anytime.

Now I would like to share a few examples of accessibility, myths that are here over and over again. That should be an explanation. Why not to implement accessibility into a project? People are saying things like accessibility to hard or to expense if to implement that they are selling products that a person with some kind of disability wouldn't buy any way or that [00:03:00] people who are blind to not use computer.

They are saying that people that accessibility is something a developer needs to handle, or that it's optional for this kind of people who don't need to do it. And they don't want to sacrifice their lovely design. They're also thinking that implementing accessibility later in the project, or when they score 100% with the lighthouse that this is.

Or they're thinking that I have tested it last year and it was okay, so we don't need to test it again. Let's now take a closer look at some of these myths and clear them up. I have grouped them into five parts, but some of them could easily stand on their own.

The first myth I'm going to talk about is accessibility benefits. Only a small minority. I think this is one of the most underrated myths of. Maybe it's because many disabilities are invisible. It's not always obvious that someone has [00:04:00] a disability. For example, how would you know that someone is deaf or has a poor eyesight just by seeing a person sitting on a pack bench?

The truth is accessibility benefits, a wide range of people.

Worldwide, 1 billion people have some sort of disability. Sure it doesn't necessarily affect the person's ability to use the internet, but without accessibility, the lives of people with disabilities could be negatively impacted traumatic ways because you can't use the website or by the product you're trying to sell.

Most people believe that a impairment is the main disability affected by an inaccessible. The fact is that mobility problems or cognitive problems affect the higher percentage of the population and visual impairment. This means that website accessibility is essential [00:05:00] for people who cannot move their hands or arms on its switching devices, as well as for people who may have dyslexia, who needs ability to switch to a more legible font to easily read their online inform.

Some people believe that these people don't use the internet at all because of the disability. In reality, it's often the other way around people with, let's say the visual impairment often do not use a particular website because it's simply not accessible to them, especially. For people who are blind, who just a few years ago, had to rely on other people to get information from a newspaper.

The invention of the compute and the internet has changed their lives dramatically. This reminds me of how the social model defines disability. The social model is one of the models used to characterize disability. The definition says that disability is an avoidable condition, [00:06:00] cost, a poor design. What does this.

For example, think of an entrance to a building where there are only stairs is the wheelchair. The problem that a person who depends on it cannot enter the building, or is it the poor design of the building itself that has even begun to exclude people in wheelchairs by providing all the stairs?

Think about it. If the building has been built at ground level, there would be no problem. The problem was created by the humans themselves, when they design something that would suddenly exclude a certain kind of.

Accessibility also impacts elderly users such as those who experience wish loss and need higher contrast or a larger font. Those who have difficulty hearing or those who struggle with motor function, we live in a society where there are more elderly people than ever before. And the trend is upwards.

And side of the fact that we are all, hopefully getting [00:07:00] older, we can get a disability at any time. Wouldn't be a huge impact on your life. If you use a certain app every day for years, and then suddenly you couldn't use it anymore because you had an accident and the app wasn't assign, so that the person that kind of disability you have could also use.

The next myth I'm going to talk about is automated testing is enough. I often see developers talking about how they have reached 100% with the automatic accessibility extension called lighthouse, and therefore believe that the website is now fully accessible. And I must submit just a year ago. I was one of.

I hate to bring it to you. But the truth is that automated tests will only give you an idea of the things you might be doing wrong. A good result. There's no guarantee that the website will be accessible. [00:08:00] Even the best automated tests can only uncover about 30% of accessibility issues. These techniques do their best, but technologies or these technologies do their best, but they will miss accessibility violations and give false.

When thinking of a missing old attribute, an TTA provides alternative text for images, users with visual impairment can listen to via screen reader. Yes. The tool can detect that the outtake is missing, but it could not create one of its own. As AI is not mature enough to interpret images, it would be super cool, but we are not there yet.

Automated testing tools are a good. But the best value is in combination with human testing. After all your website is used for people. So real people do the best job of orderly testing and fixing accessibility issues. You have to do gross browser testing and different combinations of browsers and screen readers because each screen reader behaves [00:09:00] differently depending on the browser.

And keep in mind that even if all components and witches pass accessibility testing on their. This doesn't necessarily mean that they're fully accessible when combined on a webpage, therefore additional testing must be provided when a page is created. In addition, you must ensure logical reading order, heading hierarchy for sections and content and comprehensibility, all things and automated testing tool is not fully capable of.

Now,

as we've seen in the bsmith. Some believe that running an automated testing tool at the end of the project is all it needs to be done regarding accessibility, but instead accessibility should be a part of the whole development process from beginning to end from planning and designing to coding and testing until the project is ready to be released to the world.[00:10:00]

Let me give you a quick overview of how a web development process should look. When designing a product accessibility must be considered from the very beginning. So when doing a research, make sure that people with disabilities will also use a product when it comes to setting requirements, define it only marketing and sales goals, but also accessibility goals such as accessibility standards and best practice.

Most of the implementation of accessibility into the process can be done in the design of the information, architecture and user experience. Be aware of what to think about when designing a product of accessibility in mind. When there are clear instructions from the planning phase, it's much easier for web developers to create these components and make them accessible.

They no longer have to think about how to design a component, what color I font to use and can start coding. When it comes to testing, it is important that the QA test knows how [00:11:00] to test for accessibility. And when the requirements are met, every time you remove at a mofi on your website, you should be making accessibility a part of this by asking yourself the feature are removed.

Does this not destroyed? Heading lot of a screen reader users or the new finger added? Can it be used with only a keyboard? Because this leads to another misconception quite well. If your website was already fully accessible, that doesn't mean it remains accessible. Forever. Websites are constantly being updated, having new content added.

And unless these changes are tested in some way, there's no guarantee that they remain as such also technology changes over time. Web browsers, get new features, screen readers, change the way the content is. Sometimes these changes affect how people perceive a website. For example, recent changes to many operating systems that introduce dark and high contrast mode have [00:12:00] changed the way many websites look to some people we can't rely on results of a test to hold through over time.

But if it's part of our process, then we can save with confidence that our product is consistently accessible. As a team, you must permanently integrate accessibility into the web development process. And this seems far away from a short time thing. For me, if you only introduce accessibility as a final step, it can be very difficult to implement often leading to pool design, or even not implementing it at all.

It could also make the process longer and more expensive, which we will talk about a next misconception.

Companies are often concerned about how much extra time and cost accessibility takes. And after talking about the entire development process in the previous Smith, I understand why it seems like accessibility is [00:13:00] difficult and expensive, but it all comes down to how accessibility is handled in the process.

If accessibility is implemented properly from the beginning, as previously mentioned the overall development process increases by 5% at most, which I think is perfectly accessible, acceptable. While if accessibility is added at the end of the development process, or much later the time and cost could double or triple, adding accessibility when the project is already complet.

Good luck also see accessibility as a cost of its benefits. A very important point that many people don't think about is that people with disabilities can spend money too financially. You want your product and services to be accessible to all in order to be purchased by as many people as possible.

According to the proper business. Businesses are losing out of a potential of 2 billion pounds [00:14:00] because the website is not accessible for people with disabilities, which prevents these people of purchasing the product sold on the website. And that figure doesn't even take into consideration of those people who have a temporary disability, like a broken wrist.

If people with disabilities can access a website and if they like what you offer, of course, they're likely to buy. But if you can't access your website, it doesn't matter much if they like what you offer, because you can't go through their buying process. So accessibility benefits your bottom line, protecting human rights of people with disabilities by providing equal access to information.

Makes good business sense socially, you have the choice between positioning yourself as a company that does not meet accessibility. Expect. Or supporting equal opportunity through digital accessibility. It allow also allows you to [00:15:00] stand out from your competitors. Technically, the code and information are cleaner when websites are developed with accessibility in mind, fully accessible websites are easier for search engines to index and catalog two, making the website easy for everyone to.

Your website will automatically would be compatible with a wide range of devices because accessible designs requires you to qualitatively test the robustness of your website on many platforms, browsers, and devices. With variety of input methods.

Accessibility is also a legal issue. Creating accessible website. Helps project against potential legal problems and is sometimes mandatory when it comes to the public section in the United States, the Americans with disability act says that website, accessibility lawsuits have increased since 2018, particularly are New York, Florida, California.

As you can see in the [00:16:00] graph, the law may be different depending on the country in which the company is. But also these laws can change in the future and address other sections as well. In addition, people with disabilities have rights and could Sue your company. If the website is not accessible, this means bad press and huge costs that are completely affordable.

If you create an accessible website from the very beginning, In my opinion, developing accessibility from the beginning is reasonable compared to the cost of the alternatives, such as implementing accessibility as the last step negative publicity or last years.

The last myth I'm going to talk about is accessibility is ugly. This myth is my all time favorite because it's so not true in any. Accessible design does not mean the design is ugly. It means, [00:17:00] accessible websites can be ugly and there are a lot of ugly accessible websites out there, but it's not accessibility that makes them ugly.

And there are a lot of ugly inaccessible websites too. If the UI is ugly, you may want to look for another designer. And in the end, whether something is ugly, depends on the have to beholder. Most designers don't know about accessibility or have misconceptions about it. Like thinking it'll limit their creativity.

It is so often from designers. If I make my website accessible, they will look ugly and they won't be appealing to people who don't need accessibility. No many websites and are ugly, but that's because they're poorly designed. Accessibility has absolutely nothing to do with how appealing of episode or app is.

But accessibility breaks my design, no accessibility doesn't break the design. It just means that you have to make a few adjustments. [00:18:00] For example, you may not be able to use the fonts or color of your first choice, but there are many examples of beautifully designed, accessible websites while it's true, that things like good color contrast and larger font size affected design, that doesn't necessarily mean it's.

If a design relies on low contrast or very small functional elements, the design itself is most is more likely to be poor and cause problems for everyone regardless of ability. But when designing for accessibility, I have to design with dark color. No one aspect of accessibility is to ensure sufficient color contrast between foreground and background colors for text and many other important elements.

But that doesn't mean you have to use dark colors. If you're only, if you were to use only dark colors, you would not be able to combine them. You can use a lighter color against a darker one and vice versa. [00:19:00] As long as you check that the contrast requirements for the essential elements are met. Sometimes just adjusting the color a little bit lightning or ding.

One of the elements is enough to make them. But accessibility is boring. No accessibility doesn't mean you have to design a boring layout because just because content like videos and complex graphics and interactive elements necessarily require accessibility consideration. Some people believe that an accessible web presence means sacrificing fun, engaging content in favor of text only design.

If you've been told this, you should know that it's not true. There's nothing stopping you from being creative. Most people don't even notice good design or accessibility, but they definitely will notice poor design and functionality. Since I started programming, I perceive websites and applications very differently.

Very often look at the [00:20:00] code to see if a button is a real button and the link is a real. And I notice immediately, if the color contrast is not high enough and wonder how hard can it be to make the color trust a tiny bit darker so that the contrast is high enough for everyone.

Most accessibility features are invisible anyway, and usually only accessible to screen readers. And please keep in mind that accessible design doesn't just make life easier for people with disabilities. In many cases, it makes things possible. Meaning that accessibility is not just a nice to have it's necessary.

Let's recap and summarize all the points that can be used as arguments for accessibility and which dispel all the myths mentioned.

Taking accessibility into account already in the design process, makes it a lot easier [00:21:00] and results in a better design than retrofitting as a last step. It won't take much more time and cost if you make it part of our process compared to consequences, like doing it at the end or getting an expensive, fine

web accessibility is smart business. It prevents you from for future lawsuits. It helps you get more potential customers. Accessibility improves public perception through an accessible website or web application because it shows that you and your company care. This can also serve as a leverage against your competitors who are not committed to do these values.

And in the end accessibility benefits. Accessible design. Doesn't just make life easy for people with disabilities. As already said, it makes things possible with accessible design people with skills or limited to can perceive information completely on their own without having to [00:22:00] rely on the help of others.

Let end my presentation by sharing a personal experience. My parents-in-law are both. Unimaginably many years ago to rely on newspapers or other people to perceive news. Since news and television didn't have close caption yet. And when we watch a movie together, it's always fascinating to, to read the close caption and audio description things.

I perceived very differently. It shows me every time how important these are, so that we all perceive the same information. What is shown even if it is with different senses. Accessibility will never disappear. As long as there are people on this planet, there will always be a need for accessible design.

Use these reasons as good arguments to convince your team and boss to design the next website in an accessible way. Thank you.[00:23:00]

**Mónica Fidalgo:** Thank you so much, Julia, for your presentation and thanks for for sharing your personal experience regarding this this subject. So now we are having questions, time for questions. We already have one in a queue, so I'm going to just look

**Julia Undeutsch:** at our sheets.

**Mónica Fidalgo:** Okay. First one. Why do you think AccessAbility is so underrated?

It sounds like something that should be taken seriously.

**Julia Undeutsch:** Yeah. Because of all the myths I was talking about in the presentation, people have trust, misconceptions about it and don't, I think maybe it's because some people do not have, are surrounded by people with disabilities, so they don't know the effect.

These people. So this could also be a huge problem since I am surrounded with people who rely [00:24:00] on things like this. It's important for me and yeah. Hope I can spread the word to it important for other people too.

**Mónica Fidalgo:** Yes. That totally totally makes sense. I also have someone with disability in my family and. Simple things like just being able to wash their hands is difficult for them because the high everything is made for people higher and not smaller. So yeah. It's yeah. It's something that we need to take care of that.

Another question from Tiffany. So what are some step? Some. We can take to actively include AccessAbility in mind as we are designing, building a

**Julia Undeutsch:** project. I think especially in the planning and or especially in the designing phase, it's important to already choose font and colors who, which are accessible.

These things should be [00:25:00] decided already in the planning. So that a developer don't have to handle it anymore.

**Mónica Fidalgo:** And by the way, do you have any tools that you use in your daily basis that you can share with us?

**Julia Undeutsch:** I mostly use the tools Josephine already mentioned in her talk. Yeah, the ex step tools and Oli wave.

These kind of tools and the, of course the tap key is very important to go through the website only with your key. Yeah.

**Mónica Fidalgo:** Okay. Thanks so much. Anyone else as more questions? Let me just check. Okay. I have one from myself. but I think I, you already answered that. What solutions can we come up with to raise awareness of people, to start paying more attention to AccessAbility?

Do you think, for example in a context of building a product, having someone with a [00:26:00] real dis disability, working together in a team maybe

**Julia Undeutsch:** helps this will definitely help. I'm not sure if companies are aware of to employ it. People with disabilities, this would also be a great.

**Mónica Fidalgo:** Yeah I was thinking because we have a tester in our company and he has some color blinders.

So it started to it doesn't see the same colors as we , it's something so simple, but we need to take care of that. And we were we, sometimes we are so focused on just building the new feature that we are not aware of. That's. Just a small switch that we can do and improve someone's else. Life regarding this.

Yeah.

Okay. Questions anymore questions. I see so many people in the crowd and, okay. Another question. Thank you so much. Do you [00:27:00] think that AccessAbility should be

**Julia Undeutsch:** advocated? Yes, totally.

**Mónica Fidalgo:** Almost has as we have developer advocates for for a product to also have developer advocates for AccessAbility, for example.

**Julia Undeutsch:** Yep. I think there it's coming. There more people who also Dils or yeah, advocates who have for accessibility. You also,

**Mónica Fidalgo:** already do some part of that job, by by sharing things on your Twitter. I see content related with

**Julia Undeutsch:** that. That is very, yeah, I'm trying post and writing as much as I can about accessibility.

**Mónica Fidalgo:** That's really cool. I'm going to look for your E note in order to share here with the

**Julia Undeutsch:** audience.
