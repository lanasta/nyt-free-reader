var checker = setInterval(function(){
  hideBlockers();
}, 500);
var hidden = false;
var v1Paywall = false;
var originalBg = $("body").css("background");

function hideBlockers(){
    if ($("#gatewayCreative").length > 0){
        window.location.href = "https://outline.com/" + document.URL;
    }
    var subscribePopup = $("body").find('div[data-testid*=dock-gateway]').attr('class');
    if (subscribePopup != null){
        $("body").css("background", "url('https://loading.io/spinners/spin/lg.ajax-spinner-gif.gif') no-repeat center");
        $("#app").hide();
        v1Paywall = true;
    }
    if (subscribePopup == null && hidden && v1Paywall){
      $("body").css("background", originalBg);
      $("#app").show();
        var resizeEvent = new Event('resize');
 		window.dispatchEvent(resizeEvent);
    	stopChecker();
    }
    $("." + subscribePopup).remove();
    $(".css-mcm29f").css("position", "relative");
    $(".css-1bd8bfl").css("background", "transparent");
    var subscribeInline= $("body").find('div[class*=InlineMessage]').attr('class');
    $("." + subscribeInline).remove();
    var ads = $("body").find('div[id^="story-ad"]').attr('class');
    while (ads != null){
	$("." + ads).remove();
	ads = $("body").find('div[id^="story-ad"]').attr('class');
    }
    if (!$("body").hasClass(subscribePopup)){
      hidden = true;
    }
    stopChecker();
    checker = setInterval(hideBlockers, 500);
}

function stopChecker(){
  clearInterval(checker);
}
