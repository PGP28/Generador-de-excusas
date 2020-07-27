

let who = [' el perro ', ' mi abuela ', ' su tortuga ', ' mi pájaro '];
let what = [' comer ', ' enojado ', ' aplastado ', ' destrozado '];
let when = [' antes de la clase ', ' justo a tiempo ', ' cuando terminé ', ' durante mi almuerzo ', ' mientras estaba orando '];

function excuseGenerator(quien, que, cuando){
    numQuien = Math.floor(Math.random() * quien.length);
    numQue = Math.floor(Math.random() * que.length);
    numCuando = Math.floor(Math.random() * cuando.length);
    return quien[numQuien] + "" + que[numQue] + "" + cuando[numCuando]
}
function onLoad(){
    var excusa = document.getElementById('excuse');
    excusa.innerHTML = excuseGenerator(who, what, when);
}
window.onload = onLoad;