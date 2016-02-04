var BanTimeline = {
  container: document.getElementById("container"),
  replay_container: document.getElementById("replay_container"), 

  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump
    document.getElementById("container").style.display = "block";
    // run animation after init is done. 
    BanTimeline.frame1();
  },
  reset: function () {
      TweenLite.to(frame1txt, 0, {opacity:1, left:0});
      TweenLite.to(frame2txt, 0, {opacity:0, left:120});
      TweenLite.to(frame3txt, 0, {opacity:0, left:120});
      TweenLite.to(frame4txt, 0, {opacity:0, left:120});
      TweenLite.to(restrictions, 0, {opacity:0});
      TweenLite.to(replay_container, 0, {display: 'none'});
      BanTimeline.init();
  },
  replayFunction: function () {
        TweenLite.to(replay_container, 0, {display: 'block'});
        TweenLite.to(replay_icon, 0, {opacity:1});
        replay_container.onmouseover = function () {
          TweenLite.to(replay_icon, 1, {rotation: -360, transformOrigin:"50% 56%"});
        }
        replay_container.onmouseout = function () {
          TweenLite.to(replay_icon, 0, {rotation: 0});
        }
        replay_container.onclick = function (){
          BanTimeline.reset();
          console.log("replay banner");
        }
  },
  frame1: function () {
    TweenLite.to(frame1txt, .5, {opacity:0,left:-120, delay:2.5});
    TweenLite.delayedCall(2.5, BanTimeline.frame2); 
  },
  frame2: function () {
    TweenLite.to(frame2txt, .5, {opacity:1, left:0});
    TweenLite.to(frame2txt, .5, {opacity:0, left:-120, delay:2.5});
    TweenLite.delayedCall(2.5, BanTimeline.frame3);
  },
  frame3: function () {
    TweenLite.to(frame3txt, .5, {opacity:1, left:0});
    TweenLite.to(frame3txt, .5, {opacity:0, left:-120, delay:2.5});
    TweenLite.delayedCall(2.5, BanTimeline.frame4);
  },
  frame4: function () {
    TweenLite.to(frame4txt, .5, {opacity:1, left:0});
    TweenLite.to(restrictions, .5, {opacity:1});
    BanTimeline.replayFunction();
    TweenLite.to(replay_container, 0, {display:"block",opacity:1});
  }
};

BanTimeline.init();



