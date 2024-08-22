
console.log(jedzenie);
console.log(napoje);
console.log(inne);
console.log(znizka);
let razem = document.getElementById("suma");


function suma () {
    let jedzenie = document.getElementById("jedzenie").value;
    let napoje = document.getElementById("napoje").value;
    let inne = document.getElementById("inne").value;
    let znizka = document.getElementById("znizka");
    console.log(znizka);
    let suma = jedzenie * 3000 + napoje * 2700 + inne * 5000;
    console.log(suma);
    if (znizka.checked) {
        if (jedzenie >= 5&& napoje >= 5) {
           
        
        suma = jedzenie*1500+napoje*1350+inne*5000;
        }
    }
    console.log(suma);
    razem.innerHTML = "Do zapłaty: " + suma + " $";
    
}