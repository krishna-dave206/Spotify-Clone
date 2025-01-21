console.log("Welcome to Spotify");

//Initialize the varibles
let songIndex = 0;
let audioElement  = new Audio("Ishq_Hai.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("progress_bar");

let songs = [
    {songName: "Ishq Hai", filePath: "Ishq_Hai.mp3", coverPath: "Ishq_hai.jpg"},
    {songName: "Jo Tum Mere Ho", filePath: "Anuv_Jain.mp3", coverPath: "Jo_tum_mere_ho.jpeg"},
    {songName: "Millionaire", filePath: "Millionaire.mp3", coverPath: "Millionaire.webp"},
    {songName: "Ishq Hai", filePath: "Ishq_Hai.mp3", coverPath: "Ishq_hai.jpg"},
]

//Handle play/pause Click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('play');
        masterPlay.classList.add('pause');
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('pause')
        masterPlay.classList.add('play')
    }
})
//Listen to events
audioElement.addEventListener('timeupdate', ()=> {
    //Seekbar update
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})