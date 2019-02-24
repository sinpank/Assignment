var timer;
function settimer(){
	
	clearInterval(timer);
	var day = document.getElementById("day").value;
	var month = document.getElementById("month").value;
	var year = document.getElementById("year").value;
	console.log(year);
	var hour = document.getElementById("hour").value;
	var minute = document.getElementById("minutes").value;

	var deadline = year+"/"+month+"/"+day;
	console.log(deadline);
	var seconds = 1000;
	var minutes = seconds*60;
	var hours = minutes*60;
	var days = hours*24;
	var oneDay = 24 * 60 * 60 * 1000;
	
	function showtime(){
		var end = new Date(deadline);
		console.log(end);
		var current = new Date();
		console.log(current);
		
		var rem = end-current;
		console.log(rem);
	if(rem<0){
		clearInterval(timer);
		document.getElementById("value").innerHTML = 'Reached!';
		return;

	}
	var rdays = Math.floor(rem/days);
	var rhours = Math.floor((rem%day)/hours); 
	var rminutes = Math.floor((rem%hours)/minutes);
	var rseconds = Math.floor((rem%minutes)/seconds);

	document.getElementById("value").innerHTML = rdays + 'Days ';
  	document.getElementById("value").innerHTML += rhours + 'Hrs ';
  	document.getElementById("value").innerHTML += rminutes + 'Mins ';
  	document.getElementById("value").innerHTML += rseconds + 'Secs';	
}
	timer = setInterval(showtime,1000);

}