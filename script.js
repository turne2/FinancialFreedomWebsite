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
  
function calcSavings() {
    var goalSavings = parseFloat(document.getElementById('goal_savings').value);
    
   var monthsUntil = parseFloat(document.getElementById('months_until').value);
     
   var calculate = Math.round( goalSavings / monthsUntil * 100) / 100;
    
   document.getElementById('results').innerHTML = ("You need to save $") + calculate + (" a month.");   
}