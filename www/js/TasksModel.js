function getTasks(){
	
	this.items = [];

	this.save = function(){
		var lista = angular.toJson(this.items)
		localStorage.setItem("tasklist", lista);
	}

	this.add = function(item){

		this.items.push(item);

	};

	this.remove = function(item){

		var pos = this.items.indexOf(item);
		this.items.splice(pos, 1);

	};
}