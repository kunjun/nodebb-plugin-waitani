var ajaxifyingEffect = $('.ajaxifying-effect');
var wait_ani_html = '<div class="ajaxifying-effect ">\n' +
	'<img src="http://x2cy.cdn.rendiyu.com/sf/fish.png" alt="" class="fish">\n' +
	'<div class="bubbles bubble-1"></div>\n' +
	'<div class="bubbles bubble-5"></div>\n' +
	'<div class="bubbles bubble-2"></div>\n' +
	'<div class="bubbles bubble-6"></div>\n' +
	'<div class="bubbles bubble-3"></div>\n' +
	'<div class="bubbles bubble-7"></div>\n' +
	'<div class="bubbles bubble-4"></div>\n' +
	'<div class="bubbles bubble-8"></div>\n' +
	'<div class="bubbles bubble-9"></div>\n' +
	'<div class="bubbles bubble-10"></div>\n' +
	'<div class="bubbles bubble-11"></div>\n' +
	'</div>';

$(window).on('action:ajaxify.start', function(data) {
	$("main").append(wait_ani_html);
});

$(window).on('action:ajaxify.end', function(data) {
	$(".ajaxifying-effect").remove();
});
