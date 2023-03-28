const play_pause_btn = document.getElementsByClassName("play-pause")
const play_btn = document.getElementsByClassName("play")
const pause_btn = document.getElementsByClassName("pause")
const stop_btn = document.getElementsByClassName("stop")
const timeline = document.getElementsByClassName("timeline")
const sound_btn = document.getElementsByClassName("sound")
const settings_btn = document.getElementsByClassName("settings")
const expand_btn = document.getElementsByClassName("expand")

const simple_video = document.getElementById("simp-video")

const switches = {
    play_pause_switch: 1,
    sound_swicth: 0.5,
}

function playVideo(video_elem){
    video_elem.play()
    play_pause_btn[0].style.backgroundImage = "url('../icons/pause.svg')"
    opacityAnim(play_pause_btn[0])
    switches.play_pause_switch = 0
}
function pauseVideo(video_elem){
    video_elem.pause()
    play_pause_btn[0].style.backgroundImage = "url('../icons/play.svg')"
    play_pause_btn[0].style.opacity = 1
    switches.play_pause_switch = 1
}
function stopVideo(video_elem){
    video_elem.pause()
    video_elem.currentTime = 0
}
function getVideoTime(){}
function soundOn(video_elem,sound){
    sound.style.backgroundImage = "url('../icons/sound.svg')"
    video_elem.volume = 1
}
function soundOff(video_elem,sound){
    sound.style.backgroundImage = "url('../icons/not_sound.svg')"
    video_elem.volume = 0
}
function opacityAnim(elem){
    let opac = 8
    let inter = setInterval(() => {
        elem.style.opacity = `0.${opac}`
        --opac
        
        if(opac === -1){
            clearInterval(inter)
        }
    },50)
}
function saveVideo(){}
function expandOn(){}
function expandOff(){}

simple_video.addEventListener("click", () => {
    if(switches.play_pause_switch === 1){
        playVideo(simple_video)
    }else{
        pauseVideo(simple_video)
    }
})
play_btn[0].addEventListener("click", () => {
    playVideo(simple_video)
})
pause_btn[0].addEventListener("click", () => {
    pauseVideo(simple_video)
})
stop_btn[0].addEventListener("click", () => {
    stopVideo(simple_video)
})
sound_btn[0].addEventListener("click", function(){
    if(switches.sound_swicth === 0){
        soundOn(simple_video, this)
        switches.sound_swicth = simple_video.volume
    }else{
        soundOff(simple_video, this)
        switches.sound_swicth = simple_video.volume
    }
})
settings_btn[0].addEventListener("click", () => {})
expand_btn[0].addEventListener("click", () => {})