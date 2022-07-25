myFunction();
//code here can use horsename
function myFunction() {
   var horsename = "Harley";
}

//code here can use horsename
function myFunction2() {
    myFunction2();
    var horsename2 = "Jax";
}
//to show global variables
var x = 10;
function Add_numbers_1() {
    document.write(20 + x + ",<br>");
}
function Add_numbers2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers2();

//to show local variables
function Add_numbers_1() {
    var x = 10;
    document.write(20 + x + ",<br>");
}
function Add_numbers2() {
    document.write(x + 100);
}

//this is for the console log
function Add_numbers_1(){
    var x = 10;
    console.log(x +100);
}

//this is an if statment
function get_date() {
    if (new Date().getHours() < 18) {
        document.getElementById("greetings").innerHTML = "How are you"
        
    }
    else if (new Date().getHours() >= 18) {
        document.getElementById("greetings").innerHTML = "morning"
    }
}