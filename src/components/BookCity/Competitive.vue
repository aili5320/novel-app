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

    <div class="message">
      <div>
        <div class="ioc-img">
          <img src="@/assets/images/fenlei.png" alt="" />
        </div>
        <p>分类</p>
      </div>
      <div>
        <div class="ioc-img">
          <img src="@/assets/images/dashen.png" />
        </div>
        <p>大神</p>
      </div>
      <div>
        <div class="ioc-img">
          <img src="@/assets/images/paihang.png" alt="" />
        </div>
        <p>排行</p>
      </div>
      <div>
        <div class="ioc-img">
          <img src="@/assets/images/xinshu.png" />
        </div>
        <p>新书</p>
      </div>
      <div>
        <div class="ioc-img">
          <img src="@/assets/images/wanjie.png" />
        </div>
        <p>完本</p>
      </div>
    </div>

    <div class="recommend">
      <p>编辑力荐</p>
      <div class="top">
        <div class="bookimg">
          <img src="@/assets/images/BookPic.jpg" alt="" />
        </div>
        <div class="tip">
          <span class="bookName">剑来</span>
          <span
            >大千世界，无奇不有。
            我陈平安，唯有一剑，可搬山，倒海，降妖，镇魔，敕神，摘星，断江，摧城，开天！
            我叫陈平安，平平安安的平安。我是一名剑客。
          </span>
          <div class="aut">
            <span>烽火戏诸侯·连载中·仙侠762.4万字</span>
          </div>
        </div>
      </div>
      <div class="list">
        <div>
          <div class="imgBox">
            <img src="@/assets/images/actBook4.jpeg" alt="" />
          </div>
          <span>我在长安斩过仙</span>
          <span class="author">月明她倚楼</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="@/assets/images/actBook2.jpeg" alt="" />
          </div>
          <span>大魏执笔人</span>
          <span class="author">鱼刀</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="@/assets/images/actBook3.jpeg" alt="" />
          </div>
          <span>我绑定了搞事修仙系统</span>
          <span class="author">东思西想</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="@/assets/images/actBook5.jpeg" alt="" />
          </div>
          <span>我在聊斋证长生</span>
          <span class="author">天线嘚嘚</span>
        </div>
      </div>
    </div>

     <div class="active">
      <p>畅销精品</p>
      <div class="list">
        <div>
          <div class="imgBox">
            <img src="https://static.zongheng.com/upload/cover/94/bd/94bd43cde249f784b9a5958810b94174.jpeg" alt="" />
          </div>
          <span>剑道第一仙</span>
          <span class="author">萧瑾瑜</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="	https://static.zongheng.com/upload/cover/9d/f4/9df4677145957032763f83ad5dd36003.jpeg" alt="" />
          </div>
          <span>我有一剑</span>
          <span class="author">青鸾峰上</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="	https://static.zongheng.com/upload/cover/57/f5/57f53a22e62fc627fbf6bac1f6e3ca8f.jpeg" alt="" />
          </div>
          <span>踏星</span>
          <span class="author">随散飘风</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="https://static.zongheng.com/upload/cover/7f/a5/7fa5d5d1ca10eb232d7d8f049f3fcaa1.jpeg" alt="" />
          </div>
          <span>一世如龙</span>
          <span class="author">关中老人</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="https://static.zongheng.com/upload/cover/c2/2d/c22d6d254081798397aae5a074cc3dc0.jpeg" alt="" />
          </div>
          <span>将军好凶猛</span>
          <span class="author">更俗</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="	https://static.zongheng.com/upload/cover/96/0e/960ed27b3f0fa22f5fba179daa0249af.jpeg" alt="" />
          </div>
          <span>最强战神</span>
          <span class="author">烈焰滔滔</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="https://static.zongheng.com/upload/cover/0b/fb/0bfbdc4a009c6a2c0f8359fdf99b0457.jpeg" alt="" />
          </div>
          <span>星际生存从侵略开始</span>
          <span class="author">当年残月</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="https://static.zongheng.com/upload/cover/c7/d9/c7d98eddb0e2bbaf7b54d2e9bb2e2966.jpeg" alt="" />
          </div>
          <span>全军列阵</span>
          <span class="author">知白</span>
        </div>
      </div>
     </div>

     <div class="slideshow">
      <van-swipe :autoplay="3000" lazy-render :show-indicators="false">
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="recommend">
      <p>男生必读</p>
      <div class="top">
        <div class="bookimg">
          <img src="@/assets/images/BookPic.jpg" alt="" />
        </div>
        <div class="tip">
          <span class="bookName">剑来</span>
          <span
            >大千世界，无奇不有。
            我陈平安，唯有一剑，可搬山，倒海，降妖，镇魔，敕神，摘星，断江，摧城，开天！
            我叫陈平安，平平安安的平安。我是一名剑客。
          </span>
          <div class="aut">
            <span>烽火戏诸侯·连载中·仙侠762.4万字</span>
          </div>
        </div>
      </div>
      <div class="list">
        <div>
          <div class="imgBox">
            <img src="@/assets/images/actBook4.jpeg" alt="" />
          </div>
          <span>我在长安斩过仙</span>
          <span class="author">月明她倚楼</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="@/assets/images/actBook2.jpeg" alt="" />
          </div>
          <span>大魏执笔人</span>
          <span class="author">鱼刀</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="@/assets/images/actBook3.jpeg" alt="" />
          </div>
          <span>我绑定了搞事修仙系统</span>
          <span class="author">东思西想</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="@/assets/images/actBook5.jpeg" alt="" />
          </div>
          <span>我在聊斋证长生</span>
          <span class="author">天线嘚嘚</span>
        </div>
      </div>
    </div>

    <div class="recommend">
      <p>女生必读</p>
      <div class="top">
        <div class="bookimg">
          <img src="@/assets/images/BookPic.jpg" alt="" />
        </div>
        <div class="tip">
          <span class="bookName">剑来</span>
          <span
            >大千世界，无奇不有。
            我陈平安，唯有一剑，可搬山，倒海，降妖，镇魔，敕神，摘星，断江，摧城，开天！
            我叫陈平安，平平安安的平安。我是一名剑客。
          </span>
          <div class="aut">
            <span>烽火戏诸侯·连载中·仙侠762.4万字</span>
          </div>
        </div>
      </div>
      <div class="list">
        <div>
          <div class="imgBox">
            <img src="@/assets/images/actBook4.jpeg" alt="" />
          </div>
          <span>我在长安斩过仙</span>
          <span class="author">月明她倚楼</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="@/assets/images/actBook2.jpeg" alt="" />
          </div>
          <span>大魏执笔人</span>
          <span class="author">鱼刀</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="@/assets/images/actBook3.jpeg" alt="" />
          </div>
          <span>我绑定了搞事修仙系统</span>
          <span class="author">东思西想</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="@/assets/images/actBook5.jpeg" alt="" />
          </div>
          <span>我在聊斋证长生</span>
          <span class="author">天线嘚嘚</span>
        </div>
      </div>
    </div>


    <div class="active">
      <p>新书速递</p>
      <div class="list">
        <div>
          <div class="imgBox">
            <img src="https://static.zongheng.com/upload/cover/94/bd/94bd43cde249f784b9a5958810b94174.jpeg" alt="" />
          </div>
          <span>剑道第一仙</span>
          <span class="author">萧瑾瑜</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="	https://static.zongheng.com/upload/cover/9d/f4/9df4677145957032763f83ad5dd36003.jpeg" alt="" />
          </div>
          <span>我有一剑</span>
          <span class="author">青鸾峰上</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="	https://static.zongheng.com/upload/cover/57/f5/57f53a22e62fc627fbf6bac1f6e3ca8f.jpeg" alt="" />
          </div>
          <span>踏星</span>
          <span class="author">随散飘风</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="https://static.zongheng.com/upload/cover/7f/a5/7fa5d5d1ca10eb232d7d8f049f3fcaa1.jpeg" alt="" />
          </div>
          <span>一世如龙</span>
          <span class="author">关中老人</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="https://static.zongheng.com/upload/cover/c2/2d/c22d6d254081798397aae5a074cc3dc0.jpeg" alt="" />
          </div>
          <span>将军好凶猛</span>
          <span class="author">更俗</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="	https://static.zongheng.com/upload/cover/96/0e/960ed27b3f0fa22f5fba179daa0249af.jpeg" alt="" />
          </div>
          <span>最强战神</span>
          <span class="author">烈焰滔滔</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="https://static.zongheng.com/upload/cover/0b/fb/0bfbdc4a009c6a2c0f8359fdf99b0457.jpeg" alt="" />
          </div>
          <span>星际生存从侵略开始</span>
          <span class="author">当年残月</span>
        </div>
        <div>
          <div class="imgBox">
            <img src="https://static.zongheng.com/upload/cover/c7/d9/c7d98eddb0e2bbaf7b54d2e9bb2e2966.jpeg" alt="" />
          </div>
          <span>全军列阵</span>
          <span class="author">知白</span>
        </div>
      </div>
     </div>

     <div class="more">
      <p>更多好书</p>
      <div class="top" v-for="(item,index) in 10" :key="index">
        <div class="bookimg">
          <img src="@/assets/images/BookPic.jpg" alt="" />
        </div>
        <div class="tip">
          <span class="bookName">剑来</span>
          <span
            >大千世界，无奇不有。
            我陈平安，唯有一剑，可搬山，倒海，降妖，镇魔，敕神，摘星，断江，摧城，开天！
            我叫陈平安，平平安安的平安。我是一名剑客。
          </span>
          <div class="aut">
            <span>烽火戏诸侯·连载中·仙侠762.4万字</span>
          </div>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Competitive",
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
.message {
  margin: 0.5rem auto;
  height: 4rem;
  width: 95%;
  border-radius: 0.5rem;
  background-color: #ffffff;
  display: flex;
  div {
    flex: 1;
    margin: 0.5rem 0.5rem 0 0.5rem;
    text-align: center;
    .ioc-img {
      width: 1.5rem;
      height: 1.5rem;
      img {
        height: 100%;
      }
    }
    p {
      margin-top: 0.2rem;
      text-align: left;
      margin-left: .6rem;
      font-size: 12px;
      color: #8d8e91;
    }
  }
}
.recommend {
  margin: 0.5rem auto;
  height: 18rem;
  width: 95%;
  border-radius: 0.5rem;
  background-color: #ffffff;
  p {
    padding: 0.5rem;
    margin-left: 0.5rem;
    text-align: left;
    font-weight: 700;
  }
  .top {
    height: 5rem;
    .bookimg {
      height: 100%;
      margin: 0 1rem;
      float: left;
      border-radius: .5rem;
      overflow: hidden;
      img {
        height: 100%;
      }
    }
    .tip {
      height: 100%;
      span {
        flex: 1;
        display: block;
        color: #a1a2a5;
        margin: 0.5rem;
        padding-right: 1rem;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .bookName {
        font-weight: 700;
        color: #2d3035;
      }
      .aut {
        span {
          font-size: 0.5rem;
        }
      }
    }
  }
  .list {
    padding-top: 1rem;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    margin: 0 1rem;
    div {
      flex: 1;
      .imgBox {
        height: 5rem;
        width: 3.5rem;
        border-radius: .5rem;
        overflow: hidden;
        img {
          height: 100%;
        }
      }
     span {
      display: block;
      } 
      .author {
        color: #9b9c9e;
        font-size: .5rem;
      }
    }
  }


}

.active {
  margin: 0.5rem auto;
  height: 19rem;
  width: 95%;
  border-radius: 0.5rem;
  background-color: #ffffff;
  p {
    padding: 0.5rem;
    margin-left: 0.5rem;
    text-align: left;
    font-weight: 700;
  }
  .list {
    // padding-top: 1rem;
    display: flex;
    flex-flow: row wrap;
    height: 100%;
    width: 90%;
    margin: 0 1rem;
    div {
      flex: 1;
      .imgBox {
        height: 5rem;
        width: 3.5rem;
        border-radius: .5rem;
        overflow: hidden;
        img {
          height: 100%;
        }
      }
     span {
      display: block;
      } 
      .author {
        color: #9b9c9e;
        font-size: .5rem;
      }
    }
  }
}

.more {
  margin: 1rem auto;
  height: 100%;
  width: 95%;
  p {
    padding: 0.5rem;
    margin-left: 0.5rem;
    text-align: left;
    font-weight: 700;
  }
  .top {
    height: 5rem;
    margin-bottom: 1.5rem;
    .bookimg {
      height: 100%;
      margin: 0 1rem;
      float: left;
      border-radius: .5rem;
      overflow: hidden;
      img {
        height: 100%;
      }
    }
    .tip {
      height: 100%;
      span {
        flex: 1;
        display: block;
        color: #a1a2a5;
        margin: 0.5rem;
        padding-right: 1rem;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .bookName {
        font-weight: 700;
        color: #2d3035;
      }
      .aut {
        span {
          font-size: 0.65rem;
        }
      }
    }
  }
}
</style>