<template>
  <div>
    <div class="w1200 clearfix">
      <p class="tipc">
        <a href=""><img src="../assets/images/icons/tpic1.png" alt=""> 智慧教学</a>
      </p>
      <div class="sort5 clearfix m15">
        <a class="sort-container mr17" href="#">
          <img src="../assets/images/indexmain/sort1.jpg" alt="">
          <p class="sort-modal">课件 10001</p>
        </a>
        <a class="sort-container mr17" href="#">
          <img src="../assets/images/indexmain/sort2.jpg" alt="">
          <p class="sort-modal">试题 20950</p>
        </a>
        <a class="sort-container mr17" href="#">
          <img src="../assets/images/indexmain/sort3.jpg" alt="">
          <p class="sort-modal">微课 5905</p>
        </a>
        <a class="sort-container mr17" href="#">
          <img src="../assets/images/indexmain/sort4.jpg" alt="">
          <p class="sort-modal">资源 10001</p>
        </a>
        <a class="sort-container" href="#">
          <img src="../assets/images/indexmain/sort5.jpg" alt="">
          <p class="sort-modal">拓展研读 10001</p>
        </a>
      </div>
      <div class="sort-detail">
        <div class="sort-detail-title">
          <a href="#">
            <i class="fa fa-caret-square-o-up"></i>微课推荐
          </a>
          <ul>
              <li><a href="#">语文</a></li>
              <li><a href="#">数学</a></li>
              <li><a href="#">英语</a></li>
              <li><a href="#">物理</a></li>
              <li><a href="#">化学</a></li>
              <li><a href="#">历史</a></li>
              <li><a href="#">地理</a></li>
              <li><a href="#">政治</a></li>
              <li><a href="#">生物</a></li>
              <li><a href="#">化学</a></li>
              <li><a href="#">更多学科</a></li>
            </ul>
          <a href="#" class="btn btn-default pull-right">MORE >></a>
        </div>
        <div class="sort-detail-content clr clearfix">
          <div class="detail-wk" href="#">
            <a href="#">
              <img src="../assets/images/indexmain/wk1.png" alt="">
            </a>
            <p><a href="#" title="名师齐聚-2018高考新大纲深度解读">名师齐聚-2018高考新大纲深度解读</a></p>
          </div>
          <div class="detail-wk" href="#">
            <a href="#">
              <img src="../assets/images/indexmain/wk2.png" alt="">
            </a>
            <p><a href="#" title="名师齐聚-2018高考新大纲深度解读">名师齐聚-2018高考新大纲深度解读</a></p>
          </div>
          <div class="detail-wk" href="#">
            <a href="#">
              <img src="../assets/images/indexmain/wk3.png" alt="">
            </a>
            <p><a href="#" title="名师齐聚-2018高考新大纲深度解读">名师齐聚-2018高考新大纲深度解读</a></p>
          </div>
          <div class="detail-wk" href="#">
            <a href="#">
              <img src="../assets/images/indexmain/wk4.png" alt="">
            </a>
            <p><a href="#" title="名师齐聚-2018高考新大纲深度解读">名师齐聚-2018高考新大纲深度解读</a></p>
          </div>
          <div class="detail-wk" href="#">
            <a href="#">
              <img src="../assets/images/indexmain/wk5.png" alt="">
            </a>
            <p><a href="#" title="名师齐聚-2018高考新大纲深度解读">名师齐聚-2018高考新大纲深度解读</a></p>
          </div>
          <div class="detail-wk" href="#">
            <a href="#">
              <img src="../assets/images/indexmain/wk5.png" alt="">
            </a>
            <p><a href="#" title="名师齐聚-2018高考新大纲深度解读">名师齐聚-2018高考新大纲深度解读</a></p>
          </div>
          <div class="detail-wk" href="#">
            <a href="#">
              <img src="../assets/images/indexmain/wk4.png" alt="">
            </a>
            <p><a href="#" title="名师齐聚-2018高考新大纲深度解读">名师齐聚-2018高考新大纲深度解读</a></p>
          </div>
          <div class="detail-wk" href="#">
            <a href="#">
              <img src="../assets/images/indexmain/wk3.png" alt="">
            </a>
            <p><a href="#" title="名师齐聚-2018高考新大纲深度解读">名师齐聚-2018高考新大纲深度解读</a></p>
          </div>
          <div class="detail-wk" href="#">
            <a href="#">
              <img src="../assets/images/indexmain/wk2.png" alt="">
            </a>
            <p><a href="#" title="名师齐聚-2018高考新大纲深度解读">名师齐聚-2018高考新大纲深度解读</a></p>
          </div>
          <div class="detail-wk" href="#">
            <a href="#">
              <img src="../assets/images/indexmain/wk1.png" alt="">
            </a>
            <p><a href="#" title="名师齐聚-2018高考新大纲深度解读">名师齐聚-2018高考新大纲深度解读</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: '',
		components: {}
	}
</script>

<style scoped>
  .tipc a{
    display: inline-block;
    height:60px;
    line-height: 60px;
  }
  .sort5{

  }
  .sort-container{
    width:220px;
    height:120px;
    float:left;
    position: relative;
  }
  .sort-container:hover .sort-modal{
    color:#ff5600;
    font-weight: bold;
    background: rgba(255,255,255,.7);
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -ms-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;}
  .sort-container .sort-modal{
    position: absolute;
    top:50%;
    left:0;
    width:220px;
    height:50px;
    background: rgba(7,17,27,.4);
    transform: translate(0,-50%);
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
  }
  .sort-container img{width:220px;height:120px;border-radius: 5px;}
  .sort-detail{
    border:1px solid #ddd;
    padding:10px 20px 15px;
    overflow: hidden;
  }
  .sort-detail .sort-detail-title>a:first-child{
    font-size:16px;
    float:left;
    height:40px;
    line-height: 40px;
  }
  .sort-detail .sort-detail-title>ul{
    margin-left:30px;
    float: left;
    height:40px;
  }
  .sort-detail .sort-detail-title>ul li{
    margin-top:10px;
    float:left;
    height: 20px;
    padding-right:10px;
    padding-left:10px;
    border-right: 1px solid #ddd;
  }
  .sort-detail .sort-detail-title>ul li:last-child{
    border:none;
  }
  .sort-detail .sort-detail-title>ul li a{
    font-size:16px;
  }
  .sort-detail .sort-detail-title>a i{
    color:#357ebd;
    font-size:25px;
    margin-right:15px;
    vertical-align: middle;
  }
  .sort-detail .sort-detail-content .detail-wk{
    width:210px;
    float:left;
    border:1px solid #ddd;
    margin: 7px;
    box-sizing: border-box;
  }
  .sort-detail .sort-detail-content .detail-wk a{display: block}
  .sort-detail .sort-detail-content .detail-wk img{
    width:100%;
    height:115px;
  }
  .sort-detail .sort-detail-content .detail-wk p{
    margin-top:5px;
  }
  .sort-detail .sort-detail-content .detail-wk p a{
    width:200px;
    text-align: center;
    overflow:hidden;
    text-overflow:ellipsis;
    -o-text-overflow:ellipsis;
    -webkit-text-overflow:ellipsis;
    -moz-text-overflow:ellipsis;
    white-space:nowrap;
  }
  .mr17{margin-right: 17px;}
  .m15{margin:15px 0;}
</style>
