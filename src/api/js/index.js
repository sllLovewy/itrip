$(document).ready(function () {
  /*鼠标悬停控制显示和隐藏*/
  var timer;
  $(".i-hotline ul li:nth-of-type(4)").mouseover(function () {
    clearTimeout(timer);
    $(".i-top-appL").show();
  });
  $(".i-hotline ul li:nth-of-type(4)").mouseout(function () {
    timer = setTimeout(function () {
      $(".i-top-appL").hide();
    }, 500);
  })

})
