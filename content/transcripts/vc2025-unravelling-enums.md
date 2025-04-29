---
_build:
  list: false
  render: never
---

**Meg Gutshall:** [00:00:00] Today we're gonna be talking about revealing Rail's magic with enums. As Bekah said, I'm nag. I'm a Ruby on Rails developer. I have passion for open source code, especially coding for good. And I am a big fan of tequila. Also if you have any questions about the topics at this presentation, please hit me up in the virtual coffee slack, or at my.

LinkedIn, you can find the handle right here. 'Cause this is going to be a crash course today also. Hi mom. So what [00:01:00] is an enum? Let's back it up first. Some of you may not know what Ruby or Rails is and you need to know that. You can read the quote up there that I put. Ruby was created by Yuka Hiro.

Matsumoto. He goes by mats, and it was created in 1995. It's an open source programming language that focuses on simplicity and it reads much like English, so it's incredibly easy to understand. Matt's goal in writing, Ruby was to. Create something that would enrich programmers experience and make them happy.

So that really is something the Ruby community embodies. Rails is a framework written on Ruby and it's very opinionated. [00:02:00] It goes by the Rails way, and the Rails philosophy includes two major guiding principles. One is don't repeat yourself. The second is convention over configuration. So the Rails way assumes that there's a best way to do things and encourages that through a set of conventions.

If you. Adopt these conventions. It helps you to write less code and also boosts productivity by a lot. Many of you probably have heard of. Don't repeat yourself. It's abbreviated to dry, DRY and it's a principle that states every piece of knowledge must have a single unambiguous, authoritative representation within a system.

So this way you're not finding, [00:03:00] trying to go through the code base and change different places where you have the same thing written over and over again, and then convention over configuration. It's just this embracing the defaults that rails has set so you don't have to go through minutiae with configuring files.

Now onto Active record. It's treated as a ORM framework in Rails and Rails is set up as a MVC or model view controller. System active record is that model layer. So active record allows us to represent models in their data, create represent associations between the models and inheritance.

[00:04:00] Hierarchies between models. Very importantly, it allows us to validate models before they're persisted or saved into the database. And perform database operations in an object oriented fashion. So Active Record actually allows us to perform these database operations without using sql. It's like a, it's a framework for SQL that's tailored to Rails.

And ORM stands for Object relational mapping. Got all that. Maybe a little. Let's just keep going. All right. Now what's an enum? Let's describe this thing called an enum attribute. An enum is a special attribute that maps to an in an integer value in [00:05:00] a table in a database. So how you do this in Rails is in.

The terminal. You can write this shortcut rails generate migration. This example is adding an enum attribute called location to a meeting class, and then we're saying location and assigning it the type integer. This line will generate this file. This is a migration file, and you can see here it's adding a column to this meetings table called location and giving it the integer value.

But before we do that, we have to [00:06:00] actually define this enum in our model. This is different than. A regular attribute. So there's two ways to define an enum attribute. The first way is implicitly using an array of symbols, and this is where you sprinkle in that rail's magic. I had a mental image of throwing confetti at the camera, but that would've been messy to clean up.

So using our meeting class. Example, you put enum the location attribute, and then using an array, you fill it with the symbols of the possible values in person, remote and hybrid, or the explicit definition is using a hash of key value pairs. [00:07:00] Again, we have meeting and location. And then a hash, and we're just signing integers as the values to these keys.

So in-person is zero, remote is one. Hybrid is two. Bras indexes from zero. So the order of the enum attribute values must not change. It messes up the database mapping and it just can't deal. So here's some examples of when you can use Enums, a blog post publication status. These are mutually excu exclusive values, and you could even assign a default.

So with the post class, you'd have an ENUM status. It could be a draft published or unpublished, and most likely you'd wanna default to draft When you first create a post, you wouldn't wanna go straight to [00:08:00] publish most of the time. Another example are consecutive steps in a workflow. 'cause again, they are mutually exclusive usually and could be ordered.

So for a job application class, you have the enum attribute step. With values in progress, submitted in review and approved. So enums are pretty cool, but they can also be boring 'cause they're just like any other rails attribute too. We can hard code the value of an enum attribute. So using our earlier example with meeting.

In the rails console for an instance of the meeting class. So we're creating a meeting instance object here. When we call location and we're setting the value to nil, [00:09:00] we ask meeting location dot nil. It's return true 'cause we just set it to nail here and then we call meeting location. It returns nil here.

Meeting dot location we're setting to zero and meeting dot location. We're setting to the string. In person, INCORE person. These two lines here are equivalent and you'll see up here they're mapped to be equivalent. So now when we. Type meeting location. It returns in person,

but enums also contain magic.

They have bullying and dangerous methods. [00:10:00] Bullying methods end with a question mark and they return either true or false. Dangerous methods end with the bang operator and they return the modified object. So they change the object in place. Again, our example and in the rails console for an instance of the meeting class.

So these are instance methods for you can. The normal way for any attribute you would update is meeting, update, and you pass it the attribute and the value that you want to update it to. So we're passing location and two, which again corresponds up here

and I made a typo here. This is a typo. Let's pretend this says one. Okay, [00:11:00] sorry about that. Everybody. Location one and then meeting remote. And I will fix this right after. So if you wanna download the slides, it'll be fixed. So the two two lines will be equivalent if it's location colon one, and meeting remote with a bang because, oh, that highlight is not good because this updates it in place.

So if you call meeting remote with the question mark, it'll return true. Meeting location will return remote. So now if you call meeting hybrid with the question mark, it's gonna return false because we know our meeting [00:12:00] location is set to remote currently, but if we type meeting hybrid with the bang, it's changing the value of the meetings location.

From remote to hybrid. So now calling meeting hybrid with the question mark returns true. So these come automatically with the ENO definition, but you can opt to not to have that bypassing instance. Methods false after this definition as an option. Prefixes and suffixes. So we have a new example, a car class, and I made some interesting values here for our enums.

We have color with road rage, red electric avenue, blue and gas, guzzler green, and then fuel option [00:13:00] gas, electric, and hybrid. These can. Be confusing with color names like this between the vanity options and the fuel options. So I added prefixes and suffixes to help. You'll see here prefix is set to true and suffix is set to powered.

So if prefix or suffix is set to true, it's just gonna take the actual name of the enum. And use that as the prefix or suffix. If there's a string, it's going to take the value of the string and set that as the prefix or suffix. So this is another typo in the rails console, for instance, of the car class with using the prefix.

We have car dot color gas guzzler, green, so [00:14:00] that's how we're going to set. Car color. And then when we are asking car color with a question mark, it comes back Gas guzzler green. Now using the suffix, we're setting car fuel option to one electric and we're querying car dot gas powered that's coming back.

False. Car electric underscore powered is coming back. True. So our car is an electric car in the color gas guzzler green. And now onto scopes. So these are class methods and class methods. Return a collection of instance objects. If we call meeting dot locations, it will return [00:15:00] all the options available for the location.

Enum for meeting.in person. This returns all instances of in-person meetings. Meeting done not in person returns. All remote and all hybrid meetings. The same goes for meeting remote returns, all remote meetings, meeting do not underscore remote returns. All in-person meetings and all hybrid meetings, and then meeting hybrid returns.

All hybrid meetings, meeting do not hybrid returns, all in-person meetings and remote meetings and again. You can disable this bypassing scopes false up here as an option to the Enum definition. Alright, that was definitely a crash [00:16:00] course. So you know how you can see, go see a magic act and see the magician saw somebody in half and then put them back together again and you'd know it's not real.

But took them apart and put 'em back together again, and you just wanna know how did they do that? That's how I feel sometimes about Royals, how they do that. So we're gonna find out the magician secrets behind Enums. Where do you start? RTFD. If you don't know, ask somebody. Search the documentation. So that's what I do.

I go to [00:17:00] the Rails, API and type in Enum ina. Okay. Get back in a. Example here, but this is pretty much everything that we've gone over so far. I go down, find the ENO method. This isn't giving me a whole lot, but there's source here. I'm gonna show the source. Here's something. Source on GitHub. Okay, now we're talking.

This links to the code base where everything's defined about how an enum attribute is constructed. So we're going to go through bits and pieces of this, and you can take [00:18:00] this and do it with your language of choice traverse through the code base. GitHub makes it so easy. They have a file finder. They have this symbols on the right hand side, and then they have searching.

You just press the back slash button and it opens this. Take advantage of that. It's how you dig deeper and learn more. So here's the method definition, and here's an example that we're gonna use to examine it. We have our enum with the Takes, argument's, name, values, and options. And our example is a prescription class with two [00:19:00] ENO attributes, distribution method.

With values pickup, delivery, shipping, and the prefix distribution, and then enum value status with received processing and filled. This is the implicit definition. This is the explicit definition. And notice how I skipped numbers here. I don't know exactly what all statuses are for prescriptions. If there's another one, I might wanna put it in between one of these.

And you know how you can't change the order? If I put in something like intake in here and assign it five, I'm not changing the order of any of these. They still have the numbers they were assigned [00:20:00] originally. So that's how you can give yourself a little flexibility sometimes. So you'll see here there's another underscore enum right below that looks almost exactly like this Enum definition.

This is a private method that's defined later on in the file, we'll get to that next slide, but for now, the name, this maps to the name of the enum attribute, so definition or distribution method or status, the values, maps to the array or hash that's passed in and options is whatever comes after that, right?

Now it's the private method that we're looking at [00:21:00] the private method. All that means is you can't access that method outside of the GitHub file I had just pulled up. So that's a way of encapsulating concerns that Ruby uses. The options here. Here we have default set. So prefix and suffix have nil set as defaults, scopes, and instance methods have true set as defaults.

Validate has false, and then this is taking other options in that may be passed. So for the status email definition, it's just accepting all the defaults that are passed in. But the distribution method, we're overriding our prefix nail default with the string [00:22:00] distribution. That'll come in the next slide.

This is where we're setting our prefixes and suffixes. So right here we're making a value method names array that's empty, and we're going through each of the enums that are defined. And for the prefix, we're saying if a prefix exists, because right now it doesn't. But hey, this one, it does exist. So if it exists, do what's in this line for, if it doesn't like suffix, we're just gonna skip over it and keep going.

So prefix does exist. Now here, this is a double equals right here. [00:23:00] It's hard to tell 'cause they swed 'em together. But you remember how prefix you could either enter true. Or a string, right? So if it's true, we're going to use the name of the enum attribute, so it's drawing from that. If it's not true, we're using prefix, which is whatever is passed in this right here.

This question mark in colon, that's called a ary. Operator, and that's a fancy way of doing an if else statement. Another rails, magic syntactic sugar type thing. And then here with the pound sign or Octa Thorpe and the curly braces, this is how Rails [00:24:00] does string and tribulation. So here we're saying the prefix to distribution.

Now for this one, we're creating pairs a pairs variable here, and we're taking the values and asking do the values respond to this method? Each pair, again, we see the ary operator. Now this method, each pair this. Has to do with a hash only hashes respond to each pair, so if it does, we're assigning pairs, values, do each pair.

If not, that means it's an array and we're assigning pairs. Values do each with index. All that's doing is taking each item from the array and giving it an [00:25:00] index, starting from zero. It's taking pickup and assigning it zero delivery and assigning it one, shipping and assigning it two. So it's creating effectively, creating a hash out of it.

Now we're going in here and we're taking this Enum values is just basically sanitizing what we did here and making it so you can take this. Value And the, okay, the label is the value of the enum

values, and here the value is the number. It's a little confusing. Stick with me. It. And they're taking that label and they're saying, okay. Take whatever prefix and [00:26:00] suffix you just made, slap it together with the label and then add it into here. Value method names. So we're making this distribution pickup, and then no suffix, and we're adding it in here.

And then calling this method, this define enum methods, which is here. So now we have this, and again, we have the instance methods and the scopes. The default value was true for both of them, but we could pass false if we didn't want them here. This is just saying. We're defining based on if there's suffix or prefix and what the value [00:27:00] names are.

We're defining these special methods in here that the Enos can access. So you'll see in these green comments, I'm put in this distribution pickup. This is the definition below it for the. The query method with the question mark and the bang method, and then for the scopes, the same thing. Distribution pickup, and not distribution pickup.

And it's using this interpolation to do that. It's dynamically to defining that. So in the end is rails really magical. I still think it is. There's something about it, but all the secrets can be uncovered in the code base. If you wanna learn more, my GitHub repo is online with all the sources I [00:28:00] used, and I just wanna shout out Arvin and Yarn.

Thank you so much for helping me put this together.