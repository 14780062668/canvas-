var ww=document.documentElement.clientWidth,//屏幕可见宽度
			hh=document.documentElement.clientHeight,
			canvas=document.getElementById("canvas"),
			cans=canvas.getContext("2d");
		canvas.width=ww;
		canvas.height=hh;
		var snows=60,//雪花数量
			drops=[],//初始化雪花坐标
			olddate=new Date();
		for(let i=0;i<snows;i++){
			drops.push({
				x:Math.random()*ww,
				y:Math.random()*hh,
				r:Math.random()*4+1
			});
		}
		function draw(){
			cans.shadowColor="#fff";
			cans.shadowOffsetX=0;
			cans.shadowOffsetY=0;
			cans.shadowBlur=10;//阴影模糊度
			cans.clearRect(0,0,ww,hh);
            // 填充的颜色
            cans.strokeStyle = "rgba(255,255,255,.5)";
            cans.beginPath();
			cans.fillStyle="#fff";
			for(let i=0,d;i<snows;i++){
				d=drops[i];
				cans.moveTo(d.x,d.y);
				cans.arc(d.x,d.y,d.r,0,Math.PI*2);
			}
			cans.fill();
			cans.stroke();
			updates();
			var newdate=new Date();
			if(newdate-olddate>5000){
				olddate=newdate;
				document.querySelector("#bodys").style.backgroundImage="url(img/"+parseInt(Math.random()*3+1)+".jpg)";//切换背景
			}
		}
		setInterval(draw,30);
		//雪花下落
		function updates(){
			for(let i=0;i<snows;i++){
				var d=drops[i];
				d.y+=Math.random()*15;
				if(d.y>=hh) d.y=0;
			}
		}
