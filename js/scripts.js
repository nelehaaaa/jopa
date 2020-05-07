// Прокрутка

$(document).ready(function(){
  $(".nav_l").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });
});

$(document).scroll(function() {
  var toTop = $(this).scrollTop();
  if (toTop > 500) {
    $('.to_top').animate({opacity: 'show'}, 300);
  } else {
    $('.to_top').animate({opacity: 'hide'}, 300);
  }
});

// Отключение пустых ссылок

$('a').click(function() {
  if ($(this).attr('href') == '#') {
    return false;
  } 
});

// Выпадающий список

var listStatus = true;

$(document).click(function() {
  if (!listStatus) {
    $('.active_list').removeClass('active_list');
    $('.active_icon_list').removeClass('active_icon_list');
    listStatus = true;
  } else {
    listStatus = false;
  }
});

$('.open_list').click(function() {
  $(this).next().addClass('active_list');
  $(this).find('.icon_list').addClass('active_icon_list');
});

$('.hide_list li').click(function() {
  var html = $(this).find('.list_in').html();
  $(this).parent().prev().find('.list_in').html(html);
  var index = $(this).index();
  $(this).parent().siblings('.list_buttons').find('a').css({display: 'none'});
  $(this).parent().siblings('.list_buttons').find('a').eq(index).css({display: 'block'});
});

// Обновление даты

var nowDate = new Date();
var reloadDate = nowDate.getDate() + '.' + nowDate.getMonth() + '.' + nowDate.getFullYear();
$('.reload').html(reloadDate);

// Таймер

function timer() {
	 var nowDate = new Date();
  var toHours = nowDate.getHours();
  var day = nowDate.getDate();
  var month = nowDate.getMonth();
  var year = nowDate.getFullYear();
    var achiveDate = new Date(year,month,day,toHours,59,59); //Задаем дату, к которой будет осуществляться обратный отсчет
    var result = (achiveDate - nowDate)+1000;
    var seconds = Math.floor((result/1000)%60);
    var minutes = Math.floor((result/1000/60)%60);
    var hours = ((15-day)*24)-toHours;
     if(day >= 1 && day <8) hours = ((8-day)*24)-toHours;
     else
     	if(day >= 8 && day<15) hours = ((15-day)*24)-toHours;
     else
     	if(day >= 15 && day<22) hours = ((22-day)*24)-toHours;
     else
     	if(day >= 22 && day<32) hours = ((32-day)*24)-toHours;
    //var days = Math.floor(result/1000/60/60/24);
    if (hours < 10) hours = '0' + hours;
    if (hours <= 0) {
      hours = 0;
      seconds = 0;
      minutes = 0;
    }
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    $('.hours').html(hours);
    $('.minutes').html(minutes);
    $('.seconds').html(seconds);
  }
  

  setInterval(timer, 1000);

// Слайдер

var doingSlide = false;

$('.left').click(function() {
  if (!doingSlide) {
    doingSlide = true;
  } else {
    return;
  }
  var index = $('.active_slide').index();
  if (index == 0) {
    index = $('.reviews_list li').length - 1;
  } else {
    index--;
  }
  $('.active_slide').animate({opacity: 'hide'}, 300, function() {
    $(this).removeClass('active_slide');
    $('.reviews_list li').eq(index).animate({opacity: 'show'}, 300, function() {
      $(this).addClass('active_slide');
      doingSlide = false;
    });
  });
});

$('.right').click(function() {
  if (!doingSlide) {
    doingSlide = true;
  } else {
    return;
  }
  var index = $('.active_slide').index();
  if (index == ($('.reviews_list li').length - 1)) {
    index = 0;
  } else {
    index++;
  }
  $('.active_slide').animate({opacity: 'hide'}, 300, function() {
    $(this).removeClass('active_slide');
    $('.reviews_list li').eq(index).animate({opacity: 'show'}, 300, function() {
      $(this).addClass('active_slide');
      doingSlide = false;
    });
  });
});

// Старт анимаций

eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p})
