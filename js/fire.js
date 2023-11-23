import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved} 
from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

const firebaseConfig = A_key;
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

$("#text").on("keydown",function(e){
    if(e.keyCode == 13){
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
    let h = '<div class="block" id="' + key + '">';
        h += msg.text;
        h += "</div>";
        $(".container").append(h);
});

$(".container").on("click",".block", function(){
    const key = $(this).attr("id");
    const remove_item = ref(db,"chat/" + key);
    $(this).fadeOut(800, function(){remove(remove_item)});
});

onChildRemoved(dbRef, (data) => {
    $("#"+data.key).remove();
});

$("#signout").on("click",function(){
    location.href = "login.html"
});

// サインアウトは見せかけ
// 次回は管理方法も勉強したい

/*
memo:appendした内容はhoverではできないので、mouseenterで代替
this以外にe.currentTargetも使える
ブルブル小刻みに震えて欲しかったが断念
$(".container").on("mouseenter",".block",function(e){
    const key = $(this).attr("id");
    console.log(key);
    console.log(e.currentTarget)
    $(e.currentTarget).css("background-color","red")
    $(this).css("background-color","red");
});
*/