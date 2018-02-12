var words;

function setup() {
    
    createCanvas(640,360);
    let lang = navigator.language || 'en-US';
    let speechRec = new p5.SpeechRec(lang,gotSpeech);
    
    let continuous = true;
    let interim = false;
    speechRec.start(continuous, interim);

    function gotSpeech(){
        
        if(speechRec.resultValue){
            createP(speechRec.resultString);
            words = speechRec.resultString;
            localStorage.setItem('Words',words);
        }
   
    }
   
    
}
var getWords = localStorage.getItem('Words');

 function draw(){
     
        
        rect(200,200,100,100);
     
        
     
     //console.log(getWords);
     if (getWords == getWords){
         fill(getWords);
         
     }
    
             
     
    }