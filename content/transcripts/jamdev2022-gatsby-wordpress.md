---
_build:
  list: false
  render: never
---

**Alexandra Spalato:** [00:00:00] Hello, I'm Alexandra Spalato and I'm going to show you how you can create a Gadsby blog powered by your WordPress back office using our free team from B WP themes. And I will also show you how to make some quick destinations. So let's begin. So first you need to go to gets BWP teams website in order to get our free theme and to subscribe.

And once you subscribe, you will receive an email like this one in this email. First, you need to download the Gatsby starter files here.

So I open this and drag it into VSCode. [00:01:00] Now we need to install all the node modules. And for that, we need the tokens that we have receiving the documentation, and we need to install this token on our computer. We have two ways of doing it here and here. Everything is explained in the doc and I have already done it. So I just type yarn and.

This can begin. Then we need to go to the, to install the WordPress part. And again, in the email, we receive the link to download the demo files for the WordPress install. So this is you can download them here. So I have already done it, but basically what you do is you install fresh work, press install, and you upload this demo and then you will have this with some post and everything ready [00:02:00] to go.

So I need to tag this URL and have it in our env file here. So I replace. I implement this and I replace the URL here

I say, when I rename it to dot env. That's it. And now once the not module are installed, we will just type get we develop and we will have our nice blog running. So I have already done it here, and this is a result. So we have a blog with imagination.

Single post. Dark mode, everything. So this is really quick to to set up. So [00:03:00] now let's see how we can do some customization. For example, if we want to change font and color very quickly. So for that, we go here to config and we are going to choose another form from the heading. So we go to Google funds.

And let's try this one Pacifico. So I put it here in the config

and now I also need to hide it to tailwind because our theme are using tailwind. So I go to tailwind config and I change it here.

And now let's see to change some colors. So what we have done here, I have put a color palette and then we have also color configuration and we have [00:04:00] mapped every area. Of the website with his name and colors had a footer menu and same for the dark part. So it make very easy to change any color.

So let's say that we want to change our background. Let's make something fun. Let make it tomato and let's change the header background to hot pink.

Okay. So now to see these changes, we need to restart the engine. So I stop it and type gets be developed again.

Okay. It'll take a moment to get up. So in between lists, let's explore our code based. So in here in get V config, we have the get view, press team, plugins, and package. So for the [00:05:00] Gatsby team blog data light, this team's responsible only from the data. It source all the data from WordPress and We need to shadow it.

It means we need to import the component and modify them this happen here in order to associate this data with the templates that we have in the starter. Then we have the get be plug in WT package, light and battery plugging GWT. Tailwind. And these plugins are bringing all the necessary packages.

And this is a big advantage because we are taking care of maintaining it and doing also updates. It means that you can update and without having any verbal issue Let's explore the structure. So a big advantage to it. You can build anything on top of this because you have a really well structured code.

You have all [00:06:00] components for archive filter, header menu, post social. and and you can modify them directly. And from there you can totally change the design and build any, anything you want. Everything is styled with tailwind. So this is the main file. Then we are importing files for this is all the type for WordPress, including.

WordPress G blocks the core blocks here and the basic styles, the headings, the general styles et cetera. So this is finishing not yet, but soon. Let's try.

Okay. It seems to come to an end.[00:07:00]

That's good. So let's reload anti changes now.

Okay. As you see, we have this font and on the light mode, we have this heavy colors. So everything works very easy. Now let's see some changes that we can do from workplace. Let's say that we want not post as on page, but we won. A proper homepage. So for that, we have created a page, a homepage

with a gallery made with Guttenburg. Okay. And so now we go to settings reading [00:08:00] and we choose static page. We choose. Home and post page, which is blog. We save. And here we don't have to restart the engine.

As you can see archive path change to blog, and it takes a moment, but yes, that's nothing.

And here it is. We have this home with this beautiful gallery. And if we go to blog,

here we go. So I hope you liked it and that you would be able to build beautiful websites and blogs and whatever with our team and with [00:09:00] our other teams also.
