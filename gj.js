const ranN = Math.floor(Math.random() * 29 + 1);
//random number
let count = 0;
const g = () =>{
	//function gor guess
	//if less than 5 continue running this code
		const numP = document.getElementById("#").value;
		if (numP <= 0 || numP > 30){
			document.getElementById("displayNumber").innerHTML = `You must enter a number 1 - 30`
		}
		    else if(numP == ranN){
      //if you guessed the right number run this code
      document.getElementById("displayNumber").innerHTML = `You Guessed The Right Number on attempt: ${count + 1}. Thank You for playing`
      setTimeout(function() {location.reload()}, 2000);
    }
		else{
		count += 1;
			if(count > 4){
		document.getElementById("displayNumber").innerHTML = `Too many tries the answer is ${ranN}`;
		setTimeout(function() {location.reload()}, 2000);
		//how many clicks if more than 5 run this code
	}
	else{
	  if(numP < ranN){
      //if you guessed to high run this code
      document.getElementById("displayNumber").innerHTML = `The number is higher. You have ${5 - count} attempts left`;
    }
    else if (numP > ranN) {
      //if the number you guessed is to low run this code
      document.getElementById("displayNumber").innerHTML = `The number is lower, You have ${5 - count} attempts left`
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

