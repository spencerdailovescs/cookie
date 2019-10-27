var doughs = Array("Sugar", "Chocolate", "Oatmeal", "Snickerdoodle", "Peanut Butter");
var fillIns = Array("Nothing", "Chocolate Chip", "Rainbow Sprinkle", "Craisin", "Walnut", "Peanut Butter Chip", "Coconut Flake", "Oreo");
var toppings = Array("Nothing","Vanilla Frosting", "Chocolate Frosting", "Maple Syrup", "Cream Cheese", "Chili Oil", "Nacho Cheese");



function parseForm() {
	var dough = document.getElementById("dough");
	var dough = doughs[dough.options[dough.selectedIndex].value];

	var fillIn = document.getElementById("fillIn");
	var fillIn = fillIns[fillIn.options[fillIn.selectedIndex].value];

	var topping = document.getElementById("topping");
	var topping = toppings[topping.options[topping.selectedIndex].value];

	alert("" + dough + " " + fillIn + " " + topping)
}
