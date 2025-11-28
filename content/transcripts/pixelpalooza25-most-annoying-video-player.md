---
_build:
  list: false
  render: never
---

**Dave Kiss:** [00:00:00] I wish I could tell you more about that, but I have a very important story to share with you right now. We're going back in time. It's 1996 and I am eight years old. I just got home from my little league photo shoot, have grass stains in my pants, hopping out of the astrovan and heading inside, and I don't know it yet, but I'm about to get my first exposure to programming that's going to change the course of my life forever.

And it's all thanks to this piece of hardware. Now, if you are not. An aching, groaning millennial like myself, and not sure what [00:01:00] this is. It's a Game Shark Pro for the Nintendo 64, and it sat, it's a physical piece of hardware that sat in between the video game cartridge and the video game console and allowed you to read, intercept, and override the values that were being communicated between the two, kind of allowing you to underlie access the underlying primitives of the game.

And here's kind of how it worked. When the, those values are being communicated back and forth, we had the ability to kind of latch on and override and overwrite that value with our own. So in the example of like Mario, uh, typically Mario would run into a bad, uh, bad actor, the enemy in the game and would take a little bit of a health hit.

But with the game Shark Pro, you could say, no way. Mario's not getting injured here, and always force that value for his health to stay at a hundred percent. This game, shark Pro allowed you to kind of bend the rules of the video games, but this wasn't really the only way to bend rules in a game.

Sometimes the [00:02:00] games designers bent the rules as part of the game itself. I. As an example here, uh, from one of my favorite arcade games of all time was NBA Jam, again, another nineties release here, and this fellow with the lovely locks. His name was Mark Temel. He's the lead designer and developer on the game, and Mark left his little impression on NBA jam that he actually never even told anybody about until it came out later on.

Here though, you see Mark was from Detroit, so he is a big Pistons fan. The Detroit basketball team and their rivals were the Chicago Bulls. And so what he wanted to do was make sure that his team was always going to beat his rivals. So, uh, without approval he kind of went rogue. He programmed the game. So if it was a close game between the Detroit Pistons and the Chicago Bulls, the Chicago Bulls would suddenly just start throwing bricks at the last second and would never really win.

They would never beat the, the [00:03:00] pistons here. Um, and he didn't tell anybody. He just left his mark on the game, no pun intended. There. It was these kind of video game cheats that were the first time that I started to understand that the rules of the world around us. Are just rules. Somebody out there made them up, which is like great news because that means that we can bend them, we can change them more into what we're dreaming up and not what the factory dreams up for us.

In fact, I would go so far to say as that we should bend the rules. As web developers we're often asked to implement projects spec, but that doesn't mean that we shouldn't have a little bit of fun too, right? I mean, we're human. We don't have to be reduced to a Jira board and a daily standup. So it's our responsibility, I think, to fight back against the man, to take a stand against hierarchy and process to challenge cultural and workplace norms, to work [00:04:00] less, play more, to defend our calendar, and to keep the wild and weird worldwide web alive in our creations.

Um, I'm gonna take this really quick and just for the effect, let's pretend we're all in the same physical room together where this talk is normally given. Steve. Hey Dave. Whoa. Look at that background. Is that so realistic? We should get that conference background. Uh, it's not a background, Steve. I'm, I'm in the middle of a talk at Pixel Palooza right now.

Wow. Okay. Hey everybody. Uh, so you're busy. I guess not. What's up? Uh, okay. Well, well quick ask, uh, uh, I just need you to put together a, uh, example of a video player using Media Chrome, our, our player toolkit. Uh, just something fun. Be [00:05:00] creative. Don't be afraid to get inspired. Really hoping to show off what we can do with it.

Okay. I could do that. Uh, just be sure to run it by me, the team before you show it to other, other people. Okay. But, but have fun with it. Uh, yeah. All right. I'll run it by you. Cool. And while, while you have everybody there, don't forget to tell 'em about our plans for, for, for video jazz. Uh, yeah. That's actually a pretty good idea.

I will, I'll let him know. Cool. All right. Thanks, Dave. All right. See ya.

It's always just a quick ask. Isn't it running by the team? At least he is kind of right here. I mean, media chrome's a really neat library to be playing with. It'll, it's kind of the video and audio player toolkit that we have available to us right now that we've built over at Mucks. It is based off of web components.

It can work basically with any web architecture and gives you the ability to kind of explode the video player that you're used to using [00:06:00] into se separate components that they can all be placed, styled and interacted with in whatever way you can dream up with Media Chrome, similar to with game chart, you can access those underlying primitives of the player and change it into what you can dream up and not what somebody else dreams up for.

You. I wonder what we could dream up here. I want to be able to bend the rules. You know, what, what could we, what could I dream of? I dream of a, a player that could help me fight the good fight, help me, help me actually play none of this business stuff all the time. Hmm.

Uh, yeah. Quick, quick ask here. Wanna find the team? Show the team before you know. You chose. Anybody else? Doesn on the fun. Be creative. Be creative. Creative. It's a me[00:07:00]

redefines the rules looking. You set the agenda. Two. Set the agenda. That's it. We can set the agenda, we can build a player that plays.

Why don't we build a video player like the games and the arcades of my youth where you don't just play the video, you play the video. These 3D engines on the web have come such a long way. We could totally do this. Steve's gonna love it. I think what we can do here today is walk through how we can build a 3D coin mechanism in three js that can then connect to media Chrome to control video playback.

And at the end I'll show you what I think the future of video players on the internet looks like with video js. How's that sound? I can't hear you at all, so I'm just gonna assume that you're cheering and screaming my name. Uh, so I'm just gonna keep moving on [00:08:00] forward here. Uh, let's go ahead and start building this 3D scene where we have a 3D coin mechanism that controls a video player.

For this, we're going to use three Js and a wrapper React library for three js called React three Fiber. Um, if you're familiar with React, maybe you've never written any React before and that's totally okay, but as what we're doing here is assembling kind of a tree or a 3D scene and inside of what we're gonna call a canvas here using the canvas component, we're going to place.

Different elements, different geometries, and different things that kind of come together and build out this 3D scene. So here is the code that we are using to just initiate this 3D scene, right? We're importing a canvas from the React three fiber library, and I'm also importing a perspective camera and camera controls from a utility library called React three Dry.

Which is German for three, if you didn't know. Uh, today, I learned, well [00:09:00] yesterday I guess. But, uh, canvas, uh, we have it here as sort of the base component. We, we are inserting a child perspective, camera and camera control. So let's go ahead and just render this out. We don't see anything. Well, we haven't added anything to the scene yet, so we need to go ahead and start laying some groundwork here.

So I'm going to add another component to our scene. These components are these chunks, these building blocks that we're using to build the scene out. Remember? So here we have a ground component that we're writing, and what we're introducing for the ground is a. Mesh. Now a mesh is sort of just a collection of geometries and materials that are held together, sort of in this container, um, that groups them together.

So we have this mesh that we're saying, let's make sure it can receive shadows. I'm gonna want shadows to appear on the mesh. At some point, we're gonna rotate it so it's not standing up. It's sort of laying on the, on the flat side there on the ground. Representing a ground and just using a plain [00:10:00] geometry, which is just a flat, big old box basically.

Um, and I'm gonna apply a basic, a mess, mesh basic material, which is just kind of the gray material here. So let's go ahead and run this. And look, now we have our ground, which we can sort of, since we have the camera in place, we have the ground, we can interact with it and see our scene is coming together.

It's not much yet, but let's, uh, you know, Rome wasn't built in that day. Let's apply some carpet. The carpet from my youth, when I remember from the arcades that I went to was sort of this stained wild patterns, very neon colors, which I learned later. That was designed specifically, I think, to hide popcorn.

Those kind of interesting, um, I don't know if there's, that's true. Don't Google it, but, uh. How do we apply that sort of pattern to this plain geometry? Well, we're going to use a specific loader from React three Fiber. Uh, we're using this used loader or the texture loader. I think it comes actually from [00:11:00] the underlying three JS library, which we're losing here, using here, uh, but used loader.

Basically what this is doing is allowing us to use, uh, react suspense for easy loading and, and errors. States, there's all kinds of loaders that you can use with three js. There's animation loaders and audio loaders and image loaders. Here we're going to use, uh, a texture loader, and this texture loader is going to basically take an image and pop it into this texture map that we can then apply.

Right? Onto the material down here. So take a look here we are importing the texture loader. We are setting it so that it repeats on, uh, its axis that we need it to here. And, um, we are gonna apply it right here to, we're gonna change this mesh standard material. From a basic material to a standard material, right?

Apply the map, the texture map here. I'm passing it, setting it up here with the loader, and I'm passing it down here. And just making some, a couple changes [00:12:00] there to the way that map is going to appear. The roughness, the metal ness, kind of change the properties of, um, what happens when light interacts with this particular, uh, this particular mesh.

So let's go ahead and apply this and, oh, no. It looks like we broke the scene. Don't worry, we did not break the scene. We just don't have any lights in this scene at all yet. So of course we're not seeing anything. It's like you walked into a room with, with no lights on. It's pitch black. We need to do that now when we change from a basic material to a standard material, the basic material is admissive, meaning it gives off some of its own light, uh, sort of glows in a way.

Uh, this material's not a missive, so it needs its own light, uh, to be visible. And so we're going. To use what's called an environment here to provide some light to the sea. So I'm gonna import an environment from React three dry. And an environment is basically kind of like, um, I think of, I, have you ever seen the, the Truman show, the movie where he's kind of walking around in this big, like fake world and you can see the [00:13:00] sky in the wall is like kind of fake.

That's kind of what's going on with an environment here too. It's this global cube map where we are surrounded on all sides with. Sort of an, an image really. Um, and the image can be visible or it can be invisible. But either way, the lighting data, the brightness data from that image is going to be used to bounce light into the scene and help to kind of globally illuminate, um, the objects that are in that scene.

So here I'm importing an environment. We have our ground component already, and I'm just adding the environment. With a preset of city to the scene. This preset is just a picture of a city. That's all it's doing. So it's, it's going to use the lighting information from a city and apply it to our scene. And if we go ahead and apply this, we should see, there we go.

There's our carpet. That's what I was envisioning this whole time. So that's starting to look a little more [00:14:00] funky, like an arcade carpet, and I feel pretty comfortable moving forward now. Alright, so I said what we're building here is gonna be a coin mechanism that controls a video player, right? So we need to have the, the box for the coin mechanism.

Let's think inside the box here and figure out how to add this basic box to a scene. Now we've learned about a geometry, which is just kind of our shape, right? Um, we can also, we, we have a plain geometry, which we use for the floor. We can also have a box geometry in place, and that box geometry will allow us to define sort of the size and position of where this box should be appearing within the scene.

Um, so I'm not doing anything really too different here than what we did with the floor. I have a mesh. I'm telling it that it should be able to receive shadows and cast shadows. Um, I have a physical material which just allows you to dig in a little further and how, what that lighting. Um, impact is on the, on the geometry that it's applied to or the mesh that it's applied to.

And, uh, this is [00:15:00] just kind of the sizing and positioning data for where that box needs to appear within the scene. So, nothing really terribly different here that's happening. Let's go ahead and apply this to the scene. And there's our box. Uh, what I don't have here or here it is down at the bottom here is this red face plate.

So there's another mesh that I carefully positioned just in front of that kind of gray box that is, uh, a little smaller and still kind of maintains this square shape here. But you can see that the color here is red. So that's changing the red property. And this is just very carefully positioned. So it's just a box that's sitting on top of another box.

I don't know why I'm talking so much. 'cause that's, that's all it really is. So let's go on to the next part of this scene. Uh, it's not much of a coin mechanism if it can't accept coins and, and a box. You can't just put coins into a solid box. We need to be able to cut into this solid box and create a coin slop.

So let's go ahead and do that here. We're going to use another. [00:16:00] Library. This is Library City for this, for this talk here. This one is a poorly named library called Three biv, uh, which of course stands for Bounding Volume Hierarchy, constructive Solid Geometry. Uh, it's kind of a fancy way of saying holes in.

Stuff as far as I understand, but do it kind of fast. Um, but basically allows you to add, subtract, and mass shapes together in real time. So we're importing three different helpers here. This is the operation that we're going to perform. It's a subtraction operation, kinda a bull operation. We have the brush.

This is going to kind of create the two areas that need to interact with one another. And the evaluator is kind of, I don't know, I picture it like the saw that is making the actual cut here. So let's see what's happening. So we have the main box brush in place here. So we're kind of just tracing this geometry, the same size here of that geometry that we defined before.

The same goes for this, uh, slot hole. [00:17:00] Here, um, we're kind of very carefully resizing, squishing it down and positioning it right here on the side. You can kind of see this getting cut into place. And until we run the evaluator, nothing happens until you run the evaluator. So here we're kind of saying, subtract the slot hole from the main box.

We have the result and then we're updating. We, we had a handle to that original box. Using this ref, here we are saying, Hey, replace the geometry from that original box with the result from our evaluation here on this Boolean operation. So that's basically just a long way of saying, again, we're just cutting holes and stuff.

It's kinda like what I did with two weeks left to shop class back in high school and just drilling holes, bonus points if you remember that reference. But, uh, we got a hole here. Now I could drag around and kinda show you that this is like a interactive, you see right through it, you see the carpet in the back there it is working as expected.

So let's keep on rolling here. Uh, there's also these really great utilities within React [00:18:00] three Dry to put text right into your scene, which is pretty cool too. Very easy. Nothing really too wild looking here we position the text. We give it a size, we give it a color, and let's apply it to the scene. That easy to apply text to a 3D scene.

And you can just change out this text right in your react tree, uh, to be able to modify it if you want to do so. So now the text, again is carefully positioned right on top of that red face plate. Um, so let's keep rolling here and see what is the next step. This is coming together. We can kind of see the, the vision here, but it is still looking like it was vibe coded, um, or something like, you know, that it's not very impressive.

So we need to, we need to apply some materials and change the way that this geometry presents itself. How do we do that? Well, there's a couple of different, uh, approaches that I'm going to take here with this particular scene. One is going to be using a transmission material for that red [00:19:00] face plate.

Whenever I remember one of those old arcade games, you used to be able to see kind of the, the glow of the lights kind of coming through and refracting throughout that red kind of plasticy face plate. And then the coin mechanism sort of had this like, I don't know, like grippy bumpy type of, um. Rubbery texture to it.

I don't even know what that was. Probably not very safe. But, um, we're gonna try to mimic both of those here. So we have this transmission material, which comes from the React three dry utility library. And we're also using a, a normal texture helper, which I'll get to here in a minute. But, um, oh, or we're doing that first look a minute is up.

Uh, the nor the normal texture. So what a normal is in the 3D space is basically, um, an RGB. Image. So it's just like a kind of a data image that tells light how it should respond to the material when the light hits the material. So rather than making, I, I told you that this coin [00:20:00] mechanism, I remember being kind of like bumpy, like little tiny bumps on it.

If we were to actually physically make this, uh, 3D box. Change the geometry to make it bumpy. It would be a very, very expensive operation to do all calculating all the math to kind of carve out all of those little nooks and crannies on this, on this 3D uh, coin mechanism just wouldn't really do very well for what we're trying to go for here.

So a normal texture instead that just fakes it. That just says, here is an RGB image of, uh, what looks to be. How bumps would kind of respond to light when they interact with it. And the based off of the value, if it's red or blue or green, it will sort of tell the light to do something different. Um, and there's some different, this is a little bit simplified here, but there's some different strengths that will, uh, be applied here to kind of give the appearance that it's super bumpy, but it's not actually very bumpy at all.

Um, and then here at the bottom [00:21:00] we have. The, um, main coin box, that's the normal map. The, the transmission material, we're applying to that red transparent phase plate. So we're using this transmission material with some specific properties here to say, let's keep it red, but we're going to allow it to that.

The light to pass through it. A lot of this is kind of baked in straight in the transmission material, and you can just kind of tweak some of these parameters. I played with it a little bit to just get it looking like how I wanted it to look, but, uh, let's just see how this all came together after, uh, these were applied.

Whoa. Big difference there, right? I'll just drag around here and you can see, uh, if we're zoomed out, we won't be able to tell, but you can see that this box is, is entirely flat, even though if you look at it kind of looks. Bumpy, or it's got like creases or ridges in it, right? But it's actually flat, uh, when you get closer to it.

That's how these video games kind of have faked, uh, the appearance of, of a real texture, but not actually having the texture. [00:22:00] Um, and then look at this, uh, with the transmission material. So the text is now kind of refracting based off of the camera position. We got light bouncing off the top there. That's pretty convincing.

Um, it's looking. A lot better than it was. Let's just do some really neat little cinematic camera movements here. Ooh, sweet. I like how that text is moving. It looks a lot more convincing, but it's still a little dark for me. Um, we need to make it more enticing to insert a coin into this slot. So we need to start adding some more lights to this scene.

So we have this sort of environmental light that wraps the scene, right? We have, it's invisible. You can't see it, but it's projecting into the scene. We can also add specific kinds of lights to the 3D scene as well. There's point lights and spotlights, and the ambient lights, all kinds. Here we're gonna use a directional light.

And I'm picking it up off the ground, putting way up high in the sky. Like it's kind of like a sunlight here. Setting the intensity, telling it, cast a shadow with the [00:23:00] objects that you're, uh, running into. And, uh, let's see what happens when we apply that. To the scene too. Whoa. There we go. Okay. Much better.

So you could see this yellow outline is the light itself, and that this, this cast here is kind of showing you where that light is, is pointed. So that really made a big difference here. Let's just zoom in and take a look at the before and the after. So here's what it looks like. Now look at there. There's the, before it was really dark and kind of hard.

Everything's getting kind of muddy there. In the after much better. Um, but still we wanna make it enticing to insert these coins into the, into the, uh, coin mechanism as well, right? So we could add. Little point lights into there as well. These are just the little points that I marked as red and position 'em very carefully.

So it's kind of drawing you in and wants you to insert some coins into this thing. So take a look at how that's interacting with the red face plate. There's also, um, you can kind of see the city buildings here if you get look close enough in [00:24:00] that red face plate that's from the environment that's coming around here.

Um, but that's making a big difference. These little point lights. One more cinematic movement so you can see how that's all interacting with one another. Very cool. Uh, truthfully, I have no idea how these lights are getting any energy, any electricity. That's not, there's no wire on this thing. There's no battery installed.

We can need to put a wire on this coin mechanism. So let's go ahead and do that here. It is just another mesh. Um, we're learning here. Maybe you're sensing here that everything in 3D is kind of faked. Um, we just are creating very specifically positioned and, and reflective materials and geometries to make things look, you know, more realistic or more appealing.

So here we have a cylinder geometry that I'm going to kind of put right where I need it to go. Along with a standard material, which has sort of its own a submissiveness. We talked about that briefly where, I don't know, electricity's kind of magic to me. I know that there [00:25:00] are explanations for this, but how does it work?

I don't know, i's on a magic, so let's make the wire kind of glow a little bit. Like it's giving off its own magic. Um, so let's go ahead and add this wire to the scene as well. There we go. Cool. So that's coming together and you can see we go under the floor there. You can see how that looks like. It's plugged into the back there, starting to, starting to feel like a real deal.

Right? Okay. Let's go around this way now. Uh, one thing that I do need to do is add a Mux logo. To this coin mechanism, after all, is my employer. And I don't think that, uh, well this is how I get my coins in my pocket, so I always have to give them a shout out when I give this talk. Mux is going to be powering the video later on in this talk for how this video player is controlled.

Um, but always a shout out to, to mux for helping out with these tugs. But let's get back to the coins itself. The coins are really what's gonna be powering this video player, right. [00:26:00] What do we do? What do we do with the coins here? Well, we're using techniques we already know about. We, we are using a loader to apply certain texture to them.

We're going to use a cylinder geometry and just kind of squish it down into like a pancake type cylinder. Very, very. You know, not very tall at all. Um, and we're have the standard material and then I'm gonna position it so it's way up in the sky. 'cause I'm envisioning these coins kind of dropping out of the sky into this scene, onto the floor.

Then, then we can start to pick 'em up and interact with them. So let's go ahead and do that. Um, well, it's added to the scene, but it is not falling, uh, like I thought it would. Why is that? Well. Uh, while we were able to position this geometry up in the sky, physics are not by default included in 3D. 3D is all sort of, like I said, precisely positioned and lit materials that will just, uh, kind of, uh.

[00:27:00] Fake it, that things are working the way that they would in the real world, right? If we want physics to exist, we need to introduce that into the scene as well. Uh, so if I'm picturing that these coins are gonna drop to the floor, then uh, we need to do something about that here. So we're going to use another library.

Uh, we're using React three rapier. This is introducing Rapier Physics, which is just a, kind of a fast, uh, web assembly powered physics engine. It's really great for, for, uh, performance, uh, in the browser. Versus some other alternatives that I was exploring. And this kind of handles all of the interactions, the gravity, when the coins are going to be shooting through this coin mechanism, um, it'll handle the collisions and so on.

So we'll go through how we're gonna use this entirely throughout this scene. But we are applying two different elements. There's this rigid body and there's this collider, and they have two kind of different purposes. The rigid body itself is, uh, telling the. The, [00:28:00] uh, physics environment that there is something here, uh, at this geometry.

We're sort of like very carefully positioning this rigid body and this collider right over the coin. So it's almost like a coat that it's wearing right? To say there's a physical item. Within this little container here, uh, we can specify what that position is, right on the rigid body. We can also sign user, um, user.

This is metadata, really, let's call it what it is. Um, what, what's a type of this thing so we can then programmatically look up. When a collision happens, what just ran into me? Uh, we can refer to that value here. It'll kind of keep that data along for the ride, uh, as the scene's rendered. And then we don't want it to render its own colliders.

We're going to give it. That's particularly, uh, specific. Collider that's very precariously placed, uh, right around that coin itself. So these are some additional parameters here that just say, how is this coin going to interact with the scene? Is it bouncy? Is it going [00:29:00] to drag if it hits the floor? Um, you can kind of play with these values and see what are, uh, the, the right values for a particular scene.

But here were some fun ones that I came up with, and let's apply this to the CNC. Okay. Well, uh, it fell into the scene. It, I don't know where it went. What happened there? Uh, well we told the whole scene about the coin having physics right? But we did not tell the scene about the floor having physics, but we need to add a, a same deal here, rigid body to the floor.

So I will go ahead and do that. I don't know if you, this comes through very well, but now we can see this debug sort of. X, y, z access here. These lines that's just kind of representing, yes, this thing has now applied physics, uh, a body, rigid body to the floor here. So if we were to run that again, we should be able to see a little bit more of what we would expect.

Um, we can [00:30:00] add those colliders similarly to this coin mechanism too. So, um, what I'm envisioning happening here is. A coin is gonna land on top of this coin mechanism. It should not pass through like a ghost. Um, this coin mechanism, which is what it would do, it's just what happened with the floor. So we need to add a collider to the top to the sides of this, uh, coin mechanism to the bottom here.

You can see 'em just kind of carefully put. Positioning these kind of walls, but I'm leaving a gap here, right in the center to allow for coins to pass through. We have this visual slot, which doesn't actually do anything, but then as soon as we create this Collider slot, that's where the coins can actually pass through.

So if the coin were to hit over here, it's not gonna, it's not gonna work. It's gonna bounce right off of it. But if you get it right in the middle there, it will go ahead and pass through this coin mechanism now. So let's add some coins to this scene. Uh, we're gonna need more than that. Here we go. [00:31:00] I don't think we're gonna need more than that too.

There we go. Now it's starting to feel pretty good. Okay. So, uh, it's looking like it's almost there. Almost like it's about to be fun, but we can't actually interact with these coins in any way right now. They are having their own interactions with the physics in this scene. Uh, but there's no, there's nothing if I were to try to drag around on that coin, it's not gonna do anything.

It doesn't know anything about me at all. So we need to change that. Um, using another library here, it's gonna be called. Use gesture. React gives you this drag helper here. So, um. I tend to get a little wordy on this code block here. I'm gonna make this kind of simple. It's essentially what it's doing is detecting if what this drag handler is applied to, the thing that it's applied to, which is the coin.

If it detects that I'm holding down on my mouse, or I'm with my device on my pointer, then it should pick this thing up. It should override the physics that exists within the scene. And that's what's saying here, the, the, [00:32:00] um, where is it?

Is this body type? Yeah. There we go. The body type. Here I'm changing it from saying, uh. Here. Number two, this is kinematic, meaning I want to control the physics. Don't let this scene take over here and apply gravity. There are no more rules. I'm in control when I'm saying that it is grabbed and I have the correct coin grabbed, and then when I let go.

Of this coin, I want to return back into the physics of the, the scene. So I'm going back to a body type of zero, which is the dynamic physics, and then I'm also applying a small impulse on the Z axis here. Very small. That just kind of pushes the coin forward. Boop, just like I give it a little flick basically.

And this, if I didn't do this, the coin would just fall down when I let go, right? 'cause it's back in the scene, but it has no. There's no force behind [00:33:00] it anyway, this is applying that force just a little touch that'll push it forward and allow it to go through into the coin slot. Uh, let's continue on here.

So I'll apply that drag handler, and now we can see that we have the ability to pick up a coin, get it into one of those coin slots, which is nice. Sweet. So we're on the, we're on the right track here. Nothing happens right now when you put these coins into this coin slot. Uh, we need to change that. Now, uh, so let's go ahead and add a sensor.

The sensor is essentially this little collider that's very similar to the colliders that we just set up, but the collider is set backwards into the scene and allows the coin to detect when it intersects with this collider fire a callback event, and allow that callback event to then control something else.

Uh, that's all it's doing. I'm placing the Collider into the scene back here. You can kind of see it, this yellow box and, uh, when the coins will [00:34:00] interact with this collider, we'll play a sound. We'll flicker the lights in the scene and then we'll fire off a callback event to just say an intersection entered.

So let's handle that coin inserted. We'll call this function. Make sure to deba it so it doesn't get fired more times than it needs to. All right, so I've done all of this so far and uh, we've done almost nothing about a video player. Steve's not gonna be very happy about that, so let's go ahead and change that here.

We're using Media Chrome to apply a video player to the scene. I mentioned before. You can kind of blow up the video player into multiple components, right? So that we have a control bar and a volume slider and a mute button, and we can show those conditionally based off of. Whatever we dream up. So here I am only going to show the controls for a volume, um, if the video is playing and what's gonna control the video playing.

Well, if you insert a coin and it inter intersects with that collider that we positioned back in the scene, [00:35:00] then it will add three seconds. Of time to your timer and give you three seconds of playback. When that timer runs out, then you need to insert another coin to continue to play the video. So that's what's happening here.

We can kind of conditionally control all the different elements of this video player because of the way that media Chrome explodes all of the different elements into components. So we're just doing some kind of nifty conditional controls here. Again, streaming the video from mucks that will make it really easy to play this video back into our scene.

So let's go ahead and get this thing going. So Steve's not gonna match.

All right. It's looking like it's ready to play back here. So. If y'all don't mind, I'm just gonna go ahead and start to let this thing rip. Let's grab a coin and just start to play this game[00:36:00]

final round. It's also kind of fun to just huck these coins into outer space.

Oh, you just throw a Zoom notification at me.

Let's go. We're almost there.

Continue. Oh gosh. I need one more. Go. There we go. Oh no. Oh no.

Yes. We were able to win the game and beat the man. This time I got pretty lucky. Hopefully I didn't mess up the display too bad. I think I accidentally clicked, uh, something in my browser. So, uh, we kind of almost ran outta coins here. If I were to continue hucking them in outer space, what would we do? Uh, have no fear because remember, rules are just rules, uh, and you can make up your own rules.

So here. I'm applying [00:37:00] another rule that says if you were to wiggle that wire enough, uh, it will just add more coins to the scene that we can then interact with. So we're accumulating how much movement is happening on this wire. And if we kind of pass a threshold, then let's go ahead and call a callback here on wire wiggle and we'll reset the movement counter so we can kind of see that in action Here.

Lemme just grab this wire in the back. Ah, just get a little wiggle here. Sweet. We're back in business. All right, so this is the most, uh, amazing player I've ever built. Steve's gonna love this. Lemme just send it to him really quickly here. Oh, Steve, one moment. Compose. Steve. Here's the player you requested.

Lemme know what you think, give you the project to your worst player style. Looking forward to. Your thoughts, send that puppy off. Sweet. All [00:38:00] right, so again, just a quick review of the stack we covered here. Today we have the React three fiber library, which was controlling three Js within React React three Rapier for the physics in our 3D scene.

Use gesture, react for the drag handlers with the coins and the wire, and then react three drive for so many utility helpers that, uh, we used, including the cameras and the, uh, some materials and so on. And a lot of this is coming from the same group over on GitHub, which is a great follow. It's this point mere group here.

So I highly recommend checking them out if you're interested in this stuff at all. They're doing some phenomenal work. Um, I'm unaffiliated. I just think they're really great. And then the video side, we're using Media Chrome for the video player itself, and then Mux video to power the video playback here.

So one more thing that I have to share with you. We did talk about Media Chrome a lot today, but we're breathing new life into a player that has been around for a really long time, 15 plus years now. Video js. We're taking some of [00:39:00] the best parts of what we've learned from Media Chrome and bringing them now into video js, which is kind of a much broader, uh, uh, visibility with that particular project.

And we want to make sure that that project stays alive. So I think you should keep up to date with the future of video js where we're. Performing this revitalization and making sure that it's applicable again, to all of the different frameworks that are out there, um, to make it just as composable as media Chrome has been too.

So that's happening right now, Q4 2025. We're, we just released a technical preview. There's an alpha beta, uh, hopefully coming here in a few months. And then Q1 2026. This should be stable as well. Um, so if there's one thing that I can leave you with today's talk, maybe it's a checkout video js, maybe it's checkout mugs, but really.

I want you to consider bending the rules. I think creative libraries like these allow you to change kind of what it means to build on the internet. It, it's the flavor of [00:40:00] creativity that I often feel is missing from the worldwide web today. I just really hope that you would go ahead and do your part to also bend the rules.

Um, see how you can get creative on the web and continue pushing the boundaries of what you know and what you think that you're capable of. Um. Because really, I mean, we're the ones that are making up the rules anyway,

um, I should probably get back to Steve here, so I'm gonna wrap this up. But thank you for your attention and happy to answer any questions that come up.
