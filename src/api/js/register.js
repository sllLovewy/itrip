$(document).ready(function () {
  /*判断输入是否正确*/
  // 表单验证
  var ok1=false;
  var ok2=false;
  var ok3=false;

//验证手机
  $('input[name="phone"]').focus(function(){
    $(this).next().text('请输入手机号').removeClass().addClass('state2 icon-exclamation-sign');
  }).blur(function(){
    if($(this).val().search(/^1[34578]\d{9}$/)==-1){
      $(this).next().text('请输入正确的手机号').removeClass('state1').addClass('icon-remove-sign state3');
    }else{
      $(this).next().text('').removeClass().addClass('icon-ok-sign');
      ok1=true;
    }

  });

//验证密码
  $('input[name="pwd"]').focus(function(){
    $(this).next().text('以字母开头的6-18位字符、数字和下划线').removeClass().addClass('state2 icon-exclamation-sign');
  }).blur(function(){
    if($(this).val().search(/^[a-zA-Z]\w{5,17}$/)==-1){
      $(this).next().text('请输入正确的密码格式').removeClass().addClass('icon-remove-sign state3');
    }else{
      $(this).next().text('').removeClass().addClass('icon-ok-sign');
      ok2=true;
    }

  });


//验证邮箱
  $('input[name="mail"]').focus(function(){
    $(this).next().text('请输入注册邮箱').removeClass().addClass('state2 icon-exclamation-sign');
  }).blur(function(){
    if($(this).val().search(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)==-1){
      $(this).next().text('请输入正确的EMAIL格式').removeClass().addClass('icon-remove-sign state3');
    }else{
      $(this).next().text('').removeClass().addClass('icon-ok-sign');
      ok3=true;
    }

  });
// 验证码
  function idCode(){
    var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
    var str = '';
    for(var i = 0 ; i < 4 ; i ++ )
      str += ''+arr[Math.floor(Math.random() * arr.length)];
    return str;
  }
  $('.i_check_in').html(idCode());
  $('.idCode').click(function ( ){
    $('.i_check_in').html(idCode());
  })

//提交按钮,所有验证通过方可提交
  // 手机注册
  $('.submitOne').click(function(){
    if(ok1 && ok2){
      $('.formOne').submit();
    }else{
      return false;
    }
  });

  // 邮箱注册
  $('.submitTwo').click(function(){
    if(ok2 && ok3){
      $('.formTwo').submit();
    }else{
      return false;
    }
  });



  /*切换注册方式*/
  $(".i-reg-top input[type=radio]").change(function () {
    if(this.value==1){
      $(".fromTwo").hide();
      $(".fromOne").show();
    }else{
      $(".fromTwo").show();
      $(".fromOne").hide();
    }
  });
})
