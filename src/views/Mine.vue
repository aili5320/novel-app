<template>
  <div class="center">
    <div class="title">
      <div class="ico-til">
        <van-icon name="setting-o" />
        <van-icon name="scan" />
      </div>
      <div class="user-info">
        <div class="imgbox">
          <img src="@/assets/logo.png" alt="" />
        </div>
        <router-link to="/login">
          <div class="user">
            <span class="username">登录/注册</span>
            <span class="tip">新用户登录全站免费看</span>
          </div>
          <div class="login-ioc">
            <van-icon name="arrow" />
          </div>
        </router-link>
      </div>
    </div>
    <div class="note">
      <div>
        <span>0</span>
        <span class="min">推荐票 ></span>
      </div>
      <div>
        <span>0</span>
        <span class="min">月票 ></span>
      </div>
      <div>
        <span>0</span>
        <span class="min">幻想币 ></span>
      </div>
      <div class="recharge">
        <span>充值</span>
      </div>
    </div>
    <div class="message">
      <div>
        <div class="ioc-img">
          <img src="@/assets/images/新消息.png" alt="" />
        </div>
        <span>我的消息</span>
      </div>
      <div>
        <div class="ioc-img">
          <img src="@/assets/images/收藏.png" />
        </div>
        <span>我的收藏</span>
      </div>
      <div>
        <div class="ioc-img">
          <img src="@/assets/images/群蜂操作记录.png" alt="" />
        </div>
        <span>阅读记录</span>
      </div>
      <div>
        <div class="ioc-img">
          <img src="@/assets/images/账户资产.png" />
        </div>
        <span>我的账户</span>
      </div>
    </div>

    <div class="panel">
      <div class="sitg"></div>
      <div>
        <van-icon name="edit" />
        <span>我要写书</span>
        <span class="tip"> > </span>
        <span class="tip tex">成为幻想作家 </span>
      </div>
      <div>
        <van-icon name="gift-o" />
        <span>礼品中心</span>
        <span class="tip"> > </span>
      </div>
      <div>
        <van-icon name="medal-o" />
        <span>幻想积分</span>
        <span class="tip"> > </span>
      </div>
      <div>
        <van-icon name="question-o" />
        <span>帮助反馈</span>
        <span class="tip"> > </span>
      </div>
      <div>
        <van-icon name="info-o" />
        <span>关于我们</span>
        <span class="tip"> > </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Mine",
};
</script>

<style lang="less" scoped>
.center {
  background-color: #f5f7f9;
  min-height: 40rem;
  .title {
    width: 100%;
    height: 4rem;
    background-image: linear-gradient(to right, #fbf1f7, #f1f7fa);
    .ico-til {
      height: 1rem;
      i {
        margin: 1rem 0.5rem 1rem 0.5rem;
        float: right;
        font-size: 9px;
        font-weight: 700;
      }
    }
    .user-info {
      width: 95%;
      height: 4rem;
      margin: 0.5rem auto;
      .imgbox {
        height: 2rem;
        width: 2rem;
        float: left;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid #fdfcfd;
        background-color: #dfe1e3;
        img {
          height: 100%;
        }
      }
      .user {
        float: left;
        margin-left: 0.5rem;
        .username {
          display: block;
          font-size: 14px;
          font-weight: 700;
        }
        .tip {
          font-size: 8px;
          color: #9c9d9f;
        }
      }
      .login-ioc {
        float: right;
        margin-top: 1rem;
        margin-right: -2rem;
        font-size: 10px;
      }
    }
  }
  .note {
    margin: 0.5rem auto;
    height: 3rem;
    width: 95%;
    border-radius: 0.5rem;
    background-color: #ffffff;
    display: flex;
    div {
      flex: 1;
      float: left;
      margin: 0.5rem;
      span {
        display: block;
        font-size: 10px;
        font-weight: 700;
      }
      .min {
        margin-top: 0.5rem;
        font-weight: 300;
        font-size: 8px;
        color: #b0b3ba;
      }
    }
    .recharge {
      margin-top: 1rem;
      height: 2rem;
      span {
        padding: 0.2rem 0.5rem;
        text-align: center;
        background-color: #e60000;
        border-radius: 1rem;
        font-size: 0.5rem;
        font-weight: 700;
        color: #fff;
      }
    }
  }

  .message {
    margin: 0 auto;
    height: 4rem;
    width: 95%;
    border-radius: 0.5rem;
    background-color: #ffffff;
    display: flex;
    div {
      flex: 1;
      margin: 0.5rem 0.5rem 0 0.5rem;
      .ioc-img {
        width: 1.2rem;
        height: 1.2rem;
        img {
          height: 100%;
        }
      }
      span {
        font-size: 10px;
        color: #8d8e91;
      }
    }
  }
  .panel {
    margin: 1rem auto;
    height: 12rem;
    width: 95%;
    display: block;
    border-radius: 0.5rem;
    background-color: #ffffff;
    .sitg {
      height: 0.1rem;
    }
    div {
      margin: 1rem;
      display: block;
      span {
        font-size: 10px;
        margin-left: 0.5rem;
      }
      .tip {
        float: right;
      }
      .tex {
        color: #d1a276;
      }
    }
  }
}
</style>