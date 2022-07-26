//-------------------------------------------------------------------
//This JQuery function is created to call JavaScript functions
// on document.ready event, from all JSPs
//-------------------------------------------------------------------

function handleWidgetRemoveSuccess(removeGroupletSrc,containerRemoved){
/* Start - for adding and removing widget icons to widgetBar */
	    	
	    	
	    	if(widgetContentMap){
	    		
		    	var elementStartsWith=(removeGroupletSrc).split("__");
		    	var elementList = feba.domManipulator.getElementStartingWith(elementStartsWith[0]+"__");
		    	
	    	if(elementList.length == 0){
	    		
		    	var pageIdwithParent=(removeGroupletSrc).split("_");
		    	
		    	var iconId = "widgetBar_"+pageIdwithParent[2];
		    	var temp = "#"+iconId;	
		    	//jQuery(temp).draggable("enable");
		    	
		    	feba.domManipulator.draggableEnableDisable(temp,"enable");
		    	/* Uncomment the following line if the widgeticons are removed from the widget Bar
		    		when the widget is added to the page and the icons need to be appended when the widget is removed */
		    	/* jQuery('#widgetListParent').prepend(removedWidgetsMap.get(iconId)); */
		    	
		    	}
	    	}
	    	// The function call is done before and after reAlign because before reAlign, appropriate sizes
	    	// need to be assigned for reAlign() to work perfectly.
	    	var isAutoAlign=feba.domManipulator.getElementById('IS_AUTO_ALIGN').attr("value");
	    	if(isAutoAlign && isAutoAlign=="true"){
	    	 	console.log("Not auto align flow");
		    	handleRemoveWidth(containerRemoved);
		    	for(var i = 0;i<containerParametersObjectArray.length;i++){      
		      		reDistribute(containerParametersObjectArray[i]);
		      	}
		    	handleRemoveWidth(containerRemoved);
		    	saveConfiguration();
	    	  }
	    	  else{
	    	  console.log("auto align flow");
	    	  }
	    	  if(feba.domManipulator.getElement(".widget-content").getNiceScroll() &&feba.domManipulator.getElement(".widget-content").getNiceScroll().length>0){
	    	  resizeUX3scroll();
	    	  }
	   		/* End */
}


function checkUncheckboxTitle(checkbox){
	jQuery(document.getElementById(checkbox)).prop('checked',true);
}


function highLightImage(image){
feba.domManipulator.getElement('.imageHighlight').removeClass('imageHighlight');
//jQuery(image).addClass('imageHighlight');
feba.domManipulator.addClass(image,'imageHighlight');

}

// For Marquee in PageMainenance Page








//-------------------------------------------------------------------
//This function checks if the date in dateFieldElement is changed 
//and returns an appropriate flag value
//-------------------------------------------------------------------
function slideWidgetsData(element,event){
/*
 if (!event) event = window.event;

var elementId =  feba.domManipulator.getAttribute(element,'id');
var widgetDataId = elementId+"_containerData";
var parent1=feba.domManipulator.parent((event.target)||(event.srcElement));
var parent2=feba.domManipulator.parent(parent1);
var id1=feba.domManipulator.getAttribute(parent2,'id');
//if(jQuery((event.target)).is('p')||jQuery((event.target)).parent().parent().is('p')){;

var tarIdVal=feba.domManipulator.getAttribute((event.target)||(event.srcElement),'id');
var tarIdValParent=feba.domManipulator.parent((event.target)||(event.srcElement));
var tarValParentId=feba.domManipulator.getAttribute(tarIdValParent,'id');
if(tarIdVal=="widgetPrevHeader"||tarValParentId=="widgetPrevHeader"){
var widDataIdVal = feba.domManipulator.getElementById(widgetDataId);

 if (feba.domManipulator.isMatching(widDataIdVal,":hidden")) {
		var elementToFade = feba.domManipulator.getElementById(widgetDataId);
		feba.domManipulator.fadeIn(elementToFade,500);
		feba.domManipulator.getElementById(elementId+"_pageDataSeparator").show();
		var imageElementId = feba.domManipulator.getElementById(id1+"_img");
		feba.domManipulator.setAttribute(imageElementId,'src',"L001/consumer/images/widget-minimize.gif");
 		}
else{
		var elementToFadeOut = feba.domManipulator.getElementById(widgetDataId);
		feba.domManipulator.fadeOut(elementToFadeOut,500);
		var imageElementIdVal = feba.domManipulator.getElementById(id1+"_img");
		feba.domManipulator.setAttribute(imageElementId,'src',"L001/consumer/images/widget-maximize.gif");

}
var eleFunFadeOutId=feba.domManipulator.getElementById("preview"+widgetDataId);
feba.domManipulator.fadeOut(eleFunFadeOutId,500,function(){ feba.domManipulator.remove(this);});
//jQuery("#preview"+widgetDataId).remove();
}
*/
}





function showWidgetPreview(element,event){

var elementId = feba.domManipulator.getAttribute(element,'id');
var par1=feba.domManipulator.parent(feba.domManipulator.getElementById(elementId));
var par2=feba.domManipulator.parents(par1,'p');
var parentId=feba.domManipulator.getAttribute(par2,'id');
var parentSpanId=feba.domManipulator.getAttribute(par1,'id');
var widgetDataId = parentId+"_containerData";
feba.domManipulator.slideUp(feba.domManipulator.getElementById(widgetDataId,1000));
feba.domManipulator.getElementById(parentId+"_pageDataSeparator").hide();
var imageIdVal=feba.domManipulator.getElementById(parentId+"_img");
feba.domManipulator.setAttribute(imageIdVal,'src',"L001/consumer/images/widget-minimize.gif");
var parentClass=feba.domManipulator.getAttribute(feba.domManipulator.getElementById(parentId),'class');
feba.domManipulator.getElementById("preview"+parentSpanId).remove();
var parentClassArray=parentClass.split("-");
var finalClass=parentClassArray[0]+"-"+parentClassArray[1];
var selectval=feba.domManipulator.getAttribute(feba.domManipulator.getElement("#"+widgetDataId+" select"),'id');
var options = feba.domManipulator.getElementById(selectval);
var currentSelectedOption="";
var currentSelectedOptionArray=new Array();
var widgetSizeArray=new Array();
var imageName = "";
var widgetTitle = "";
var widgetSizeTemp="";
var styleName="";
var finalWidgetTitle="";
var isOptionSelected="N";
for(i=0;i<options.length;i++){
//alert(options[i].selected);
//alert(options[i].value);
if (options[i].selected && (options[i].value.length>0))
 	{
 	
 	isOptionSelected="Y";
 	break;
 	
 	}
 }
 if(isOptionSelected=="N"){
 alert("Please Select a Record");

feba.domManipulator.fadeDown(feba.domManipulator.getElementById(widgetDataId),1000);
 }
 else{
var insertHtml="<div class=\""+finalClass+"\" id=\"preview"+parentSpanId+"\">";

for(i=0;i<options.length;i++){
if (options[i].selected)
 {
             //alert(options[i].value);
             currentSelectedOption=options[i].value;
             currentSelectedOptionArray=currentSelectedOption.split(".");
             imageName=currentSelectedOptionArray[1];
             widgetTitle=currentSelectedOptionArray[0];
             widgetSizeArray=widgetTitle.split("_");
             widgetSizeTemp=widgetSizeArray[0];
             finalWidgetTitle=widgetSizeArray[3];
             if(widgetSizeTemp.toUpperCase()==(("Container-small").toUpperCase())){
             styleName="previewContainer-smallShowImg";
             }
             else if(widgetSizeTemp.toUpperCase()==(("Container-medium").toUpperCase())){
             styleName="previewContainer-mediumShowImg";
             }
             else if(widgetSizeTemp.toUpperCase()==(("Container-large").toUpperCase())){
             styleName="previewContainer-largeShowImg";
             }
        insertHtml=insertHtml+"<div class=\""+finalClass+" widget-head\">";
		 insertHtml=insertHtml+"<span class=\"h2Widget\">"+finalWidgetTitle+"</span>";
		insertHtml=insertHtml+"</div>";
		insertHtml=insertHtml+"<img src=\"L001/bankuser/images/"+imageName+".JPG\" id=\"\" class=\""+styleName+"\">"; 
  }
}

insertHtml=insertHtml+"</div>";
feba.domManipulator.insertAfter(feba.domManipulator.getElementById(parentSpanId),insertHtml);
}
}
function formatRiaResponse(){
jQuery(document.getElementById('PageMaintenanceHomePage_TemplateDetails:PageIdAvailable')).removeClass('errorPgNtAvailable');
jQuery(document.getElementById('PageMaintenanceHomePage_TemplateDetails:PageIdAvailable')).removeClass('errorPgAvailable');
jQuery(document.getElementById('PageMaintenanceHomePage_TemplateDetails:LOAD_PAGE_PREVIEW')).prop('disabled','');
}
function formatMessage(responseText){
var receivedContent = responseText.content;
var splitContent= receivedContent[5];
var valForCompare=splitContent[1];
if(valForCompare=='Available '){
jQuery(document.getElementById('PageMaintenanceHomePage_TemplateDetails:PageIdAvailable')).removeClass('errorPgNtAvailable');
jQuery(document.getElementById('PageMaintenanceHomePage_TemplateDetails:PageIdAvailable')).removeClass('errorPgAvailable');
jQuery(document.getElementById('PageMaintenanceHomePage_TemplateDetails:LOAD_PAGE_PREVIEW')).prop('disabled','');	
jQuery(document.getElementById('PageMaintenanceHomePage_TemplateDetails:PageIdAvailable')).addClass('errorPgAvailable');
jQuery(document.getElementById('PageMaintenanceHomePage_TemplateDetails:PageIdAvailable')).append("<img class=\"absmiddle\" title=\""+getMessage("NoWidgetsTitle")+"\" " +
						"alt=\""+getMessage("NoWidgetsAlt")+" src=L001/consumer/images/information-icon.gif>");

}
else if(valForCompare=='Not Available'){
jQuery(document.getElementById('PageMaintenanceHomePage_TemplateDetails:PageIdAvailable')).removeClass('errorPgNtAvailable');
jQuery(document.getElementById('PageMaintenanceHomePage_TemplateDetails:PageIdAvailable')).removeClass('errorPgAvailable');

jQuery(document.getElementById('PageMaintenanceHomePage_TemplateDetails:PageIdAvailable')).addClass('errorPgNtAvailable');
jQuery(document.getElementById('PageMaintenanceHomePage_TemplateDetails:PageIdAvailable')).append("<img class=\"absmiddle\" title=\""+getMessage("NoWidgetsTitle")+"\" " +
						"alt=\""+getMessage("NoWidgetsAlt")+" src=L001/consumer/images/error-icon.gif>");
jQuery(document.getElementById('PageMaintenanceHomePage_TemplateDetails:LOAD_PAGE_PREVIEW')).prop('disabled','disabled');						
}
else{
jQuery(document.getElementById('PageMaintenanceHomePage_TemplateDetails:PageIdAvailable')).removeClass('errorPgNtAvailable');
jQuery(document.getElementById('PageMaintenanceHomePage_TemplateDetails:PageIdAvailable')).removeClass('errorPgAvailable');
jQuery(document.getElementById('PageMaintenanceHomePage_TemplateDetails:LOAD_PAGE_PREVIEW')).prop('disabled','');	
}

}

function checkUncheckbox(checkbox){
if(jQuery(checkbox).prop('checked')==true){
jQuery(checkbox).closest('div').addClass('grid_OuterMostDiv_highlight');
}
else{
jQuery(checkbox).closest('div').removeClass('grid_OuterMostDiv_highlight');
}
	

}

function handleRemoveWidth(containerRemoved){
			var numberOfChildren = jQuery(containerRemoved).children().length;
            var widthAggined=0;
            var allChildren = jQuery(containerRemoved).children();
            for(j=0;j<numberOfChildren;j++){
            widthAggined = widthAggined+parseInt(jQuery(containerRemoved).children().eq(j).css('width'));
            /* SpaceBetweenWidgets is added in GroupletContainerUtility.java, PageMaintenanceFuntions.js, widgetAlignmentFunctionsForDashboard.js */
            widthAggined=widthAggined+parseInt(spaceBetweenWidgets);
            }
            if(widthAggined==0){
            widthAggined='0px';
            }
            else{
            	widthAggined=widthAggined+1;
            	widthAggined=widthAggined+'px';
            }	
            jQuery(containerRemoved).css('width', widthAggined);
}

/* function added to hide Parent menu id and menu order fields::START */

function triggerSubmit(btnId,id){
var localDM = feba.domManipulator;
localDM.trigger(localDM.getElement(localDM.getGroupletSpecificElement(btnId,LIB.__GET_GROUPLET_ID__(id))),'click');
}

/* function added to hide Parent menu id and menu order fields::END */
