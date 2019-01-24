let iframe
let iframePlayer

new fullpage('#fullpage', {
    //anchors:['coversee', 'coverhear', 'coverspeak','coveract'],
    //menu: '#nav'
    afterLoad: function(origin, destination, direction){
       let slide = $("#"+destination.item.id);
       
        let quote = $(slide).find(".quote")
        let quote_autor = $(slide).find(".quote-autor")
        if(quote && quote_autor){
            $(quote[0]).addClass("fadeIn animation2")
            $(quote_autor[0]).addClass("fadeIn animation8")
        }


        let becouse = $(slide).find(".becouse")
        let becouseList = $(slide).find(".becouse-list > li")
        if(becouse && becouseList){
            $(becouse[0]).addClass("fadeIn animation2")
            let ind = 8
            let liIndex = 0

            let anim = setInterval(function(){
                let li = becouseList[liIndex]
                $(li).addClass("fadeIn")
                $(li).addClass("animation"+ind)
                
                ind+=4
                liIndex++
                
                if(liIndex==becouseList.length){
                    clearInterval(anim)
                }

            },1000)
        }

        let person = $(slide).find(".person-title")
        let persontext = $(slide).find(".person-text")
        if(person && persontext){
            $(person[0]).addClass("fadeIn animation2")
            $(persontext[0]).addClass("fadeIn animation5")
        }

       
        let bkgrURL = $(slide).attr("data-background-image")
        if(bkgrURL){
            $(slide).css({
                "background-image":'url(' + bkgrURL + ')',
                "background-size": "cover"
            })
        }

        let relatives = $(slide).find(".relatives")
        console.log(slide)
        console.log(relatives)
        if(relatives){
            let ind = 1
            let liIndex = 0

            let anim = setInterval(function(){
                let li = relatives[liIndex]
                $(li).addClass("slideInDown")
                $(li).addClass("animation"+ind)
                
                ind+=1
                liIndex++
                
                if(liIndex==relatives.length){
                    clearInterval(anim)
                }
            },1000)
        }
        
        /* Video */
        /*
        if(destination.anchor=="speak-video"){
            iframe = document.querySelector('#video_video_594');
            iframePlayer = new Vimeo.Player(iframe);
            iframePlayer.play();
        }

        if(origin && origin.anchor=="speak-video"){
            iframePlayer.pause();
        }
        */
        /* end of Video */

    }

    ,onLeave: function(origin, destination, direction){
        //console.log(iframePlayer)
        /*
        if(typeof(iframePlayer)){
            iframePlayer.stop()
        }
        */
        
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


function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}