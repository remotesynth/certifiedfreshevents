---
title: "Unravelling Git: The secrets of the commit hash"
date: 2025-04-25 11:00:00-04:00
end_date: 2025-04-25 11:30:00-04:00
event: virtual-coffee-conf-2025
speakers:
- mike-street
categories:
  - stuff
tags:
  - git
  - version control
recordings:
  youtube:
    url: https://youtu.be/qrnVwyp1SVo
    length: "25:28"
draft: false
---

Git is the most popular version control system used by developers, yet many of us take its inner workings for granted. In this talk, we’re going to demystify one of Git’s most critical—but often overlooked—components: the commit hash. What appears to be a mere string of random letters and numbers is actually a carefully constructed fingerprint of your code’s history. We’ll explore the inner mechanics of commit hashes, examining how they’re generated from various elements including the commit message, file changes, author details, timestamp, and even the parent commit. You’ll discover why a slight modification—such as amending a commit or rebasing a branch—results in an entirely new hash, and how understanding this process can help you navigate challenges like forced pushes and merge conflicts.