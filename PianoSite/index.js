var numberOfKeys = document.querySelectorAll(".btn").length;

for (var i = 0;  i < numberOfKeys ; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click",function (){
        //this.style.color = "white"; //this burada basılan nesne
        if(this.querySelector("p").innerHTML==="Tab"){
            playSound("Tab");
        }
        else{
            var buttonKey = this.querySelector("p").innerHTML.toLowerCase();
            playSound(buttonKey);
            buttonAnimation(this.id);
        }
    });
}
document.addEventListener("keydown",function(event){
    if(event.key == "Tab") {
        playSound("Tab");
    }
    else{
        playSound(event.key.toLowerCase());
    }
});

function playSound(key){
    switch (key) {
        case "Tab":
            var C1 = new Audio('./keySounds/key01.mp3');
            C1.pause();
            C1.play();
            buttonAnimation("C1");
            break;
        case "1":
            var Cb1 = new Audio('./keySounds/key02.mp3');
            Cb1.pause();
            Cb1.play();
            buttonAnimation("Cb1");
            break;
        case "q":
            var D1 = new Audio('./keySounds/key03.mp3');
            D1.play();
            buttonAnimation("D1");
            break;
        case "2":
            var Db1 = new Audio('./keySounds/key04.mp3');
            Db1.play();
            buttonAnimation("Db1");
            break;
        case "w":
            var E1 = new Audio('./keySounds/key05.mp3');
            E1.play();
            buttonAnimation("E1");
            break;
        case "e":
            var F1 = new Audio('./keySounds/key06.mp3');
            F1.play();
            buttonAnimation("F1");
            break;
        case "4":
            var Fb1 = new Audio('./keySounds/key07.mp3');
            Fb1.play();
            buttonAnimation("Fb1");
            break;
        case "r":
            var G1 = new Audio('./keySounds/key08.mp3');
            G1.play();
            buttonAnimation("G1");
            break;
        case "5":
            var Gb1 = new Audio('./keySounds/key09.mp3');
            Gb1.play();
            buttonAnimation("Gb1");
            break;
        case "t":
            var A1 = new Audio('./keySounds/key10.mp3');
            A1.play();
            buttonAnimation("A1");
            break;
        case "6":
            var Ab1 = new Audio('./keySounds/key11.mp3');
            Ab1.play();
            buttonAnimation("Ab1");
            break;
        case "y":
            var B1 = new Audio('./keySounds/key12.mp3');
            B1.play();
            buttonAnimation("B1");
            break;
            /* -------------------------------------------------------------------------- */
            /*                                Second Part                               */
            /* -------------------------------------------------------------------------- */
        case "u":
            var C2 = new Audio('./keySounds/key13.mp3');
            C2.play();
            buttonAnimation("C2");
            break;
        case "8":
            var Cb2 = new Audio('./keySounds/key14.mp3');
            Cb2.play();
            buttonAnimation("Cb2");
            break;
        case "i":
            var D2 = new Audio('./keySounds/key15.mp3');
            D2.play();
            buttonAnimation("D2");
            break;
        case "9":
            var Db2 = new Audio('./keySounds/key16.mp3');
            Db2.play();
            buttonAnimation("Db2");
            break;
        case "o":
            var E2 = new Audio('./keySounds/key17.mp3');
            E2.play();
            buttonAnimation("E2");
            break;
        case "z":
            var F2 = new Audio('./keySounds/key18.mp3');
            F2.play();
            buttonAnimation("F2");
            break;
        case "s":
            var Fb2 = new Audio('./keySounds/key19.mp3');
            Fb2.play();
            buttonAnimation("Fb2");
            break;
        case "x":
            var G2 = new Audio('./keySounds/key20.mp3');
            G2.play();
            buttonAnimation("G2");
            break;
        case "d":
            var Gb2 = new Audio('./keySounds/key21.mp3');
            Gb2.play();
            buttonAnimation("Gb2");
            break;
        case "c":
            var A2 = new Audio('./keySounds/key22.mp3');
            A2.play();
            buttonAnimation("A2");
            break;
        case "f":
            var Ab2 = new Audio('./keySounds/key23.mp3');
            Ab2.play();
            buttonAnimation("Ab2");
            break;
        case "v":
            var B2 = new Audio('./keySounds/key24.mp3');
            B2.play();
            buttonAnimation("B2");
            break;
        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {

    var activeButton =  document.getElementById(currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
    }
function checkKeys() {
    // Get the checkbox
    var checkBox = document.getElementById("keyCheck");
    // Get the output text
        var buttons = document.querySelectorAll(".btn");
        buttons.forEach(function(button) {
            // Düğmenin içindeki ilk p etiketini buluyoruz
            var text = button.querySelector("p");
            if (checkBox.checked== true){
                text.style.display = "block";
              } else {
                text.style.display = "none";
              }
        });
  }
  function checkNotes(){
    var checkBox = document.getElementById("notesCheck");

        var blackKeyNotes = document.querySelectorAll(".blackKeyNote");
        var whiteKeyNotes = document.querySelectorAll(".whiteKeyNote");
        var specialButtons = document.querySelectorAll("#sButtons");
        blackKeyNotes.forEach(function(blackKeyNote) {
            if (checkBox.checked== true){
                blackKeyNote.style.display = "block";
              } else {
                blackKeyNote.style.display = "none";
              }
        });
        whiteKeyNotes.forEach(function(whiteKeyNote) {
            if (checkBox.checked== true){
                whiteKeyNote.style.display = "block";
              } else {
                whiteKeyNote.style.display = "none";
              }
        });
        specialButtons.forEach(function(specialButton) {
            if (checkBox.checked== true){
                specialButton.style.display = "block";
              } else {
                specialButton.style.display = "none";
              }
        });
  }