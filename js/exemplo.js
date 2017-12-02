// ECMASCRIPT -5

var Forma = function(x,y,tam){
	this.x = x;
	this.y = y;
	this.tam = tam;
	var _id; // aqui eu sou privado 'var _'
	
	this.draw = function(){
		ellipse(x,y,tam); // nao sei se e assim
	}
}

var Entidade = function(forma){
	this.forma = forma;
	this.membros = new Array();
	
	this.add = function(forma){
		this.membros.push(forma);
	}
	
	this.draw = function(){
		this.forma.draw();
		for(var i in this.membros){
			this.membros[i].draw();
		}
	}
}

// Entidade.prototype.draw = function(){}

var entidades = [];
entidades.push(new Entidade(new Forma(21,43,10)))