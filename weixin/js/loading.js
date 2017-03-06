 function loading(info,callbock){
 	
 	
 	//图片的总个数
 	var allimg = 0;
 	for (key in info) {
 		allimg++;
 	}
 	
 	//保存已经加载完成的图片 用键值对方式保存
 	var loadingimg = {};
 	// 图片已经加载完成的个数
 	var loadingimgnumber = 0;
 	
 	for (key in info) {
 		var obj = new Image();
 		obj.src = info[key];
 		
 		obj.onload = (function(key2){
 			return function(){
 				loadingimgnumber++;
 				loadingimg[key2]=this;
 				if(loadingimgnumber == allimg){
 					if(callbock.done){
 						callbock.done(loadingimg);
 					}
 				}
 			}
 		})(key);
 	}
 }
	//下面为调用方法
	//创建键值对路径
		var info = {
			"background":"img/background.png",
			"plane": "img/plane.png",
            "prop": "img/prop.png",
            "bomb": "img/bomb.png",
            "bullet":"img/bullet1.png",
            "enemy1":"img/enemy1.png",
            "enemy2":"img/enemy2.png",
            "enemy3":"img/enemy3.png"
		};
		//加载图片资源
		loading(info,{
			done:main
		});