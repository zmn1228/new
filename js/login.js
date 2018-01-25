// ..................登录和注册切换............

$('#loginbtn').on("click",function(){
    $('#reg-method').css({display:"none"});
    $('#login-method').css({display:"block"})
    $(this).addClass('active');
    $('#regbtn').removeClass('active');
});
$("#regbtn").on("click",function(){
    $('#login-method').css({display:"none"})
    $('#reg-method').css({display:"block"});
    $(this).addClass('active');
    $('#loginbtn').removeClass('active');
});


// ...............随机验证码............
function verifyCode () {
    var sStr = 'abcdefdhijklmnopqrstuvwsvzABCDEFGHIJKLMNOPQRSTUVWSYZ1234567890';
    var sVerify = '';
    for (var i = 0 ; i < 4 ; i++){
        var iCode = Math.floor(Math.random()*sStr.length);
        sVerify += sStr[iCode];
    }
    return sVerify;
};
var sVf = verifyCode ();
$('#show-yzms').bind('click',function(){
    sVf  =  verifyCode () 
    $('#fourNum').html(sVf);
});
// ..........初始化的时候的随机验证码............
$('#fourNum').html(sVf);


// .................正则验证注册................

// .............验证用户名.............
var sCvc  = $('#fourNum').html();
