//to concat
function full_Sentence() {
    var part_1 = "I have";
    var part_2 = " made this";
    var part_3 = " into a complete";
    var part_4 = " sentence";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concat").innerHTML = whole_sentence;
}
//this is a slice method
function slice_Method() {
    var Sentence = "all school and no play makes a cranky beast";
    var Section = Sentence.slice(22, 35);
    document.getElementById("Slice").innerHTML = Section;
}
// this is sting method
function string_Method() {
    var x = 183;
    document.getElementById("Numbers_to_string").innerHTML=x.toString();
}

// this is toPrecision()method
function precision_Method() {
    var y = 12938.384570321113;
    document.getElementById("Precision").innerHTML = y.toPrecision(10);
}