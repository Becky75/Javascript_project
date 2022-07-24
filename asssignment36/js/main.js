function Vechile(Make, Model, Year, color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vechile("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myfunction() {
    document.getElementById("Keywords_and_Construstors").innerHTML =
        "Erick drives a " + Erik.Vehicle_Make + "-colored" + Erik.Vehicle_Model + "manufactured in" + Erik.Vehicle_year;
}