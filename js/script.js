let iframe
let iframePlayer

new fullpage('#fullpage', {
    //anchors:['coversee', 'coverhear', 'coverspeak','coveract'],
    //menu: '#nav'
    afterLoad: function(origin, destination, direction){
		//var loadedSlide = this;
        
        if(destination.anchor=="speak-video"){
            iframe = document.querySelector('#video_video_594');
            iframePlayer = new Vimeo.Player(iframe);
            iframePlayer.play();
        }

        if(origin.anchor=="speak-video"){
            iframePlayer.pause();
        }

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