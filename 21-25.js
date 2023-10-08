//-----------------------Q 01----------------------
// var fName = prompt("First Name");
// var lName = prompt("Last Name");
// var fullName = fName + " " + lName;
// alert("Welcome " + fullName);
//-----------------------Q 02----------------------
// var userFavPhone = prompt("Which is your favorite smart phone");
// document.write("My favorite phone is: " + userFavPhone + "<br>Length of String: " + userFavPhone.length);
//-----------------------Q 03----------------------
// var country = "Pakistan";
// document.write("String: " + country + "<br>Index of 'n': " + country.indexOf('n'));
//-----------------------Q 04----------------------
// var msg = "Hello World";
// document.write("String: " + msg + "<br>Last Index of 'l': " + msg.lastIndexOf('l'));
//-----------------------Q 05----------------------
// var country = "Pakistan";
// document.write("String: " + country + "<br>Character at index 3 is: " + country.charAt(3));
//-----------------------Q 06----------------------
// var fName = prompt("First Name");
// var lName = prompt("Last Name");
// var fullName = fName.concat(" " + lName);
// alert("Welcome " + fullName);
//-----------------------Q 07----------------------
// var city = "Hyderabad"
// document.write("String: " + city + "<br>After replacement: " + city.replace("Hyder", "Islam"));
//-----------------------Q 08----------------------
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("String: " + message + "<br><br>After replacement: " + message.replaceAll("and", "&"));
// -----------------------Q 09----------------------
// var num = "472";
// var numToStr = +num;
// document.write("Value: " + num + "<br>Type: " + typeof(num));
// document.write("Value: " + numToStr + "<br>Type: " + typeof(numToStr));
//-----------------------Q 10----------------------
// var userInput = prompt("Enter any Word");
// document.write("User Input: " + userInput + "<br>Upper case: " + userInput.toUpperCase());
//-----------------------Q 11----------------------**************LEFT***************
// var userInput = prompt("Enter any Word");
// var lowerCase = userInput.toLowerCase()
// var titleCase = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1, (lowerCase.length));

// document.write("User Input: " + userInput + "<br>Title Case: " + titleCase);
//-----------------------Q 12----------------------
// var num = 35.56;
// document.write("Number: " + num + "<br>Result: " + num.toString().replace(".", ""));
//-----------------------Q 13----------------------
// var userName = prompt("Username");
// var check = false;
// for(var i=0; i<userName.length; i++){
// if(userName[i]=="@" || userName[i]=="!" || userName[i]=="." || userName[i]==","){
//     check=true
// }
// }
// if(check){
//     alert("Please enter a valid username")
// }
// else{
//     alert("Saved!");
// }
//-----------------------Q 14----------------------
// var bakeryItems  = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userSearch = prompt("Welcome to my Bakery, What do you want to order?");
// var searchCheck = false;
// var itemIndex;
// for(var i=0; i<=(bakeryItems.length-1); i++){
//     if(userSearch.toLowerCase()==bakeryItems[i]){
//         var item = bakeryItems[i];
//         searchCheck = true;
//         itemIndex = i;
//     }
// }
// if(searchCheck){
//     alert(item + " is available at index " + itemIndex + " in our bakery");
// }
// else{
//     alert("We are sorry. " + userSearch + " is not available in our bakery");
// }
//-----------------------Q 15----------------------
// var password = prompt("Enter Password");
// var checkFirstChar = false;
// var checkNumOfChar = false;
// var containNum = false;
// var containLetter = false;
// var letters = [
//     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
//     'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
//     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
//   ];
// var message = "";

// for(var i=0; i<password.length; i++){
//     if(password[i]=="0" || password[i]=="1" || password[i]=="2" || password[i]=="3" || password[i]=="4" || password[i]=="5" || password[i]=="6" || password[i]=="7" || password[i]=="8" || password[i]=="9"){
//         containNum = true;
//     }
// }

// for(var i=0; i<password.length; i++){
//     for(var j=0; j<letters.length; j++){
//         if(password[i]==letters[j]){
//             containLetter = true;
//         }
//     }
// }

// if(password[0]!="0" && password[0]!="1" && password[0]!="2" && password[0]!="3" && password[0]!="4" && password[0]!="5" && password[0]!="6" && password[0]!="7" && password[0]!="8" && password[0]!="9"){
//     checkFirstChar = true;
// }

// if(password.length>=6){
//     checkNumOfChar = true;
// }

// if(!checkFirstChar || !checkNumOfChar || !containNum || !containLetter){
//     alert("Please enter a valid password");
// }
// else{
//     alert("Valid Password");
// }

//-----------------------Q 16----------------------
// var university = "University of Karachi";
// var array = university.split(" ");

// for (var i = 0; i < array.length; i++) {
//     document.write(array[i]);
// }
//-----------------------Q 17----------------------
// var userInput = prompt("Enter anything");
// var lastChar = userInput.slice((userInput.length-1), (userInput.length));
// document.write("Userinput: " + userInput + "<br>Last character is: " + lastChar);
//-----------------------Q 18----------------------
// var text = "The quick brown fox jumps over the lazy dog";
// var words = text.toLowerCase().split(" ");
// var toFind = "the";
// var count = 0;
// for(var i=0; i<words.length; i++){
//     if(words[i]==toFind){
//         count++
//     }
// }
// document.write("Text: " + text + "<br>There are " + count + " occurence(s) of word " + toFind);
