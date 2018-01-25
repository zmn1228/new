//..............导航下拉列表...................
$('.nav-t-l').mouseenter(function(){
    // $('.dropdown-list').css({display:"block"});
    $('.dropdown-list').stop(true).slideToggle(800);
})
$('.nav-t-l').mouseleave(function(){
    $('.dropdown-list').stop(true).slideToggle(800);
});

// .........吸顶效果...........
$(window).scroll(function(){
    if($(document).scrollTop()>1256){
        $('.fixed').css({top:0});
        console.log($(document).scrollTop())
    }else{
        $('.fixed').css({top:-1000});
    }
    if($(document).scrollTop()>8556){
        $('.fixed').css({top:-1000});
    }
    
})
// .........划过小图让大图出来.......
$('.small-img img').mouseenter(function(){
    var index = $(this).index();
    $('.small-img img').removeClass('active').eq(index).addClass('active');
    $('.big-img a').css({display:'none',opacity:0}).eq(index).css({display:'block',opacity:1})
   
})

// .........点击的时候city展开........
$('.launch-t').bind('click',function(){
    $('.city').css('display','block');
    $('.launch-t').css('display','none');
})

$('.launch-b').bind('click',function(){
    $('.city').css('display','none');
    $('.launch-t').css('display','block');
})




//..........tab切换.........
$('.tab-title li').mouseenter(function(){ 
    var index = $(this).index();
    $('.tab-title li').children().children().removeClass('active');
    $('.tab-title li').eq(index).children().children().addClass('active');
    $('.tab-content img').fadeOut().eq(index).fadeIn();
})



//  //购物保障处，滑过图标，图标变色
//  $('.tab-indicators li').mouseenter(function(){
//     var index = $(this).index();
//     console.log(index);
//     $('.tab-indicators li').children().children().removeClass('active');
//     $('.tab-indicators li').eq(index).children().children().addClass('active');
//     $('.tab-content img').fadeOut().eq(index).fadeIn();
// });