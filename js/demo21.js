//下拉菜单部分
var myukOne = document.getElementById("myulOne");
var myLiOne = myukOne.getElementsByTagName("li");
for(var i = 0; i < myLiOne.length; i++) {
	delSpaceText(myLiOne[i]); //删除空白节点
	myLiOne[i].onmouseover = function() {
		this.lastChild.style.display = "block";
	}
	myLiOne[i].onmouseout = function() {
		this.lastChild.style.display = "none";
	}
}
//图品轮播
var myImg = document.getElementById("myImg");
var arr = ["a.jpg", "b.jpg", "c.jpg", "d.jpg"];
var arr1 = document.getElementById("myBannerUl").getElementsByTagName("li"); //角标数组
var n = 0;
var t = setInterval(fun, 1000);

function fun() {
	for(var i = 0; i < arr1.length; i++) {
		arr1[i].style.background = "orangered";
	}
	myImg.setAttribute("src", "img/" + arr[n]);
	arr1[n].style.background = "yellow";
	n++;
	if(n > arr.length - 1) {
		n = 0;
	}
}

function myGame(v) {
	clearInterval(t);
	myImg.setAttribute("src", "img/" + arr[v]);
	for(var i = 0; i < arr1.length; i++) {
		arr1[i].style.background = "orangered";
	}
	arr1[v].style.background = "yellow";
	if(v == arr1.length - 1) {
		n = 0;
	} else {
		n = v + 1;
	}
}

function myGo() {
	t = setInterval(fun, 1000);
}