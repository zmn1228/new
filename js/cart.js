// ..................点击删除清空购物车..........

$('.ico_select').click(function(){
    $(this).toggleClass('active');
    // .......第一种方法.......
    // if($(this).css("background") == $('.active').css("background")){
    //     console.log(1);
    //     $('.money').html(0);
    
    // }
    // .......第二种方法......
    if($(this).hasClass('active')){
        console.log(1);
        $('.money').html(0);
    }else{
        $('.money').html('￥398');
    }
});

// ..........根据数量项目金额的加减.......
//............项目数量加..........
$('.add').bind('click',function(){
   var i = $(this).parent().siblings('input').val();
   i++;
   $(this).parent().siblings('input').val(i);
    var nMonery = 0;
    nMonery += i*398;
   $('.money').html(nMonery);
//.....当数量大于1的时候，减可以使用.....
   if(i>1){
    $('.minus').parent('.no').css({cursor:'pointer',opacity:1});
    // $('.no').css({cursor:'pointer',opacity:1});
   }
});

// .......数量金额的减........
$('.minus').bind('click',function(){
    var i = $(this).parent().siblings('input').val();
    --i;
    $(this).parent().siblings('input').val(i);
    var nMonery =i*398;
    
    $('.money').html(nMonery);
    if(i<=1){
        $(this).parent().siblings('input').val(1);
        $('.money').html('￥398');
        $('.minus').parent('.no').css({cursor:'not-allowed'});   
    }
});

// .............删除购物车里的货物.......
$('.delete').bind('click',function(){
    $('.container').css({display:'none'});
    $('.gwc-box').css({display:'block'});
});
$('.favorite').bind('click',function(){
    $('.container').css({display:'none'});
    $('.gwc-box').css({display:'block'});
})

// ............跳转到首页.........
$('.backwads').bind('click',function(){
    location.href('index.html');
});