let debug = false;
let iframe;
let iframePlayer;
let scrollSound;
var player;
var playerPerson;
var volume = 0;
var trtext = "", trbutt = "";

init_menuAndTools()


new fullpage('#fullpage', {
    fadingEffect: true,
    fadingEffectKey: "18DF4FFA-5D204426-AC93E15C-E7F303EF",
    //anchors:['coversee', 'coverhear', 'coverspeak','coveract'],
    //menu: '#nav'
    afterLoad: function (origin, destination, direction) {
        let slide = $("#" + destination.item.id);

        let customVideo = $(slide).find(".custom-video")
        if (customVideo.length != 0) {
            let custVidID = $(customVideo[0]).attr("id")
            player = new Plyr('#' + custVidID);
            player.volume = volume
        }

        let fallVideo = $(slide).find(".fall-video")
        if (fallVideo.length != 0) {
            let custVidID = $(fallVideo[0]).attr("id")
            player = new Plyr('#' + custVidID);
            player.volume = volume
        }

        let personVideo = $(slide).find(".personVideo")
        if (personVideo.length != 0) {
            let custVidID = $(personVideo[0]).attr("id")
            playerPerson = new Plyr('#' + custVidID, { 'autopause': false });
        }


        var backgroundVideo = $(slide).find(".backgroundvideo")
        if (backgroundVideo.length != 0) {
            let bckgrVidID = $(backgroundVideo[0]).attr("id")
            player = new Plyr('#' + bckgrVidID, { 'controls': [], 'settings': ['loop'], 'clickToPlay': false, 'autoplay': true, 'muted': true, 'autopause': false });
            player.volume = 0
            player.loop = true
            player.play()
        }

        let quote = $(slide).find(".quote")
        let quote_autor = $(slide).find(".quote-autor")
        if (quote && quote_autor) {
            $(quote[0]).addClass("fadeIn animation3")
            setTimeout(function () {
                $(quote_autor[0]).addClass("fadeIn animation3")
            }, 1000)
        }


        let becouse = $(slide).find(".becouse")
        let becouseList = $(slide).find(".becouse-list > li")
        if (becouse && becouseList) {
            $(becouse[0]).addClass("fadeIn animation2")
            let ind = 8
            let liIndex = 0

            let anim = setInterval(function () {
                let li = becouseList[liIndex]
                $(li).addClass("fadeIn")
                $(li).addClass("animation" + ind)

                ind += 4
                liIndex++

                if (liIndex == becouseList.length) {
                    clearInterval(anim)
                }

            }, 1000)
        }

        let person = $(slide).find(".person-title")
        let persontext = $(slide).find(".person-text")
        if (person && persontext) {
            $(person[0]).addClass("fadeIn animation2")
            $(persontext[0]).addClass("fadeIn animation5")
        }


        let bkgrURL = $(slide).attr("data-background-image")
        if (bkgrURL) {
            $(slide).css({
                "background-image": 'url(' + bkgrURL + ')',
                "background-size": "cover"
            })
        }

        let bordered = $(slide).find(".bordered")
        bordered.addClass("fadeIn").addClass("animation2")

        let relatives = $(slide).find(".relatives")
        let relativesfade = $(slide).find(".relatives-fade")

        /*
        let allowOtherAnims = true
        $(relatives).hover(function () {
            if(allowOtherAnims && $(this).prop("tagName") == "IMG"){
                let w = parseInt($(this).css("width").split("px")[0])
                let h = parseInt($(this).css("height").split("px")[0])
                let z = $(this).css("z-index")

                $(this).data("startparams", { w, h, z })
                let wn = w + w * 0.15
                let hn = h + h * 0.15
                let zn = 2000
                $(this).css("z-index", zn)
                allowOtherAnims = false
                $(this).animate({ width: wn + "px", heigth: hn + "px" }, 'slow', function () {
                    //allowOtherAnims = true
                });


            }

        }, function () {
            
            let startparams = $(this).data("startparams")
            z = (startparams.z == "auto") ? 0 : startparams.z;
            $(this).css("z-index", z);
            $(this).animate({ width: startparams.w, heigth: startparams.h }, 'slow', function () {
                allowOtherAnims = true
            })
        })
        */


        if (relativesfade && relativesfade !== undefined) {
            setTimeout(function () {
                let ind = 0
                $(relativesfade[ind]).addClass("fadeIn")
                $(relativesfade[ind]).addClass("animation1")
                ind++

                let animIntrval = setInterval(function () {
                    $(relativesfade[ind]).addClass("fadeIn")
                    $(relativesfade[ind]).addClass("animation1")

                    ind++

                    if (ind == relativesfade.length) {
                        clearInterval(animIntrval)
                    }
                }, 250)
            }, 500)
        }

        if (relatives && relatives !== undefined) {
            let ind = 0;
            $(relatives[ind]).addClass("slideInDown")
            $(relatives[ind]).addClass("animation1")
            ind++

            let animIntrval = setInterval(function () {
                if (!debug) {
                    $(relatives[ind]).addClass("slideInDown")
                    $(relatives[ind]).addClass("animation1")
                }
                ind++
                if (ind == relatives.length) {
                    clearInterval(animIntrval)
                }

            }, 350)
        }


        let trtext = $(slide).find(".translation-text")
        if(trtext && trtext!=="undefined"){
            $(slide).find(".translation-button").on("click",function(){
                trtext.slideToggle(300);
            })
        }
    }

    , onLeave: function (origin, destination, direction) {
        scrollSound.play()
        
        let slide = $("#" + origin.item.id);
        $(slide).find(".translation-button").off("click")


        if (typeof (player) === "object") {
            player.stop()
        }

        if (typeof (playerPerson) === "object") {
            playerPerson.stop()
        }


        let relatives = $(slide).find(".relatives")
        let relativesfade = $(slide).find(".relatives-fade")
        relatives.removeClass("slideInDown")
        relativesfade.removeClass("fadeIn")

        relatives.addClass("slideOutDown", function () {
            setTimeout(function () {
                relatives.removeClass("slideOutDown")
            }, 500)
        })

    }

});


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


if (debug) {
    $(function () {
        $(".relatives , .relatives-fade").draggable({
            stop: function (event, ui) {
                console.log(
                    $(this).attr("src"),
                    "left:" + Math.round($(this).position().left) + "px; top:" + Math.round($(this).position().top) + "px;")
            }
        });
    });

}



//var bodyElement = document.querySelector("body");
//bodyElement.addEventListener("mousemove", getMouseDirection, false);



/*
$('#hear7').on('mousemoveend', getMouseDirection);

var xDirection = "";
var yDirection = "";
var oldX = 0;
var oldY = 0;
var inAnimaton = false;
var diffX = 0
var diffY = 0

function getMouseDirection(e) {
    const SIZEh = 40
    const SIZEv = 1
    
    let left = parseInt($("#hear7").css("left"))
    //let top = parseInt($("#hear7").css("top"))
       
    diffX = (oldX < currentMousePos.x) ? (SIZEh) : ((-1) * SIZEh)  
    //diffY = (oldY < currentMousePos.y) ? ((-1) * SIZEv) : SIZEv
 
    $("#hear7").animate({
                        "left":left+diffX+"px",
                        "top": top+diffY+"px" 
                        },1000)

    oldX = currentMousePos.x;
    oldY = currentMousePos.y;

}


var currentMousePos = { x: -1, y: -1 };
$(function($) {
    $(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
    });
});




(function ($) {
    var timeout;
    $(document).on('mousemove', function (event) {
        if (timeout !== undefined) {
            window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(function () {
            $(event.target).trigger('mousemoveend',event);
        }, 50);
    });
}(jQuery));

*/

function init_menuAndTools() {
    scrollSound = new Audio('scroll.mp3')
    scrollSound.volume = 0.2

    $("#sound").click(function () {
        $(this).toggleClass("sound-on").toggleClass("sound-off")
        volume = (volume == 0) ? 5 : 0
    })

    $("#nav-arrow").click(function () {
        fullpage_api.moveSectionDown();
    })

    $(".language-visible").hover(function () {
        $(".language-hidden").fadeIn(200)
    })

    $("#tools").hover(undefined, function () {
        $(".language-hidden").fadeOut(200)
    })


    $(".nav-items-list").hide()
    $("#button").click(function(){
        $(".nav-items-list").slideToggle(300);
    })

    $('.translation-text').hover(function() {
        fullpage_api.setAllowScrolling(false, 'up, down');
   }, function() {
        fullpage_api.setAllowScrolling(true, 'up, down');
   });
}