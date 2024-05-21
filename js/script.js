$(document).ready(function() {
	console.log("Javascript connected!");

	enableFastclick();
	sadTitleBlur();
	pulzingCookie();
	mobileProgrammingMove();
	openMenuBtn();
	smoothScroll();
	iniSlider();		
	numberAnimations();
	copyMail();
	playSnake();
	iniSkrollr();
	giveMeBanana();
	enableScrollSpy();
	closeWarning();

	function closeWarning() {
		$("img#warning-close").on('click', function() {
        $("#warning-bar").addClass("warning-closed");
    });
	}

	function enableScrollSpy() {
		// top menu
		$(".spy-item")
		.scrollWatchMapTo("ul.nav-group li", null, {
		    resolutionMode: "focus-line",
		    viewMarginTop: 53
		});
	}

	function enableFastclick() {
	  $(function() {
	    FastClick.attach(document.body);
		});
	}
	//animasiin title nya
	function sadTitleBlur() {
		var tempTitle = document.title;
		$(window).blur(function() {
			document.title = ":D " + tempTitle; 
		});

		$(window).focus(function() {
			document.title = tempTitle;
		});
	}

	function numberAnimations() {
		$(window).scroll(function() {
			if ($(".numbers-wrapper").visible(true)) {
				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(" ");

				$("#coded-lines").animateNumber({ number: 30000, numberStep: comma_separator_number_step }, 2000);
				$("#rendered-pixels").animateNumber({ number: 201985568, numberStep: comma_separator_number_step }, 2000);
				$("#coffee-cups").animateNumber({ number: 405, numberStep: comma_separator_number_step }, 2000);
				$("#eaten-nutela").animateNumber({ number: 10, numberStep: comma_separator_number_step }, 2000);

				//$(window).off('scroll');
			}
		});
	}

	function openMenuBtn() {
		$(document).on("keyup", function(event) {
			if (event.keyCode == 27) {
				event.preventDefault();
				$("#menu-btn").trigger("click");
			}
		});

		$("#menu-btn").on("click", function(event) {
			event.preventDefault();
		});

		$("#menu-btn").on("click", function(event) {
	  	event.preventDefault();
	  	$(this).toggleClass("active");

	  	$("body").bind("mousewheel touchmove", function(event) {
	  		if ($("#menu-btn").hasClass("active")) {
	  			event.preventDefault();
	  		}
	  		else {
		  		 $(this).unbind(event);
	  		}
	  	});

	  	$("#overlay").toggleClass("open");
	  	$("#main-wrapper").toggleClass("blur");
	  });

		$("#overlay ul li a").on("click", function() {
	 		$("#menu-btn").trigger("click");
		});
	}

	function iniSlider() {
		$(".clients-ref-inner-wrapper").slick({
			prevArrow: '<div class="arrow left"></div>',
			nextArrow: '<div class="arrow right"></div>',
			dots: true,
			centerMode: true,
			infinite: true,
		  slidesToShow: 1,
	    variableWidth: true,
	    autoplay: true,
	    autoplaySpeed: 12000,
	    initialSlide: 2
	  });
  }

	function smoothScroll() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	  	$('html, body').clearQueue();
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
        	if ($(window).width() <= 700) {
        		$('html, body').animate({
	          	scrollTop: target.offset().top
	        	}, 2200);
        	}
        	else {
        		$('html, body').animate({
	          	scrollTop: target.offset().top
	        	}, 1000);
        	}
	        return false;
	      }
	    }
	  });
	}

	function pulzingCookie() {
		checkCookie();

		function setCookie(cname, cvalue, exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires="+ d.toUTCString();
	    document.cookie = cname + "=" + cvalue + "; " + expires;
		}

		function getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length,c.length);
        }
	    }
	    return "";
		}

		function checkCookie() {
	    var dPulze = getCookie("dribbble-pulze");
	    if (dPulze != "") {
	      $(".dribbble-logo-bottom").addClass("dribbble-pulzing");
	    } 
		};

		$("#order-btn, #email-btn").click(function(event) {
			setCookie("dribbble-pulze", true, 3);
			checkCookie();
		});
	}

	function mobileProgrammingMove() {
		$(window).on("ready load resize", function() {
			if ($(window).width() <= 870) {
				$("main#main-content .target-gr-wrapper .programming img.icon").insertBefore("main#main-content .target-gr-wrapper .programming .floating-text");
			}
			else {
				$("main#main-content .target-gr-wrapper .programming img.icon").insertAfter("main#main-content .target-gr-wrapper .programming .floating-text");
			}

		});
	}

	function copyMail() {
		function copyToClipboard(element) {
		  var $temp = $("<input>");
		  $("body").append($temp);
		  $temp.val($(element).text()).select();
		  document.execCommand("copy");
		  $temp.remove();
		}
		if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
			$("body").one("click", function() {
				copyToClipboard("#domain");
			});
		}

		$("a.email").on("click", function() {
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				$(this).attr("href", "mailto:me@filipbenda.com");
			}
			else {
				$(this).removeAttr("href");
			}

			$(this).find(".copy-box").addClass("visible");
			copyToClipboard($(this).find(".email-text"));


			var elm = $(this).find(".copy-box");

			var newone = elm.clone();
			elm.replaceWith(newone);
			
		});
	}

	function playSnake() {
		var canvasCell = $("main#main-content .portfolio-wrapper .portfolio-cell-wrapper figure.portfolio-cell.canvas-cell");
		var clickNum = 0;

		if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
			$(window).on("ready load resize", function() {
				$("#canvas").attr("width", Math.round(canvasCell.outerWidth() / 10) * 10);
				$("#canvas").attr("height", Math.round(canvasCell.outerHeight() / 10) * 10);
			});

		 	canvasCell.on("contextmenu", function(event) {
			 	clickNum++;
			 	event.preventDefault();

			 	if (clickNum <= 3) {
					$(this).addClass("active");
					setTimeout(function() {
						canvasCell.removeClass("active");
					}, 200);
				}

			 	if (clickNum == 3) {
			 		startGame();
			 		canvasCell.css("cursor", "auto");
			 		$(".canvas-hide").addClass("hidden");
			 	}
			});
 		}
 	}

	function startGame() {
		//Canvas stuff
		var canvas = $("#canvas")[0];
		var ctx = canvas.getContext("2d");
		var w = $("#canvas").width();
		var h = $("#canvas").height();
				
		var cw = 10;
		var d;
		var food;
		var score;
				
		var snake_array;
				
		function init()
		{
			d = "right"; //default direction

			create_snake();
			create_food(); 

			score = 0;

			if(typeof game_loop != "undefined") clearInterval(game_loop);
			game_loop = setInterval(paint, 60);
		}
		init();
		
		function create_snake()
		{
			var length = 5; //Length of the snake
			snake_array = [];
			for(var i = length-1; i>=0; i--)
			{
				//This will create a horizontal snake starting from the top left
				snake_array.push({x: i, y:0});
			}
		}				

		function create_food()
		{
			food = {
				x: Math.round(Math.random()*(w-cw)/cw), 
				y: Math.round(Math.random()*(h-cw)/cw), 
			};
		}
				
		function paint()
		{
			ctx.fillStyle = "white";
			ctx.fillRect(0, 0, w, h);

			var nx = snake_array[0].x;
			var ny = snake_array[0].y;

			if(d == "right") nx++;
			else if(d == "left") nx--;
			else if(d == "up") ny--;
			else if(d == "down") ny++;
			
			if(nx == -1 || nx == w/cw || ny == -1 || ny == h/cw || check_collision(nx, ny, snake_array))
			{
				//restart game
				init();
				//Lets organize the code a bit now.
				return;
			}

			//Create a new head instead of moving the tail
			if(nx == food.x && ny == food.y)
			{
				var tail = {x: nx, y: ny};
				score++;
				//Create new food
				create_food();
			}
			else
			{
				var tail = snake_array.pop(); //pops out the last cell
				tail.x = nx; tail.y = ny;
			}
			//The snake can now eat the food.
			
			snake_array.unshift(tail); //puts back the tail as the first cell
			
			for(var i = 0; i < snake_array.length; i++)
			{
				var c = snake_array[i];
				paint_cell(c.x, c.y);
			}
			
			paint_cell(food.x, food.y);
			var score_text = "Score: " + score;
			ctx.fillText(score_text, 15, h-15);
		}
		
		function paint_cell(x, y)
		{
			ctx.fillStyle = "#2f2a52";
			ctx.fillRect(x*cw, y*cw, cw, cw);
		}
				
		function check_collision(x, y, array)
		{
			//This function will check if the provided x/y coordinates exist
			//in an array of cells or not
			for(var i = 0; i < array.length; i++)
			{
				if(array[i].x == x && array[i].y == y)
				 return true;
			}
			return false;
		}
	
		//Lets add the keyboard controls now
		$(document).keydown(function(e){
			var key = e.which;
			e.preventDefault();

			if(key == "37" && d != "right") d = "left";
			else if(key == "38" && d != "down") d = "up";
			else if(key == "39" && d != "left") d = "right";
			else if(key == "40" && d != "up") d = "down";
			else if (key == 101) {
				score += 15;
			}
		});
	}

	function iniSkrollr() {
	 	var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
    var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
    if ((is_chrome)&&(is_safari)) {is_safari=false;}
    if ((is_chrome)&&(is_opera)) {is_chrome=false;}

		var ua = navigator.userAgent.toLowerCase(); 

		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
			//is Safari
			$("header#main-header #header-background .bg-particles").css("background-attachment", "scroll");
		}
	  else {
			var s = skrollr.init({
				forceHeight: false,
				smoothScrolling: false,
				easing: "begin/end",
			});

			setTimeout(function () {
			  window.dispatchEvent(new Event('resize'));
			}, 0);

			if (s.isMobile()) {
		    s.destroy();  
			}
		}
	}

	function giveMeBanana() {
		var secretWord = new RegExp("givemebanana");
		var userWord = "0";
		var banana = "";

		$("body").on("keydown", function() {
			userWord += event.key;
	    var res = secretWord.test(userWord);

	    if (res) {
	    	banana = true;
				$("body").css("cursor", "copy");
	    	allowBanana();
	    }
		});

		function allowBanana() {
			$("body").on("click", function() {
				if (banana) {
					var scaleNum = Math.random() * 2;

					var cursorX = event.pageX - 75;
					var cursorY = event.pageY - 100;

					$("body").prepend("<img src='images/banana.png' alt='banana' class='banana' style='position: absolute; left: " + cursorX + "px; top: " + cursorY + "px; transform: scale(" + scaleNum + "); z-index: 9999999' />");
				}
			});
		}
	}
});
