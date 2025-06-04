---
_build:
  list: false
  render: never
---

**Kiah Imani:** [00:00:00] Hey everyone, I'm Kiah Imani, and today I am gonna talk about something a little bit wild, uh, breaking your own systems on purpose. Yeah. Welcome to the world of chaos engineering. You ever ship code and felt good about it and then bam, product explodes. What if you could test for those moments before they even happen?

That's exactly what chaos engineering is all about.

Chaos Engineering is like. Fire drills for your infrastructure. You simulate failures on purpose to see how your system handles it. [00:01:00] It's not about causing mayhem. It's about building resilience.

Downtime is expensive. Bugs and production are stressful. Chaos engineering helps you catch weak spots early. Fix them fast and boost team's Confidence

is really like a scientific method. You pick a part of your system, you form a hypothesis, you run a small failure experiment, you observe what happens, and then you learn and improve. Even Netflix, a company that invented chaos engineering still has outages. Despite all their tooling and testing, they've had real incidents caused by [00:02:00] unexpected dependencies, bad deploys, or cloud provider issues.

The lesson I would just happen, but chaos engineering can make them less painful. Less frequent and way less surprising. Here are some of the tools that make chaos engineering easier and safer for everyday teams. Of course, we have Chaos Monkey, which is Netflix's OG tool. It randomly shuts down services to test system resilience.

Litmus Chaos is another good one. It's an open source tool that runs chaos experiments. It's specifically for Kubernetes environments, so that's great if you're running microservices. Gremlin is a more commercial platform that makes, uh, chaos testing very structured, um, and it's got some really good team friendly features.[00:03:00]

And my personal favorite LocalStack's Chaos dashboard. Allows you to simulate AWS service failures on your laptop, which is perfect for developers who want to experiment in a controlled local setup. So you don't have to be Netflix to do this. Pick one tool, start small and test one thing, even a tiny experiment.

Gives you insights you wouldn't get with logs or unit tests. Some popular chaos experiments you can do are you can kill a server or container. You can add network latency. You can crash the database if you want to, or you can simulate a third party outage like from a cloud provider. Just remember, start small and keep the blast radius tight.[00:04:00]

Plan your chaos, monitor everything, and always, always, always have a rollback plan. You're not here to destroy things. You're testing assumptions and building confidence.

Okay, so here's the deal. If you've ever said, it works on my machine. This talk was for you. Try one chaos experiment this week. Break something in staging, key word staging and see what you learn. You'll build better systems and stronger teams. Thanks for watching. I'm Kaya Imani, and you can find me at Black Girl CTO everywhere on the internet.

Um, also feel free to [00:05:00] scan my QR code for all of my links and resources regarding this talk. And if you try chaos engineering or have a great war story, I wanna hear about it. Hit me up Until next time y'all later.