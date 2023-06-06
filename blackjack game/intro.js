
const audio = document.getElementById("audio")
const muteIcon = document.querySelector(".muteIcon")
musicOn = false;

function manageAudio(){
    if(musicOn == true){
        musicOn = false;
        audio.pause();
        muteIcon.innerHTML = `<i id="inmuteButton" class='fas fa-volume-mute'></i>`

    }else if(musicOn == false){
        audio.play();
        musicOn = true;
        muteIcon.innerHTML = `<i id="muteButton" class='fas fa-volume-up'></i>`
    }
}

