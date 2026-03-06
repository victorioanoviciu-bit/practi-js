// comentariu in js (cu // sau /** pt paragraf): var, let, const sant cele 3 key-worduri mai utilizate //
/** declaram, initializam, dam o valoare (= atribuie o valoare unei variabile), deci am declarat variabila ´var´, 
am initializat-o "=", am dat o valoare "Victor" **/
// console.log("Codul a fost executat");//
// var myName ="Victor"
// let secondName ="Ioan";
// const age = 30;

// operatori:
//aritmetici + - / * ++ --
const sum = 1+1; console.log(sum);
const difference = 2-1; console.log(difference);
const division = 10/5; console.log(division);
let multiplication = 10*5; console.log(multiplication);

multiplication++;
console.log(multiplication);

multiplication--;
console.log(multiplication);

/* categorii: permisive si obiective */
/* var - permisiv, poate fi redeclarat, poate fi reasignat, are scope de functie
let - permisiv, nu poate fi redeclarat, poate fi reasignat, are scope de bloc
const - obiectiv, nu poate fi redeclarat, nu poate fi reasignat, are scope de bloc */

/* permisive */
/* boolean */
let boolean = true;

/* null */
let n = null;

/* undefined */
let undf = undefined;

/* Number */
let num = 123;

/* string */
let str = "Acesta este un string";

console.log(str);
console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(boolean));
console.log(typeof(n));
console.log(typeof(undf));

// obiect , in interiorul acoladelor avem niste proprietati, fiecare proprietate are o cheie si o valoare, cheile sunt unice, valorile pot fi de orice tip de date
let person = {
    age: 30,
    name: "Victor",
}
console.log(person);
console.log(typeof(person));

// Array, in interiorul parantezelor patrate avem niste elemente, fiecare element are un index, indexul incepe de la 0, elementele pot fi de orice tip de date
const hobbies = ["Reading", "Biking", "Swimming"];
console.log(hobbies);
console.log(typeof(hobbies));
const prices = [12.5, 13.3, 25.7, 30.1];
console.log(prices);
console.log(typeof(prices));

// operatori:
//aritmetici + - / * ++ --
const sum = 1+1; console.log(sum);
const difference = 2-1; console.log(difference);
const division = 10/5; console.log(division);
let multiplication = 10*5; console.log(multiplication);

multiplication++;
console.log(multiplication);

multiplication--;
console.log(multiplication);