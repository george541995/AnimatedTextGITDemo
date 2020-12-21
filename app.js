const letters = document.querySelectorAll('.letter');
const intervalid = setInterval(function()){
    for (let letter of letters){
        letter.style.color =randomRBG();
    }
}, 2000);