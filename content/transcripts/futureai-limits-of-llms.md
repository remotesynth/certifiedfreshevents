---
_build:
  list: false
  render: never
---

**Jonathan Pedoeem**  0:07  
Okay, perfect. And you got my name. Last name correct. people pronounce it both ways. So good work. Yeah. So today, I wouldn't be talking about searching for the limits of LLM-based systems, it's going to be kind of an exploration. And we go a little bit into theory, hopefully, it won't be too crazy. And hopefully, we'll get like a good mental model of at least how I approach this. Right? So what why is this important, right? We as practitioners and decision makers, it's important for us to have like a semi decent mental model of what we're working with, right? Even if we're not like necessarily having a PhD in this stuff, we should understand what the technology is, in order to make better decisions, whether or not like it makes sense for our business for our customers for our bottom line, right. So together, I want to first take a look at a little bit of the theory will go very, very quickly, very high level, and go into a few things that might not come to mind when you think about LLMs, but I think is relevant. And then we'll talk a little bit more practically where we could see high use cases of villains and where we think it won't work as well. So what is an elephant? Before we even go into that we should talk about what what is the whole notion? What are we trying to accomplish? Right? What are deep learning engineers or ml engineers trying to do when they're training these models? Essentially, we have this toolbox called mathematics, right? This toolbox has existed for a long time. And we came up with a lot of ways to talk about relationships in mathematics, lot of vector spaces and distances and similarity metrics. We have all these tools, and we want to apply it to a system that we use as humans, which is communication speaking, right? I speak with you and you speak with me, we understand what that means. But as in the computer age, how do we take that understanding that we have of human communication and language? And how do we put that into a way that can be computed by our computer, right? Computers, thinking numbers? So how can we take that and put it into a computer. And this has been, you know, an open conversation in machine learning for very long time large language model is a new approach to it, we've had bag of words, different types of ml models like word Tyvek. And Bert, there's been a lot of ways to talk about it. Lm has just been the most recent and obviously the most successful.

**Jonathan Pedoeem**  2:26  
So what is an LLM? Right? And again, as we said, we're trying to take something and make it mathematical. Right. So what an LLM does is this is a, you know, might look scary. But basically, what this means is a probability distribution over language, right? We are training a model to learn a probability distribution over language, what that means is basically, given this sentence, given this word, given this paragraph, what like, how probable is this paragraph? Does this make sense? Right? And even further, what would be the most probable next word in that sentence? Right? So basically, that's a way to take this task of like, how can computers understand language, and we're trying to make it into something mathematical. So that's what we do for an LM, we were trying to train a probability distribution. Now, what made this wave of NLP specifically with the LLM super successful is this attention mechanism. So you may have heard of attention, you know, it's what also basically all these LLMs are based off of, it gets pretty I mean, we have this nice graphic here, not super relevant, but it just allows you to, this has been super successful way to learn the probability distribution that we said before, right? So like, empirically, in theory, we've always wanted to learn probability distribution, we just haven't had the tools to do it, right? Because it's very difficult. There's like, upon probabilities and stuff like that to calculate. So this attention mechanism, made it possible made it easy for a computer to learn at least an estimation of this probability distribution.

**Jonathan Pedoeem**  3:59  
Now, the next Okay, yeah, the slide basically probably just read our language, like what's gonna come next, right? How probable is this, you know, piece of text or whatever, right? That's basically what an LLM is. Now, we're gonna get into a little bit of like, a little bit more theory, but what I find pretty interesting. So what what are the limitations of algorithmic learning? Right? So one, we have two pictures here we have Kirk Odell. He's from the early 20th century, we have Roger Penrose, who I believe is still alive, right? He just won the Nobel Prize. And kirkko Ville, one of his contributions to the field of mathematics was something called Go Dells Incompleteness Theorem. And basically, it was a crazy realization, where he proved that there are statements in mathematics that mathematics itself cannot prove. So what he showed is that there's an inherent limitation to any system of mathematics, right? So what that means is like we come in and we're like, mathematics is ultimate, it could do everything in this world. And he's like, No, Oh, it can't. And he proved by coming up with a statement that there's no way to answer within mathematics. Roger Penrose most recently wrote two books. I mean, he's a physicist, but he's also very into consciousness. And he wrote two books. One of them is called The Emperor's New Mind. The other one is shadows of the mind, where he basically argued that the biological processes that go in place in our brains for consciousness and the way we think, are non algorithmic, and he tries to prove using girdles and completeness theorem that any algorithm that can be written cannot imitate consciousness. So what basically what am I bringing this here is, for example, according to Roger Penrose, the crypto Bell's theorem is proven that's no like, no mathematician goes against Roger Penrose is application of crypto Bell's theorem is not proven, right? It's just his book. And he puts a very strong argument, in my opinion, but at least this goes to show you that there are limitations for any deep learning algorithm, at least according to Penrose, right? There are a lot of people would disagree with them, you can look it up. But that's at least just just to frame us, we cannot promise the world in deep learning machine learning very important for you to understand that even the science understands that right? That you cannot promise the world. Now, another limitation thing I want to talk about is, you know, there's always people that come to us and promptly and they're like, Oh, you guys are in prompt engineering? What's going to happen when they get rid of the prompt engineer? Right? Oh, they're just gonna, you know, the models gonna know exactly what you want. So I'm not entirely sure what that claim means, right. But basically, what Claude Shannon came, he had this contribution into entropy, about information theory, he said, there's a limitation and a communication channel with amount of information you could represent. In other words, he said, If I am talking to you, and I wants to basically tell you something like, you know, please get me a cup of water or something like that, there is a limitation with how efficient I can get with how to communicate that with you. But I cannot go beyond that. In other words, the reason why I'm bringing that here, and let's go into this last page here on theory is that at the end of the day, there are limitations of communication. 

**Jonathan Pedoeem**  7:08  
So the model and for example, in prompt engineering, an LLM space, there are certain things that you will have to tell it, it cannot guess or learn or create information that doesn't exist, like how does it know if you're trying to get a flight to Kansas, that you want to go through New York if you didn't tell it? Right? Like, these types of limitations are inherent, these are, these are black and white pictures inherent in this system of statistics and mathematics and probability, which a lot of people especially the people on Twitter, forget, right, we we are limited by our capabilities. And a lot of these limitations have been proving. Okay, so that's a little bit of theory. Now, let's go back to  LLMs. What does this mean? Right, so both the limitations part, and also the probably probabilistic model over language? Right? So I think if we go back to the first thing, I was talking about the probabilistic model over language, right? Well, we could talk about it's like, what is it most definitely good at? Right? Most definitely. If it's a probability over language as an it's tough to predict the next word, right? What can it be good at? Right? So very simple, highly textual based tasks. This is what it was basically trained to do. Summary, question answering, recall, right? structured input output, think of coding, like, for example, code is a perfect example. Because like, if it's a probabilistic model over language, including programming languages, which are highly structured languages, it knows that if there's a opening squiggly bracket, high probability within the next few lines, there's going to be a closing squiggly bracket, it knows that because that's a very simple probabilistic problem, right? So this is going to be very good at that type of task. So basically, these are the things on the left are like, auto complete type tasks. Very, very good at that. That's exactly what it was trained at. question answering and recall, also pretty good app. Because if you think about it, like when you have, like bodies of text and stuff like that people, especially over the internet, tend to summarize tend to do those types of things. So it can learn that easily.

**Jonathan Pedoeem**  9:09  
Things that it will most definitely have difficulty doing is math. Right? Like, yeah, especially when tragically came out a lot. People are doing math problems. Okay, do this. And it could do that. Right. But the thing is, is like it's a probability distribution, it's not trained to do math, right. So even if you could answer some of those mathematical questions, it's trained to talk about what's next in the thing not to do math, right? That's like a completely different mechanism, right? That, by the way, is like solve for computers to do math. So for example, on that topic, ranking, sorting, long term memory has nothing to do the mathematics itself. It's just a limitation of, of like, you know, silicon, and there are ways to go around doing that and stuff like that, but we're going to be limited by the amount of like, context window based on like, how many bytes a word takes and stuff like that, like, that is a math math. nickel discussion as well. But you could talk about high precision casks in general, right? Like where you're asking it to, to basically do like something like math or that type, which is like symbolic in nature. Like, that's not really what it was trained to do. Can it do it? So it's going to this this next slide here? Can I do these that I put into the right call? Yeah, probably probably could do some of it. Because it's, it's probably situation over language, that's probably seen it in some of its training data, some of these mathematical things and just learn that statistical representation. But in terms of like, really understanding it, or taking stuff that are out of distribution, when we talk about attribution is like things that never saw in its training data, probably will not succeed it so well, right. And also, it would be kind of futile for you to give it a bunch of training data to teach it to do math, right? Like, that's just a misuse of technology here. Like why are you trying to get an elephant to use math?

**Jonathan Pedoeem**  10:51  
Now, that's like the limitations of LLMs. And that type of stuff, based on just a casual conversation with with at least what I see. And we see a PromptLayer. And what we think based on the theory, right? Now, in practice, there are multiple forgot to add, just like the standard approach, or multiple different ways to use an LLM one is the standard approach, which is just you ask all the questions to the LLM. And that's it, and you get your response. And that can work with certain highly textual like summarization, those types of things, you know, you know, just few shot learning or things like that. Then we go on to this hybrid approach, which you could think of ChatGPT plugins, you could think of, like functions. I don't know how many of you guys have heard about the open AI functions, which allow you to use ask the LLM to use a tool in its toolbox. What this is doing is using the skills of LLM as a brain to be able to complete sentences, right, which is like for example, question answering that we spoke about is it has to LLMs are good at right. So you could ask the LLM? What tool should I use? Should I use a calculator or a banana? To calculate, you know, mathematical question? LLM is very good at telling you to use a calculator, right? It's not very good at doing the actual calculation. It's just a hybrid approach, where you use the LLM as the brain, right? And you have a toolbox. Right? So this is a way of leveraging all the technologies that we have, right? 

**Jonathan Pedoeem**  12:17  
Another type of approach is it you know, copilot approach, right? There isn't enough, I mean, it's really cheap, but soon enough, these items will be even cheaper. And then like, you could just ask it to do like 10 or 15 iterations of a question. And then let a human just pick whichever one's better. And this could have like, kind of allow the humans to be like, you know, 2x 3x 10x more efficient at their job, which could, you know, obviously, change the bottom line of a company. 

**Jonathan Pedoeem**  12:43  
So now, let's talk about use cases, we're going to start with, like internal use cases. For example, this was like a big tweet that got a lot of action last week, or that another week ago, where exactly as we're talking about these Co Op, co pilot use cases are small stakes, low stakes, right, you do it internally, it's a co pilot. So it's not an external to customers. It's not making business decisions, you're just opening this up for all of your employees to use, right. And like, you know, can write you emails, it can help you, you know, do like social media posts and stuff like that. So now or like help you do PR reviews and code and things like that. So like we're seeing ready, two founders, this is a Patrick Collison of stripe, and Mike Noop has his last name. But from Zapier, and they're both talking about how internally, this is 1/3 of people is 50% of people at their company are using LLM for internal use cases. I don't know how much use they're getting, it's like they're replacing their work. But definitely enough that like it's called at a company of these two sizes, it's causing a lot more efficiencies, which at that scale is amazing. Not imagine the amount of money and time they're saving using LLMs. And this is extremely low stakes. Right? You know, they basically from what I understand these companies like have like a chat GPT with a bunch of save prompts. And that the community at this company, they could just share it like the salespeople could be like, Oh, this is a great product. And like these people can be like, oh, there's a great product, and they just share it amongst each other very, very low stakes. Use Case and already has been proven, right? We're talking about the hype of AI and this and that proven that it has been beneficial for these companies. Right. Now we have more external facing ones. And this loom is my favorite example of an extremely, extremely low stakes, but it's not co pilot, it's external facing and it's live in a hybrid use of elements. So if you upload a video on Loom, they've had like a transcribe feature for a while. Now they have a way to basically using an LLM take that transcribed thing transcribed script of your transcribe script of your video and make a title from it. 

**Jonathan Pedoeem**  14:53  
So here you know I don't know if you guys can see my mouse but this like understanding GET requests and pagination is something I sent to some engineer right And this thing very low stakes but doesn't really matter, right? It doesn't really matter if it gets it wrong. First of all, as we were talking about the LLM is trained on summarization. And that was a toss up this really well. So this is basically a summarization tasks, if it you know, was slightly off, who really cares, low stakes again, low stakes, easy, simple, amazing, right? Let's go to another one. So speak is actually a customer Pronk layer. This is not as much low stakes, basically, they have a chat app that you can learn how to speak new languages. And it's powered by LLMs. But again, it's a use case where an LLM is pretty good at right like generating texts, continuing conversations and stuff like that. And they so this is not low stakes, right? It is customer facing, not a co pilot. But they have been able to leverage something and no one was good at right text generation and build a beautiful product out of that. Another company here this is app Sumo, another customer prompt player. They have this ask sumo functionality, which is like a an alternative search on their website. It's like almost a chatbot, where you could ask it like, so absolutely. By the way, because I know it's like an e commerce website, or website to find SAS products, right? So you could go in and say like, Hey, I'm looking for software to you know, help me edit photos on an iPhone, right? And they created an app sumo service. And this is sort of a hybrid is a hybrid approach because they use a ranking system. But they basically take the question into the LLM, figure out a way to then query their set of products. And then they come out and give you suggestions. So this one is not so low stakes, right? And this, this is a little bit more difficult to do it than the other ones right to do it. Right. But it's not so low stakes. And you know, if you have a mistaken answer, it's a little bit more difficult. That's, that's why I'm saying like, give it a project. It's not relevant. Customer Experience is kind of annoying, right? Like, why would you recommend me an Android app? I said iPhone, right. But so there's a little bit more subtlety involved in here. But they they're basically using an LLM in order to query that.

**Jonathan Pedoeem**  17:10  
Another example we'll go to, is Notion again, very obvious, extremely obvious. And I guess there's some reasons, we're seeing a lot of obvious use cases being the most successful ones. And that which makes sense, right, we're gonna see the obvious ones, because they're obvious. And we needed the time, for the more complicated ones in aboat Notion AI, if any of you have used it has like a bunch of functionality with generating tax rewriting texts, you know, changing the tone, summarizing texts, all these things, as we said, very, very, first of all, it's kind of Copilot, right? Because the person could accept or reject the responses. And second of all, it's, it's something that an LLM in theory is very good at. Right. So they're just leveraging that quite simple, and quite good use case. Okay, so now, going to conclude now looking into the future, what's going to happen? I don't know, to be honest. I mean, I think one thing that we've seen in and I've tried to show in this presentation is first, there are some limitations. And I think it's important to be honest about that, right, that there are limitations, especially as people who are going to be advocating for these products and tools to be used in the long term. If you come in and promise that it's going to solve everything. It's it's just a waste of time. It's just a hype cycle. That's not good, because it's not going to last right? 

**Jonathan Pedoeem**  18:25  
So the hype has slowed down a bit, definitely. But we've also seen with the examples of of that we just demonstrated, we went through a bunch of examples, both internal and external use cases, that there has been proven business value, right, companies are saving money or making more money using ellipse. So elements are here to stay, obviously, in our opinion, right, and they're here to stay, and in a business impactful way. Absolutely. How is it going to say I think a lot of hybrid approaches is very good. I mean, open AI is also doubling down on that with their open AI functions that they allowed copilot very easy, most obvious way to go about doing things as co pilot will see in the future where you have these autonomous agents, whether or not that will take place where they like make decisions and no copilot involved. That could possibly happen. That's a little bit more higher risk. Right. We'll see if that if that works. I think there are a lot of use cases where that will work really well on a lot of use cases will probably have a human in the loop for the foreseeable future. Okay, so now I'm going to conclude basically talk a little bit about pump layer, just a little shameless plug. We are an LLM observability platform that's focused on allowing teams to collaborate with ellowyne products in production. So we have a system that lives alongside whatever API you use, and also a front end for like a PM or other technical and non technical members of your platform to come in and help you iterate with prompts. We have a product registry is a visual way to iterate pause push into production without having to To be a software engineering, which is part of our thesis is that this is going to be a collaborative experience in the future. We also have evaluations and analytics and ways to iterate and, and validate that the changes you're making in your products are going to be not going to cause any customer harm once you push them into production. Okay, and then last slide here is, you know, check us out, check us out our website, sign up. We have like a generous free tier free tier. Follow us on Twitter and LinkedIn, if you have any questions, it's my email. Also, we're hiring a founding engineer here in New York City, if any, you guys are connected with anybody, software engineering, that would like to work at a startup doing cool things, definitely send them our way. And that's it for me.

**Erin Mikail Staples**  20:48  
All right, first off, Jonathan, thank you so much. And I as a fellow geek, like in the group, I feel like I'm safe to say everybody's a little bit of a geeky nerd here. We're all spending our money at an AI conference all out myself. I'm a geek. I'm I love like the mathematical and theoretical introduction to the your talk. I think that provides a lot of beautiful context behind that the whole world of MLMs. And where we're going here and love to hear your hiring. And if you haven't taken a stop, like stab at an early stage startup, I definitely do recommend I think I made some huge growth when I was not phrase but we've got a lot of, we've got time here for questions, if anybody has any questions. I'm seeing a lot of great job, Jonathan. So a lot of it um, Matt Dupree does have a question. Which book by Primrose? Would you recommend?

**Jonathan Pedoeem**  21:36  
Shadows of the mind? That shadows? Yeah, the emperor is things called The Emperor's New Mind. That one is older, she doesn't mind basically copies the same arguments and just expands a little bit more. And he has like extra things. But he goes really deep into the physics. So you could skip that part, unless you're really interested. But beginning is where he makes his majority was already.

**Erin Mikail Staples**  21:58  
Yeah. And like, I'm personally I'm like, also getting book recommendations from all of this. So I'm super great. Um, yeah, if there's any questions, feel free to drop them in the chat. I'll be here looking for all of the questions. But I love kind of one of the things that I really touched on was how you talked about how these different MLMs can be placed within other applications, and other workshops. So we went over very briefly, Rozelle out of the loop AI feature, we saw the notion AI feature within your talk today, is there further AI implementations that you're seeing that you're really interested in or curious to play around with?

**Jonathan Pedoeem**  22:37  
Yeah, I think like, for example, we focus heavily on our on our customer use cases, right? Like we try to target customers that are doing like very interesting things and try to develop for them. So like speak, for example, a customer that we're extremely excited about right there, like using it heavily to come up with like customized content for people, we're trying to learn languages. So that is very good. And it's very exciting to see, I think, a lot of the like low hanging fruit, easy ones, like for example, superhuman just released superhuman AI about a month ago, also useful, extremely exciting to see what I'm excited more is like, for example, it's just like recently booking a flight, or like looking for like hotel recommendations and stuff like that. I know, there is plugins for like, expedient, and those that are, I don't remember which one on ChatGPT. But like, those types of like, older websites, adding like more conversational LLM approach way of like, you know, hey, find me a ticket from this location to that location, or help me summarize that are giving me a report of like, where I should visit those like, it's going to happen. And I'm sure there's a ton of like side projects and small startups that are doing that. But I'm excited to see once Expedia or like those bigger companies produce that because I have all that data and stuff like that.

**Erin Mikail Staples**  23:52  
Personally, I know I'm about to book my fall conference trouble. And that's already something that's on my mind is like, Oh, crap, I'm really not ready to do that. Because I feel like there's always the the 10 different apps out there that you can all choose. Because, you know, and Brian, just toss this in the chat. Using AI for travel planning be a huge help, because it is a mess. Yeah, total mess. I think I paid more. I always tell people, the biggest shocker I had was I paid more to fly from New York to San or to Salt Lake City for PyCon this year than I did paying to go from New York to Berlin. And that was a direct flight to Berlin. So I was like, brain mile like, wild there. But thank you so much for your time. It looks like Oh, I think as I say that we've got one more question keeps popping up in the chat. Um, I had one question coming up from Jimmy rightly. It seems like full AGI is actually unattainable based on the introduction in this talk. Is that your perspective as well?

**Jonathan Pedoeem**  24:52  
That is my perspective. That's my opinion. And Roger Penrose, like argues very heavily about that. However, A lot of like the open AI like, like, I'm just a small random, like, you know what I mean? Like, you know Sam Walton and those people the world and Elon Musk's of the world, they believe in AGI very heavily. But I haven't seen a good response to like Penrose is argument. There's also another thing like even people who do believe in AGI for example, Yan Laocoon. And those types of people, they make the argument that the LLM is not it. So like, even if they do believe in this artificial general intelligence, there are those people who don't believe that LLM is the framework to bring us to that AGI.

**Erin Mikail Staples**  25:36  
Oh, I'd have to like agree that like, I don't know, if it's having worked in it myself, I don't know that an LLM would be the work prefers framework to kind of make that happen. If it is, I mean, I kind of leave on this ism side of things. I mean, in my brain, it's like, this is a giant math equation.

**Jonathan Pedoeem**  25:51  
Yeah, in my personal opinion, and I don't know, excuse to be wrong, is like less as we're not philosophers here, right? I mean, we could talk about philosophy over beer or something like that. We're business practitioners trying to provide value to our customers. Right? So let's just focus on that. Right? Like, what why is AGI kind of irrelevant? It's, it's not really like it's just fun conversation to have over Twitter. But for like a company like, you know, loom not relevant if AGI is tough boss was like, What can we use this tool for? And I think that's what we should be focusing on, you know, in a conference like this one, right, as opposed to conversation about AGI.

**Erin Mikail Staples**  26:30  
Are you saying that we should be focusing on practical application of these tools and not the science fiction options? I'm

**Jonathan Pedoeem**  26:39  
talking about science.

**Erin Mikail Staples**  26:42  
Might have another conversation. There are comedy later today. One last question here. I'm Matt, and I've got my own take on this question. But I'm curious to hear your as Jonathan, what is the most interesting use case that you've seen for MLMs

**Jonathan Pedoeem**  26:57  
most interesting use case I've seen for LMS, you know, honestly, all the ones I spoke about are pretty, pretty vanilla. To be honest, but I have seen some people try to like, you know, go through a bunch of like documentation or like, you know, whatever, to come up with arbitrage opportunities, that's pretty interesting. Or, like, basically use it a way to, like, come up with, like, 1000s of, you know, different. You know, like logos or something like that, right? Where it's like, basically, using the idea that it could come up with, like, concepts and ideas, most of our probably garbage, but scaling that out to huge scale. Right? And like seeing that, right. So like, for example, starting a company that like trying to do like pharmaceutical research. But again, as I said, in my in my talk, like, that's all something that LM is trained on, what because I was probably misuse your language, you can pick up a bunch of bogus ideas, and some of them could be good, right? So you as a human who had this knowledge could just like read through them and like use it as a way to like, surpass your writer's block. Right, which I think is kind of interesting, like a fun little, you know, way to go about doing that as a tool.

**Erin Mikail Staples**  28:15  
Yeah, no, I think that's a really great approach. I one of my favorite talks at PyCon. This last year was using and they fine tune the stable diffusion model to make a Pokemon generator and that was built by Rob DeWitt. And I still think like these enlarge model applications are super fascinating.