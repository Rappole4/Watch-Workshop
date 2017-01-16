document.addEventListener("DOMContentLoaded",function(){
	var theDate = new Date;
	var one = document.getElementById('one');
	var two = document.getElementById('two');
	var three = document.getElementById('three');
	var body = document.getElementById('body');
	document.getElementById('one').innerText =theDate.getHours();
	document.getElementById('two').innerText=theDate.getMinutes();
	document.getElementById('three').innerText=theDate.getSeconds();
setInterval(function(){
	if (one.innerText==23&&two.innerText==59&&three.innerText==59){
			one.innerText=00;
			two.innerText=00;
			three.innerText=00;
			body.style.backgroundColor = "#"+"000000";
	}	else if (two.innerText==59&&three.innerText==59){
			two.innerText=00;
			three.innerText=00;
			one.innerText =parseInt(one.innerText) +1;
			body.style.backgroundColor = "#"+parseInt(one.innerText)+"0000";
	}	else if (three.innerText==59){
			three.innerText=00;
			two.innerText =parseInt(two.innerText) + 1;
			body.style.backgroundColor = "#"+parseInt(one.innerText)+parseInt(two.innerText)+"00";
	}	else (three.innerText=parseInt(three.innerText) + 1)
			body.style.backgroundColor = "#"+parseInt(one.innerText)+parseInt(two.innerText)+parseInt(three.innerText);
},1000)
});