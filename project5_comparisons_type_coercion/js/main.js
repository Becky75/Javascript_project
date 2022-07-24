document.write(typeof 3);

function my_function() {
   
    document.getElementById("test").innerHTML = isNaN(007);
}//this function uses typeof and returns nan

// displays infinity and negative infinty
    document.write(2E310);
    document.write(-3E310);

//math operators return less and greater than
    document.write(12 > 10);//less than
    document.write(12 < 10);//greater than

    //these are console logs
    console.log(2 + 2);
    console.log(12>6);

//type coercion attempts
document.write("10" + 5);
document.write(10 == 10);
document.write(3 == 11);

//trying double equal signs
x = 10;
y = 10;
document.write(x === y);

z = 25;
w = "25";
document.write(z === w);

//local operators
document.write(9 > 2 && 10 > 2);
document.write(6 > 12 && 6 > 2);
document.write(7 > 10 || 10 > 8);
document.write(7 > 10 || 10 > 12);

function not_function() {
    document.getElementById("not").innerHTML = !(20 > 10);
}

function not_function2() {
    document.getElementById("not2").innerHTML = !(15 > 20);
}