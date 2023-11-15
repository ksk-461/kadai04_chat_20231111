const container = document.querySelector(".container");
for(var i = 0; i <= 50; i++){
    const blocks = document.createElement("div");
    blocks.classList.add("block");
    container.appendChild(blocks);
}

function animateBlocks() {
    anime({
        targets: ".block",
        translateX: function(){
            return anime.random(-500, 500);
        },
        translateY: function(){
            return anime.random(-250, 250)
        },
        scale: function(){
            return anime.random(2, 3)
        },
        duration: 7000,
        delay: anime.stagger(15),
        complete: animateBlocks,
    });
}

animateBlocks();