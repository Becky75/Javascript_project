//this is a while loop
function Count_To_Ten() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += + x;
        x++;
    }
    document.getElementById("Loop").innerHTML =Digit;
}
//this is a for loop
    var Instruments = ("guitar", "drums", "paino", "bass", "violin", "trumpet", "flute");
    var content = "";
    var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.lenght; y++); {
        content += Instruments[Y] + "<br>";
}
document.getElementById("List_of_Instruments").innerHTML = content;
}