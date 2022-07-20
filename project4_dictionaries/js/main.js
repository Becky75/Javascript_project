function my_dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "labrador",
        Age: 5,
        Sound: "bark!"
    };
    document.getElementById("dictionary").innerHTML = Animal.Sound;

}