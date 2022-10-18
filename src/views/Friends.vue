<template>
  <div>
    <div class="body">
    <div class="title">
      <div class="tab">
        <van-tabs
          v-model="active"
          animated
          background="transparent"
          line-height="4px"
          swipeable
          shrink="true"
        >
          <van-tab title="关注" name="focus">
            <Focus></Focus>
          </van-tab>
          <van-tab title="发现" name="find">
            <Find></Find>
          </van-tab>
          <van-tab title="活动"  name="events">
            <Events></Events>
          </van-tab>
          <van-tab title="">

          </van-tab>
        </van-tabs>
      </div>
      <div class="search">
        <van-icon name="search" />
      </div>
    </div>
    
  </div>
  </div>
</template>

<script>
import Find from '@/components/Friends/Find.vue'
import Focus from '@/components/Friends/Focus.vue'
import Events from '@/components/Friends/Events.vue'
export default {
   // eslint-disable-next-line vue/multi-word-component-names
   name:'Friends',
   data() {
    return {
      active: "find",
    };
  },
  components : {
    Find,Focus,Events
  }
}
</script>

<style lang="less" scoped>
   .body {
  background-color: #f5f7f9;
  min-height: 38rem;
}
.title {
  padding-top: 1rem;
  height: 8rem;
  position: relative;
  .van-tabs__nav--line {
    box-sizing: content-box;
    height: 100%;
    padding-bottom: 10px;
  }
  .tab {
    //  .van-tabs {
    //   width: 60%;
    // }
    /deep/ .van-tab--active {
      color: #323233;
      font-weight: 700;
      font-size: 20px;
    }
  }
  .search {
    position: absolute;
    right: .5rem;
    top: 1.5rem;
    height: 1rem;
    width: 3rem;
    border-radius: 1rem;
    text-align: right;
    font-size: 1rem;
  }
}


</style>