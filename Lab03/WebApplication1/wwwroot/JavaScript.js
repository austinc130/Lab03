function myFunction(x) {
    var whichSelected = x.selectedIndex;
    var sel = x.options[whichSelected].text;
    if (sel == "Beer" || sel == "Wine") {
        document.getElementById("birthDate").style.visibility = "visible";
    }
    else {
        document.getElementById("birthDate").style.visibility = "hidden";
    }
}

function submitOrder() {
    var prices = { Coffee: 2.00, Tea: 2.5, Beer: 6.95, Wine: 12.00 };
    var name = document.getElementById("name").value;
    var quantity = document.getElementById("quantity").value;
    var bev = document.getElementById("inputGroupSelect01").value;
    var total = prices[bev] * quantity;
    let date = moment();
    var dob = document.getElementById("dob").value;
    var age = moment().diff(dob, 'years');
    if (bev == "Beer" || bev == "Wine") {
        if (age <= 21) {
            document.getElementById("test").innerHTML = "You must be at least 21 years old to purchase alcohol.";
        }
        else {
            document.getElementById("invoice").innerHTML = "Customer: " + name + "<br>" + quantity + " " + bev + " @ $" + prices[bev];
            document.getElementById("total").innerHTML = "Total Due: $" + total;
        }
    }
    else {
        document.getElementById("invoice").innerHTML = "Customer: " + name + "<br>" + quantity + " " + bev + " @ $" + prices[bev];
        document.getElementById("total").innerHTML = "Total Due: $" + total;
    }

}