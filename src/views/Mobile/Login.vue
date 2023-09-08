<template>
  <div style="height: 100%; width: 100%; background: #000">
    <div class="bgimg">
      <!-- header text -->
      <div class="login-back">
        <div class="back-img" @click="Goback">
          <img src="../../assets/mobile/arrowback.png" alt width="30%" height="30%" />
        </div>
        <div class="text">登录</div>
      </div>
      <div class="__image">
        <img
        src="../../assets/home/logo.png"
        alt=""
       
        style="height: 200px;width:200px;object-fit: contain;"
      /> 
      </div>
      <!-- <img src="../../assets/home/logo.png" alt style="position: absolute; top: 10%; left: 38%" width="auto" height="150px" /> -->
      <div class="wrapper">
        <div class="title">玩家登录</div>
        <form action="#" novalidate @submit.prevent>
          <div class="field">
            <input type="text" required autocomplete="off" v-model="loginForm.name" />
            <label>账号</label>
          </div>

          <div class="field">
            <input type="password" required autocomplete="off" v-model="loginForm.pass" />
            <label>密码</label>
          </div>

          <div class="field">
            <input type="text" required autocomplete="off" @focus="yzhm()" v-model="loginForm.code" />
            <label>验证码</label>
          </div>

          <div class="login-action">
            <p class="ValidCode disabled-select">
              <span v-for="(item, index) in codeList" :key="index" :style="getStyle(item)">{{ item.code }}</span>
            </p>
            <button @click="login()">登录</button>
          </div>
          <!-- <div class="field">
            <input type="submit" value="注册账号" />
          </div>-->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AES from "../../api/aes";
import { UserLogin } from "@/api/user";

// import { Base64 } from "js-base64";
export default {
  data() {
    return {
      codeList: [],
      loginForm: {
        name: "",
        pass: "",
        code: "",
      },
    };
  },
  methods: {
    Goback() {
     this.$router.push('/m');
    },
    login() {
      var en = this.$Global.en;
      if (this.$store.state.login == true) {
        return this.$mobilemessage.warning("您已登陆成功");
      }

      if (this.loginForm.name == "")
        return this.$mobilemessage.warning("请输入账号");
      if (this.loginForm.pass == "")
        return this.$mobilemessage.warning("请输入密码");
      if (this.loginForm.code == "")
        return this.$mobilemessage.warning("请输入验证码");
      if (this.code != this.loginForm.code.toLowerCase())
        return this.$mobilemessage.warning("验证码不正确！");
      let logindata = {
        name: this.loginForm.name,
        pw: this.$md5(this.loginForm.pass),
        upperId: this.$store.state.LoginData.Agentid,
      };
      let endata = AES.encrypt(JSON.stringify(logindata), en);
      // var decryptdata = JSON.parse(AES.decrypt(endata, en));

      UserLogin({ data: endata })
        .then((res) => {
          var body = res.data;
          // console.log(body,"login response");
          var msg = JSON.parse(AES.decrypt(body, en));
          //console.log(msg);
          if (msg.JsonData.code == 200) {
            this.$store.state.login = true;
            this.$store.state.myAccount = this.loginForm.name;
            this.$store.state.myPassword = this.loginForm.pass;
            //here i am storing user response information to global
            this.$Global.myLoginInfo.loginId = msg.JsonData.Id;
            this.$Global.myLoginInfo.loginBalance = msg.JsonData.balance;
            this.$Global.myLoginInfo.loginEnable = msg.JsonData.enable;
            this.$Global.myLoginInfo.loginName = msg.JsonData.username;
            this.$Global.myLoginInfo.customerId = msg.JsonData.customerId;
            this.loginForm.name = "";
            this.loginForm.pass = "";
            this.loginForm.code = "";
            // this.$mobilemessage.success("登录成功");

            this.$router.go(-1);
            var gameEn = this.$Global.gameEn;
            let data = {
              name: this.$store.state.myAccount,
              password: this.$md5(this.$store.state.myPassword),
            };
            var endata = AES.encrypt(JSON.stringify(data), gameEn);
            // window.open(
            //   "http://" +
            //     this.$store.state.LoginData.gameAddr +
            //     `?token=${endata}`
            // );
            window.open(
              "https://pc.yl686696.com/" +`?token=${endata}`
            );
            return this.$mobilemessage.success("登录成功");
          } else {
            // console.log("error ocuured")
            return this.$mobilemessage.error("账号或密码错误！");
          }
        })
        .catch((e) => {
          console.error(e);
        });
    },
    yzhm() {
      this.codeList = [];
      const len = 4;
      const chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789";

      const charsLen = chars.length;
      for (let i = 0; i < len; i++) {
        const rgb = [
          Math.round(Math.random() * 220),
          Math.round(Math.random() * 240),
          Math.round(Math.random() * 200),
        ];
        this.codeList.push({
          code: chars.charAt(Math.floor(Math.random() * charsLen)),
          color: `rgb(${rgb})`,
          fontSize: `1${[Math.floor(Math.random() * 10)]}px`,
          padding: `${[Math.floor(Math.random() * 20)]}px`,
          transform: `rotate(${
            Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)
          }deg)`,
        });
      }
      // 将当前数据派发出去
      // this.$emit('update:value', codeList.map(item => item.code).join(''))
      this.code = this.codeList
        .map((item) => item.code)
        .join("")
        .toLowerCase();
    },
    getStyle(data) {
      return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.bgimg {
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  background: url(../../assets/mobile/loginBackground.png) no-repeat center
    center #000000;
  background-size: 100% 100%;
  align-items: center;
  text-align: center;

  .login-back {
    height: 5rem;
    display: flex;
    text-align: center;
    align-items: center;
    // background: red;
    .back-img {
      color: white;
      font-weight: bold;
      padding-left: 10px;
      padding-top: 5px;
      width: 33%;
      text-align: start;
      //   background-color: red;
    }
    .text {
      display: flex;
      width: 33%;
      text-align: center;
      justify-content: center;
      font-weight: bold;
      color: white;
      //   background-color: red;
      font-size: 2.5rem;
    }
  }
}
.wrapper {
  background-image: url(../../assets/mobile/Layout.png);
  background-repeat: no-repeat;
  background-position: center center;
  width: 85%;
  border-radius: 15px;
  //   height: 50%;
  //   box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.9);
  //   height: 500px;
  //   background: #212121;
  margin: 30% auto;
}
.wrapper .title {
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
  color: #fff;
  user-select: none;
  border-radius: 15px 15px 0 0;

  background: linear-gradient(-135deg, #2b2b32, #8f8058);
  //   background: rgba(218, 193, 218, 0.067);
  //    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
}
.wrapper form {
  //   padding: 10px 30px 50px 30px;
  padding: 1em 2em 5em 2em;
}
.wrapper form .field {
  height: 6rem;
  width: 100%;
  margin-top: 2em;
  position: relative;
}
.wrapper form .field input {
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 3rem;
  padding-left: 3rem;
  border: 1px solid lightgrey;
  //   border-radius: 3em;
  transition: all 0.3s ease;
}
.wrapper form .field input:focus,
form .field input:valid {
  border-color: #4158d0;
}
.wrapper form .field label {
  position: absolute;
  top: 50%;
  left: 20px;
  color: #999999;
  font-weight: 400;
  font-size: 2.5rem;
  pointer-events: none;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}
form .field input:focus ~ label,
form .field input:valid ~ label {
  top: 0%;
  font-size: 2rem;
  color: #4158d0;
  background: #fff;
  transform: translateY(-50%);
}
form .field input[type="submit"] {
  color: #fff;
  border: none;
  padding-left: 0;
  //   margin-top: 18px;
  //   margin-bottom: 1em;
  font-size: 3rem;
  font-weight: 700;
  cursor: pointer;
  background: linear-gradient(-135deg, #2b2b32, #8f8058);
  transition: all 0.3s ease;
}
form .field input[type="submit"]:active {
  transform: scale(0.95);
}

.login-action {
  display: flex;
  justify-content: space-around;
  //   background: red;
  margin-top: 2.5em;
  width: 100%;

  button {
    display: block;
    width: 45%;
    // padding: 8px 0px;
    // background: linear-gradient(180deg, #fd654e, #eea467);
    background: linear-gradient(-135deg, #2b2b32, #8f8058);
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 3rem;
    font-weight: 700;
    margin-left: 2em;
    padding: 0.3em 2em;
  }
}

.ValidCode {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f7fa;
  // padding: 0.5em 10em;
  width: 45%;
  //   height: 80px;
  //   margin-right: 10px;
  cursor: pointer;
  span {
    display: inline-block;
    font-size: 45px !important;
  }
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

.__image{
  position: absolute;
left: 0;
right: 0;
margin: auto;
width: 100%;
top: 7%;
}
</style>