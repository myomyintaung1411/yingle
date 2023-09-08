<template>
  <div>
    <div class="home">
      <!--  -->
      <marquee></marquee>
      <Banner></Banner>
      <Info></Info>
      <GameCard></GameCard>

      <DataPage></DataPage>
      <Product></Product>
      <!--  -->
      <div class="footer_page">
        <footer>COPYRIGHT © YINGLIANINTERNATIONAL RESERVED.</footer>
        <div class="sidebar">
          <ul>
            <li v-if="serviceLink"  class="app_down" @click="showData(1)">
              <i class="icon icon-kefu"></i>
              <span>在线客服</span>
              <!-- <div class="qrcode_div">
                <img src="../../public/hnjjqr.png" alt="" />
              </div> -->
              <div class="qrcode_div" v-if="chatpop">
                <qrcode-vue
                  :value="openUrl"
                  :size="size"
                  level="H"
                  class="qrcodevue"
                ></qrcode-vue>
                  <div
                  class="phone-text"
                  style="
                    flex: 1 1 0%;
                    text-align: center;
                    color: rgb(220, 184, 111);
                    font-size: 13px;
                    background: #3a3a3a;
                    margin-top:4px;
                    padding:10px 0px;
                  "
                  @click="goService"
                >
                  点击聊天客服
                </div>
              </div>
            </li>

            <li
              v-if="ph"
              class="app_down"
              @click="showData(2)"
            >
              <i class="icon icon-phone"></i>
              <span>手机号码</span>
              <div v-if="show == true" class="phone-item" style="bottom: 225px">
                <div
                  class="phone-text"
                  style="
                    flex: 1 1 0%;
                    text-align: center;
                    color: rgb(220, 184, 111);
                    font-size: 13px;
                  "
                >
                  {{ ph }}
                </div>
                <!-- <div  class="phone-copy" @click="copyPhone(ph)"> </div> -->
              </div>
            </li>

            <li
              v-if="qq"
              class="app_down"
              @click="showData(3)"
            >
              <i class="icon icon-qq"></i>
              <span>QQ客服</span>
              <div v-if="show1 == true">
                <div class="phone-item">
                  <div
                    class="phone-text"
                    style="
                      flex: 1 1 0%;
                      text-align: center;
                      color: rgb(220, 184, 111);
                      font-size: 13px;
                    "
                  >
                    {{ qq }}
                  </div>
                  <!-- <div  class="phone-copy" @click="copyPhone(qq)"> </div> -->
                </div>
              </div>
            </li>
            <!--  -->
            <!-- <li class="app_down" @click="showData(3)">
              <i class="icon icon-wechat" ></i><span>微信客服</span>
              <div class="qrcode_div" v-if="show1 == true">
                <img src="@/assets/home/logo.png" alt="" />
              </div>
            </li>-->
            <li
              v-if="wx"
              class="app_down"
              @click="showData(4)"
            >
              <i class="icon icon-wechat"></i>
              <span>微信客服</span>
              <div>
                <!-- <div v-if="show2 == true" class="phone-item" style="bottom:160px;">
                <div  class="phone-text" style="flex: 1 1 0%; text-align: center; color: rgb(220, 184, 111); font-size: 13px;">{{wx}}</div> 
                </div>-->
                <div class="qrcode_div" v-if="show2 == true">
                  <qrcode-vue
                    :value="wx"
                    :size="size"
                    level="H"
                    class="qrcodevue"
                  ></qrcode-vue>
                </div>
              </div>
            </li>

            <li  class="app_down" @click="showData(5)">
              <i class="icon icon-app"></i>
              <span>APP下载</span>
              <div class="qrcode_div" v-if="show3 == true">
                <qrcode-vue
                  :value="'https://www.888879.tv/'"
                  :size="size"
                  level="H"
                  class="qrcodevue"
                ></qrcode-vue>
              </div>
            </li>
          </ul>
        </div>
        <!-- <div v-if="chatpop" class="iframe">
          <iframe id="myframe" :src="openUrl" frameborder="0" scrolling="no" style="width: 340px; height: 550px;"></iframe>
        </div> -->
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
import GameCard from "../components/GameCard";
import Banner from "../components/Banner";
import Product from "../components/Product";
import DataPage from "../components/DataPage";
import Info from "../components/Info";
// import Footer from "../components/Footer";
import AES from "../api/aes";
import { Base64 } from "js-base64";
import { mapState, mapGetters } from "vuex";
import { GetAgentInfo, GetScrollText } from "@/api/user";
import Marquee from "../components/Marquee.vue";
import QrcodeVue from "qrcode.vue";

export default {
  components: {
    GameCard,
    Banner,
    Product,
    DataPage,
    Info,
    Marquee,
    QrcodeVue,
  },

  data() {
    return {
      qq: "",
      wx: "",
      ph: "",
      serviceLink:"",
      chatpop: false,
      value: this.$store.state.LoginData.downloadUrl,
      id: this.$Global.myLoginInfo.loginId,
      tAgent: "",
      size: 200,
      download_Link: "",
      show: false,
      show1: false,
      show2: false,
      show3: false,
    };
  },
  methods: {
    showData(n) {
      console.log(n);
      if (n == 1) {
        this.chatPopUp();
      }
      if (n == 2) {
        this.show3 = false;
        this.show2 = false;
        this.show1 = false;
        this.chatpop = false;
        this.show = !this.show;
      }
      if (n == 3) {
        this.show = false;
        this.show2 = false;
        this.show3 = false;
        this.chatpop = false;
        this.show1 = !this.show1;
      }
      if (n == 4) {
        this.show = false;
        this.show1 = false;
        this.show3 = false;
        this.chatpop = false;
        this.show2 = !this.show2;
      }
      if (n == 5) {
        this.show = false;
        this.show1 = false;
        this.show2 = false;
        this.chatpop = false;
        this.show3 = !this.show3;
      }
    },
    goService() {
      let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=500,height=700,left=${window.screen.width / 2},top=${
        window.screen.width / 2
      }`;
      let url = this.$store.state.LoginData.customerAddr;
       //let url = 'https://355635.com/#/?visiter_id=&avatar=&business_id=11&groupid=11&special=2862'
      if (url) {
        if (this.$store.state.login == true) {
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
          //window.open(cusUrl)
          window.open(cusUrl, "mywindow", params);
        } else {
          window.open(url, "mywindow", params);
          //window.open(url)
        }
      }else{
        window.open("https://355635.com/#/?visiter_id=&avatar=&business_id=11&groupid=11&special=2862","mywindow", params)
      }
    },
    chatPopUp() {
      // if (this.$store.state.login == false) {
      //   if (window.location.host == 'xincs597.com' || window.location.host == 'www.xincs597.com') {
      //     this.chatpop = !this.chatpop;
      //     return
      //   }
      //   return this.$message.warning("请先登录");
      // }
      // else {
      //   this.chatpop = !this.chatpop;
      // }
      this.chatpop = !this.chatpop;
      this.show = false;
      this.show2 = false;
      this.show1 = false;
      this.show3 = false;
    },
    splitPH(ph) {
      if (ph.indexOf("$") !== -1) {
        let num = ph.replace(/-/g, "\n");
        //  let num =  ph.replace(/\-{4}/g, '\n');
        console.log("split num", num);
        return num;
      } else {
        return ph;
      }
    },
    SplitInfomation(ph) {
      return ph.split("$");
    },
    GetScrollData(id) {
      var en = this.$Global.en;
      let data = JSON.stringify({ Id: id });
      let endata = AES.encrypt(data, en);
      // var decryptdata = JSON.parse(AES.decrypt(endata, en));

      GetScrollText({ data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          console.log(msg, "scroll");
          if (msg.JsonData.code == 200) {
            //this.$store.commit("SCROLL_DATA", msg.JsonData.msg);
            this.$store.commit(
              "SCROLL_DATA",
              "为了给广大游戏玩家带来更安全稳定的线上体验环境，公司将针对在线上进行游戏无差额对打套利,洗钱等违反公司常规游戏操作的用户进行净网行动，一经发现封号冻结资金，概不退还！"
            );
          } else {
            var scrolldata =
              "为了给广大游戏玩家带来更安全稳定的线上体验环境，公司将针对在线上进行游戏无差额对打套利,洗钱等违反公司常规游戏操作的用户进行净网行动，一经发现封号冻结资金，概不退还！";
            this.$store.commit("SCROLL_DATA", scrolldata);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    GetAgentdata(domain) {
      var en = this.$Global.en;
      const data = JSON.stringify({ domain: domain });
      let endata = AES.encrypt(data, en);
      console.log(endata);
      // this.$loading.show("Loading...");
      GetAgentInfo({ data: endata })
        .then((res) => {
          // setTimeout(() => {
          //   this.$loading.hide();
          // }, 2000);
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          console.log(msg, "response msg of created");
          if (msg.JsonData.code == 200) {
            // this.$store.state.LoginData.Agentid = msg.JsonData.Id;
            // this.$store.state.LoginData.Agentname = msg.JsonData.name;
            this.qq = msg.JsonData.QQ;
            this.wx = msg.JsonData.WXH;
            this.ph = msg.JsonData.phone;
            this.value = msg.JsonData.downloadUrl;
            this.tAgent = msg.JsonData.tAgent;
            this.serviceLink = msg.JsonData.customerAddr

            this.$store.state.LoginData.Agentid = msg.JsonData.Id;
            this.$store.state.LoginData.Agentname = msg.JsonData.name;
            this.$store.state.LoginData.QQ = msg.JsonData.QQ;
            this.$store.state.LoginData.WX = msg.JsonData.WXH;
            this.$store.state.LoginData.PH = msg.JsonData.phone;
            this.$store.state.LoginData.enable = msg.JsonData.enable;
            this.$store.state.LoginData.androidAddr = msg.JsonData.androidAddr;
            this.$store.state.LoginData.iosAddr = msg.JsonData.iosAddr;
            this.$store.state.LoginData.customerAddr =
              msg.JsonData.customerAddr;
            this.$store.state.LoginData.downloadUrl = msg.JsonData.downloadUrl;
            this.$store.state.LoginData.gameAddr = msg.JsonData.gameAddr;
            this.$store.state.LoginData.tAgent = msg.JsonData.tAgent;
          }
        })
        .catch((e) => {
          // setTimeout(() => {
          //   this.$loading.hide();
          // }, 2000);
          console.log(e);
        });
    },

    randomString(len, charSet) {
      charSet =
        charSet ||
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/";
      var randomString = "";
      for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
      }
      return randomString;
    },
    doEncrypt() {
      let data = {
        acc: this.$store.state.myAccount,
        pwd: this.$md5(this.$store.state.myPassword),
        agent: 3, // 1.hn 2.wl 3.hngs 4.ws 5.kb
      };
      let data1 = Base64.encode(JSON.stringify(data));
      let data2 = data1.substring(0, 8);
      let data3 = data1.substring(8);
      let add8 = data2 + this.randomString(8);
      let token = this.randomString(9) + add8 + data3;
      return token;
    },
    Calcutime() {
      var timestampInSeconds = Math.floor(Date.now() / 1000);
      var date = new Date(timestampInSeconds * 1000);
      var mill = new Date(date).getTime() / 1000;
      return mill;
    },
    //onliine service pic click and go to customer service
    Service() {
      if (this.$store.state.login == false) {
        return this.$message.warning("请先登录");
      } else {
        let token = this.doEncrypt();
        window.open(`http://kefu.hn885.com?token=${token}`);
      }
    },
  },
  computed: {
    qrValue() {
      var downUrl = this.$store.state.LoginData.downloadUrl;
      return downUrl;
    },
    ...mapState({ login: (state) => state.login }),
    ...mapGetters(["loginGetter"]),

    openUrl() {
      // const url = this.$store.state.LoginData.customerAddr;
      // if (url == "" || url == null) {
      //   if (window.location.host == 'xincs597.com' || window.location.host == 'www.xincs597.com') {
      //     return url;
      //     //return window.open
      //   }
      //   return
      // }

      // let loginId = this.$Global.myLoginInfo.loginId;
      // let loginName = this.$Global.myLoginInfo.loginName;
      // let splitedUrl = url.split("=");
      // let nick_name = `&nick_name=${loginName}`;
      // let cusUrl =
      //   splitedUrl[0] +
      //   "=" +
      //   loginId +
      //   splitedUrl[1] +
      //   "=" +
      //   splitedUrl[2] +
      //   "=" +
      //   splitedUrl[3] +
      //   "=" +
      //   splitedUrl[4] +
      //   "=" +
      //   splitedUrl[5] +
      //   nick_name;
      // return cusUrl;

      let url = this.$store.state.LoginData.customerAddr;
      // let url = 'https://355635.com/#/?visiter_id=&avatar=&business_id=11&groupid=11&special=2862'
      if (url) {
        if (this.$store.state.login == true) {
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
        } else {
          return url;
          //window.open(url)
        }
      }else{
        window.open("https://355635.com/#/?visiter_id=&avatar=&business_id=11&groupid=11&special=2862")
      }
    },
  },
  created() {
    var url = window.location.host;
    //var url = "yl59868.com";
     //var url = "hn7599.com";
    // var url = "45.116.164.146:3198";
     //var url = "jstest.com";
    // this.download_Link = downLink;
    // console.log(this.download_Link);
    // var a = url.split(".")[0];
    // var userid = a.split("//")[1];
    this.GetAgentdata(url);
    this.GetScrollData(this.id);
    // window.frames["iframe"];
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #2b2b32;
  width: 100%;
  margin-top: 86px;
  // background: url(https://img2.54ei.com/hn/index/imgs/bg.jpg);
  // background-size: cover;
  position: relative;
}

//footer

.footer_page {
  width: 100%;
  position: relative;
}
footer {
  background-color: #2b2b32;
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffc34c;
  font-size: 14px;
}
.iframe {
  position: fixed;
  bottom: 100px;
  z-index: 998;
  right: 100px;
  // height: 375px;
  // width: 300px;
}
.sidebar {
  position: fixed;
  bottom: 100px;
  z-index: 998;
  right: 30px;
  ul {
    font-size: 14px;
    color: #fff;

    li:hover {
      span {
        display: block;
      }
      .icon-kefu {
        display: none;
      }
      .icon-wechat {
        display: none;
      }
      .icon-phone {
        display: none;
      }
      .qq {
        display: block;
      }
      .wx {
        display: block;
      }
    }
    li {
      width: 50px;
      height: 50px;
      margin-top: 10px;
      text-align: center;
      border-radius: 3px;
      position: relative;
      transition: 0.3s;
      cursor: pointer;
      list-style: none;
      background: #a87c25;
      i {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        font-size: 38px;
      }

      span {
        padding: 8px 5px;
        position: relative;
        z-index: 1;
        line-height: 1;
        display: none;
        font-size: 16px;
      }
      .icon-kefu {
        background: url(../assets/home/ic_kf.svg) no-repeat 50%;
      }
      .icon-app {
        background: url(../assets/home/ic_app.svg) no-repeat 50%;
      }
      .icon-phone {
        background: url(../assets/home/ic_shouji.png) no-repeat 50%;
      }
      .icon-wechat {
        background: url(../assets/home/ic_wechat.svg) no-repeat 50%;
      }
      .icon-qq {
        background: url(../assets/home/ic_qq.svg) no-repeat 50%;
      }
    }
  }
}

.app_down {
  width: 50px;
  height: 50px;
  margin-top: 10px;
  text-align: center;
  border-radius: 3px;
  position: relative;
  transition: 0.3s;
  cursor: pointer;
  list-style: none;
  background: #a87c25;
}
.app_down:hover {
  .qrcode_div {
    display: block;
  }
  .icon-app {
    display: none;
  }
}

.app_down {
  width: 50px;
  height: 50px;
  margin-top: 10px;
  text-align: center;
  border-radius: 3px;
  position: relative;
  transition: 0.3s;
  cursor: pointer;
  list-style: none;
  background: #a87c25;
}
.app_down:hover {
  .qrcode_div {
    display: block;
  }
  .icon-app {
    display: none;
  }
}
// currently not use
// .qrcode_div {
//   position: fixed;
//   bottom: 80px;
//   z-index: 998;
//   right: 100px;
//   //   height: 50px;
//   //   background: red;
//   //   width: 50px;
//   display: none;
//   img {
//     height: 200px;
//     width: auto;
//   }
// }
.qrcode_div {
  position: fixed;
  bottom: 80px;
  z-index: 998;
  right: 100px;
  //   height: 50px;
  //   background: red;
  //   width: 50px;
  // display: none;
  img {
    height: 200px;
    width: auto;
  }
}
.phone-item {
  display: flex;
  position: fixed;
  bottom: 220px;
  z-index: 998;
  right: 100px;
  // width: 10px;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
  width: auto;
  line-height: 40px;
  height: auto;
  padding: 0 20px;
  // padding-bottom: 10px;
  // margin: 0 20px;
}
.phone-item .phone-text {
  background: #3a3a3a;
  width: auto;
  height: auto;
  padding: 0 10px;
}
.phone-item .phone-copy {
  width: 40px;
  height: 40px;
  background: url(https://img2.54ei.com/dfh/contact_svg/btn_copy1.png?1=)
    no-repeat 50%;
  background-size: cover;
}
.qq_wx:hover {
  .qqsection {
    display: block;
  }
}
.qqsection {
  display: none;
  height: auto;
  width: auto;
  position: fixed;
  right: 100px;
  bottom: 100px;
  background: #212121;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.849);
  border-radius: 5px;
}
.info-section {
  height: auto;
  width: 100%;
  .QQsection {
    border-bottom: 1px solid gray;
    width: 100%;
    color: #fff;
    text-align: left;
    padding: 10px 5px;
    // display: flex;
    // align-items: center;
    .qqtext-t {
      font-weight: bold;
      font-size: 16px;
      white-space: normal;
      word-wrap: break-word;
      word-break: break-all;
      letter-spacing: 1px;
      margin-top: 3px;
      // padding-right: 5px;
    }
  }
}

.qrcodevue {
  padding: 10px;
  background: #fff;
}
</style>
