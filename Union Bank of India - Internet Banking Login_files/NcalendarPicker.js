function calendarPicker(link_id,obj_target,obj_target_img,imgId,calType,dt_format,yearRangeJs,path,p_year_scroll,p_time_com,p_mask_type){
 
	 var dateObj=feba.domManipulator.getElement(obj_target);
	 var dateImgObj =feba.domManipulator.getElement(obj_target_img);
	 var imgIdObj=imgId;
	 var language;
	 var ary = new Array();
	 ary = calType.split("-");
	 if(ary.length == 2){
		 calType = ary[0]; language = ary[1];
	 }else{	calType = calType; language=""; }
	 var todaysDate = getTodaysDate(dt_format,calType,language);

	 if(calType == null) {
	 	calType = 'gregorian';
	 }
	 
	 if(yearRangeJs == null) {
	 	yearRangeJs = '1975:2099';
	 }
	 
	if(typeof(dateObj)!='undefined') {
		if(p_mask_type == 'Past'){
			dateObj.calendarsPicker(jQuery.extend({calendar: jQuery.calendars.instance(calType, language),showOnFocus:false,showTrigger:imgIdObj,
				dateFormat:dt_format, minDate:todaysDate},jQuery.calendars.picker.regional[language]));
		}
		else if(p_mask_type == 'Future'){
			dateObj.calendarsPicker(jQuery.extend({calendar: jQuery.calendars.instance(calType, language),showOnFocus:false,showTrigger:imgIdObj,
				dateFormat:dt_format,maxDate:todaysDate},jQuery.calendars.picker.regional[language]));
		}
		else{
			dateObj.calendarsPicker(jQuery.extend({calendar: jQuery.calendars.instance(calType, language),showOnFocus:false,showTrigger:imgIdObj,
			dateFormat:dt_format,yearRange:yearRangeJs},jQuery.calendars.picker.regional[language]));
		}
	}
	
}
//Gives the todays date for supplied date format
function getTodaysDate(dataFormat,calType,language){
//	var todayDate = new Date();
/*
	if(dataFormat == 'dd,M,yyyy'){
		dataFormat = 'dd,mmm,yyyy';
	}else if(dataFormat == 'dd-M-yyyy'){
		dataFormat = 'dd-mmm-yyyy';
	}else if(dataFormat == 'M dd yyyy'){
		dataFormat = 'mmm dd yyyy';
	}
	*/
	//var date  = jQuery.febaCalendar.formatDate(todayDate,dataFormat);
	var date  = jQuery.calendars.instance(calType,language).newDate().formatDate(dataFormat);
	return date;
}

