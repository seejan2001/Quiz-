let btn = document.getElementById('button-submit');
let change = document.getElementById('data-set');
let change1 = document.getElementById('data-set-2');
let change2 = document.getElementById('data-set-3');
let blank = document.getElementById('blank-page');
let content = document.getElementById('content');
let i=1;
let p=0;

// Function call
function getCssValue(){
    switch(i){
        case 1:{
            change.style.display="none";
            change1.style.display="block";
            break;}
        case 2:{
            change1.style.display="none";
            change2.style.display="block";
            break;
        }
        default: {
             change2.style.display="none";
             content.innerHTML = p;
             btn.style.display="none";
        }  
                break;
}
}
// For Giving Reward
function point(){
    p++;
}
// if we press the button
btn.addEventListener('click',()=>{
    getCssValue();
    i++;
})