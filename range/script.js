let img = document.querySelectorAll('img');
let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');

inp1.addEventListener('input', Border)

function Border(){
    console.log(inp2.value);
    for (let i=0; i<img.length; i++){
img[i].style.borderRadius=inp1.value +'%'
    }
};

function Opacity(){
    
    for (let i=0; i<img.length; i++){
img[i].style.opacity =inp2.value
    }
}