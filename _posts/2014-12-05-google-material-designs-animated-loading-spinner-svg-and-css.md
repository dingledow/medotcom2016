---
layout: post
title:  "Google Material Design's Animated Loading Spinner Using HTML, CSS and SVG"
date:   2014-12-05 21:29:00 +0000
permalink: blog/google-material-designs-animated-loading-spinner-svg-and-css/
---

At [SoPost](https://www.sopost.com/), we've been inspired by some of the principles put forward in Google's Material Design. One element that we thought could be really useful as a feedback mechanism in our user journey was the loading spinner. Creating it in HTML, CSS and SVG allows us to change the colour to fit in with the brand on a per campaign basis.

I have recently stumbled upon [jczimm's version](http://codepen.io/jczimm/) built purely in HTML, CSS and SVG.

I'm going to break down exactly how this works in a future update to this post, but for now, here's the code for a Material Design spinner:

##Demo

<p data-height="190" data-theme-id="10772" data-slug-hash="vEBpoL" data-default-tab="result" data-user="jczimm" class='codepen'>See the Pen <a href='http://codepen.io/jczimm/pen/vEBpoL/'>Modern Google Loader in Pure CSS</a> by jczimm (<a href='http://codepen.io/jczimm'>@jczimm</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

##HTML with inline SVG

{% highlight ruby %}
<div class="loader">
  <svg class="circular">
    <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
  </svg>
</div>
{% endhighlight %}

##SCSS

{% highlight ruby %}
$green: #008744;
$blue: #0057e7;
$red: #d62d20;
$yellow: #ffa700;
$white: #eee;

$width: 100px;

body {
  background-color: $white;
}

.loader {
  position: absolute;
  width: $width;
  height: $width;
  left: 50%;

  top: 20%;
}

.circular{
 animation: rotate 2s linear infinite;
 height: $width;
 position: relative;
 width: $width;
}


.path {
  stroke-dasharray: 1,200;
  stroke-dashoffset: 0;
  animation:
   dash 1.5s ease-in-out infinite,
   color 6s ease-in-out infinite
  ;
  stroke-linecap: round;
}

@keyframes rotate{
 100%{
  transform: rotate(360deg);
 }
}
@keyframes dash{
 0%{
  stroke-dasharray: 1,200;
  stroke-dashoffset: 0;
 }
 50%{
  stroke-dasharray: 89,200;
  stroke-dashoffset: -35;
 }
 100%{
  stroke-dasharray: 89,200;
  stroke-dashoffset: -124;
 }
}
@keyframes color{
  100%, 0%{
    stroke: $red;
  }
  40%{
    stroke: $blue;
  }
  66%{
    stroke: $green;
  }
  80%, 90%{
    stroke: $yellow;
  }
}
{% endhighlight %}
