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

    //////////////////////////////////////////

    var h1 = document.querySelector('h1');
    var h2 = document.querySelector('h2');
    var div = document.querySelector('div');
    var body = document.querySelector('body');
    //console.log(h1+" "+body);

    var colorHist = [];
    //var colorCounter = 15;


    setInterval(function() {
        // set current time
        var d = new Date();

        // get hours, minutes, seconds
        var parts = [d.getHours(), d.getMinutes(), d.getSeconds()];

        // convert to hexadecimal
        var color = [];
        color[0] = (Math.round((parts[0] / 24) * 255)).toString(16);
        color[1] = (Math.round((parts[1] / 60) * 255)).toString(16);
        color[2] = (Math.round((parts[2] / 60) * 255)).toString(16);

        color = color.map(function(val) {
            return (val.length < 2) ? "0" + val : val;
        })

        //console.log('R = ' + color[0] + ', G = ' + color[1] + ', B = ' + color[2]);


        // add 0s to single digit
        parts = parts.map(function(val) {
            if (val < 10) {
                val = '0' + val;
            }
            return val;
        })

        h2.innerHTML = color.join(':');
        h1.innerHTML = parts.join(':');
        //div.style.backgroundColor = '#' + color.join('');

        //body.style.background = 'repeating-radial-gradient(circle,#000,#000 15em, #' + colorHist.join()

        //colorHist.push('#'+color.join('')+' '+colorCounter+'em');

        //CREATE GRADIENT


        // put color history in background
        body.style.background = 'radial-gradient(circle, #' + color.join('') + ', #' + color.join('') + ' .1em' + colorHist.join('') + ')';
        //console.log(body.style.background = 'repeating-radial-gradient(circle, #000, #000 15em'+colorHist.join('')+')');

        // ems must increase by 3 each iteration
        colorHist = colorHist.map(function(val, ind) {
            if (ind % 3 === 1) {
                val += .1;
            }
            return val;
        })

        if (colorHist.length > 2999) {
            colorHist.splice(2995, 6);
        }

                // unshift em, then push number, then current color
        colorHist.unshift('em');
        colorHist.unshift(.2);
        colorHist.unshift(', #' + color.join('') + ' ');

        // push current color + 15em
        colorHist.unshift('em');
        colorHist.unshift(.1);
        colorHist.unshift(', #' + color.join('') + ' ');


    }, 1000);

}

