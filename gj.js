const ranN = Math.floor(Math.random() * 29 + 1);
//random number
let count = 0;
const g = () =>{
	//function gor guess
	//if less than 5 continue running this code
	count += 1;
		const numP = document.getElementById("#").value;
		if (numP > 30 || numP < 1){
			if (count > 4){
				document.getElementById("displayNumber").innerHTML = `Too many tries the answer is ${ranN}`
			}
			else{
			document.getElementById("displayNumber").innerHTML = `The number is between 1 and 30 You have ${5 - count} attemts left`;
		}
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
    else if(numP == ranN){
      //if you guessed the right number run this code
      document.getElementById("displayNumber").innerHTML = `You Guessed The Right Number on attempt: ${count}. Thank You for playing`
    }
		//after first guess local storage says the number uncomment line below
	if(count > 4){
		document.getElementById("displayNumber").innerHTML = `Too many tries the answer is ${ranN}`
		//how many clicks if more than 5 run this code
	}
}
		
		window.localStorage.setItem('number', ranN);
		console.log(window.localStorage.getItem('number'));	
		
}

