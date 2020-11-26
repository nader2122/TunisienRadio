class Players{
    constructor(){
    var playHeight= document.getElementById("player");
    playHeight.style.height=screen.height + "px";
    if(screen.width < 620){
        playHeight.style.width=screen.width + "px";
    }
    var heightDiv =document.getElementById("content");
    heightDiv.style.height=screen.height-250 +"px";
    }
    
    }
    onload = new Players();
    
    class Audio_player{
    constructor(){
        this.audio_file=document.getElementById("audio_file");
        this.title_radio=document.getElementById("title_radio");
        this.marche_pause=document.getElementById("marche_pause");
        
        this.isPlayed;
        this.marche_pause.addEventListener("click",()=>{
           this.Marche_pause();
        });

       
    this.names=[];
    this.names[0]="zitounafm";
    this.names[1]="mosaiquefm";   
    this.names[2]="shemsfm";
    this.names[3]="ifm";
    this.names[4]="jawharafm";
    this.names[5]="expressfm";
    this.names[6]="knoozfm";
    this.names[7]="monastirfm";
    this.names[8]="sabrafm";
    this.names[9]="radiomed";
    this.names[10]="jeunes";
    this.names[11]="nationale";
    this.names[12]="culturelle";

    this.source=[];
    this.source[0]="https://stream6.tanitweb.com/zitounafm";
    this.source[1]="https://radio.mosaiquefm.net/mosalive";
    this.source[2]="https://radio.shemsfm.net/shems";
    this.source[3]="https://live.ifm.tn/radio/8000/ifmlive?1585267848";
    this.source[4]="https://streaming2.toutech.net/jawharafm";
    this.source[5]="https://expressfm.ice.infomaniak.ch/expressfm-64.mp3";
    this.source[6]="http://streaming.knoozfm.net:8000/knoozfm";
    this.source[7]="http://rtstream.tanitweb.com/monastir";
    this.source[8]="https://stream6.tanitweb.com/sabrafm";
    this.source[9]="http://stream6.tanitweb.com/radiomed";
    this.source[10]="http://rtstream.tanitweb.com/jeunes";
    this.source[11]="http://rtstream.tanitweb.com/nationale";
    this.source[12]="http://rtstream.tanitweb.com/culturelle";

    this.compteur=0;
    this.Radio();


    
    document.getElementById("next").addEventListener("click",()=>{
    if(this.compteur<this.source.length-1){
        ++this.compteur ;
        this.isPlayed=false;
    }else{
        this.compteur=0;
       
    }
    localStorage.setItem("Saved",this.compteur);
    this.Radio();

    });
    document.getElementById("back").addEventListener("click",()=>{
    if(this.compteur>0){
        --this.compteur ;
        this.isPlayed=false;
    }else{
    this.compteur=this.source.length-1;
    }
    localStorage.setItem("Saved",this.compteur);
    this.Radio();
 
    });
    }
    Radio(){
        if(localStorage.getItem("Saved")!=null){
            this.compteur = localStorage.getItem("Saved");
        }
        this.title_radio.innerHTML=this.names[this.compteur];
        this.audio_file.src=this.source[this.compteur];
        this.Marche_pause();
    
    }



    Marche_pause(){
    if(this.isPlayed == false){
        this.marche_pause.src="./img/2.png";
        this.audio_file.play();
        this.isPlayed=true;
    }else{
        this.marche_pause.src="./img/1.png";
        this.audio_file.pause();
        this.isPlayed=false;
    }
    }
    }
    onload=new Audio_player();