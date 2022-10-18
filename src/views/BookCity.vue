<template>
  <div class="body">
    <div class="title">
      <div class="tab">
        <van-tabs
          v-model="active"
          animated
          background="transparent"
          line-height="5px"
          swipeable
          shrink="true"
        >
          <van-tab title="精选" name="competitive">
            <Competitive></Competitive>
          </van-tab>
          <van-tab title="男生" name="boy">
            <Boy></Boy>
          </van-tab>
          <van-tab title="女生" name="girls">
            <Girls></Girls>
          </van-tab>
          <van-tab title="免费">内容 4</van-tab>
        </van-tabs>
      </div>
      <div class="search">
        <van-icon name="search" />
        <span>搜索</span>
      </div>
    </div>
  </div>
</template>

<script>
import Competitive from '@/components/BookCity/Competitive.vue'
import Boy from '@/components/BookCity/Boy'
import Girls from '@/components/BookCity/Girls.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "BookCity",
  data() {
    return {
      active: "competitive",
    };
  },
  methods: {},
  components:{
    Competitive,Boy,Girls
  }
};
</script>

<style lang="less" scoped>
.body {
  min-height: 38rem;
  background-image: linear-gradient(to right, #faf0f3, #f1f7fc);
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
    right: 1rem;
    top: 1.5rem;
    border: 1px solid #fff;
    height: 1rem;
    width: 3rem;
    border-radius: 1rem;
    text-align: center;
    background-color: #ffffff;
    i {
      margin-right: .3rem;
    }
  }
}
</style>