function showPic(whichpic){
	var sourse = whichpic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src',sourse);
}