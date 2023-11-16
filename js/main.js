const container = document.querySelector(".container");
for(var i = 0; i <= 30; i++){
    const blocks = document.createElement("div");
    blocks.classList.add("block");
    container.appendChild(blocks);
}

function animateBlocks() {
    anime({
        targets: ".block",
        translateX: function(){
            return anime.random(-700, 700);
        },
        translateY: function(){
            return anime.random(-300, 300)
        },
        scale: function(){
            return anime.random(2, 4)
        },
        duration: 7000,
        delay: anime.stagger(15),
        complete: animateBlocks,
    });
}

animateBlocks();