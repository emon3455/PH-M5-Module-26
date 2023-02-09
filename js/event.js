function AddDesign(){
    let header= document.getElementById("header-title");
    header.style.backgroundColor="yellow";
    header.style.color = "gray";
    header.style.textAlign = "center";
}

function Addstyle(){

    let footer= document.getElementById("footer");
    footer.style.backgroundColor="black";
    footer.style.color = "white";
    footer.style.textAlign = "center";
}

// way 3 to add event listner:
let btn = document.getElementById("btn-3");
btn.onclick = Addstyle; //here Addstyle is a function.


// process-4:
let btn4 = document.getElementById("btn-4");
btn4.onclick = function changeBG(){
                document.body.style.backgroundColor="purple";
            }


// process-5:
let btn5 = document.getElementById("btn-5");
btn5.addEventListener("click", makeGoldenRod);
function makeGoldenRod(){
    document.body.style.backgroundColor= "gold"
}

// process-6:
let btn6  = document.getElementById("btn-6");
btn6.addEventListener("click", function(){
    document.body.style.backgroundColor="pink";
});

// process-7:()
document.getElementById("btn-7").addEventListener("click",function(){
    document.body.style.backgroundColor="aliceblue";
});

