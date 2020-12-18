const ranN = Math.floor(Math.random() * 99 + 1);
const ran1 = ranN + Math.floor(Math.random() * 6 - 5);
const ran2 = ranN + Math.floor(Math.random() * 6 + 5);
//random number
const hint = () =>{
	//hint
	//if the number is 95 dont display between 90 and 105
	if (ranN >= 95) {
		alert("The number is over 95")
	} 
	//if the number is not over 95 display regular hint
	else {
		alert("Between " + ran1 + " and " + ran2)
	}
}

/*const hint = () =>{
	if(ranN + Math.floor(Math.random() * 5 - 5) <= 100){
		const m1 = ranN + Math.floor(Math.random() * 7 - 5) - (ranN + Math.floor(Math.random() * 7 - 5) < 100)
		console.log("The number is between " + m1 + "-" + 100)
	}
	if (ranN + Math.floor(Math.random() * 5 - 5) >= 0) {
		const m2 = ranN + Math.floor(Math.random() * 7 - 5) + (ranN + Math.floor(Math.random() * 7 - 5) < 0)
		console.log("The number is between " + m2 + "-" + 0)
	}
	else{
	console.log("The number is between " + ran1 + "-" + ran2);
	}

};*/
let count = 0;
const g = () =>{
	//function gor guess
	//if less than 5 continue running this code
	const numP = document.getElementById("#").value;
	if (numP <= 0 || numP > 100){
		document.getElementById("displayNumber").innerHTML = `You must enter a number 1 - 100`
	}
	else if(numP == ranN){
      //if you guessed the right number run this code
      document.getElementById("displayNumber").innerHTML = `You Guessed The Right Number on attempt: ${count + 1}. Thank You for playing`
      setTimeout(function() {location.reload()}, 5000);
    }
	else{
		count += 1;
		if(count > 9){
			document.getElementById("displayNumber").innerHTML = `Too many tries the answer is ${ranN}`;
			setTimeout(function() {location.reload()}, 5000);
			//how many clicks if more than 5 run this code
	}
	else{
	  if(numP < ranN){
      //if you guessed to high run this code
      document.getElementById("displayNumber").innerHTML = `The number is higher. You have ${10 - count} attempts left`;
    }
    else if (numP > ranN) {
      //if the number you guessed is to low run this code
      document.getElementById("displayNumber").innerHTML = `The number is lower, You have ${10 - count} attempts left`
    }
		//after first guess local storage says the number uncomment line below
		
		window.localStorage.setItem('number', ranN);
		console.log(window.localStorage.getItem('number'));	
		}	
	}
}
const r = () =>{
	location.reload()
}