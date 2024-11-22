function craternieve( ){
const copoNieve = document.createElement("div")
nieve.classList.add(copoNieve);
nieve.style.left = Math.random() * 100 + "vw"; //vista del ancho
nieve.style.animationDuration = Math.random() * 20 + 150 + "s";
document.body.appendChild(copoNieve);
selTimeout(() => {
    copoNieve.remove();
}, 5000);
}




let nombre = "elena";
let nombreUsuario = "elena";
//console.log()
console.log(nombre);
//alert;
//operador logicas;
console.log("hola");
console.log(5 > 4);//mayor que
console.log(5 < 4);//menor que
console.log(5 >= 5);//igual que 
console.log(5 == 4);//igual que
console.log(5 == 5); //Igual que 
console.log(5 === "5");
console.log(5 != 7);//no es igual 
let mayor = 5 > 8;
console.log("a" > "b")
console.log("Cortazar" > "Navarro");
let articulo = ("texto")

let edad = 45;

//condicionales
if (edad > 18) {
    alert("eres mayor de edad")
}
else if (edad > 18) {
    console.log("puede crear una cuenta")
}
else {
    console.log("no puedo crear una cuenta")
}
let premiun = true;

if (premiun) {

    console.log("tienes cuentas premiun");
    alert("bienvenido");
}

//interactuar con hmt Dom;
//    recojo el elemento;  // que hago
document.getElementById("texto").innerHTML = "holaaaa" + nombreUsuario;
document.getElementById("caja").innerHTML = "<p>hola otra vez</p>";
document.body.style.color = "red";
document.getElementsByClassName
// seleciona el primer elemento 
document.querySelector("p").innerHTML
// seleciona todod los elementos 

let texto1 = document.getElementById("texto");
texto1.innerHTML = "he guardado mi seletor";
function saludar() {
    alert("Bienvenido");
}

function modoDia(){
    document.body.style.color = "black"; 
    document.body.style.backgroundColor = "#B0E0E6";
}
function modoNoche(){
    document.body.style.color = "white";
    document.body.style.backgroundColor = "#483D8B"; 
    

}
saludar();

//intereactuar con hmtl DOM

//recojo el elemento // que hago





