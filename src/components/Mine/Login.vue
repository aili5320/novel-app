<template>
  <div class="centent">
    <div class="title">
      <ul>
        <li><van-icon name="arrow-left" @click="back" /></li>
        <li>登录</li>
        <li>短信登录</li>
      </ul>
      <p>新用户登录全站免费看</p>
    </div>
    <div class="login">
        <div class="username">
          <input type="text" v-model="username" maxlength="12" placeholder="请输入用户名" />
          <van-icon name="close" @click="clear" class="clear" v-if="username"/>
        </div>
        <div class="password">
          <input type="password"  maxlength="12" v-model="password" placeholder="请输入密码" />
          <router-link to="/recovery"><span>忘记密码？</span></router-link>
        </div>
        <div class="verify">
          <van-button loading type="primary" />
          <input type="button" value="点击按钮智开始能验证" />
        </div>
        <div class="loginBtn" >
          <input type="button" ref="loginFlag" @click="loginBtn" value="登录" />
        </div>
        <div class="protocol">
          <input type="radio" :checked="checked" />
          <span>我已经阅读并同意</span>
          <router-link to="">《用户协议》</router-link>
          <router-link to="">《隐私政策》</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import { login } from '../../utils/api'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "login",
  data() {
    return {
      checked: false,
      username:"",
      password:"",
      flag:"0"
    };
  },
  methods : {
    clear() {
     this.username=""
    },
    back() {
      this.$router.go(-1)
    },
   async loginBtn() {
      const req = {
       "username" : this.username,
       "password" : this.password
      }
      const result = await login(req)
      console.log(result);
    }
  },
  updated() {
    if (this.username.length>2 && this.password.length>=6) {
      this.$refs.loginFlag.style.background='red'
      this.flag ='1'
    }else {
      this.$refs.loginFlag.style.background='#d8d8d8'
      this.flag ='0'
    }
  }
};
</script>

<style lang="less" scoped>
.centent {
  background-color: #f5f7f9;
  .title {
    width: 100%;
    height: 8rem;
    background-image: linear-gradient(to right, #fbf1f7, #f1f7fa);
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
      li:nth-child(2) {
        text-align: center;
        font-weight: 700;
      }
      li:last-child {
        text-align: right;
        margin-right: 1rem;
        font-size: 0.5rem;
        color: #ccc;
      }
    }
    p {
      margin-top: 4rem;
      text-align: center;
      letter-spacing: 0.1rem;
      font-weight: 700;
      font-family: "STCaiyun";
    }
  }
  .login {
    width: 75%;
    margin: 1rem auto;
    
    input {
      border: 0px;
      background-color: #f5f7f9;
    }
    input::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #ababab;
      font-size: 0.77rem;
    }
    .username {
       position: relative;
       .clear {
          position: absolute;
          color: #ccc;
          font-size: .8rem;
          font-weight: 700;
       }
    }
    .password {
       input {
        width: 70%;
       }
       span {
        width: 30%;
        font-size: .5rem;
        color: #9e9fa2;
       }
    }
    .username,
    .password {
      margin: 1.5rem 1.5rem 0 0;
    }
    .verify {
      height: 2rem;
      width: 70%;
      text-align: center;
      line-height: 2rem;
      margin: 1.5rem auto;
      font-size: 0.5rem;
      // border: 1px solid #fff;
      box-shadow: 1px 1px 1px 1px #ccc;
      border-radius: 0.2rem;
      .van-button {
        float: left;
        height: 100%;
        border-radius: 0.2rem;
      }
      input {
        float: left;
        height: 100%;
      }
    }
    .loginBtn {
      height: 2rem;
      width: 100%;
      text-align: center;
      input {
        color: #fff;
        display: block;
        letter-spacing: 0.5rem;
        height: 2rem;
        width: 100%;
        border-radius: 1rem;
        background-color: #d8d8d8;
      }
    }
    .protocol {
      margin-top: 1rem;
      font-size: 0.5rem;
      span {
        color: #ccc;
      }
      a {
        color: #111;
      }
    }
  }
}
</style>