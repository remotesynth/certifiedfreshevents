---
_build:
  list: false
  render: never
---

**Lene Saile:** [00:00:00] Hello everybody. My name is Lena and I'm a UI developer with . Originally I'm from Germany, but I've been living in Spain for a decade now, so my day-to-day life is pretty much trilingual as English is the main language when it comes. . So a few months ago I decided to rebuild my personal website and I came up with the idea to include all three languages as well.

So today I want to share with you what I have learned along the way, and we are going to build a simple startup project together using 11. Let's begin in your project folder, create a new package to Jason. We only have to install one package 11 2.0 at the time of recording, 11 2.0 is in Canary release 29, and it really is [00:01:00] only a matter of days before a new major version is officially rolled out.

So check which release is currently available in the official repository. First, we create an 11 config file to specify our input and output. I also said non jux as my default global template language. Next, create the input folder we just defined and in there two folders called underscore data and underscore includes inside of underscore includes edit file code base dot njk.

It contains our main layout using the template language, Naja the TI tag, the meta description, and the content will be pulled in from our markdown template. For styling, I use a small classless CSS framework on a CDN because this talk is not about css unfortunately, and this gives our website just a little bit of styling at the header and footer [00:02:00] partials in the same folder, but just leave them empty for now.

To be able to start 11, we had the CLI script for the dev server and the production build in package. . Before we continue, let's have a look at the terms localization and internationalization as they are, what all this is about. Localization is all about working with the actual contents. That is in my case, the translation.

In a more serious scenario, this is about adjusting the tone of voice to fit the culture you're targeting. Adding currencies and units for specific locator or modifying multimedia so that your message comes across correctly in that specific cultural context. Locates a circumscribed by ISO language codes composed of both a base language and the country of.

As developers, we usually take care of the step before that, which is the internationalization that is preparing the code for the requirements of different [00:03:00] locals, like making sure the languages with the right to left spelling are handed correctly by css, or the text contents from different languages can take up different amounts of space without breaking the design.

So with the idea of a multilingual personal website in mind, we are actually doing a little bit of. But CSS, unfortunately is totally out of scope. Instead, we're preparing our 11 layouts and templates to be ready for all that. 11. Now bundled the plugin, especially for our use case, we just have to activate it in our 11 config file.

We also need to specify the fourth language. I choose English, but it can be any language. We'll get back to it. First, let's think about how to structure our project. You can choose to buy country-specific domains, set up sub domains at your parameters, or create localized sub directories. 70 compiled based on folder [00:04:00] structure.

So localized sub directories work perfectly. , let's add three folders named by the two character ISO code of each language. And in each one we create two files, index md, and about MD and full numbers contents. Now what happens if we run the dev server in our output folder? We get an index dot html for each localized sub directory and a folder called about that has its own index ht.

If you want the languages to be consistent, we can just add a custom perma link. When we run the dev server, again, we see the about me folders in the respective language. If you want to automize this a little bit more and make it more intuitive to use, here's a smart solution I found in the 11 base block, which will include internationalized blog posts.

Once 11 2.0 is officially released. You have to add parent directory data file for all [00:05:00] localized subfolders. Here you pass in the respective language in the permalink, and you check for an optional front metadata entry in your template that gets ified to understand how all this is working.

It's crucial you dive into 11 is data. We always want to separate code from translation. Our code lives in layout files and our contents are created by markdown in template files. We also need to store some localized strings for the layout files. This is where global data comes into play big. We create four files in our underscore data directory, meta js four meta.

Languages. A for strings needed by the layout file. Layout as just to define a global layout for all templates and navigation. A for our menu. The plug-in gives us an addition to the page variable and two new [00:06:00] universal filters. If you have worked with 70 before, you've probably made use of the P variable page.

Lang represents the language tech for the current page template. First of all, we use it for the HTML Lang a. This is very important. It is used by screen readers to provide the correct accent and pronunciation. The dear Attribute stands for direction and prepares a code for any right to left language that might be edited in the future.

It is pulled in from all languages JS and defaults to ltr. Next, we use page deadline for our navigation so we can access the correct menu set in navigation. Then inside the photo landmark, we pull in a localized string and loop through our alternate versions of the current document to create a simple language switcher.

This is what the new photo local links does for us. It returns an array of the returns of content for specified url. We can access the properties for the [00:07:00] url, the language code, and the. We also want to inform the search engines, so inside our base layout, we at first the link attribute to the current url, and then we loop over the alternative versions.

There's still a few things missing in terms of accessibility. Your navigation landmarks should have a label, and this label must be translated to our languages as well. The same goes for the skip link, to skip over the menu directly to the main land. We're setting both strings again in the languages, the js, which is globally available.

Before we can use this on the live side, we need to adjust one very important detail. Right now we get a 4 0 4 in the UL route as we are not yet redirecting the visitor to their preferred language directory. Language-based redirects always match against the first language reported by the browser in the accept language header here can see my current accept language header for Chrome [00:08:00] Instance.

You can see that there are more locals that represent fallbacks if the first language country option is not available. So this header is probably responsible if you get served website in French when you are visiting France. For us, this means that we have to set redirect rules so that the browser redirects our visitors to what is in the best case.

Actually their preferred. Fire provides a straightforward implementation for redirect rules. Inside our nettle fire configuration file, we first indicate what our bold script and our output folder are. Then we set redirects for German and Spanish, as well as a general fallback redirect to the English version of our website.

Let's see if that's working. Our website is now deployed on in this Chrome instance. I'm getting redirected to the English sub. Which is in line with the accept language head. [00:09:00] In my Firefox instance, I'm getting the German side also correct, since the German local is the first language reported. So that's it.

On my website, I've published an article that goes through everything step by step, and you can find the link to the public repo of the project. We just. Please feel free to add new languages or to improve the quote. So in the spirit of the talk, all that is left to say is gra and thank you for your attention.

See you around.

