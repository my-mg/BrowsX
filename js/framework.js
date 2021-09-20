
function updateUrlBarText(url){
  $('.url-input').val(url);
};

function reloadTabIframe(){
  var url = $('.url-input').val();
  $(".page iframe").attr("src", url);
}

function loadUrlInTabIframe(url, title, favico){
  updateUrlBarText(url);
  $('.active span').text(title);
  $('.active img').attr('src', favico);
  $(".page iframe").attr("src", url);
}
$("a[href^='#']").on("click", function(e){
  e.preventDefault();
});

$('.icon-refresh').on("click", function(e){
  e.preventDefault();
  reloadTabIframe();
});

$('.icon-home').on("click", function(e){
  e.preventDefault();
  var url = 'https://www.google.com';
  var title = 'Google';
  var favico = 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png';
  loadUrlInTabIframe(url, title, favico);
});
$(".add").on("click", function(e){ 
  if($(".tabs li").size() < 4){ 
    $(".tabs li.active").removeClass("active");
    $(".tabs").append('<li class="active"><span>New Tab</span><a class="close" title="Close Tab" href="#">×</a></li>');
    $(".page iframe").attr("src", " ");
    updateUrlBarText('http://www.');
  }
});
  
$(".tabs li").on("click", function(e){
  
  $(".tabs li.active").removeClass("active");
  $(this).addClass("active");
  var url = $(this).find("a").attr("href");
  updateUrlBarText(url);
  
  $(".page iframe").attr("src", url);
  
  e.preventDefault();
});
  
$(document).on('click', '.tabs li a.close', function(e){
  $(this).closest("li").remove();
  
  if($(".tabs li").size() == 0){
    $(".tabs").append('<li><span>New Tab</span><a class="close" href="#">×</a></li>');
  }
  
  $(".tabs li:last-child").addClass("active");
  
  e.preventDefault();
});

$(".bookmark ul li a").on("click", function(e){
  var url = $(this).attr("href");
  var title = $(this).data('title');
  var favico = $(this).data('favico');
  loadUrlInTabIframe(url, title, favico);
  e.preventDefault();
});
