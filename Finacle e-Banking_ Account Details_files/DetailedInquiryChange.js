
/**
 * DetailedInquiryChange.js
 * 
 * It is used in My Profile Alerts module for EBUX 3 changes.
 *
 * Created on JULY 10, 2014
 * COPYRIGHT NOTICE:
 * Copyright (c) 2004 Infosys Limited, Electronic City,
 * Hosur Road, Bangalore - 560 100, India.
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Infosys Technologies Ltd. ("Confidential Information"). You shall
 * not disclose such Confidential Information and shall use it only
 * in accordance with the terms of the license agreement you entered
 * into with Infosys.
 */

/* Function that hides the MenuID or ServiceRequest options 
   based on the values selected by the user 
*/ 

var scripts = document.getElementsByTagName('script');
var myScript ="";
if(document.head){
for(i=0;i<document.head.childNodes.length;i++){
var scripts = document.head.childNodes[i]; 

if(scripts.id && scripts.id=="id1DetailedInquiryChange"){
myScript = scripts;

break;
}
}
//myScript=document.head.childNodes[document.head.childNodes.length-1];
}
else{
myScript=document.getElementsByTagName('head')[0].childNodes[document.getElementsByTagName('head')[0].childNodes.length-1];
for(i=0;i<document.getElementsByTagName('head')[0].childNodes.length;i++){
var scripts = document.getElementsByTagName('head')[0].childNodes[i]; 

if(scripts.id && scripts.id=="id1DetailedInquiryChange"){
myScript = scripts;

break;
}
}
}
var queryString="";

if(myScript!=null && myScript.src!=null){
queryString = myScript.src.replace(/^[^\?]+\??/,'');

}

var params = parseQuery( queryString );
function parseQuery ( query ) {
   var Params = new Object ();
   if ( ! query ) return Params; // return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) continue;
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      
      Params[key] = val;
       
   }

   return Params;
}
var groupletId = null;
if(params.groupletId && params.groupletId!="null"){
groupletId=params.groupletId;
}
var groupletIdentifier="";
if(groupletId!=null){
groupletIdentifier = groupletId+":";
}

jQuery(document).ready(function(){
	var jspName="";
	if(document.getElementById('ActivityInquiryFG.REPORTTITLE')){
	jspName=document.getElementById('ActivityInquiryFG.REPORTTITLE').value;
	}
	if(jspName== "ActivityInqCorpUX3" || jspName== "ActivityInqConsumerUX3"){
		 showHideField();
	}
	var searchDivObj=jQuery("[id='"+groupletIdentifier+"SearchPanel_Stage34.Rowset2']");
	   if(searchDivObj!=null){
			searchDivObj.on('click',function(e) {
				 var preventFlow=false;
				if(e.target == null || e.target.className =='multiselect_simpletext' || e.target.parentNode.className=='multiselect_options_div_insidesearchpanel' ||e.target.type=='checkbox' ){
					preventFlow=true;
				}	
					if(!preventFlow){
					//document.getElementById("PageConfigurationMaster_CDAIU5W__1:MENU_OPTIONS_ARRAY_multiSelectCombo");
					var comboObjArry =jQuery(".multiselect_options_div_searchpanel");
						if(comboObjArry !=null && comboObjArry.length>0){
							for ( var i = 0; i < comboObjArry.length; i++ ) {
							var comboObj=jQuery(comboObjArry[i]);
							if(comboObj !=null && comboObj.css("display")=== "block"){
								comboObj.css('display','none');
								}
							}
							}
					}
			  }); 
		  }
});


/* Function that is called when the user changes the Activity Description among 
 * Menu (M), Service Request (S) and All Activities (A)
 
 * Based on the activity chosen, the corresponding fields are shown for the user input
 */
function showHideField()
{
 	 var value1=document.getElementById(groupletIdentifier+'ActivityInquiryFG.AUDIT_CRIT_FLAG').value; 
	 if(value1== Constants.AUDIT_MENU_OPTIONS){
		jQuery("[id='"+groupletIdentifier+"SearchPanel_Stage34.Rb3']").show();
		jQuery("[id='"+groupletIdentifier+"SearchPanel_Stage34.Rb4']").show();
		jQuery("[name='MENU_OPTIONS_ARRAY']").show();
		jQuery("[id='"+groupletIdentifier+"SearchPanel_Stage34.Rb4.C2']").show();
		jQuery("[id='"+groupletIdentifier+"SearchPanel_Stage34.Rb5']").hide();
		jQuery("[name='SERVICE_REQUEST_ARRAY']").hide();
	 }
	 else if(value1== Constants.AUDIT_SERVICEREQUEST_OPTIONS){
		jQuery("[id='"+groupletIdentifier+"SearchPanel_Stage34.Rb3']").hide();
		jQuery("[id='"+groupletIdentifier+"SearchPanel_Stage34.Rb4']").hide();
		jQuery("[name='MENU_OPTIONS_ARRAY']").hide();
		jQuery("[id='"+groupletIdentifier+"SearchPanel_Stage34.Rb4.C2']").hide();
		jQuery("[id='"+groupletIdentifier+"SearchPanel_Stage34.Rb5']").show();
		jQuery("[name='SERVICE_REQUEST_ARRAY']").show();
	 }
	 else if(value1== Constants.AUDIT_ALL_OPTIONS){
		jQuery("[id='"+groupletIdentifier+"SearchPanel_Stage34.Rb3']").hide();
		jQuery("[id='"+groupletIdentifier+"SearchPanel_Stage34.Rb4']").hide();
		jQuery("[name='MENU_OPTIONS_ARRAY']").hide();
		jQuery("[id='"+groupletIdentifier+"SearchPanel_Stage34.Rb4.C2']").hide();
		jQuery("[id='"+groupletIdentifier+"SearchPanel_Stage34.Rb5']").hide();
		jQuery("[name='SERVICE_REQUEST_ARRAY']").hide();
	 }
	 else{
		jQuery("[id='"+groupletIdentifier+"SearchPanel_Stage34.Rb3']").hide();
		jQuery("[id='"+groupletIdentifier+"SearchPanel_Stage34.Rb4']").hide();
		jQuery("[name='MENU_OPTIONS_ARRAY']").hide();
		jQuery("[id='"+groupletIdentifier+"SearchPanel_Stage34.Rb4.C2']").hide();
		jQuery("[id='"+groupletIdentifier+"SearchPanel_Stage34.Rb5']").hide();
		jQuery("[name='SERVICE_REQUEST_ARRAY']").hide();
	 }
}

/* Function that is called when the user selects the favourite functionality
 * Based on the use case chosen, the corresponding page is loaded
 * To notify the loading , block UI is included to avoid other user activities
 */

function comboChangeValueFAV(val) {
	var value=val;	
	if(value)
	{
		jQuery.blockUI({ message: '<img src="L001/consumer/images/widget-loading.gif"/>' ,
		css: { width: '200',border:'0px solid #000',cursor:'wait',backgroundColor:'#FFFFFF', padding:'8px'},
	}
 
);} 
}
