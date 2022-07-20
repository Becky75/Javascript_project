function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").ariaValueMax;
    Can_ride = (Height < 52) ? "You are to short" : "you are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + "to ride";
}