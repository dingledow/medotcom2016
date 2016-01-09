---
layout: post
title:  "Simple Static Web Server with 1 Line of Python"
date:   2014-07-23 21:29:00 +0000
permalink: blog/simple-static-web-server-1-line-python/
---

##Why static sites are great for small projects

There's plenty of tools out there for designers to show off their work, write blogs and communicate what they do on the web. For those that are diving into developing their own sites, often frameworks such as Django can be daunting and it's something that I'm still learning after a year of getting into it. On the other hand, tools such as Tumblr and Squarespace don't offer enough customisability for some. The answer for many is to build static sites. They're a great introduction to learning how to build something from scratch, as well as getting started with HTML, CSS and maybe even some JavaScript.

Once you've deployed your static site, they can often be much quicker for page load speeds because there isn't a framework having to process and fetch stuff from a database – this is awesome for improving rankings on search engines by the way!

##Why they suck...

The downside of static sites is when it comes to local development. I know I've been in the situation where my URL is something like this:

```
file:///Users/dingledow/Sites/...etc
```

This is just plain messy – bleurgh! It also makes it a pain to work with services like Typekit because they need to be passed a URL, whether that be a domain, localhost, or an IP address.

I've used services like MAMP/WAMP; messed around with nginx and Apache; and Fenix Web Server looks great, but I think in the long run, getting started with the terminal is a great tool to learn for anybody that enjoys designing and hacking with technology.

##The solution

Python has a great little command called SimpleHTTPServer to create a local static web server. To start it, just open the terminal and cd to the directory where your site is located and enter the following Python command:

```
python -m SimpleHTTPServer 8888
```

This will start a local web server on the IP address 0.0.0.0 on port 8888. You also get a log of all the HTTP requests that are made right in the terminal which can be great for debugging.

If you're unsure on how to change directory to where your site is located, it's fairly straightforward. For example, if my site is located in my Documents folder in the folder 'my_personal_site', all you would do would be:

```
cd Documents/my_personal_site/
```

TIPS: Use the tab key to autocomplete terminal commands. It's especially useful for navigating around directories. Also, it's best practice to not use spaces and keep everything lowercase for directory names, otherwise the above would be: `My\ Personal\ Site/` which is a bit messy.
