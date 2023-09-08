<template>
  <div style="width: 100%; height: 100%">
    <div class="bgimg" style="position:relative">
      <!-- header text -->
      <div class="login-back">
        <div class="back-img" @click="Back">
          <img
            src="../../assets/mobile/arrowback.png"
            alt
            width="30%"
            height="30%"
          />
        </div>
        <div class="text">注册</div>
      </div>

      <!-- <div class="layoutpng">
       <div  class="wrapper">
         
       </div>
      </div> -->
      <!-- <img
        src="../../assets/home/logo.png"
        alt=""
        style="position: absolute; top: 10%; left: 38%"
        width="auto"
        height="150px"
      /> -->
      <div class="__image">
        <img
        src="../../assets/home/logo.png"
        alt=""
       
        style="height: 200px;width:200px;object-fit: contain;"
      /> 
      </div>
      <div class="wrapper">
        <div class="title">注册账号</div>
        <form action="#" novalidate @submit.prevent="Register">
          <div class="field">
            <input
              type="text"
              required
              autocomplete="off"
              v-model="regForm.name"
            />
            <label>账号</label>
          </div>

          <div class="field">
            <input
              type="password"
              required
              autocomplete="off"
              v-model="regForm.pass"
            />
            <label>密码</label>
          </div>

          <div class="field">
            <input
              type="password"
              required
              autocomplete="off"
              v-model="regForm.checkPass"
            />
            <label>确认密码</label>
          </div>

          <!-- <div class="field">
            <input
              type="number"
              required
              autocomplete="off"
              v-model="regForm.phone"
            />
            <label>手机号码</label>
          </div> -->

          <div class="field">
            <input type="submit" value="注册" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AES from "../../api/aes";
import { UserRegister } from "@/api/user";
export default {
  data() {
    return {
      regForm: {
        name: "",
        pass: "",
        checkPass: "",
        phone: "",
      },
    };
  },
  methods: {
    Back() {
      this.$router.push('/m');
    },
    Register() {
      var en = this.$Global.en;
      if (this.regForm.name == "")
        return this.$mobilemessage.warning("请输入账号");
      if (this.regForm.pass == "")
        return this.$mobilemessage.warning("请输入密码");
      if (this.regForm.checkPass == "")
        return this.$mobilemessage.warning("请输入确认密码");
      // if (this.regForm.phone == "")
      //   return this.$mobilemessage.warning("请输入手机号");
      if (this.regForm.pass !== this.regForm.checkPass)
        return this.$mobilemessage.warning("两次输入密码不一致");

      // if (
      //   !/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(
      //     this.regForm.phone
      //   )
      // ) {
      //   return this.$mobilemessage.warning("手机号码格式不对");
      // }

      if (!/\d/.test(this.regForm.pass) || !/[a-zA-Z]/.test(this.regForm.pass))
        return this.$mobilemessage.warning("密码必须包含数字和英文字母");

      // var t_agent = this.$store.state.LoginData.tAgent
      // if(t_agent == 0) {
      //    return this.$mobilemessage.warning("总代理不能注册,只能登录下载");
      // }

      var agentName = this.$store.state.LoginData.Agentname;
      //console.log("agentname",agentName);
      let data = {
        name: this.regForm.name,
        pw:  this.$md5(this.regForm.pass),
        phone: this.regForm.phone,
        agent: agentName,
      };
      // console.log("send register ", data)
      let endata = AES.encrypt(JSON.stringify(data), en);

      // var decryptdata = JSON.parse(AES.decrypt(endata, en));

       UserRegister({ data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          //console.log(msg, "77777777777777777777")
          if (msg.JsonData.result == "102") {
            return this.$mobilemessage.warning("无此代理");
          }
          if (msg.JsonData.result == "103") {
            return this.$mobilemessage.warning("已存在此帐号");
          }
          if (msg.JsonData.result == "104") {
            return this.$mobilemessage.warning("注册失败");
          }
          if (msg.JsonData.result == "101") {
            this.regForm.name = "";
            this.regForm.pass = "";
            this.regForm.checkPass = "";
            this.regForm.phone = "";
            this.$mobilemessage.success("注册成功");
            return this.$router.push("/m");
          }
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.bgimg {
  //   position: absolute;
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

/* register */

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
// form .field input[type="submit"]:active {
//   transform: scale(0.95);
// }

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