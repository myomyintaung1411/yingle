<template>
  <div id="data_page">
    <div class="detail-title">
      <h5 class="i18n">{{$t('b_s')}}</h5>
      <div>
        <span>[YINGLIAN GAMING]</span>
        <p>Business service</p>
      </div>
    </div>
    <!-- card section -->
    <div class="detail-list">
      <!-- first two card-->
      <div class="list-box">
        <!-- one -->
        <div class="detail-box api">
          <div class="float-title">
            <span class="icon-imgs"
              ><img src="../assets/home/api.png" alt="" draggable="false" /><i
                style="background: #ff4b00"
              ></i>
            </span>
            <div>
              <h5 class="i18n">{{$t('api_')}}</h5>
              <p class="i18n">{{$t('ser__')}}</p>
            </div>
            <!-- btn -->
            <a class="detail-services i18n"
            @click="contactService()"
              >{{$t('c_service')}}</a
            >
          </div>
          <div class="desc">
            {{$t('api_detail')}}
          </div>
        </div>
        <!-- two -->
        <div class="detail-box api">
          <div class="float-title">
            <span class="icon-imgs"
              ><img src="../assets/home/dn.png" alt="" draggable="false" /><i
                style="background: #ff4b00"
              ></i
            ></span>
            <div>
              <h5 class="i18n">{{$t('web_b')}}</h5>
              <p class="i18n">{{$t('web_d')}}</p>
            </div>
          </div>
          <div class="desc">
            {{$t('web_des')}}
          </div>
        </div>
        <!--  -->
      </div>
      <!-- second two card -->
      <div class="list-box">
        <div class="detail-box api">
          <div class="float-title">
            <span class="icon-imgs"
              ><img
                src="../assets/home/userchat.png"
                draggable="false"
                alt="" /><i style="background: #ff4b00"></i
            ></span>
            <div>
              <h5>{{$t('cus_service')}}</h5>
              <p>{{$t('ser__')}}</p>
            </div>
          </div>
          <div class="desc i18n">
           {{$t('cus__des')}}
          </div>
        </div>

        <div class="detail-box language">
          <div class="float-title">
            <span class="icon-imgs"
              ><img
                src="../assets/home/language.png"
                alt=""
                draggable="false" /><i style="background: #ff4b00"></i
            ></span>
            <div>
              <h5>  {{$t('lang_supp')}}</h5>
              <p>  {{$t('lang__de')}}</p>
            </div>
          </div>

          <div class="language-imgs">
            <div
              class="imgs_parent"
              v-for="(item, index) in language"
              :key="index"
            >
              <img :src="item.image" alt="" draggable="false" />
              <span>{{ item.text }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- section three -->
      <div class="list-box">
        <div class="detail-box api">
          <div class="float-title">
            <span class="icon-imgs"
              ><img
                src="../assets/home/customer.png"
                alt=""
                draggable="false" /><i style="background: #ff4b00"></i
            ></span>
            <div>
              <h5 class="i18n">{{$t('asia_cus')}}</h5>
              <p class="i18n">{{$t('opertor')}}</p>
            </div>
          </div>
          <div class="desc i18n">
         {{$t('game_des_txt')}}
          </div>
        </div>

        <div class="detail-box language">
          <div class="float-title">
            <span class="icon-imgs"
              ><img src="../assets/home/chip.png" alt="" draggable="false" /><i
                style="background: #ff4b00"
              ></i
            ></span>
            <div>
              <h5 class="i18n">YINGLIAN casino</h5>
              <p class="i18n">{{$t('v_game')}}</p>
            </div>
          </div>

          <div class="language-imgs">
            <div class="imgs_parent" v-for="(item, index) in game" :key="index">
              <img :src="item.image" alt="" draggable="false" />
              <span>{{$t(item.text)}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- section four -->
      <div class="list-box">
        <div class="detail-box api">
          <div class="float-title">
            <span class="icon-imgs"
              ><img
                src="../assets/home/features.png"
                alt=""
                draggable="false" /><i style="background: #ff4b00"></i
            ></span>
            <div>
              <h5>{{$t('b_s')}}</h5>
              <p>{{$t('brand_s')}}</p>
            </div>
          </div>
          <div class="desc">
            {{$t('brand_d')}}
          </div>
        </div>
        <div class="detail-box api">
          <div class="float-title">
            <span class="icon-imgs"
              ><img src="../assets/home/ai.png" alt="" draggable="false" /><i
                style="background: #ff4b00"
              ></i
            ></span>
            <div>
              <h5 class="i18n">{{$t('smart')}}</h5>
              <p class="i18n">{{$t('smart_txt')}}</p>
            </div>
          </div>
          <div class="desc i18n">
            {{$t('smart_des')}}
          </div>
        </div>
      </div>
      <!-- section four end -->
    </div>

    
    <div v-if="chatpop" class="iframe">
      <iframe id="myframe" :src="openUrl" frameborder="0" scrolling="no" style="width: 340px; height: 550px;"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: [
        {
          image: require("../assets/home/cn.png"),
          text: "CN",
        },
        {
          image: require("../assets/home/en.png"),
          text: "EN",
        },
        {
          image: require("../assets/home/th.png"),
          text: "TH",
        },
        {
          image: require("../assets/home/tw.png"),
          text: "TW",
        },
        {
          image: require("../assets/home/vn.png"),
          text: "VN",
        },
      ],
      game: [
        {
          image: require("../assets/home/bjl.png"),
          text: "game_1",
        },
        {
          image: require("../assets/home/lh.png"),
          text: "game_2",
        },
        {
          image: require("../assets/home/lp.png"),
          text: "game_3",
        },
        {
          image: require("../assets/home/nn.png"),
          text: "game_4",
        },
        {
          image: require("../assets/home/sd.png"),
          text: "game_5",
        },
        {
          image: require("../assets/home/sz.png"),
          text: "game_6",
        },
      ],
      chatpop: false
    };
  },
  computed: {
    // qrValue() {
    //   var downUrl = this.$store.state.LoginData.downloadUrl;
    //   return downUrl;
    // },
    // ...mapState({ login: (state) => state.login }),
    // ...mapGetters(["loginGetter"]),

    openUrl() {
      const url = this.$store.state.LoginData.customerAddr;
      if (url == "" || url == null) {
        if (window.location.host == 'xincs597.com' || window.location.host == 'www.xincs597.com') {
          return 'https://asdqwe.co/#/?visiter_id=&avatar=&business_id=288&groupid=282&special=135313';
        }
        return
      } 

      let loginId = this.$Global.myLoginInfo.loginId;
      let loginName = this.$Global.myLoginInfo.loginName;
      let splitedUrl = url.split("=");
      let nick_name = `&nick_name=${loginName}`;
      let cusUrl =
        splitedUrl[0] +
        "=" +
        loginId +
        splitedUrl[1] +
        "=" +
        splitedUrl[2] +
        "=" +
        splitedUrl[3] +
        "=" +
        splitedUrl[4] +
        "=" +
        splitedUrl[5] +
        nick_name;
      return cusUrl;
    },
  },
  methods: {
    contactService() {
      this.chatPopUp();
    },
    chatPopUp() {
      if (this.$store.state.login == false) {
        if (window.location.host == 'xincs597.com' || window.location.host == 'www.xincs597.com') {
          this.chatpop = !this.chatpop;
          return
        }
        return this.$message.warning("请先登录");
      } else {
        this.chatpop = !this.chatpop;
      }
    },
  }
};
</script>

<style lang="scss" scoped>
#data_page {
  display: block;
  position: relative;
  width: 100%;
  /* background: #ffffff; */
  /* background: url(../imgs/bg.png); */
  background: url(../assets/home/bg.jpg);
  border-bottom: 3px solid #9c7720;
  padding: 50px 0;
  background-size: cover;
  .detail-title {
    display: flex;
    align-items: flex-start;
    position: relative;
    z-index: 1;
    width: 1200px;
    margin: auto;
    margin-bottom: 50px;
    color: #ececec;
    h5 {
      text-transform: uppercase;
      font-size: 30px;
      color: #ffc44c;
    }
  }

  .iframe {
  position: fixed;
  bottom: 100px;
  z-index: 998;
  right: 100px;
  // height: 375px;
  // width: 300px;
}
}
.detail-list {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: auto;
  .list-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // background: red;
    border-radius: 12px;
    width: 270px;

    .api {
      height: 48%;
      //   margin-bottom: 20px;
    }
    .detail-box {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      margin-bottom: 20px;

      //   background: red;
      background-color: rgba(255, 251, 210, 0.15);
      color: #ffffff;
      border: 1px solid rgba(254, 213, 124, 0.15);
      box-sizing: border-box;
      padding: 0 20px;
      border-radius: 12px;
      overflow: hidden;
      .float-title {
        display: flex;
        align-items: center;
        position: relative;
        z-index: 1;
        padding: 25px 0;
        .icon-imgs {
          display: flex;
          position: relative;
          font-size: 38px;
          color: #ffc44c;
          letter-spacing: 0;
          line-height: 40px;
          padding: 0 11px 0 0;
          margin: 0 8px 0 0;
          img {
            max-width: 100%;
            border: 0;
            vertical-align: middle;
          }
          i {
            display: block;
            position: absolute;
            width: 3px;
            height: 35px;
            top: 0;
            right: 0;
            background: #ff4b00;
          }
        }
        a {
          display: flex;
          align-items: center;
          height: 30px;
          border-radius: 8px;
          box-sizing: border-box;
          background: hsla(0, 0%, 0%, 0.6);
          //   border: 1px solid rgb(155, 119, 31, 0.6);
          box-shadow: 0 13px 15px 0 rgba(0, 0, 0, 0.03);
          backdrop-filter: blur(10px);
          padding: 0 10px;
          margin-left: auto;
          text-decoration: none;
          color: #fff;
          font-size: 15px;
        }
        a:hover {
          color: red;
        }
      }
      .desc {
        margin-bottom: 20px;
      }
    }
  }
}
.detail-box .language {
  height: 48%;
}
.language-imgs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100% !important;
  //   height: 50px;
  //   background: red;
  overflow: auto;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  //   background: red;
  .imgs_parent {
    flex: 0 0 50px;
    // width: 50px;
    // background: green;
    // width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    animation: slide 10s infinite;
    overflow: hidden;
    white-space: nowrap;
    margin-right: 25px;
    animation: bannermove 10s linear infinite;
    cursor: pointer;
    img {
      width: 100%;
      user-select: none;
    }
    span {
      text-align: center;
      padding-top: 3px;
    }
  }
  .imgs_parent:hover {
    span {
      color: red;
    }
  }
}
.language-imgs::-webkit-scrollbar {
  display: none;
}
@keyframes bannermove {
  0% {
    transform: translate(50%, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>