let debug = false;
const INITIAL_SIZE = 1900;
const INITIAL_SIZE_HEIGHT = 1200;
const LANG = "en"
let scrollSound, iframe, iframePlayer;
var player, playerPerson;
var volume = 10;
var trtext = "", trbutt = "";
let browserWidth = $(window).width();
let browserHeight = $(window).height();
let beeIntervals = [];
let menuOpened = false;
let videosList = [];


setSound()
initScale()
initMenuAndTools()
savePositionsOfRelatives()


new fullpage('#fullpage', {
    fadingEffect: true,
    fadingEffectKey: "18DF4FFA-5D204426-AC93E15C-E7F303EF",
    verticalCentered: true,
    lazyLoading: true,
    afterLoad: function (origin, destination, direction) {
        if (destination.item.id === "cover") {
            initCoverPageEffects();
        }


        let slide = $("#" + destination.item.id);

        let customVideo = $(slide).find(".custom-video")
        if (customVideo.length != 0) {
            videosList = prepareVideos(customVideo)
            videosList[0].on("timeupdate", function (evnt) {
                if (videosList[0].currentTime > 0 && videosList[0].currentTime > videosList[0].duration - 0.3) {
                    $(slide).find(".plyr__control").hide()
                    videosList[0].pause()

                    /*
                    setTimeout(function(){
                        fullpage_api.moveSectionDown();
                    },200)
                    */
                }
            })
        }


        let fallVideo = $(slide).find(".fall-video")
        if (fallVideo.length != 0) {
            videosList = prepareVideos(fallVideo, { 'autopause': false })
        }

        let personVideo = $(slide).find(".personVideo")
        if (personVideo.length != 0) {
            videosList = prepareVideos(personVideo, { 'autopause': false })
            if (LANG === "en") {
                let tb = $(slide).find(".translation-button")[0]
                $(tb).css("visibility", "visible")
            }
        }

        var backgroundVideo = $(slide).find(".backgroundvideo")
        if (backgroundVideo.length != 0) {
            let bckgrVidID = $(backgroundVideo[0]).attr("id")
            if (bckgrVidID) {
                let videosListBkgr = prepareVideos(backgroundVideo, { 'controls': [], 'settings': ['loop'], 'clickToPlay': false, 'autoplay': true, 'muted': true, 'autopause': false })
                videosListBkgr[0].volume = 0
                videosList = videosList.concat(videosListBkgr);
            }

        }


        var layeronbackgroundvideo = $(slide).find(".layeronbackgroundvideo")
        if (layeronbackgroundvideo.length !== 0) {
            adjustPersonSlide(layeronbackgroundvideo, true)
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
            $(slide).find(".backgroundvideo").css({ "opacity": 0.5 })
            $(slide).css({
                "background-image": 'url(' + bkgrURL + ')',
                "background-size": "cover"
            })
        }

        let bordered = $(slide).find(".bordered")
        bordered.addClass("fadeIn").addClass("animation2")

        let relatives = $(slide).find(".relatives")
        let relativesfade = $(slide).find(".relatives-fade")
        let relativeBlocks = $(slide).find(".relatives, .relatives-fade")

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

                $(relatives[ind]).addClass("slideInDown")
                $(relatives[ind]).addClass("animation1")

                ind++
                if (ind == relatives.length) {
                    clearInterval(animIntrval)
                }

            }, 200)
        }


        let trtext = $(slide).find(".translation-text")
        if (trtext && trtext !== "undefined") {
            $(slide).find(".translation-button").on("click", function () {
                trtext.slideToggle(300);
            })
        }

        /*
        let zoomer = $(slide).find(".zoomer")
        if(zoomer && zoomer.length>0){
            relatives.each(function(i,rel){
                beeIntervals.push(startBeeing(rel,false))
            })
            
            relativesfade.each(function(i,rel){
                beeIntervals.push(startBeeing(rel,true))
            })
          
        }
        */


        //followSlideLine()

        /*let currentOnSlidline = $('*[data-hanum-anchor="'+destination.anchor+'"]')
        //$("#slideLineArrow").css("")
        let topOfArrow = currentOnSlidline.css("top")
        console.log(topOfArrow)
        $("#slideLineArrow").css("top",parseInt(topOfArrow)+TOPOFFSET+"px")
        */

        //let topForArrow = calcDistance($("section"))


        //centerVertically(relativeBlocks)

        slideLine()

    }

    , onLeave: function (origin, destination, direction) {
        for (ply of videosList) {
            ply.destroy()
        }
        videosList = [];


        for (beeInterv of beeIntervals) {
            clearInterval(beeInterv)
        }
        beeIntervals = []


        scrollSound.play()

        let slide = $("#" + origin.item.id);
        $(slide).find(".translation-button").off("click")


        if (typeof (player) === "object") {
            player.stop()
            delete player
        }

        if (typeof (playerPerson) === "object") {
            playerPerson.stop()
            delete playerPerson
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


        var allTooltips = $.tooltipster.instances();
        $.each(allTooltips, function (i, instance) {
            instance.close();
        });
    }

});




/*
if(debug){
    let currentRelative = {}
    $(".relatives , .relatives-fade").click(function(){
        currentRelative = $(this)
        console.log("clicked",currentRelative)

        $(document).keypress(function(e){
            let ttop = parseInt($(currentRelative).position().top)
            let lleft = parseInt($(currentRelative).position().left)
            console.log("positions before",ttop,lleft)

            if(e.charCode==115){ //s top
                $(currentRelative).position().top=(ttop--) + "px"
            } 
            else if(e.charCode==119){ //w bottom
                $(currentRelative).position().top=(ttop++) + "px"
            }
            else if(e.charCode==97){  //a left
                $(currentRelative).position().left=(lleft--) + "px"     
            }
            else if(e.charCode==100){ //d right
                $(currentRelative).position().left=(lleft++) + "px"
            }

            console.log("left:" + Math.round($(currentRelative).position().left) + "px; top:" + Math.round($(currentRelative).position().top) + "px;")
            copyTextToClipboard("left:" + Math.round($(currentRelative).position().left) + "px; top:" + Math.round($(currentRelative).position().top) + "px;");
        })
    
    })
}
*/


if (debug) {
    let relativesData = {}

    $(function () {
        $(".relatives , .relatives-fade").draggable({
            stop: function (event, ui) {
                relativesData[$(this).prop("tagName") + ":" + $(this).attr("src")] = "left:" + Math.round($(this).position().left) + "px; top:" + Math.round($(this).position().top) + "px;"

                console.log(
                    $(this).attr("src"),
                    "left:" + Math.round($(this).position().left) + "px; top:" + Math.round($(this).position().top) + "px;")
                //copyTextToClipboard("left:" + Math.round($(this).position().left) + "px; top:" + Math.round($(this).position().top) + "px;");
                copyTextToClipboard(JSON.stringify(relativesData))
            }

        });
    });

}


$(function () {
    initOpacityBackgrounds()
    initBxSliders()
    initTooltips()
    initIntro()
})