function my_Dictionary() {
    var food = {
        tomatoe: "fruit",
        carrot: "veg",
        garlic: "veg",
        egg: "Protein",
    };
    delete food.egg;
    document.getElementById("Dictionary").innerHTML = food.egg;
}