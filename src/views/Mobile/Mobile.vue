<template>
  <div style="width: 100%; height: 100%; background: #2b2b32">
    <div class="header">
      <div class="logo-section">
        <div class="login" @click="Gologin()" v-if="this.$store.state.login == false">登录</div>
        <div class="login" @click="Gologin()" v-if="this.$store.state.login == true">已登录</div>
        <img src="../../assets/home/logo.png" alt class="logo-img" />
        <!-- v-if="this.$store.state.LoginData.tAgent == 1" -->
        <div v-if="this.$store.state.login == false" class="login register" @click="GoRegister()">注册</div>
        <div v-else class="login register" style="background:transparent"></div>
      </div>
      <img class="head_line" src="../../assets/mobile/header_line.png" alt />
      <!-- nav -->
      <div class="nav">
        <ul>
          <li @click="goAssignBlock('block' + 0, 50)" :class="{ active: activeTab == 1 }">盈联国际</li>
          <li @click="goAssignBlock('block' + 1, 50)" :class="{ active: activeTab == 2 }">公司信息</li>
          <li @click="goAssignBlock('block' + 2, 50)" :class="{ active: activeTab == 3 }">真人</li>
          <li @click="goAssignBlock('block' + 3, 50)" :class="{ active: activeTab == 4 }">前往游戏</li>
          <li @click="goAssignBlock('block' + 4, 50)" :class="{ active: activeTab == 5 }">游戏产品</li>
        </ul>
      </div>
    </div>
    <!-- carousal -->
    <div class="carousal" ref="block0">
      <!-- carousal banner with img -->
      <div class="caro-main">
        <div class="carousal-img" v-for="(item, index) in cList" :key="index">
          <transition name="fade">
            <img v-if="currentSlide == index" style="height: 520px; width: 100%" :src="item.img" />
          </transition>
        </div>
        <!-- dot section -->
        <div style="height: 490px; width: 100%; position: relative">
          <div style="
              position: absolute;
              bottom: 0%;
              width: 100%;
              display: flex;
              justify-content: center;
            ">
            <div v-for="(item, index) in cList" :key="index" @click="makeActive(index)" :class="currentSlide == index ? 'gray' : 'white'" style="
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 100%;
                cursor: pointer;
                margin: 5px;
              "></div>
          </div>
        </div>
        <!--  -->
      </div>
      <!-- marquee text -->
      <div class="marquee">
        <marquee behavior direction>{{ scrolldata }}</marquee>
      </div>
  <!-- v-if="this.$store.state.LoginData.customerAddr" -->
      <div   class="customer-service" @click="Service()">
        <img src="../../assets/home/ic_kf.svg" alt width="100%" height="100px" />
      </div>
    </div>
    <!-- v-if="this.showdata" -->
    <!-- end carousal -->
    <!--  -->
    <div class="area one" ref="block1">
      <div class="area-bg">
        <!-- <img src="../../assets/home/3.jpg" alt /> -->
        <img src="../../assets/home/44.jpg" alt style="height:800px;object-fit: cover;mix-blend-mode: overlay;" />
        
        <div class="header-group">
          <!-- margin-top: -10rem; -->
          <h3 style="
              font-size: 3rem;
              font-weight: bold;
              color: #ffc44c;
             
            ">全终端支持</h3>
          <p>全面支持PC、H5、APP，以及Android SDK、IOS SDK</p>
          <a class="game-btn" @click="dApp()"></a>
        </div>
      </div>
    </div>
    <!-- company info -->
    <div class="area two" ref="block2">
      <div class="area-bg">
        <!-- <img src="../../assets/home/2.png" alt /> -->
         <img src="../../assets/home/33.jpg" alt style="height:800px;object-fit: cover;mix-blend-mode: overlay;" />
        <div class="header-group">
          <h3>全真人实景娱乐厅</h3>
          <p>真实现场，全真人发牌，美女荷官，24小时实时验证，可来实体现场，公司专人接送，请联系官方客服，报销机票，包食宿，给您帝王般的享受。</p>
        </div>
      </div>
    </div>
    <!-- end companyinfo -->
    <div class="card_text" ref="block3">进入游戏</div>
    <div class="card_image">
      <div class="card">
        <img src="../../assets/home/card2.jpg" alt draggable="false" style="height: auto; width: 100%" />
        <div class="popbtn">
          <div class="common-btn ok" @click="GoSite()" v-if="this.$store.state.login == true">立即游戏</div>

          <div class="common-btn ok" @click="PlayGame()" v-if="this.$store.state.login == false">立即试玩</div>
        </div>
      </div>
    </div>
    <div class="card_image">
      <div class="card">
        <img src="../../assets/home/card3.jpg" alt draggable="false" />
        <div class="popbtn">
          <div class="common-btn ok" @click="GoSite()" v-if="this.$store.state.login == true">立即游戏</div>
          <div class="common-btn ok" @click="PlayGame()" v-if="this.$store.state.login == false">立即试玩</div>
        </div>
      </div>
    </div>
    <!-- end card -->
    <!-- 1 -->
    <div class="scroll_div">
      <div class="float-title">
        <span class="icon-imgs">
          <img src="@/assets/lang.png" alt />
          <i style="background: rgb(255, 75, 0)"></i>
        </span>
        <div>
          <h5>支持多语言</h5>
          <p>全球畅玩，多语言支持</p>
        </div>
      </div>
      <div class="scroll__img__div" ref="block4">
        <div class="scroll_img" v-for="(item, index) in language" :key="index">
          <img :src="item.image" alt draggable="false" />
          <span>{{ item.text }}</span>
        </div>
      </div>
      <!--  -->
    </div>
    <!-- 2 -->
    <div class="scroll_div">
      <div class="float-title">
        <span class="icon-imgs">
          <img src="@/assets/chip.png" alt />
          <i style="background: rgb(255, 75, 0)"></i>
        </span>
        <div>
          <h5>YINGLIAN casino</h5>
          <p>视讯游戏</p>
        </div>
      </div>
      <div class="scroll__img__div" ref="block5">
        <div class="scroll_img" v-for="(item, index) in game" :key="index" @click="PlayGame()">
          <img :src="item.image" alt draggable="false" />
          <span>轮盘</span>
        </div>
      </div>
      <!--  -->
    </div>
    <!-- footer -->
    <!-- <div id="footer">
      <p>COPYRIGHT © YINGLIANINTERNATIONAL RESERVED.</p>
    </div>-->
    <div id="footer">
      <div >
        <div v-if="this.$store.state.LoginData.PH" class="contact">
          <img src="@/assets/home/phone-call.svg" alt width="75px" height="85px" />
          <div class="text">{{this.$store.state.LoginData.PH}}</div>
        </div>
        <div class="contact" v-if="this.$store.state.LoginData.QQ">
          <img src="@/assets/home/ic_qq.svg" alt width="75px" height="85px" />
          <div class="text">{{this.$store.state.LoginData.QQ}}</div>
        </div>
        <div class="contact" v-if="wx">
          <img src="@/assets/home/ic_wechat.svg" alt width="75px" height="85px" />
          <!-- <div class="text">  {{this.$store.state.LoginData.WX}}</div> -->
          <div class="text">
            <qrcode-vue :value="wx" :size="size" level="H" class="qrcodevue"></qrcode-vue>
          </div>
        </div>
      </div>
      <p>COPYRIGHT © YINGLIANINTERNATIONAL RESERVED.</p>
    </div>
  </div>
</template>

<script>
import AES from "../../api/aes";
import { Base64 } from "js-base64";
import { GetAgentInfo, GetScrollText } from "@/api/user";
import QrcodeVue from "qrcode.vue";

export default {
  components: {
    QrcodeVue,
  },
  data() {
    return {
      size: 400,
      showdata: false,
      activeTab: 1,
      interval: "",
      isTitleShowing: true,
      currentSlide: 1,
      scrolldata: "",
      tAgent:"",
      wx: "",
      cList: [
        {
          img: require("../../assets/home/banner1.jpg"),
        },
        {
          img: require("../../assets/home/banner2.jpg"),
        },
        {
          img: require("../../assets/home/banner3.jpg"),
        },
      ],

      language: [
        {
          image: require("../../assets/home/cn.png"),
          text: "CN",
        },
        {
          image: require("../../assets/home/en.png"),
          text: "EN",
        },
        {
          image: require("../../assets/home/th.png"),
          text: "TH",
        },
        {
          image: require("../../assets/home/tw.png"),
          text: "TW",
        },
        {
          image: require("../../assets/home/vn.png"),
          text: "VN",
        },
      ],
      game: [
        {
          image: require("../../assets/home/bjl.png"),
          text: "百家乐",
        },
        {
          image: require("../../assets/home/lh.png"),
          text: "龙虎斗",
        },
        {
          image: require("../../assets/home/lp.png"),
          text: "炸金花",
        },
        {
          image: require("../../assets/home/nn.png"),
          text: "牛牛",
        },
        {
          image: require("../../assets/home/sd.png"),
          text: "推筒子",
        },
        {
          image: require("../../assets/home/sz.png"),
          text: "大小点",
        },
      ],
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 4000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    GoSite() {
      if (this.$store.state.login == false) {
        return this.$message.warning("请先登录");
      } else {
        var gameEn = this.$Global.gameEn;
        let data = {
          name: this.$store.state.myAccount,
          password: this.$md5(this.$store.state.myPassword),
        };
        var endata = AES.encrypt(JSON.stringify(data), gameEn);
        // window.open(
        //   "http://" + this.$store.state.LoginData.gameAddr + `?token=${endata}`
        // );
        window.open(
          "https://pc.yl686696.com/"  + `?token=${endata}`
        );
      }
    },
    PlayGame() {
      //window.open("http://" + this.$store.state.LoginData.gameAddr + "?token=");
      window.open('https://pc.yl686696.com/')
    },
    makeActive(index) {
      this.currentSlide = index;
    },
    Gologin() {
      if (this.$store.state.login == true)
        return this.$mobilemessage.warning("您已登陆成功");
      this.$router.push("/m/login");
    },
    GoRegister() {
      this.$router.push("/m/register");
    },
    //el 标签  speed 滚动速率 此处是50px 值越大滚动的越快
    goAssignBlock(el, speed) {
      switch (el) {
        case "block0":
          this.activeTab = 1;
          break;
        case "block1":
          this.activeTab = 2;
          break;
        case "block2":
          this.activeTab = 3;
          break;
        case "block3":
          this.activeTab = 4;
          break;
        case "block4":
          this.activeTab = 5;
          break;
      }
      // let _this = this
      let windowH = window.innerHeight; //浏览器窗口高度
      let h = this.$refs[el].offsetHeight; //模块内容高度
      let t = this.$refs[el].offsetTop; //模块相对于内容顶部的距离
      let top = t - (windowH - h) / 2; //需要滚动到的位置，若改为 t 则滚动到模块顶部位置，此处是滚动到模块相对于窗口垂直居中的位置
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; //滚动条距离顶部高度
      let currentTop = scrollTop; //默认滚动位置为当前滚动条位置，若改为0，则每次都会从顶部滚动到指定位置
      let requestId;
      //采用requestAnimationFrame，平滑动画
      function step() {
        //判断让滚动条向上滚还是向下滚
        if (scrollTop < top) {
          if (currentTop <= top) {
            //   window.scrollTo(x,y) y为上下滚动位置
            window.scrollTo(0, currentTop);
            requestId = window.requestAnimationFrame(step);
          } else {
            window.cancelAnimationFrame(requestId);
          }
          //向下滚动
          currentTop += speed;
        } else {
          if (top <= currentTop) {
            //注：此处 - speed 是解决居中时存在的问题，可自行设置或去掉
            window.scrollTo(0, currentTop - speed);
            requestId = window.requestAnimationFrame(step);
          } else {
            window.cancelAnimationFrame(requestId);
          }
          //向上滚动
          currentTop -= speed;
        }
      }
      window.requestAnimationFrame(step);
    },

    //customer service
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
      // console.log(data);
      // let data ={
      //   acc:"admin",
      //   pwd:this.$md5("111111")
      // }
      let data1 = Base64.encode(JSON.stringify(data));
      let data2 = data1.substring(0, 8);
      let data3 = data1.substring(8);
      let add8 = data2 + this.randomString(8);
      let token = this.randomString(9) + add8 + data3;
      // console.log(data1, data2, data3, add8, token)
      return token;
    },
    //onliine service pic click and go to customer service
    Service() {
      // if (this.$store.state.login == false) {
      //   if (window.location.host == 'xincs597.com' || window.location.host == 'www.xincs597.com') {
      //    let custUrl = this.$store.state.LoginData.customerAddr;
      //   if (custUrl == "" || custUrl == null) return;
      //   window.open(custUrl);
      //   }
      //   return this.$mobilemessage.warning("请先登录");
      // } else {
      //   const url = this.$store.state.LoginData.customerAddr;
      //   if (url == "" || url == null) return;
      //   window.open(url);
      // }

      let url = this.$store.state.LoginData.customerAddr;
       let url22 = 'https://355635.com/#/?visiter_id=&avatar=&business_id=11&groupid=11&special=2862'
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
          window.open(cusUrl);
        } else {
          window.open(url);
          //window.open(url)
        }
      }else{
        window.open(url22)
      }
    },
    dApp() {
      //window.open(this.$store.state.LoginData.downloadUrl);
      window.open('https://www.888879.tv/')
    },
    getAgentInfo(domain) {
      var en = this.$Global.en;
      let data = JSON.stringify({ domain: domain });
      let endata = AES.encrypt(data, en);

      // var decryptdata = JSON.parse(AES.decrypt(endata, en));
      GetAgentInfo({ data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          console.log(msg);
          if (msg.JsonData.code == 200) {
            this.$store.state.LoginData.Agentid = msg.JsonData.Id;
            this.$store.state.LoginData.Agentname = msg.JsonData.name;
            this.qq = msg.JsonData.QQ;
            this.wx = msg.JsonData.WXH;
            this.ph = msg.JsonData.phone;
            this.$store.state.LoginData.QQ = msg.JsonData.QQ;
            this.$store.state.LoginData.WX = msg.JsonData.WXH;
            this.$store.state.LoginData.PH = msg.JsonData.phone;
            this.$store.state.LoginData.enable = msg.JsonData.enable;
            this.$store.state.LoginData.androidAddr = msg.JsonData.androidAddr;
            this.$store.state.LoginData.iosAddr = msg.JsonData.iosAddr;
            this.$store.state.LoginData.customerAddr =
              msg.JsonData.customerAddr;
            this.$store.state.LoginData.gameAddr = msg.JsonData.gameAddr;
            this.$store.state.LoginData.tAgent = msg.JsonData.tAgent;
            this.tAgent = msg.JsonData.tAgent;
            this.$store.state.LoginData.downloadUrl = msg.JsonData.downloadUrl;
          }
        })
        .catch((e) => {
          console.error(e);
        });
    },
    GetScrollData(id) {
      var en = this.$Global.en;
      let data = JSON.stringify({ Id: id });
      let endata = AES.encrypt(data, en);
      //  var decryptdata = JSON.parse(AES.decrypt(endata, en));

      GetScrollText({ data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          // console.log(msg);
          if (msg.JsonData.code == 200) {
            //this.scrolldata = msg.JsonData.msg;
            this.scrolldata = "为了给广大游戏玩家带来更安全稳定的线上体验环境，公司将针对在线上进行游戏无差额对打套利,洗钱等违反公司常规游戏操作的用户进行净网行动，一经发现封号冻结资金，概不退还！"
          } else {
            this.scrolldata =
              "为了给广大游戏玩家带来更安全稳定的线上体验环境，公司将针对在线上进行游戏无差额对打套利,洗钱等违反公司常规游戏操作的用户进行净网行动，一经发现封号冻结资金，概不退还！";
          }
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
  created() {
    // let s = window.location.href;
     //var url = "yl59866.com";
    // let h = s.split(".")[0];
    // let a = h.split("//")[1];
  var url = window.location.host;
    //var url = "xincs597.com";
    this.getAgentInfo(url);

    this.GetScrollData(this.id);
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 230px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  // background: white;
  background: #2b2b32;
  .logo-section {
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
     height: 160px;
    // background: rgb(116, 129, 95);
    // height: 210px;
    width: 100%;
    .login {
      //   height: 210px;
      margin: 0 5%;
      width: 20%;
      background: linear-gradient(-135deg, #9b6a08, #f5b330);
      height: 40%;
      cursor: pointer;
      font-size: 2.5rem;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      letter-spacing: 0.2em;
    }
    .register {
      background: linear-gradient(-135deg, #7f7db1, #d8b02e);
    }

    .logo-img {
      // margin: 5px 0;
      // background: red;
      // height: 130px;
      // width: 100px;
      // height: 150px;
       width: 280px;
    }
  }
  .head_line {
    width: 100%;
    margin: 0;
     height: 2px;
  }
  .nav {
    width: 100%;
    height: 50px;
    margin-top: 20px;
    // margin: 20px 0;
    // margin: 5px 0 0 0;
    // background-color: red;
    // margin-top: 20px;
    margin-bottom: 50px;
    ul {
      display: flex;
      justify-content: space-around;
      //   height: 10px;
      list-style: none;
      text-align: center;
      align-items: center;
      margin: 5px;
      //    height: 100%;
      //    margin: 5px;
      //   margin: 20px 0 15px 0;
      //   background: #ccc;
      li {
        color: white;
        line-height: 30px;
        font-size: 2vh;
        text-align: center;
      }
    }
  }
}
.active {
  color: #ecb350 !important;
}

//carousal
.carousal {
  height: 600px;
  margin-top: 230px;
  position: relative;
  //   background: blue;
  overflow: hidden;
  .caro-main {
    height: 520px;
    // background: red;
    position: relative;
    .carousal-img {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      // background: green;
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: all 1s ease;
    }
    .fade-enter-from {
      opacity: 0;
      transform: translateX(-100%);
    }
    .fade-leave-to {
      opacity: 0;
      transform: translateX(100%);
    }

    .gray {
      background: #e74f4f;
    }
    .white {
      background: rgb(255, 249, 249);
    }
  }
  // marquee
  .marquee {
    height: 80px;
    background: #fff;
    width: 100%;
    marquee {
      height: 80px;
      width: 100%;
      background: #2b2b32;
      line-height: 80px;
      color: #fff;
      font-size: 2rem;
    }
  }

  .customer-service {
    width: 8rem;
    height: 5rem;
    position: fixed;
    top: 30%;
    z-index: 1000;
    right: 1%;
    // background: red;
  }
  .qq {
    position: fixed;
    // bottom: 120px;
    z-index: 998;
    right: 1%;
    top: 36%;
    // height: 8rem;
    height: auto;
    background: #a87325;
    width: 14rem;
    text-align: center;
    padding: 0.5rem;
    border-radius: 5px;
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    font-size: 2.5rem;
    color: #fff;
    // margin: 3rem;
    // display: none;
  }
  .wx {
    position: fixed;
    // bottom: 120px;
    z-index: 998;
    right: 1%;
    top: 45%;
    // height: 8rem;
    height: auto;
    background: #a87325;
    width: 14rem;
    text-align: center;
    padding: 0.5rem;
    border-radius: 5px;
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    font-size: 2.5rem;
    margin-top: 2rem;
    color: #fff;
  }
}

//company info
.area {
  position: relative;
  flex: 1;
  //   background-color: #efefef;
  color: #fff;
  scrollbar-width: none;
  .area-bg {
    position: relative;
    img {
      width: 100%;
      // height: auto;
    }
    .header-group {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: height 0.6s ease, opacity 0.2s ease;
      user-select: none;
      text-align: center;
      position: absolute;
      top: 0;
      height: 50%;
      width: 100%;
      overflow: auto;
      //   background: red;
      p {
        padding: 0 2rem;
        letter-spacing: 0.2rem;
        font-size: 2.4rem;
        // font-weight: bold;
        font-weight: 600;
        // line-height: 3rem;
        // color: #fff;
      }
      h3 {
        font-size: 5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #ffc44c;
      }
    }
  }
}

.card_text {
  width: 100%;
  text-align: center;
  color: #ecb350;
  font-size: 4rem;
  margin: 2rem 0;
  font-weight: bold;
}
//scroll card
.card_image {
  position: relative;
  height: 35rem;
  width: 100%;
  // margin-top: 3rem;
  margin-bottom: 2rem;
  //  background: red;
  .card {
    width: 100%;
    // background: red;
    height: 100%;
    // margin: 0 5%;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
    .popbtn {
      position: absolute;
      width: 100%;
      height: 10rem;
      background: rgba(0, 0, 0, 0.5);
      bottom: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .common-btn {
      text-align: center;
      color: #000;
      width: 15rem;
      line-height: 5rem;
      font-size: 2.5rem;
      border-radius: 10px;
      margin: 0 auto;
      cursor: pointer;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .ok {
      background-image: linear-gradient(90deg, #ecb350, #fcd694),
        linear-gradient(#98a0a6, #98a0a6);
    }
  }
}

//@at-root

.scroll_div {
  height: auto;
  width: 100%;
  margin-bottom: 2rem;
  // background-color: rgba(255, 251, 210, 0.15);
  background: #443920;
  .float-title {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    padding: 3rem 5rem;

    // background: red;
    .icon-imgs {
      display: flex;
      position: relative;
      font-size: 38px;
      color: #ffc44c;
      letter-spacing: 0;
      line-height: 15rem;
      padding: 0 2rem 0 0;
      margin: 0 3rem 0 0;
      img {
        width: 5rem;
        height: 100%;
      }
      i {
        display: block;
        position: absolute;
        width: 0.3rem;
        height: 5rem;
        top: 0;
        right: 0;
      }
    }
    h5 {
      font-size: 2.5rem;
      color: #ecb350;
      letter-spacing: 2px;
    }
    p {
      font-size: 2rem;
      color: #ecb350;
      letter-spacing: 1px;
    }
  }
}

//
.scroll__img__div {
  // height: 300px;
  width: 100%;
  //   background: red;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  //justify-content: center;

  overflow-x: scroll;
  .scroll_img {
    // background: wheat;
    display: flex;
    flex-direction: column;
    // margin:0 3rem;
    padding: 0 3rem;
    animation: bannermove 10s linear infinite;
    img {
      width: 200px;
      height: auto;
    }
    // img:last-child{
    //   margin-right: 3rem;
    // }
    span {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 600;
      color: #fff;
      padding-top: 5px;
    }
  }
}
// .language-imgs::-webkit-scrollbar {
//   display: none;
// }
// @keyframes bannermove {
//   0% {
//     transform: translate(50%, 0);
//   }
//   100% {
//     transform: translate(-100%, 0);
//   }
// }

// #footer {
//   // background: #0d4e8b;
//   width: 100%;
//   height: 120px;
//   box-shadow: 0 7px 20px 2px #443920;
//   // border-top: 2px solid #770d0d;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   p {
//     font-weight: bold;
//     font-size: 2vh;
//     cursor: pointer;
//   }
// }
#footer {
  width: 100%;
  padding: 20px 0;
  color: #fff;
  background: rgba(120, 120, 121, 0.08235294117647059);
  p {
    font-weight: 700;
    font-size: 25px;
    cursor: pointer;
    text-align: center;
    margin: 30px 0;
  }
  .contact {
    display: flex;
    align-items: center;
    padding: 10px 40px;
    .text {
      font-size: 2.5rem;
      margin-left: 20px;
      letter-spacing: 1px;
    }
  }
}
// game btn
.game-btn {
  position: relative;
  display: block;
  width: 20rem;
  height: 7rem;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10rem;
  margin-top: 20px;
}
.game-btn:before {
  content: "";
  width: 100%;
  height: 100%;
  background-image: url("../../assets/mobile/btn_download.gif");
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 0;
}
.qrcodevue {
  padding: 10px;
  background: #fff;
}
</style>