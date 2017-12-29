---
title: "Contact Us"
date: 2017-07-12T18:52:51-04:00
weight: 4
banner: "images/pages/subscribe.jpg"
draft: false
---

<form name="contact" netlify-honeypot="bot-field" action="/contact/thanks.html" netlify>
  <p style="display:none;">
    <label>Don’t fill this out: <input name="bot-field"></label>
  </p>
  <p>
    <label>Name: <input type="text" name="name" size="40"></label>
  </p>
  <p>
    <label>Email: <input type="text" name="email" size="40"></label>
  </p>
  <p>
    <label>Message: <textarea name="message" cols="40"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>