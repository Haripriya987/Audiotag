
    let music = document.getElementsByTagName("i")[0];
    let audio = document.getElementsByTagName("audio")[0];
music.addEventListener("click", () => {
    if (music.classList.contains("fa-play")) {
       audio2.pause();
       music2.classList.remove("fa-pause");
        music2.classList.add("fa-play");
        audio.play();
        music.classList.remove("fa-play");
        music.classList.add("fa-pause");
    }
    else {
        music.classList.remove("fa-pause");
        music.classList.add("fa-play");
        audio.pause();

    }
});
let music2 = document.getElementsByTagName("i")[1];
let audio2 = document.getElementsByTagName("audio")[1];
music2.addEventListener("click", () => {
    if (music2.classList.contains("fa-play")) {
       audio.pause();
       music.classList.remove("fa-pause");
       music.classList.add("fa-play");
        audio2.play();
        music2.classList.remove("fa-play");
        music2.classList.add("fa-pause");
    }
    else {
        audio2.pause();
        music2.classList.remove("fa-pause");
        music2.classList.add("fa-play");
    }
});

