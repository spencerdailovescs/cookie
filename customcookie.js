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
	reformat(dough, fillIn, topping);

}

function reformat(dough, fill, topp) {
	$("#row").toggleClass("row", true);
	$("#col").toggleClass("column", true);
	$("#selections").toggleClass("selections", false)
	$("#creation").html( namer(dough, fill, topp));
}

function namer(d,f,t){
	var top_bool = (t === "Nothing");
	var fill_bool = (f === "Nothing");



	if (fill_bool && top_bool) {
		return "No topping? No fillers? Are you sure? Well, we guess our dough is delicious! Enjoy your " + d + " Cookie!"
	}
	else if (!fill_bool && !top_bool ) {
		return "Yay! You've made a " + f + " " + d + " Cookie with " + t + " on top. Sounds delicious!"
	}
	else if (fill_bool) {
		return "Yay! You've made a " + d + " Cookie with " + t + " on top. Sounds delicious!"
	}
	else if (top_bool) {
		return "Yay! You've made a " + f + " " + d + " Cookie. Sounds delicious!"
	}


}
