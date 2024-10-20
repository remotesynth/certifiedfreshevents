---
categories:
- software
date: 2024-03-26 13:00:00-04:00
draft: false
featured: true
recordings:
  youtube:
    length: '1:04:20'
    url: https://youtu.be/lyc61RqKFvE
speakers:
- bill-tarr
- jason-wadsworth
- andres-moreno
- seth-geoghegan
tags:
- serverless
- aws
- step functions
title: SaaS Orchestration with AWS Step Functions
---


We'll have 4 lightning talks covering a wide array of uses for step functions within a SaaS application.

### SaaS Fundamentals for Orchestration
*Speaker: Bill Tarr*

SaaS is more than just an application. It includes concepts and practices like Control Planes, Frictionless Onboarding, Configuration Management, and DevOps practices. In this section, we'll identify these building blocks, and consider what orchestration means and where it may fit into our SaaS solutions.

### Using Step Functions to Achieve Lambda-less AppSync for SaaS
*Speaker: Jason Wadsworth*

As a builder of SaaS software, do you find yourself looking at AppSync direct integrations with a bit of jealousy? I'll talk about how you can use Step Functions directly integrated with AppSync to access DynamoDB without the need for a Lambda function, all while maintaining tenant data isolation.

### Step Functions to Coordinate Tasks
*Speaker: Andres Moreno*

When you offer software as a service you'll need a strategy to import your clients data to continue operations. Andres will go over an approach to migrate data using Step Functions to coordinate different tasks allowing scale to reduce processing times while also getting the necessary visibility to track workflow.

### User Onboarding with Step Functions
*Speaker: Seth Geoghegan*

User onboarding is a core concern of any SaaS solution.  In this section, we'll discuss how Nerdy leverages AWS Step Functions to deliver a robust and fully automated onboarding experience.