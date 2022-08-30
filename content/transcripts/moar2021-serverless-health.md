---
_build:
  list: false
  render: never
---

**Denis Bauer:** [00:00:00] Hello, everyone. It's fantastic to be here with you today at more servers. My name is Dr. Dennis Bower I'm and the research scientist professor at an Australian university and an AWS. And today I want to talk to you about how we're using serverless in order to tackle human health problems. By the end of the talk, I hope that I have convinced you that other than the usual arguments for serverless, like being scalable and being cheap, serverless has other benefits as well.

We can develop solutions much faster. We can cater for global. And we can democratize access to quality solutions. And I want to convince you by telling you three stories [00:01:00] about three application cases, the first one is around how we're using serverless as a modular toolbox, where we bring in the right analysis technology in order to answer scientific questions, which helps us stay ahead of the pandemic.

The second one is around how we're using servers as a load balance. and analyzing the unprecedented data volumes that are available for the COVID 19 virus. And the last one is around how we're using it as a supercomputer in order to revolutionize medical research and applications and to something impossible, like curing genetic diseases.

But before we do that, allow me to introduce the research organization that I'm part of, which is Australia's government research. Here. We're very passionate about translating research into products that people use in their everyday lives. I'm specifically part of the eHealth research program, which is the largest digital health initiative in [00:02:00] Australia and worldwide, quite unique and covering this full value chain from basic sciences all the way up to bringing health technology and services into the clinical.

The products that we have developed are for example, the on server, which is now used as the ontology server of Australia and England, as well as the smarter, safer home ecosystem package, which allows elderlies to live home independently for longer using sensors and technology around the house, as well as variance back, which is our machine learning package for analyzing genomic data and finding disease.

It can analyze a trillion data points and was the first digital health product on the AWS marketplace from a public sector organization. So we all heard that COVID 19 is mutating and it does that because it has to adapt to its new human host. [00:03:00] So when it jumps from person to person, it accumulates mutations changes to its genetic cult and those changes.

Can potentially make it more infectious to spread easier or cause a more severe disease outcome either way. It's really important to monitor those changes. And we're doing that with a serverless web app here. We can basically take the fingerprint of two virus isolates or two virus forms and compare them in.

Evolutionary space. And the distance between them is basically the physical space of how far apart they are. In a mutational sense, doing this was quite simple. When only a few genomic data points were available, but by now the largest genomic data set dis eight records over 2 million virus isolates that were sequenced from around the world.

Being able to [00:04:00] draw this 2d evolutionary map for that many sequences required us to change the analysis platform, the core of the application case. And we were able to do that because with servers, we can individual models, replace them with a more fit for purpose application case that can scale to the 2 million data points that we have available without having to redesign the whole applic.

And this brings me to the second story around balancing large amounts of data and how to analyze that kind of task for this. We have developed a solution that can track individual mutations of concern. It enables researchers and pathology labs to see which countries they're spreading in and how fast they're spreading.

In order to do this, we had to handle 60 billion data points that are the 2 [00:05:00] million samples from around the world and 30,000 bases, which is a genome, the size of the genome of COVID 19 virus in order to do that, we're splitting individual task into smaller chunks so that they can handle it in peril and be analyzed in per.

It therefore reads in the actual data from S3 into a Lamba function process that, and puts it back into a DynamoDB as well as a S3 directly in order to handle the data. And then the web service is reading out that information generalizing from there and using serverless as a cheap super computer is basically what the last story is.

here. We're working together with our clinical collaborators in order to do the impossible to solve and cure genetic diseases. In this particular case, it is a liver disease that is caused by a single misspelling [00:06:00] in the liver tissue and bringing in a new technology called CRISPR and genome engineering technology that can go into the tissue that is disease.

Liver and make the change at a specific location in the genome. There is basically what crisp bay is about. The only problem there is that our genome is large, stretched out. It's about two meters long, and we have 1 trillion cells in our body. therefore, this is like the space of the galaxy that we're dealing with here.

And the analogy will be like landing a spaceship somewhere, very precise and specific somewhere in the galaxy in order to make the change to a specific location, to a specific cell and location in the genome. As you can imagine, there's a lot of compute power required in order to find this perfect landing spot in the D.[00:07:00]

So in 2016, we started developing our surge engine for the genome, which allow us to find the perfect site for the CRISPR, for the machine on editing engineering mechanism, to interact with the genome. Again, we're using the concept of paralyzing out large tasks in order to do that kind of analysis.

Unlike the previous example where the computer was the issue in this particular case, it's the memory that was the issue crunching in the human genome into a Lamba function was quite difficult back then. And it still is. Therefore we splitting up the human genome into an individual task that can fit a lamb function more comfortably, and then spinning out multiple lamb function in order to analyze the full.

also bringing in the concept of modules because the individual genome engineering tasks sometimes [00:08:00] require different approaches. We're using purpose build or different analytics tools in order to cater for these individual tasks. So rather than writing a whole new application, all we need to do is switch out module a with module B, which is better catered for the application case that we're looking for.

And off we go. Amber from my talk is that serverless helps us develop solutions faster because it is modular. We can pluck in the right fit for purpose analysis module. In order to answer the question that we had and stay ahead of the pandemic by really understanding evolution. It also scales to the unprecedented demands of the data volumes that we have to deal with here, where we can identify a single mutation or sets of mutations in the 60 billion genomic data points that we have available.

[00:09:00] And lastly, it democratizes access to high quality analytic solutions. For example, which one day will help us cure genetic disease. With this. Thank you very much for listening. And let me know if you have questions, talk to you soon.
