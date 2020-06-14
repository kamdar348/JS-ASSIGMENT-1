var inputvalue = window.prompt("Please type a character or number");
				
if(inputvalue.charCodeAt() >= 65 && inputvalue.charCodeAt() <= 90) {
	alert("UPPERCASE: " + inputvalue);
} else if(inputvalue.charCodeAt() >= 97 && inputvalue.charCodeAt() <= 122) {
	alert("LOWERCASE: " + inputvalue);
} else {
	alert("NUMBER: " + inputvalue);
}

var integer1 = window.prompt("Please type any number one");
var integer2 = window.prompt("Please type any number two");
if( integer1 === integer2) {
    alert("Both integers are equal");
} else {
    alert( Math.max(integer1, integer2) );	
}
var integer1 = window.prompt("Type any number either postive or negative");
if( integer1 < 0) {
    alert("Negative");
} else {
    alert("Positive");
}

var value = window.prompt("Type any string and we will tell you that it is vowel or not.");
	
value = value.toUpperCase();
if(value === "A" || value === "E" || value === "I" || value === "O" || value === "U") {
    alert("It is a vowel character");
}

var password = "Karachi";
var user_password = window.prompt("Please enter your password");
if( password === user_password ) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}

var password = "Karachi";
var user_password = window.prompt("Please enter your password");
if( password === user_password ) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}

var arr = ["this", "is", "my", "cat"];
document.write(arr.join(" "));
var colors = ["red", "green", "blue"];
document.write(colors + "<br>");
var color1 = window.prompt("Add color");
colors.unshift(color1);
document.write(colors + "<br>");
var color2 = window.prompt("Add color");
colors.push(color2);
document.write(colors + "<br>");
var color3 = window.prompt("Add color");
var color4 = window.prompt("Add color");
colors.unshift(color4);
colors.unshift(color3);
document.write(colors + "<br>");
colors.shift();
document.write(colors + "<br>");
colors.pop();
document.write(colors + "<br>");
var index = window.prompt("Where do you want to put your color, define index between 0 to " + (colors.length - 1) );
var color5 = window.prompt("Add Color");
colors.splice(index, 0, color5);
document.write(colors + "<br>");
var index2 = window.prompt("What color do you want to remove, choose color of " + colors );
var indexOfArray = colors.indexOf(index2);
colors.splice(indexOfArray, 1);
document.write(colors + "<br>");

var arr = ["FIFO-First", "In", "First", "Out"];
document.write(arr[0] + "<br>");
document.write(arr[1] + "<br>");
document.write(arr[2] + "<br>");
document.write(arr[3] + "<br>");

var brands = ["Apple", "Samsung" , "Motorola", "Nokia", "Sony", "Haier"];
for(var i=0; i<=brands.length - 1; i++) {
    document.write("Element at index " + i + " is " + brands[i] + "<br>");
}
document.write(brands.reverse());
 var muld = [
 	[
 	]
 ];
 var brands = ["Apple", "Samsung" , "Motorola", "Nokia", "Sony", "Haier"];
 document.write("<select>");
 for(var i=0; i<=brands.length - 1; i++) {
 	document.write("<option>" + brands[i] + "</option>");
 }
 document.write("</select>");

 var time = window.prompt("please enter a time minute");
				
if(time>=1900&& time<1200 ) {
	alert("Good Morning");
} else if(time>=1200&& time<1700) {
    alert("Good Afternoon")
} else if(time>=1700&& time<2100) {
    alert("Good evening")
} else if(time>=2100&& time<=2358) {
    alert("Good Good nigt")
}

var greeting; 
var hour = 13; 
if (hour < 18){ greeting = "Good day";
} else greeting = ("Good evening");
 
