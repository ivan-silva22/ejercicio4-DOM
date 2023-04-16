function reloj(){
    let fechaActual = new Date();

let fecha = document.getElementById('diaSemana');
let dia = document.getElementById('dia');
let mes = document.getElementById('mes');
let anio = document.getElementById('anio');
let hora = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let ampm = document.getElementById('amPm');

let dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

fecha.innerHTML = `${dias[fechaActual.getDay()]}`;
dia.innerHTML = `${fechaActual.getDate()}`;
mes.innerHTML = `${meses[fechaActual.getMonth()]}`;
anio.innerHTML = `${fechaActual.getFullYear()}`;

let horas = fechaActual.getHours(),
    minuto = fechaActual.getMinutes(),
    segundo = fechaActual.getSeconds();

if(horas < 10){
    horas = '0' + horas;
}
if(minuto < 10){
    minuto = '0' + minuto;
}
if(segundo < 10){
    segundo = '0' + segundo;
}

if(horas > 12){
    ampm.innerHTML = "PM";
}else{
    ampm.innerHTML = "AM";
}

hora.innerHTML = `${horas}`;
minutos.innerHTML = `${minuto}`;
segundos.innerHTML = `${segundo}`;
}

setInterval(reloj, 1000);

