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
    for (Y = 0;Y < Instruments.lenght; Y++) {
        content += Instruments[Y] + "<br>";
}
document.getElementById("List_of_Instruments").innerHTML = content;

// this is an array 

    var Cat_picture = [];
 function array_Function(){
        Cat_picture[0] = "sleeping";
        Cat_picture[1] = "playing";
        Cat_picture[2] = "eating";
        Cat_picture[3] = "purring";
 document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_picture[2] + ".";
    }
    //this is array
    
    function constant_Function() {
        const Musical_Instrument = { type: "guitar", brand: "Fender", Color: "black" };
        Musical_Instrument.color = "blue";
        Musical_Instrument.price = "$900";
        document.getElementById("Constant").innerHTML = "The cost of the" + Musical_Instrument.price;
    }
}