<template>
  <div id="app">
    <nav-header></nav-header>
    <slider></slider>
    <indexMain></indexMain>
  </div>
</template>

<script>
  import './assets/css/bootstrap.min.css'
  import './assets/css/fontawesome-all.min.css'
  import './assets/css/common.css'
  import './assets/js/bootstrap.min.js'
  import header from './components/header'
  import slider from './components/slider'
  import indexMain from './components/index-main'

export default {
  name: 'app',
  components: {
    navHeader:header,
    slider:slider,
    indexMain:indexMain
  }
}

</script>

<style>

</style>
