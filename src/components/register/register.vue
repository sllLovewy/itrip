<template>
  <div id="app">
    <!--头部区域-->
    <header>
      <img src="../../common/mui/images/login/i-LOGO-02-01.png" alt="">
      <div class="login_toolbox">
        <a href="" class="login_username">登录</a>
       <span style="color: #929292">|</span>
        <a href="" class="login_kehu">客服中心</a>
      </div>
    </header>
    <!--主题区域-->
    <section>
      <aside class="i-register-left clearfix">
        <div class="i-reg-top" style="margin:30px 300px">
          <label style="margin: 0px 80px"><input type="radio" name="reg" checked value="1">手机注册</label>
          <label><input type="radio" name="reg" value="2">邮箱注册</label>
        </div>
        <div class="i-reg-bottom cur">
          <form class="fromOne">
            <div class="i_mobile">
              手机号
              <input type="text" name="phone" placeholder="请输入手机号码">
              <span></span>
            </div>
            <div class="i_pwd">
              登录密码
              <input type="password" name="pwd" placeholder="请输入密码">
              <span></span>
            </div>
            <div class="i_check">
              验证码
              <input type="text" placeholder="请输入验证码">
              <span></span>
              <div class="i_check_in">xRNB</div>
              <i class="idCode">换一张</i>
            </div>
            <div class="i_lives">
              激活码
              <input type="text" placeholder="请输入激活码">
              <a href="">获得激活码</a>
            </div>
            <div class="i-reg-check">
              <input type="checkbox" id="i-reg-info" checked>
              <label for="i-reg-info">
                我已经阅读并同意遵守
                <a class="agreement" href="">《i旅行用户服务协议》</a>
              </label>
            </div>
            <div class="i-reg-sub">
              <input class="submitOne" type="submit" value="同意协议并注册">
            </div>
          </form>
        </div>
        <div class="i-reg-bottom">
          <form class="fromTwo" style="display: none;">
            <div class="i_mobile i_email">
              注册邮箱
              <input type="text" name="phone" placeholder="请输入手机号码">
              <span></span>
            </div>
            <div class="i_pwd">
              登录密码
              <input type="password" name="pwd" placeholder="请输入密码">
              <span></span>
            </div>
            <div class="i_check">
              验证码
              <input type="text" placeholder="请输入验证码">
              <span></span>
              <div class="i_check_in">xRNB</div>
              <i class="idCode" >换一张</i>
            </div>
            <div class="i_lives">
              激活码
              <input type="text" placeholder="请输入激活码">
              <a href="">获得激活码</a>
            </div>
            <div class="i-reg-check">
              <input id="i-reg" checked="checked" type="checkbox">
              <label for="i-reg-info">
                我已经阅读并同意遵守
                <a class="agreement" href="">《i旅行用户服务协议》</a>
              </label>
            </div>
            <div class="i-reg-sub">
              <input class="submitTwo" type="submit" value="同意协议并注册">
            </div>
          </form>
        </div>
      </aside>
      <aside class="i-register-right"></aside>
    </section>
    <!--尾部区域-->
    <footer style="border-top: 1px solid grey;margin:10px 215px">
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
  import Register from '../../api/js/register'
    export default {
        name: "register",
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
          Register
        }
    }
</script>

<style>
  header{
    border-bottom: 3px solid darkgray;
    margin: 0 245px;
  }
  header img{
    width: 245px;
    margin-bottom: -45px;
  }
  header .login_toolbox{
    text-align: right;
    font-size: 20px;
  }
  .login_toolbox>a:last-child{
    color: black;
  }
  section{
      display: flex;
      text-align: center;
  }
  .fromOne{
    width: 100%;
    position: relative;
  }
  input[type=text]{
    width: 40%;
    height: 50%;
  }
  .fromOne input{
    text-align: left;
  }
  .fromOne .i_mobile{
    text-indent: 16px;
    line-height: 78px;
  }
  .i_pwd{
    line-height: 78px;
  }
  input[type=password]{
    line-height: 21px;
    width: 40%;
    height: 40px;
    margin-bottom: 15px;
    padding: 10px 15px;
    -webkit-user-select: text;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 3px;
    outline: 0;
    background-color: #fff;
    -webkit-appearance: none;
  }
  .fromOne .i_check{
    line-height: 78px;
    text-indent: 16px;
  }
  .fromOne .i_check input {
    width: 213px;
  }
  .i_check_in{
    border: 1px solid red;
    display: inline-block;
    width: 80px;
    height: 48px;
    line-height: 48px;
    margin-left: 15px;
    vertical-align: -2px;
    color: #000;
    font-weight: bold;
    border: 1px solid #aaa;
    background-color: #eeeeee
  }
  .i_lives{
    line-height: 78px;
    text-indent: 16px;
  }
  .fromOne .i_lives input {
    width: 237px;
  }
  .i_lives>a{
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #fff;
    background-color: #00a0e9;
    margin-left: 20px;
  }
  .i_mail span {
    text-indent: 16px;
  }
  .i-reg-bottom span {
    position: absolute;
    white-space: nowrap;
    font-size: 13px;
  }
  .icon-remove-sign {
    color: red;
  }
  .icon-exclamation-sign{
    color: #ff9261;
  }
  .state3 {
    color: #fa6363;
  }
  .state2 {
    color: #666;
  }
  .fromOne .i_pwd span {
    text-indent: 16px;
  }
  .i-reg-bottom span {
    font-size: 13px;
  }
  .icon-remove-sign {
    color: red;
  }
  .i-reg-check input{
    width: 0;
    height: 0;
  }
  .i-reg-check label{
    color: #cccccc;
    line-height: 35px;
  }
  .fromTwo .i_check{
    line-height: 78px;
    text-indent: 16px;
    width: 50%;
    margin: 0px 213px;
  }
  .fromTwo .i_lives{
    margin: 0px 150px;
  }
  .fromTwo input[type=text] {
     margin-right:15px;
  }
  .fromTwo input[type=password] {
    margin-right:15px;
  }
  .fromTwo span{
    margin-top: 5px;
  }
  .i-reg-sub input {
    width: 280px;
    height: 60px;
    line-height: 32px;
    margin: 20px 0 0 80px;
    background-color: #f19149;
    border: 4px solid #f6b686;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    text-align: center;
  }
  .i-register-right {
    text-align: right;
    width: 393px;
    height: 590px;
    margin-right: 15px;
    background: url(../../common/mui/images/register/register393590_xxx1205_03.jpg) no-repeat;
  }
  section{
    display: flex;
    justify-content: space-around;
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
