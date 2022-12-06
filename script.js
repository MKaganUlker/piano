const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");


let audio = new Audio("tunes/a.wav");
const playTune=(key)=>{
    audio.src = 'tunes/'+key+'.wav';
    audio.play();

    const clickedKey = document.querySelector('[data-key='+key+']');
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },150);
}
let allKeys=[];
pianoKeys.forEach(key =>{
    key.addEventListener("click",()=>playTune(key.dataset.key));
    
    allKeys.push(key.dataset.key);
});
const pressedKey=(e)=>{
    if(allKeys.includes(e.key)) playTune(e.key);
    
}

const showHideKeys=()=>{
    pianoKeys.forEach(key=>key.classList.toggle("hide"));
}
const handleVolume = (e)=>{
    audio.volume = e.target.value;
    
}

volumeSlider.addEventListener("input",handleVolume);
keysCheckbox.addEventListener("click",showHideKeys);
document.addEventListener("keydown",pressedKey);