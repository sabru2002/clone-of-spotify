console.log("welcome to spotify");

let audioElement = new Audio("Pyar.mp3");

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

if(masterPlay){
    masterPlay.addEventListener('click', ()=>{
        if(audioElement.paused){
            audioElement.play()
            .then(()=> console.log("Playing ✅"))
            .catch(err=> console.log("Error ❌", err));

            masterPlay.classList.replace('fa-play','fa-pause');
            if(gif) gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.replace('fa-pause','fa-play');
            if(gif) gif.style.opacity = 0;
        }
    });
}