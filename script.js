// written by chapel1337

let amount = 0;

function bananaClicked() {

    let checkAmount = function() {
        if (amount == 21) {
            alert("you win!");

            amount = 0; // resets the value
            document.getElementById("amount").innerHTML = ("amount: 0");
        }
    }

    ++amount; // +1 amount
    document.getElementById("amount").innerHTML = ("amount: " + amount)

    checkAmount();
}