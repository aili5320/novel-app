<template>
  <div class="center">
    <div class="title">
      <p>
        <i>幻想小说</i>
      </p>
      <div class="right-til">
        <div class="item-ioc">
          <router-link to=""><van-icon name="search" /></router-link>
          <div class="item-text">搜索</div>
        </div>
        <div class="item-ioc">
          <router-link to=""><van-icon name="underway-o" /></router-link>
          <div class="item-text">历史</div>
        </div>
        <div class="item-ioc">
          <router-link to=""><van-icon name="ellipsis" /></router-link>
          <div class="item-text">更多</div>
        </div>
      </div>
    </div>

    <div class="bar">
      <div class="bar-lt">
        <div class="lt-title">
          <p>精品<span>导读</span></p>
          <p class="con">穿越之重振大宋王朝！</p>
          <router-link to="/bookPage"><p>《纵横宋朝》 -- 宋魂</p></router-link>
        </div>
      </div>
      <div class="bar-rt">
        <div>
          <van-swipe
            :autoplay="3000"
            lazy-render
            :show-indicators="false"
          >
            <van-swipe-item v-for="image in images" :key="image">
              <img :src="image" />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="list" v-for="(item, index) in 5" :key="index">
        <div class="list-lt">
          <div class="imgbox">
            <img src="@/assets/images/actBook2.jpeg" alt="" />
          </div>
        </div>
        <div class="list-rt">
          <p class="neme">执笔人</p>
          <p class="auhtor">步鱼非·未阅读</p>
          <p class="chapter">2天前更新·朗朗读书声</p>
        </div>
        <div class="list-icon">
          <van-icon name="ellipsis" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Books",
  setup() {
    const images = [
      "https://static.zongheng.com/upload/cover/2011/04/1303785444555.jpg",
      "https://static.zongheng.com/upload/cover/2010/11/1288582142853.jpg",
      "https://static.zongheng.com/upload/cover/7b/74/7b7463bc5c7e40aeed82c898d42ec682.jpeg",
      "https://static.zongheng.com/upload/cover/b9/e0/b9e0e0dbd726c7fb51f3b66766463117.jpeg",
    ];
    return { images };
  },
};
</script>

<style lang="less" scoped>

.center {
  background-color: #f5f7f9;
  min-height: 38rem;
  .title {
    width: 100%;
    height: 3rem;
    background-image: linear-gradient(to right, #fbf1f7, #f1f7fa);
    p {
      float: left;
      margin-left: 1rem;
      margin-top: .5rem;
      font-size: 1.4rem;
      font-weight: 700;
    }
    .right-til {
      float: right;
      .item-ioc {
        float: left;
        margin-right: 0.5rem;
        margin-top: 1rem;
        font-size: 10px;
        i {
          font-size: 1rem;
          font-weight: 700px;
        }
      }
    }
  }
  .bar {
    margin: 1rem auto;
    background-color: #ffffff;
    width: 95%;
    height: 5rem;
    border-radius: 0.5rem;
    display: flex;
    flex-flow: row nowrap;
    .bar-lt {
      flex: 4;
      // font-size: .8rem;
      text-align: left;
      p {
        margin-left: 1rem;
        font-weight: 700;
        margin: 0.5rem;
        span {
          margin-left: 0.2rem;
          color: #ff5219;
        }
      }
      .con {
        color: #ccc;
        font-weight: 400;
      }
    }
    .bar-rt {
      flex: 1;
      width: 20%;
      div {
        height: 100%;
        img {
          height: 100%;
        }
      }
    }
  }
  .content {
    margin: 1rem auto;
    background-color: #ffffff;
    width: 95%;
    height: 20rem;
    border-radius: 0.5rem;
    overflow: hidden;
    .list {
      display: block;
      height: 4rem;
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      .list-lt {
        flex: 1;
        margin-left: 0.5rem;
        margin-top: 0.5rem;
        .imgbox {
          height: 3rem;
          width: 2.2rem;
          border-radius: 0.2rem;
          overflow: hidden;
          float: right;
          img {
            height: 100%;
          }
        }
      }
      .list-rt {
        flex: 4;
        text-align: left;
        margin-top: .5rem;
        width: 8rem;
        p {
          margin: 0 0.5rem 0;
          white-space: nowrap;
          overflow: hidden;
          font-size: 14px;
        }
        .neme {
          font-weight: 700;
        }
        .auhtor,
        .chapter {
          color: #8e8f92;
        }
      }
      .list-icon {
        float: right;
        margin: 0.5rem;
        color: #8d8e91;
      }
    }
  }
}
</style>