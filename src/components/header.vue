<template>
  <div class="nav-header">
    <div class="nav-bar">
      <a href="http://www.gz2000.net/" class="bar-logo"><img src="../assets/images/logo/logo-grey.png" alt=""></a>
      <ul class="nav-list">
        <li><a href="#" class="actived">首页</a></li>
        <li><a href="#">智慧教学</a></li>
        <li><a href="#">智慧应用</a></li>
        <li><a href="#">社交圈</a></li>
        <li><a href="#">教学大数据</a></li>
      </ul>
      <div class="nav-lend">
        <a href="#" class="btn btn-default"><i class="glyphicon glyphicon-user"></i>登录</a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'nav-header',
    data () {

    }
  }
</script>

<style scoped>
  .nav-header{
    width:100%;
    height:60px;
    background:#fafbfc;
    border:2px solid #eee;
    border-left-color: transparent;
    border-right-color: transparent;
    margin-bottom:3px;
    box-sizing: border-box;
  }
  .nav-header .nav-bar{
    width:1200px;
    margin:0 auto;
    height:60px;
  }
  .nav-header .nav-bar .bar-logo{
    float:left;
    margin-left:15px;
    height:57px;
    line-height: 57px;
    vertical-align: middle;
  }
  .nav-header .nav-bar .nav-list{
    width:720px;
    height:57px;
    float:left;
    margin:0 0 0 80px;
    list-style: none;
  }
  .nav-header .nav-bar .nav-list li{
    float:left;
    box-sizing: border-box;
    width:120px;
    height:57px;
    line-height: 57px;
  }
  .nav-header .nav-bar .nav-list li a{
    display: block;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
  }
  .nav-header .nav-bar .nav-list li a:hover{
    color:#eea236;
    -webkit-transition: color 0.3s linear;
    -moz-transition: color 0.3s linear;
    -ms-transition: color 0.3s linear;
    -o-transition: color 0.3s linear;
    transition: color 0.3s linear;
  }
  .nav-header .nav-bar .nav-list li a.actived{
    border-bottom:3px solid #eea236;
  }
  .nav-header .nav-bar .nav-lend{
    float: right;
    margin-right: 20px;
    height: 57px;
    line-height: 57px;
  }
  .nav-header .nav-bar .nav-lend a{

  }
  .nav-header .nav-bar .nav-lend a i{
    margin-right:5px;
  }
</style>

