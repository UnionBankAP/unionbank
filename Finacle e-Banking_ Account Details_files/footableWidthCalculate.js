/*
Used to calculate and allocate listing table width of collapsed columns. 
RWD project.
Logic implemented in this script is:
1. Identify the screen if it is Modal or Normal screen
2. Store the columns width in common shared array MasterWidth in case of normal width. This array is declared in
	HWListTable tag helper because we need this array per table to store the original width's.
3. Check for collapsed column. If collapsed, get the total width of collapsed columns.
4. calculate the width which needs to be shared among other columns.
5. Allocate this shared width to visible columns
6. In case of Modal,we need one more array to store the modal's listing table width's. we have defined shared 
	array MasterWidth_modal in this file itself.
*/
var i, distWidth=0 ,k, collapseCols=0,m,isFootable,trCount=0,multiHeader=false,modal=false,masterWidth_modal=[],c;


jQuery(document).ready(function(){
		i=0;
		k=0; //Aashish changed from 1; getting issue in Op account
		m=0; //Aashish changed from 1; getting issue in Op account
		c=0;
  var isTable = jQuery('table').length;
  var tabSelector;
	//	if(isTable>0){
			/*code to identify whether the screen in modal or not.
			   This is in assumption that when modal opens browser sizer will not change. this is not implemented inside resize() function.*/
			if(jQuery('#MODAL_VIEW_CONTAINER:has(table >thead)').length>0){
				tabSelector = '#MODAL_VIEW_CONTAINER table';
				modal=true;
			}else{
				tabSelector = 'table:has(> thead)';
			}
			/*on first load of screen, masterWidth will be empty and control will go inside this block where it will call
				the getColumnData(THead) and populate the array.*/
			tab=jQuery(tabSelector);
			var count=0;			
				tab.each(function () {
				jQuery(this).find('>thead>tr:first-child > th').each(function () {
				 var width = jQuery(this).attr("width");
	 			 if(width != undefined){	
					count++;
				 }				
						
			});
			});
			if(masterWidth.length<count && !modal){
			//check if page contains modl container
			if(jQuery(tabSelector)){
		//		var tab =jQuery($table);
				var tab = jQuery(tabSelector);
				tab.find('> thead > tr:first-child > th').each(function () {
					
					getColumnData(this);	        
					distWidth = checkForCollapsibleCol(this,distWidth);       
	      }
	     );
		
			
				var shareWidth=[];
				share = distributWidth(distWidth);
				tab.find('> thead > tr:first-child > th').each(function () {
					if(share>0){
						allocateWidthToTh(this,share);
					}
					else if(share===0){
						resetWidthToOrig(this); /*If no cols are collapsed then share will be 0, so col width should have original width*/
					}	   		
			  });
	  }
 /*When toggle button appears on the row at last col, that column's data alignment gets disturbed due to toggle image. To adjust this below code is written*/
	 /*Added to adjust position of Actions pulldwn start*/ 
		trCount = tab.find('thead').children('tr').length;
			if(trCount>1){
				multiHeader = true;
			}
	 var hasPulldown = jQuery('.hasPulldownMenu').length;
	 if(hasPulldown>0){

	 if(collapseCols>0 && multiHeader){		//Added for Actions pull down.double heading
	  	jQuery('.hasPulldownMenu').css('margin-top','4px');			
	  }
	  else if(collapseCols==0 && !multiHeader){		//Added for Actions pull down.single heading
	  	jQuery('.hasPulldownMenu').css('margin-top','-10px');	
	  }
	  else if(collapseCols>0 && !multiHeader){		//Added for Actions pull down.single heading
	  	jQuery('.hasPulldownMenu').css('margin-top','4px');
	  }
	  
	  else{
		jQuery('.hasPulldownMenu').css('margin-top','');	
	  }
	 } 
	  /*Added to adjust position of Actions pulldwn end*/
	  else if(hasPulldown<=0){
		if(collapseCols>0){
			jQuery('.footable-toggle').nextAll().css('margin-top','8px');
			jQuery('.footable-toggle').nextAll().find('.bluelink').css('margin-top','0px');
		}else{
			jQuery('.footable-toggle').nextAll().css('margin-top','');
			jQuery('.footable-toggle').nextAll().find('.bluelink').css('margin-top','');
	  }

	  }
	if(collapseCols>0){		
/*	  	jQuery('table .amountRightAlign.footable-last-column').css('margin-top','6px');
	  	jQuery('table .amountRightAlign.footable-last-column').css('float','right');
*/	  	
	  	jQuery('table .amountRightAlign.footable-last-column').css('line-height','2.5');			
	  }
	else if(collapseCols<=0){		
/*	  	jQuery('table .amountRightAlign.footable-last-column').css('margin-top','');
	  	jQuery('table .amountRightAlign.footable-last-column').css('float','');
*/
	  	jQuery('table .amountRightAlign.footable-last-column').css('line-height','');			
	  }
  }
  /*COntrol will enter below block when normal screen but MasterWidth is not blank. Here we do not need to call getColumnData(THead) function again.*/
	else if(!modal){
		var tab = jQuery(tabSelector);
		tab.find('> thead > tr:first-child > th').each(function () {
	        	distWidth = checkForCollapsibleCol(this,distWidth);       
	      	});
			
		var shareWidth=[];
	    share = distributWidth(distWidth);
	    tab.find('> thead > tr:first-child > th').each(function () {
	     	if(share>0){
	   			allocateWidthToTh(this,share);
	   		}
	   		else if(share===0){
	   			resetWidthToOrig(this);
	   		}
		  });		
	/*Added to adjust position of Actions pulldwn start*/ 	  
		trCount = tab.find('thead').children('tr').length;
			if(trCount>1){
				multiHeader = true;
		}	  
	  var hasPulldown = jQuery('.hasPulldownMenu').length;
	  if(hasPulldown>0){
	  if(collapseCols>0 && multiHeader){		//Added for Actions pull down.double heading
	  	jQuery('.hasPulldownMenu').css('margin-top','4px');	
	  }
	  else if(collapseCols==0 && !multiHeader){		//Added for Actions pull down.single heading
	  	jQuery('.hasPulldownMenu').css('margin-top','-10px');	
	  }
	  else if(collapseCols>0 && !multiHeader){		//Added for Actions pull down.single heading
	  	jQuery('.hasPulldownMenu').css('margin-top','4px');	
	  }
	  else{
		jQuery('.hasPulldownMenu').css('margin-top','');	
	  }
	  }
	  /*Added to adjust position of Actions pulldwn end*/ 
	  else if(hasPulldown<=0){
		if(collapseCols>0){
			jQuery('.footable-toggle').nextAll().css('margin-top','8px');
			jQuery('.footable-toggle').nextAll().find('.bluelink').css('margin-top','0px');
		}else{
			jQuery('.footable-toggle').nextAll().css('margin-top','');
			jQuery('.footable-toggle').nextAll().find('.bluelink').css('margin-top','');
	  }

	  }
	if(collapseCols>0){		
		jQuery('table .amountRightAlign.footable-last-column').css('line-height','2.5');			
	  }
	else if(collapseCols<=0){		
		  jQuery('table .amountRightAlign.footable-last-column').css('line-height','');		
	  }
}
/*If its a modal screen*/
else if(modal){
		if(jQuery(tabSelector)){
	//		var tab =jQuery($table);
			var tab = jQuery(tabSelector);
			tab.find('> thead > tr:first-child > th').each(function () {
			
			getColumnData_modal(this);	        
	        distWidth = checkForCollapsibleCol(this,distWidth);       
	      }
	     );
		
			
	     var shareWidth=[];
	     	share = distributWidth(distWidth);
	     tab.find('> thead > tr:first-child > th').each(function () {
	     	if(share>0){
	   			allocateWidthToTh(this,share);
	   		}
	   		else if(share===0){
	   			resetWidthToOrig(this);
	   		}   		
	   		
		  }
		  );
		if(collapseCols>0){
			jQuery('.footable-toggle').nextAll().css('margin-top','8px')
			jQuery('.footable-toggle').nextAll().find('.bluelink').css('margin-top','0px');
		}else{
			jQuery('.footable-toggle').nextAll().css('margin-top','')
		}
	if(collapseCols>0){		
		jQuery('table .amountRightAlign.footable-last-column').css('line-height','2.5');			
	  }
	else if(collapseCols<=0){		
	  	jQuery('table .amountRightAlign.footable-last-column').css('line-height','');			
	  }
	  }
	
}
     
	jQuery( window ).on("resize",function() {
		
		i=0;
		k=0; //Aashish changed from 1; getting issue in Op account
		m=0; //Aashish changed from 1; getting issue in Op account
		collapseCols=0;
		distWidth=0;
		var browserSize = viewport().width;
		var tabSelector;
			if(jQuery('#MODAL_VIEW_CONTAINER:has(table >thead)').length>0){
				tabSelector = '#MODAL_VIEW_CONTAINER table';
			}else{
				tabSelector = 'table:has(> thead)';
			}
		var isTable = jQuery('table').length;
		//	if(isTable>0){
			if(jQuery(tabSelector)){
	//		var tab =jQuery($table);
			var tab = jQuery(tabSelector);
			
			if(masterWidth.length==0){
				tab.find('> thead > tr:first-child > th').each(function () {
	        	getColumnData(this);
	        	distWidth = checkForCollapsibleCol(this,distWidth);       
	      	}
	   	  );
		}
			
			
		tab.find('> thead > tr:first-child > th').each(function () {
	    //    getColumnData(this);
	    	if(browserSize>=1024){
	    //		resetWidthToOrig(this);
	    	}
	    	else
	        distWidth = checkForCollapsibleCol(this,distWidth);       
	      }
	     );
	     
	   /*Added to adjust position of Actions pulldwn start*/  
	  trCount = tab.find('thead').children('tr').length;
			if(trCount>1){
				multiHeader = true;
	  }
	  var hasPulldown = jQuery('.hasPulldownMenu').length;
	  if(hasPulldown>0){
	  if(collapseCols>0 && multiHeader){		//Added for Actions pull down.double heading
	  	jQuery('.hasPulldownMenu').css('margin-top','4px');	
	  }
	  else if(collapseCols==0 && !multiHeader){		//Added for Actions pull down.single heading
	  	jQuery('.hasPulldownMenu').css('margin-top','-10px');	
	  }
	  else if(collapseCols>0 && !multiHeader){		//Added for Actions pull down.single heading
	  	jQuery('.hasPulldownMenu').css('margin-top','4px');	
	  }	  
	  else{
		jQuery('.hasPulldownMenu').css('margin-top','');	
	  }
	  }
	/*Added to adjust position of Actions pulldwn start*/
	  else if(hasPulldown<=0){	
	  if(collapseCols>0){
		jQuery('.footable-toggle').nextAll().css('margin-top','8px');
		jQuery('.footable-toggle').nextAll().find('.bluelink').css('margin-top','0px');
	  }else{
		jQuery('.footable-toggle').nextAll().css('margin-top','');
		jQuery('.footable-toggle').nextAll().find('.bluelink').css('margin-top','');
	  }
	}
	if(collapseCols>0){		
	  	jQuery('table .amountRightAlign.footable-last-column').css('line-height','2.5');			
	  }
	else if(collapseCols<=0){		
	  	jQuery('table .amountRightAlign.footable-last-column').css('line-height','');		
	  }
	     var shareWidth=[];
	     share = distributWidth(distWidth);
	     tab.find('> thead > tr:first-child > th').each(function () {
	     	if(share>0){
	   			allocateWidthToTh(this,share);
	   		}
	   		else if(share===0){
	   			resetWidthToOrig(this);
	   		}   		
	   		
		  }
		  );
	  }
	});
	
	 function getColumnData(th) {
	// var masterWidth;
	
	 var width = jQuery(th).attr("width");
	 if(width != undefined){
	 	width = width.substring(0, width.length - 1)	//removing % from width and saving to master copy
	 	masterWidth[i] = width;		/*Store the width in this array*/
	 	i = i + 1;
	 }
	
	}
	
	function getColumnData_modal(th) {
	// var masterWidth;
	
	 var width = jQuery(th).attr("width");
	 if(width != undefined){
	 	width = width.substring(0, width.length - 1)	//removing % from width and saving to master copy
	 	masterWidth_modal[c] = width;
	 	c = c + 1;
	 }
	
	}
	
	function checkForCollapsibleCol(th) {
		var dataP = jQuery(th).attr("data-priority");
		var style = jQuery(th).attr("style");
		var width = jQuery(th).attr("width");
		if(style != undefined && fsClientBrowser() == 'Safari'){
			style= style.trimRight();
		}
		if(dataP != undefined && style == "display: none;"){
			 if(width != undefined){
	 			width = width.substring(0, width.length - 1)	//removing % from width and saving to master copy
	 			distWidth = distWidth+parseInt(width);
	 			collapseCols++;
			}
		}
		return distWidth;
	}
	
	function distributWidth(distWidth) {	
		var share = 0;
		var shareWidth=[];
		if(distWidth>0){
			if(!modal){	
			 share = distWidth/((masterWidth.length)-collapseCols);/*share width among only visible cols. Collapsed cols will be hidden*/
			 }
			 else{
			 share = distWidth/((masterWidth_modal.length)-collapseCols);
			 }
	//		 for(var j=0;j<masterWidth.length;j++){
	//		 	shareWidth[j] = parseInt(masterWidth[j])+parseInt(share);
	//		 }
		}
		return share;
	}
	
	function allocateWidthToTh(th,share) {
		var width = jQuery(th).attr("width");
		var style = jQuery(th).attr("style");
		if(style != undefined && fsClientBrowser() == 'Safari'){
			style= style.trimRight();
		}
	 if(width != undefined ){
	 	if(style != "display: none;"){
	 		if(!modal){	
		 		var width = parseInt(masterWidth[k])+parseInt(share);
		 	}
		 	else{
		 		var width = parseInt(masterWidth_modal[k])+parseInt(share);
		 	}
		 		width = width + "%";
		 		jQuery(th).removeAttr("width");		 	
				jQuery(th).attr("width",width);
		 		k = k + 1;
		 	}
		 	else
		 		k = k + 1;
		 }
	}
	
	function resetWidthToOrig(th){
		var width = jQuery(th).attr("width");
		var style = jQuery(th).attr("style");
	 if(width != undefined ){
	 	if(style != "display: none;"){
	 		if(!modal){	
		 		var width = parseInt(masterWidth[m]);
		 	}
		 	else{
		 		var width = parseInt(masterWidth_modal[m]);
		 	}
		 		width = width + "%";
		 		jQuery(th).removeAttr("width");		 	
				jQuery(th).attr("width",width);
		 		m = m + 1;
		 	}
		 	else
		 		m = m + 1;
		 }
	}
});
