<template>
  <div class="slider-container" id="slider">
    <a href="javascript:void(0);" class="narrow-left"></a>
    <a href="javascript:void(0);" class="narrow-right"></a>
    <div class="slider-content">
      <ul>

      </ul>
    </div>
    <ul class="pagination">

    </ul>
  </div>
</template>

<script>
  import '../assets/css/animate.min.css'
  import '../assets/js/sldier.js'


	export default {
		name: 'slider',
		components: {}
	}

  $(function(){
    $("#slider").slider_banner([
      {"i":0,"img":require('../assets/images/slider/banner1.png'),"color":"#0CBECD"},
      {"i":1,"img":require('../assets/images/slider/banner2.png'),"color":"#45AAFE"},
      {"i":2,"img":require('../assets/images/slider/banner3.png'),"color":"#405EEF"},
      {"i":3,"img":require('../assets/images/slider/banner4.png'),"color":"#23B780"}
    ]);

  })




</script>

<style>
  .slider-container {
    width: 100%;
    height: 500px;
    background-size: cover;
    position: relative;
  }
  .slider-container:hover .narrow-left,
  .slider-container:hover .narrow-right {
    opacity: 1;
  }
  .slider-container .narrow-left {
    position: absolute;
    top: 50%;
    left: 15px;
    display: block;
    width: 19px;
    height: 30px;
    margin-top: -15px;
    background: url(../assets/images/slider/arrows.png) no-repeat 0 0;
    opacity: 0;
    z-index: 100;
  }
  .slider-container .narrow-right {
    position: absolute;
    top: 50%;
    right: 15px;
    display: block;
    width: 19px;
    height: 30px;
    margin-top: -15px;
    background: url(../assets/images/slider/arrows.png) no-repeat 0px -30px;
    opacity: 0;
    z-index: 100;
  }
  .slider-container .pagination {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
  }
  .slider-container .pagination li {
    width: 10px;
    height: 10px;
    display: inline-block;
    background: #999;
    border-radius: 50%;
    margin-right: 5px;
    cursor: pointer;
  }
  .slider-container .pagination li.actived {
    background: #fff;
  }
  .slider-container .slider-content {
    width: 1200px;
    margin: 0 auto;
    height: 500px;
    overflow: hidden;
  }
  .slider-container .slider-content ul {
    max-width: 1200px;
    height: 500px;
    position: relative;
  }
  .slider-container .slider-content ul li {
    width: 1200px;
    height: 500px;
    float: left;
    z-index: 0;
  }
 .slider-container .slider-content ul li img {
    width: 100%;
    height: 100%;
  }

</style>
