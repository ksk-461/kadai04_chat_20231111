import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved } 
from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

<<<<<<< HEAD
const firebaseConfig = A_key;
=======
const firebaseConfig = A_Key;
>>>>>>> 587e721e01391407df248472fd4a1b3aab8cebcc
const app = initializeApp(firebaseConfig);
const db  = getDatabase(app);
const dbRef = ref(db, "chat");
$("#submit").on("click", () => {
    if($("#text").val() == ""){
        alert("秘密を入力してね");
    }else {
        const msg = {
            text : $("#text").val()
        }
        const newPostRef = push(dbRef);
        set(newPostRef,msg);
        $("#text").val(""); 
    }
});

onChildAdded(dbRef, (data) =>{
    const msg = data.val();
    const key = data.key;
    let h = '<div class="block">';
        h += msg.text;
        h += "</div>";
        $(".container").append(h);
});