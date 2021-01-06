$(".mobile-menu-button").click(function() {
		$( "ul" ).slideToggle();
        $( "ul ul" ).css("display" , "none");      
});

$("ul li").click(function() {
        $( "ul ul" ).slideUp(); 
        $(this).find('ul').slideToggle();  
});

$(window).resize(function(){
    if($(window).width() > 386){
        $("ul").removeAttr('style');
    }
})