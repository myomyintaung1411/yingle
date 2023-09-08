<template>
  <div id="product_page">
    <h3 class="i18n">{{$t('product')}}</h3>
    <span>{{$t('prduct_t')}}</span>

    <ul>
      <li v-for="(item, index) in upperdiv" :key="index">
        <div class="product_list">
          <a style="user-select: none"
            ><img :src="item.image" draggable="false"
          /></a>
          <h4>{{ $t(item.title) }}</h4>
          <p>
            {{ $t(item.subtitle) }}
          </p>
        </div>
      </li>
    </ul>
    <!-- second div -->
    <ul>
      <li v-for="(item, index) in belowdiv" :key="index">
        <div class="product_list">
          <a style="user-select: none"><img :src="item.image" /></a>
          <h4>{{ $t(item.title) }}</h4>
          <p>
            {{ $t(item.subtitle) }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upperdiv: [
        {
          image: require("../assets/product/33.png"),
          title: "game_1",
          subtitle:
            "p_t",
        },
        {
          image: require("../assets/product/22.png"),
          title: "game_2",
          subtitle:
            "p_t2",
        },
        {
          image: require("../assets/product/33.png"),
          title: "prdouct_game3",
          subtitle:
            "p_t3",
        },
        {
          image: require("../assets/product/22.png"),
          title: "game_4",
          subtitle:
            "p_t4",
        },
      ],
      belowdiv: [
        {
          image: require("../assets/product/1.png"),
          title: "game_6",
          subtitle:
            "p_t5",
        },
        {
          image: require("../assets/product/33.png"),
          title: "game_5",
          subtitle:
            "p_t6",
        },
        {
          image: require("../assets/product/1.png"),
          title: "game_3",
          subtitle:
            "p_t7",
        },
        {
          image: require("../assets/product/22.png"),
          title: "prdouct_game7",
          subtitle:
            "p_t8",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#product_page {
  background: #ffffff;
  background-image: url(../assets/home/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  height: 920px;
  h3 {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    padding-top: 66px;
    margin-bottom: 14px;
    color: #ffc44c;
    // background: red;
  }
  span {
    text-align: center;
    letter-spacing: 0.5px;
    font-size: 20px;
    display: block;
    margin-bottom: 50px;
    color: #ececec;
  }
  ul {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
    background: red;
    li {
      float: left;
      width: 25%;
      padding-right: 1%;
      padding-left: 1%;
      padding-bottom: 2%;
      // background: green;
      list-style: none;
    }
  }
  .product_list {
    display: block;
    position: relative;
    width: 100%;
    height: 305px;
    /* background-color: rgba(128, 128, 128, 0.1); */
    background-color: rgba(255, 251, 210, 0.15);
    color: #ffffff;
    border: 1px solid rgba(254, 213, 124, 0.15);
    box-sizing: border-box;
    padding: 0 20px;
    border-radius: 12px;
    overflow: hidden;
    a {
      background-color: transparent;
      color: #fff;
      text-decoration: none;
      cursor: pointer;
    }
    img {
      margin-top: 16px;
      margin-bottom: 16px;
      vertical-align: middle;
      text-align: center;
      max-width: 100%;
    }
    h4 {
      margin-bottom: 14px;
      /* color: #ffc44c; */
      color: #e4b148;
      text-align: center;
    }
    p {
      letter-spacing: 0.5px;
      font-size: 14px;
      display: -webkit-box;
      word-break: break-all;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      orientation: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      font-weight: bold;
    }
  }
}
</style>