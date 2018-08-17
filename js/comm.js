window.onload=function(){
			var navh=document.getElementById("navh");
			var startlist=document.getElementById("startlist");
			navh.onclick=function(){
				var style=startlist.style;
				console.log(style.display);
		// style.display = style.display == "block" ? "none" : "block";
		// navh.className = style.display == "block" ? "open" : ""

			if(style.display=="block"){
				style.display = "none";
				navh.className=" ";
			}else{
				style.display = "block";
				navh.className="open";
			}
		}

}

