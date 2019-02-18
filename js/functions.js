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


//slideLine()
function slideLine(){
    const anchores = ["coversee","coverhear","coverspeak","coveract"]
    let sections = $(".section")
    let distance = calcDistance(sections)
    let top = distance
    //let activeSection = fullpage_api.getActiveSection();

    for(let section of sections){
        let d = $("<div>")
        let anchor = $(section).attr("data-anchor")

        d.addClass("slideLinePoint").css({"height":distance})
        
        d.attr("data-hanum-anchor",anchor)

        if(anchores.indexOf(anchor)>-1){
            d.addClass("slideLinePointTitle")
        }
        
       $(d).click(function(){
            fullpage_api.moveTo(anchor);
        })
        
        $("#slideLine").append(d)
        //top+=distance;
    }

}


function calcDistance(sections){
    let h = $(window).height() - TOPOFFSET
    let count = sections.length
    let distance = Math.round((h / count  - POINTHEIGTH))
    
    return distance
}


function followSlideLine(){
    let sliedPoints = $(".slideLinePoint")
    $(".slideLinePoint").removeClass("seen")
    for(let i = 0; i<sliedPoints.length; i++)
    {
        $(sliedPoints[i]).addClass("seen").fadeIn(500)
        if(destination.anchor == $(sliedPoints[i]).attr("data-hanum-anchor")){
            break;
        }
    }
}



function initScale(){
    $(window).on("resize",changeRatio)
    $(window).on("load",changeRatio)
}

function savePositionsOfRelatives(){
    $(".relatives , .relatives-fade").each(function(i,rel){
        let top = parseInt($(rel).css("top"))
        $(rel).data("top",top)
    })
}


function changeRatio(){
    browserWidth =  $(window).width();
    browserHeight = $(window).height();
    let ratio = (browserWidth / INITIAL_SIZE).toFixed(2);

    $(".zoomer").css({
        "transform":"scale("+ratio+")",
        "transform-origin":"top left",
        /*"top":browserHeight/4+"px"*/
    })

    /*
    $(".relatives , .relatives-fade").each(function(i,rel){
        let top = $(rel).data("top")
        console.log(top)
        $(rel).css({"top":top + browserHeight/5 + "px"})
        
    })
    */

    let fptableCells = $(".zoomer").parent()
    $(fptableCells).css({"vertical-align":"top"})
 
    //savePositionsOfRelatives()

}


function centerVertically(blocks){
    let browserHeight= $(window).height()
    let topPoint=1000, bottomPoint = 0, distance; 
    blocks.each(function(i, bl){
        console.log(i,bl)
        let p = $(bl).position()
        let h = $(bl).height()
        let w = $(bl).width()
        topPoint = Math.min(topPoint,p.top)
        bottomPoint = Math.max(bottomPoint, p.top+h)
        console.log("left",p.left, "top", p.top,"w", w, "h", h)
    })

    distance = browserHeight - (bottomPoint - topPoint)/2
    
    blocks.each(function(i, bl){
        let top = parseInt($(bl).data("top"))
        $(bl).css("top",top+distance+"px")
    })
    console.log(topPoint, bottomPoint)
    console.log(distance)
}



function startBeeing(elem, isOpposite=false){
    const INTERVAL_TIME = 100;
    const X_DIVISION = 10;
    const Y_DIVISION = 10;
    let bee = elem;
    let x0 = parseInt(elem.style.left);
    let y0 = parseInt(elem.style.top)
    //console.log(elem.style.left, elem.style.top)
    let beepos = { x:x0 , y:y0 };
    let mouse = { x:x0, y:y0, xprev:0, yprev:0, xDiff:0, yDiff:0};

    document.addEventListener("mousemove", getMouse);
    //bee.style.position = "absolute"; 

    let intervalID = setInterval(function(){
        followMouse(isOpposite)
    }, INTERVAL_TIME);
     

    function getMouse(e) {
        mouse.xprev = mouse.x;
        mouse.yprev = mouse.y;
        mouse.x = e.pageX - window.innerWidth/2;
        mouse.y = e.pageY - window.innerHeight/2;
        mouse.xDiff = mouse.x - mouse.xprev;
        mouse.yDiff = mouse.y - mouse.yprev;
    }
    
    function followMouse(isOpposite=false) {
        if(isOpposite){
            beepos.x -= mouse.xDiff //X_DIVISION;
            beepos.y -= mouse.yDiff;
            bee.style.left = beepos.x + "px";
            bee.style.top = beepos.y + "px";

        }
        else{
            //let distX = (mouse.x/X_DIVISION - beepos.x);
            //let distY = (mouse.y/Y_DIVISION - beepos.y);
            beepos.x += mouse.xDiff //X_DIVISION;
            beepos.y += mouse.yDiff;
            bee.style.left = beepos.x + "px";
            bee.style.top = beepos.y + "px";
            
        }
    }
    
    return intervalID;
}

/*
funciton caclulateAdjustement(){

}*/