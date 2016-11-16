function setCookie (key,value,days) {
	var date=new Date();
	date.setDate(date.getDate()+days);
	document.cookie=key+"="+escape(value)+"; expires="+date;
}
function getCookie (key) {
	var arr=document.cookie.split('; ');
	for (var i = 0; i < arr.length; i++) {
		var arr1=arr[i].split('=');
		if (arr1[0]==key) {
			return unescape(arr1[1]);
		};
	};
	return false;
}
function removeCookie (key) {
	setCookie (key,'0',-1);
}
//点击抽奖 
$('.qcimg li').click(function  () {
	//判断是否抽过奖
	//抽奖结果
	if (getCookie('user')=='wangling') { //已抽奖
		window.open('joined.html','_blank');  // setCookie('winner','1',30);
	}else{
		// 判断是否场内，场外？？？？？？？？？？？
		if (getCookie('isscene')=='out') {  //场外			
			// 中奖率  40%  随机数在1~100里的1~20
			var winrate1=Math.ceil(Math.random()*100); //1~100
			if (winrate1>=1&&winrate1<=40) { //中奖
				setCookie('winner','2',30); 
			}else if(winrate1>=41&&winrate1<=100){ //未中奖
				setCookie('winner','4',30); 
			};
		}else if(getCookie('isscene')=='at'){  //场内
			//中奖率 10%
			var winrate2=Math.ceil(Math.random()*100);
			if (winrate2>=1&&winrate2<=10) {//中奖
				setCookie('winner','3',30);  
			}else if(winrate2>=11&&winrate2<=100){ //未中奖
				setCookie('winner','4',30);
			};
		};

		//跳转页面
		if (getCookie('winner')==2) {  //场外中奖
			window.open('nohereget.html','_self');
			//抽话费
			// setCookie('charge','')
		}else if(getCookie('winner')==3){ //场内中奖
			window.open('hereget.html','_self');
		}else if(getCookie('winner')==4){ //未中奖
			window.open('lose.html','_self');
		};

	
	};

})

$('.back').click(function  () {
	window.open('index.html','_self');
})

