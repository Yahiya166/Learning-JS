// ****** Chapter # 1 ******

// alert ("Hello World");
// window.alert ("Hello World");


// ****** Chapter # 2,3 ******

// var a = 5;
// var b = 10;
// var c = a+b;

// alert(c);


// var a = 5;
// var b = 10;
// var c = a+b;

// console.log(c);


// var x = 5;
// var y = " Yahiya";
// var z = x+y

// alert(z);


// var x = 5;
// var y = "Yahiya ";
// var z = y+x

// alert(z);


// var x = "Asif";
// var y = "Yahiya ";
// var z = y+x

// alert(z);


// var x = "Asif";
// var y = " Yahiya";
// var z = x+y

// alert(z);


// ****** Chapter # 4 ******

// var 1ali = "yahiya"; 
// console.log(1ali);     // error genrate


// var yahiyaAsif = 5;  // camelCase
// alert(yahiyaAsif);


// ****** Chapter # 5 ******

// var f = 20;
// var g = "20";
// var i = f+g;

// alert(i);


// var f = 20;
// var g = "20";
// var i = f*g;

// alert(i);


// var f = 20;
// var g = "20";
// var i = f/g;

// alert(i);


// var a = 3;
// var b = 5;                                     // demask rule
// var c = 7;
// var d = b - a * c;

// alert (d);


// var a = 3;
// var b = 5;                                     // boardmask rule
// var c = 7;
// var d = (b - a) * c;

// alert (d);


// var a = 10 % 3;                                     // Modules
// alert(a);


// ****** Chapter # 6 ******

// a++/num++ = +1    =  postincrement
// ++a/++num = +1    =  preincrement
// a--/num-- = -1    =  postdecrement
// --a/--num = -1    =  predecrement


// var a = 5;
// var b = a++;

// alert(b);

// alert(a);


// var a = 5;
// var b = ++a;

// alert(b);


// var a = 10;
// var b =    a++ + ++a - a + a++ - ++a + a;
//         // 10  +  12 - 12 + 12 -  14 + 14
//         //     22   -  12 + 12  - 14 + 14                      //  Rough Work
//         //          12    + 12  - 14 + 14
//         //                22    - 14 + 14
//         //                     8   + 14
//         //                        22   ANSWER
 
// var c = alert(b);


// ****** Chapter # 7 ******

//  chap 7 is realted to chap 5!


// ****** Chapter # 8 ******

// var message = "Thanks ";
// var banger = " !";
// alert (message + "Sylani" + banger);


// alert("Thanks " + "Sylani" + "!");


// ****** Chapter # 9 ******

// var a = prompt("Enter Your Age:","Your Age Is");

// console.log(a);


// var a = prompt("Enter Value:","Your Value Is");
// var b = a + 10;
// console.log("The Output Is", + " " + b);

// 0r

// var a = +prompt("Enter Value:","Your Value Is");
// var b = a + 10;
// console.log("The Output Is", + " " + b);

// 0r

// var a = prompt("Enter Value:","Your Value Is");
// var b = +a + 10;
// console.log("The Output Is", + " " + b);

// 0r

// var a = "Enter Value:";
// var b = "Your Value Is";
// var x = prompt(a,b);
// var y = +x + 10;
// console.log("The Output Is", + " " + y);


// ****** Chapter # 10 ******

// if   =  true condition
// else  =  false condition


// var age = 16;
// if(age == 18){
//     alert("You Are Perfect For Age");
// }
// else{
//     alert("Your Age is less");
// }


// var age = 14;
// if(age < 16){
//     alert("Your Age is less");
// }
// else{
//     alert("You Are Perfect For Age");
// }


// var age = 19;
// if(age > 18){
//     alert("You Are Perfect For Age");
// }
// else{
//     alert("Your Age is less");
// }


// var age = +prompt("Enter Your Age:");
// if(age == 15){
//     alert("Your Age is Equal");
// }
// else if (age < 15){
//     alert("Your Age Is Less")
// }
// else{
//     alert("Your Age is More");
// }


// var age = +prompt("Enter your age:");
// var gender = prompt("Enter your gender");
// if (age > 18 && gender == "male") {
//     alert("You are allowed");
// } else {
//     alert("You are not allowed");
// }


// var age = +prompt("Enter your age:");
// var gender = prompt("Enter your gender");
// if (age > 18 || gender == "male") {                                 // ||  = Or
//     alert("You are allowed");
// } else {
//     alert("You are not allowed");
// }


// var a = "5";
// if (a == 5) {
//     alert("True")                                        //    = type not checked
// } else {
//     alert("False")
// }

// var a = "5";
// if (a === 5) {                                               //    = type checked
//     alert("True")
// } else {
//     alert("False")
// }


// ****** Chapter # 11 ******

// var x = 5;
// var y = 10;
// var a = 30;
// var b = 15;
// if(x+y === a-b){
//     alert("Correct");
// }
// else{
//     alert("Incorret")
// }


// var a = 10;
// if (a !== 15) {                                       // not =   type checked
//     alert("Correct");
// } else {
//     alert("Incorret")
// }


// ****** Chapter # 12,13 ******

//  chap 12 and chap 13 is realted to chap 10!


// ****** Mark Sheat ******

// var percent = +prompt("Enter your percent");
// if (percent >= 90 && percent <= 100) {
//     alert("A1");
// }
// else if (percent >= 80 && percent <= 90) {
//     alert("A+");
// }
// else if (percent >= 70 && percent <= 80) {
//     alert("A");
// }
// else if (percent >= 60 && percent <= 70) {
//     alert("B");
// }
// else if (percent >= 50 && percent <= 60) {
//     alert("C");
// }
// else if (percent >= 40 && percent <= 50) {
//     alert("D");
// }
// else if (percent >= 33 && percent <= 40) {
//     alert("E");
// }
// else if (percent >= 0 && percent <= 33) {
//     alert("F");
// }
// else {
//     alert("You didnot write correct percentage")
// }


// ****** Chapter # 14 ******

// nested if = inner if 
// if (c === d) {
//        if (x === y) {                                // example
//              g = h;
//        }
// }


// ****** Chapter # 15 ******

// var students = ["Muhammad","Yahiya","Asif"];

// console.log(students[1]);

// alert("Wellcom " + students[1]);


// var students = ["Muhammad","Yahiya","Asif",123];                  // Bollean number

// alert("Wellcom " + students[3]);


// var arr = ["Muhammad","Yahiya","Asif"];
// console.log(arr[1]);

// var arr1= new Array("Muhammad","Yahiya","Asif");

// console.log(arr1);

// ****** Chapter # 16,17 ******

// Array.pop() =  removedd  from last
// Array.push() =  add from last 
// Array.shift() =  removed from first 
// Array.unshift() =  add from first 
// Array.splice() =  add and removed from any 
// Array.slice() =   copy array value and name 




// var names = [];

// names[0] = "Muhammad";
// names[1] = "Yahiya";
// names[2] = "Asif";

// console.log(names)


// var students = ["Muhammad","Yahiya","Asif"];    
// students.pop();

// console.log(students);


// var students = ["Muhammad","Yahiya","Asif"];    
// students.push("Usaid","Asif");

// console.log(students);


// var students = ["Muhammad","Yahiya","Asif"];    
// students.shift();

// console.log(students);


// var students = ["Muhammad","Yahiya","Asif"];    
// students.unshift("Usaid","Asif");

// console.log(students);


// var students = ["Muhammad","Yahiya","Asif"];    
// students.splice(0,0,"Usaid");

// console.log(students);


// var students = ["Usaid","Asif","Muhammad","Yahiya","Asif"];    
// var copyStudent = students.slice(2,5)

// console.log(students);

// console.log(copyStudent);


// ****** Chapter # 18 ******

// var a;
// for(a =1; a <= 10; a++){
//     document.write(a + "<br>");
// }


// var a;
// for(a =2; a <= 10; a= a+2){
//     document.write(a + "<br>");
// }


// var a;
// for(a = 1; a <= 5; a++){
//     alert("Hello World");
// }


// var a;
// for(a = 1; a <= 10; a++){
//     document.write("2" + "X" + a + "=" + 2*a + "<br>");
// }

// var names = ["Yahiya","Usaid","Ahsan"];

// for(var a = 0; a < names.length; a++){
//     console.log(names[a]);
// }


// ****** Chapter # 19 ******

// var cities = ["Karachi","Islamabad","Lahore","Faslabad"];

// for(var a = 0; a < cities.length; a++){                            //  Flag method
//     if (cities[a] === "Karachi") { 
//         alert(cities[a] + " " + "is the cleanest city");
//     }
//  }


// for(var a = 1; a > 0; a++){
//     if(a === 10) {                                 // break method
//         break
//     }
//     console.log("Hello")
// }


// var cities = ["Karachi","Islamabad","Lahore","Faslabad"];

// for(var a = 0; a < cities.length; a++){                            
//     if (cities[a] === "Karachi") { 
//         alert(cities[a] + " " + "is the cleanest city");
//         break
//     }
//  }


// ****** Chapter # 20 ******

// for(var a = 0; a < 5; a++){
//     for(var i = 0; i < 3; i++){
//         document.write("Hello World" + "<br>");
//     }
// }


// var firstName = ["Yahiya","Usaid","Ammna"];
// var lastName = ["Asif","Shah"];

// for(var a = 0; a < firstName.length; a++)
// for(var b = 0; b < lastName.length; b++){
//     console.log(firstName[a] + " " + lastName[b]);
// }


// var firstName = ["Yahiya","Usaid","Ammna"];
// var lastName = ["Asif"];

// for(var a = 0; a < firstName.length; a++)
// for(var b = 0; b < lastName.length; b++){
//     console.log(firstName[a] + " " + lastName[b]);
// }


// for (var a = 0; a < 10; a++){
//     for (var b = 0; b < a; b++){
//         document.write("*")
//     }
//     document.write("<br>")
// }


// var word = prompt("Enter your word");
// var check = "";

// // // for (var a = 0; a < word.lenght; a++)                    // revorse

// for(var a = word.length -1; a >= 0; a--){                       // palindrom type
//     check += word[a];
//    // console.log(word[a])       // check
// }

// if(word === check){
//     console.log(word + " " + "is palindrom word")
// }


// ****** Chapter # 21 ******


// var name = "YAHIYA";

// name = name.t0LowerCase();

// console.log(name);


// var name = "yahiya";

// name = name.toUpperCase();

// console.log(name);


// var city = prompt("Enter your city name");
// city = city.toLowerCase()

// var arr = ["karachi","islamabad","lahore","faslabad"];

// for(var a = 0; a < arr.length; a++){
//     if (arr[a] === city) {
//         alert("City has found");
//         break;
//     } 
//     else {
//         alert("City has not found");
//     }
// }


// ****** Chapter # 22 ******

// var city = prompt("Enter your city name");

// var firstChar = city.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = city.slice(1);
// otherChar = otherChar.toLowerCase();

// var cities = firstChar + otherChar;
// // console.log(city)

// var arr = ["Karachi","Islamabad","Lahore","Faslabad"];

// for(var a = 0; a < arr.length; a++){
//     if (arr[a] === cities) {
//         alert("City has found");
//         break;
//     } 
//     else {
//         alert("City has not found");
//     }
// }


// ****** Chapter # 23 ******

    // var name = "Yahiya ASif";

    // console.log(name.indexOf("A"));


// var text =  "The New Yorker magazine doesnt allow the phrase 'World War II."

// for (var i = 0; i < text.length; i++) {
// if (text.slice(i, i + 12) === "World War II") {                                              // preivious chap Method
//      text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//      console.log(text)
//     }
// }                                        // finding character


// var text =  "The New Yorker magazine doesnt allow the phrase 'World War II.";                   // new chap method

// var indexNum = text.indexOf('World War II');

// var firstText = text.slice(0,indexNum);
// var replacingText = 'The Second War';
// var thirdText = text.slice(indexNum + 12);

// console.log(firstText + replacingText + thirdText);


// var text =  "The new Yorker magazine doesnt allow the phrase 'World War II.They say it new should be";

// var indexNum = text.lastIndexOf('new');

// var firstText = text.slice(0,indexNum);
// var replacingText = 'The Second War';
// var thirdText = text.slice(indexNum + 13);

// console.log(firstText + replacingText + thirdText);
    

// ****** Sammple ******

// for (var a = 1; a <= 100; a= a+10){
//     for(var b = a; b < a+10; b++){
//         document.write(b + " ")
//     }
//     document.write("<br>")    
// }    


// ****** Chapter # 24 ******

// var a = "Yahiya";

// console.log(a.charAt(0))


// ****** Chapter # 25 ******

// var para = "This is a example";
// para = para.replace("a","an");

// console.log(para);


// var para = "This is a example,and for a text";
// para = para.replace(/a/g,"an");                            //  g means Global          all "a" are replace

// console.log(para);


// ****** Chapter # 26 ******

// var num = 1.5;
// num = Math.round(num);                              // round of with ".5"

// console.log(num);


// var num = 1.4;
// num = Math.round(num);

// console.log(num);


//  var num = 1.1;                                          // round of with "."
// num = Math.ceil(num);

// console.log(num);


//  var num = 1.8;                                          //  non-round of with "."
// num = Math.floor(num);

// console.log(num);


// ****** Chapter # 27 ******

// var use =  Math.random() * 2;

// console.log(use)


// var headsuser = prompt("Enter head name");
// var tailsuser = prompt("Enter tail name");

// var toss = Math.random() * 2;
// var floor = Math.floor(toss);

// if (floor === 0) {
//     alert("Head" + " " + headsuser + " " + "win the toss");
// }
//  else {
//     alert("Tails" + " " + tailsuser + " " + "win the toss");
// }


// ****** Chapter # 28 ******

// v.Number("10");                     // convert string to number
// v.parseInt("10");                   // convert string to number


// ****** Chapter # 29 ******

// v.tostring()                            // convert number to string


// ****** Chapter # 30 ******

// v.toFixed(2);                           // control decimal value


// ****** Chapter # 31 ******

// var a = new Date();

// console.log(a);


// var a = new Date();                         

// var b = a.toString();

// var c = b.slice(0,3)

// console.log(c);


// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];               // todays day
// var now = new Date();
// var theDay = now.getDay();
// console.log(dayNames[theDay]);


// ****** Chapter # 32 ******

// var d = new Date();
// var currentMonth = d.getMonth();

// console.log(currentMonth);


// var d = new Date();
// var currentYear = d.getFullYear();

// console.log(currentYear);


// var d = new Date();
// var currentHours = d.getHours();

// console.log(currentHours);


// var d = new Date();
// var currentMinutes = d.getMinutes();

// console.log(currentMinutes);


// var d = new Date();
// var currentSeconds = d.getSeconds();

// console.log(currentSeconds);


// var d = new Date();
// var currentMilliseconds = d.getMilliseconds();

// console.log(currentMilliseconds);


// var d = new Date();
// var currentgetTime = d.getTime();

// console.log(currentgetTime);


// ****** Chapter # 33 ******
// ****** Date Of Birth ******

// var dob = new Date (prompt("Enter Your date of birth","Feb 17, 2004"));

// var dobMilli = dob.getTime();

// var today = new Date();

// var todayMilli = today.getTime();

// var diff = dobMilli - todayMilli;

// var acurateDate =Math.floor(diff/(1000*60*60*24*30*12));

// document.write(acurateDate);


// ****** Chapter # 34 ******

// .setFullYear(2001);
// .setMonth(12);
// .setDate(15);
// .setHours(24);
// .setMinutes(05);
// .setSeconds(55);
// .setMilliseconds(867);


// ****** Chapter # 35,36,37,38 ******

// function hello(){
//     alert("hello world")
// }

// hello();


// function greeting(greet){
//     alert(greet)
// }

// greeting("Hello Yahiya");


// function add(a,b,c){
//     var z = a+b+c
//     return z; 
// }

// var g = add(11,5,10);
// alert(g);


// function add(a,b,c){
//     var f = 15                                                // f is local variable
//     var z = a+b+c  
//     return z; 
// }

// var g = add(11,5,10);
// alert(g);
// alert(f);


//     var f = 15                                                // f is global variable

// function add(a,b,c){
//     var z = a+b+c  
//     return z; 
// alert(f);
// }

// var g = add(11,5,10);
// alert(g);


// function foo(a,b = 3){             //  b = 3 is default value
//     return a + b
// }

// console.log(foo(1,5))  // 6


// function agecalc () {
    // var dob = new Date (prompt("Enter Your date of birth","Feb 17, 2004"));

    // var dobMilli = dob.getTime();

   // var today = new Date();

   // var todayMilli = today.getTime();

   // var diff = dobMilli - todayMilli;

  // var acurateDate =Math.floor(diff/(1000*60*60*24*30*12));

  // document.write(acurateDate);
// }

// agecalc();


// ****** Chapter # 39,40 ******

// var name = prompt("Enter your Name");

// switch(name){
//     case "Yahiya":                                           // same to if
//         alert("Hello" + " " + name);
//         break;
//     case "Usaid":                                           // same to ifelse
//         alert("Hello" + " " + name) 
//         break
//     default:                                               // same to else
//         alert("Hello")       
// }


// ****** Chapter # 41 ******

// var a = 0;

// while(a<10){
//     console.log(a);
//     a++;
// }


// // ****** Chapter # 42 ******

// var a = 0;

// do{
//     console.log(a);
//     a++;
// }

// while(a<10);


// // ****** Chapter # 43 ******

/* <script src="app.js"></script> */
/* <script src="script.js"></script> */
/* <script src="app.js"></script> */
/* <script src="coreJS.js"></script> */
/* <script src="main-code.js"></script> */
/* <script src=" main_code.js"></script> */
/* <script src=" main.code.js"></script> */
{/* <script src="whatever.js"></script>  */}


// ****** Chapter # 44 ******

// = comments


// ****** Chapter # 45 ******

//  GOTO HOME PAGE

// function foo(){
//     alert("Hello World")
// }


// function foo(greet){
//         alert(greet)
//     }


// ****** Chapter # 46 ******

//  GOTO HOME PAGE


// function foo(){
//     alert("Hello World")
// }


// ****** Chapter # 47 ******

//  GOTO HOME PAGE


// ****** Chapter # 48 ******

//  GOTO HOME PAGE


// ****** Chapter # 49 ******

//  GOTO HOME PAGE

// function getName(){
//     var name = document.getElementById("name");
//     alert(name.value)
//     name.value = ""   
// }


// ****** Chapter # 50 ******

//  GOTO HOME PAGE

// function setName(){
//     var name = document.getElementById('name');
//     name.value = "Yahiya"
// }

// setName();


// function setName(){
//     var para = document.getElementById('para');
//     para.innerHTML = "Hello Yahiya"
// }

// setName();


// ****** Chapter # 51 ******

//  GOTO HOME PAGE

// function readmore(){
//     var pera = document.getElementById('pera');
//     var text = " Labore doloremque, consectetur ipsum quasi mollitia nemo,sequi corporis maxime vel sit ratione commodi hic laudantium voluptates aspernatur earum deserunt inventore in.";
//     pera.innerHTML = text;
// }


// function readmore(){
//     var text = document.getElementById('text').innerHTML;
//     var pera = document.getElementById('pera');
//     pera.innerHTML = text;
// }


// function readmore(){
//     var text = "<ul><li>List 1</li><li>List 2</li><li>List 3</li></ul>";
//     var pera = document.getElementById('pera');
//     pera.innerHTML = text;
// }


// ****** Chapter # 52 ******

//  GOTO HOME PAGE

// function big(){
//     var car = document.getElementById('car');
//     car.className = "hidden";
// }


// function big(){
//     var car = document.getElementById('car');
//     car.className += " hidden";
// }


// ****** Chapter # 53 ******

//  GOTO HOME PAGE

// function carImage(){
//     var carImg = document.getElementById('img');
// carImg.src = "car/photo-1525609004556-c46c7d6cf023.jpg" 
// }


// function carImageBefore(){
//     var carImg = document.getElementById('img');
//     carImg.src = "car/photo-1552519507-da3b142c6e3d.jpg" 
// }


// function changeImage(id,src){
//     var changeImage = document.getElementById(id);
//     changeImage.src = src;
// }


// ****** Chapter # 54 ******

// function setAdress(){
//     var link = document.getElementById(link);
//     var adress = link.hreff; 
// }


// ****** Chapter # 55 ******

// GOTO HOME PAGE

// function changeImage(){
//     var Image = document.getElementById("img");
//     Image.style.width = '100%'; 
// }

// function changePera(){
//     var pera = document.getElementById("pera");
//     pera.style.fontSize = '5em'; 
// }


// ****** Chapter # 56 ******

// GOTO HOME PAGE

// var pera = document.getElementsByTagName('p');
// pera[1].style.color = 'red';
// pera[3].style.color = 'blue';



// var pera = document.getElementsByTagName('p');
// for(var a = 0; a < pera.length; a++){
//     pera[a].style.color = 'red';
// }


// ****** Chapter # 57 ******

// var parent = document.getElementById('parent')
// var pera = parent.getElementsByTagName('p');
// for(var a = 0; a < pera.length; a++){
//     pera[a].style.color = 'red';
// }


// ****** Chapter # 58,59,60,61,62,63, ******                      // the DOM   

// console.log(document.childNodes[0].childNodes[0]);
// console.log(nodetype);
// console.log(firstChhiild);
// console.log(parentnNode);
// console.log(nextSbinlling);
// console.log(nodeNAme);
// console.log(nodeValue);


// ****** Chapter # 64 ******

// GOTO HOME PAGE

// var list = document.getElementById("li1");

// console.log(list)


// var list = document.getElementsByTagName("li");

// console.log(list[])


// var list = document.getElementsByTagName("li");

// console.log(list.length);



// ****** Chapter # 65 ******

// GOTO HOME PAGE


// var a = document.getElementById('p1');            // .hasAttribute

// if (a.hasAttribute('class')) {
//     alert('available')
// } else {
//     alert('not available')
// }


// var a = document.getElementById('p1');

// console.log(a.getAttribute('class'));


// var a = document.getElementById('p1');

// a.setAttribute('class','blue');


// ****** Chapter # 66 ******

// GOTO HOME PAGE

// var a = document.getElementById('p1');

// console.log(a.attributes);


// var a = document.getElementById('p1');

// console.log(a.attributes[1].nodeName);


// var a = document.getElementById('p1');

// console.log(a.attributes[1].nodeValue);


// ****** Chapter # 67,68 ******

// GOTO HOME PAGE


// var elements = document.createElement('p');

// console.log(elements)


// var elements = document.createElement('p');

// var text = document.createTextNode('Hello Yahiya');

// elements.appendChild(text);

// console.log(elements);


// var elements = document.createElement('p');

// var text = document.createTextNode('Hello Yahiya');

// elements.appendChild(text);

// var a = document.getElementById('abc');

// a.appendChild(elements)


    //    OR


// var elements = document.createElement('h1');

// var text = document.createTextNode('Hello Yahiya');

// elements.appendChild(text);

// var a = document.getElementById('abc');

// a.appendChild(elements)


// ****** sample ******

// GOTO HOME PAGE


// function addMessages(){
//     var abc = document.getElementById("abc");
//     var p = document.createElement("p");
//     var textNode = document.createTextNode(abc.value)
//     p.appendChild(textNode)
//     var message = document.getElementById("message");
//     message.appendChild(p)

//     abc.value = "";
// }



// ****** Chapter # 69 ******

// var web = {
//     t1 : "Yahiya",
//     t2 : "usaid"
// }

// web.t3 = "Amna"

// console.log(web);


// ****** Chapter # 70 ******

// var web = {
//     t1 : "Yahiya",
//     t2 : "usaid"
// }

// web.class = [1,2];

// console.log(web);


// var course = {}

// course.name = "WEB"

// console.log(course);


// var web = {
//     t1 : "Yahiya",
//     t2 : "usaid"
// }

// web.t3 = "undifiend"

// console.log(web);

// var abc = "t2" in web;

// console.log(abc)


// ****** sample ******
// ****** Quiz App ******


// var myQuations = [
//     {
//         Quation1 : "What is Your name?",
//         Answer : {
//             a : "Yahiya",
//             b : "usaid",
//             c : "Tiger"
//         },
//         correctAnswer : "a"
//     },
//     {
//         Quation1 : "What is Your age?",
//         Answer : {
//             a : 14,
//             b : 15,
//             c : 16
//         },
//         correctAnswer : "c"
//     }
// ]


// ****** Chapter # 72 ******

// function Course (t1,t2,t3) {
//     this.t1 = t1;
//     this.t2 = t2;
//     this.t3 = t3;
// }

// var xyz = new Course ("Yahiya","Usaid","Asif");

// console.log(xyz)

        //    or

// function Course (t1,t2,t3) {
//     this.a = t1;
//     this.b = t2;
//     this.c = t3;
// }

// var xyz = new Course ("Yahiya","Usaid","Asif");

// console.log(xyz)


// ****** Chapter # 73******

// function Course (name,roll) {
//     this.name = name;
//     this.roll = roll;
//     this.getName = function(){
//         return this.name;
//     }
// }

// var Student1 = new Course ("Yahiya",123);
// var Student2 = new Course ("Usaid",321);

// console.log(Student1.getName());  
// console.log(Student2.getName());  



// ****** Chapter # 74 ******


// function Course (name,roll) {
//     this.name = name;
//     this.roll = roll;
// }

// Course.prototype.getName = function () {
//     return this.name;
// }

// var Student1 = new Course ("Yahiya",123);
// var Student2 = new Course ("Usaid",321);

// console.log(Student1.getName());
// console.log(Student2.getName());


// function Course (name,roll) {
//     this.name = name;
//     this.roll = roll;
// }

// Course.prototype.getName = function () {
//     return this.name;
// }

// var Student1 = new Course ("Yahiya",123);
// var Student2 = new Course ("Usaid",321);

// console.log(Student1.getName());
// console.log(Student2.getName());


// ****** Chapter # 75 ******


// var Student = {
//     name : "Yahiya",
//     roll : 123,
//     school : "saylani"
// }

// console.log("roll" in Student);
// console.log(Student.hasOwnProperty("roll"));


// var Student = {
//     name : "Yahiya",
//     roll : 123,
//     school : "saylani"
// }

// for(var pp in Student){
//     console.log(pp)
// }

           // values


// for(var pp in Student){
// //     console.log(Student[pp]);
//     console.log(pp,Student[pp]);
// }


// ****** Chapter # 76 ******

// function press() {
//     var location = window.location.href               // check your web location
//     console.log(location)
// }


// function press() {
//     var location = window.location.href                  // check web location
//     window.location.href = "https://www.facebook.com/"   // go to another location
//     // console.log(location)
// }


// function press() {
//     var location = window.location.href
//     window.location.pathname                               // check your web pathname
//     window.location.hostname                              // check your web hostname
// }


// ****** Chapter # 77 ******

// function login() {
//     var location = window.location.href
//     window.location.assign("https://www.facebook.com/")       // go to another location
//     window.location.replace("https://www.facebook.com/")       // go to another location       but no go to back location
//     window.location.reload()             // reload your cashe web
//     window.location.reload(false)        // reload your local web
//     window.location.reload(true)        // reload your server web
// }


// ****** Chapter # 78 ******


// .history.back();
// .history.forward();
// .history.go(1);
// .history.go(-1);
// . document.referrer;


// ****** Chapter # 79 ******


// function press() {
//     var contant =  `<h1> Succesfully </h1>`
//     window.open().document.write(contant)
// }

            // OR

// function press() {
//     window.open().alert("Succesfully")
// }



// ****** Chapter # 80 ******


// function press() {
//     window.open("https://www.google.com/", "win1", "width=420,height=380,left=200,top=100");
// }


// ****** Chapter # 81 ******

// function press() {
//     var win = window.open("https://www.google.com/", "win1", "width=420,height=380,left=200,top=100");
//     if(win === null){
//         alert("App apna popup blocker ko desaible karo pehle");
//         window.close();
//     }
// }