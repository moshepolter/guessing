const ranN = Math.floor(Math.random() * 29 + 1);
//random number
let count = 0;
const g = () =>{
	//function gor guess
 	count += 1;
 	let attempt = 5 - count;
	if(count == 6 || attempt == -1){
		document.getElementById("displayNumber").innerHTML = `Too many tries the answer is ${ranN}`
		//how many clicks if more than 5 run this code
	}
	//if less than 5 continue running this code
	else{
		const numP = document.getElementById("#").value;
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
		
		window.localStorage.setItem('number', ranN);
		console.log(window.localStorage.getItem('number'));	
		
	}
};