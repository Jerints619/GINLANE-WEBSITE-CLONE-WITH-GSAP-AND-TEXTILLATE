$(function () {

    $('.rock').textillate({

        selector: '.texts',
        loop: true,
        minDisplayTime: 2000,
        // visibility: hidden to the element before running this plugin)
        initialDelay: 0,
        autoStart: true,


        in: {

            effect: 'fadeInLeftBig',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,

            // callback that executes once the animation has finished
            callback: function () { }
        },

        out: {
            effect: 'fadeOut',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: true,
            reverse: false,
            callback: function () { }
        },

        // callback that executes once textillate has finished
        callback: function () { },

        // set the type of token to animate (available types: 'char' and 'word')
        type: 'char'
    })


});


















gsap.to(".wwe", {

    scrollTrigger: {

        trigger: ".wwe",
        start: "top 0%",
        end: "bottom 10%",
        scrub: 1,
        scroll: "#maindiv",
       
    },

    y: 30,
    duration: 10,
    opacity: 0
    


});


gsap.to(".msd", {

    scrollTrigger: {
        trigger: ".msd",
        start: "top 30%", 
        end: "bottom 10%", 
        scrub: 1, 
        scroll: "body",
        
    },

    x: 100,
    duration: 5,
   


});