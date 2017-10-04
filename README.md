# Redline Website

I made this site for an assignment. I made the title font of the site from scratch using Birdfont, importing it through CSS. The background was set to 100% with no repeats, and then I made a javascript function to smoothly reposition it as the page is scaled, on load, or the window resizing, so the title always lines up with the line in the background.

It does so in the following line of code:
document.body.style.backgroundPositionY = (-(Math.floor(Math.floor(window.innerWidth) / 7)) + 55) + "px";

I floor the values to throw out the floating point, which I believe slightly reduced the processor usage. I tried the same effect in CSS with the Calc() function, but it had about the same processor usage as javascript, so I stuck with javascript because the math was easier.

Page is viewable at:
https://evilagram.github.io/Redline-Website/
