function onLoad() {
    document.getElementById("hide").style.display = "none";

    let audio = document.getElementById("audio");

    audio.volume = 0.1;

    if (audio.duration <= 0 || audio.paused) audio.pause();
}

function toggleAudio() {
    let audio = document.getElementById("audio");

    if (audio.paused) audio.play();
    else audio.pause();
}