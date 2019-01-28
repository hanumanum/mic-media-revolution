let debug = false;
let iframe
let iframePlayer
var player;

new fullpage('#fullpage', {
    //anchors:['coversee', 'coverhear', 'coverspeak','coveract'],
    //menu: '#nav'
    afterLoad: function (origin, destination, direction) {
        let slide = $("#" + destination.item.id);

        let customVideo = $(slide).find(".custom-video")
        if (customVideo.length != 0) {
            let custVidID = $(customVideo[0]).attr("id")
            player = new Plyr('#' + custVidID);
        }


        var backgroundVideo = $(slide).find(".backgroundvideo")
        if (backgroundVideo.length != 0) {
            console.log("enterd")
            let bckgrVidID = $(backgroundVideo[0]).attr("id")
            player = new Plyr('#' + bckgrVidID, { 'controls': [], 'settings': ['loop'], 'clickToPlay': false, 'autoplay': true, 'muted': true });
            //player.mute()
            player.volume = 0
            player.loop = true
            player.play()
        }


        let quote = $(slide).find(".quote")
        let quote_autor = $(slide).find(".quote-autor")
        if (quote && quote_autor) {
            $(quote[0]).addClass("fadeIn animation2")
            $(quote_autor[0]).addClass("fadeIn animation8")
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

        let relatives = $(slide).find(".relatives")
        if (relatives) {
            let ind = 1
            let liIndex = 0

            let anim = setInterval(function () {
                let li = relatives[liIndex]
                if(!debug){
                    $(li).addClass("slideInDown")
                    $(li).addClass("animation1")
                }

                ind += 1
                liIndex++

                if (liIndex == relatives.length) {
                    clearInterval(anim)
                }
            }, 500)
        }

    }

    , onLeave: function (origin, destination, direction) {
        if (typeof (player) === "object") {
            player.stop()
        }

    }

});




/*
$(".relatives").keydown(function(event){
    if(event.which=="17")
        cntrlIsPressed = true;
});

$(".relatives").keyup(function(){
    cntrlIsPressed = false;
});

var cntrlIsPressed = false;
function selectMe(mouseButton)
{
    if(cntrlIsPressed)
    {
        switch(mouseButton)
        {
            case 1:
                alert("Cntrl +  left click");
                break;
            case 2:
                alert("Cntrl + right click");
                break;
            default:
                break;
        }
    }


}
*/


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

if(debug){
    $(function () {
        $(".relatives").draggable({
            stop: function (event, ui) {
                console.log(
                    $(this).attr("src"),
                    "left:" + Math.round($(this).position().left) + "px; top:" + Math.round($(this).position().top)+"px;")
            }
        });
    });
    
}


