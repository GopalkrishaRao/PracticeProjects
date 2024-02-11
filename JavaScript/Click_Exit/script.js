let container = document.getElementsByClassName('modelContainer')[0];
let btn = document.getElementsByClassName('modelBtn')[0];

btn.addEventListener('click', ()=>{
    toggleModel(true)
})
function toggleModel(toggle){
    container.style.display=toggle?'flex':'none';
}

container.addEventListener('click', e=>{
    if(e.target.className==='modelContainer')toggleModel(false)
})