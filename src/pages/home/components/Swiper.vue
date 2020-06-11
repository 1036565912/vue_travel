<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in slideList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination', // 设置轮播图中的小圆点
        loop: true, // 设置可以循环跳转
        autoplay: 3000 // 设置自动播放
      },
      slideList: [
        {
          id: 1,
          imgUrl: 'https://www.chenlin.site/jpg/banner_1.jpg'
        },
        {
          id: 2,
          imgUrl: 'https://www.chenlin.site/jpg/banner_2.jpg'
        },
        {
          id: 3,
          imgUrl: 'https://www.chenlin.site/jpg/banner_3.jpg'
        },
        {
          id: 4,
          imgUrl: 'https://www.chenlin.site/jpg/banner_4.jpg'
        }
      ]
    }
  }
}
</script>

<style lang= "stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff;
  .wrapper
    width: 100%;
    height: 0;
    overflow: hidden;
    background-color: #eee;
    padding-bottom: 40%;
    .swiper-img
      width: 100%;
      height: 3rem;
</style>
