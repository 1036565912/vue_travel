<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class ='icon-imgcontent' :src="item.imgUrl" />
          </div>
          <p class="icon-text">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOptions: {
        //  设置轮播图中的小圆点
        pagination: '.swiper-pagination'
      },
      iconList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          desc: '动植物园'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
          desc: '天门山公园'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc: '张家界公园'
        },
        {
          id: '006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
          desc: '必看演出'
        },
        {
          id: '007',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/91a810441506568937171df66f754375.png',
          desc: '红石林'
        },
        {
          id: '008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
          desc: '凤凰古城'
        },
        {
          id: '009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
          desc: '凤凰古城'
        }
      ]
    }
  },
  computed: {
    // 计算属性,自带缓存,只有当数据发生更改的时候,才会重新计算
    pages () {
      const pages = []
      const pageSize = 8
      this.iconList.forEach((item, index) => {
        // 这里必须使用箭头函数 否则this的作用域就会发生更改
        const page = Math.floor(index / pageSize)
        // 这里判断是第几页 如果当前的元素处于不存在的页面 则需要先创建该页面
        if (!pages[page]) {
          pages[page] = []
        }
        // 把元素放在对应的页面上
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang= 'stylus' scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixin.styl'
  .icons  >>> .swiper-container
      width: 100%;
      height: 0;
      padding-bottom: 50%;
  .icon
    position: relative;
    width: 25%;
    height: 0;
    float: left;
    padding-bottom: 25%;
    .icon-img
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      .icon-imgcontent
        height: 100%;
        display: block;
        margin: 0 auto;
    .icon-text
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      font-size: $barTextColor;
      singleRow()
</style>
