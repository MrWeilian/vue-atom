<template>
  <div id="app">
    <navTab></navTab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <vfooter></vfooter>
  </div>
</template>

<script>
import navTab from '../src/components/nav-tab/nav-tab'
import vfooter from '../src/components/vfooter/vfooter'

export default {
  name: 'App',
  components: {
    navTab,
    vfooter
  }
}
</script>

<style lang="less">
  @import './common/less/base-less.less';
  @import './common/less/reset.less';

  #app{
    background-color: @theme-color;
    color: @font-color;
  }
</style>
