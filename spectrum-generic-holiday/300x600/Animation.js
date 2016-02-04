home_animation = (function() {
	function replayFunction() {
    TweenLite.to(replay_container, 0, {display: 'block', opacity:1});
    replay_container.onmouseover = function () {
      TweenLite.to(replay_icon, 0, {display: 'block'});
      TweenLite.to(replay_icon, 50, {rotation: -3600});
    };
    replay_container.onmouseout = function () {
      TweenLite.to(replay_icon, 0, {rotation: 0});
    };
    replay_container.onclick = function (){
      resetFunction();
    };
 	}
	function init()
	{
		document.getElementById("container").style.display = "block";
		frame1();
	}
	function resetFunction(){
		TweenLite.to(the_season_of, 0, {opacity: 0, display:"none"});
		TweenLite.to(free_dvr_f6, 0, {opacity: 0, display:"none"});
		TweenLite.to(replay_container, 0, {opacity: 0, display:"none"});
		TweenLite.to(replay_icon, 0, {opacity: 0, display:"none"});
		TweenLite.to(all_with, 0, {opacity: 0, display:"none"});
		TweenLite.to(no_contract, 0., {opacity: 0, display:"none"});
		frame1();
	}
	function frame1()
	{
		TweenLite.delayedCall(.5, frame2);
	}
	function frame2()
	{
		TweenLite.to(tv_bold, 0.2, {opacity: 1});
		TweenLite.to(tv_internet_frame1, 0.3, {opacity: 0, delay:.1});

		TweenLite.to(free_HD, 0.3, {opacity: 1, delay:0.3});
		TweenLite.to(free_dvr_service, 0.3, {opacity: 1, delay:0.6});

		TweenLite.to(tv_bold, 0.1, {opacity: 0, delay: 2.6});
		TweenLite.to(free_HD, 0.2, {opacity: 0, delay: 2.6});
		TweenLite.to(tv_internet_frame1, 0.1, {opacity: 1, delay: 2.6});
		TweenLite.to(free_dvr_service, 0.2, {opacity: 0, delay: 2.6});
		TweenLite.delayedCall(2.8, frame3);
	}
	function frame3()
	{	
		TweenLite.to(internet, 0.2, {opacity: 1, display:"block"});
		TweenLite.to(tv_internet_frame1, 0.3, {opacity: 0, delay:.1});

		TweenLite.to(fast_internet, 0.3, {opacity: 1, display:"block", delay: .3});
		TweenLite.to(no_data_cap, 0.3, {opacity: 1, display:"block", delay: .6});

		TweenLite.to(internet, 0.2, {opacity: 0, delay: 2.6});
		TweenLite.to(tv_internet_frame1, 0.1, {opacity: 1, delay: 2.6});
		TweenLite.to(fast_internet, 0.2, {opacity: 0, delay: 2.6});
		TweenLite.to(no_data_cap, 0.2, {opacity: 0, delay: 2.6});
		TweenLite.delayedCall(2.8, frame4);
	}
	
	function frame4()
	{	
		TweenLite.to(voice, 0.2, {opacity: 1, display:"block"});
		TweenLite.to(tv_internet_frame1, 0.3, {opacity: 0, delay:.1});
		
		TweenLite.to(unlimited_calling, 0.3, {opacity: 1, display:"block", delay: .3});
		TweenLite.to(eighteen_calling, 0.3, {opacity: 1, display:"block", delay: .6});

		TweenLite.to(voice, 0.2, {opacity: 0, delay: 2.6});
		TweenLite.to(tv_internet_frame1, 0.1, {opacity: 1, delay: 2.6});
		TweenLite.to(unlimited_calling, 0.2, {opacity: 0, delay: 2.6});
		TweenLite.to(eighteen_calling, 0.2, {opacity: 0, delay: 2.6});
		TweenLite.delayedCall(2.8, frame5);
	}

	function frame5()
	{	
		TweenLite.to(all_with, 0.2, {opacity: 1, display:"block"});
		TweenLite.to(no_contract, 0.3, {opacity: 1, display:"block", delay: .3});

		TweenLite.delayedCall(1, frame6);
	}
	function frame6()
	{	
		TweenLite.to(the_season_of, 0.2, {opacity: 1, display:"block", delay: .3});
		TweenLite.to(free_dvr_f6, 0.3, {opacity: 1, display:"block"});
		TweenLite.to(price, 0.3, {opacity: 1, display:"block", delay: .6});
		TweenLite.to(replay_container, 0.3, {opacity: 1, display:"block", delay: .6});
		TweenLite.to(replay_icon, 0.3, {opacity: 1, display:"block", delay: .6});
		replayFunction();
	}
	init();
});
window.onload = function() {
home_animation();
}


