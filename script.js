function calcSalary() {
 var wage = parseFloat(document.getElementById('txt_wage').value);
 
var hours = parseFloat(document.getElementById('txt_hours').value);
  
var calculate = Math.round(wage * hours * 52.0 * 100) / 100;
 
document.getElementById('results').innerHTML = ("You make $") + calculate + (" a year."); 
 

}


function calcRent(){

var income = parseFloat(document.getElementById('income').value);

var amountRent = Math.round(income / 40)

document.getElementById('rentresults').innerHTML = ("You can afford $") + amountRent + (" in rent a month.");

}
  
    