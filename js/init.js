
var objeto = {
    height: 50,
    width: 215,
    posX: 0,
    posY: 0,
    members: [
        {
            imageFile: "img/sword.png",
            animations: {
                duration: 2,

            }
        }
    ],
    animations: {
        duration: 2,
        width: 500
    }
}

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

var gabriel = new Pessoa("Gabriel", 23);

console.log(gabriel);

function Entity() {
    members = new Array();
    addMember: function(name, age) {
        members.push(new Pessoa(name, age));
    }
}

var entidade = new Entity();

entidade.addMember("Gabriel", 23);
entidade.addMember("Gabriel", 22);
entidade.addMember("Gabriel", 21);

console.log(entidade.members);

// var sketch = new Processing.Sketch();

// sketch.attachFunction = function (processing) {
//     var img;

//     function preloadImages() {
//         img = processing.loadImage(objeto.members[0].imageFile);
//     }

//     processing.setup = function() {
//         processing.size(500, 500);
//         processing.background(0, 0, 0);
//         preloadImages();
//     };

//     processing.draw = function() {
//         processing.image(img, objeto.posX, objeto.posY, objeto.height, objeto.width);

//         createjs.Tween.get(img)
//         .wait(500)
//         .to({alpha:0, visible:false}, 1000);
//     };


// }

// stage = new createjs.Stage("palco");


// var canvas = document.getElementById("palco");
// var p = new Processing(canvas, sketch);