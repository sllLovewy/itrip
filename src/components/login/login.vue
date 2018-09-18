<template>
  <div class="app">
    <!--头部logo区域-->
    <header>
      <img src="../../common/mui/images/login/i-LOGO-02-01.png" alt="">
    </header>
    <!--中间内容区域-->
    <div class="login-body">
        <section >
          <div class="left-phone">
            <img src="../../common/mui/images/login/left-phone.png" alt="">
          </div>
          <div>
            <div class="left-message">
              <span>使用</span>
              <img src="../../common/mui/images/login/i-LOGO-02-01.png" alt="">
              <span>客户端</span><br/>
              <span>手机扫描安全登录</span>
            </div>
            <div class="right-message">
              <span>1. 打开手机i旅行客户端并登录i旅行账号</span><br/>
              <span>2. 在i旅行登录页点击右上角扫码安全登录</span><br/>
              <span>3. 使用i旅行客户端左上角扫描功能完成登录</span><br/>
            </div>
          </div>
        </section>
        <aside>
          <div class="login-header">
            <div>
              <span>会员登录</span>
              &nbsp;&nbsp;&nbsp;
              <a href="">立即注册</a><br/>
              <span>,享积分换礼、返现等专属优惠！</span>
            </div>
            <span class="right-erweima">
              <img src="../../common/mui/images/login/erweima.png">
            </span>
          </div>
          <div class="login-body">
            <div id="staticOption">
              <form class="form-horizontal" id="form">
                <div class="form-group col-sm-12 margin-bt-30 ">
                  <div class="controls" id="selectShowType">
                    <label class="radio inline">
                      <input type="radio"  class="ie-input-button margin-left-79" value="1" name="group" checked>普通登录
                    </label>
                    <label class="radio inline">
                      <input type="radio" class="ie-input-button" value="2" name="group">手机动态密码登录
                    </label>
                  </div>
                </div>
                <div class="input-group input-group-lg">
                  <span class="mui-icon mui-icon-contact"></span>
                  <input type="text" class="form-control" placeholder="请输入注册手机/注册邮箱"  aria-describedby="btnGroupAddon" id="username">
                </div>
                <div class="input-group  input-group-lg">
                  <span class="mui-icon mui-icon-locked"></span>
                  <input type="text" class="form-control" placeholder="请输入密码" aria-describedby="btnGroupAddon" id="password">
                </div>
                <div id="actionPass" class="form-group  margin-left-100" style="display: none">
                  <div class="controls" style="">
                    <button class="btn btn-warning form-control">获取验证码</button>
                  </div>
                </div>
                <div id="staticPass" class="form-group" style="">
                  <div class="controls input-group-lg">
                    <input type="text" class="form-control ie-input" placeholder="验证码" id="loginCode">
                    <p class="help-block"></p>
                  </div>
                  <div class="controls">
                    <img src="../../common/mui/images/login/yanzhengma.png">
                  </div>
                    <span style="">换一张</span>
                </div>
                <div class="form-group margin-left-100">
                  <div class="controls">
                    <label class="checkbox inline">
                      <input type="checkbox" class="ie-input-button" value="30天内自动登录">
                      30天内自动登录
                    </label>
                  </div>
                  <div class="controls ">
                    <label class="checkbox inline">忘记密码?</label>
                  </div>
                </div>
                <div class="form-group margin-left-100"  id="showErrorMessage" style="display: none">
                  <div class="controls  col-sm-9">
                    <label class="checkbox inline show-message">
                      <i class="icon-exclamation-sign"></i>&nbsp;&nbsp;
                      <div id="promptMessage" style="display: inline-block;">请输入注册手机或邮箱</div>
                    </label>
                  </div>
                </div>
                <button class="btn btn-danger" id="login">登录</button>
              </form>
            </div>
            <div id="actionOption" style="display: none">
              <img src="../../common/mui/images/login/phone-erwema.png" class="">
              <img src="../../common/mui/images/login/richScan.png" class="">
              <img src="../../common/mui/images/login/erweima_1126.jpg" class="">
            </div>
          </div>
          <div class="login-footer">
            <div class="footer-message"> 您也可以用合作网站的帐号登录去i旅行网</div>
            <div class="footer-label" >
              <a><img src="../../common/mui/images/login/icon-sina.png">新浪微博</a>
              <a><img src="../../common/mui/images/login/icon-QQ.png">QQ</a>
              <a><img src="../../common/mui/images/login/icon-Wechat.png">微信</a>
              <a><img src="../../common/mui/images/login/icon-Baidu.png">百度</a>
            </div>
          </div>
        </aside>
    </div>
    <!--尾部区域-->
    <footer style="">
      <div class="i-footer">
        <div class="i-footer-wrap">
          <p>
            Copyright©1999-2016, ctrip.com. All rights reserved. |
            <a href="#">ICP证：沪B2</a>
          </p>
          <p>
            <span class="i-footer-hui"></span>
            沪公网备310105020000xx号
          </p>
          <p>
            旅游违法行为举报电话12318 丨服务质量投诉电话 962020 丨
            <a href="">北京市旅游网站落实诚信建设主体责任承诺书</a>
          </p>
          <ul>
            <li v-for="item in lists" :key="item.id">
              <a><img :src="item.img"></a>
            </li>
           <!-- <li><a href=""><img src="../../common/mui/images/login/icon1126_11.jpg" ></a></li>
            <li><a href=""><img src="../../common/mui/images/login/icon1126_13.jpg"></a></li>
            <li><a href=""><img src="../../common/mui/images/login/icon1126_15.jpg"></a></li>
            <li><a href=""><img src="../../common/mui/images/login/icon1126_17.jpg"></a></li>
            <li><a href=""><img src="../../common/mui/images/login/icon1126_19.jpg"></a></li>
            <li><a href=""><img src="../../common/mui/images/login/icon1126_21.jpg"></a></li>
            <li><a href=""><img src="../../common/mui/images/login/icon1126_23.jpg"></a></li>
            <li><a href=""><img src="../../common/mui/images/login/icon1126_25.jpg"></a></li>
            <li><a href=""><img src="../../common/mui/images/login/icon1126_27.jpg"></a></li>-->
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import Login from '../../api/js/login';
  import Util from '../../api/js/util';
  import Common from '../../api/js/common'
    export default {
      name: "login",
      data(){
          return{
            lists:[]
          }
      },
      created(){
        this._lists()
      },
      methods:{
        _lists(){
          this.lists=[
            {id:1,img:require('../../common/mui/images/login/icon1126_11.jpg')},
            {id:2,img:require('../../common/mui/images/login/icon1126_13.jpg')},
            {id:3,img:require('../../common/mui/images/login/icon1126_15.jpg')},
            {id:4,img:require('../../common/mui/images/login/icon1126_17.jpg')},
            {id:5,img:require('../../common/mui/images/login/icon1126_19.jpg')},
            {id:6,img:require('../../common/mui/images/login/icon1126_11.jpg')},
            {id:7,img:require('../../common/mui/images/login/icon1126_13.jpg')},
            {id:8,img:require('../../common/mui/images/login/icon1126_15.jpg')},
            {id:9,img:require('../../common/mui/images/login/icon1126_17.jpg')},
            ]
        }
      },
      components:{
        Login,
        Util,
        Common
      }

    }
</script>

<style>
  header{
    border-bottom: 1px solid #929292;
    margin: 0 385px;
  }
  header img{
    width: 245px;
    margin-top: -12px;
  }
  .login-header{
    position: relative;
  }
  .login-body{
    margin: 0px;
    display: flex;
    justify-content: center;
  }
  section{
    display: flex;
    margin: 170px 0;
    width: 696px;
    height: 640px;
  }
  .left-phone{
    margin: 0 60px;
  }
  section img{
    width: 249px;
    height: 321px;
  }
 .left-message img{
   vertical-align: middle;
    width: 50px;
    height: 50px;
  }
 .left-message{
   color: blue;
   margin: 50px 0;
 }
 .right-message{
   color: #929292;
 }
  aside{
    background-color: gainsboro;
    width: 560px;
    height: 650px;
  }
  aside .login-header .right-erweima{
    position: absolute;
    top: -40px;
    right: 0px;
  }
  .login-header>div{
    display: flex;
    margin: 40px 20px;
    justify-content: center;
    border-bottom: 1px solid darkgray;
  }
  .input-group{
  display: flex;
}
  .input-group>span{
    padding: 10px 10px;
    border: 1px solid #929292;
  }
  .form-horizontal>.input-group{
    margin: 20px 0;
  }
  .controls {
   display: flex;
    justify-content: space-around;
  }
  label{
    margin-left: 30px;
  }
  .controls img{
    padding: 0px 4px;
    width: 210px;
    height: 48px;
  }
  #staticPass{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

  }
  #actionPass .controls{
    width: 90%;
  }
  #staticPass>.controls:first-child{
    width: 120px;
  }
  #staticPass{
    position: relative;
  }
  #staticPass span{
    position: absolute;
    right: -50px;
  }
 #showErrorMessage .controls{

 }
  aside .login-body .show-message {
    border: 1px solid #ff6633;
    background: #ffffcc;
    font-size: 12px;
    font-family: 微软雅黑;
    padding-left: 10px;
    width: 320px;
    height: 30px;
    line-height: 30px;
    margin-left: 0PX;
  }
  #promptMessage{
    color: red;
  }
  /*label {
    margin-left: 0px;
  }*/
  .form-horizontal .form-group{
    display: flex;
    justify-content: space-around;
  }
  .btn-warning {
    color: #fff;
    background-color: #f0ad4e;
    border-color: #eea236;
  }
  button{
    width: 300px;
    margin: 0 20px;
  }
  .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
  }
  .login-footer{
    border-top:1px solid #cccccc;
    margin: 50px 0px;
    color: blue;
  }
  footer{
    border-top: 1px solid grey;
    margin: -330px 385px;
  }
  .login-footer .footer-message{
    margin: 15px 20px;
    font-size: 12px;

  }
  .login-footer .footer-label{
    display: flex;
    justify-content: center;
  }
  .login-footer .footer-label img{
    width: 25px;
    margin: 0px 10px;
    vertical-align: middle;
  }
  .i-footer{
    display: flex;
  }
  .i-footer .i-footer-wrap{
    margin: 30px 0;
  }
  .i-footer .i-footer-wrap p{
    text-align: center;
    margin: 0px 290px;
  }
  .i-footer-wrap ul{
    margin: 30px 0px;
    display: flex;
    list-style: none;
  justify-content: space-around;
  }
  .i-footer-wrap ul li{
    border: 1px solid #cccccc;
  }

</style>
