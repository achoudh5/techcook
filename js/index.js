// alert("Hello  from Javascript!");
// console.log("Hello from console!");



// let y=10

// if (y<10){
// 	console.log("y is small")
// }


function onButtonClick(){
	let firstnumber = parseFloat(document.getElementById("firstnumber").value);
// console.log("first number:" + firstnumber);

let secondnumber = parseFloat(document.getElementById("secondnumber").value);
// console.log("second number: " + secondnumber);

let operator = document.getElementById("operator").value;

let result = 0;
if (operator == '+')
{
	result = firstnumber + secondnumber;} 
	else if (operator == '-'){
	result = firstnumber - secondnumber;}
	else if (operator == '*'){
	result = firstnumber * secondnumber;}
	else if (operator == '/'){
	result = firstnumber / secondnumber;}

	let resultField = document.getElementById("result")
	resultField.innerHTML ="Result: " + result;
	

}