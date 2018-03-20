// 1. Get values from query params in URL
let url = new URL(document.location.href);
let params = new URLSearchParams(url.search);
let img_url = params.get('img-url');
let msg = params.get('msg');

let setTimeout = 4;
// 2. Get the <img> and <p> element

// 3. Change the innerHTML of the <p> element

pTag = document.querySelector('#message');
pTag.innerHTML = msg
// 4. Change the src attribute of <img> element
imgTag = document.querySelector('img');
imgTag.src = img_url


//challenge




// setTimeout(defaultlink, 3000);


function defaultlink(){
	pTag = document.querySelector('#message');
	pTag.innerHTML = 'OOPPSSS!!!No more massage'
	imgTag = document.querySelector('img');
	imgTag.src = 'http://via.placeholder.com/400x400'		
}
 // timerrrrr

 interval = setInterval(runfunc,1000);
 show = document.querySelector('#woo');

 function runfunc(){
 	if(setTimeout == 0){
 		clearTimeout(interval);
 		defaultlink();
 		show.setAttribute("style","display: none;")
 	}
 	else {
 		show.innerHTML = setTimeout;
 		setTimeout -= 1;
 	}
 }

