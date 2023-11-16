function animateBlocks() {
    anime({
        targets: ".block",
        translateX: function(){
            return anime.random(-600, 600);
        },
        translateY: function(){
            return anime.random(-500, -150)
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