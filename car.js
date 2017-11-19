var firstName;
var size;

var cars = { 
   businessname: '3 Musketeers Car Rental',
   types: ['Economy','Midsize'],
   econCars: 5,
   midsizeCars: 5
};

var rented ={
Economy: [],
Midsize: [],

};

function getCustomerData(){

firstName = document.getElementById("firstNameInput").value;
if (
    firstName === "") // If user doesn't enter a name, alert!
 
    alert("Please enter your name for reservation");
   else
  alert ("Thank you for you order!"); myFunction().displayCars()
};

function myFunction() {
    var x = document.getElementById("carpick").selectedIndex;
   
    if (
    firstName === "") // If user doesn't enter a name, alert!
 
    alert("Please enter your name for reservation");
    else
    cars.econCars--;
    cars.midsizeCars--; 
  displayCars();
    alert (document.getElementsByTagName("option")[x].text + "! There's only " + cars.econCars + " left!");
  
};

function displayCars(){
  //document.getElementById("econCars").innerHTML = cars.types[0];
   document.getElementById("econcarsavail").innerHTML = cars.econCars;
    //document.getElementById("midsizCars").innerHTML = cars.types[1];
   document.getElementById("midsizecarsavail").innerHTML = cars.midsizeCars;
 
   
};
