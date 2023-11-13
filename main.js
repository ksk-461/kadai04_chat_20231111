$(() =>{
    $(".inp_txt").focus(() => {
        $(".inp_txt").attr("placeholder", "メッセージを入力");
    }).blur(() => {
        $(".inp_txt").attr("placeholder", "Aa")
    });
});