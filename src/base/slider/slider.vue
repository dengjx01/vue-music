<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {addClass} from 'common/js/dom'
export default {
  props: {
    // 是否循环播放
    loop: {
      type: Boolean,
      default: true
    },
    // 是否自动播放
    autoPlay: {
      type: Boolean,
      default: true
    },
    // 轮播延时
    interval: {
      type: Number,
      default: 4000
    }
  },
  mounted() {
    setTimeout(() => {
      this._setSliderWidth()
      this._initSlider()
    }, 20)
  },
  methods: {
    // 轮播图(sliderGroup)宽度
    _setSliderWidth() {
      // 拿到传过来的图片
      this.children = this.$refs.sliderGroup.children

      // 拿到父元素（slider）宽度
      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      // 动态添加 class、width
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item')

        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }

      if (this.loop) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400,
        click: true
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '~common/less/variable';
@import '~common/less/mixin';
  .slider{
    min-height: 1px;
    .slider-group{
      position: relative;
      overflow: hidden;
      white-space: nowrap;
      .slider-item{
        float: left;
        box-sizing: border-box;
        overflow: hidden;
        text-align: center;
        a{
          display: block;
          width: 100%;
          overflow: hidden;
          text-decoration: none;
        }
        img{
          display: block;
          width: 100%;
        }
      }
    }
    .dots{
      position: absolute;
      right: 0;
      left: 0;
      bottom: 12px;
      text-align: center;
      font-size: 0;
      .dot{
        display: inline-block;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: @color-text-l;
        &.active{
          width: 20px;
          border-radius: 5px;
          background: @color-text-ll;
        }
      }
    }
  }
</style>
