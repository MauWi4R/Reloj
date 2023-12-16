alert('Hola mundo desde una alerta en JavaScript');
console.log('Hola desde la consola');
let nombre = 'Ivy';
console.log('Me llamo:', nombre);
const pi = 3.1416;
let edad = 10;
let cantidad = 100;
let saludo = 'Hola';
let activo = true;

//RELOG
function currentTime() {
let date = new Date();
let hh = date.getHours();
let mm = date.getMinutes();
let ss = date.getSeconds();

hh = (hh < 10) ? "0" + hh : hh;
mm = (mm < 10) ? "0" + mm : mm;
ss = (ss < 10) ? "0" + ss : ss;

let time = hh + ":" + mm + ":" + ss;

let reloj = document.querySelector
('#reloj');
reloj.innerHTML = time
}

setInterval(currentTime, 1000)