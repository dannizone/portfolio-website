(function($){
  const viewCon = $('.viewCon');
  const viewUl = viewCon.find('ul');
  const viewLi = viewUl.children('li');
  const viewA = viewLi.children('a');

  viewA.on('mouseenter focus',function(e){
    e.preventDefault();
    $(this).find('span').css({display:'block'});
    $(this).find('p').css({display:'block'});
    $(this).stop().animate({'backgroundColor':'rgba(0,0,0,0.5)'});
    $(this).parent('li').addClass('active');
  });

    viewA.on('mouseleave blur',function(e){
      e.preventDefault();
      $(this).parent('li').removeClass('active');
      $(this).find('span').css({display:'none'});
      $(this).find('p').css({display:'none'});
      $(this).stop().animate({'backgroundColor':'transparent'});
    
    
  });



})(jQuery);