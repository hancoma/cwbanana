$(document).bind("mobileinit", function () {
    $.mobile.pushStateEnabled = true;
});
 
$(function () {
    var menuStatus=false;
	var menuStatus2=false;
    /*
    // page click
    $(".pages").click(function () {
		if ($(".ui-page-active").css("margin-left") != '0px')
		{
			$(".ui-page-active").animate({
				marginLeft: "0px",
			}, 300, function () {
				menuStatus = false
			});
			return false;
		}
    });
 	*/
	// Show menu
    $("a.showMenu").click(function () {
        if (menuStatus != true) {
            $(".ui-page-active").animate({
                marginLeft: "60%",
            }, 300, function () {
                menuStatus = true
            });
			$("#menu").animate({
				opacity: "1",
			}, 300);
			$("#menu").addClass("dp_bl");
            return false;
        } else {
            $(".ui-page-active").animate({
                marginLeft: "0px",
            }, 300, function () {
                menuStatus = false
            });
			$("#menu").animate({
				opacity: "0.5",
			}, 300);
			$("#menu").removeClass("dp_bl");
            return false;
        }
    });
 	 // Show menu2
    $("a.showMenu2").click(function () {
        if (menuStatus2 != true) {
            $(".ui-page-active").animate({
                marginLeft: "-60%",
            }, 300, function () {
                menuStatus2 = true
            });
			$("#menu2").animate({
				opacity: "1",
			}, 300);
			$("#menu2").addClass("dp_bl");
            return false;
        } else {
            $(".ui-page-active").animate({
                marginLeft: "0px",
            }, 300, function () {
                menuStatus2 = false
            });
			$("#menu2").animate({
				opacity: "0.5",
			}, 300);
			$("#menu2").removeClass("dp_bl");
            return false;
        }
    });
	

    $('#menu, .pages').live("swipeleft", function () {
        if (menuStatus) {
            $(".ui-page-active").animate({
                marginLeft: "0px",
            }, 300, function () {
                menuStatus = false
            });
			$("#menu").animate({
				opacity: "0.5",
			}, 300);
			$("#menu").removeClass("dp_bl");
		}
    });
 
    $('.pages').live("swiperight", function () {
		if (!menuStatus && $(".ui-page-active").css("margin-left") == '0px') {
            $(".ui-page-active").animate({
                marginLeft: "60%",
            }, 300, function () {
                menuStatus = true
            });
			$("#menu").animate({
				opacity: "1",
			}, 300);
			$("#menu").addClass("dp_bl");
        }
    });
	
	$('#menu2, .pages').live("swiperight", function () {
		if (menuStatus2) {
			$(".ui-page-active").animate({
				marginLeft: "0px",
			}, 300, function () {
				menuStatus2 = false
			});
			$("#menu2").animate({
				opacity: "0.5",
			}, 300);
			$("#menu2").removeClass("dp_bl");
		}
	});

	$('.pages').live("swipeleft", function () {
		if (!menuStatus2 && !menuStatus) {
			$(".ui-page-active").animate({
				marginLeft: "-60%",
			}, 300, function () {
				menuStatus2 = true
			});
			$("#menu2").animate({
				opacity: "1",
			}, 300);
			$("#menu2").addClass("dp_bl");
		}
	});
	
	

    $('div[data-role="page"]').live('pagebeforeshow', function (event, ui) {
        menuStatus = false;
        $(".pages").css("margin-left", "0");
    });
 	
	 $('div[data-role="page"]').live('pagebeforeshow', function (event, ui) {
        menuStatus2 = false;
        $(".pages").css("margin-right", "0");
    });
	
    // Menu behaviour
    $("#menu li a").click(function () {
        var p = $(this).parent();
        if ($(p).hasClass('active')) {
            $("#menu li").removeClass('active');
        } else {
            $("#menu li").removeClass('active');
            $(p).addClass('active');
        }
    });
	 // Menu behaviour
    $("#menu2 li a").click(function () {
        var p = $(this).parent();
        if ($(p).hasClass('active')) {
            $("#menu2 li").removeClass('active');
        } else {
            $("#menu2 li").removeClass('active');
            $(p).addClass('active');
        }
    });
});