<template>
  <div class="body">
    <div class="title">
      <ul>
        <li><van-icon name="arrow-left" @click="back" /></li>
        <li>短信登录</li>
      </ul>
    </div>
    <div class="centent">
       <p>重置密码</p>
       <div class="password">
        <input type="password" v-model="password" maxlength="16" placeholder="请输入新密码(6-16位数字、字母)">
        <van-icon name="closed-eye"  />
        <!-- <van-icon name="eye-o" v-if="!iocFlag1" /> -->
      </div>
       <div class="cmpassword">
        <input type="password" v-model="newPsw" maxlength="16"  placeholder="请再次输入新密码(6-16位数字、字母)">
        <!-- <van-icon name="closed-eye" />
        <van-icon name="eye-o"  /> -->
      </div>
       <div class="tip" v-if="tipFlag">
        <span>确认密码不能为空</span>
       </div>
       <div class="commit">
        <button class="commitBtn" ref="nestFlag">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name:'ChangePsw',
   data() {
    return {
      password:"",
      newPsw:"",
      tipFlag:false
      // iocFlag1:true,
    }
   },
   methods :{
    back() { 
      this.$router.go(-1)
    },
    // chang1() {
    //   this.iocFlag1==!this.iocFlag1
    // }
   },

   updated() {
    if (this.newPsw == "") {
        this.tipFlag = true
      }

    if (this.password.length>=6 && this.newPsw.length>=6 ) {
      this.$refs.nestFlag.style.background='red'
      this.flag ='1'
    }else {
      this.$refs.nestFlag.style.background='#d8d8d8'
      this.flag ='0'
    }
      
   },
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
      position: relative;
      input {
        width: 100%;
      }
      i {
        font-weight: 700;
        position:absolute;
      }
    }
    .tip {
      margin:.2rem 0 .5rem 2rem;
      font-size: .5rem;
      font-weight: 600;
      color: #e70b0b;
    }
    .commit {
      height: 2rem;
      width: 90%;
      text-align: center;
      .commitBtn {
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