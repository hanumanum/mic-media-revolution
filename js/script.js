let debug = false;
let iframe;
let iframePlayer;
var player;
var playerPerson;
var volume = 0;

$("#sound").click(function(){
    $(this).toggleClass("sound-on").toggleClass("sound-off")
    volume = (volume==0)? 5:0
})


new fullpage('#fullpage', {
    fadingEffect:true,
    fadingEffectKey:"18DF4FFA-5D204426-AC93E15C-E7F303EF",
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
            playerPerson = new Plyr('#' + custVidID, {'autopause':false});
        }
        

        var backgroundVideo = $(slide).find(".backgroundvideo")
        if (backgroundVideo.length != 0) {
            let bckgrVidID = $(backgroundVideo[0]).attr("id")
            player = new Plyr('#' + bckgrVidID, { 'controls': [], 'settings': ['loop'], 'clickToPlay': false, 'autoplay': true, 'muted': true , 'autopause':false});
            player.volume = 0
            player.loop = true
            player.play()
        }

        let quote = $(slide).find(".quote")
        let quote_autor = $(slide).find(".quote-autor")
        if (quote && quote_autor) {
            $(quote[0]).addClass("fadeIn animation3")
            setTimeout(function(){
                $(quote_autor[0]).addClass("fadeIn animation3")
            },1000)
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

        $(relatives).hover(function(){
            let w = parseInt($(this).css("width").split("px")[0])
            let h = parseInt($(this).css("height").split("px")[0])
            let z = $(this).css("z-index")
            
            $(this).data("startparams",{w,h,z})

            let wn = w+w*0.3
            let hn = h+h*0.3
            let zn = 2000
            $(this).css("z-index",zn)
            $(this).animate({width: wn+"px", heigth:hn+"px"}, 'slow');
        }, function(){
            
            let startparams = $(this).data("startparams")
            z = (startparams.z=="auto")?0:startparams.z;
            $(this).css("z-index",z);
            $(this).animate({width: startparams.w, heigth:startparams.h}, 'slow', function(){
                
            })
        })

        if(relativesfade && relativesfade!==undefined){
            setTimeout(function(){
                let ind = 0
                $(relativesfade[ind]).addClass("fadeIn")
                $(relativesfade[ind]).addClass("animation1")
                ind++

                let animIntrval = setInterval(function(){
                    $(relativesfade[ind]).addClass("fadeIn")
                    $(relativesfade[ind]).addClass("animation1")

                    ind++

                    if(ind==relativesfade.length){
                        clearInterval(animIntrval)
                    }
                },250)
            },500)
        }

        if(relatives && relatives!==undefined){
            let ind = 0;
            $(relatives[ind]).addClass("slideInDown")
            $(relatives[ind]).addClass("animation1")
            ind++

            let animIntrval = setInterval(function(){
                if(!debug){
                    $(relatives[ind]).addClass("slideInDown")
                    $(relatives[ind]).addClass("animation1")
                }
                ind++
                if(ind==relatives.length){
                    clearInterval(animIntrval)
                }

            },350)
        }

        //relatives.removeClass("slideOutDown")

        /*
        //let relatives = $(slide).find(".relatives")
        
        
        let relativesfade = $(slide).find(".relatives-fade")
        if(relativesfade){
            //relativesfade.addClass("fadeIn")
            //relativesfade.addClass("animation2")
        }

        if (relatives) {
            let liIndex = 0
            let anim = setInterval(function () {
                let li = relatives[liIndex]
                if(!debug){
                        $(li).addClass("slideInDown")
                        $(li).addClass("animation1")
                }

                liIndex++

                if (liIndex == relatives.length) {
                    clearInterval(anim)
                }
            }, 500)
        }
        */

    }

    , onLeave: function (origin, destination, direction) {
        let slide = $("#" + origin.item.id);
        
        if (typeof (player) === "object") {
            player.stop()
        }
        
        if (typeof (playerPerson) === "object") {
            playerPerson.stop()
        }


        let relatives = $(slide).find(".relatives")
        let relativesfade  = $(slide).find(".relatives-fade")
        relatives.removeClass("slideInDown")
        relativesfade.removeClass("fadeIn")
        
        relatives.addClass("slideOutDown",function(){
            setTimeout(function(){
                relatives.removeClass("slideOutDown")
            },500)
        })
        
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
        $(".relatives , .relatives-fade").draggable({
            stop: function (event, ui) {
                console.log(
                    $(this).attr("src"),
                    "left:" + Math.round($(this).position().left) + "px; top:" + Math.round($(this).position().top)+"px;")
            }
        });
    });
    
}


