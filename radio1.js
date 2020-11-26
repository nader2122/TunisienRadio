class Volumes{
    constructor(){
this.volumes=document.getElementById("volumes");
this.audio_file=document.getElementById("audio_file");
this.ampli=document.getElementById("ampli");

this.audio_file.volume=50/100;

this.volumes.addEventListener("change",()=>{
this.audio_file.volume = this.volumes.value/100;
});
this.ampli.playbackRate=1;
this.ampli.addEventListener("change",()=>{
this.audio_file.playbackRate=this.ampli.value /100;
});
    }


    }

onload = new Volumes();