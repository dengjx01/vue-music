<template>
  <div class="song-list">
    <ul>
      <li @click="selectItem(song,index)" v-for="(song,index) in songs" :key="song.index" class="item">
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{getDesc(song)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songs: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    selectItem(item, index) {
      this.$emit('select', item, index)
    },
    getDesc(song) {
      return `${song.singer}·${song.album}`
    }
  }
}
</script>

<style lang="less" scoped>
@import '~common/less/variable';
@import '~common/less/mixin';

.song-list {
  .item{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 64px;
    font-size: @font-size-medium;
    .rank {
      flex: 0 0 25px;
      width: 25px;
      margin-right: 30px;
      text-align: center;
      .icon {
        display: inline-block;
        width: 25px;
        height: 24px;
        background-size: 25px 24px;
        &.icon0 {
          background-image: url('./first@2x.png');
        }
        &.icon1 {
          background-image: url('./second@2x.png');
        }
        &.icon2 {
          background-image: url('./third@2x.png');
        }
      }
      .text {
        color: @color-theme;
        font-size: @font-size-large;
      }
    }
    .content {
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      .name {
        .no-wrap();
        color: @color-text;
        font-size: @font-size-medium;
      }
      .desc {
        .no-wrap();
        margin-top: 4px;
        color: @color-text-d;
        font-size: @font-size-medium;
      }
    }
  }
}
</style>
