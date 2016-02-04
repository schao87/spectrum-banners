home_animation = (function() {

	function replayFunction() {
	    TweenLite.to(replay_container, 0, {display: 'block', opacity:1});
	    TweenLite.to(replay_icon, 0, {opacity:1});
	    replay_container.onmouseover = function () {
	      TweenLite.to(replay_icon, 0, {display: 'block'});
	      TweenLite.to(replay_icon, 50, {rotation: -3600});
	    };
	    replay_container.onmouseout = function () {
	      TweenLite.to(replay_icon, 0, {rotation: 0});
	    };
	    replay_container.onclick = function (){
	      resetFunction();
	      console.log("replay banner");
	    };
 	}
	function init()
	{
		document.getElementById("container").style.display = "block";
		frame1();
	};
	function resetFunction()
	{
		TweenLite.to(replay_icon, 0, {opacity: 0});
		frame1Replay();
	};
	function frame1Replay()
	{
		TweenLite.to(f1, 0.2, {top: -15,opacity:0, delay:.5});
		TweenLite.delayedCall(.7, frame2);
	};
	function frame1()
	{
		TweenLite.to(f1, 0.2, {top: -15,opacity:0, delay:2.6});
		TweenLite.delayedCall(2.8, frame2);
	};
	function frame2()
	{
		TweenLite.to(f2_top, 0.2, {opacity: 1, display:"block"});
		TweenLite.to(f2, 0.2, {opacity: 1, display:"block"});

		
		TweenLite.to(f2, 0.2, {opacity: 0, delay: 2.6});
		TweenLite.delayedCall(2.8, frame3);
	};
	function frame3()
	{	
		TweenLite.to(f2_top, 0.2, {opacity: 0});
		TweenLite.to(f3_top, 0.2, {opacity: 1, display:"block"});
		TweenLite.to(f3, 0.2, {opacity: 1, display:"block"});


		TweenLite.to(f3, 0.2, {opacity: 0, delay: 2.6});
		TweenLite.delayedCall(2.8, frame4);
	};
	function frame4()
	{	

		TweenLite.to(f3_top, 0.2, {opacity: 0});
		TweenLite.to(f4_top, 0.2, {opacity: 1, display:"block"});
		TweenLite.to(f4, 0.2, {opacity: 1, display:"block"});

		TweenLite.to(f4, 0.2, {opacity: 0, delay: 2.6});
		TweenLite.delayedCall(2.8, frame5);
	};
	function frame5()
	{	
		TweenLite.to(f4_top, 0.2, {opacity: 0});
		TweenLite.to(f5_top, 0.2, {opacity: 1, display:"block"});
		TweenLite.to(f5, 0.2, {opacity: 1, display:"block"});

		TweenLite.to(f5, 0.2, {opacity: 0, delay: 2.6});
		TweenLite.delayedCall(2.8, frame6);
	};
	function frame6()
	{	
		TweenLite.to(f5_top, 0.2, {opacity: 0});
		TweenLite.to(f1, 0, {top:0});
		TweenLite.to(f1, 0.2, {opacity: 1, display:"block"});
		replayFunction();
		// TweenLite.delayedCall(2.8, frame7);
	};
	
	init();
});
window.onload = function() {
home_animation();
}


