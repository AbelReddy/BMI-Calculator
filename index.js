window.onload = ()=>{
console.log("Page is started")
}


function height(){
    const hi = document.getElementById('height').value
    const wi = document.getElementById('weight').value;
    const an = (wi / Math.pow( (hi/100), 2 )).toFixed(1);
    const result = document.querySelector('.answer');
    result.innerHTML = an;
}

function clear(){
   const  cl = document.getElementById('form');
   cl.reset();

}