//window.onresize = bgAdjust();

function bgAdjust(){
	document.body.style.backgroundPositionY = (-(Math.floor(Math.floor(window.innerWidth) / 7)) + 55) + "px";
}