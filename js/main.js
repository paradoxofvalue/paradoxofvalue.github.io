;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#gtco-offcanvas, .js-gtco-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	$('.js-gtco-nav-toggle').addClass('gtco-nav-white');

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-gtco-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="gtco-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-gtco-nav-toggle gtco-nav-toggle gtco-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#gtco-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#gtco-offcanvas').append(clone2);

		$('#gtco-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#gtco-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-gtco-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-gtco-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;

		// $('.gtco-section').waypoint( function( direction ) {


			$('.animate-box').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
					
					i++;

					$(this.element).addClass('item-animate');
					setTimeout(function(){

						$('body .animate-box.item-animate').each(function(k){
							var el = $(this);
							setTimeout( function () {
								var effect = el.data('animate-effect');
								if ( effect === 'fadeIn') {
									el.addClass('fadeIn animated-fast');
								} else if ( effect === 'fadeInLeft') {
									el.addClass('fadeInLeft animated-fast');
								} else if ( effect === 'fadeInRight') {
									el.addClass('fadeInRight animated-fast');
								} else {
									el.addClass('fadeInUp animated-fast');
								}

								el.removeClass('item-animate');
							},  k * 200, 'easeInOutExpo' );
						});
						
					}, 100);
					
				}

			} , { offset: '85%' } );
		// }, { offset: '90%'} );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var owlCarousel = function(){
		
		var owl = $('.owl-carousel-carousel');
		owl.owlCarousel({
			items: 3,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	],
	     	responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    	}
		});


		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	]
		});


		

	};

	var tabs = function() {

		// Auto adjust height
		$('.gtco-tab-content-wrap').css('height', 0);
		var autoHeight = function() {

			setTimeout(function(){

				var tabContentWrap = $('.gtco-tab-content-wrap'),
					tabHeight = $('.gtco-tab-nav').outerHeight(),
					formActiveHeight = $('.tab-content.active').outerHeight(),
					totalHeight = parseInt(tabHeight + formActiveHeight + 90);

					tabContentWrap.css('height', totalHeight );

				$(window).resize(function(){
					var tabContentWrap = $('.gtco-tab-content-wrap'),
						tabHeight = $('.gtco-tab-nav').outerHeight(),
						formActiveHeight = $('.tab-content.active').outerHeight(),
						totalHeight = parseInt(tabHeight + formActiveHeight + 90);

						tabContentWrap.css('height', totalHeight );
				});

			}, 100);
			
		};

		autoHeight();


		// Click tab menu
		$('.gtco-tab-nav a').on('click', function(event){
			
			var $this = $(this),
				tab = $this.data('tab');

			$('.tab-content')
				.addClass('animated-fast fadeOutDown');

			$('.tab-content')
				.removeClass('active');

			$('.gtco-tab-nav li').removeClass('active');
			
			$this
				.closest('li')
					.addClass('active')

			$this
				.closest('.gtco-tabs')
					.find('.tab-content[data-tab-content="'+tab+'"]')
					.removeClass('animated-fast fadeOutDown')
					.addClass('animated-fast active fadeIn');


			autoHeight();
			event.preventDefault();

		}); 
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	};
	// Loading page
	var loaderPage = function() {
		$(".gtco-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#statistic').length > 0 ) {
			$('#statistic').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		owlCarousel();
		tabs();
		goToTop();
		loaderPage();
		counterWayPoint();
	});


    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#db2af4"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#db2af4",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    particlesJS("spec", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#db2af4"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#db2af4",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    particlesJS("statistic", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#db2af4"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#db2af4",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });


    $(".display-tc").append("<div class='glitch-window'></div>");
//fill div with clone of real header
    $( "h1.glitched" ).clone().appendTo( ".glitch-window" );

//
//     var stage = new createjs.Stage("canvas");
//     createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNC;
//     createjs.Ticker.framerate = 30;
//     createjs.Ticker.on("tick", update);
//     createjs.Touch.enable(stage);
//     stage.autoClear = false;
//
//     let snakes = [],
//         GRID = 20,
//         cols = 20,
//         rows = 20,
//         DIRS = [0,1,2,3],
//         MAX_SNAKE = 30,
//         MAX_SNAKES = 18,
//         cont = new createjs.Container();
//
//     window.addEventListener("resize", handleResize);
//     function handleResize(e) {
//         var w = window.innerWidth,
//             h = window.innerHeight;
//         stage.canvas.width = w;
//         stage.canvas.height = h;
//
//         GRID = Math.max(2, Math.max(w,h) / 70 | 0);
//         cols = (w / GRID | 0);
//         rows = (h / GRID | 0);
//         bg.rectCmd.w = w; bg.rectCmd.h = h;
//         cont.x = cont.regX = w/2;
//         cont.y = cont.regY = h/2;
//
//         k.x = w>>1; k.y = h>>1;
//         k.radius = Math.max(w,h);
//
//         overlay.x = overlay.regX = w>>1;
//         overlay.y = overlay.regY = h>>1;
//
//         stage.update();
//     };
//
//     var overlay = cont.addChild(new createjs.Bitmap(stage.canvas).set({alpha:0.8, rotation:180}));
//
//     var k = new Kaleidoscope(100, cont, 6);
//     stage.addChild(k);
//
//     function update(e) {
//         activeSnake && (activeSnake.length = Math.min(MAX_SNAKE, activeSnake.length+1));
//         for (var i=snakes.length-1; i>=0; i--) {
//             updateSnake(snakes[i]);
//         }
//         //overlay.scale *= 1.03;
//         stage.update(e);
//         overlay.scale = 1;
//     }
//
//     function rotate() {
//         createjs.Tween.get(k)
//             .to({rotation: Math.random() * 360, scale:Math.random()*0.5+1}, Math.random() * 5000 + 10000, createjs.Ease.quadInOut)
//             .call(rotate);
//     }
//     rotate();
//     setInterval(addSnake, 6000);
//
// // Get a theme color.
//     var dark = 55,
//         hue = Math.random()*360|0,
//         color = createjs.Graphics.getHSL(hue, 100, 2),
//         bg = cont.addChild(new createjs.Shape().set({alpha:0.4}));
//     bg.graphics.f(color);
//     bg.rectCmd = bg.graphics.dr(0,0,stage.canvas.width,stage.canvas.height).command;
//     stage.canvas.style.backgroundColor = document.body.style.backgroundColor = color;
//
// // Update size
//     handleResize();
//
//     var activeSnake;
//     stage.on("stagemousedown", function() {
//         activeSnake = addSnake();
//     });
//     stage.on("stagemouseup", function() {
//         activeSnake = null;
//     });
//
//     var amt = 2;
// // Add a new snake
//     function addSnake(center) {
//         hue = (hue+amt)%360;
//
//         let snake;
//         if (snakes.length >= MAX_SNAKES) {
//             snake = snakes[Math.random() * snakes.length |0];
//             snake.dead = true;
//         }
//
//         if (center != true && Math.random() > 0.95) {
//             dark = 90;
//         }
//         var offset = Math.random()*5|0 * 5 + 10;
//         snake = {
//             sprite: cont.addChildAt(new createjs.Shape().set({x:offset,y:offset}), 1),
//             path: [new createjs.Point(stage.mouseX/GRID|0, stage.mouseY/GRID|0)],
//             color: createjs.Graphics.getHSL(hue + Math.random()*30-15, 100, dark),
//             length: 1,
//             size: 1//(90-dark)/15
//         };
//         snake.sprite.size = snake.size;
//         //if (center == true) {
//         snake.length = (Math.random() * 12|0) + 8;
//         snake.path[0].setValues(5,5);
//         //}
//         snake.grow = setInterval(function() {
//             snake.length = Math.min(MAX_SNAKE, snake.length + 1);
//             if (snake.length == MAX_SNAKE) { clearInterval(snake.grow); }
//         }, (Math.random() * 20 + 5 | 0) * 1000);
//         dark = Math.random() * 40 + 10;
//
//         cont.children.sort(function(a,b) {
//             return b.size-a.size;
//         });
//
//         snakes.push(snake);
//         return snake;
//     }
//
//     for (var i=0, l=8; i<l; i++) {
//         addSnake(true);
//     }
//     amt = 10;
//
// // Move through the grid.
//     function updateSnake(snake) {
//         let path = snake.path,
//             pos = path[0],
//             newPos = pos.clone(),
//             dirs = DIRS.slice(0);
//
//         loop: while (true) {
//             if (dirs.length == 0) {
//                 // Stuck outside with no move
//                 if (pos.x > cols || pos.y > rows) {
//                     pos.setValues(cols>>1, rows>>1);
//                     path = snake.path = [pos];
//                 } else {
//                     // Wait for snake to catch up
//                     break loop;
//                 }
//             }
//             // Start from the previous step
//             newPos.setValues(pos.x, pos.y);
//             let index = Math.random() * dirs.length | 0,
//                 dir = dirs[index];
//             dirs.splice(index, 1)[0];
//             // Go in one direction
//             switch (dir) {
//                 case 0: newPos.x++; break;
//                 case 1: newPos.x--; break;
//                 case 2: newPos.y++; break;
//                 case 3: newPos.y--; break;
//             }
//
//             // Can't go backwards
//             if (newPos.x < 0 || newPos.y < 0 || newPos.x >= cols || newPos.y >= rows) { continue loop; }
//             // Can't go over top
//             for (let i=0, l=path.length; i<l; i++) {
//                 let p = path[i];
//                 if (newPos.x == p.x && newPos.y == p.y) { continue loop; }
//             }
//             break loop;
//         }
//
//         // Add the new point
//         path.unshift(newPos);
//         // Keep the snake the right length
//         if (path.length > snake.length) { path = snake.path = path.slice(0, snake.length); }
//         if (snake.dead) {
//             snake.length--;
//             if (snake.length == -1) {
//                 var index = snakes.indexOf(snake);
//                 if (index > -1) {
//                     snakes.splice(index, 1);
//                     cont.removeChild(snake);
//                     clearInterval(snake.grow);
//                 }
//                 return;
//             }
//         }
//         // Draw the snake again
//         snake.sprite.graphics.clear()
//             .ss(snake.size, "round", "round")
//             .s(snake.color).mt(newPos.x * GRID, newPos.y * GRID);
//         path.forEach(function (p) {
//             snake.sprite.graphics.lt(p.x * GRID, p.y * GRID);
//         });
//     }
}());