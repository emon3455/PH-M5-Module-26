
document.getElementById("input").addEventListener("keyup",function(event){
    let text = event.target.value;

    if(text==="Delete"){
        document.getElementById("btn").removeAttribute("disabled",false);

        document.getElementById("btn").addEventListener("click",function(){    
            document.getElementById("demo-text").style.display="none";      
        });

    }

    else{
        document.getElementById("btn").setAttribute("disabled",true);
    }

});