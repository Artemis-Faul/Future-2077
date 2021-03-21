var counter = 0;
var scrollPos = 0;

$(".left-menu").click(function(){
	if(counter % 2 == 0){
		$("#menuHand").css({"margin-top": "0vh"});
		setTimeout(function(){
			$("#menuHand li:nth-child(1) a").css({"margin-top": "0"})
		}, 100);
		setTimeout(function(){
			$("#menuHand li:nth-child(2) a").css({"margin-top": "0"})
		}, 200);
		setTimeout(function(){
			$("#menuHand li:nth-child(3) a").css({"margin-top": "0"})
		}, 300);
		setTimeout(function(){
			$("#menuHand li:nth-child(4) a").css({"margin-top": "0"})
		}, 400);
		setTimeout(function(){
			$("#menuHand li:nth-child(5) a").css({"margin-top": "0"})
		}, 500);
		$("#menuHand li a").css({"display": "block"});
		$("#menuHand").css({"display": "flex"});
		$("#menuHand").css({"height": "100%"});
		$("#lm1, #lm2, #lm3").css({"background": "#ed008c"});
		$(".lm-title").css({"color": "#ed008c"});
	}else{
		// $("#menuHand").css({"margin-top": "-100vh"});
		setTimeout(function(){
			$("#menuHand").css({"height": "0vh"});
			$("#menuHand li a").css({"margin-top": "60px"});
			$("#lm1, #lm2, #lm3").css({"background": "#ffffff"});
			$(".lm-title").css({"color": "#ffffff"});
			$("#menuHand li a").css({"display": "none"});
			// $("#menuHand").css({"display": "none"});
		}, 200);
		
	}
	counter++;
})

const mediaQuery = window.matchMedia('(height: 812px)')


$(window).scroll(function(){
		   var st = $(this).scrollTop();
		   if (mediaQuery.matches && $(".left-menu").hasClass("main-menu")) {
			  if (st > scrollPos){
			   	 $(".left-menu").css({"transition": "0.7s"});
			     $(".left-menu").css({"margin-top": "10vh"});
			   } else {
			   	  $(".left-menu").css({"transition": "0.7s"});
			      $(".left-menu").css({"margin-top": "1vh"});
			   }
			}else {
			  if (st > scrollPos){
			   	 $(".left-menu").css({"transition": "0.7s"});
			     $(".left-menu").css({"margin-top": "2vw"});
			   } else {
			   	  $(".left-menu").css({"transition": "0.7s"});
			      $(".left-menu").css({"margin-top": "1vh"});
			   }
			}
		   		scrollPos = st;
		});

// if $(".sect-img-grid").hover(function(){
// 	$(".hide-sect-href").css({"transition": "0.5s"});
// 	$(".hide-sect-href").css({"color": "#fff"});
// })

 $( ".sect-img-block-grid" ).hover(function(){
 	$(".hide-sect-href").css({"color": "#fff"});
    }, function(){ 
    $(".hide-sect-href").css({"transition": "0.5s"});
 	$(".hide-sect-href").css({"color": "transparent"}); 
  });
