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
    var subscribePopup = $("body").find('div[class*=DockGateway]').attr('class');
    if (subscribePopup != null){
        $("body").css("background", "url('https://loading.io/spinners/spin/lg.ajax-spinner-gif.gif') no-repeat center");
        $("#app").hide();
        v1Paywall = true;
    }
    if (subscribePopup == null && hidden && v1Paywall){
      stopChecker();
      $("body").css("background", originalBg);
      $("#app").show();
    }
    $("." + subscribePopup).remove();
    $(".css-mcm29f").css("position", "relative");
    if (!$("body").hasClass('[class*=DockGateway]')){
      hidden = true;
    }
    stopChecker();
    checker = setInterval(hideBlockers, 500);
}

function stopChecker(){
  clearInterval(checker);
}