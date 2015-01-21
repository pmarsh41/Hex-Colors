window.onload = app;

// runs when the DOM is loaded
function app() {
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {
            url: "./dist/style.css"
        },
        //js
        {
            url: "./bower_components/jquery/dist/jquery.min.js"
        }, {
            url: "./bower_components/lodash/dist/lodash.min.js"
        }
        // {url: "./bower_components/backbone/backbone.js"}
    ).then(function() {
        document.querySelector("html").style.opacity = 1;
        // start app?
    })

    var h1s = [].slice.call(document.querySelectorAll('h1'));


    setInterval(function() {
        var d = new Date();

        var parts = [d.getHours(), d.getMinutes(), d.getSeconds()]

        if (parts[2] < 10) {

            //add 0

            parts[2] = "0" + parts[2];

        if (parts[1] < 10) {

            parts[1] = "0" + parts[1];

        if (parts[0] < 10) {

            parts[0] = "0" + parts[0];

        }
    }

            //parts.forEach(function("0" + [0], [1]){

            //console.log(parts;)
        }

        h1s.forEach(function(el) {
            el.innerHTML = parts.join(":")

        })

        var mySecs = Math.round((d.getSeconds() / 59) * 255);
        var myMins = Math.round((d.getMinutes() / 59) * 255);
        var myHours = Math.round((d.getHours() / 23) * 255);

        //function bgColor()(
        document.body.style.backgroundColor = "rgb(" + myHours + ',' + myMins + ',' + mySecs + ")";
        //"rgb( " + 123 + " , " + 123 + " , " + 123 + ")"
        //"rerrthy" + someVar
    }, 1 * 1000)


}
