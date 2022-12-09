var stars = document.getElementById('stars')
var moon = document.getElementById('moon')
var mountains3 = document.getElementById('mountains3')
var mountains4 = document.getElementById('mountains4')
var river5 = document.getElementById('river5')
var boat = document.getElementById('boat')
var stars = document.getElementById('stars')
var nouvil = document.querySelector('.nouvil');
window.onscroll = function (){
	var value = scrollY;
	stars.style.left=value+'px';
	moon.style.top = value*4+'px'
	mountains3.style.top = value * 2 +'px';
	mountains4.style.top = value *1.5 +'px';
	river5.style.top = value +'px'
	boat.style.top = value + 'px'
	boat.style.left = value*3 + 'px'
	nouvil.style.fontSize = value + 'px'
	if(scrollY >= 67){
		nouvil.style.fontSize = 74+'px';
		nouvil.style.position = 'fixed';
		if(scrollY>=456){
			nouvil.style.display='none';
		}else{nouvil.style.display='block'};
		


		}
	}


	


