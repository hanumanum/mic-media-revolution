let scrollSound; 
let browserWidth = $(window).width();
let browserHeight = $(window).height();
let beeIntervals = [];
let menuOpened = false;
let videosList = [];
let galleryes = [];

setSound()
initScale()
initMenuAndTools()
savePositionsOfRelatives()

$(function () {
    initOpacityBackgrounds()
    initToolTips()
    initIntro()
})


new fullpage('#fullpage', {
    fadingEffect: true,
    fadingEffectKey: "18DF4FFA-5D204426-AC93E15C-E7F303EF",
    verticalCentered: true,
    lazyLoading: true,
    afterLoad: function (origin, destination, direction) {
        if (destination.item.id === "cover") {
            initCoverPageEffects();
        }

        if(destination.item.id=="expertise"){
            window.location.assign(EXPERTISEPAGE)
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
                let videosListBkgr = prepareVideos(backgroundVideo, { 'controls': [], 'settings': ['loop'], 'loop':{ active: true }, 'clickToPlay': false, 'autoplay': true, 'muted': true, 'autopause': false })
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
            $(person[0]).addClass("fadeIn animation3")
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


        let gallery = $(slide).find(".slider")
        if(gallery && gallery!==undefined && gallery.length>0) {
            galleryes.push(initBxGallery(gallery))
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

        slideLine()

    }

    , onLeave: function (origin, destination, direction) {
        for (ply of videosList) {
            ply.destroy()
        }
        videosList = [];

        scrollSound.play()
        /*
        for (beeInterv of beeIntervals) {
            clearInterval(beeInterv)
        }
        beeIntervals = []
        */

        

        let slide = $("#" + origin.item.id);
        $(slide).find(".translation-button").off("click")


        let relatives = $(slide).find(".relatives")
        let relativesfade = $(slide).find(".relatives-fade")
        relatives.removeClass("slideInDown")
        relativesfade.removeClass("fadeIn")

        relatives.addClass("slideOutDown", function () {
            setTimeout(function () {
                relatives.removeClass("slideOutDown")
            }, 500)
        })

        closeToolTips()

        galleryes = destroyBxGallery(galleryes)        
        
    }

});



if (DEBUG) {
    initManualRepositions()
}


