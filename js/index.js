/*
var corazon1 = document.getElementById("foto1")
corazon1.onclick = function () {
    var contador1 = document.getElementById("span1")
    contador1.innerHTML = parseInt(contador1.innerHTML) + 1;
}
var corazon2 = document.getElementById("foto2")
corazon2.onclick = function () {
    var contador2 = document.getElementById("span2")
    contador2.innerHTML = parseInt(contador2.innerHTML) + 1;
}
var corazon3 = document.getElementById("foto3")
corazon3.onclick = function () {
    var contador3 = document.getElementById("span3")
    contador3.innerHTML = parseInt(contador3.innerHTML) + 1;
}
var corazon4 = document.getElementById("foto4")
corazon4.onclick = function () {
    var contador4 = document.getElementById("span4")
    contador4.innerHTML = parseInt(contador4.innerHTML) + 1;
}
var corazon5 = document.getElementById("foto5")
corazon5.onclick = function () {
    var contador5 = document.getElementById("span5")
    contador5.innerHTML = parseInt(contador5.innerHTML) + 1;
}
var corazon6 = document.getElementById("foto6")
corazon6.onclick = function () {
    var contador6 = document.getElementById("span6")
    contador6.innerHTML = parseInt(contador6.innerHTML) + 1;
}
    */
   var corazones=document.getElementsByClassName("fa-heart");

for (let index = 0; index < corazones.length; index++) {
    const element = corazones[index];
    element.onclick=function(c){
        var cont=c.target.nextElementSibling;
        cont.innerHTML++;
    }
    
}