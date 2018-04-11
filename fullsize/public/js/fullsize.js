var fontSizeArray = [];
(function ($) {
  $(document).ready(function(){
	AddFullsizeBtn();
	AddEventListenerToBTN1();
  });
}(jQuery));

function AddFullsizeBtn() {
	var node = document.createElement("LI");
	var a_tag = document.createElement("A");
	a_tag.setAttribute('id','fullsizebtn');
	var t = document.createTextNode("Fullsize View");
	a_tag.appendChild(t);
	node.appendChild(a_tag);
	document.getElementById("toolbar-user").insertBefore(node, document.getElementById("toolbar-user").getElementsByClassName("divider")[0]);
}

function GoFullsize() {
	//removed, belongs to v1.1.0
	//askForResizeFont();
	var sheet = document.createElement('style')
	sheet.setAttribute('id','fullsizestyle');
	sheet.innerHTML = ".container {width: 100% !important;}";
	document.body.appendChild(sheet);
	prepareBackToNormalView();
}

function AddEventListenerToBTN1() {
	document.getElementById("fullsizebtn").onclick = function() {GoFullsize()};
}

function AddEventListenerToBTN2() {
	document.getElementById("fullsizebtn").onclick = function() {BackToNormalView()};
}

function prepareBackToNormalView() {
	document.getElementById("fullsizebtn").innerHTML="Normal View";
	AddEventListenerToBTN2();
}

function BackToNormalView() {
	var sheetToBeRemoved = document.getElementById('fullsizestyle');
	var sheetParent = sheetToBeRemoved.parentNode;
	sheetParent.removeChild(sheetToBeRemoved);
	document.getElementById("fullsizebtn").innerHTML="Fullsize View";
	//removed, belongs to v1.1.0
	//goBackToOldSizes();
	AddEventListenerToBTN1();
}

//removed, belongs to v1.1.0
/* function getAllFontSizes(size) {
	fontSizeArray = [];
	var elements = $("#body_div").find("*");
	elements.each(function() {
		var obj = {
				element: $(this).prop('tagName'),
				originalSize: $(this).css("font-size")
			};
		fontSizeArray.push(obj);
		if (size > 100) {
			if ($(this).hasClass("octicon")) {
				if (size >= 115) {
					$(this).css("font-size", ((parseInt($(this).css("font-size"))/100)*115));
					//$(this).css("font-size", "14px");
				}
			} else if ($(this).hasClass("menu-btn-group-label")||
			$(this).parent().hasClass("indicator")) {
				//nothing
			} else {
				if ($(this).prop('tagName') == "A"||
				$(this).prop('tagName') == "SPAN"||
				$(this).prop('tagName') == "P"||
				$(this).hasClass("new-filter")||
				$(this).hasClass("h6 stat-label")||
				$(this).hasClass("toggle-filter")||
				$(this).hasClass("remove-filter")) {
					$(this).css("font-size", ((parseInt($(this).css("font-size"))/100)*size));
				}
			}
		}
	});
} */

//removed, belongs to v1.1.0
/* function goBackToOldSizes() {
	var elements = $("#body_div").find("*");
	elements.each(function(index) {
		$(this).css("font-size", "");
	});
} */

function askForResizeFont() {
	frappe.prompt([
			{'fieldname': 'size', 'fieldtype': 'Int', 'label': 'New Font-Size in %:', 'reqd': 1, 'default': '100'}  
		],
		function(data){
			if (parseInt(data.size) > 100) {
				frappe.show_alert("New Font-Size: "+data.size+"%", 5);
			} else {
				frappe.show_alert("New Font-Size smaller than 100% - no change triggered!", 5);
			}
			//removed, belongs to v1.1.0
			/* var sheet = document.createElement('style')
			sheet.setAttribute('id','fullsizestyle');
			sheet.innerHTML = ".container {width: 100% !important;}";
			document.body.appendChild(sheet);
			getAllFontSizes(parseInt(data.size));
			prepareBackToNormalView(); */
		},
		'Set optionally new Font-Size',
		'Set'
	)
}