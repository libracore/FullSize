(function ($) {
  $(document).ready(function(){
	AddFullsizeBtn();
	AddEventListenerToBTN1();
  });
}(jQuery));

function AddFullsizeBtn() {
	var node = document.createElement("LI");
	var a_tag = document.createElement("A");
	//a_tag.href = "#";
	a_tag.setAttribute('id','fullsizebtn');
	var t = document.createTextNode("Fullsize View");
	a_tag.appendChild(t);
	node.appendChild(a_tag);
	document.getElementById("toolbar-user").insertBefore(node, document.getElementById("toolbar-user").getElementsByClassName("divider")[0]);
}

function GoFullsize() {
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
	AddEventListenerToBTN1();
}