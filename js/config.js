const DEBUG = false;
const INITIAL_SIZE = 1900;
const INITIAL_SIZE_HEIGHT = 1200;
const LANG = "en";
const EXPERTISEPAGE  = (LANG=="en")? "experience.html" : "experience_hy.html";
const INDEXPAGE = (LANG=="en")? "/" : "index_hy.html";
var volume = 0;



//share buttons 
document.getElementById('fb-button').onclick = function() {
    FB.ui({
        method: 'share',
        mobile_iframe: true,
        href: location.href
    }, function(response){});
}

var twitterBtn = document.getElementById('twitter-button');
var text = encodeURIComponent('Hey everyone, come & see how good I look!');
var shareUrl = 'https://twitter.com/intent/tweet?url=' + location.href + '&text=' + text;
twitterBtn.href = shareUrl; // 1

twitterBtn.addEventListener('click', function(e) {
  e.preventDefault();
  var win = window.open(shareUrl, 'ShareOnTwitter', getWindowOptions());
  win.opener = null; // 2
});


var getWindowOptions = function() {
    var width = 500;
    var height = 350;
    var left = (window.innerWidth / 2) - (width / 2);
    var top = (window.innerHeight / 2) - (height / 2);
  
    return [
      'resizable,scrollbars,status',
      'height=' + height,
      'width=' + width,
      'left=' + left,
      'top=' + top,
    ].join();
  };