<template>
  <div class="header_main">
    <header class="header">
      <div class="header_1200 flex_center">
        <div class="logo"></div>
        <div class="menu_list">
          <div class="menu">
            <span :class="{ nav_border: active_tab == 1 }" @click="TabClick(1)" v-scroll-to="'#carousal'">{{$t('home')}}</span>
            <span :class="{ nav_border: active_tab == 2 }" @click="TabClick(2)" v-scroll-to="'#info_page'">{{$t('info')}}</span>
            <span :class="{ nav_border: active_tab == 3 }" @click="TabClick(3)" v-scroll-to="'#game_card'">{{$t('game')}}</span>
            <span :class="{ nav_border: active_tab == 4 }" @click="TabClick(4)" v-scroll-to="'#data_page'">{{$t('bu_')}}</span>
            <span :class="{ nav_border: active_tab == 5 }" @click="TabClick(5)" v-scroll-to="'#product_page'">{{$t('pro__')}}</span>
            <!-- <span
              :class="{ nav_border: active_tab == 5 }"
              @click="openPayment()"
              >付款</span
            >
            <span :class="{ nav_border: active_tab == 5 }" @click="openDraw()"
              >提款</span
            >-->
          </div>
        </div>
        <div class="login-obj">
          <div class="login_sec">
            <!-- v-if="this.$store.state.LoginData.tAgent == 1" -->
            <div v-if="this.$store.state.login == false"  class="login_btn" @click="openRegister()">{{$t('reg_')}}</div>
            <div class="login_btn reg" @click="openLogin()" v-if="this.$store.state.login">{{$t('a_l')}}</div>
            <div class="login_btn reg" @click="openLogin()" v-else>{{$t('l_')}}</div>
            <!-- <div class="name" v-if="this.$store.state.login == true">
              {{ this.$Global.myLoginInfo.loginName }}
            </div>-->
            <!-- <div class="__localization" style>
              <svg xmlns="http://www.w3.org/2000/svg" style="color:#fff;width:25px;height:25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>-->
            <!-- <div class="_localization">
              <span
              :style="lang == 'cz' ? 'color:#d8be75' : 'color:#999999'"
               @click="changeLanguage(0)">中文</span>
              <span style="font-size:20px;font-weight:bold;padding:0 10px;color:#d8be75">/</span>
              <span 
               :style="lang == 'en' ? 'color:#d8be75' : 'color:#999999'"
              @click="changeLanguage(1)">English</span>
            </div> -->
          </div>
        </div>

        <!-- name -->
        <!-- <div class="name" v-if="this.$store.state.login == true">
          {{ this.$Global.myLoginInfo.loginName }}
        </div>-->
        <!-- <div class="userinfosection" v-if="this.$store.state.login == true"
         @click="showInfo"
         >
           <img src="@/assets/user.png" alt="" width="30px" height="30px">
           <div class="deshimg">
              <img  src="@/assets/dash.png" align="absmiddle" style="width: 100%; height:100%">
           </div>
             <div v-if="showUserInfomartion" class="dropdown-content">
              <div class="username">
                <p>用户名:</p>
                <p>{{this.$Global.myLoginInfo.loginName}}</p>
              </div>
              <div class="username">
                <p>平衡:</p>
                <p>{{ this.$Global.myLoginInfo.loginBalance}}</p>
              </div>
            </div>
        </div>-->
        <!-- name -->
      </div>
    </header>
    <!-- reg -->
    <div class="wrapper" v-if="RegisterDialog" style="z-index:1000">
      <img src="../assets/closesearch.png" alt @click="CloseDialog" class="close-img" />
      <div class="title">{{$t('com_name')}}</div>
      <form class="form" novalidate @submit.prevent="Register">
        <div class="field">
          <input type="text" required autocomplete="off" v-model="register.name" />
          <label>{{$t('username_')}}</label>
        </div>

        <div class="field">
          <input type="password" required autocomplete="off" v-model="register.pass" />
          <label>{{$t('pass_')}}</label>
        </div>

        <div class="field">
          <input type="password" required autocomplete="off" v-model="register.checkpass" />
          <label>{{$t('confirm_pass')}}</label>
        </div>

        <!-- <div class="field">
          <input type="number" required autocomplete="off" v-model="register.phone" />
          <label>{{$t('phone')}}</label>
        </div> -->

        <div class="field">
          <input type="submit" :value="$t('reg__')" />
          <!-- <button class="btn-regi">注册账号</button> -->
        </div>
      </form>
    </div>

    <!-- login -->

    <div class="wrapper" v-if="LoginDialog" style="z-index:1000">
      <img src="../assets/closesearch.png" alt @click="CloseLoginDialog" class="close-img" />
      <div class="title">{{$t('com_name')}}</div>
      <form class="form" novalidate @submit.prevent="Login">
        <div class="field">
          <input type="text" required autocomplete="off" v-model="login.username" />
          <label>{{$t('username_')}}</label>
        </div>

        <div class="field">
          <input type="password" required autocomplete="off" v-model="login.password" />
          <label>{{$t('pass_')}}</label>
        </div>

        <div class="field">
          <input type="submit" :value="$t('l_')" />
          <!-- <button class="btn-regi">注册账号</button> -->
        </div>
      </form>
    </div>

    <!-- payment -->
    <div class="wrapper" v-if="PaymentDialog">
      <img src="../assets/closesearch.png" alt @click="ClosePaymentDialog" class="close-img" />
      <div class="title">盈联国际</div>
      <form class="form" novalidate @submit.prevent="SumbitPay">
        <div class="field">
          <input type="number" required autocomplete="off" v-model="payment.amount" />
          <label>请输入转账金额</label>
        </div>

        <div class="field">
          <input type="submit" value="立即支付" />
          <!-- <button class="btn-regi">注册账号</button> -->
        </div>
      </form>
    </div>

    <!-- draw -->
    <!-- <div class="wrapper" v-if="WithdrawDialog">
      <img
        src="../assets/closesearch.png"
        alt=""
        @click="CloseDrawDialog"
        class="close-img"
      />
      <div class="title">盈联国际</div>
      <form class="form" novalidate @submit.prevent="Draw">
        <div class="field">
          <input
            type="text"
            required
            autocomplete="off"
            v-model="withdrawl.bankname"
          />
          <label>请输入银行名称</label>
        </div>

        <div class="field">
          <input
            type="password"
            required
            autocomplete="off"
            v-model="withdrawl.bankaccount"
          />
          <label>请输入银行账户名称</label>
        </div>

        <div class="field">
          <input
            type="number"
            required
            autocomplete="off"
            v-model="withdrawl.bankcard"
          />
          <label>请输入银行账号</label>
        </div>

        <div class="field">
          <input
            type="number"
            required
            autocomplete="off"
            v-model="withdrawl.withdrawmoneyamount"
          />
          <label>请输入取款金额</label>
        </div>

        <div class="field">
          <input type="submit" value="立即取款" />
        
        </div>
      </form>
    </div>-->
    <!-- end of draw payment -->
  </div>
</template>

<script>
import AES from "@/api/aes";
import { UserRegister, UserLogin, GetUserBalance } from "@/api/user";
export default {
  data() {
    return {
      lang: localStorage.getItem("l"),
      active_tab: 1,
      showUserInfomartion: false,
      register: {
        name: "",
        pass: "",
        checkpass: "",
        phone: "",
      },
      login: {
        username: "",
        password: "",
      },
      payment: {
        amount: "",
      },
      withdrawl: {
        bankname: "",
        bankaccount: "",
        bankcard: "",
        withdrawmoneyamount: "",
      },
      RegisterDialog: false,
      LoginDialog: false,
      PaymentDialog: false,
      WithdrawDialog: false,
    };
  },
  methods: {
    changeLanguage(n) {
      switch (n) {
        case 0:
          localStorage.setItem("l", 'cz');
          window.location.reload();
          break;
        case 1:
          localStorage.setItem("l", 'en');
          window.location.reload();
          break;

        default:
          break;
      }
    },
    showInfo() {
      this.showUserInfomartion = !this.showUserInfomartion;
    },
    openRegister() {
      this.RegisterDialog = true;
      this.LoginDialog = false;
      this.PaymentDialog = false;
      // this.WithdrawDialog = false;
      document.body.classList.add("modal-open");
    },
    openLogin() {
      if (this.$store.state.login == true) {
        return this.$message.warning("您已登陆成功");
      }

      this.LoginDialog = true;
      this.RegisterDialog = false;
      this.PaymentDialog = false;
      // this.WithdrawDialog = false;
      document.body.classList.add("modal-open");
    },
    openPayment() {
      if (this.$store.state.login == false)
        return this.$message.warning("请先登录");
      this.PaymentDialog = true;
      this.RegisterDialog = false;
      this.LoginDialog = false;
      //this.WithdrawDialog = false;
      document.body.classList.add("modal-open");
      //  return this.$message.warning("请联系客服")
    },
    openDraw() {
      // if (this.$store.state.login == false)
      //   return this.$message.warning("请先登录");
      // this.WithdrawDialog = true;
      // this.PaymentDialog = false;
      // this.RegisterDialog = false;
      // this.LoginDialog = false;
      // document.body.classList.add("modal-open");
      return this.$message.warning("请联系客服");
    },
    CloseDialog() {
      this.RegisterDialog = false;
      document.body.classList.remove("modal-open");
    },
    CloseLoginDialog() {
      this.LoginDialog = false;
      document.body.classList.remove("modal-open");
    },
    ClosePaymentDialog() {
      this.PaymentDialog = false;
      document.body.classList.remove("modal-open");
      this.payment.amount = "";
    },
    CloseDrawDialog() {
      this.WithdrawDialog = false;
      document.body.classList.remove("modal-open");
      this.withdrawl.bankname = "";
      this.withdrawl.bankaccount = "";
      this.withdrawl.bankcard = "";
      this.withdrawl.withdrawmoneyamount = "";
    },
    TabClick(n) {
      this.active_tab = n;
    },
    UserBalance() {
      var en = this.$Global.en;
      const data = JSON.stringify({
        Id: this.$Global.myLoginInfo.loginId,
        token: "",
      });
      let endata = AES.encrypt(data, en);
      GetUserBalance({ data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          console.log("userbalanceeeeeeeeeeeeeeeeeee", msg);
          if (msg.JsonData.code == 200) {
            this.$Global.myLoginInfo.loginBalance = msg.JsonData.balance;
          }
        })
        .catch((e) => {
          return this.$message.warning(e.toString());
        });
    },
    Register() {
      // console.log("enter register");
      var en = this.$Global.en;
      if (this.register.name == "") return this.$message.warning("请输入账号");
      if (this.register.pass == "") return this.$message.warning("请输入密码");
      if (this.register.checkpass == "")
        return this.$message.warning("请输入确认密码");
      // if (this.register.phone == "")
      //   return this.$message.warning("请输入手机号");
      if (this.register.pass !== this.register.checkpass)
        return this.$message.warning("两次输入密码不一致");

      // if (
      //   !/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(
      //     this.register.phone
      //   )
      // ) {
      //   return this.$message.warning("手机号码格式不对");
      // }

      if (
        !/\d/.test(this.register.pass) ||
        !/[a-zA-Z]/.test(this.register.pass)
      )
        return this.$message.warning("密码必须包含数字和英文字母");

      // var t_agent = this.$store.state.LoginData.tAgent;
      // if (t_agent == 0) {
      //   return this.$message.warning("总代理不能注册,只能登录下载");
      // }

      var agentName = this.$store.state.LoginData.Agentname;
      if (agentName == "") {
        return this.$message.warning("您打开的网址链接没有携带ID，无法注册");
      }
      let data = {
        name: this.register.name,
        // pw: this.$md5("aes@13" + this.register.pass + "22dfxs%#DSsd"),
        pw: this.$md5(this.register.pass),
        phone: this.register.phone,
        agent: agentName,
      };
      console.log(data, "sendStr");
      let endata = AES.encrypt(JSON.stringify(data), en);

      //var decryptdata = JSON.parse(AES.decrypt(endata, en));
      this.$loading.show("Loading...");
      // this.axios
      //   .post(this.$Global.registerurl, { data: endata })
      UserRegister({ data: endata })
        .then((res) => {
          setTimeout(() => {
            this.$loading.hide();
          }, 2000);
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          console.log(msg, "response msg of register is");
          if (msg.JsonData.result == "102") {
            return this.$message.warning("无此代理");
          }
          if (msg.JsonData.result == "103") {
            return this.$message.warning("已存在此帐号");
          }
          if (msg.JsonData.result == "104") {
            return this.$message.warning("注册失败");
          }
          if (msg.JsonData.result == "101") {
            document.body.classList.remove("modal-open");
            this.register.name = "";
            this.register.pass = "";
            this.register.checkpass = "";
            this.register.phone = "";
            this.RegisterDialog = false;
            return this.$message.success("注册成功");
          }
        })
        .catch((e) => {
          setTimeout(() => {
            this.$loading.hide();
          }, 2000);
          this.$message.error(e.toString());
        });
    },
    Login() {
      var en = this.$Global.en;
      if (this.$store.state.login == true)
        return this.$message.warning("您已登陆成功");
      if (this.login.username == "") return this.$message.warning("请输入账号");
      if (this.login.password == "") return this.$message.warning("请输入密码");

      let logindata = {
        name: this.login.username,
        //pw: this.$md5("aes@13" + this.login.password + "22dfxs%#DSsd"),
        pw: this.$md5(this.login.password),
        upperId: this.$store.state.LoginData.Agentid,
      };
      // console.log(logindata,"sdfsdf");

      let endata = AES.encrypt(JSON.stringify(logindata), en);

      // console.log("login endata isssssssss", endata);

      //  var decryptdata = JSON.parse(AES.decrypt(endata, en));
      // this.$loading.show("Loading...");
      UserLogin({ data: endata })
        .then((res) => {
          // setTimeout(() => {
          //   this.$loading.hide();
          // }, 2000);
          var body = res.data;
          //console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa", body);
          var msg = JSON.parse(AES.decrypt(body, en));
          console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa", msg);
          if (msg.JsonData.code == 200) {
            document.body.classList.remove("modal-open");
            this.$store.state.login = true;
            //here i am store user input name and pass to state
            this.$store.state.myAccount = this.login.username;
            this.$store.state.myPassword = this.login.password;
            //here i am storing user response information to global
            this.$Global.myLoginInfo.loginId = msg.JsonData.Id;
            this.$Global.myLoginInfo.loginBalance = msg.JsonData.balance;
            this.$Global.myLoginInfo.loginEnable = msg.JsonData.enable;
            this.$Global.myLoginInfo.loginName = msg.JsonData.username;

            this.login.username = "";
            this.login.password = "";
            this.LoginDialog = false;
            this.UserBalance();
            var gameEn = this.$Global.gameEn;
            let data = {
              name: this.$store.state.myAccount,
              password: this.$md5(this.$store.state.myPassword),
            };
            var endata = AES.encrypt(JSON.stringify(data), gameEn);
            console.log(this.$store.state.LoginData.gameAddr);
            window.open(
              "http://" +
                this.$store.state.LoginData.gameAddr +
                `?token=${endata}`
            );
            return this.$message.success("登录成功");
          } else {
            return this.$message.error("账号或密码错误");
          }
        })
        .catch((e) => {
          setTimeout(() => {
            this.$loading.hide();
          }, 2000);
          this.$message.error(e.toString());
        });
    },
    SumbitPay() {
      if (this.payment.amount == "")
        return this.$message.warning("付款金额不能为空！");
      if (this.payment.amount < 100)
        return this.$message.warning("付款金额不能少于100元");

      // let paymentEn = this.$Global.paymentEn;

      let data = {
        // name: this.$store.state.myAccount,
        id: this.$Global.myLoginInfo.loginId,
        amount: this.payment.amount,
        agent: 3,
        cb: window.location.href,
      };
      // console.log(data);
      const endata = JSON.stringify(data);
      //1：hngj，2：wl ，3：hngs，4：es, 5: kb, 6: xh "http://103.232.84.90:8081"
      // const headers = {
      //   "Access-Control-Allow-Origin": "http://pay.hn885.com/",
      //   "Content-Type": "application/json;charset=UTF-8",
      //   Accept: "application/json",
      //   "Access-Control-Allow-Credentials": "true",
      // };
      // console.log(endata);
      //console.log(this.$Global.PaymentUrl);
      this.axios
        .post(this.$Global.PaymentUrl, endata)
        .then((res) => {
          // console.log(res);
          var body = res.data;
          //   console.log(body);
          if (body.status == "success") {
            window.open(body.data);
            this.payment.amount = "";
            this.PaymentDialog = false;
            document.body.classList.remove("modal-open");
          } else {
            return this.$message.error(body.msg);
          }
        })
        .catch((e) => {
          //document.body.classList.remove("modal-open");
          console.log(e);
          this.$message.error(e.toString());
        });
    },
    Draw() {
      // if (this.withdrawl.bankname == "")
      //   return this.$message.warning("请输入银行名称");
      // if (this.withdrawl.bankname.length < 4)
      //   return this.$message.warning("银行名称应有四位数");
      // if (this.withdrawl.bankaccount == "")
      //   return this.$message.warning("账户名称不能为空！");
      // if (this.withdrawl.bankaccount.length < 2)
      //   return this.$message.warning("账户名称最少两位数");
      // if (this.withdrawl.bankcard == "")
      //   return this.$message.warning("银行卡号不能为空！");
      // if (this.withdrawl.bankcard.length < 16)
      //   return this.$message.warning("银行卡号至少16位！");
      // if (this.withdrawl.withdrawmoneyamount == "")
      //   return this.$message.warning("请输入取款金额");
      // if (this.withdrawl.withdrawmoneyamount < 100)
      //   return this.$message.warning("取款金额不能少于100元");
      // let data = {
      //   id: this.$Global.myLoginInfo.loginId,
      //   bank_name: this.withdrawl.bankname,
      //   bank_account: this.withdrawl.bankaccount,
      //   bank_card: this.withdrawl.bankcard,
      //   amount: this.withdrawl.withdrawmoneyamount, // $amount,
      // };
      // console.log(data);
      // const endata = JSON.stringify(data);
      // this.axios
      //   .post(this.$Global.Withdrawurl, endata)
      //   .then((res) => {
      //     console.log(res);
      //     var body = res.data;
      //     console.log(body);
      //     if (body.status == "success") {
      //       this.withdrawl.bankname = "";
      //       this.withdrawl.bankaccount = "";
      //       this.withdrawl.bankcard = "";
      //       this.withdrawl.withdrawmoneyamount = "";
      //       this.WithdrawDialog = false;
      //       document.body.classList.remove("modal-open");
      //       return this.$message.success(body.msg);
      //     } else {
      //       return this.$message.error(body.msg);
      //     }
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //     return this.$message.error(e.toString());
      //   });
    },
  },
};
</script>

<style lang="scss" scoped>
.header_main {
  width: 100%;
  position: relative;
}
.header {
  height: 86px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #2b2b32;
  z-index: 4;
  width: 100%;
  .header_1200 {
    height: 100%;
    margin: 0 auto;
    width: 1200px;
    // background: red;
  }
  .flex_center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    background-size: contain;
    background-repeat: no-repeat;
    width: 200px;
    height: 140px;
    flex: none;
    cursor: pointer;
    background-image: url(../assets/home/logo.png);
    //background-color: red;
  }
  .menu_list {
    // margin-left: 20px;
    flex: 1 1 0;
    font-size: 16px;
    color: #999;
    // background: green;
    justify-content: space-around;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
   // width: auto;
    //background: #000;
    span {
      cursor: pointer;
      padding-bottom: 20px;
      margin-top: 20px;
    }
  }
  .nav_border {
    color: #ecb351;
    border-bottom: 2px solid #ecb351;
    
  }
  .menu span:hover {
    color: #ecb351;
    border-bottom: 2px solid #ecb351;
  
    // transition: 0.5s ease-in-out;
  }
}
.userinfosection {
  display: flex;
  position: relative;
  .deshimg {
    width: 10px;
    height: 10px;
    position: absolute;
    right: -10px;
    bottom: 5px;
  }
  .dropdown-content {
    // display: none;
    top: 40px;
    position: absolute;
    background-color: #f1f1f1;
    width: 230px;
    height: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.644);
    // padding: 0 30px;
    z-index: 1;
    .username {
      width: auto;
      height: auto;
      display: flex;
      padding: 10px;
      justify-content: space-between;
      font-weight: bold;
      border-bottom: 1px solid grey;
      color: #352f2fc7;
    }
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
}
.name {
  font-size: 20px;
  color: #000;
  font-weight: bold;
  background: #ecb351;
  padding: 13px 10px;
  border-radius: 22px;
  user-select: none;
}
.login-obj {
  min-width: 330px;
  // background-color: #ccc;
  height: 100%;

  .login_sec {
    display: flex;
    height: 100%;
    width: 100%;
    // background: red;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;

    .login_btn {
      text-align: center;
      cursor: pointer;
      width: 90px;
      height: 48px;
      font-size: 20px;
      color: #ecb351;
      border-radius: 24px;
      border: 1px solid #ecb351;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
    }
    .reg {
      background: #ecb351;
      color: #000;
      font-weight: bold;
    }
  }
}

/* register */
.close-img {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 3%;
  top: 3%;
  cursor: pointer;
}

.wrapper {
  position: fixed;
  //   top: -50%;
  width: 380px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  left: 35%;
  top: 200px;
  overflow: hidden;
  pointer-events: auto;
  z-index: 1;
}
.wrapper .title {
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
  color: #fff;
  user-select: none;
  border-radius: 15px 15px 0 0;
  background: linear-gradient(-135deg, #2b2b32, #8f8058);
}
.wrapper .form {
  padding: 10px 30px 50px 30px;
}
.wrapper .form .field {
  height: 50px;
  width: 100%;
  margin-top: 20px;
  position: relative;
}
.wrapper .form .field input {
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 17px;
  padding-left: 20px;
  border: 1px solid lightgrey;
  border-radius: 25px;
  transition: all 0.3s ease;
}
.wrapper .form .field input:focus,
form .field input:valid {
  border-color: #4158d0;
}
.wrapper .form .field label {
  position: absolute;
  top: 50%;
  left: 20px;
  color: #999999;
  font-weight: 400;
  font-size: 17px;
  pointer-events: none;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}
.form .field input:focus ~ label,
.form .field input:valid ~ label {
  top: 0%;
  font-size: 16px;
  color: #4158d0;
  background: #fff;
  transform: translateY(-50%);
}
.form .content {
  display: flex;
  width: 100%;
  height: 50px;
  font-size: 16px;
  align-items: center;
  justify-content: space-around;
}
.form .content .checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
}
.form .content input {
  width: 15px;
  height: 15px;
  background: red;
}
.form .content label {
  color: #262626;
  user-select: none;
  padding-left: 5px;
}
.form .content .pass-link {
  color: "";
}
.form .field input[type="submit"] {
  color: #fff;
  border: none;
  padding-left: 0;
  margin-top: 13px;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  background: linear-gradient(-135deg, #2b2b32, #8f8058);
  transition: all 0.3s ease;
}
.form .field input[type="submit"]:active {
  transform: scale(0.95);
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
._localization {
  // color: #d8be75;
  font-size: 16px;
  cursor: pointer;
}
// .__localization {
//   width: 35px;
//   height: 35px;
//   border-radius: 100%;
//   background: #a68245;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   position: relative;
// }

// .dropdown-content {
//   display: none;
//   position: absolute;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//   z-index: 1;
//   top: 40px;
// }

// .dropdown-content a {
//   color: black;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;
// }

// .dropdown-content a:hover {background-color: #f1f1f1}

// .__localization:hover .dropdown-content {
//   display: block;
// }

// .__localization:hover .dropbtn {
//   background-color: #3e8e41;
// }
</style>