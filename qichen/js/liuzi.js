function setCookie (key,value,days) {
	var date=new Date();
	date.setDate(date.getDate()+days);
	document.cookie=key+"="+escape(value)+"; expires="+date;
}
//提交
$('.submit').click(function  () {
	var reg=/\d{11}/g;
	if ($('.user').val()=='请输入姓名'||$('.pass').val()=="请输入手机号码") {
		$('.NO').show();
		$('.ok').click(function  () {
			$('.NO').hide();
		})
	}else{	
		if(reg.test($('.pass').val())){
			setCookie('pass',$('.pass').val(),30);
			setCookie('user',$('.user').val(),30);
			$('.success').show();
		}else{
			$('.reg').show();
			$('.ok').click(function  () {
				$('.reg').hide();
			})
		}
		
	};
})

$('.jian').click(function  () {
	$('.success').hide();
	window.open('index.html','_blank');  //返回首页
})
//活动规则
$('.activity').click(function  () {
	$('.rule').show();
})
$('.ok').click(function  () {
	$('.rule').hide();
})
//分享
$('.more').click(function  () {
	$('.friend').show();
})
$('.friend').click(function  () {
	$('.friend').hide();
})
//返回
$('.back').click(function  () {
	window.open('hereget.html','_self');
})

