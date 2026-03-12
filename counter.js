// counter program
const myincrease = document.getElementById('myincrease');
const myreset = document.getElementById('myreset');
const mydecrease = document.getElementById('mydecrease');
const mylabel = document.getElementById('mylabel');

let count = 0;

myincrease.onclick = function(){
    count++;
    mylabel.textContent = count;
}
mydecrease.onclick = function(){
    count--;
    mylabel.textContent = count;
}
myreset.onclick = function(){
    count = 0;
    mylabel.textContent = count;
}