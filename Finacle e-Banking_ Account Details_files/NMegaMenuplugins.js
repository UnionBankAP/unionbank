//START: for listing table collapsible feature using footable plugin
jQuery(document).ready(function(){
    jQuery("#topbarNew").flexisel({
        visibleItems: 5,
	    animationSpeed: 100,
	    autoPlay: false,
	    autoPlaySpeed: 3000,
	    pauseOnHover: false,
		clone:false,
        enableResponsiveBreakpoints: false,
        responsiveBreakpoints: {
            portrait: {
                changePoint:480,
                visibleItems: 20
            },
            landscape: {
                changePoint:640,
                visibleItems: 2
            },
            tablet: {
                changePoint:768,
                visibleItems: 3
            }
        }
    });
    
    if(viewport().width < 640){
	   jQuery("[id='topbarNew']").css('display', 'none');
	}
 });
//END: for listing table collapsible feature


