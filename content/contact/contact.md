---
title: "Contact Us"
date: 2017-07-12T18:52:51-04:00
weight: 4
menu:
  top:
    name: "Contact Us"
banner: "images/pages/subscribe.jpg"
draft: false
---

<form name="contact" netlify-honeypot="bot-field" action="/contact/thanks.html" netlify>
  <p style="display:none;">
    <label>Don’t fill this out: <input name="bot-field"></label>
  </p>
  <p>
    <label for="name">Name: </label>
    <input type="text" name="name" size="40" required>
  </p>
  <p>
    <label for="email">Email: </label>
    <input type="email" name="email" size="40" required>
  </p>
  <p>
    <label for="message">Message: </label>
    <textarea name="message" cols="40" required></textarea>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>