// $(document).ready(function(){
//   $('.materialboxed').materialbox();
// });

$(document).ready(function(){
    $('.modal').modal({
      dismissible: true,
      opacity: .2,
      inDuration: 500,
      outDuration: 300,
      startingTop: '4%',
      endingTop: '10%',
    });
    $('ul.tabs').tabs({});
    $('.parallax').parallax();
  });
