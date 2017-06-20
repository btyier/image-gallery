function showPic(whichpic){
	var sourse = whichpic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src',sourse);
	// var text = whichpic.getAttribute('title');
}
function countBodyChildren(){
	var body_element = document.getElementsByTagName('body')[0];
	console.log(body_element.childNodes.length);
}
window.onload = countBodyChildren;