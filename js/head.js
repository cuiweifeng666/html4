window.onload = function(){
	var mscroll = new IScroll('#wrapper',{
		// scrollbarClass:'myScrollbar',
		scrollbars:'custom',
		srollY:true,
		interactiveScrollbars:true,
	})	
    var mscroll = new IScroll('#wrapper01',{
        // scrollbarClass:'myScrollbar',
        scrollbars:'custom',
        srollY:true,
        interactiveScrollbars:true,
    })  
	  var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            speed: 2000,
            loop: true,
            observer:true,
            observeParents:true,
            autoplayDisableOnInteraction : false,
            autoplay:1500
        });

}
