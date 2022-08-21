---
_build:
  list: false
  render: never
---

# Whats New AWS 2022

[00:00:00] Hello everyone. And first and foremost, thank you for joining me in this talk today in the server space, there have been so many new products and features released in 22 so far that you'd be forgiven for not being able to keep. In this talk, we will quickly go over the most important new items that you need to know right now.

First, let's talk about important features on AWS Lambda that lets you run code without thinking about servers or clusters. Let's talk about larger FML storage for Lambda functions. AWS land functions have always had femoral storage available at slash TMP in the file system. [00:01:00] This was set at 512 MBS for every function, regardless of runtime or memory configurations, we enhance the feature and now you can configure femoral storage for up to 10 gigs per function instance.

There are several common use cases that you can benefit from the expanded femoral storage. More temporary space enables more complex ETL chops to run in Lambda functions. This also means that you can download larger models from Amazon simple storage service or Amazon S3 to slash TMP and use this in your inference tasks, workloads that create PDFs or use headless chromium or process media also benefit from more femoral storage.

Some workloads use large files from the data providers to initialize local databases. They can now use this [00:02:00] without the need for in memory processing for workloads processing, large ti F files or satellite images. This makes it easier to use libraries by image magic to perform all the competition in Lambda.

The next feature is about Lambda function, URL. traditionally microservices architectures were built using Lambda functions, fronted by Amazon API gateway or an application load balancer. But sometimes all you need is a simple way to configure an HTPs S endpoint in front of your function without having to learn configure and operate additional services.

Besides Lambda, we announced the general ability of Lambda function URL. A new feature. That's lets you add HGP S endpoints to any Lambda function and optionally configure, cross origin resource sharing, or course headers. You can [00:03:00] generate a new function URL and map it to any function. These are globally unique at dual stacked and you can invoke your function through its HTPs endpoints via web browser call postman or any HTP.

These Lambda function, URLs use resource based policies for security and access control. We also release a few updates for existing run times along with adding two new runtime versions. First, AWS Lambda now enables the use of ECMA script or ES modules in no JS 14 run. this feature allows you to you to use dependency libraries that are configured as ES modules or to designate your own functions as ES module code.

It provides you the benefits of ES module features like import or export operators, language well support for modules [00:04:00] strict mode by default and improved static analysis and tree shaking. Yes. Modules also enable top level. a feature that can lower cold startlet currencies. When used with ion concurrency, you can also now develop AWS Lambda functions using node J 16.

Run time with this release you can take advantage of new node J 16 language features, including tool chain and compiler upgrades, stable timers promises, API reg expressions match indexes. Faster calls with argument size, mismatch, and an updated to V8 release 9.4. You can also use the.net six run time to build AWS Lambda functions.net six has many new features for.net developers, including support for she has 10 and F has.[00:05:00]

AWS Lambda now also supports attribute based access control, or a B C allowing you to control access to Lambda functions within AWS identity and access management, IM using tax with a B a C you can scale and access control strategy by setting granular permissions with tag. Without requiring permission updates for every new user or resource as your organization scales, moving on to releases for AWS step functions, which is our low code visual workflow service.

You wanted better ways to debug workflow executions and analyze a payload as it passes through each. For standard workflows, the new execution details page allows you to inspect executions using three different view types, graph, view, table view, and even view. [00:06:00] It has a multi-level navigation enhancements for analyzing the map.

State feature, the ability to search execution history based on a unique attributes and improved events and table navigation with filtering, sorting, and page. Check it out the next time you need to, TBU a standard workflow, how they console. And of course, to let know if you have any enhancements that you think would be useful.

The next feature is the able to run AWS step functions in your own development environment. Aw, six step functions. Local is a downloaded version of step functions that lets you develop and test applications using a version of step functions running in your own development environment. This local version of step functions, get invoke AWS Lambda functions, both in AWS and while running locally, you can also coordinate other supports services.

If you have the need for. [00:07:00] AWS step function's local is available as a chart package or a self-contained talker image that runs on Microsoft windows line, Mac OS, and other platforms that support Chava or talker. Finally, let's talk about some important announcements across other different server services.

With that let's pick up on Amazon China or. So Amazon Dyna TB increased a default quota for the number of tables per AWS account per region from 256 to 2,500 tables. So this is a 10 X jump of the number of tables that you can configure in one region within your one AWS account. Amazon O servers P2 is also globally available now.

So for starters, Amazon, Orso less V2 scales instantly delivering up to 90% cost [00:08:00] savings compared to when used and configured for peak capacity. AWS apps sync also added support for custom response headers to craft fuel operations. Use them if you have the need for it, Amazon simple notification service or Amazon SN.

Also add its support for attribute based access controls, just like AWS Lambda. It can also now integrate with Amazon cogniti to user pools within that same region for your authentication and authorization needs. AWS clue, job studio notebooks are also G now. So these are interactive, no group based job authoring for yours clue jobs.

And finally. Amazon event bridge addeds support for global endpoints for automatic failure and recovery across regions. Use this to meet your Dr requirements. [00:09:00] I just mentioned the most important new items that you need to know right now for an exhaustive list. Visit our what's new with AWS page for a detailed description of all the 2022 launches across all our service.

And if you have any questions, feel free to reach me out via the LinkedIn profile of mine that I've shared below. I'm excited to know about all the wonders that you will create with all these feature enhancements that we released in 2022 till now. But to note that there are more upcoming based on the feedback that you have provide.

So I humbly request to give us that feedback to help enhance the services. Thank you for your time today and keep on listening to the enlightening talks that plan throughout today. Have a great learning session. [00:10:00] Bye for now.
