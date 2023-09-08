<template>
  <div id="game_card">
    <div class="wl1200">
      <div class="title-flow">
        <div class="title-big">{{$t('g_card_t')}}</div>
        <div class="title-small">{{$t('g_card_t2')}}</div>
      </div>
    </div>
    <!-- image -->
    <div class="card_section">
      <div class="card_flow">
        <!-- one -->
        <div class="item_one" v-scrollanimation>
          <div class="banner1 item">
            <img src="../assets/home/card1.jpg" draggable="false" />
            <div class="popbtn">
              <div
                class="common-btn ok"
                @click="GoSite()"
                v-if="this.$store.state.login == true"
              >
                {{$t('play_now')}}
              </div>
              <div
                class="common-btn ok"
                @click="Test()"
                v-if="this.$store.state.login == false"
              >
                {{$t('try_now')}}
              </div>
              <div
                class="common-btn empty"
                @click="GoSite()"
                v-if="this.$store.state.login == true"
              >
             {{$t('play_now')}}
              </div>
              <div
                class="common-btn empty"
                @click="Test()"
                v-if="this.$store.state.login == false"
              >
                {{$t('try_now')}}
              </div>
            </div>
          </div>
        </div>
        <!-- 立即游戏 -->
        <!-- two -->
        <div class="item_two" v-scrollanimation>
          <div class="item banner2">
            <img src="../assets/home/card2.jpg" alt="" draggable="false" />
            <div class="popbtn">
              <div
                class="common-btn ok"
                @click="GoSite()"
                v-if="this.$store.state.login == true"
              >
              {{$t('play_now')}}
              </div>
              <div
                class="common-btn ok"
                @click="Test()"
                v-if="this.$store.state.login == false"
              >
               {{$t('try_now')}}
              </div>
              <div
                class="common-btn empty"
                @click="GoSite()"
                v-if="this.$store.state.login == true"
              >
              {{$t('play_now')}}
              </div>
              <div
                class="common-btn empty"
                @click="Test()"
                v-if="this.$store.state.login == false"
              >
               {{$t('try_now')}}
              </div>
            </div>
          </div>
          <!--  -->
          <div class="item banner3" v-scrollanimation>
            <img src="../assets/home/card3.jpg" alt="" draggable="false" />
            <!-- hover -->
            <div class="popbtn">
              <div
                class="common-btn ok"
                @click="GoSite()"
                v-if="this.$store.state.login == true"
              >
             {{$t('play_now')}}
              </div>
              <div
                class="common-btn ok"
                @click="Test()"
                v-if="this.$store.state.login == false"
              >
               {{$t('try_now')}}
              </div>
            </div>
            <!--  -->
          </div>
        </div>
        <!-- three -->
        <div class="item-con co3" v-scrollanimation>
          <div class="item banner4">
            <img src="../assets/home/card4.jpg" alt="" draggable="false" />
            <!-- hover -->
            <div class="popbtn">
              <div
                class="common-btn ok"
                @click="GoSite()"
                v-if="this.$store.state.login == true"
              >
              {{$t('play_now')}}
              </div>
              <div
                class="common-btn ok"
                @click="Test()"
                v-if="this.$store.state.login == false"
              >
              {{$t('try_now')}}
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
    </div>
    <!-- end -->
  </div>
</template>

<script>
import AES from "../api/aes";
export default {
  methods: {
    Test() {
      // if(this.$store.state.LoginData.gameAddr == '' || this.$store.state.LoginData.gameAddr == undefined
      //   || this.$store.state.LoginData.gameAddr == null
      // ) return  this.$message.error("未知错误");
      // window.open("http://" + this.$store.state.LoginData.gameAddr + '?token=');
        window.open(
              "https://pc.yl686696.com/" + '?token='
            );
    },
    NOTest() {
      this.$message.warning("即将上线、敬请期待");
    },
    GoSite() {
      if (this.$store.state.login == false) {
        return this.$message.warning("请先登录");
      } else {
        var gameEn = this.$Global.gameEn;
        let data = {
           name: this.$store.state.myAccount,
          password: this.$md5(this.$store.state.myPassword),
        }
        var endata = AES.encrypt(JSON.stringify(data), gameEn);
        console.log(this.$store.state.LoginData.gameAddr);
        //window.open( "http://"+ this.$store.state.LoginData.gameAddr + `?token=${endata}`);
             window.open(
              "https://pc.yl686696.com/" +`?token=${endata}`
            );
      }
    },
  },
};
</script>



<style lang="scss" scoped>
#game_card {
  background-color: #2b2b32;
  width: 100%;
  background: url(../assets/home/bg.jpg);
  background-size: cover;
  position: relative;
  //    padding-bottom: 80px;
  .wl1200 {
    width: 1200px;
    margin: 0 auto;
    // background: red;
    padding-top: 80px;
    padding-bottom: 24px;
  }
  .title-flow {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    .title-big {
      font-size: 40px;
      color: #f4c573;
      font-weight: bolder;
    }
    .title-small {
      padding-left: 10px;
      font-size: 18px;
      color: #f4c573;
      font-weight: bold;
    }
  }
}
.card_section {
  height: 600px;
  //   background: red;
  width: 1200px;
  //   padding-bottom: 80px;
  margin: 0 auto;
  .card_flow {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .item_one {
      width: 490px;
      height: 500px;
      border-radius: 10px;
    }
    .banner1 {
      width: 490px;
      height: 500px;
    }
    .banner1:hover {
      .popbtn {
        display: flex;
      }
    }
    .item {
      position: relative;
      cursor: pointer;
      border-radius: 10px;
      overflow: hidden;
    }
  }
}

.item_two {
  width: 390px;
  height: 500px;
  flex: none;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  .item {
    position: relative;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
  }
  .banner2 {
    width: 390px;
    height: 245px;
    flex: none;
  }
  .banner2:hover {
    .popbtn {
      display: flex;
    }
  }
  .banner3 {
    width: 390px;
    height: 245px;
    flex: none;
    margin-top: 10px;
  }
  .banner3:hover {
    .popbtn {
      display: flex;
    }
  }
}
.co3 {
  width: 300px;
  height: 500px;
  flex: none;
}
.item-con {
  border-radius: 10px;

  .item {
    position: relative;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
  }
  .banner4 {
    width: 300px;
    height: 500px;
    flex: none;
  }
  .banner4:hover {
    .popbtn {
      display: flex;
      bottom: 0;
    }
  }
}

//hover and show data
.ok {
  background-image: linear-gradient(90deg, #ecb350, #fcd694),
    linear-gradient(#98a0a6, #98a0a6);
  user-select: none;
}
.popbtn {
  position: absolute;
  width: 100%;
  height: 100px;
  // bottom: -100px;
  bottom: 0px;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  // display: noe;
  background: rgba(0, 0, 0, 0.5);
  // background: green;
  display: none;
}
.common-btn {
  width: 140px;
  line-height: 48px;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;
  margin: 0 auto;
  cursor: pointer;
  color: #000;
  user-select: none;
}
.empty {
  background: transparent;
  border: 1px solid #ecb350;
  color: #ebac41;
  user-select: none;
}
.before-enter {
  opacity: 0;
  transform: scale(0.5) rotateZ(-25deg);
  transition: all 2s ease-out;
}
.enter {
  opacity: 1;
  transform: scale(1) rotateZ(0deg);
}
</style>