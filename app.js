$(function(){
    $('.left').click(function(){
        $('h1').css({"text-align":"left"});
    });
    $('.right').click(function(){
        $('h1').css({"text-align":"right"});
    });
    $('.center').click(function(){
        $('h1').css({"text-align":"center"});
    });
    $('form').submit(function(event){
        event.preventDefault();
        var color =$('.color').val();
         $('.div1').css('background-color',color);

            });    
});