//..............导航下拉列表...................
$('.nav-t-l').mouseenter(function(){
    // $('.dropdown-list').css({display:"block"});
    $('.dropdown-list').stop(true).slideToggle(800);
})
$('.nav-t-l').mouseleave(function(){
    $('.dropdown-list').stop(true).slideToggle(800);
});




