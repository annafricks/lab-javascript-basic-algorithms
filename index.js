
// Iteration 1: Names and Input
let hacker1 = "Anna"
let hacker2 = "Alexis"

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length ) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
 }

 
// Iteration 3: Loops
//3.1
let result = "";
for(let i = 0; i < hacker1.length; i++) { 
    result += hacker1[i] + ' '; 
}
console.log(result.toUpperCase());
//3.2
let result1 = "";
for(let i = hacker2.length -1; i >= 0; i--) {
    result1 += hacker2[i];
}
console.log(result1);

//3.3
if (hacker1 == hacker2) {
    console.log("What?! You both have the same name?");
}
else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
}
else console.log("The driver's name goes first.");



//per Dustin:

/* 3.1 for (let i = 0; i < hacker1.length; i++) {
    if (i !== hacker1.length -1) {
        result += `${hacker1[i]} `
    }
}
*/

    /*3.3 local.Compare method
    if (hacker1.localeCompare(hacker2) < 0) {
        console.log("The driver's name goes first.")
    } else if (hacker2.localeCompare(hacker1) < 0) {
        console.log("Yo, the navigator goes first, definitely.")
    } else {
        console.log("What?! You both have the same name?")
    }
    */