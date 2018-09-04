'use strict';
var a = document.getElementById('num1');
var b = document.getElementById('num2');
var result;
document.getElementById('plus').onclick = function () {
    if (this.value === '+') {
        result = parseInt(a.value) + parseInt(b.value);
        document.getElementById('x').innerHTML = result;
    }
};
document.getElementById('min').onclick = function() {
    if (this.value === '-') {
        result = parseInt(a.value) - parseInt(b.value);
        document.getElementById('x').innerHTML = result;
    }
};
document.getElementById('div').onclick = function () {
    if (this.value === '/') {
        result = parseInt(a.value) / parseInt(b.value);
        document.getElementById('x').innerHTML = result;
    }
};
document.getElementById('mul').onclick = function () {
    if (this.value === '*') {
        result = parseInt(a.value) * parseInt(b.value);
        document.getElementById('x').innerHTML = result;
    }
};
document.getElementById('reset').onclick = function (){
    document.getElementById('myForm'). value = ""; };
