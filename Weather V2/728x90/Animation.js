var BanTimeline = {
  glowBtn: 0,
  glowBtn2: 0,
  rainOn: 0,
  replayOn: 0,
  container: document.getElementById("container"),
  final_frame: document.getElementById("final_frame"), 
  replay_container: document.getElementById("replay_container"), 

  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump
    document.getElementById("container").style.display = "block";
    // run animation after init is done. 
    BanTimeline.frame1();
  },
  reset: function () {
    TweenLite.to(frame1, 0, {display: "block",opacity:1});
    TweenLite.to(frame3, 0, {display: 'block',opacity:1});
    TweenLite.to(tvStand, 0, {display: 'block'});
    TweenLite.to(switch_glow5, 0, {display: 'none', opacity:0});
    TweenLite.to(cta_shine5, 0, {display: 'none',opacity:0});
    TweenLite.to(flick1, 0, {opacity:1});
    TweenLite.to(flick2, 0, {display:"none"});
    TweenLite.to(whiteBg, 0, {display:"none"});
    TweenLite.to(dontLet, 0, {opacity:0,top:50});
    TweenLite.to(noSignal2, 0, {display:"none"});
    TweenLite.to(brightsky, 0, {display:"none",opacity:0});
    TweenLite.to(seeThings, 0, {opacity:0,top:50});
    TweenLite.to(rainOrShine, 0, {opacity:0,top:50});
    TweenLite.to(end_lightning_1, 0, {display:"none"});
    TweenLite.to(end_lightning_2, 0, {display:"none"});
    TweenLite.to(end_lightning_3, 0, {display:"none"});
    TweenLite.to(end_lightning_4, 0, {display:"none"});
    TweenLite.to(end_lightning_5, 0, {display:"none"});
    TweenLite.to(burst, 0, {display:"none"});
    TweenLite.to(whiteBlind, 0, {display:"none",opacity:0});
    TweenLite.to(finalBg, 0, {display:"none"});
    TweenLite.to(finaltxt, 0, {display:"none"});
    BanTimeline.glowBtn= 0;
    BanTimeline.glowBtn2=0;
    BanTimeline.frame1replay();
    BanTimeline.glow();
    TweenLite.to(replay_container, 0, {display: 'none'});    
  },
  replayFunction: function () {
        TweenLite.to(replay_container, 0, {display: 'block'});
        replay_container.onmouseover = function () {
          TweenLite.to(replay_icon, 0, {display: 'block'});
          TweenLite.to(replay_icon, 1, {rotation: -360});
        }
        replay_container.onmouseout = function () {
          TweenLite.to(replay_icon, 0, {rotation: 0});
        }
        replay_container.onclick = function (){
          BanTimeline.reset();
          console.log("replay banner");
        }
  },
  glow: function() {
    if(BanTimeline.glowBtn == 1){
      TweenLite.to(switch_now, 0, {display: 'block',opacity:1});
      container.onmouseover = function(){      
        TweenLite.to(switch_glow5, 0, {display: 'block',opacity:1});
        TweenLite.to(switch_glow5, 0.4, {scaleX:1, scaleY:1, delay:0});
        TweenLite.to(switch_glow5, 0.3, {opacity: 0, delay:.3}); 
        TweenLite.to(switch_glow5, 0, {scaleY:0, scaleX:0, delay:.7});  
        if(BanTimeline.glowBtn2 == 1){
          TweenLite.to(cta_shine5, 0, {display: 'block',opacity:1});
          TweenLite.to(cta_shine5, .4, {scaleX:1, scaleY:1.1, delay:0});
          TweenLite.to(cta_shine5, .3, {opacity:0, delay:.3});
          TweenLite.to(cta_shine5, 0, {scaleX:0, scaleY:0, delay:.7});
        } 
      }
    }
  },
  rain: function () {
      TweenLite.to(rain1, 0, {display:"block", top:-100,left:0});  
      TweenLite.to(rain2, 0, {display:"block", top:-100,left:0});
      TweenLite.to(rain3, 0, {display:"block", top:-100,left:0});
      TweenLite.to(rain4, 0, {display:"block", top:-100,left:0});
      TweenLite.to(rain5, 0, {display:"block", top:-100,left:0});
      TweenLite.to(rain6, 0, {display:"block", top:-100,left:0});
      TweenLite.to(rain7, 0, {display:"block", top:-100,left:0});
      TweenLite.to(rain8, 0, {display:"block", top:-100,left:0});
      TweenLite.to(rain9, 0, {display:"block", top:-100,left:0});
      TweenLite.to(rain10, 0, {display:"block", top:-100,left:0});
      TweenLite.to(rain11, 0, {display:"block", top:-100,left:0});
      TweenLite.to(rain12, 0, {display:"block", top:-100,left:0});
      TweenLite.to(rain13, 0, {display:"block", top:-100,left:0});
      TweenLite.to(rain14, 0, {display:"block", top:-100,left:0});
    if(BanTimeline.rainOn == 1)
    {
      TweenLite.to(rain1, 1.3, {display:"block", top:200,left:-90, delay:0});  
      TweenLite.to(rain2, 1.3, {display:"block", top:200,left:-90, delay:.2});
      TweenLite.to(rain3, 1.1, {display:"block", top:200,left:-90, delay:.4});
      TweenLite.to(rain4, 1.3, {display:"block", top:200,left:-90, delay:.6});
      TweenLite.to(rain5, 1.3, {display:"block", top:200,left:-90, delay:.8});
      TweenLite.to(rain6, 1.3, {display:"block", top:200,left:-90, delay:1});
      TweenLite.to(rain7, 1.3, {display:"block", top:200,left:-90, delay:1.2});
      TweenLite.to(rain8, 1.3, {display:"block", top:200,left:-90, delay:1.4});
      TweenLite.to(rain9, 1.3, {display:"block", top:200,left:-90, delay:1.6});
      TweenLite.to(rain10, 1.3, {display:"block", top:200,left:-90, delay:1.8});
      TweenLite.to(rain11, 1.3, {display:"block", top:200,left:-90, delay:2});
      TweenLite.to(rain12, 1.3, {display:"block", top:200,left:-90, delay:2.2});
      TweenLite.to(rain13, 1.3, {display:"block", top:200,left:-90, delay:2.4});
      TweenLite.to(rain14, 1.3, {display:"block", top:200,left:-90, delay:2.6});
    }
    TweenLite.delayedCall(2.6, BanTimeline.rain);
  },
  frame1: function () {
    BanTimeline.glowBtn = 1;
    BanTimeline.rainOn = 1; 
    TweenLite.delayedCall(0, BanTimeline.rain);
    TweenLite.delayedCall(.2, BanTimeline.frame2);
  },
  frame1replay: function () {
    BanTimeline.glowBtn = 1;
    BanTimeline.rainOn = 1;
    TweenLite.delayedCall(.2, BanTimeline.frame2); 
  },
  frame2: function () {
    TweenLite.to(flick1, .1, {opacity:0, delay:.3});
    TweenLite.to(flick2, .1, {display:"block", delay:.3});
    TweenLite.to(flick2, .1, {display:"none", delay:.45});
    TweenLite.to(flick2, .1, {display:"block", delay:.6});
 

    TweenLite.to(whiteBg, 0, {display:"block", delay:.4});
    TweenLite.to(whiteBg, .1, {display:"none", opacity:0, delay:.5});
    //tv flicker
    TweenLite.to(flick2, .1, {display:"none", delay:.7});
    TweenLite.to(flick2, .05, {display:"block", delay:.75});
    TweenLite.to(flick2, .03, {display:"none", delay:.8});
    TweenLite.to(flick2, .05, {display:"block", delay:.9});
    TweenLite.to(noSignal2, 0, {display:"block", delay:1.2});
    TweenLite.to(noSignalImg, 0, {display:"block", delay:1.2});
    TweenLite.to(noSignalImg, 0, {scaleX:1.2, delay:1.2});
    TweenLite.to(noSignalImg, 0, {scaleX:1, delay:1.3});
    TweenLite.to(noSignalImg, 0, {scaleX:1.5, delay:1.4});
    TweenLite.to(noSignalImg, 0, {scaleX:1.2, delay:1.45});
    TweenLite.to(noSignalImg, 0, {scaleX:1, delay:1.6});
    TweenLite.delayedCall(.8, BanTimeline.frame3);
  },
  frame3: function () {
    TweenLite.to(dontLet, .8, {opacity:1,top:0, delay: 0, ease:Expo.easeOut});
    TweenLite.to(dontLet, .8, {opacity:0,top:-60, delay: 3,ease:Expo.easeOut});

    TweenLite.to(flick1, .5, {opacity:1, delay:3});
    TweenLite.to(flick2, 0, {display:"none", delay:3});
    TweenLite.to(noSignal2, 0, {display:"none", delay:3});

    TweenLite.to(brightsky, .4, {display:"block", left:0, delay:3});
    TweenLite.to(brightsky, .4, {opacity:1, delay:3});
    TweenLite.to(seeThings, .8, {opacity:1,top:0, delay: 3.2, ease:Expo.easeOut});
    TweenLite.to(seeThings, .8, {opacity:0,top:-60, delay: 6, ease:Expo.easeOut});

    TweenLite.to(rainOrShine, .8, {opacity:1,top:0, delay: 6.2, ease:Expo.easeOut});

    TweenLite.delayedCall(9, BanTimeline.frame4);
  },
  frame4: function () {
    TweenLite.to(end_lightning_1, .02, {display:"block", delay: 0});
    TweenLite.to(end_lightning_1, .02, {display:"none", delay: .02});

    TweenLite.to(end_lightning_2, .02, {display:"block", delay: .04});
    TweenLite.to(end_lightning_2, .02, {display:"none", delay: .06});


    TweenLite.to(end_lightning_3, .02, {display:"block", delay: .08});
    TweenLite.to(end_lightning_3, .02, {display:"none", delay: .1});

    TweenLite.to(end_lightning_4, .02, {display:"block", delay: .12});
    TweenLite.to(end_lightning_4, .02, {display:"none", delay: .14});
    
    TweenLite.to(end_lightning_5, .02, {display:"block", delay: .16});
    TweenLite.to(end_lightning_5, .02, {display:"none", delay: .18});

    TweenLite.to(burst, .02, {display:"block", delay: .23});
    TweenLite.to(whiteBlind, .01, {display:"block",opacity:1, delay: .24});

    TweenLite.to(frame1, 0, {display:"none",opacity:0, delay: .24});
    TweenLite.to(frame3, 0, {display:"none",opacity:0, delay: .24});
    TweenLite.to(burst, 0, {display:"none",opacity:0, delay: .24});
    TweenLite.to(whiteBlind, 1, {display:"none",opacity:0, delay: .25});


    TweenLite.delayedCall(.5, BanTimeline.frame5);
  },
  frame5: function () {
    // BanTimeline.rainOn = 0;
    BanTimeline.replayFunction();
    BanTimeline.glowBtn2 = 1;
    TweenLite.to(finalBg, 0, {display:"block"});
    TweenLite.to(finaltxt, 0, {display:"block"});
    TweenLite.to(replay_container, 0, {display:"block"});
  }
};

BanTimeline.init();
BanTimeline.glow();


