//调用外部样式表的js方法(1.元素对象2.属性名称)
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle(attr);
	}else{
		window.getComputedStyle(obj,null)[attr];
	}
}
//去掉空白节点
function delSpaceText(obj){
	var nodes=obj.childNodes;
	for(var i=0;i<nodes.length;i++){
		if(nodes[i].nodeType==3){
			nodes[i].parentNode.removeChild(nodes[i]);
		}
	}
	return nodes;}
//通过id找到元素对象
function $(id){
	return document.getElementById(id);
}
//自定义在目标元素之后插入新元素
function insertAfter(newNode,targetNode){
	var parent=targetNode.parentNode;//目标元素的父元素
	//判断目标节点是否时父节点最后一个节点
	if(targetNode==parent.lastChild){
		parent.appendChild(targetNode);
	}else{
		parent.insertBefore(newNode,targetNode.nextSibling);
	}
}
