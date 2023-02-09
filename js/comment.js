document.getElementById("btn").addEventListener("click",function(){

        // at first take the comment from user
        let commentField = document.getElementById("inputField");
        let comment = commentField.value;

        // step:-2 create an segment and store the commnet
        let commentPostArea = document.getElementById("comment-area");
        let com = document.createElement("p");
        com.innerText = comment;

        // blank demo text:
        let demo = document.getElementById("demo-comment");
        demo.innerText ="";

        // insert The commnet
        commentPostArea.appendChild(com);
        
});