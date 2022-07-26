function getSystemPath(sysPath) {
	
	var wshell = new ActiveXObject("WScript.Shell");
	var sFolderPath = wshell.ExpandEnvironmentStrings("%" + sysPath + "%");
	
	return sFolderPath;
} 

function doesFileExists(filePath, fileName, sysPath) {
	
	var qualifiedPath = getSystemPath(sysPath) + "\\" + filePath + "\\" + fileName;
	qualifiedPath = qualifiedPath.replace(/\\/g,"/");
			
	debug("qualifiedPath : " + qualifiedPath);
	var fso  = new ActiveXObject("Scripting.FileSystemObject");
	return fso.FileExists(qualifiedPath);
}

function installApplication(fileName, filePath, clientName) {
	
	var installerFile = filePath + "/" + fileName;
	installerFile = installerFile.replace(/ /g,"%20");
	
	debug("installerFile : " + installerFile);
	
	var cName;
	
	if(clientName == 'Kiosk') {
		cName = "Live Assistance";
	} else if(clientName == 'Advizor') {
		cName = "Advizor";
	}
	
	try {
		var wshell = new ActiveXObject("WScript.Shell");
		wshell.Run(installerFile);
		
		alert(cName + " is being installed on your system. To launch the " + cName + ", please click on Continue button again after the installation is complete.");
	} catch (err) {
		throwGenericAlert();
	}
}

function launchAdvizor(fileName, filePath, sysPath) {

	var applicationFile = "file:///" + getSystemPath(sysPath) + "/" +filePath + "/" + fileName;
	debug("applicationFile : " + applicationFile);
	applicationFile = applicationFile.replace(/\\/g,"/");
	debug("applicationFile : " + applicationFile);
	applicationFile = applicationFile.replace(/ /g,"%20");	
	debug("applicationFile : " + applicationFile);
	
	try {
		var wshell = new ActiveXObject("WScript.Shell");
		wshell.Run(applicationFile);
		alert("Advizor is being launched from your system. Please wait.");
	} catch (err) {
		throwGenericAlert();
	}
}

function launchKiosk() {

	debug("What a nice surprise ...");
	var token = document.forms[0].encryptedUserId.value;
	debug(token);
	window.location.href = "fa:open?token=" + token;
	debug("Lemme be the rainbow ...");
	alert("Live Assistance is being launched from your system. Please wait.");
}

function initiateChat() {
	
	debug("Bingoooo ...");
	var launchFileName = document.forms[0].launchFileName.value;
	debug("launchFileName : " + launchFileName);
	
	var launchFilePath = document.forms[0].launchFilePath.value;
	debug("launchFilePath : " + launchFilePath);
	
	var installerFileName = document.forms[0].installerFileName.value; 
	debug("installerFileName : " + installerFileName);
	
	var installerFilePath = document.forms[0].installerFilePath.value;
	debug("installerFilePath : " + installerFilePath);
	
	var launchSysPath = document.forms[0].launchSysPath.value; 
	debug("launchSysPath : " + launchSysPath);
	
	var clientName = document.forms[0].clientName.value; 
	debug("clientName : " + clientName);
	
	
	/**
		-> check if application is installed.
		-> If not, install application.
		-> If yes, check if process is already running.
		-> If yes, throw debug.
		-> If not, launch application.
	*/
	
	//check if application is installed.
	if(!doesFileExists(launchFilePath, launchFileName, launchSysPath)) {
		debug("Application is not installed.");
		
		//If not, install application.
		installApplication(installerFileName, installerFilePath, clientName);
	} else {
		debug("Application is installed.");
		
		// TODO If yes, check if process is already running.
		// TOD If yes, throw debug.
		
		// If not, launch application.
		if(clientName == 'Kiosk') {
			launchKiosk();
		} else if(clientName == 'Advizor') {
			launchAdvizor(launchFileName, launchFilePath, launchSysPath);
		}
		
	}
	
}

function debug(msg) {
	//alert(msg);
}

function throwGenericAlert() {
	alert("An error occured while launching the tool. Please contact the bank administrator.");
}

function logoutKiosk() {
	debug("Logging out ...");
	try {
	    var shell = new ActiveXObject("WScript.Shell");       
	    var regValue = shell.RegRead("HKCR\\FA\\shell\\open\\command\\");
	    
	    if (regValue.indexOf("FALiveAssistanceAppBar") != -1) {           
	          window.open("fa:close?logout");           
	    }
    } catch (err) {
    }
	debug("Logged out successfully.");
}

