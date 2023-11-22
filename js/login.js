import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";


$(function(){
    const firebaseConfig = A_key;
  
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    $("#submit").on("click",function(){
        const email = $("#emailInp").val();
        const pass = $("#passInp").val();
    
        signInWithEmailAndPassword(auth, email, pass)
        .then(()=>{
            location.href="index.html";
        })
        .catch((error)=>{
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        })

        $("#emailInp").val("");
        $("#passInp").val("");
    })

    $("#passInp").on("keydown",function(e){
        if(e.keyCode == 13){
            const email = $("#emailInp").val();
            const pass = $("#passInp").val();
        
            signInWithEmailAndPassword(auth, email, pass)
            .then(()=>{
                location.href="index.html";
            })
            .catch((error)=>{
                alert(error.message);
                console.log(error.code);
                console.log(error.message);
            })

            $("#emailInp").val("");
            $("#passInp").val("");
        }
    });
});