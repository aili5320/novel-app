<template>
  <div class="body">
    <div class="title">
      <ul>
        <li><van-icon name="arrow-left" @click="back" /></li>
        <li>短信登录</li>
      </ul>
    </div>
    <div class="centent">
      <p>找回密码</p>
      <div class="phone">
          <input type="text" maxlength="11" v-model="phone" placeholder="请输入手机号">
      </div>
      <div class="verify">
          <input type="text" maxlength="6" v-model="verify" placeholder="请输入图片验证码">
          <div class="verifyImg">
            <img src="@/assets/images/updpassimg.png">
          </div>
      </div>
      <div class="note">
        <input type="text" v-model="note" maxlength="6" placeholder="请输入短信验证">
        <input type="button" class="getNote" value="获取短信验证">
      </div>
      <van-divider />
      <div class="nest">
        <router-link to="/changePsw">
        <button class="nestBtn" ref="nestFlag">下一步</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   // eslint-disable-next-line vue/multi-word-component-names
   name:'Recovery',
   data(){
     return {
      flag:'',
      phone:'',
      verify:'',
      note:''
     }
   },
   methods: {
    back() {
      this.$router.go(-1)
    }
   },
   updated() {
    if (this.phone.length==11 && this.verify.length==6 && this.note.length ==6) {
      this.$refs.nestFlag.style.background='red'
      this.flag ='1'
    }else {
      this.$refs.nestFlag.style.background='#d8d8d8'
      this.flag ='0'
    }
  }
}
</script>

<style lang="less" scoped>
 .body {
  .title {
    width: 100%;
    height: 8rem;
    ul {
      padding-top: 1rem;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      li {
        flex: 1;
        font-size: 0.8rem;
      }
      li:first-child {
        margin-left: 1rem;
        font-weight: 700;
      }
      li:last-child {
        text-align: right;
        margin-right: 1rem;
        font-size: 0.5rem;
        color: #ccc;
      }
    }
  }
  .centent {
    width: 80%;
    height: 10rem;
    display: flex;
    flex-flow: column nowrap;
    p {
      margin-left: 2rem;
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    div {
      flex: 1;
      margin: 1rem 0 1rem 2rem;
    }
    .verify {
      position: relative;
      div {
        position:absolute;
        height: 2rem;
        top: -35px;
        right: 0;
        img {
          height: 100%;
        }
      }
    }
    .note {
      // border-bottom: 1px solid #ccc; 
      .getNote {
        background-color: #fff;
      }
    }
    .nest {
      height: 2rem;
      width: 90%;
      text-align: center;
      .nestBtn {
        color: #fff;
        display: block;
        font-weight: 600;
        letter-spacing: 0.2rem;
        height: 2rem;
        width: 100%;
        border-radius: 1rem;
        background-color: #d8d8d8;
      }
    }

  }
 } 
 

</style>