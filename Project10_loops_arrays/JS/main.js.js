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
function for_Loop() {
    var Instruments = ("guitar", "drums", "paino", "bass", "violin", "trumpet", "flute");
    var content = "";
    var Y;
    for (Y=0;Y< Instruments.lenght;Y++) {
        content += Instruments[Y] + "<br>";
        document.getElementById("List_of_Instruments").innerHTML = content;
    }
}

// this is an array 
function array_Function() {
    var Cat_picture = [];
        Cat_picture[0] = "sleeping";
        Cat_picture[1] = "playing";
        Cat_picture[2] = "eating";
        Cat_picture[3] = "purring";
 document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_picture[2] + ".";
    }
    //this is Constant
    
    function Constant_Function() {
        const Musical_Instrument = { type: "Guitar", brand: "Strada", Color: "Black" };
        Musical_Instrument.color = "purple";
        Musical_Instrument.price = "$1200";
        document.getElementById("Constant").innerHTML = "The cost of the" + Musical_Instrument.price;
    }
//this is the let keyword
function Let_keyword() {
var t = 75;

    {
        let x = 25;
        document.write("<br>" + x);

        document.write("<br>" + t);
        
        document.write(x);
}
}
// this is an oject let
function Car_Object() {
    let Car = {
        make: " dodge",
        model: " viper",
        year: " 2021",
        color: " red",
        description: function () { return "The car is a" + this.year + this.color + this.make + this.model; }
    };
    document.getElementById("Car").innerHTML = Car.description();
}