const DEBUG = false;
const INITIAL_SIZE = 1900;
const INITIAL_SIZE_HEIGHT = 1200;
const EXPERTISEPAGE = (LANG == "en") ? "experience.html" : "experience_hy.html";
const INDEXPAGE = (LANG == "en") ? "/#about" : "index_hy.html#about";
let volume = 0;


window.fbAsyncInit = function () {
  FB.init({
    appId: '1774450775918270',
    xfbml: true,
    version: 'v2.10'
  });
  FB.AppEvents.logPageView();
};
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


window.onload = function () {
  //share buttons 
  document.getElementById('fb-button').onclick = function () {
    FB.ui({
      method: 'share',
      mobile_iframe: true,
      href: location.href
    }, function (response) { });
  }
}

var twitterBtn = document.getElementById('twitter-button');
var text = encodeURIComponent('Hey everyone, come & see how good I look!');
var shareUrl = 'https://twitter.com/intent/tweet?url=' + location.href + '&text=' + text;
twitterBtn.href = shareUrl; // 1

twitterBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var win = window.open(shareUrl, 'ShareOnTwitter', getWindowOptions());
  win.opener = null; // 2
});


var getWindowOptions = function () {
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