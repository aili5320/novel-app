<template>
  <div id="app">
     <TabBar v-if="$route.meta.TabbarShow"></TabBar>
    <router-view/>
  </div>
</template>
<script>
import TabBar from '@/components/TabBar.vue'
export default {
   // eslint-disable-next-line vue/multi-word-component-names
   name:'App',
   components: {
    TabBar
   }
}
</script>

<style lang="less" scoped>
.app {
  height: 100%;
}


</style>
