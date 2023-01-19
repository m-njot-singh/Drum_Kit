
for(var i=0;i<document.querySelectorAll(".Drum").length;i++){
    document.querySelectorAll(".Drum")[i].addEventListener("click" ,function()
{
    // alert("clickd");
    var buttonpressed = this.innerHTML;
   makeSound(buttonpressed);

});
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
});

function makeSound(key){
     switch (key) {
        case "w":
            var A=new Audio("sounds/tom-1.mp3");
            A.play();
            break;

                case "a":
                var A=new Audio("sounds/tom-2.mp3");
                A.play();
                break;        
                
                case "s":
                var A=new Audio("sounds/tom-3.mp3");
                A.play();
                break;        
                
                case "d":
                var A=new Audio("sounds/tom-4.mp3");
                A.play();
                break;        
                
                case "j":
                var A=new Audio("sounds/snare.mp3");
                A.play();
                break;        
                
                case "k":
                var A=new Audio("sounds/crash.mp3");
                A.play();
                break;

                case "l":
                    var A=new Audio("sounds/kick-bass.mp3");
                    A.play();
                    break;
        

    
        default:
            break;
    }
}





// var audio = new Audio(["sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/snare.mp3","sounds/crash.mp3","sounds/kick.mp3"]);
//     for(var j=i;j<audio.length;j++){
//         var A=new Audio(audio[j]);
//           A.play();
//     }