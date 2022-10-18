<template>
  <div>
    <van-tabbar  
    v-model="active"
    @change="onChange"
    inactive-color="#c5c4c4"
    active-color="#f32a0a"
    route
    >
      <van-tabbar-item icon="description" name="books" to="/books">
        书架
      </van-tabbar-item>
      <van-tabbar-item icon="wap-home-o" to="/bookcity">
        书城
      </van-tabbar-item>

      <van-tabbar-item to="/">
        <van-icon class="logobar" size="40" name="http://static.zongheng.com/upload//cover/2017/05/1496234539057.JPG" />
			</van-tabbar-item>
      
      <van-tabbar-item icon="thumb-circle-o" to="/friends" name="friends" :badge="num">
        圈子
      </van-tabbar-item>
      <van-tabbar-item icon="contact" to="/mine" >
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name:'TabBar',
  data() {
    return {
      active: "1",
      num: "200",
    };
  },
  methods: {
    onChange() {
      if (this.active == "friends") return (this.num = "");
    },
  },

}
</script>

<style lang="less" scoped>
   
.logobar {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  margin-top: -1rem;
  z-index: 999;
  .van-icon__image {
    width: 100%;
    height: 135%;
  } 
}
</style>