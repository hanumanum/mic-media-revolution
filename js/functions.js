const TOP_OFFSET_SLIDELINE = 50
const SLIDELINE_POINT_HEIGHT = 18;
const POINTHEIGTH = 5


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function initMenuAndTools() {
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

    $("#button").click(function () {
        $(".slideLinePoint").slideToggle(300);
        menuOpened = !menuOpened
    })

    $('.translation-text').hover(function () {
        fullpage_api.setAllowScrolling(false, 'up, down');
    }, function () {
        fullpage_api.setAllowScrolling(true, 'up, down');
    });

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


    
    let currentSectionID ="gegham"


    $(document).scroll(function () {
        $(".lr-section").each(function (i, lrSection) {
            
            if (isScrolledIntoView(lrSection)) {
                currentSectionID = $(lrSection).attr("id")
                $(".lr-menu-item").removeClass("lr-menu-item-active")
                $("[data-src='" + currentSectionID + "']").addClass("lr-menu-item-active")

                let expertImage = $("#"+currentSectionID).find(".lr-section-left img")
                //let topMargin = parseInt(expertImage.css("margin-top"))
                //console.log(topMargin, newTop-prevTop)
                //topMargin+=(newTop-prevTop)
                //console.log(newTop-prevTop)
                //expertImage.css({"position":"fixed", "top":"100px"})
                //$(lrSection).find("img").css("position","static");
                //console.log("in",currentSectionID)
            }
            else{
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


function initParalaxForLongRead(){
    let controller = new ScrollMagic.Controller();
    let duration1 = 800
    let duration2 = 1000
    let offset2 = 1150
    let duration3 = 970
    let offset3 = 2550
    let duration4 = 880
    let offset4 = 3850
    
    $(function () { 
        new ScrollMagic.Scene({ triggerElement: "#trigger", duration: duration1 })
            .setPin("#gegham .lr-image-holder", { pushFollowers: false })
            //.addIndicators({ name: "1 (duration: " + duration1 + ")" }) // add indicators (requires plugin)
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#trigger", duration: duration2, offset: offset2 })
            .setPin("#inga .lr-image-holder" , { pushFollowers: false })
            //.addIndicators({ name: "2 (duration: " + duration2 + ")" }) // add indicators (requires plugin)
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#trigger", duration: duration3, offset: offset3 })
            .setPin("#aghasi .lr-image-holder", { pushFollowers: false })
            //.addIndicators({ name: "3 (duration: " + duration3 + ")" }) // add indicators (requires plugin)
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#trigger", duration: duration4, offset: offset4 })
            .setPin("#lusine .lr-image-holder", { pushFollowers: false })
            //.addIndicators({ name: "4 (duration: " + duration4 + ")" }) // add indicators (requires plugin)
            .addTo(controller);
    });
   
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


    lastScrollInfo.diff=lastScrollInfo.lastScrollTop - st
    lastScrollInfo.lastScrollTop = st;
    return lastScrollInfo 
    
}

function slideLine() {
    const anchores = ["s1", "s17", "s34", "s51"]
    const anchoreTitles = ["see", "hear", "speak", "act"]
    $("#slideLine").empty()
    let sections = $(".section")
    let heightOfSlideLinePoint = calcDistance(sections)
    let activeSection = fullpage_api.getActiveSection();
    let activeSectionIndex = activeSection.index
    let currentSectionIndex = 0;

    let aboutLink = $("<div>")
        .text("about")
        .addClass("slideLinePoint")
        .addClass("slideLinePointTitle")
        .addClass("seen")
        .css({ "height": SLIDELINE_POINT_HEIGHT })

    $("#slideLine").append(aboutLink)

    let introLink = $("<div>")
        .text("intro")
        .addClass("slideLinePoint")
        .addClass("slideLinePointTitle")
        .addClass("seen")
        .css({ "height": SLIDELINE_POINT_HEIGHT })
    $("#slideLine").append(introLink)

    setStateSliedLinePoints(aboutLink)
    setStateSliedLinePoints(introLink)

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

        $(d).click(function () {
            fullpage_api.moveTo(anchor);
        })

        setStateSliedLinePoints(d)

        $("#slideLine").append(d)

        currentSectionIndex++
    }

}


function setStateSliedLinePoints(p) {
    if (menuOpened) {
        p.css({ "display": "block" })
    } else {
        p.css({ "display": "none" })
    }

}

function calcDistance(sections) {
    let h = $(window).height() - TOP_OFFSET_SLIDELINE - 4 * SLIDELINE_POINT_HEIGHT
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
    $(window).on("resize", changeRatio)
    $(window).on("load", changeRatio)
}

function savePositionsOfRelatives() {
    $(".relatives , .relatives-fade").each(function (i, rel) {
        let top = parseInt($(rel).css("top"))
        $(rel).data("top", top)
    })
}


function changeRatio() {
    browserWidth = $(window).width();
    browserHeight = $(window).height();
    let ratio = (browserWidth / INITIAL_SIZE).toFixed(2);
    let centerINIT = INITIAL_SIZE_HEIGHT / 2
    let centerNEW = browserHeight / 2
    let MAGIC_NUMBER = 450

    $(".zoomer").css({
        "transform": "scale(" + ratio + ") translate(0px, -" + MAGIC_NUMBER + "px)",
        "transform-origin": "top left",
    })

    adjustPersonSlides()
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



function initTooltips() {
    $(document).ready(function () {
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
        //console.log(tooltips)
    });
}


function initOpacityBackgrounds() {
    $(function () {
        $(".backgroundvideo").each(function (i, vdiv) {
            let opacity = $(vdiv).attr("data-opacity")
            let vidBackgrLayer = $("<div>").addClass("blackOverlay")
            if (opacity !== undefined) {
                $(vidBackgrLayer).css("background-color", "rgba(0,0,0," + opacity + ")")
            }
            $(vidBackgrLayer).insertAfter($(this))
        })
    });
}


function initBxSliders() {
    $(function () {
        $('.slider').bxSlider({
            keyboardEnabled: true,
            mode: 'fade',
            captions: false,
            adaptiveHeight: true,
            auto: true
        });
    });
}



function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop() - $(".lr-top-line").height();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;

    //return (elemTop <=docViewTop && elemTop>=docViewBottom);
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
}


function setEqualHeightLrSections(){
    $(".lr-section").each(function(i,section){
         let leftP = $(section).find(".lr-section-left")
         $(section).find(".lr-image-holder").css("height",$(section).css("height"))
         leftP.css("height",$(section).css("height"))
    })
}
