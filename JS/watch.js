document.addEventListener("DOMContentLoaded",function(){
	var theDate = new Date;
	var one = document.getElementById('one');
	var two = document.getElementById('two');
	var three = document.getElementById('three');
	var body = document.getElementById('body');
	document.getElementById('one').innerText =theDate.getHours();
	document.getElementById('two').innerText=theDate.getMinutes();
	document.getElementById('three').innerText=theDate.getSeconds();
	body.style.backgroundColor = "#"+parseInt(one.innerText)+parseInt(two.innerText)+parseInt(three.innerText);
	function zero(i) {
		if (i<10){
			return "0"+i;
		} return i;
	}
	function over(m) {
		if (m>12) {
			return m-12;
		} return m;
	}	
setInterval(function(){
	if (one.innerText==12&&two.innerText==59&&three.innerText==59){
			one.innerText="0"+1;
			two.innerText="0"+0;
			three.innerText="0"+0;
			body.style.backgroundColor = "#"+"000000";
	}	else if (two.innerText==59&&three.innerText==59){
			two.innerText="0"+0;
			three.innerText="0"+0;
			one.innerText =over(parseInt(one.innerText) +1);
			body.style.backgroundColor = "#"+parseInt(one.innerText)+"0000";
	}	else if (three.innerText==59){
			three.innerText="0"+0;
			two.innerText =zero(parseInt(two.innerText) + 1);
			one.innerText =over(parseInt(one.innerText) + 0);
			body.style.backgroundColor = "#"+parseInt(one.innerText)+parseInt(two.innerText)+"00";
	}	else (three.innerText=zero(parseInt(three.innerText)+1))
			zero(parseInt(two.innerText));
			over(parseInt(one.innerText));
			body.style.backgroundColor = "#"+zero(parseInt(one.innerText))+zero(parseInt(two.innerText))+zero(parseInt(three.innerText));
},1000)
});