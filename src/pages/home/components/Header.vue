<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">城市
      <span class="iconfont city_pick">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  /* 在样式中引入样式 需要在前面加一个~ 波浪符号*/
  @import "~styles/variables.styl"
.header
  display: flex
  line-height: 0.84rem
  height: 0.84rem
  background: $bgcolor
  color: #fff
  .header-left
    width: 0.64rem
    .back-icon
      text-align: center
      font-size: 0.35rem
  .header-input
    flex: 1
    border-radius: 0.1rem
    background-color: #fff
    margin-top: 0.12rem
    margin-left: 0.05rem
    height: 0.6rem
    color: #ccc
    line-height 0.6rem
    padding-left: 0.2rem
  .header-right
    width: 1.24rem
    text-align: center
    .city_pick
      margin-left: -0.05rem
      font-size: 0.1rem
</style>
