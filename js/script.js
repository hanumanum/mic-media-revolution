let iframe
let iframePlayer

new fullpage('#fullpage', {
    //anchors:['coversee', 'coverhear', 'coverspeak','coveract'],
    //menu: '#nav'
    afterLoad: function(origin, destination, direction){
		let loadedSlide = this;
        
        
        /* Quotes fadeIn */
        let quote = $("#"+destination.item.id).find(".quote")
        let quote_autor = $("#"+destination.item.id).find(".quote-autor")
        if(quote && quote_autor){
            $(quote[0]).addClass("fadeIn2")
            $(quote_autor[0]).addClass("fadeIn8")
        }
        /* end of Quotes fadeIn */

        /* Becouses */
        let becouse = $("#"+destination.item.id).find(".becouse")
        let becouseList = $("#"+destination.item.id).find(".becouse-list > li")
        if(becouse && becouseList){
            $(becouse[0]).addClass("fadeIn2")
            let ind = 8
            let liIndex = 0

            let anim = setInterval(function(){
                let li = becouseList[liIndex]
                $(li).addClass("fadeIn"+ind)
                
                ind+=4
                liIndex++
                
                if(liIndex==becouseList.length){
                    clearInterval(anim)
                }

            },1000)
        }
        /* End of Becouses */


        /* person */

        let person =  $("#"+destination.item.id).find(".person-title")
        let persontext = $("#"+destination.item.id).find(".person-text")
        if(person && persontext){
            $(person[0]).addClass("fadeIn2")
            $(persontext[0]).addClass("fadeIn5")
        }

        /* end of person */

        /* full screen backgrounds */
        
        let slide = $("#"+destination.item.id)
        let bkgrURL = slide.attr("data-background-image")
        if(bkgrURL){
            console.log("heh")
            $(slide).css({
                "background-image":'url(' + bkgrURL + ')',
                "background-size": "cover"
            })
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