var assistir = document.querySelector('#assistir');

assistir.addEventListener("click", function () {

    window.location.href = "https://www.youtube.com/watch?v=0rS25QzvAzQ&t=6265s";

})

const fbutton = document.querySelector('#fbutton');
var controle1 = 0;

const sbutton = document.querySelector('#sbutton');
var controle2 = 0;

const tbutton = document.querySelector('#tbutton');
var controle3 = 0;

const qbutton = document.querySelector('#qbutton');
var controle4 = 0;

const cbutton = document.querySelector('#cbutton');
var controle5 = 0;

const sebutton = document.querySelector('#sebutton');
var controle6 = 0;


fbutton.addEventListener("click", function () {

    if(controle1 == 0){

        document.querySelector('#hidden11').style.display = "flex";
        document.querySelector('#hidden12').style.display = "flex";
        controle1 = 1;

    }else{

        document.querySelector('#hidden11').style.display = "none";
        document.querySelector('#hidden12').style.display = "none";
        controle1 = 0;
    }   
})