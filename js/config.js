const DEBUG = false;
const INITIAL_SIZE = 1900;
const INITIAL_SIZE_HEIGHT = 1200;
const EXPERTISEPAGE = (LANG == "en") ? "experience.html" : "experience_hy.html";
const INDEXPAGE = (LANG == "en") ? "/#about" : "index_hy.html#about";
let volume = 0;
if (window.location.hash == "#home") {
  $("#spinner").css("display", "none")
  $(".cover-text").css("display", "none")
}

window.fbAsyncInit = function () {
  FB.init({
    appId: '355099071756589',
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
  // experienceMobile()
}


var twitterBtn = document.getElementById('twitter-button');
var text = encodeURIComponent('');
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



const GALLERYSLIDERIMAGES = {
  firstGalleryImages: ['img/gallery1/1.jpg',
    'img/gallery1/2.jpg',
    'img/gallery1/3.jpg',
    'img/gallery1/4.jpg',
    'img/gallery1/5.jpg',
    'img/gallery1/6.jpg',
    'img/gallery1/7.jpg',
    'img/gallery1/8.jpg',
    'img/gallery1/9.jpg',
    'img/gallery1/10.jpg',
    'img/gallery1/11.jpg',
    'img/gallery1/12.jpg',
    'img/gallery1/13.jpg',
    'img/gallery1/14.jpg',
    'img/gallery1/15.jpg',
    'img/gallery1/16.jpg',
    'img/gallery1/17.jpg',
    'img/gallery1/18.jpg',
    'img/gallery1/19.jpg',
    'img/gallery1/20.jpg',
    'img/gallery1/21.jpg'],
  secondGalleryImages: ['img/gallery2/1.jpg',
    'img/gallery2/2.jpg',
    'img/gallery2/3.jpg',
    'img/gallery2/5.jpg',
    'img/gallery2/4.jpg',
    'img/gallery2/6.jpg',
    'img/gallery2/7.jpg',
    'img/gallery2/8.jpg',
    'img/gallery2/9.jpg',
    'img/gallery2/10.jpg',
    'img/gallery2/11.jpg',
    'img/gallery2/12.jpg',
    'img/gallery2/13.jpg',
    'img/gallery2/14.jpg',
    'img/gallery2/15.jpg',
    'img/gallery2/16.png',
    'img/gallery2/17.jpg',
    'img/gallery2/18.jpg'
  ],
  thirdGalleryImages: ['img/gallery3/1.jpg',
    'img/gallery3/2.jpg',
    'img/gallery3/3.jpg',
    'img/gallery3/4.jpg',
    'img/gallery3/5.jpg',
    'img/gallery3/6.jpg',
    'img/gallery3/7.jpg',
    'img/gallery3/8.jpg',
    'img/gallery3/9.jpg',
    'img/gallery3/10.jpg',
    'img/gallery3/11.jpg',
    'img/gallery3/12.jpg',
    'img/gallery3/13.jpg',
    'img/gallery3/14.jpg',
    'img/gallery3/15.jpg',
    'img/gallery3/16.jpg',
    'img/gallery3/17.jpg',
    'img/gallery3/18.jpg',
    'img/gallery3/24.jpg',
    'img/gallery3/19.jpg',
    'img/gallery3/20.jpg',
    'img/gallery3/21.jpg',
    'img/gallery3/22.jpg',
    'img/gallery3/23.jpg'
  ]
}
