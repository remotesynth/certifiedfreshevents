---
title: DevOps
date: 2023-07-09T11:00:00-04:00
featured_sessions:
  - using-containers-responsibly
  - haunted-devops-distributed-trace
  - github-actions
  - rebrand-feature-flags
  - your-first-kubernetes-cluster/
tags:
  - devops
  - containers
  - continuous-integration
  - continuous-delivery
  - kubernetes
speakers:
  - melissa-mckay
  - brian-douglas
  - brian-benz
  - ixchel-ruiz
faqs:      
  -
    question: What is CI/CD?
    answer: |
      CI/CD stands for Continuous Integration/Continuous Delivery (or Continuous Deployment). It's a set of practices and processes in software development that aim to automate and streamline the building, testing, and deployment of applications. Continuous Integration focuses on frequently merging code changes across a team of developers into a shared repository. Each integration triggers an automated build and a series of automated tests to verify that the new code functions properly with the existing codebase without introducing errors. Continuous Delivery/Continuous Deployment are processes for automating the delivery of software to production, releasing of code changes directly to production without human intervention, as long as all automated tests pass.
  -
    question: What is the DevOps Infinity Loop?
    answer: |
      The DevOps infinity loop, often depicted as an infinity symbol, represents the continuous and cyclical nature of DevOps processes. It's a visualization that embodies the iterative nature of DevOps practices, illustrating the continuous loop of development, operations, and feedback, which is vital to its philosophy. Here's a breakdown:

      1. Develop: This stage involves the creation of software or features. Development teams write code, build applications, and work on new functionalities.
      2. Build: After the development stage, the code is compiled, tested, and assembled into a deployable form. This might involve integration with other components or systems.
      3. Test: The built code goes through various testing phases—unit tests, integration tests, and possibly user acceptance tests—to ensure it functions correctly and meets quality standards.
      4. Deploy: Once the code passes testing, it's deployed to production or staging environments. Deployment might involve automation and use of CI/CD pipelines for a smoother release process.
      5. Operate/Monitor: This stage involves the ongoing monitoring of the deployed software. Operations teams keep an eye on performance, logs, and user feedback to ensure everything is functioning as expected.
      6. Feedback: Feedback from the operational phase is crucial. It might be from users, system metrics, or any anomalies detected. This information feeds back into the development phase, guiding future improvements or iterations.
---

Releasing software has always been a complicated process filled with potential pitfalls. Releasing software that has a critical bug can be catastrophic but releasing to slowly and cautiously can also harm your ability to compete effectively.

DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) with the goal of shortening the software development life cycle while delivering features, fixes, and updates frequently and safely. It involves automating processes, adopting agile methodologies, using tools for continuous integration and continuous delivery (CI/CD), and fostering a culture of collaboration and shared responsibility among development, operations, and quality assurance teams. DevOps seeks to enhance the speed, efficiency, and quality of software development and delivery by breaking down silos between different functions and promoting a more streamlined, automated, and collaborative approach to software development and deployment.