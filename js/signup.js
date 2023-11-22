import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, set,ref } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

$(function(){
    const firebaseConfig = A_key;
          
        const app = initializeApp(firebaseConfig);
        const db = getDatabase();
        const auth = getAuth(app);

        $("#signup").on("click",function(){
            const fname = $("#fnameInp").val();
            const lname = $("#lnameInp").val();
            const email = $("#emailInp").val();
            const pass = $("#passInp").val();
            const email_cfm = $("#emailInp_cfm").val();
            const pass_cfm = $("#passInp_cfm").val();
            const gender = $("#gender").val();
            const age = $("#age").val();

            if(email != email_cfm || pass != pass_cfm){
                alert("メールアドレスまたはパスワードが異なっています")
            }
            else if(email == "" || pass == "" || age == ""){
                alert("必要事項を入力してください")
            }else{
                createUserWithEmailAndPassword(auth, email, pass)
                .then((credentials)=>{
                    set(ref(db,"UsersAuthList/" + credentials.user.uid),{
                        firstname: fname,
                        lastname: lname,
                        gender: gender,
                        age: age,
                    })
                    location.href ="login.html";
                    alert("登録が完了しました");
                })
                .catch((error)=>{
                    alert(error.message);
                    console.log(error.code);
                    console.log(error.message);
                })
            }
            
        })
});