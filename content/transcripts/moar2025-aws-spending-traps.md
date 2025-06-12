---
_build:
  list: false
  render: never
---

**Lewis Sawe:** [00:00:00] You have successfully migrated to the cloud. Your apps are humming, the dashboards look great, and everything feels like it's under control. Until the first bill lands. Your eyes scan the numbers, Your heart skips a beat and this sinking feeling steps in. How do we spend that much? You are not alone Many teams fall into the same traps Hidden costs, overlooked services, and budget leaks that lightly drain your cloud spend like a hole in the hull But it doesn't have to be this way Today I am pulling back the curtain on the most common and costly cloud money pits and showing you exactly how to plug them before your cfo comes knocking on your door Welcome to [00:01:00] cloud cost control Avoiding the money pits of AWS and together We are going to take back control of the cloud budget AWS and every other cloud service provider and very fantastic tools for businesses to grow But if you are not careful, the flexibility of AWS can lead to some of the very nasty surprises when the bill arrives.

Many companies end up paying way more than they expected, simply because of mistakes and oversights. Let's walk through some of the most common ones. Number one, unmonitored and unused resources. Let's start with the digital equipment of leaving all the lights on when you leave home. Everyday, thousands of dollars disappear into the AWS ether because of forgotten resources.

That development server that you spun up for a quick test three months ago? [00:02:00] Still running. Those EBS volumes detached from terminated instances? They're still charging you. Those load balancers serving zero traffic? They're not free. The solution is regular housekeeping. Use AWS Quest Explorer to identify those zombie instances and use Trusted advisor to hunt them down.

Better yet, implement automated shutdown policies for non-production environments. A simple Lambda function can save you thousands of dollars. 2. Over-provisioning of resources. We are all been there. Selecting that extra large instances just to be safe. It's the cloud equivalent of buying a Ferrari to drive to the store.

The beauty of the cloud is it's elasticity, yet many of us still provision like we are buying physical hardware. Start small and scale up when [00:03:00] needed. AWS Compute Optimizer is your friend here. It analyzes your usage patterns and make right-sizing recommendations. Remember, you can always scale up in minutes if needed but those oversize instances are costing you real money every hour they run.

Number 3, missing out on discounts. If you are paying on demand prices for everything, you might as well be throwing money in the digital shredder. AWS offers substantial discounts through reserved instances and savings plans. For predictable workloads, reserved resources can save up to 75% compared to on-demand pricing For more flexible needs, saving plans provide significant discounts with less commitment The most expensive AWS service is the one you haven't optimized Use Cost Explorer to identify [00:04:00] commitment opportunities And often the savings can fund entire new projects .

Data transfer costs. Data transfer is the silent budget killer. It lurks in the shadows of your architecture diagrams waiting to surprise you on your bill. Inter-region transfers and outboard traffic to the internet aren't free and they add up very quickly. A single terabyte of data transferred between regions can cost you hundreds of dollars.

Design with data gravity in mind. Keep your resources in the same region if possible. Use AWS Cloudfront for content delivery and ensure it allots for unusual transfer patterns. Your wallet will very much thank you for it. Number 5: [00:05:00] unoptimized storage. In particular, S3. S3 is very simple to use but deceptively complex to optimize. When your organization treats all data equally, storing everything in premium tiers, never implementing lifecycle policies, the result: paying premium prices for storing logs from 2019 that you'll never look at again. To automatically move edging data to cheaper storage classes Glacier Deep Archive can store your data for just $1 per terabyte per month That's 23 times cheaper than standard S3 storage solution So look into optimising your storage Number six Lack of tagging and visibility Without proper tagging cloud costs are a black box. You know you're [00:06:00] spending money but you can't tell where, who's responsible and which objects are budget vampires.

Implement a consistent tagging strategy includes AWS Cost Allocation Tags. Generate reports by department, project and environment. Suddenly those costs become transparent, and teams become more cost conscious when they know they're spending is very visible to everybody. Number 7, ignoring auto-scaling. When your scaling is like trying to adjust your home's temperature by adding and removing heaters, it's very innefficient and frustrating.

Configure auto-scaling for dynamic workloads. Schedule scaling actuals for predictable patterns. Does your development environment really need to run at full capacity over the weekend? Probably not. A [00:07:00] well configured auto-scaling can reduce your compute costs by 40-70%, while maintaining performance during peak times.

Number 8: not setting budget alerts. Flying blind on your spending is a recipe for bill shock. Without alerts, the first sign of a problem is often the jaw-dropping monthly bill. Set up budgets with notification thresholds. 80% of the budget is a good starting point. Configure AWS Cost Anomaly Detection to catch your unusual spending patterns. These early warning systems give you time to investigate and correct issues before they become financial emergencies to you.

And lastly, number 9: overly complex architecture. Sometimes, less is more. Over-engineering creates unnecessary [00:08:00] costs through redundant systems and excessive layers of services. Apply the AWS Well-Architected Framework to balance cost-optimization with reliability. Not every application needs multi-region failover or five 9s availability. Design for appropriate resilience not maximum theoretical protection.

Regular architecture reviews can idenitify and simplification of opportunity that would improve performance and reduce costs.

In conclusion, the cloud is very flexible and efficient but achieving cost optimization requires vigilance and strategy. The good news is the same AWS that builds you also provides you powerful tools to help you control these costs. Cost Explorer, Trust Advisor, Computer Optimizer [00:09:00] and very many tools available. They are essential instruments in your cloud financial toolkit. Remember, cloud cost optimization is an ongoing process. Schedule regular reviews. Adjust as workloads evolve and celebrate the wins when you drive costs down. In the cloud, ignorance is very expensive, but, with strategies, you can transform it to a very competitive advantage. Thank you for joining me today on the Moar Serverless day, enjoy the rest of the talks. This has been your speaker, David Sawe.

Goodbye.

