/**
 * Nellipsis.js
 * The js file is being used to display ellipsis in some text wherever required.
 * to use this feature on some page include this js file and call 
 * jQuery(".ellipsis").ellipsis(); -- .ellipsis style can be passed specific to page
 * 
 * 
 */

(function($) {
        $.fn.ellipsis = function(options)
        {
        var settings = {
	            width : 250
	        };
	                
        if(options) {
	            $.extend(settings, options);
        };
        
        
                return this.each(function()
                {
                	
                	//console.log("inside fn.ellipsis");
                        var el = $(this);                       
                        if(el.css("overflow") == "hidden")
                        {
                        	    var text = el.html();
								if(jQuery(el).attr('ellipsisoperated') && jQuery(el).attr('ellipsisoperated') =="Y"){
								text = jQuery(el).attr('title');
								el.text(text);
								}
                         //       console.log("inside fn.ellipsis 333333 el.css.width:"+el.css("width")+el.attr("id"));
                              /*  var elementCss = el.attr('class');
                                jQuery('body').append("<div id=\"dummyDiv\" style=\"display:none;\" class=\""+elementCss+"\"> </div>");
                              	var elementWidth = $('#dummyDiv').css('width');                    
                                $('#dummyDiv').remove(); */
                                var elementWidth = settings.width + "px";
                               // console.log('elementWidth:::'+elementWidth);
                                var multiline = el.hasClass('multiline');
                                var t = $(this.cloneNode(true))
                                        .hide()
                                        .css('position', 'absolute')
                                        .css('overflow', 'visible')
                                        .width(multiline ? parseInt(elementWidth) : 'auto')
                                        .height(multiline ? 'auto' : el.height())
                                        ;

                                el.after(t);
                                function height() { return t.height() > el.height(); };
                                function width() { 
								jQuery('#dummyEllipsis').width
								//if(t.width() && t.width()>0){
								//return t.width() >  parseInt(elementWidth);
								//}
								//else{
								jQuery('#dummyEllipsis').remove();
								jQuery('body').append('<span id=\"dummyEllipsis\" style=\"display:none;\">'+text+'</span>');
								return jQuery('#dummyEllipsis').width() >  parseInt(elementWidth);
								//}
								};

                                var func = multiline ? height : width;
                                                           
                              //  console.log("inside fn.ellipsis 333333 el.width:"+el.width());
                               // performance of below loop code can be improved
							   if(text != undefined){
                                while (text.length > 0 && func())
                                {
                                	
                                        text = text.substr(0, text.length - 1);
                                        t.html(text + "...");
										jQuery(el).attr('ellipsisOperated','Y');
                                }
							}
                                el.html(t.html());
                                t.remove();
								jQuery('#dummyEllipsis').remove();
                        }
                });
        };
})(jQuery);





