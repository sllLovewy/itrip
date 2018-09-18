$(document).ready(function () {
  /*判断输入框是否正确*/
  var showMessage= $("#showErrorMessage");
  var showTips=$("#promptMessage");
  $("#login").click(function () {
    var email=jbit.util.validator.email;
    var mobile=jbit.util.validator.mobile;
    var password=jbit.util.validator.account;
    var name=$("#username").val();
    var pd=$("#password").val();
    var lc=$("#loginCode").val();
    var flag = true;
    function showErrorMess(ms) {
      flag=false;
      showTips.html(ms);
      showMessage.show();
    }
    if(name==""||name==null){
      showErrorMess("用户名不能为空！");
      return;
    }if(pd==""||pd==null){
      showErrorMess("密码不能为空！");
      return;
    }

    if(!(email(name).code||mobile(name).code)){
      showErrorMess("请输入有效的手机号码或邮箱");
      return;

    }
    if(!password(pd).code){
      showErrorMess("请输入正确的密码");
      return;
    }
    var isLc=false;
    $("#selectShowType input[type=radio]").each(function (i, item) {
      if(this.checked){
        if(this.value==1){
          isLc=true;
        }
      }
    });
    if(isLc){
      if(lc==""||lc==null){
        showErrorMess("验证码不能为空！");
        return;
      }
      if(!password(lc).code){
        showErrorMess("请输入正确的验证码");
        return;
      }
    }
    if(flag){
      showMessage.hide();
    }

  });
  /*切换登录方式*/
  $("#selectShowType input[type=radio]").change(function () {
    if(this.value==1){
      $("#actionPass").hide();
      $("#staticPass").show();
    }else{
      $("#actionPass").show();
      $("#staticPass").hide();
    }
  });

})





