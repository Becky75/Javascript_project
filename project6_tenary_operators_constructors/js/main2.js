function count_Function() {
    document.getElementById("counting").innerHTML = Count();
    function Count() {
        var starting_point = 9;
        function Plus_one() { starting_point = 1; }
        Plus_one();
        return starting_point;
    }
}