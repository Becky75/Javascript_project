function Vote_Function() {
    var age, can_vote;
    age = document.getElementById("age").Value;
    can_vote = (age >= 18) ? "You can vote" : "your not old enough to vote";
    document.getElementById("New_and_This").innerHTML = can_vote +"";//this will display at the end of the answer 
}