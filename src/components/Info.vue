<template>
  <div id="info_page">
    <div class="about_detail">
      <h3>{{$t('com_name')}}</h3>
      <p>{{$t('info_txt')}}</p>
      <a class="game-free" @click="TestPlay()"></a>
      <h6 @click="goSite()" style="cursor:pointer">
        {{$t('game_url')}} : {{ site }}
      <!-- {{this.$store.state.LoginData.gameAddr}} -->
      
      </h6>
      <!-- <h6>推广网址 : {{ site }}</h6> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      site: "",
    };
  },
  methods: {
    goSite() {
      window.open(this.site)
    },
    TestPlay() {
      // window.open("http://hn2204.com/?token=");
      // if (
      //   this.$store.state.LoginData.gameAddr == "" ||
      //   this.$store.state.LoginData.gameAddr == undefined ||
      //   this.$store.state.LoginData.gameAddr == null
      // )
      //   return this.$message.error("未知错误");
      // window.open("http://" + this.$store.state.LoginData.gameAddr + "?token=");
         window.open(
              "https://pc.yl686696.com/" +`?token=`
            );
    },
  },
  created() {
     this.site = window.location.origin;
  },
};
</script>

<style lang="scss" scoped>
#info_page {
  background-image: url(../assets/home/about_bg.jpg);
  background-repeat: no-repeat;
  height: 465px;
  background-position: center top;
  .about_detail {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 690px;
    padding-top: 90px;
    color: #ffffff;
    // background: red;
    h3 {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 14px;
      color: #ffc44c;
    }
    h6 {
      font-size: 15px;
      font-weight: bold;
      color: #ffc44c;
      margin-top: 10px;
    }
    p {
      display: block;
      width: 580px;
      letter-spacing: 0.5px;
      font-size: 20px;
    }
  }
  .game-free {
    position: relative;
    display: block;
    width: 120px;
    height: 40px;
    cursor: pointer;
    overflow: hidden;
    border-radius: 10rem;
    margin-top: 14px;
  }
  .game-free:before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url("../assets/home/btn_free_pc_cn.gif");
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
  }
}
</style>