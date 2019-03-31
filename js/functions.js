const TOP_OFFSET_SLIDELINE = 50;
const BOTTOM_OFFSET_SLIDELINE = 55;
const SLIDELINE_POINT_HEIGHT = 18;
const POINTHEIGTH = 5
const TIME_BEFORE_SLIDELINE = 1000;
const MOBILE_MAX_WIDTH = 425;

const IS_MOBILE = checkMobile() //checkMobile() 

function checkMobile() {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
    /*
    if (window.innerWidth <= MOBILE_MAX_WIDTH) {
        return true;
    } else {
        return false;
    }
    */
}


function toogleMobileForIntro() {
    $("#more").remove()
    let il = $("#introi").find(".intro-left");
    let ir = $("#introi").find(".intro-right");
    $(il).hide();
    $(ir).hide();
    let paragrsil = $(il).find("p");
    let paragrsir = $(ir).find("li");
    let slide1 = $("<div>").addClass("slide")
    let slide2 = $("<div>").addClass("slide")
    let slide3 = $("<div>").addClass("slide")
    let slide4 = $("<div>").addClass("slide")
    let slide5 = $("<div>").addClass("slide")
    let slide6 = $("<div>").addClass("slide")
    let pFirst = $(".intro-right").find("p:first-child")
    let pLast = $(".intro-right").find("p:last-child")
    for (let i = 0; i < $(paragrsil).length; i++) {
        if (i < 2) {
            slide1.append($(`<div class="introDivP">`).append($(paragrsil[i])))
        }
        else if (i > 2 && i < 5) {
            slide2.append($(`<div class="introDivP">`).append($(paragrsil[i])))
        } else {
            slide6.append($(`<div class="introDivP">`).append($(paragrsil[i])))
        }
    }
    for (let i = 0; i < $(paragrsir).length; i++) {
        slide3.prepend($(pFirst))
        if (i < 3) {
            slide3.append($(`<div class="introDivP">`).append($(paragrsir[i])))
        }
        else if (i > 3 && i < 6) {
            slide4.append($(`<div class="introDivP">`).append($(paragrsir[i])))
        }
        else {
            slide5.append($(`<div class="introDivP">`).append($(paragrsir[i])))
        }
        slide4.append($(`<div class="introDivP">`).append($(pLast)))
    }
    $("#introi").append(slide1)
    $("#introi").append(slide3)
    $("#introi").append(slide5)
    $("#introi").append(slide4)
    $("#introi").append(slide2)
    $("#introi").append(slide6)
}

function toggleMobileForRelatives() {
    if (IS_MOBILE) {

        // videoWidth()
        let zoomerIndex = 0
        let relativeIndex = 0

        //screen.orientation.lock('landscape');
        $(".zoomer").each(function (i, zoomer) {
            $(zoomer).hide()

            let relatives = $(zoomer).find(".relatives-fade,.relatives")
            $(relatives).each(function (z, relative) {
                let isTTL = ($(relative).data("src") || "").indexOf("ttl") > -1
                if (isTTL) {
                    $(relative).addClass("hidden-for-mobile")
                }
                else {
                    let reltvs = $(relative).addClass("relatives-for-mobile")
                    let slide = $("<div>")
                        .addClass("slide")
                        .attr("id", "slideID" + zoomerIndex + "_" + relativeIndex)
                        .append(reltvs)
                    $(zoomer).after(slide)
                }

                relativeIndex++;
            })

            zoomerIndex++;
        })

        $(".zoomer").remove()
    }
}

function scrollTransolation() {
    let bool = $(".active .translation-text .translation-close-button")
    let trText = $(".active .translation-text")
    let snb = $(trText).find(`div.scroll-nav-button`)
    if (bool.length == 0) {
        if (snb.length >= 0) {
            $(trText).prepend(`<div class="scroll-nav-button">`)
            $(".scroll-nav-button").append(`<div class="translation-close-button"></div>`)
            $(".scroll-nav-button").append(`<div class="translation-scroll-button-left"></div>`)
            $(".scroll-nav-button").append(`<div class="translation-scroll-button-right"></div>`)
        }else{
            $(".scroll-nav-button").append(`<div class="translation-close-button"></div>`)
            $(".scroll-nav-button").append(`<div class="translation-scroll-button-left"></div>`)
            $(".scroll-nav-button").append(`<div class="translation-scroll-button-right"></div>`)
        }
    }
    scrollTransolationClose()
    rightClick()
    leftClick()
    function scrollTransolationClose() {
        $(".translation-close-button").on("click", () => {
            $(".translation-text").fadeOut()
            $(".scroll-nav-button").remove()
            $(".person-title").css("color", "white")
            $(".person-text").css("color", "white")
        })
    }
    function rightClick() {
        $(".translation-scroll-button-right").on("click", () => {
            trText[0].scrollTop = trText[0].scrollTop += 70
        })
    }
    function leftClick() {
        $(".translation-scroll-button-left").on("click", () => {
            trText[0].scrollTop = trText[0].scrollTop -= 70
        })
    }
}
function initMenuAndTools() {
    scrollSound = new Audio('scroll.mp3')
    scrollSound.volume = 0.2

    hoverSound = new Audio('./audio/homesound.mp3')
    hoverSound.volume = 0.2
    /*
    $("#sound").click(function (){
        $(this).toggleClass("sound-on").toggleClass("sound-off")
        volume = (volume == 0) ? 5 : 0
        setSound()
    })
    */

    $("#nav-arrow").click(function () {
        fullpage_api.moveSectionDown()
    })

    $(".language-visible").hover(function () {
        $(".language-hidden").fadeIn(200)
    })

    $("#tools").hover(undefined, function () {
        $(".language-hidden").fadeOut(200)
    })

    $("#button").click(function () {
        $(".slideLinePoint").slideToggle(300);
        menuOpened = !menuOpened
    })
}

function longReadMenuAndScroll() {
    // /$('.lr-image-holder').paroller();


    let lrMenuHeight = parseInt($(".lr-top-line").css("height"))
    $(".lr-menu-item").click(function () {
        $(".lr-menu-item").removeClass("lr-menu-item-active")
        $(this).addClass("lr-menu-item-active")
        let sectionID = $(this).data("src")
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + sectionID).offset().top - lrMenuHeight
        }, 1000);

    })



    let currentSectionID = "gegham"


    $(document).scroll(function () {
        $(".lr-section").each(function (i, lrSection) {

            if (isScrolledIntoView(lrSection)) {
                currentSectionID = $(lrSection).attr("id")
                $(".lr-menu-item").removeClass("lr-menu-item-active")
                $("[data-src='" + currentSectionID + "']").addClass("lr-menu-item-active")

                let expertImage = $("#" + currentSectionID).find(".lr-section-left img")
                //let topMargin = parseInt(expertImage.css("margin-top"))
                //console.log(topMargin, newTop-prevTop)
                //topMargin+=(newTop-prevTop)
                //console.log(newTop-prevTop)
                //expertImage.css({"position":"fixed", "top":"100px"})
                //$(lrSection).find("img").css("position","static");
                //console.log("in",currentSectionID)
            }
            else {
                //$(lrSection).find("img").css("position","static");
                //console.log("out",currentSectionID)
            }
        })

        /*
        scrollInf = scrollInfo(1, scrollInf, function (d) {
            console.log(scrollInf)
            
            //topMargin+=scrollInf.diff;
            
            
            if(d=="down"){
                
            }
            else{
                topMargin-=marginSteps
            }
            

            

        })
        */

    })

}


function initParalaxForLongRead() {
    let controller = new ScrollMagic.Controller();
    let offset1 = 0
    let duration1 = (LANG == "en") ? 1400 : 1550

    let offset2 = (LANG == "en") ? 1800 : 1900
    let duration2 = (LANG == "en") ? 1000 : 1000

    let offset3 = (LANG == "en") ? 3200 : 3300
    let duration3 = (LANG == "en") ? 950 : 1050

    let offset4 = (LANG == "en") ? 4500 : 4700
    let duration4 = (LANG == "en") ? 1200 : 1100

    if (DEBUG) {
        makeScrollMagicSceneWithIndicators("gegham", duration1, offset1, 1)
        makeScrollMagicSceneWithIndicators("inga", duration2, offset2, 2)
        makeScrollMagicSceneWithIndicators("aghasi", duration3, offset3, 3)
        makeScrollMagicSceneWithIndicators("lusine", duration4, offset4, 4)
    }
    else {
        makeScrollMagicScene("gegham", duration1, offset1, 1)
        makeScrollMagicScene("inga", duration2, offset2, 2)
        makeScrollMagicScene("aghasi", duration3, offset3, 3)
        makeScrollMagicScene("lusine", duration4, offset4, 4)
    }

    function makeScrollMagicScene(id, duration, offset, number) {
        new ScrollMagic.Scene({ triggerElement: "#trigger", duration: duration, offset: offset })
            .setPin("#" + id + " .lr-image-holder", { pushFollowers: false })
            .addTo(controller);

    }

    function makeScrollMagicSceneWithIndicators(id, duration, offset, number) {
        new ScrollMagic.Scene({ triggerElement: "#trigger", duration: duration, offset: offset })
            .setPin("#" + id + " .lr-image-holder", { pushFollowers: false })
            .addIndicators({ name: number + " (duration: offset " + duration + ":" + offset + ")" }) // add indicators (requires plugin)
            .addTo(controller);

    }

}


function scrollInfo(delta = 5, lastScrollInfo, callback) {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollInfo.lastScrollTop - st) <= delta)
        return lastScrollInfo;

    if (st > lastScrollInfo.lastScrollTop) {
        callback("down")

    } else {

        callback("up")
    }


    lastScrollInfo.diff = lastScrollInfo.lastScrollTop - st
    lastScrollInfo.lastScrollTop = st;
    return lastScrollInfo

}

function openSlideline(anchor) {
    const chapetrEnds = ["s16", "s33", "s50"]
    menuForCurrentPageForced = (chapetrEnds.indexOf(anchor) > -1) ? true : false;
    return menuForCurrentPageForced
}

function slideLine() {
    const anchores = ["s1", "s17", "s34", "s51", "intro", "about", "expertise", "home"]
    const anchoreTitles = (LANG == "en") ? ["see", "hear", "speak", "act", "intro", "about", "think", "home"] : ["տեսնում եմ", "լսում եմ", "խոսում եմ", "գործում եմ", "ներածություն", "մենք", "մտածում եմ", "սկիզբ"]
    const anchoresSmalls = ["intro", "about", "expertise", "home"]
    $("#slideLine").empty()
    let sections = $(".section")
    let heightOfSlideLinePoint = calcDistance(sections)
    let activeSection = fullpage_api.getActiveSection();
    let activeSectionIndex = activeSection.index
    let currentSectionIndex = 0;


    for (let section of sections) {
        let d = $("<div>")
        let anchor = $(section).attr("data-anchor")

        d.addClass("slideLinePoint").css({ "height": heightOfSlideLinePoint })
        if (currentSectionIndex <= activeSectionIndex) {
            d.addClass("seen")
        }

        d.attr("data-hanum-anchor", anchor)

        if (anchores.indexOf(anchor) > -1) {
            d.addClass("slideLinePointTitle")
            d.css({ "height": SLIDELINE_POINT_HEIGHT })
            d.text(anchoreTitles[anchores.indexOf(anchor)])
        }

        if (anchoresSmalls.indexOf(anchor) > -1) {
            d.addClass("slideLinePointTitleSmall")
        }

        $(d).click(function () {
            fullpage_api.moveTo(anchor);
        })

        setStateSlideLinePoints(d)

        $("#slideLine").append(d)

        currentSectionIndex++
    }

}


function setStateSlideLinePoints(p) {
    if (menuOpened) {
        p.css({ "display": "block" })
    }
    else if (menuForCurrentPageForced) {
        p.css({ "display": "block" })
    } else {
        p.css({ "display": "none" })
    }

}

function calcDistance(sections) {
    let h = $(window).height() - TOP_OFFSET_SLIDELINE - 4 * SLIDELINE_POINT_HEIGHT - BOTTOM_OFFSET_SLIDELINE
    let distance = Math.round(h / sections.length)
    return distance
}

function followSlideLine() {
    let sliedPoints = $(".slideLinePoint")
    $(".slideLinePoint").removeClass("seen")
    for (let i = 0; i < sliedPoints.length; i++) {
        $(sliedPoints[i]).addClass("seen").fadeIn(500)
        if (destination.anchor == $(sliedPoints[i]).attr("data-hanum-anchor")) {
            break;
        }
    }
}



function initScale() {
    $(window).on("load", changeRatio)
    $(window).on("resize", slideLine)
    $(window).on("resize", changeRatio)

}

function savePositionsOfRelatives() {
    $(".relatives-fade,.relatives ").each(function (i, rel) {
        let top = parseInt($(rel).css("top"))
        $(rel).data("top", top)
    })
}


function changeRatio() {
    if (!IS_MOBILE) {
        browserWidth = $(window).width();
        browserHeight = $(window).height();
        let ratio = (browserWidth / INITIAL_SIZE).toFixed(2);
        //let centerINIT = INITIAL_SIZE_HEIGHT / 2
        //let centerNEW = browserHeight / 2
        let MAGIC_NUMBER = 450

        $(".zoomer").css({
            "transform": "scale(" + ratio + ") translate(0px, -" + MAGIC_NUMBER + "px)",
            "transform-origin": "top left",
        })

        adjustPersonSlides()
    }
}


function centerVertically(blocks) {
    let browserHeight = $(window).height()
    let topPoint = 1000, bottomPoint = 0, distance;
    blocks.each(function (i, bl) {
        console.log(i, bl)
        let p = $(bl).position()
        let h = $(bl).height()
        let w = $(bl).width()
        topPoint = Math.min(topPoint, p.top)
        bottomPoint = Math.max(bottomPoint, p.top + h)
        console.log("left", p.left, "top", p.top, "w", w, "h", h)
    })

    distance = browserHeight - (bottomPoint - topPoint) / 2

    blocks.each(function (i, bl) {
        let top = parseInt($(bl).data("top"))
        $(bl).css("top", top + distance + "px")
    })
    console.log(topPoint, bottomPoint)
    console.log(distance)
}


function adjustPersonSlides() {
    var layeronbackgroundvideo = $(".layeronbackgroundvideo")
    layeronbackgroundvideo.each(function (i, layer) {
        adjustPersonSlide(layer)
    })
}


function adjustPersonSlide(layer, from = false) {
    let top = parseInt($(layer).prev()[0].offsetTop)
    let height = parseInt($(layer).prev()[0].offsetHeight)
    top = (top < 10) ? "12%" : top + height / 5 + "px";
    $(layer).css("top", top)
}


function startBeeing(elem, isOpposite = false) {
    const INTERVAL_TIME = 100;
    const X_DIVISION = 4;
    const Y_DIVISION = 4;
    const BROWSER_MARGIN = 50;
    let bee = elem;
    let x0 = parseInt(elem.style.left);
    let y0 = parseInt(elem.style.top)
    //console.log(elem.style.left, elem.style.top)
    let beepos = { x: x0, y: y0 };
    let mouse = { x: x0, y: y0, xprev: 0, yprev: 0, xDiff: 0, yDiff: 0 };

    document.addEventListener("mousemove", getMouse);
    //bee.style.position = "absolute"; 

    let intervalID = setInterval(function () {
        followMouse(isOpposite)
    }, INTERVAL_TIME);


    function getMouse(e) {
        console.log(mouse.x, mouse.y)
        mouse.xprev = mouse.x;
        mouse.yprev = mouse.y;
        mouse.x = e.pageX - window.innerWidth / 2;
        mouse.y = e.pageY - window.innerHeight / 2;
        mouse.xDiff = mouse.x - mouse.xprev;
        mouse.yDiff = mouse.y - mouse.yprev;
    }

    function followMouse(isOpposite = false) {
        if (mouse.x + window.innerWidth / 2 < BROWSER_MARGIN || mouse.x + BROWSER_MARGIN > window.innerWidth / 2) {
            mouse.xDiff = 0
            mouse.yDiff = 0
        }
        if (mouse.y + window.innerHeight / 2 < BROWSER_MARGIN || mouse.y + BROWSER_MARGIN > window.innerHeight / 2) {
            mouse.xDiff = 0
            mouse.yDiff = 0
        }

        if (isOpposite) {
            beepos.x -= mouse.xDiff / X_DIVISION;
            beepos.y -= mouse.yDiff / Y_DIVISION;
            bee.style.left = beepos.x + "px";
            bee.style.top = beepos.y + "px";
        }
        else {
            //let distX = (mouse.x/X_DIVISION - beepos.x);
            //let distY = (mouse.y/Y_DIVISION - beepos.y);
            beepos.x += mouse.xDiff / X_DIVISION;
            beepos.y += mouse.yDiff / Y_DIVISION;
            bee.style.left = beepos.x + "px";
            bee.style.top = beepos.y + "px";

        }
    }

    return intervalID;
}




function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        //console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        //console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function () {
        //console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        //console.error('Async: Could not copy text: ', err);
    });
}



function initToolTips() {
    tooltips = $('.tooltip').tooltipster({
        side: ['right', 'top'],
        trigger: "click",
        arrow: false,
        theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
        functionPosition: function (instance, helper, position) {
            position.coord.top -= position.size.height / 2;
            return position;
        }
    });

}


function closeToolTips() {
    let allTooltips = $.tooltipster.instances();
    $.each(allTooltips, function (i, instance) {
        instance.close();
    });
}


function initOpacityBackgrounds() {

    $(".backgroundvideo").each(function (i, vdiv) {
        let opacity = $(vdiv).attr("data-opacity")
        let vidBackgrLayer = $("<div>").addClass("blackOverlay")
        if (opacity !== undefined) {
            $(vidBackgrLayer).css("background-color", "rgba(0,0,0," + opacity + ")")
        }
        $(vidBackgrLayer).insertAfter($(this))
    })

}

function initBxGallery(elem) {
    elem.html("")
    let arrayName = elem.data("han-src-array")
    for (let imgSrc of GALLERYSLIDERIMAGES[arrayName]) {
        let divWithImage = $("<div>")
            .addClass("slider-image-bkgr")
            .css("background-image", "url('" + imgSrc + "')")

        elem.append(divWithImage)
    }

    return elem.bxSlider({
        keyboardEnabled: true,
        mode: 'fade',
        captions: false,
        adaptiveHeight: true,
        auto: true,
        stopAutoOnClick: true
    });
}

function destroyBxGallery(gallerysArray) {
    for (gallery of gallerysArray) {
        gallery.destroySlider()
    }
    gallerysArray = []
    return galleryes
}



function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop() - $(".lr-top-line").height()
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;

    //return (elemTop <=docViewTop && elemTop>=docViewBottom);
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
}


function setEqualHeightLrSections() {
    $(".lr-section").each(function (i, section) {
        let leftP = $(section).find(".lr-section-left")
        $(section).find(".lr-image-holder").css("height", $(section).css("height"))
        leftP.css("height", $(section).css("height"))
    })
    // $(".lr-section:nth-child(4)").css("height","500px")
}


function prepareVideos(videos, config, autoplay = true) {
    let videosArray = []
    if (typeof videos === "object") {
        videos.each(function (i, fv) {
            let custVidID = $(fv).attr("id")
            videosArray.push(new Plyr('#' + custVidID, config));
            if (autoplay) {
                videosArray[i].on("ended", function () {
                    if (videosArray[i + 1] !== undefined) {
                        videosArray[i + 1].play()
                    }
                })
            }
        })

        if (autoplay) {
            videosArray[0].play()
        }
    }

    return videosArray;
}



function initCoverPageEffects() {
    const LINE_TIME = 3000;
    const LINE_TICK = 4;
    const LINE_TIME_OUT = 1000;
    const TITLE_LINE_SIZE = 400;
    const TITLE_TIMEOUT = 500;
    const IMAGE_TIMEOUT = 1000;
    const TIME_BEFORE_START = 1500;

    $(document).ready(function () {
        $(".cover-text").fadeOut(TIME_BEFORE_START)
        $("#spinner").fadeOut(TIME_BEFORE_START)

        setTimeout(function () {

            setTimeout(function () {
                $(".cover-chapter-head").addClass("fadeIn animation4")
            }, TITLE_TIMEOUT)

            setTimeout(function () {
                $(".cover-chapter-image").addClass("fadeIn animation4")
            }, IMAGE_TIMEOUT)


            setTimeout(function () {
                $(".cover-chapter-line").css("display", "block")
                let titleLineInterval = setInterval(function () {
                    let width = parseInt($(".cover-chapter-line").css("width"));
                    width += (LINE_TIME / LINE_TICK) / TITLE_LINE_SIZE
                    $(".cover-chapter-line").css("width", width + "px");
                    if (width >= TITLE_LINE_SIZE) {
                        clearInterval(titleLineInterval)
                        showScrollbarAndNavArrow()
                    }
                }, LINE_TICK)
            }, LINE_TIME_OUT)

        }, TIME_BEFORE_START)
    })

    function showScrollbarAndNavArrow() {
        $("#scrolldown").show("slow", function () {
            $("#nav-arrow").show("slow");
        });
    }
}


function initIntro() {
    let introClosed = true;
    $(".intro-right").css({ "left": window.innerWidth });

    $("#more").click(function () {
        if (introClosed) {
            $(".intro-right").animate({ "left": "0px" }, "slow");
        }
        else {
            $(".intro-right").animate({ "left": window.innerWidth }, "slow");
        }
        introClosed = !introClosed
    })
}

function initManualRepositions() {
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


function initHome() {
    const boxes = {
        act: {
            backgroundImage: "img/box/act.gif",
            selectorForChange: "#sect4-right",
            background: "img/box/act.jpg",
            anchor: "s51"
        },
        speak: {
            backgroundImage: "img/box/speak.gif",
            selectorForChange: "#sect4-left",
            background: "img/box/speak.jpg",
            anchor: "s34"
        },
        hear: {
            backgroundImage: "img/box/hear.gif",
            selectorForChange: "#sect4-left",
            background: "img/box/hear.jpg",
            anchor: "s17"
        },
        see: {
            backgroundImage: "img/box/see.gif",
            selectorForChange: "#sect4-right",
            background: "img/box/see.jpg",
            anchor: "s1"
        }
    }

    $(".box").mouseover(function () {
        $(".box").css("background-image", "none");
        $("#sect4-right , #sect4-left").css("background-image", "none")
        hoverSound.currentTime = 0
        hoverSound.play()

        let id = getId($(this))
        $(this).css("background-image", "url(" + boxes[id].backgroundImage + ")")
        $(boxes[id].selectorForChange).css("background-image", "url(" + boxes[id].background + ")")

    })

    $(".box").click(function () {
        let id = getId($(this))
        fullpage_api.moveTo(boxes[id].anchor, 0);
    })

    function getId(elem) {
        return $(elem).prop("id")
            .substring(1)
            .toLowerCase()
    }

}


function updateLanguageLink(currentAnchor) {
    let link = $(".language-hidden").parent()
    let href = $(link).attr("href");

    let linkStart = href.split("#")[0]
    linkStart += "#" + currentAnchor
    $(link).attr("href", linkStart)
}


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setSound() {
    for (video of videosList) {
        video.volume = volume
    }
}
function footerForMobile() {
    // $(".about-columns").hide()
    let team = $(".about-columns:first-child");
    let Communicationsupport = $(".about-columns:nth-child(2)");
    let logos = $(".about-columns:nth-child(3)");
    $(logos).find("p").css("width", "100%")
    $(logos).find("img").css("width", "100%")
    let side1 = $("<div>").addClass("slide");
    let side2 = $("<div>").addClass("slide");
    let side3 = $("<div>").addClass("slide");
    $(side1).append($(team))
    $(side2).append($(Communicationsupport))
    $(side3).append($(logos))
    $("#about-section").append($(side1))
    $("#about-section").append($(side2))
    $("#about-section").append($(side3))
}
// function experienceMobile(){

// }
function audioPositionMobile() {
    var audiotag = $(".active .visible-sound");
    var trbotton = $(".active .translation-button");
    $(".active div.person-title-foraudios").append($(audiotag));
    $(".active div.person-title-foraudios").append($(trbotton));
    $(trbotton).removeAttr("style")
    $(trbotton).addClass("trbotton")
    $(audiotag).removeClass("relatives-fade");
}