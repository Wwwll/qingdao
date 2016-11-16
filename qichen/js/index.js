var Html=document.getElementsByTagName('html')[0];
var Winw=document.documentElement.clientWidth;
var scale=100/640;
Html.style.fontStyle=scale*Winw+'px';

function setCookie (key,value,days) {
	var date=new Date();
	date.setDate(date.getDate()+days);
	document.cookie=key+"="+escape(value)+"; expires="+date;
}

//活动说明
$('.acti').click(function  () {
	$('.intro').show();		
})
//mask隐藏
$('.afresh').click(function  () {
	$('.isscene').hide();
})
//是否在现场
	$('.here').click(function  () {
		$('.isscene').show();  //在现场
		setCookie('isscene','at',30);
	})
	//不在现场
	$('.nohere').click(function  () {
		setCookie('isscene','out',30);//不在现场
		window.open('award.html','_self');
	})
	$('.yes').click(function  () {	
		setCookie('isscene','at',30);	
		window.open('award.html','_self');//在现场
	})
// 马上抽奖
$('.atonce').click(function  () {
	setCookie('isscene','at',30); //在现场
	$('.intro').hide();
})	