$(document).ready(function () {

   // HIDE MODAL 
   $('.user, .orders, .new, .project, .cart, .reg, .relogin, .login').css('display', 'none');

   var $button1 = $('.header__btn-login')
   var $button2 = $('.header__btn-registration');
   var $button3 = $('.header__btn-user');
   var $button4 = $('.relogin__btn');
   var $button9 = $('.user__item-new--project');
   var $button10 = $('.user__item-orders');
   var $button11 = $('.user__item-project');

   // MODAL 
   // USER MODAL
   $button3.click(function () {
      $('.user').show();
      $('.cart').hide();
      $('html').css("overflow", "hidden");
   })
   $('.user__btn-close').click(function () {
      $('.user').hide();

      $('html').css("overflow-y", "scroll");
   })

   // PROJECT MODAL
   $button11.click(function () {
      $('.project').show();
      $('.user').hide();
      $('html').css("overflow", "hidden");
   })
   $('.project__btn-close').click(function () {
      $('.project').hide();
      $('.user__item-project').show();
      $('html').css("overflow-y", "scroll");
   })

   $('.project__btn-back').click(function () {
      $('.project').hide();
      $('.user').show();
   })

   // NEW MODAL
   $button9.click(function () {
      $('.new').show();
      $('.user').hide();
      $('html').css("overflow", "hidden");
   })
   $('.new__btn-close').click(function () {
      $('.new').hide();
      $('.new__item-project').show();
      $('html').css("overflow-y", "scroll");
   })

   $('.new__btn-back').click(function () {
      $('.new').hide();
      $('.user').show();
   })


   // LOGIN MODAL
   $button1.click(function () {
      $('.login').show();
      $('html').css("overflow", "hidden");
   })
   $('.login__btn-close').click(function () {
      $('.login').hide();
      $('html').css("overflow-y", "scroll");
   })

   // REG MODAL
   $button2.click(function () {
      $('.reg').show();
      $('html').css("overflow", "hidden");
   })
   $('.reg__btn-close').click(function () {
      $('.reg').hide();
   })

   // RELOGIN MODAL
   $button4.click(function () {
      $('.relogin').show();
      $('.login').hide();
      $('html').css("overflow", "hidden");
   })
   $('.relogin__btn-close').click(function () {
      $('.relogin').hide();
      $('html').css("overflow-y", "scroll");
   })

   $('.relogin__btn-back').click(function () {
      $('.relogin').hide();
      $('.login').show();

   })

   //ORDERS MODAL
   $button10.click(function () {
      $('.orders').toggle();
      $('.user').hide();
      $('html').css("overflow", "hidden");
   })
   $('.orders__btn-close').click(function () {
      $('.orders').hide();
      $('.user__item-orders').show();
      $('html').css("overflow-y", "scroll");
   })

   $('.orders__btn-back').click(function () {
      $('.orders').hide();
      $('.user').show();
   })


   // CART BTN ARROW
   $(".header__btn-cart").click(function () {
      $('.cart').toggle(); // Заменяет show/hide на toggle
      $(this).toggleClass('active');

   });


   //LIKE BTN
   $('.beat__card-btn--like ,.artist__card-btn--like').click(function () {
      $(this).toggleClass('active'); // Переключает класс active
   });

   //PLAY BTN (в card, artist)
   $('.beat__card-btn--play, .artist__card-btn--play').click(function () {
      $(this).toggleClass('active');
      $('.beat__card-btn--play').not(this).removeClass('active'); //Выключает все кроме нажатой
   });
});