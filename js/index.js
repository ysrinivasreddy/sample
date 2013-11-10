// function to trigger animation
$('.button').click(function() {
  
  // check if the menu-items are hidden behind the button
  if ($('.menu__list').hasClass('hidden')) {
    // add class to make the menu-items drop down
    $('.item1').addClass('list--animation');
    // the following items trigger the animation after a certain delay
    $('.item2').addClass('list--animation--delay1');
    $('.item3').addClass('list--animation--delay2');
    $('.item4').addClass('list--animation--delay3');
    $('.item5').addClass('list--animation--delay3');
    // remove the hidden class from the ul container to show that the items are not hidden anymore
    $('.menu__list').removeClass('hidden');
  }
  else {
    // remove class to make the menu-items disappear
    $('.item1').removeClass('list--animation');
    $('.item2').removeClass('list--animation--delay1');
    $('.item3').removeClass('list--animation--delay2');
    $('.item4').removeClass('list--animation--delay3');
    $('.item5').removeClass('list--animation--delay3');
    // add the hidden class to the ul container to show that the items are now hidden again 
    $('.menu__list').addClass('hidden');
  }
  
});
  