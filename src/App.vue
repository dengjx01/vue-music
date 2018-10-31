<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from '@/components/m-header/m-header'
import Tab from '@/components/Tab/Tab'
export default {
  components: {
    MHeader,
    Tab
  }
}
</script>

<style>

</style>
