const ranN = Math.floor(Math.random() * 30);
//random number
let count = 0;
const g = () =>{
	//function gor guess
 	count += 1;
	if(count > 5){
		alert('to  many tries');
		//how many clicks if more than 5 run this code
	}
	//if less than 5 continue running this code
	else{
		const numP = document.getElementById("#").value;
	   if(numP < ranN){
      //if you guessed to high run this code
      alert(`the number is higher, Attempt: ${count} you have ${5 - count}, attempts left`)
    }
    else if (numP > ranN) {
      //if the number you guessed is to low run this code
      alert(`the number is lower, Attempt: ${count}, you have ${5 - count} attempts left`)
    }
    else if(numP == ranN){
      //if you guessed the right number run this code
      alert(`You Guessed The Right Number on attempt: ${count}. thank you for playing`);
    }
		//after first guess local storage says the number uncomment line below
		
		window.localStorage.setItem('number', ranN);
		console.log(window.localStorage.getItem('number'));	
		
	}
};