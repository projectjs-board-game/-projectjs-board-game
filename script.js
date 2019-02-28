 //Създавам си променливи за квадратите които ще правя.
 
 var square1, square2,square3,square4, square5, square6,square7,square8,
 square9, square10,square11,square12, square13, square14,square15,square16, square17, 
 square18;

 var battleSquare1, battleSquare2, battleSquare3, battleSquare4,
 battleSquare5, battleSquare6, battleSquare7, battleSquare8,
 battleSquare9, battleSquare10, battleSquare11, battleSquare12,
 battleSquare13, battleSquare14, battleSquare15, battleSquare16,
 battleSquare17, battleSquare18, battleSquare19, battleSquare20,
 battleSquare21, battleSquare22, battleSquare23, battleSquare24,
 battleSquare25, battleSquare26, battleSquare27;
 
 function show() {
    gamePlace.start();
    square1 = new component(30,30,"darkgray",0,0);
    square2 = new component(30,30,"gray",30,0);
    square3 = new component(30,30,"darkgray",60,0);
    square4 = new component(30,30,"gray",90,0);
    square5 = new component(30,30,"darkgray",120,0);
    square6 = new component(30,30,"gray",150,0);
    square7 = new component(30,30,"darkgray",180,0);
    square8 = new component(30,30,"gray",210,0);
    square9 = new component(30,30,"darkgray",240,0);
    square10 = new component(30,30,"gray",0,30);
    square11 = new component(30,30,"darkgray",30,30);
    square12 = new component(30,30,"gray",60,30);
    square13 = new component(30,30,"darkgray",90,30);
    square14 = new component(30,30,"gray",120,30);
    square15 = new component(30,30,"darkgray",150,30);
    square16 = new component(30,30,"gray",180,30);
    square17 = new component(30,30,"darkgray",210,30);
    square18 = new component(30,30,"gray",240,30);


    battleSquare1 = new component(30,30,"lightgray",0,60);
    battleSquare2 = new component(30,30,"lightgray",30,60);
    battleSquare3 = new component(30,30,"lightgray",60,60);
    battleSquare4 = new component(30,30,"lightgray",90,60);
    battleSquare5 = new component(30,30,"lightgray",120,60);
    battleSquare6 = new component(30,30,"lightgray",150,60);
    battleSquare7 = new component(30,30,"lightgray",180,60);
    battleSquare8 = new component(30,30,"lightgray",210,60);
    battleSquare9 = new component(30,30,"lightgray",240,60);

    battleSquare10 = new component(30,30,"lightgray",0,90);
    battleSquare11 = new component(30,30,"lightgray",30,90);
    battleSquare12 = new component(30,30,"lightgray",60,90);
    battleSquare13 = new component(30,30,"lightgray",90,90);
    battleSquare14 = new component(30,30,"lightgray",120,90);
    battleSquare15 = new component(30,30,"lightgray",150,90);
    battleSquare16 = new component(30,30,"lightgray",180,90);
    battleSquare17 = new component(30,30,"lightgray",210,90);
    battleSquare18 = new component(30,30,"lightgray",240,90);

    battleSquare19 = new component(30,30,"lightgray",0,120);
    battleSquare20 = new component(30,30,"lightgray",30,120);
    battleSquare21 = new component(30,30,"lightgray",60,120);
    battleSquare22 = new component(30,30,"lightgray",90,120);
    battleSquare23 = new component(30,30,"lightgray",120,120);
    battleSquare24 = new component(30,30,"lightgray",150,120);
    battleSquare25 = new component(30,30,"lightgray",180,120);
    battleSquare26 = new component(30,30,"lightgray",210,120);
    battleSquare27 = new component(30,30,"lightgray",240,120);


    square19 = new component(30,30,"darkgray",0,150);
    square20 = new component(30,30,"gray",30,150);
    square21 = new component(30,30,"darkgray",60,150);
    square22 = new component(30,30,"gray",90,150);
    square23 = new component(30,30,"darkgray",120,150);
    square24 = new component(30,30,"gray",150,150);
    square25 = new component(30,30,"darkgray",180,150);
    square26 = new component(30,30,"gray",210,150);
    square27 = new component(30,30,"darkgray",240,150);
    square28 = new component(30,30,"gray",0,180);
    square29 = new component(30,30,"darkgray",30,180);
    square30 = new component(30,30,"gray",60,180);
    square31 = new component(30,30,"darkgray",90,180);
    square32 = new component(30,30,"gray",120,180);
    square33 = new component(30,30,"darkgray",150,180);
    square34 = new component(30,30,"gray",180,180);
    square35 = new component(30,30,"darkgray",210,180);
    square36 = new component(30,30,"gray",240,180);


}

// Създавам променлива, която ще ни създава canvas елемент, който ще бъде изчертан със съответните
//широчина и височина.
var gamePlace = {
    canvas : document.createElement('canvas'), 
    start : function() {
        this.canvas.width = 270;
        this.canvas.height = 210;
        this.canvas.style.border = "1px";
        this.context = this.canvas.getContext("2d");

        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

    } 
}

// Създавам функция, отнасяща се до всички създадени компоненти(квадрати), която съдържа в себе си
// аргументи за широчина, височина, цвят, разположение спрямо координадите x,y
// Като искаме да се изчертава в празния canvas, който направихме преди малко.
function component(width,height,color,x,y){
    this.width = width;
    this.height=height;
    this.x=x;
    this.y=y;
    ctx=gamePlace.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.update = function(){
        ctx = gamePlace.context;
        ctx.fillStyle=color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}


//Тук създавам съответните фигури за всеки играч.
// Рицър, елф и джудже, които ще се въвеждат чрез бутони на игровото поле.

function knight1(){
    var knight1 = document.getElementById("knightRedPlayer");
    knight1 = new component(30,30,"red",30,30);
    //Задавам като свойства на всяка фигура характеристиките
    knight1 = {
        attack : 8,
        bumper : 3,
        health : 15,
        attacksSquares : 1,
        speed : 1
    }
    
}

function knight2(){
    var knight2 = document.getElementById("knightRedPlayer");
    knight2 = new component(30,30,"red",150,30);
    knight2 = {
        attack : 8,
        bumper : 3,
        health : 15,
        attacksSquares : 1,
        speed : 1
    }
}

function elf1(){
    var elf1 = document.getElementById("elfRedPlayer");
    elf1 = new component(30,30,"yellow",90,30);
    elf={
        attack : 5,
        bumper : 1,
        health : 10,
        attacksSquares : 3,
        speed : 3
    }
}

function elf2(){
    var elf2 = document.getElementById("elfRedPlayer");
    elf2 = new component(30,30,"yellow",0,0);

    elf2={
        attack : 5,
        bumper : 1,
        health : 10,
        attacksSquares : 3,
        speed : 3
    }
}

function dwarf1(){
    var dwarf1 = document.getElementById("dwarfRedPlayer");
    dwarf1 = new component(30,30,"blue",120,0);
    dwarf={
        attack : 6,
        bumper : 2,
        health : 12,
        attacksSquares : 2,
        speed : 2
    }
}

function dwarf2(){
    var dwarf2 = document.getElementById("dwarfRedPlayer");
    dwarf2 = new component(30,30,"blue",210,30);
    dwarf2={
        attack : 6,
        bumper : 2,
        health : 12,
        attacksSquares : 2,
        speed : 2
    }
}



function knight3(){
    var knight3 = document.getElementById("knightBlackPlayer");
    knight3 = new component(30,30,"red",30,150);
    knight3 = {
        attack : 8,
        bumper : 3,
        health : 15,
        attacksSquares : 1,
        speed : 1
    }
}

function knight4(){
    var knight4 = document.getElementById("knightBlackPlayer");
    knight4 = new component(30,30,"red",150,150);
    knight4 = {
        attack : 8,
        bumper : 3,
        health : 15,
        attacksSquares : 1,
        speed : 1
    }
}

function elf3(){
    var elf3 = document.getElementById("elfBlackPlayer");
    elf3 = new component(30,30,"yellow",90,180);
    elf3={
        attack : 5,
        bumper : 1,
        health : 10,
        attacksSquares : 3,
        speed : 3
    }
}

function elf4(){
    var elf4 = document.getElementById("elfBlackPlayer");
    elf4 = new component(30,30,"yellow",0,180);
    elf4={
        attack : 5,
        bumper : 1,
        health : 10,
        attacksSquares : 3,
        speed : 3
    }
}

function dwarf3(){
    var dwarf3 = document.getElementById("dwarfBlackPlayer");
    dwarf3 = new component(30,30,"blue",120,180);
    dwarf3={
        attack : 6,
        bumper : 2,
        health : 12,
        attacksSquares : 2,
        speed : 2
    }
}

function dwarf4(){
    var dwarf4 = document.getElementById("dwarfBlackPlayer");
    dwarf4 = new component(30,30,"blue",210,150);
    dwarf4={
        attack : 6,
        bumper : 2,
        health : 12,
        attacksSquares : 2,
        speed : 2
    }
}
 
function updateGamePlace(){
    knight1.x=knight1.x +1;
    knight1.update();
}


