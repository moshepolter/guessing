const ranN = Math.floor(Math.random() * 29 + 1);
//random number
let count = 0;
function g (){
	const numP = document.getElementById("#").value;
	switch (ranN){
		case (ranN < numP):
		document.getElementById("displayNumber").innerHTML = `The number is higher. You have ${5 - count} attempts left`;
		break;
		case (ranN > numP):
		document.getElementById("displayNumber").innerHTML = `The number is lower, You have ${5 - count} attempts left`;
		break;
		case (numP == ranN):
		document.getElementById("displayNumber").innerHTML = `You Guessed The Right Number on attempt: ${count}. Thank You for playing`;
	}
		if (count > 5){
		document.getElementById("displayNumber").innerHTML = `Too many tries the answer is ${ranN}`;
			}
		count+=1;
		window.localStorage.setItem('number', ranN);
		console.log(window.localStorage.getItem('number'));	
}