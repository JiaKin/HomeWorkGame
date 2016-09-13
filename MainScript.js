var pizza = {
	Type:{
		"Klassiskur":400,
		"Itlaskur":500,
		"Lauflettur":700
	},
	Size:{
		"9":1000,
		"12":1500,
		"15":2000
	},
	Cheese:{
		"BRIE Cheese":200,
		"Burrat Cheese":200,
		"Asadero Ch":300
	},
	Selection1:{
		"Skinka":200,
		"Nautahakk":400,
		"Humar":500,
		"Pepperoni":200
	},
    Selection2:{
    	"Sveppir":100,
    	"Corn":100,
    	"Grænn pipar":120
    },
    Sauce:{
    	"Tomata sósu":200,
    	"hvítlauk sósu":200
    },
    selectPizza:function(type,size,cheese,selection1,selection2,sauce){
    	this.type=type;
    	this.size=size;
    	this.cheese=cheese;
    	this.selection1=selection1;
    	this.selection2=selection2;
    	this.sauce=sauce;
    },
    Price:function(){
    	return pizza.Type[this.type]+pizza.Size[this.size]+pizza.Cheese[this.cheese]+pizza.Selection1[this.selection1]+pizza.Selection2[this.selection2]+pizza.Sauce[this.sauce];
    }
};
function GRK(Object){//get random key.
	var index =0;
	var arr = new Array();
	for(var key in Object){
		index++;
		arr.push(key);
	}
	var random = Math.floor(Math.random()*index);
	return arr[random];
}



var PizzaArray = new Array();

for(i=0;i<4;i++){
	var piz = Object.create(pizza);
	piz.selectPizza(GRK(pizza.Type),GRK(pizza.Size),GRK(pizza.Cheese),GRK(pizza.Selection1),GRK(pizza.Selection2),GRK(pizza.Sauce));
	PizzaArray.push(piz);
}

var MainPizzaPage = document.createElement("div");
MainPizzaPage.id = "Pizza";


window.onload=function(){
	for(var Pizza in PizzaArray){
		Pizza = PizzaArray[Pizza];
		var p = document.createElement("p");
		p.innerHTML = Pizza.size+" inch´s "+Pizza.type+" pizza with "+Pizza.cheese+" "+Pizza.selection1+", "+Pizza.selection2+" and "+Pizza.sauce+" ! it cost "+Pizza.Price()+" Kr";
		document.getElementsByTagName("body")[0].appendChild(p);
	}	
}





