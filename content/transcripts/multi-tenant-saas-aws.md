---
_build:
  list: false
  render: never
---

**Anubhav Sharma:** [00:00:00] Right. Thanks. Thanks a lot, Brian. First of all, for inviting me here and you know, I'm really excited to, to present this topic. It's something very near and dear to me. In general, just, you know, having, you know, building software about 20 years now. So today I'll be talking about how to build a SaaS solution on AWS using serverless.

So the idea here is to, you know, give you some best practices and how to use various AWS services inside a reference solution. So if you are trying to build a SaaS, if you're trying to build a multi-tenant solution, usings server services this is something you really want to, you know Maybe leverage as a starting point.

So before I begin, just maybe a quick introduction about myself. I am one of the solution architects here at aws. I work for a team called a SaaS factory and. By the name. Maybe you can imagine that we help customers who are building [00:01:00] SaaS based solutions on aws. Right. I have been writing code like for about 20 years now.

I started my career as a visual basic developer back then. And then I, three years ago I joined aws and, and since then I've been working as part of this team outside work. I have a family. I, I have a wife and two boys, 15 and. . We live in Massachusetts, and, and, you know, recently we also got a dog and she keeps me busy sometimes.

All right, so let me begin. So I thought maybe it probably makes sense, you know, before I jump into the technical details to define what software as a service really means. So if, if you just, you know, look at this definition, which we have here is it's, it's more of a business delivery model, right?

So SaaS is a way of doing business. You centrally host your application and your customers come and they subscribe to that application, right? Some examples, if I have to give, think of Dropbox, Slack, [00:02:00] Salesforce. These are some of the examples. Pretty popular SaaS platforms, which you just go and subscribe.

So as an example for Dropbox, you just, you know, buy some sort of storage. And you just pay on monthly basis for the storage. You don't have to like buy a hard desk or install anything on your machine, right? It's just some sort of consumption based model you are following, right? So today's discussion.

Is relevant for both B2C or business to consumer or b2b or business to business SaaS models, although I would say that it's it will be more beneficial. It'll be more beneficial if you are working on a B2B kind of SaaS, but you can apply the principles and best practices in both the cases. So, I thought it is relevant to show this code from Jeff Biza which he wrote in his 2016 letter to shareholders.

And if you just pay attention to this one line which, which he says, right, that customers are always beautifully, wonderfully dissatisfied. I thought this was very [00:03:00] relevant in this context because if you are a SaaS provider, you'll have hundreds and maybe millions of customers and tenants in your, in your system.

And it becomes Really important for you to raise the bar in terms of agility and operational excellence. Just imagine like even like a small downtime of 10 to 15 minutes can have a severe impact on your, on your business, right? So it's very important to, to work backwards and be customer obsessed.

And I thought this quote is very much relevant for today's discussion. All right, so now what it means to be sass, right? You know, before I jump into the serverless and how to use serverless services, I'll probably have a couple of slides which talks about the high level architecture patterns or design principles that I need to understand while building a SaaS application.

And the first thing you need to understand is broadly you can define your SaaS application or design your size application in two high level components an [00:04:00] application plane and a control plane. So application plane is basically, It's actually your ip. It's, it's the service that you're providing to your customers.

So in this case, in, in the examples I gave storage as a service or a CRM platform or a messaging service, it's basically your ip and that's pretty much you're offering to your customers. And, and this is. A platform that obviously is multi-tenant by default. And what does it mean? What it really means is you'll have multiple businesses, multiple customers, multiple users within those businesses who will be subscribed to your SaaS platform and be leveraging all at same time.

On the other hand, what we have is a control plane. And the control plane is pretty much what is managing this entire application plan. Right? This is basically your platform or set of microservices, which are responsible for onboarding a new tenant, as an example, right? Managing the security aspects of a SA solution you'll [00:05:00] have some sort of identity management system.

You'll have some sort of microservices, which will collect the logs and metrics, metrics from a SaaS platform and consolidate them together and, and then be able to visualize them, right? And then you'll have some sort of microservices which will allow you to provision a new tenant. Or maybe provision the resources of a new tenant inside your SaaS platform.

So this control plane are basically set of services, which do not need to be multi-tenant. I mean, they, they are just to control the application plane or the deployment and, and operational aspects of a SaaS solution.

Now within the application plane, there are two typical deployment models that we see customers follow when they're deploy inside aws. The first one, which is pretty common, is you have dedicated resources for each tenant. So take an example where you have tenant one who's trying to onboard into your system and you [00:06:00] provision maybe a separate EKES cluster or an RDS database and stands for them altogether.

Right? And, and this model is what, what we call it a silo model. Basically you are just provisioning separate infrastructure resources for all of your tenant. Now the other model is what we call it, a spool model. And in this case as you can imagine, you have your existing or your services or your resources shared across all these tenants.

So imagine an RDS cluster or maybe a e s cluster, you know, being accessed by and shared by all the. And as you can imagine, right, it is probably pretty evident that each model have their pros and cons, right? So in case of a silo model on the left side, you see you have little bit of better compliance alignment.

So if you have customers who are a little bit concerned about the compliance and security aspects, or maybe you have [00:07:00] tighter SLAs and you want to tune the resources according to those tenant, The silo model will be more suitable in those cases, whereas if you are trying to maximize your resource utilization, if you're trying to make sure that you have resources which are shared by multiple users and customers and tenants which gives you obviously better cost efficiency.

You probably go for a pool model. Now, having said that, it is important as a SaaS provider that you make sure that proper tenant isolation and security requirements are followed regardless of what model you choose. In fact, today, the reference solution that we will talk about, I have a hybrid model in place where we will provision some resources or some tenants in a silo.

And some tenants in a pool model, and we will actually see how you can enforce these talent, isolation, authentication, authorization in in both, both ways. So let me [00:08:00] just, you know, jump onto the reference solution that I was talking about, which we have built, which kind of uses all these design patterns and, and kind of applies them together to build a working solution.

I'm gonna first talk about the AWS services and features that we leverage as part of this reference solution. So what we did, we, we first leveraged what we call it as AWS serverless application model, or Sam, and we, we deployed our resources using sam. So SAM is basically an open source framework to deploy your serverless resources on aws.

And then alongside, we also leverage CDK to deploy some more components, mainly for the DevOps footprint off of our SaaS application. Now the difference between SAM and cdk, SAM is more like market. You, you probably use YAML or json. CDK is more pro programming language. So basically you can actually.

Type script and deploy your resources. The idea was to show [00:09:00] that they both can work in parallel and hand in hand. But in your case, you might just do ctk to deploy your resources, but we intentionally use both just to show how the kind of work hand in hand. So then our API layer was built using Amazon API Gateway, and we specifically leveraged the REST API capabilities of API Gateway to build our API layer.

So all of our APIs are restful APIs. They follow that get put post kind of methods. Then for the authentication and authorization purposes, we leverage a feature we call as Lambda authorizer within API Gateway, and I'll talk about a little bit more detail on how that works in subsequent slides.

Another feature that we use was usage plans and API keys. So typically in a SaaS portal if you have multiple tenants who are trying to access the system, you need to be really careful about. [00:10:00] Enabling some sort of throttling mechanisms in your application, right? So think about it that you are trying to open up your APIs to hundreds of customers.

What if one customer just run accidentally, maybe run a script and just trying to bombard your APIs, right? So there are chances that your sources might get exhausted. So in order to enforce some sort of throttling mechanisms, we leverage this feature. And I'll show you how that works exactly as well.

Then we leverage Amazon Cognito as our identity management platform. And we, we specifically leverage what we call it as user pools, as a feature within Cognito to store our users. So your users can come and register themselves and then later can authenticate themselves using a user name, password based workflow.

Then for the compute layer, we leveraged AWS Lambda. And specifically I will also talk about how we leverage the fine grid access control using AWS [00:11:00] SDS service. This is more relevant when you are working that pool model where a single Lambda function is shared across multiple tenants and users.

Like how does that fine good access control work? And then we leverage lambda layer. Which is another functionality, a feature inside Lambda service, which basically let you create reusable libraries and share those reusable libraries across multiple Lambda functions. So in our case specifically, we, we leverage metrics and logging and authentication authorization, which was more like ausable pattern and build them using Lambda.

And we then you know, sh we, we basically then leverage those layers across multiple Lambda functions. And then finally I'm not gonna talk about this in more detail today, but obviously at the end of this slide, I'll, I'll give you some links of of the reference solution in which is inside GitHub.

Which you can go and refer, refer yourself. But there are more features like Code [00:12:00] Pipeline and Canadian deployments, like how to do traffic, traffic shifting between newer version of Lambda. So let's say you're trying to deploy a new version of Lambda function. You might want to, you know, slowly shift traffic towards that new function.

Just a way to, you know, automate the Canadian deployment. So that's another feature that we implemented within this reference solution. And then finally we use DynamoDB as our layer of storage. And DynamoDB again is, it's a key value store. Provides you a great way to, you know, store your data in a, in a serverless fashion.

One more thing I wanted to mention at this point is that the application plane, as I mentioned to you, is deployed in a hybrid model. So I'll show you how you actually onboard your tenants into the system, but you will see that when you, once you onboard the tenant into the system, the basic and the standard tier tenant.

Are deployed in a pool model. So [00:13:00] basically these standards will be sharing the same set of API gateway, Lambda functions, and DynamoDB table. Whereas when we. Create a new tenant as a platinum tier tenant. We actually deploy separate resources for those tenants. Again, you know, the, the whole concept of tiering, not sure if you if you are aware of that or not, but typically when you're building a SaaS model, you try to create different sort of tiers for your, for your tenants, and you kind of maybe sometimes, Provide more as you know, maybe more functionality to certain tenants, provide better SLAs to certain tenants.

So the idea here was to show like how you can leverage those steering based strategies to, you know, even influence your architecture in this case. And then the control plane has been built using four different microservices, all using Lambda functions. Registration is for resisting a new tenant, tenant management.

It's when managing the tenants and user management [00:14:00] is basically a facade in front of your Coto. So if you need to, you know, use a different IDP instead of Cognito, you can, you just need to change and set these user management service and, and you and the rest of the application doesn't really get impacted a lot.

And then finally, we have a microservice for provisioning resources for this platinum tier tenants. And as you onboard. Okay, so let's now dive a little deep and, and see, you know, how, what you really get when you deploy this baseline architecture. Right? So when you get the core from GitHub, you will see in the instructions that.

You'll be asked to deploy the, the, the, the architecture using some sort of deployment scripts. And when you deploy that, the first thing that you will see, you will get a, you'll probably get three different web applications. So the first web application that you will see here is is the landing signup application, which we built using Angular two.

And the idea here was [00:15:00] to automate that whole onboarding experience so your tenants can. And themselves into this application. Then at the center right here, you see a sample SaaS application and, and this is just a example SaaS application. We, we just took like a very basic e-commerce use case. Basically it's very simple use case of a order and a product service.

This will change depending upon your needs, right? So you might have a totally different use case. But the sample SA application will give you like an idea of how to implement multitenancy within your microservices. . And then we also built a admin console for SaaS providers. Again, built using Angular 2.

And in this case we basically, you know, allowed SaaS providers to manage tenants or onboard tenants and, and, you know, just be able to add more users into the system. The authentication, as I mentioned, is being managed through our cognitive. Then the next thing that gets [00:16:00] deployed in inside your AWS account is the API gateway, and as I mentioned, you will get Lambda authorizer, which will be responsible for the authentication and authorization.

Your application you will get API keys and usage plans feature built into this authorizer. Now, one thing you might notice, which is little different and you know, sometimes can get data confusing as well, that we are not really passing the API key from the ui. Right? Normally, typically the way developers think that they need to pass an API key to the, to the API from client, which is obviously one way to.

But in our case, what we actually did, we were generating the API key and mapping to the tenant as part of the onboarding process. And our lambda authorizer is basically trying to map the API key depending upon the tenant. So I'll show you how that works in a little bit more detail, but we are not really passing API key from the ui, but.

Just mapping [00:17:00] the a API key and said alarm authorizer itself. And what that really allows us to do is it allows us to throttle all this incoming request. So just keep in mind that this a API key is by tenant and the way a typical SaaS solution works, you'll have like a hierarchy, right? You'll have a tenant.

Like a business who buy your SAS solution, and you'll have multiple users within those tenants. Right. Now the, the whole concept of usage plans and API key in our case is at the tenant level. So if you have a user who's trying to abuse the system what that basically means is that that abuse is limited within that tenant.

Because now what you're saying is that, hey, this tenant can only access the api. Let's say a hundred times in a day, just an example, or maybe a million times in a day, right? And if it tries to go beyond that, this usage plan will not let you do so. Then the next thing [00:18:00] that gets deployed as part of the architecture is those four microservices, as I mentioned for registration, talent management, provisioning, user management.

And then we are also deploying the pool services for the application playing. So in this case, as I mentioned, we took a very basic example of an order and a product service. So we are deploying this order and product service, which will be leveraged by all the basic and standard tier tenants. So this is something that's, that's getting deployed off front and then we are deploying some Lambda layers for authentication, metrics, logging, et cetera.

So this is the basic architecture that gets deployed initially. Obviously there are some things that get added or provision as you onboard on more tenants. So that's kind of what, that's something I'm gonna, you know, talk about next at how that really works. So let's maybe dive a little deeper now.

So, you know, so far I've talked about some basic concepts. I've talked about the high [00:19:00] level architecture. Now I, I'll probably talk about some more deep concepts and also maybe show you some code as we go along and how those things really work. So the first thing I wanted to talk about is resisting new tenants or onboarding new tenants, right?

So, if you remember, we had two different user interfaces that we talked. That could be leveraged to onboard your tenants, right? Now this could be, in your case, you might only have one or both. So what we have seen is that if you're trying to operate a B2B kind of SaaS application sometimes you don't expose your landing or signup application publicly.

You just have an admin console and you just use that to, to resist your tenants. So what you will do is when you resist a tenant, the first thing that happens is, Invoke the registration microservice. And in this case and this is by the way, an open endpoint, right? Registration microservice because this is something you're exposing to your public, to your customers, [00:20:00] and depending upon the 10 and tier.

So if it's a basic or a standard tier, Then you follow a different workflow and if you are like a platinum tier, you follow a different workflow. Right? And the workflow in this case is, as I showed to you, like in a couple of slides back for, for platinum tier tenants, we are deploying a whole set of AWS resources separately in silo model.

So this survey kind of orchestrates some sort of workflow on how to provision a new tenant. And the first thing that happens in this workflow, It's basically creating a new user, a new tenant admin user. And this new tenant admin user is then responsible for onboarding more tenant users later on.

And as I mentioned, depending upon the tier of the tenant this user management decides if I need to create a whole separate user, pools put in cognitive, or should I just kind of. All the users within a single user pool. And, and for those who are not, [00:21:00] who don't know how cognitive user pools work, they're basically a way to kind of group your users, right?

So, so if you have a tenant who wants some sort of settings like multifactor authentication, different password policies, it makes sense to have a silo user pool for them, right? But if you have tenants. Don't really have any unique requirements, you can just pull them into a single user pool. So again, based off in our case, based upon the tenant tier, we are making that decision at this point.

The second thing that happens is actually recreation of tenant inside a DynamoDB table. And this is where used store tenant configurations like 10 and name, address, billing information, et cetera, et cetera. And then finally, if it is a silo tenant, if it is a platinum to tenant that requires separates resources, we conditionally invoke this tenant provisioning service to onboard those tenants in silo model.

And I'll actually talk about a DevOps pipeline as [00:22:00] well later. I hope we'll get enough time to talk about that which which will show you how you can, you know, automate that whole onboarding book process across different tenants as. So I, I have some code here in this slides itself. You know, instead of shifting screens, I thought it would be easier if you just, you know, look at some of the code.

Obviously you can go to the GitHub repository and do a deep dive. But so if you look at here, this code snippet is from the user management service. And one thing I wanted to highlight here is that so obviously you're getting, you know, in the even body, you're getting the user detail. You get the tenant ID as well.

And by the way, this tenant ID is being generated by the registration service, which then invokes this service. Right? So you get all this information and then you have this cognitive client and you basically are creating a user inside cognitive at this point. This is where we are providing all the user attributes and these two attributes, if I just, you know, may pull [00:23:00] your attention here.

These are two attributes we call as custom attributes. So for those who, who understand how, how a and what custom attributes really means within within idp this is a way to add some sort of metadata to this user, right? So in this. We are saying that, okay, this user has a user role. Let's say tenant admin or tenant read only user and belongs to this particular tenant, which is being registered at.

Which was being registered, or what tenant this user really belongs to, right? So this is our way of telling inside the rdp, which user this tenant belong to. And the way we are enforcing this is by using custom, custom attributes. And on the right side this small court snippet is from the create tenant, from the tenant management service.

And this is where you have all those tenant attributes like name, address, email, et cetera, et cetera. But I am also saving an attribute called US API key [00:24:00] here as well. So what I do is, you know, I'm generating this API key as part of the illustration process. and mapping that API key to the tenant inside the standard management table.

And then, you know, we are also saving what user pool and app client this this this tenant is supposed to authenticate against. So in this case, you know, if you're generating a new user pool per tenant for the for, for, for the silo tenants this is where we are kind of saving all the information.

So basically all the tenant information is being saved inside, is done on

So at this point you know, you have onboarded a, a tenant into the system, right? Now you have a tenant admin who, who has access to your sample size application. And the next thing your tenant admin or your tenant user will do. It will try to, you know, log in into your application, into your SaaS application.

So this is actually your application, which they'll be using in long term. Like, it could be [00:25:00] like a storage as a service or some sort of e-commerce platform, right? So it's important to understand how the authentication and authorization really works in this whole multi-tenant complex system, right? So, Let's say a tenant user is trying to access the system, the first thing obviously you will do is you will ask them to provide their user and password credentials, right?

And, and basically in our case, since we are using cognitive, we are just redirecting that tenant to the cognitive hosted ui. Which provides this nice user and password. It's, it's something which is already built in. You don't have to build this userin password ui, right? So they will authenticate co.

So once the authentication is successful, cognitive will send back a jaw token. And it is jaw token, as I showed to you, you'll have tenant ID and, and use the role as, as custom attributes, right? So now what you will do is you will try to access the API gateway or. Ui, your sample sales application [00:26:00] will try to access the API gateway, and the first thing that happens in this whole workflow, it, you will hit that authorizer, which will first of all, make sure that your jaw token is valid.

It'll go back to the cognitive endpoint and make sure that your jaw token hasn't expired. It's, it's a valid token, and then it'll build something called as an authorizer policy. And this authorizer policy will do at least two things for now, right? First of all, based upon this user role, it'll say that, okay, you know what?

Is this user even authorized to access this endpoint? Right? So let's, let's say you have a read-only user. You don't want that read only user to access your post and put endpoints, probably you only want them to access get, right? So in that case this authorization policy will prevent you based upon the user role.

And then the second thing it'll do, it'll basically, you know, provide that API key, which is stores [00:27:00] management table. Enable the throttling. So, or in other words, it'll say that, Hey, this user or this tenant is only authorized to access your APIs, let's say a hundred times in a minute or a hundred times in an hour, and so on and so forth.

So, and then, you know, once this whole authorization process completes, once the JO token is validated, once you make sure that your, your quota tasks are well within the limits once you make sure that the authorization is, is valid then you actually go ahead and actually call. Relevant Lambda function, which is basically your compute layer, right?

So this is like a typical workflow that you follow. And, and I think the important things to highlight here was the whole concept around multitenancy in terms of how you ma manage API keys and how you validate job tokens here.

Just kind of diving deep into the code again, a little, Right. So this is again, a small chord snippet I took from the, from the GitHub [00:28:00] repository. And if you see this, a manager is basically a Python module. It's s lambda layer actually. So what we have is we have some methods inside the Lambda layer, which take the user role and tells you whether you should allow.

Method or whether you should deny methods, right? So in this case, I'm denying certain endpoints based upon certain user rules, and I'm allowing certain endpoints based upon certain user rules. And basically you just, you know, build that policy and pass to the author authorization policy as I was mentioning previously.

Now, The whole tenant isolation is a separate, So, so I, so I just talked about the whole authentication, authorization, how that works, right? The next, next thing I want to talk about was how do you actually enforce tenant isolation into the system? And what I really mean by that is like, let's say you have data from multiple tenants, multiple users inside your DynamoDB [00:29:00] or whatever data store of your choice, right?

How do you make. That one tenant is not able to access other tenant's data. Typically, like, you know, going back maybe 15 years back, you know, I, I would say that I, I will just write a we clause, right? Where customer it is to one where tenant it is go to abc and that will, that's probably sufficient, right?

But, but, but then, We are kind of handing over the whole security aspects of our system in the hands of developers, right? So what we are saying that, hey it's support developers to write a code and make sure you have everywhere, and then you test them and then you test them against all those security measures.

So typically that, that way of isolating tenants is prone to a lot of errors and lot of, you know, issues in general. In aws, you have a concept of iam and I'll show you how you can apply that. Typically to enforce tenant isolation. So first of all, in a silo model, assume that there is a [00:30:00] tenant now who is trying to access the system.

It has gone through all those authentication and authorization checks we just talked about. It's all good. And then now it's trying to access your lambda. So now in case of a silo model, we deployed separate Lambda functions and separate dynamo DB tables per tenant. So our isolation story is very simple in our case, right?

So in our case, all we are saying is that we will associate this this lambda function with an execution role. And this execution role have access to only this DynamoDB table, right? So this makes the whole tenant isolation story much more simpler. But in case of a pool model, you can imagine, you could just, when you have like a single Lambda function, when you have a single DynamoDB table shared across all the tenants, This way of isolating may not be sufficient, right?

So how do we solve that challenge? So in order to solve that challenge, we, we introduce a concept of dynamic policies. [00:31:00] And the way it works is you are able to, at run time, can inject a tenant ID into a dynamic policy. So this policy, by the way, is stored in some sort of configuration, right? So what you're doing is you are saying that, Hey, this policy allows you to.

Make these five actions on a Dynamo DB table on this particular table, but only allow an action to those rows, which start with the primary key of tenant id. Right? And in this case, this tenant ID is, is, is basically a placeholder, which gets injected at the run time. So let's, let's look, let's look at the code and how that actually works, right?

So, Imagine this. This is one of my code, which I have in my, in my lambda authorizer. And this method get policy for user, basically. It takes two arguments, right? User role and tenant id. And by the way, these two arguments are already available to us as part of the job token, right? So what we typically do is we decide that [00:32:00] for this user role, what kind of policy I need to implement, do I need to, you know, provide, like, get or just, or, or maybe maybe write as well.

And then this talent id, which we, which I get from the jo. Gets dynamically injected into that policy. And then I'm leveraging this service, which, which we call it as AWS sds, and passing that policy to get the credentials, which are now scoped to the tenant. In short, what we are trying to do is we are trying to enforce role level security inside DynamoDB, right?

So basically this is a way of implementing a role level security inside a DynamoDB table. By leveraging AWS Im policies and that, and these credentials which are now only a scope to their tenant are passed onto the Lambda function. And when the Lambda function is now trying to access the DynamoDB table, it will leverage.

And that these credentials to access the table, right? So in a typical database relational [00:33:00] database, you can think of it as a database user, right? So database users normally have access to, let's say only database one. Database two. So you create separate users to, to give access to different databases, and, and you basically make sure that, that that's how you enforce some sort of security.

In this case, we are, we are basically leveraging this. Dynamic policies to, to implement that kind of isolation in a, in a pool model. As I mentioned this, this context or these credentials are passed as to yo Lambda function as part of the context from the lambda authorizer. So this core I actually took from the Lambda authorizer, and this is basically the entire policy I was talking about, the authorization policy, right.

And, and there are a bunch of things that I'm doing here. So I'm passing those access. Secret key. I'm also passing the API key, which actually enforces the whole actually this is, this is where you actually enforce that whole usage. As well, right? So, so you basically pass all these information to your authorizer output.

And, [00:34:00] and now when you are into that whole authentication authorization workflow, right? So again, you're trying to access a system. This is an, this is a example where you're trying to access in a pool model. Your authorizer is now able to access that. Im SDS service I was talking about, to get that runtime acquired.

And pass those credentials to Lambda function. And when now this Lambda function is trying to access your Dynamo DB table, you have to make sure to pass, you know, these. So as long as you, you have that reusable data access layer, which you know passes the access secret key you can be assured that that rule level security is implemented because of the IM dynamic policy that we talked about.

One more thing I wanted to highlight at this point is how would you, you know, partition your dynamic OTB table? Right? So, if you remember the condition of the dynamic policy I was referring [00:35:00] to had a concept that, okay, only allow where 10, where, where your short ID starts with already primary key starts with a tenant.

Right. What tenant ID in, in your case? So now in this case, I have 1, 2, 3, 4 different roles for the tenant and a random suffix, right? So the reason I'm, I'm not really just putting tenant ID as the primary key is just to avoid that hot key issue, right? So I'm kind of distributing the workload or just distributing the data across multiple partitions but still, Be able to apply that condition by using a string like kind of fashion.

So basically all I'm, all I'm saying is that, hey, this policy is basically applicable where your primary key starts with tenant id. Right? If you want to think of that way, I mean, I, I, I totally understand this is a bit of a complex thing to understand If you, if you're not really used. This kind of terminology.

So I will highly recommend that you go [00:36:00] back and look at the guitar Repositive, which I'll just show you in a minute. And then just one more thing I wanted to cover. And then we'll, you know, up, see if you have any questions. Right. So there's one more thing I wanted to cover around the whole C I C D aspect of this, a solution, right?

Now you can imagine that, you know, you have all these environments, you have a pool environment, you have environment for tenant specific infrastructure. In a typical SaaS environment, right? Our goal should be to make sure that we deploy. Across all these environments in a consistent fashion. Right. In a, in a SaaS environment, you don't do like one of deployments that's an anti pattern.

You just deploy everything to all the tenants normally, and you try to keep your versions as much consistent as possible. Right. So the mechanism that we came up to do that was that we had a build pipeline. So, which this build pipeline was getting the source from the code repository. It was building it into an s3.[00:37:00] 

Any test you want to run, you can run right here. And then we were actually leveraging this table that we created as part of 10 onboarding itself. And if you pay attention, right, Basically what this start deployment code block is doing, it's basically looping through. Through this table and updating all these tags in a consistent fashion.

So in other words, you just, you know, get your source of truth from the code at one time. You build it one time and then you just deploy across all this environment. So this is a, a, a, a concept, which you can probably apply to any multi-tenant system. I mean, in case of eks, you have little bit more sophisticated open source tools to do.

But in case of servers, we build this build pipeline and deployment pipeline concept, which you can follow. There are more concepts, you know, I can go deep into, but I'll probably maybe just stop but just one, one, maybe, maybe couple of [00:38:00] minutes on this tenant whole routing mechanism, right? So now you have this whole concept of, you know, making sure that you.

Your tenants to the appropriate api, API gateway, right? So whatever resources for manner for the tenant, you want to make sure that you route and, and the way the routing typically works is you have some sort of way of identifying tenants in the ui, right? What we have seen customers doing is they follow an approach called Domain.

So sometimes tenant one dot SaaS application.com. Tenant two says application.com. So they build some sort of cu, you know, sub domains to, to kind of solve their challenge. In our case, we were just asking the tenant to provide the tenant name. And then we had an api, which basically took that tenant name and gave you back.

What API gateway URL this tenant should be pointing to. Like what user pool this tenant should be really pointing to, right? And then we just leverage those settings to redirect to the relevant cognitive user pool and [00:39:00] then to redirect to the relevant api, right? So this whole concept of routing is another kind of complex piece that you need to solve when you're building this whole multi-tenant hybrid kind of SaaS application.

So this is how the final. Architecture look like eventually. You have a CS c D pipeline, which takes care of deploying across this whole multi-tenant environment. I talked about all this different components already, right? And then your application services are now deployed in a hybrid model where you have pooled tenants and you have certain silos for certain tenants, right?

Okay. So there's a lot to lot to cover here, and there are a lot of concepts which I talked about in last, like 40 minutes. I, I would really, you know, encourage and appreciate if you want to, you know, follow some of the workshops that we have built around this. So if you are trying to build a SaaS application, a multi-tenant application using serverless I, I highly encourage you to you know, dive deep into the solution into this GitHub [00:40:00] repository.

And I think I think it you'll probably, definitely, definitely leverage and benefit a lot by following some of the best practices and, and, and, and the guidance that we have provide, try, try to provide here. All right. Thank you so much. And that's it from my said, Brian. I hope. Let's see if there are any questions 

**Brian Rinaldi:** there were definitely some questions and and folks if you wanna add some more questions, we've got time to answer them, but we did. Some questions and I, I'm grateful too cuz I, followed everything, but this is like a little bit above my pay grade, so I'm glad for the question. I'm like, I knew I've, I've dealt with some of these services and stuff inside aws, but never had to build a multi-tenant yeah.

SaaS application, even though I've worked for companies that have them, but but not actually done them myself. Okay, so I'll start getting to these, these questions. We've got one question here. When using Lambda authorizer with federated iden identity provider, what is the best [00:41:00] way to cash the auth token for some time instead of authorizing on every request in a serverless way?

**Anubhav Sharma:** Yeah, so Lambda Authorizer actually provides you cashing. It's, it's an inbuilt feature which Lambda authorizer provides you. All you have to do is just enable. The cashing you can cash. In fact, in our case, we were cashing for like five minutes. So whenever a new request comes in based upon the jaw token, it'll figure out, You basically provide, Okay.

What's your caching mechanism or what's, what's the key you want to use for cashing? Right, so it's basically cash on the jaw token. So it won't necessarily go and make that call every time. It'll just figure out that, hey, it's within their five minute range, so I'll just cash it and just authorize this at this particular job token.

So it's, it's a feature that's already built. Okay. 

**Brian Rinaldi:** So basically they don't need to do, really do anything. It's built in. Okay. Excellent. That's, well, that's easy. Alright, next question. We've got how much latency will be added for the additional sts? Assume role logic, is there a strategy to 

**Anubhav Sharma:** cash it?[00:42:00] 

Yeah, that, that's, that's a great question. And, and TAs, thanks for asking. I mean so I mean, I ran some. I think it was about like 200 millisecond or something when the last time I ran some tests. And and for that reason we are actually leveraging Lambed authorizer to generate the SDS credential.

And as I mentioned, we are cashing the Lambed authorizer as as well. Another approach which you can take is you can, you can generate the s space credential inside your microservices, right? So you can just take that whole SDS concept and generate them inside the Lambda function itself. That, that way you don't have to, but, but the whole point of doing inside Lambda authorizer was to just cash it and avoid that latency.

But there is definitely a very, very small latency that gets added. Typically, we have, we have seen, you know, customers not really, you know, bothering about that, you know, 200 millisecond or whatever. Actually it's even less than that. I might, I might have screwed up some numbers here, but it's definitely in milliseconds.[00:43:00] 

**Brian Rinaldi:** Okay, so, so not nothing, but, 

**Anubhav Sharma:** but not necessarily something to be aware of, honestly. Like, you know, if you have a very low latency application, something you should, you should be really concerned and aware, or aware of and make sure you test with, with the SDS and without TSDs and, and what behavior you are, you know, seeing an application.

It, it's worth considering as, as a, as a vehicle. Okay. Yeah. 

**Brian Rinaldi:** Excellent. Okay, so next question. This, he says, this is basically what we're doing at my current employer. The one thing that it doesn't allow for us is, is the use of direct integrations like appy or step functions. Mm-hmm. in things like appy or step function.

Is there a way to limit the access of those integrations? And if not, is, is this something AWS is think about at? 

**Anubhav Sharma:** So yes. I mean, , you, you are, you are kind of limited in this, in this model to introduce Lambda function even for a basic credit functionality, right? In some way or the other. [00:44:00] In case of Epsy, I think from what I, I can remember there is a way to do the direct integration as well.

I don't remember on top of my head on how to do it. I, I did at one point maybe as a follow up. I can try to find what I did a long time back. But, but eventually, Eventually, if you've enable direct integration, you will have to you know, somehow generate and pass the access and secret key as part of the direct integration as well.

Right. Which normally also there's a way to do it. Again, you have to, you know, build that inside your inside your cloud formation. So it's a complex solution, which, you know, we can, which I have worked on in past. But my advice would be to leverage Lambda function just to wider, complex. So the short answer is, you know, you'll be better off if you have alarm to function in between and provide you much more flexibility.

Okay. 

**Brian Rinaldi:** Okay. And then Jason commented that 200 milliseconds sounds like you're going from region, from a region that is not US [00:45:00] East one and going to the default US east one for the STS calls. 

**Anubhav Sharma:** Yeah. Again I need to go back and check my numbers. I mean I would, I would, I would maybe run, I ran the test like a year ago.

And there was some, definitely there was a lag and yeah, you are right. I mean, typically between US East one and maybe US west, that's pretty, pretty much the kind of latency. There's definitely an overhead to add SDS token to generate an SDS token. But as I mentioned, if you use alarm authorizer and you cash that, Latency or that, you know that latency becomes manageable.

Right? So because now you're not doing it on the every call, but rather every five to 10 minutes. Okay? 

**Brian Rinaldi:** Okay, we got one more question. If anybody wants to throw a last minute que I think we have a couple more minutes. But if, so, if you have an additional question, feel free to throw it in the chat or on the ask a question module.

While we answer this, this one here how can we make the dynamic policy to work with Dynamo single table design? What would be [00:46:00] the strategy for partition key for multi-tenant with single table design? 

**Anubhav Sharma:** Well, I mean, you, you don't even have to worry about dynamic policy for a single table, right?

Because as I mentioned, you. provide that in your execution role, which table you want to access. Right. So, So basically you can just say that, Hey, hey. So let me, if I just go back right, Maybe I can just show you Oh 

**Brian Rinaldi:** yeah, sure, sure. 

**Anubhav Sharma:** I'll share your screen again. Oh, okay. Yeah. So basically you don't need this whole condition block if it's, if it's just a table level isolation, right.

You can just say, Okay, ten one. I think I had a slide on that. This one, right? So basically you just associate the execution role with the lambda function itself, and you just say that, okay, you know, this lambda function is only required or it's only allowed to access table one, the standard one order table or order 10, one table, right?

So there's no need to for you to find your access. It's much simpler. [00:47:00] Say that your Lambda execution role has access to access only this DynamoDB table and, and basically you are not even allowed to access any other table. So it's all built as part of the Lambda execution role itself. Maybe just to clarify, there are like two, two different concepts we're talking about here.

There's a concept of Lambda execution. So basically when you create a new Lambda function, you have to tell, okay, hey, what permission this lambda function has, and that is governed by the Lambda execution rule. So what I'm trying to say is that when you just, you know, provide that as part of the execution rule itself, it's a much simpler model versus dynamic policy is inside your Lambda function, right?

It's inside, when it's basically a runtime construct, you, you can't apply that as part of the execution role itself. It gets much simpler just because of the execution role in a silo model actually. 

**Brian Rinaldi:** Okay. Alright, so I think that's all the questions we have. I shared the gift hub repo cuz this [00:48:00] what this is basically they can take this entire application and just modify it and build upon it and, and, and deploy their own Yeah.

**Anubhav Sharma:** In fact, essentially is what. , Exactly. If you share, if you share my screen again, Yes. You know, I'll probably just, you know. Yeah. So this is a workshop of the link I mentioned so this workshop actually do a good job in, in breaking out into steps, right? So this is a complicated thing to understand and to, you know, absorb in, in one goal.

So this workshop actually takes you through that whole journey. You know, it kind of first talks about. It talks about, you know, those says shared services. It talks about how to add multitenancy. Then it talks about the dynamic policy, then it applies those steering based concept and then and throttling.

And in fact, recently we also added this this lab seven into this workshop, which actually it talks about how you can attribute cost [00:49:00] in a pool model, right? And all those links I did mention at the end. Second. Yeah. This our shoveling first. 

**Brian Rinaldi:** Nancy. Nancy. Yeah. Nancy was asking if we can paste those into the chat or something so that they Yeah, 

**Anubhav Sharma:** yeah, yeah, yeah, 

**Brian Rinaldi:** yeah.

If you, if you, I don't know how to get them off. If Do you, are you on the, the Crowdcast chat? If you 

**Anubhav Sharma:** can paste them? I can. I can go there. Yeah. Sure. Okay. So Nancy, we'll, we'll get 

**Brian Rinaldi:** you those links. Otherwise you can maybe even just screenshot this right now, and save and get them off there as well.

So I, and in on above, if you send me, I can actually. Might be worth if you, if you don't mind sharing the slide deck and I'll, Of course I'll post it with the presentation on the site as well. Yeah, I know you can't click them off the screen. She she mentioned, but so we will, we will share them as well.[00:50:00] 

Well, I, I think that's, that's it for our time. I, this was , this was actually fabulous. I, I know there was a lot you covered a lot of stuff in a very short time, and I appreciate you kind of working to cram all that in for our 

**Anubhav Sharma:** Yeah. Sorry about that . I know, right? Yeah, that was great. Okay. Yeah, I mean yeah, yeah, please, please follow the links and you'll be fine if you, you want to dive deep further.

Okay. 

**Brian Rinaldi:** Okay. I will sh So folks, I will share those links as soon as I have them as well. And I will post. The once Anna above sends me if you go to the cfe.dev and you go to this event, I will actually post the link to the PDF as well.

