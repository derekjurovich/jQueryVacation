$(document).ready(function(){ // dont run until document is ready
	// $("img").css({ opacity: 0.5 }).hover(function(){
	//  	$(this).animate({ opacity: .1 });
	// });	
		// $(".secondWord").fadeToggle();
		// $(".titlewords").css("font-size", "100 px");
		// $("h2").css("color", "red");

// $("img").css({ opacity: 0.5 }).hover(function() {
//   $(this).animate({ opacity: 1 });
// }, function() {
//   $(this).animate({ opacity: 0.5 });
// });
// 		})

	$("button").click(function(){
    	$(".box").css("-webkit-filter", "none");
    	$("h1").css("color", "red");
	}
);

	
});
