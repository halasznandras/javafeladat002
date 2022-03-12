// Gyakorlat
document.getElementById('egy').innerHTML = 'átírva'
document.getElementsByClassName('ketto').innerHTML = 'működik'


// Változók
var szam = 35;
console.log(szam);
let szam2 = 112;
const szam3 = 18;
console.log(szam2, szam3);
console.log(typeof szam);
var nev = 'Elemér'
console.log(typeof nev);
var esik = false;
console.log(typeof esik);
var varos = "Szolnok";
var cim = `Kereszt utca 6.`;
console.log(typeof varos, typeof cim);

document.getElementById('szam').innerHTML = szam
document.getElementById('szam2').innerHTML = szam2
document.getElementById('szam3').innerHTML = szam3
document.getElementById('nev').innerHTML = nev
document.getElementById('esik').innerHTML = esik
document.getElementById('varos').innerHTML = varos
document.getElementById('cim').innerHTML = cim


//Formázás

var szam4 = 1976.12345;
console.log(szam4.toFixed(3))
console.log(szam4.toFixed(10))
console.log(szam4.toPrecision(6))
console.log(szam4.toPrecision(12))

document.getElementById('szam4').innerHTML = szam4
document.getElementById('toFixed').innerHTML = szam4.toFixed(3)

//Math objektumok

console.log(Math.PI)
console.log(Math.abs(-5))
// kerekítő függvények
console.log(Math.ceil(szam4))
console.log(Math.floor(szam4))
console.log(Math.round(5.4))
console.log(Math.round(5.5))

document.getElementById('floor').innerHTML = Math.floor(szam4)
document.getElementById('round').innerHTML = Math.round(5.5)

//hatványozás, gyökvonás
var x = 2;
var y = 8;
console.log(Math.pow(x, y))
console.log(Math.sqrt(9))
document.getElementById('hatvany').innerHTML = Math.pow(x, y)


//szögek
var szog = 30;
var rad = szog * Math.PI/180;

console.log(Math.sin(rad))
console.log(Math.cos(rad))
console.log(Math.tan(rad))

//parater

var a = 30;
var b = 35;
var gamma = 30;
var rad = gamma*Math.PI/180;
var terulet = a*b*Math.sin(rad)
console.log('terulet: ', terulet)
//document.getElementById('terulet').innerHTML = 'terulet: '+ terulet
pElem = document.getElementById('terulet');
pElem.innerHTML = 'terulet: ' + terulet.toFixed(2);


//0252 feladat
var tokesitesekSzama = 6;
var nevleges = 5;
//var ev = 1;
var betet = 100;
var tenyleges = (Math.pow(1+ (nevleges/(100* tokesitesekSzama)), tokesitesekSzama-1 )) * betet;
console.log('Tényleges kamat: ', tenyleges)
//hosszú verzió a kiírásra
//document.getElementById('tenyleges').innerHTML = 'Tényleges kamat: ' + tenyleges.toFixed(4);

//rövid verzió a kiírásra
var tenyElem = document.getElementById('tenyleges');
tenyElem.innerHTML = 'Tényleges kamat: ' + tenyleges.toFixed(4);

//véletlenszám generálás 10-ig
var vel = parseInt(Math.random()* 10);
document.write(vel)
document.getElementById('veletlen').innerHTML = vel;

//konvertálás
var szamKar = '35';
var szam5 = parseInt(szamKar);
console.log(szam5)
var szamKar2 = '35.12345';
var szam6 = parseFloat(szamKar2);
console.log(szam6)

//string-é alakítás
var karlanc = String(szam5);
console.log(typeof karlanc);

//számmá alakítás
var szam5 = Number(szamKar);
console.log(typeof szam5);

//logikai alakítás (0) kivételével mind igaz -+
var szam7 = 2.6;
var logikai_tipus = Boolean(szam7);
console.log(logikai_tipus);

document.getElementById('konvert').innerHTML = logikai_tipus;

//bevitel
/*
var nev2 = prompt('Neved: ');
console.log('Beírt név: ', nev2);
*/

const inElem = document.querySelector('#nev2')
const startGomb = document.querySelector('#startGomb')
startGomb.addEventListener('click', () => {
    console.log(inElem.value);
    document.getElementById('bevitel').innerHTML = inElem.value;
})


//szelekció
var szam8 = 3;
if (szam8 > 0) {
    console.log('pozitív')
}
else if (szam8 > 0) {
    console.log('negatív')
}
else {
    console.log('nulla')
}

//switch
switch(szam8) {
    case 1:
        console.log('egy');
        break;
    case 2:
        console.log('kettő');
        break;
    case 3:
        console.log('három');
        break;
    default:
        console.log('Még nincs megvalósítva');
}
document.getElementById('szelekcio').innerHTML = szam8;