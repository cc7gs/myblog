	//雪景图
	function snow(){
		var flake=document.createElement('i');
		flake.className="fa fa-snowflake-o";
		var documentHeight=window.screen.height;
		var documentWidth=window.innerWidth;

		// console.log(documentHeight+"-"+documentWidth);
		var createtime=100;
		setInterval(function(){
			var startLeft=Math.random()*documentWidth;
			var endLeft=Math.random()*documentWidth;

			var  flakeSize=5+20*Math.random();
			var durationTime=5000+10000*Math.random();
			var startOpacity=0.6+0.3*Math.random();
			var endOpacity=0.2+0.2*Math.random();
			var CloneFlake=flake.cloneNode(true);

				CloneFlake.style.cssText+=`
					left:${startLeft}px;
					opacity:${startOpacity};
					font-size:${flakeSize}px;
					top:-25px;
					transition: all ${durationTime}ms ease-in-out;
				`;
			document.body.appendChild(CloneFlake);
			// document.body.appendChild(flake);
			//当第一个定时器生成雪花后，修改雪花的位置。
			setTimeout(function(){
				CloneFlake.style.cssText+=`
					left:${endLeft}px;
					top:3000px;
					opacity:${endOpacity};
				`;

			//设置第三个定时器，当雪花落下后，删除雪花
				setTimeout(function(){
						CloneFlake.remove();
				},durationTime);
			},0);

		},createtime);
		
	}
	snow();