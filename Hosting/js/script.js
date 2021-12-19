const assistir = document.querySelector('#assistir');

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
        document.querySelector('#b11').style.display = "block";
        document.querySelector('#b12').style.display = "none";
        controle1 = 1;

    }else{

        document.querySelector('#hidden11').style.display = "none";
        document.querySelector('#hidden12').style.display = "none";
        document.querySelector('#b12').style.display = "block";
        document.querySelector('#b11').style.display = "none";
        controle1 = 0;
    }   
})

sbutton.addEventListener("click", function () {

    if(controle2 == 0){

        document.querySelector('#hidden21').style.display = "flex";
        document.querySelector('#hidden22').style.display = "flex";
        document.querySelector('#b21').style.display = "block";
        document.querySelector('#b22').style.display = "none";
        controle2 = 1;

    }else{

        document.querySelector('#hidden21').style.display = "none";
        document.querySelector('#hidden22').style.display = "none";
        document.querySelector('#b22').style.display = "block";
        document.querySelector('#b21').style.display = "none";
        controle2 = 0;
    }   
})

tbutton.addEventListener("click", function () {

    if(controle3 == 0){

        document.querySelector('#hidden31').style.display = "flex";
        document.querySelector('#hidden32').style.display = "flex";
        document.querySelector('#b31').style.display = "block";
        document.querySelector('#b32').style.display = "none";
        controle3 = 1;

    }else{

        document.querySelector('#hidden31').style.display = "none";
        document.querySelector('#hidden32').style.display = "none";
        document.querySelector('#b32').style.display = "block";
        document.querySelector('#b31').style.display = "none";
        controle3 = 0;
    }   
})

qbutton.addEventListener("click", function () {

    if(controle4 == 0){

        document.querySelector('#hidden41').style.display = "flex";
        document.querySelector('#hidden42').style.display = "flex";
        document.querySelector('#b41').style.display = "block";
        document.querySelector('#b42').style.display = "none";
        controle4 = 1;

    }else{

        document.querySelector('#hidden41').style.display = "none";
        document.querySelector('#hidden42').style.display = "none";
        document.querySelector('#b42').style.display = "block";
        document.querySelector('#b41').style.display = "none";
        controle4 = 0;
    }   
})

cbutton.addEventListener("click", function () {

    if(controle5 == 0){

        document.querySelector('#hidden51').style.display = "flex";
        document.querySelector('#hidden52').style.display = "flex";
        document.querySelector('#b51').style.display = "block";
        document.querySelector('#b52').style.display = "none";
        controle5 = 1;

    }else{

        document.querySelector('#hidden51').style.display = "none";
        document.querySelector('#hidden52').style.display = "none";
        document.querySelector('#b52').style.display = "block";
        document.querySelector('#b51').style.display = "none";
        controle5 = 0;
    }   
})

sebutton.addEventListener("click", function () {

    if(controle6 == 0){

        document.querySelector('#hidden61').style.display = "flex";
        document.querySelector('#hidden62').style.display = "flex";
        document.querySelector('#b61').style.display = "block";
        document.querySelector('#b62').style.display = "none";
        controle6 = 1;

    }else{

        document.querySelector('#hidden61').style.display = "none";
        document.querySelector('#hidden62').style.display = "none";
        document.querySelector('#b62').style.display = "block";
        document.querySelector('#b61').style.display = "none";
        controle6 = 0;
    }   
})