var app = {} ;

$(document).ready(function(){
  app.hookupScrollShadow();
  content = "<div class='jumbotron'><h1>Pretend this is a useful collection of graphs/maps.</h1></div>";
  $('iframe.pretend').contents().find('body').append(content);
})