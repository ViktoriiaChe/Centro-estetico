
//pagina inicio y todas
$(document).ready(function () {
    $("#bar_menu").click(function () {
        $("#nav_menu").toggleClass("mostrar");
    })

    //pagina concepto

    $(".vervideo").click(function () {
        $.fancybox({
            'padding': 0,
            'autoScale': false,
            'transitionIn': 'none',
            'transitionOut': 'none',
            'title': this.title,
            'width': 680,
            'height': 495,
            'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type': 'swf',
            'swf': {
                'wmode': 'transparent',
                'allowfullscreen': 'true'
            }
        });
        return false;
    });

    $("#right").click(function () {
        $("#redes").toggleClass("aqui");

    });

//for #click
    setInterval (blinke_funk, 1200);

	function blinke_funk() { 
		var blinke_speed = 1200; //миллисекунды анимации

		$("#click").fadeIn(blinke_speed).fadeOut(blinke_speed);
	}

})




