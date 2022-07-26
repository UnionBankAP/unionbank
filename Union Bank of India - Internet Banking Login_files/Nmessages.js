/**
* This is a global hash map implementaion variable.
* All the alert messages are put into this variable.
*/
var alertMap = new Map();
 
/**
* This is a global hash map implementaion variable.
* The error code and variable name mapping is maintained in this hash map.
*/
var errCodeMap = new Map();
 
/**
* This method creates arrays of alert messages. Each array contains one message in different languages.
* These arrays are put into the global hash map 'alertMap'.
*/
function createMessageMap(){
                var NoMovieFound = {"001":"FinanZtools movie not found on this page"};
                var PinPadNotSup = {"001":"Pin Pad not supported by your browser"};
                var MinYearInputAbove = {"001":"The minimum year input for this format is above 2000 only. To enter a lower value, please change the preferred date format to one containing yyyy"};
                var SaveAndOpen = {"001":"Please save and open the file."};
                var LogOutIfOpened = {"001":"You would be logged out of the application, if the file is opened directly."};
                var ErrSignFailed = {"001":"Error - Signature Failed"};
                var UnderScores = {"001":"___________________________________________"};
                var SignFailReason = {"001":"Reason:"};
                var BrowserNtJavaEn = {"001":"Your browser is not Java enabled. Please enable Java for enhanced security."};
                var ExceedMaxLen = {"001":"Value entered  in $fieldLabel$  field is exceeding the maximum allowed length ' $maxLength$ '."};
                var OnlyUpperCase = {"001":"Value entered  in $fieldLabel$  field should be in upper case."
                };
                var OnlyLowerCase = {"001":"Value entered  in $fieldLabel$  field should be in lower case."};
                var ShouldBeAlphaNum = {"001":"Value entered  in $fieldLabel$  field should be alphanumeric."};
                var ShouldBeNumeric = {"001":"Value entered  in $fieldLabel$  field should be numeric."};
                var ShouldBeAlphabets = {"001":"Value entered  in $fieldLabel$  field should be alphabets."};
                var JS16 = {"001":"Value entered  in $fieldLabel$  field is exceeding the maximum allowed length ' $maxLength$ '."};
                var LessThanMinVal = {"001":"Value entered  in $fieldLabel$  field is less than the minimum allowed value ' $minValue$ '."};
                var ExceedsMaxVal = {"001":"Value entered  in $fieldLabel$  field is exceeding the maximum allowed value ' $maxValue$ '."};
                var OnlyOneChar = {"001":"The field  in $fieldLabel$  field should contain only a single character."};
                var InValidChar_VALID_SET = {"001":"Value entered  in $fieldLabel$  field is not a valid character according to the VALID_SET ' $specialChars$ '."};
                var InValidChar_INVALID_SET = {"001":"Value entered  in $fieldLabel$  field is not a valid character, since INVALID_SET contains ' $specialChars$ '."};
                var InvInterpretMode = {"001":"Invalid interpretation mode for   in $fieldLabel$  field ."};
                var AddMesgType = {"001":"Please correct the entered value or clear it to proceed."};
                var InvalidAmount = {"001":"Amount entered  in $fieldLabel$  field is not valid."};
                var ExceedMaxAmt = {"001":"Amount entered  in $fieldLabel$  field is exceeding the maximum allowed amount ' $maxValue$ '."};
                var InvalidDateFormat = {"001":"Date entered in $fieldLabel$ field is not in the preferred format ' $dateFormat$ ' or the Date entered is Invalid."};
                var JS27 = {"001":"You are going to digitally sign the following string with your private key:"};
                var InvalidHrsVal = {"001":"Invalid hours value: '"};
                var AllowedHrsRng = {"001":"'.\nAllowed range is 00-23."};
                var InvalidMinutesVal = {"001":"Invalid minutes value: '"};
                var AllowedMinutesRng = {"001":"'.\nAllowed range is 00-59."};
                var InvalidSecondsVal = {"001":"Invalid seconds value: '"};
                var OnlyUnsignIntAllowed = {"001":"'.\nAllowed values are unsigned integers."};
                var ErrCallingCalendar = {"001":"Error calling the calendar: no target control specified"};
                var ErrCallCalInvalidTar = {"001":"Error calling the calendar: parameter specified is not valid target control"};
                var SignWithPrivateKey = {"001":"You are going to digitally sign the following string with your private key:"};
                var BrowserNotSupp = {"001":"Unrecognized browser. Currently this script\nsupports IE 4.0+ and Netscape4.0+ only"};
                var UnRecognisedBrwser = {"001":"Unrecognized browser."};
                var FormNotSigned = {"001":"The form could not be signed now as the signature operation failed."};
                var TryLaterRepToAdm = {"001":"Please try later and if problem persists you may like to report following error to administrator."};
                var SigningAborted = {"001":"Signing operation aborted by user or no valid user certificate."};
                var CapicomNotInst = {"001":"Signature operation failed. The required Signing component (capicom.dll) is not installed on your machine."};
                var ContactAdmin = {"001":"Please contact administrator for further help."};
                var CapicomNotRegd = {"001":"capicom.dll not available/registered on local machine"};
                var ExpandOrCollapse = {"001":"Expand or Collapse"};
                var Expand = {"001":"Expand"};
                var ExpandCollapse = {"001":"Click to Expand/Collapse"};
                var Collapse = {"001":"Collapse"};
                var ConfirmVerification = {"001":"Confirm Verification"};
                var DashRealign = {"001":"Please wait while we realign dashboard to best fit in page"};
var SessionTimeoutMsg = {"001":"Your session will timeout in "};             
var SessionExpiredMsg = {"001":"Your session has expired."};
var ReloginMsg = {"001":"You have to re-login to continue working."};
var SessionExpiringMsg = {"001":"Your session will expire in "};
var Seconds = {"001":" seconds."};
var ContinueSessionMsg = {"001":"If you want to continue, please click 'Continue Session' button, if not click 'Close this alert' button."};
var SessionAlert ={"001":"Session Alert "};
var GoToLoginPage = {"001":"Go to Login Page."};
                                               
var timeout  = {"001":"Error Loading Widget "};
                                                                                        
var error   = {"001":"Error Loading Widget "};
                                                                                        
var abort  = {"001":"Error Loading Widget "};
                                                               
var parsererror  = {"001":"Error Loading Widget "};
                                                        
 
var fatal = {"001":"Error Loading Widget "};                                                   
                var LastWidget = {"001":"You are removing the last widget from this page; Do you want to continue?"};
	var NoWidgets =	{"001":"You currently have no Widgets added. Add more using the Widget Library in Personalize Dashboard."};	
                var NoConfiguredWidgets =        {"001":"You currently have no Widgets."};                                           
                var NoWidgetsTitle = {"001":"You have 1 Error Message"};
                var NoWidgetsAlt = {"001":"You have 1 Error Message"};
                var NoWidgetsImageSrc = {"001":"L001/consumer/images/error-icon.gif"};
                var Select = {"001":"Select"};
                var TitleForMinimize = {"001":"Minimize"};         
                var AltForMinimize = {"001":"Click to Minimize Widget"};
                var TitleForMaximize = {"001":"Maximize"};
                var AltForMaximize = {"001":"Click to Maximize Widget"};
                var TitleForClose = {"001":"Close"};
                var AltForClose = {"001":"Click to Close widget"};             
                var TitleForRefresh = {"001":"Refresh"};
                var AltForRefresh = {"001":"Click to Refresh widget"};   
                var Refresh = {"001":"Refresh Widget"};
                var ErrorLoadingWidget = {"001":"Error Loading Widget"};
                var Close  = {"001":"Close"};
                var comboBoxNoItemFoundMsg = {"001":" did not match any item!"};
                var comboBoxShowAllButton = {"001":"Show All Items"};
 
                var CacheInvalidationSuccess = {"001":"Cache Invalidation Successful on HOST"};
                var ErrorMessageTitle = {"001":"You have Error Message"};
                var OneInformtnMessageTitle = {"001":"You have  1 Information Message"};
                var CacheInvalidationUnSuccess = {"001":"Cache Invalidation Unsuccessful"};
                var Host = {"001":"HOST "};
                var ForPort = {"001":" for port number "};
                var All = {"001":"All"};
                var ScrollUp = {"001":"Scroll Up"};
                var ExpandWidgetBar = {"001":"Expand Widget Bar"};
                var CollapseWidgetBar = {"001":"Collapse Widget Bar"};
                var ScrollDown = {"001":"Scroll Down"};
               
                var EventsDesc = {"001":"Events"};                         
                var PaginationGo = {"001":"Go"};             
    var Page = {"001":"Page"};      
                var CalPaginationNoMorePages = {"001":"Requested page number does not exist"};     
                var CalPaginationInvalidPageNo = {"001":"Requested page number does not exist"};     
                               
                var CalPreviousMonth = {"001":"Previous Month"};
                var CalResettotoday = {"001":"Reset to today"};
                var CalSelectYear = {"001":"Select Year"};
                var CalSelectMonth = {"001":"Select Month"};
                var CalNextMonth = {"001":"Next Month"};
                var CalViewallscheduledtransactions = {"001":"View all scheduled transactions"};
                var CalViewalltransactions = {"001":"View all  transactions"};
                var CalViewdetails = {"001":"View details"};
                var CalPrevious = {"001":"Previous"};
                var CalNext = {"001":"Next"};
                var CalGo = {"001":"Go"};
                var CalClicktoviewdetails = {"001":"Click to view details"};
                var CalDeleteTransaction = {"001":"Drag and drop transaction to delete"};
                                               
                var timeHours = {"001":"hrs"};
                var timeMinutes = {"001":"mins"};          
                var toggleSlideError = {"001":"Toggle Message"};
                var closeSlideError = {"001":"Close Message"};  
                var confirmPinGroupletTitle = {"001":"Confirm Widget to Dashboard"};
                var confirmPinGrouplet = {"001":"Widget '$GROUPLET_TITLE$' will be pinned to Dashboard. Do you want to continue?"};                      
                var masterPageTitleVal = {"001":"Finacle e-Banking: $MASTER_GROUPET_TITLE_VAL$"};             
               
                /* Added to handle RTL in rich text editor START*/         
                var bold = {"001":"Bold","004":"Bold??"};
      var italic = {"001":"Italic"};
      var underline = {"001":"Underline"};
      var strikethrough = {"001":"Strikethrough"};
      var subscript = {"001":"Subscript"};     
      var superscript = {"001":"Superscript"};
      var font = {"001":"Font"};     
      var size = {"001":"Size"};
      var style = {"001":"Style"};
      var color = {"001":"Font Color"};
      var highlight = {"001":"Text Highlight Color"};
      var removeformat = {"001":"Remove Formatting"};
      var bullets = {"001":"Bullets"};
      var numbering = {"001":"Numbering"};
      var outdent = {"001":"Outdent"};
      var indent = {"001":"Indent"};
      var alignleft = {"001":"Align Text Left"};
      var center = {"001":"Center"};
      var alignright = {"001":"Align Text Right"};     
      var justify = {"001":"Justify"};
      var undo = {"001":"Undo"};
      var redo = {"001":"Redo"};
      var rule = {"001":"Insert Horizontal Rule"};
      var image = {"001":"Insert Image"};
      var link = {"001":"Insert Hyperlink"};
      var unlink = {"001":"Remove Hyperlink"};
      var cut = {"001":"Cut"};
      var copy = {"001":"Copy"};
      var paste = {"001":"Paste"};
      var pastetext = {"001":"Paste as Text"};
      var print = {"001":"Print"};
      var source = {"001":"Show Source"};
     var r1="You are about to delete the Folder $foldername$.If it contains Messages, they would be destroyed on deleting this Folder. Are you sure you want to continue?";
     var DeletePersonalFolder = {"001":r1};
                var confirmWatermarkText = {"001":"Enter the above text here"};
                var headerEventMessage = {"001":"Your current data will be lost. Do you want to continue?"}; 
                var noAccForCriteriaMessage = {"001":"The accounts do not exist for the given criteria."};                           
                var noCptype = {"001":"The counterparties do not exist."};
                var warningMsg = {"001":"You have 1 Warning Message"};
                var warningMsgImageSrc = {"001":"L001/corporate/images/alert-icon.png"};
                /*Added for TOL 668710 Starts*/
                var RemarksCheck = {"001":"Enter the Remarks."};
                var PasswordCheck = {"001":"All password fields are mandatory."};
                var SignOnPasswordCheck = {"001":"Sign on password fields are mandatory."};
                var TransactionPasswordCheck = {"001":"Transaction password fields are mandatory."};
                var SecurityQuestions = {"001":"Answer the selected question."};
                /*Added for TOL 668710 Ends*/
                /* Added to handle RTL in rich text editor END*/             
                //alertMap.put("NoMovieFound",NoMovieFound);
                //alertMap.put("PinPadNotSup",PinPadNotSup);
                //alertMap.put("MinYearInputAbove",MinYearInputAbove);
                //alertMap.put("SaveAndOpen",SaveAndOpen);
                //alertMap.put("LogOutIfOpened",LogOutIfOpened);
                //alertMap.put("ErrSignFailed",ErrSignFailed);
                //alertMap.put("UnderScores",UnderScores);
                //alertMap.put("SignFailReason",SignFailReason);
                //alertMap.put("BrowserNtJavaEn",BrowserNtJavaEn);
                //alertMap.put("ExceedMaxLen",ExceedMaxLen);
                //alertMap.put("OnlyUpperCase",OnlyUpperCase);
                //alertMap.put("OnlyLowerCase",OnlyLowerCase);
                //alertMap.put("ShouldBeAlphaNum",ShouldBeAlphaNum);
                //alertMap.put("ShouldBeNumeric",ShouldBeNumeric);
                //alertMap.put("ShouldBeAlphabets",ShouldBeAlphabets);
                //alertMap.put("JS16",JS16);
                //alertMap.put("LessThanMinVal",LessThanMinVal);
                //alertMap.put("ExceedsMaxVal",ExceedsMaxVal);
                //alertMap.put("OnlyOneChar",OnlyOneChar);
                //alertMap.put("InValidChar_VALID_SET",InValidChar_VALID_SET);
                //alertMap.put("InValidChar_INVALID_SET",InValidChar_INVALID_SET);
                //alertMap.put("InvInterpretMode",InvInterpretMode);
                //alertMap.put("AddMesgType",AddMesgType);
                //alertMap.put("InvalidAmount",InvalidAmount);
                //alertMap.put("ExceedMaxAmt",ExceedMaxAmt);
                //alertMap.put("InvalidDateFormat",InvalidDateFormat);
                //alertMap.put("JS27",JS27);
                //alertMap.put("InvalidHrsVal",InvalidHrsVal);
                //alertMap.put("AllowedHrsRng",AllowedHrsRng);
                //alertMap.put("InvalidMinutesVal",InvalidMinutesVal);
                //alertMap.put("AllowedMinutesRng",AllowedMinutesRng);
                //alertMap.put("InvalidSecondsVal",InvalidSecondsVal);
                //alertMap.put("OnlyUnsignIntAllowed",OnlyUnsignIntAllowed);
                //alertMap.put("ErrCallingCalendar",ErrCallingCalendar);
                //alertMap.put("ErrCallCalInvalidTar",ErrCallCalInvalidTar);
                //alertMap.put("SignWithPrivateKey",SignWithPrivateKey);
                //alertMap.put("BrowserNotSupp",BrowserNotSupp);
                //alertMap.put("UnRecognisedBrwser",UnRecognisedBrwser);
                //alertMap.put("FormNotSigned",FormNotSigned);
                //alertMap.put("TryLaterRepToAdm",TryLaterRepToAdm);
                //alertMap.put("SigningAborted",SigningAborted);
                //alertMap.put("CapicomNotInst",CapicomNotInst);
                //alertMap.put("ContactAdmin",ContactAdmin);
                //alertMap.put("CapicomNotRegd",CapicomNotRegd);
               
                /**
                 * Every error message array is mapped to an error code. These error
                 * codes are not taken from VERT table but kept for future reference.
                */
               
                alertMap.put(110000,NoMovieFound);
                alertMap.put(110001,PinPadNotSup);
                alertMap.put(110002,MinYearInputAbove);
                alertMap.put(110003,SaveAndOpen);
                alertMap.put(110004,LogOutIfOpened);
                alertMap.put(110005,ErrSignFailed);
                alertMap.put(110006,UnderScores);
                alertMap.put(110007,SignFailReason);
                alertMap.put(110008,BrowserNtJavaEn);
                alertMap.put(110009,ExceedMaxLen);
                alertMap.put(110010,OnlyUpperCase);
                alertMap.put(110011,OnlyLowerCase);
                alertMap.put(110012,ShouldBeAlphaNum);
                alertMap.put(110013,ShouldBeNumeric);
                alertMap.put(110014,ShouldBeAlphabets);
                alertMap.put(110015,LessThanMinVal);
                alertMap.put(110016,ExceedsMaxVal);
                alertMap.put(110017,OnlyOneChar);
                alertMap.put(110018,InValidChar_VALID_SET);
                alertMap.put(110019,InValidChar_INVALID_SET);
                alertMap.put(110020,InvInterpretMode);
                alertMap.put(110021,AddMesgType);
                alertMap.put(110022,InvalidAmount);
                alertMap.put(110023,ExceedMaxAmt);
                alertMap.put(110024,InvalidDateFormat);
                alertMap.put(110025,InvalidHrsVal);
                alertMap.put(110026,AllowedHrsRng);
                alertMap.put(110027,InvalidMinutesVal);
                alertMap.put(110028,AllowedMinutesRng);
                alertMap.put(110029,InvalidSecondsVal);
                alertMap.put(110030,OnlyUnsignIntAllowed);
                alertMap.put(110031,ErrCallingCalendar);
                alertMap.put(110032,ErrCallCalInvalidTar);
                alertMap.put(110033,SignWithPrivateKey);
                alertMap.put(110034,BrowserNotSupp);
                alertMap.put(110035,UnRecognisedBrwser);
                alertMap.put(110036,FormNotSigned);
                alertMap.put(110037,TryLaterRepToAdm);
                alertMap.put(110038,SigningAborted);
                alertMap.put(110039,CapicomNotInst);
                alertMap.put(110040,ContactAdmin);
                alertMap.put(110041,CapicomNotRegd);
                alertMap.put(110042,ExpandOrCollapse);
                alertMap.put(110043,Expand);
                alertMap.put(110044,Collapse);
                alertMap.put(110045,LastWidget);
                alertMap.put(110046,NoWidgets);
                alertMap.put(110047,NoWidgetsTitle);
                alertMap.put(110048,NoWidgetsAlt);
                alertMap.put(110049,NoWidgetsImageSrc);
                alertMap.put(110050,Select);
                alertMap.put(110051,TitleForMinimize);
                alertMap.put(110052,TitleForMaximize);
                alertMap.put(110053,TitleForRefresh);
                alertMap.put(110054,TitleForClose);
                alertMap.put(110055,Refresh);
                alertMap.put(110056,ErrorLoadingWidget);
                /*For alt attribute*/      
                alertMap.put(110057,AltForMinimize);
                alertMap.put(110058,AltForMaximize);
                alertMap.put(110059,AltForRefresh);
                alertMap.put(110060,AltForClose);
                alertMap.put(110061,Close);
 
                alertMap.put(110062,SessionTimeoutMsg);
                alertMap.put(110063,SessionExpiredMsg);
                alertMap.put(110064,ReloginMsg);
                alertMap.put(110065,SessionExpiringMsg);
                alertMap.put(110066,Seconds);
                alertMap.put(110067,ContinueSessionMsg);
                alertMap.put(110068,SessionAlert);
                alertMap.put(110069,GoToLoginPage);
                alertMap.put(110070,comboBoxNoItemFoundMsg);
                alertMap.put(110071,comboBoxShowAllButton);
                alertMap.put(110072,timeout);
                alertMap.put(110073,error);
                alertMap.put(110074,abort);
                alertMap.put(110075,parsererror);
                alertMap.put(110076,fatal);
                alertMap.put(110077,CacheInvalidationSuccess);
                alertMap.put(110078,ErrorMessageTitle);
                alertMap.put(110079,OneInformtnMessageTitle);
                alertMap.put(110080,CacheInvalidationUnSuccess);
                alertMap.put(110081,Host);
                alertMap.put(110082,NoConfiguredWidgets);
                alertMap.put(110083,ForPort);
                alertMap.put(110084,All);
                alertMap.put(110085,ScrollUp);
                alertMap.put(110086,ScrollDown);
                alertMap.put(110087,ExpandWidgetBar);
                alertMap.put(110088,CollapseWidgetBar);
               
                alertMap.put(110089,timeHours);
                alertMap.put(110090,timeMinutes);
               
                alertMap.put(110091,DashRealign);
                alertMap.put(110092,EventsDesc);
                alertMap.put(110093,PaginationGo);
                alertMap.put(110094,Page);
                alertMap.put(110095,CalPaginationNoMorePages);
                alertMap.put(110096,CalPaginationInvalidPageNo);
                alertMap.put(110097,CalPreviousMonth);
                alertMap.put(110098,CalResettotoday);
                alertMap.put(110099,CalSelectYear);
                alertMap.put(1100100,CalSelectMonth);
                alertMap.put(1100101,CalPreviousMonth);
                alertMap.put(1100102,CalNextMonth);
                alertMap.put(1100103,CalViewallscheduledtransactions);
                alertMap.put(1100104,CalViewdetails);
                alertMap.put(1100105,CalPrevious);
                alertMap.put(1100106,CalNext);
                alertMap.put(1100107,CalGo);
                alertMap.put(1100108,CalClicktoviewdetails);
                alertMap.put(1100109,toggleSlideError);
                alertMap.put(11001010,closeSlideError);
                alertMap.put(11001011,CalViewalltransactions);
                alertMap.put(11001012,confirmPinGroupletTitle);
                alertMap.put(11001013,confirmPinGrouplet);   
                alertMap.put(11001014,masterPageTitleVal);    
 
                /* Added to handle RTL in rich text editor START*/         
               
                alertMap.put(11002001, bold);
alertMap.put(11002002, italic);
alertMap.put(11002003, underline);
alertMap.put(11002004, strikethrough);
alertMap.put(11002005, subscript);
alertMap.put(11002006, superscript);
alertMap.put(11002007, font);
alertMap.put(11002008, size);
alertMap.put(11002009, style);
alertMap.put(11002010, color);
alertMap.put(11002011, highlight);
alertMap.put(11002012, removeformat);
alertMap.put(11002013, bullets);
alertMap.put(11002014, numbering);
alertMap.put(11002015, outdent);
alertMap.put(11002016, indent);
alertMap.put(11002017, alignleft);
alertMap.put(11002018, center);
alertMap.put(11002019, alignright);
alertMap.put(11002020, justify);
alertMap.put(11002021, undo);
alertMap.put(11002022, redo);
alertMap.put(11002023, rule);
alertMap.put(11002024, image);
alertMap.put(11002025, link);
alertMap.put(11002026, unlink);
alertMap.put(11002027, cut);
alertMap.put(11002028, copy);
alertMap.put(11002029, paste);
alertMap.put(11002030, pastetext);
alertMap.put(11002031, print);
alertMap.put(11002032, source);
alertMap.put(11002034, DeletePersonalFolder);
alertMap.put(11002035,confirmWatermarkText);
alertMap.put(11002036, headerEventMessage);
alertMap.put(11002037, ConfirmVerification);
alertMap.put(11002038,CalDeleteTransaction);
alertMap.put(11002039,noAccForCriteriaMessage);       
                alertMap.put(11002040,ExpandCollapse);
alertMap.put(11002041,noCptype);
alertMap.put(11002042,warningMsg);
alertMap.put(11002043,warningMsgImageSrc);
/*Added for TOL 668710 Starts*/
alertMap.put(11002044,RemarksCheck);
alertMap.put(11002045,PasswordCheck);
alertMap.put(11002046,SignOnPasswordCheck);
alertMap.put(11002047,TransactionPasswordCheck);
alertMap.put(11002048,SecurityQuestions);
/*Added for TOL 668710 Ends*/
               
               
                /* Added to handle RTL in rich text editor END*/             
                /**
                * Error code and variable name mapping is done in this hash map.
                */
                errCodeMap.put("DeletePersonalFolder",11002034);
                errCodeMap.put("headerEventMessage",11002036);
                errCodeMap.put("NoMovieFound",110000);
                errCodeMap.put("PinPadNotSup",110001);
                errCodeMap.put("MinYearInputAbove",110002);
                errCodeMap.put("SaveAndOpen",110003);
                errCodeMap.put("LogOutIfOpened",110004);
                errCodeMap.put("ErrSignFailed",110005);
                errCodeMap.put("UnderScores",110006);
                errCodeMap.put("SignFailReason",110007);
                errCodeMap.put("BrowserNtJavaEn",110008);
                errCodeMap.put("ExceedMaxLen",110009);
                errCodeMap.put("OnlyUpperCase",110010);
                errCodeMap.put("OnlyLowerCase",110011);
                errCodeMap.put("ShouldBeAlphaNum",110012);
                errCodeMap.put("ShouldBeNumeric",110013);
                errCodeMap.put("ShouldBeAlphabets",110014);
                errCodeMap.put("LessThanMinVal",110015);
                errCodeMap.put("ExceedsMaxVal",110016);
                errCodeMap.put("OnlyOneChar",110017);
                errCodeMap.put("InValidChar_VALID_SET",110018);
                errCodeMap.put("InValidChar_INVALID_SET",110019);
                errCodeMap.put("InvInterpretMode",110020);
                errCodeMap.put("AddMesgType",110021);
                errCodeMap.put("InvalidAmount",110022);
                errCodeMap.put("ExceedMaxAmt",110023);
                errCodeMap.put("InvalidDateFormat",110024);
                errCodeMap.put("InvalidHrsVal",110025);
                errCodeMap.put("AllowedHrsRng",110026);
                errCodeMap.put("InvalidMinutesVal",110027);
                errCodeMap.put("AllowedMinutesRng",110028);
                errCodeMap.put("InvalidSecondsVal",110029);
                errCodeMap.put("OnlyUnsignIntAllowed",110030);
                errCodeMap.put("ErrCallingCalendar",110031);
                errCodeMap.put("ErrCallCalInvalidTar",110032);
                errCodeMap.put("SignWithPrivateKey",110033);
                errCodeMap.put("BrowserNotSupp",110034);
                errCodeMap.put("UnRecognisedBrwser",110035);
                errCodeMap.put("FormNotSigned",110036);
                errCodeMap.put("TryLaterRepToAdm",110037);
                errCodeMap.put("SigningAborted",110038);
                errCodeMap.put("CapicomNotInst",110039);
                errCodeMap.put("ContactAdmin",110040);
                errCodeMap.put("CapicomNotRegd",110041);
                errCodeMap.put("ExpandOrCollapse",110042);
                errCodeMap.put("Expand",110043);
                errCodeMap.put("Collapse",110044);
                errCodeMap.put("LastWidget",110045);
                errCodeMap.put("NoWidgets",110046);
                errCodeMap.put("NoWidgetsTitle",110047);
                errCodeMap.put("NoWidgetsAlt",110048);
                errCodeMap.put("NoWidgetsImageSrc",110049);
                errCodeMap.put("Select",110050);
                errCodeMap.put("TitleForMinimize",110051);
                errCodeMap.put("TitleForMaximize",110052);
                errCodeMap.put("TitleForRefresh",110053);
                errCodeMap.put("TitleForClose",110054);
                errCodeMap.put("Refresh", 110055);
                errCodeMap.put("ErrorLoadingWidget", 110056);
                errCodeMap.put("AltForMinimize",110057);
                errCodeMap.put("AltForMaximize",110058);
                errCodeMap.put("AltForRefresh",110059);
                errCodeMap.put("AltForClose",110060);
                errCodeMap.put("Close",110061);
 
                errCodeMap.put("SessionTimeoutMsg",110062);
                errCodeMap.put("SessionExpiredMsg",110063);
                errCodeMap.put("ReloginMsg",110064);
                errCodeMap.put("SessionExpiringMsg",110065);
                errCodeMap.put("Seconds",110066);
                errCodeMap.put("ContinueSessionMsg",110067);
                errCodeMap.put("SessionAlert",110068);
                errCodeMap.put("GoToLoginPage",110069);
                errCodeMap.put("comboBoxNoItemFoundMsg",110070);
                errCodeMap.put("comboBoxShowAllButton",110071);
                errCodeMap.put("timeout",110072);
                errCodeMap.put("error",110073);
                errCodeMap.put("abort",110074);
                errCodeMap.put("parsererror",110075);
                errCodeMap.put("fatal",110076);
                errCodeMap.put("CacheInvalidationSuccess",110077);
                errCodeMap.put("ErrorMessageTitle",110078);
                errCodeMap.put("OneInformtnMessageTitle",110079);
                errCodeMap.put("CacheInvalidationUnSuccess",110080);
                errCodeMap.put("Host",110081);
                errCodeMap.put("NoConfiguredWidgets",110082);
                errCodeMap.put("ForPort",110083);
                errCodeMap.put("All",110084);
                errCodeMap.put("ScrollUp",110085);
                errCodeMap.put("ScrollDown",110086);
                errCodeMap.put("ExpandWidgetBar",110087);
                errCodeMap.put("CollapseWidgetBar",110088);
 
                errCodeMap.put("timeHours",110089);
                errCodeMap.put("timeMinutes",110090);
               
                errCodeMap.put("DashRealign",110091);
                errCodeMap.put("EventsDesc",110092);
                errCodeMap.put("PaginationGo",110093);
                errCodeMap.put("Page",110094);
                errCodeMap.put("CalPaginationNoMorePages",110095);
                errCodeMap.put("CalPaginationInvalidPageNo",110096);
                errCodeMap.put("CalPreviousMonth",110097);
                errCodeMap.put("CalResettotoday",110098);
                errCodeMap.put("CalSelectYear",110099);
                errCodeMap.put("CalSelectMonth",1100100);
                errCodeMap.put("CalPreviousMonth",1100101);
                errCodeMap.put("CalNextMonth",1100102);
                errCodeMap.put("CalViewallscheduledtransactions",1100103);
                errCodeMap.put("CalViewdetails",1100104);
                errCodeMap.put("CalPrevious",1100105);
                errCodeMap.put("CalNext",1100106);
                errCodeMap.put("CalGo",1100107);
                errCodeMap.put("CalClicktoviewdetails",1100108);
                errCodeMap.put("toggleSlideError",1100109);
                errCodeMap.put("closeSlideError",11001010);
                errCodeMap.put("CalViewalltransactions",11001011);
                errCodeMap.put("confirmPinGroupletTitle",11001012);
                errCodeMap.put("confirmPinGrouplet",11001013);        
                errCodeMap.put("masterPageTitleVal",11001014);                         
                /* Added to handle RTL in rich text editor START*/         
                errCodeMap.put("bold",11002001);
errCodeMap.put("italic",11002002);
errCodeMap.put("underline",11002003);
errCodeMap.put("strikethrough",11002004);
errCodeMap.put("subscript",11002005);
errCodeMap.put("superscript",11002006);
errCodeMap.put("font",11002007);
errCodeMap.put("size",11002008);
errCodeMap.put("style",11002009);
errCodeMap.put("color",11002010);
errCodeMap.put("highlight",11002011);
errCodeMap.put("removeformat",11002012);
errCodeMap.put("bullets",11002013);
errCodeMap.put("numbering",11002014);
errCodeMap.put("outdent",11002015);
errCodeMap.put("indent",11002016);
errCodeMap.put("alignleft",11002017);
errCodeMap.put("center",11002018);
errCodeMap.put("alignright",11002019);
errCodeMap.put("justify",11002020);
errCodeMap.put("undo",11002021);
errCodeMap.put("redo",11002022);
errCodeMap.put("rule",11002023);
errCodeMap.put("image",11002024);
errCodeMap.put("link",11002025);
errCodeMap.put("unlink",11002026);
errCodeMap.put("cut",11002027);
errCodeMap.put("copy",11002028);
errCodeMap.put("paste",11002029);
errCodeMap.put("pastetext",11002030);
errCodeMap.put("print",11002031);
errCodeMap.put("source",11002032);
errCodeMap.put("confirmWatermarkText",11002035);
errCodeMap.put("ConfirmVerification",11002037);
errCodeMap.put("CalDeleteTransaction",11002038);
errCodeMap.put("noAccForCriteriaMessage",11002039);            
errCodeMap.put("ExpandCollapse",11002040);
errCodeMap.put("noCptype",11002041);
errCodeMap.put("warningMsg",11002042);
errCodeMap.put("warningMsgImageSrc",11002043);
/*Added for TOL 668710 Starts*/
errCodeMap.put("RemarksCheck",11002044);
errCodeMap.put("PasswordCheck",11002045);
errCodeMap.put("SignOnPasswordCheck",11002046);
errCodeMap.put("TransactionPasswordCheck",11002047);
errCodeMap.put("SecurityQuestions",11002048);
/*Added for TOL 668710 Ends*/
                /* Added to handle RTL in rich text editor END*/             
               
}
