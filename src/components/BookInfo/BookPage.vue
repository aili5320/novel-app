<template>
  <div class="body">
    <div class="com"></div>
    <div class="centent">
         <p class="bookNmae">纵横宋朝</p>
         <p class="author">宋魂</p>
         <div class="logo">
           <div class="logoBox">
              <img src="@/assets/images/logo.jpg" alt="">
           </div>
           <p>-本书由幻想文学发行-</p>
           <p>版权所有·侵权必究</p>
         </div>
    </div>
  </div>
</template>

<script>
export default {
   name:'BookPage.vue'
}
</script>

<style lang="less" scoped>
   .body {
    width: 100%;
    height: 40rem;
    background-color: #f6f6f6;
    .com {
      height: .2rem;
      width: 100%;
    }
    .centent{
      margin: .5rem auto;
      width: 95%;
      height: 95%;
      border-radius: .4rem;
      background-color: #fcfcfc;
      .bookNmae {
        text-align: center;
        font-size: 1rem;
        padding-top: 30%;
        font-weight: 500;
        letter-spacing: 0.2rem;
      }
      .author {
        margin-top: 1rem;
        text-align: center;
      }
      .logo {
        .logoBox {
          margin: 12rem auto;
          margin-bottom: .1rem;
          height: 4rem;
          width: 3rem;
        }
        p {
          text-align: center;
          color: #bab6bd;
          font-size: 0.5rem;
        }
      }
    }
   }
</style>