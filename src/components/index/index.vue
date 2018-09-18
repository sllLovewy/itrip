<template>
    <div id="app">
      <!--头部区域-->
      <div class="i-top clearfix">
        <div class="i-top-wrap">
          <div class="i-logo fl">
            <a><img src="../../common/mui/images/index/712547455998834941.png" alt="i旅行"></a>
          </div>
          <div class="i-hotline fr">
            <ul>
              <li><a href="">客服中心</a></li>
              <li>|</li>
              <li><a href="">24小时热线：400-855-6666</a></li>
              <li>
                <a href=""><i class="mui-icon mui-icon-chatbubble"></i></a>
                <div  style="display: none" class="i-top-app i-top-appL">
                    <img src="../../common/mui/images/index/erweima_1126.jpg" style="height: 102px; width: 102px" alt="">
                    <p>手机扫码快速下载</p>
                    <p>App享受最多50% 优惠力度</p>
                </div>
              </li>
              <li class="i-top-phone i-top-wei">
                <a href="#"><i class="mui-icon mui-icon-chatbubble"></i></a>
                <div  style="display: none" class="i-top-app i-top-app-wei">
                  <img src="images/img/erweima_1126.jpg" height="102" width="102" alt="">
                  <p>i旅行微信公众号: <a href="#">ilvxing</a></p>
                  <p>手机扫一扫，享受专属福利</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Index from '../../api/js/index'
    export default {
        name: "index",
        data(){
          return{

          }
        },
      created(){},
      methods:{},
      components:{
          Index
      }

    }
</script>

<style>
  .i-top {
    width: 100%;
    height: 60px;
    background: #1448ad;
    display: flex;
    align-items: center;
  }
  .i-top .i-top-wrap {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

  }
  .i-hotline ul{
    display: flex;
    list-style: none;
    border: 1px solid red;
  }
  .i-hotline ul li{
    margin: 0px 5px;
    font-size: 17px;
    color: #ffffff;
  }
  .i-hotline ul li a{
    color: #ffffff;
  }





</style>
