import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

$(function(){
    const firebaseConfig = A_key;
          
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const auth = getAuth(app);
    const dbRef = ref(db,"UsersAuthList")

    $("#signup").on("click",function(){
        const fname = $("#fnameInp").val();
        const lname = $("#lnameInp").val();
        const email = $("#emailInp").val();
        const pass = $("#passInp").val();
        const email_cfm = $("#emailInp_cfm").val();
        const pass_cfm = $("#passInp_cfm").val();
        const gender = $("#gender").val();
        const age = $("#age").val();

        const user = {
            firstname: fname,
            lastname: lname,
            gender: gender,
            age: age,
        }
        if(email != email_cfm || pass != pass_cfm){
            alert("メールアドレスまたはパスワードが異なっています")
        }
        else if(email == "" || pass == "" || age == ""){
            alert("必要事項を入力してください")
        }else{
            createUserWithEmailAndPassword(auth, email, pass)
            .then(()=>{
                const newPostRef = push(dbRef);
                set(newPostRef,user);
                location.href ="login.html";
                alert("登録が完了しました\n続けてログインしてください。");
            })
            .catch((error)=>{
                alert(error.message);
                console.log(error.code);
                console.log(error.message);
            })
        }
        
    })
});