"use strict";angular.module("sadStickersApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/index.html"}).when("/elections-2k16",{templateUrl:"views/elections-2016.html"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),angular.module("sadStickersApp").controller("MainCtrl",function(){this.awesomeThings=[]}),angular.module("sadStickersApp").run(["$templateCache",function(a){a.put("views/elections-2016.html",'<div id="se-container"> <div id="se-landing-header"> <img src="/images/packs/elections-2k16/header-phone-left-faced.png" class="hidden-if-smaller-then-max-width"> <img src="/images/packs/elections-2k16/header-phone-front.png" class="hidden-if-smaller-then-max-width"> <img src="/images/packs/elections-2k16/header-phone-right-faced.png"> <h1>Elections 2k16! Sad Stickers.</h1> </div> <div id="se-langing-subsection"> Either candidate is a win! </div> <div id="se-langing-subsection2"> <!--<a href="/">--> <!--<img src="http://www.paperhelp.org/landing-new/img/apple.png">--> <!--</a>--> <span style="font-size: 20px">Soon at the App Store!</span> </div> <div class="text-center" style="padding: 30px 0"> <a href="/" style="font-size: 24px">Back to all stickers</a> </div> </div>'),a.put("views/index.html",'<div id="ss-main-container"> <div class="promo-section" style="background-image: url(\'http://img.mi9.com/landscape/5088/beautiful-summer-2012-evening-lonely-tree_1920x1200_97034.jpg\')"> <div> <h1> Sad Stickers for iOS.</h1> <p>Because everyone of us deserves some sad moments.</p> </div> </div> <div class="promo-text-section"> <div class="container"> <div class="row"> <div class="col-sm-6 border-left-green"> Bad things do happen. How I respond to them defines my character and the quality of my life. I can choose to sit in perpetual sadness, immobilized by the gravity of my loss, or I can choose to rise from the pain and treasure the most precious gift I have - life itself. </div> <div class="col-sm-6"></div> </div> <div class="row hidden-if-smaller-then-max-width"> <div class="col-sm-6"></div> <div class="col-sm-6 border-left-green"> Some days are just bad days, that\'s all. You have to experience sadness to know happiness, and I remind myself that not every day is going to be a good day, that\'s just the way it is! </div> </div> <div class="row hidden-if-smaller-then-max-width"> <div class="col-sm-6 border-left-green"> Don\'t Make Assumptions. Find the courage to ask questions and to express what you really want. Communicate with others as clearly as you can to avoid misunderstandings, sadness and drama. With just this one agreement, you can completely transform your life. </div> <div class="col-sm-6"></div> </div> </div> </div> <h1 class="text-center">Elections 2k16 Pack!</h1> <div> <a class="promo-section" style="background-image: url(\'/images/packs/elections-2k16/main-page-section.png\')" href="/elections-2k16"> </a> <div class="text-center" style="padding: 20px 0"> <p style="padding: 0">Leadership is not about the next election, it\'s about the next generation.</p> <p style="padding: 0"><a href="/elections-2k16">Check out <b>Elections 2k16</b> Pack <!--for only $0.99--> </a></p> </div> </div> <div class="promo-text-section"> <div class="container"> <div class="row"> <div class="col-sm-6 border-left-green"> Just don\'t give up trying to do what you really want to do. Where there is love and inspiration, I don\'t think you can go wrong. </div> <div class="col-sm-6"></div> </div> <div class="row hidden-if-smaller-then-max-width"> <div class="col-sm-6"></div> <div class="col-sm-6 border-left-green"> Inspiration is one thing and you can\'t control it, but hard work is what keeps the ship moving. Good luck means, work hard. Keep up the good work. </div> </div> <div class="row hidden-if-smaller-then-max-width"> <div class="col-sm-6 border-left-green"> Youth is the period in which a man can be hopeless. The end of every episode is the end of the world. But the power of hoping through everything, the knowledge that the soul survives its adventures, that great inspiration comes to the middle-aged. </div> <div class="col-sm-6"></div> </div> </div> </div> <div class="promo-text-section text-center bg-inverse text-inverse feelsbadman-frog"> <p>Designed with some sadness.</p> <p>#sadness #loneliness #feelsbadman</p> </div> </div>')}]);