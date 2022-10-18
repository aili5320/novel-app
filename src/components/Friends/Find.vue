<template>
  <div class="body">
    <div class="con"></div>
    <div class="slideshow">
      <van-swipe :autoplay="3000" lazy-render :show-indicators="false">
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="critic">
      <div class="til">
        <div class="userImg">
          <img src="@/assets/images/userPic.png" alt="" />
        </div>
        <div class="badeg">
          <img src="@/assets/images/lv5.gif" />
        </div>
        <div class="tip">
          <span class="usernme">独居引山洪</span>
          <span class="time">36分钟前发表了章评</span>
        </div>
        <div class="focus">
          <span>关注TA</span>
        </div>
      </div>
      <div class="center">
        <p>
          人间一半剑仙是我友,天下哪个娘子不娇羞,我以醇酒洗我剑,谁人不说我风流,此生无甚大遗憾。
          人往高处走，讲的是境界，修为，拳脚功夫。水往低处流，说的是人心，念旧，香火情
        </p>
      </div>
      <div class="befrom">
        <p>来自 第五百八十一章 唯有饮者留其名</p>
      </div>
      <div class="bookName">
        <span><van-icon name="label-o" />《剑来》</span>
      </div>

      <div class="critic-btm">
        <div>
          <van-icon name="like-o" />
          <span>271</span>
        </div>
        <div>
          <van-icon name="comment-o" />
          <span>222</span>
        </div>
      </div>
    </div>

    <div class="like">
      <p class="tis">你可能喜欢的书友</p>
      <span class="getInfo">查看更多 <van-icon name="arrow" /></span>
      <div class="userList">
        <div class="user">
          <div class="userPic">
            <img src="@/assets/images/fenhuo.jpg" alt="" />
            <div class="badeg">
              <img src="@/assets/images/lv5.gif" />
            </div>
          </div>

          <p class="username">烽火戏诸侯</p>
          <p class="intro">江南虎人一枚~</p>
          <div class="focus">
            <span>关注TA</span>
          </div>
        </div>
        <div class="user">
          <div class="userPic">
            <img src="@/assets/images/huoxing.jpeg" alt="" />
          </div>
          <p class="username">火星引力</p>
          <p class="intro">大~废~材~</p>
          <div class="focus">
            <span>关注TA</span>
          </div>
        </div>
        <div class="user">
          <div class="userPic">
            <img src="@/assets/images/lieyan.jpeg" alt="" />
          </div>
          <p class="username">烈焰滔滔</p>
          <p class="intro">暂无简介~</p>
          <div class="focus">
            <span>关注TA</span>
          </div>
        </div>
      </div>
    </div>

    <div class="critic" v-for="(item, index) in 10" :key="index">
      <div class="til">
        <div class="userImg">
          <img src="@/assets/images/authorPic.jpg" alt="" />
        </div>
        <div class="badeg">
          <img src="@/assets/images/lv5.gif" />
        </div>
        <div class="tip">
          <span class="usernme">独居引山洪</span>
          <span class="time">36分钟前发表了章评</span>
        </div>
        <div class="focus">
          <span>关注TA</span>
        </div>
      </div>
      <div class="center">
        <p>
          剑仙三尺剑，举目四望意茫然，敌手何在，豪杰寂寞。杯中二两酒，与尔同销万古愁，一醉方休，钱算什么。饮我酒者可破境。
        </p>
      </div>
      <div class="befrom">
        <p>来自 第五百八十一章 唯有饮者留其名</p>
      </div>
      <div class="bookName">
        <span><van-icon name="label-o" />《剑来》</span>
      </div>

      <div class="critic-btm">
        <div>
          <van-icon name="like-o" />
          <span>271</span>
        </div>
        <div>
          <van-icon name="comment-o" />
          <span>222</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Find",
  data() {
    const images = [
      "https://static.zongheng.com/upload/recommend/ac/ad/acada0119c59febcaa1c8a7a8bbc1eed.jpeg",
      "https://static.zongheng.com/upload/recommend/8d/7a/8d7a9e6db7d943f551b4c7908351b288.jpeg",
      "https://static.zongheng.com/upload/recommend/53/ab/53ab10dd1c9ac70eb90a551864d7ec39.jpeg",
      "https://static.zongheng.com/upload/recommend/6e/2b/6e2b4ceeb5fea31d84b04df96028f5b0.jpeg",
    ];
    return { images };
  },
};
</script>

<style lang="less" scoped>
.body {
  background-color: #f5f7f9;
  .con {
    height: 1rem;
  }
  .slideshow {
    width: 95%;
    margin: 0 auto;
    height: 7.5rem;
    border-radius: 0.5rem;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .critic {
    margin: 0.5rem auto;
    width: 95%;
    background-color: #fff;
    height: 15rem;
    border-radius: 0.5rem;
    position: relative;
    .til {
      height: 2rem;
      padding: 1rem 0 0.5rem 0.5rem;
      .userImg {
        float: left;
        height: 2rem;
        width: 2rem;
        border-radius: 100%;
        background-color: #afb2b9;
        overflow: hidden;
        img {
          height: 100%;
        }
      }
      .badeg {
        position: absolute;
        top: 2.2rem;
        left: 1.8rem;
      }
      .tip {
        float: left;
        margin-left: 0.5rem;
        span {
          display: block;
        }
        .time {
          color: #afb2b9;
          font-size: 0.5rem;
        }
      }
      .focus {
        float: right;
        height: 2rem;
        margin-right: 1rem;
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
    .center {
      padding: 0.5rem 0.8rem;
      p {
        font-size: 0.9rem;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /*想省略几行就写几*/
        -webkit-box-orient: vertical;
      }
    }
    .befrom {
      margin: 0.2rem 0.8rem;
      height: 2rem;
      border-radius: 0.5rem;
      background-color: #f5f7f9;
      overflow: hidden;
      p {
        line-height: 2rem;
        margin-left: 0.2rem;
        color: #96979a;
        font-size: 0.8rem;
      }
    }
    .bookName {
      margin: 1rem 0 0 0.8rem;
      // margin: 1rem 0rem .8rem;
      height: 2rem;
      span {
        padding: 0.2rem 0.5rem;
        text-align: center;
        background-color: #ffecee;
        border-radius: 1rem;
        font-size: 0.5rem;
        font-weight: 700;
        color: #fa1a22;
        i {
          font-weight: 700;
        }
      }
    }
    .critic-btm {
      margin: 0 0.8rem;
      height: 1rem;
      div {
        float: right;
        color: #8d8e91;
        margin-right: 0.5rem;
        i {
          margin-right: 0.2rem;
        }
      }
    }
  }
  .like {
    margin: 0.5rem auto;
    width: 95%;
    background-color: #fff;
    height: 12rem;
    border-radius: 0.5rem;
    background-image: linear-gradient(to right, #fff1e6, #ffffff);
    .tis {
      padding: 0.5rem;
      margin-left: 0.5rem;
      text-align: left;
      font-weight: 600;
      font-size: 1rem;
    }
    .getInfo {
      position: absolute;
      right: 0.5rem;
      color: #929395;
      top: 0.8rem;
    }
    .userList {
      width: 95%;
      height: 7.5rem;
      margin: 0.5rem auto;
      display: flex;
      flex-flow: row nowrap;
      .user {
        flex: 1;
        margin-left: 0.5rem;
        background-color: #f5f7f9;
        border-radius: 0.5rem;
        position: relative;
        .userPic {
          margin: 0.5rem auto;
          height: 2rem;
          width: 2rem;
          border-radius: 100%;
          background-color: #afb2b9;
          overflow: hidden;
          img {
            height: 100%;
          }
          .badeg {
          right: 1.8rem;
          top: 1.7rem;
          position: absolute;
        }
        }
        
        p {
          text-align: center;
        }
        .intro {
          font-size: 0.5rem;
          overflow: hidden;
          font-weight: 200;
          height: 1rem;
          width: 5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .focus {
          height: 2rem;
          margin-top: 0.5rem;
          text-align: center;
          span {
            padding: 0.2rem 0.5rem;
            text-align: center;
            border-radius: 1rem;
            font-size: 0.5rem;
            font-weight: 700;
            color: #e60000;
            border: 1px solid #e60000;
          }
        }
      }
    }
  }
}
</style>