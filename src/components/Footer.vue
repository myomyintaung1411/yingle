<template>
  <div class="footer_page">
    <footer>COPYRIGHT © YINGLIANINTERNATIONAL RESERVED.</footer>
    <div class="sidebar">
      <ul>
        <li>
          <i class="icon icon-kefu"></i>
          <span>在线客服</span>

          <div
            style="
              height: 40px;
              width: 40px;
              background: red;
              position: fixed;
              bottom: 80px;
              right: 80px;
            "
          ></div>
        </li>

        <li class="app_down">
          <i class="icon icon-app"></i><span>APP下载</span>
          <div class="qrcode_div">
            <img src="../assets/home/qr2.jpg" alt="" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
.qrcode_div {
  position: fixed;
  bottom: 80px;
  z-index: 998;
  right: 100px;
  //   height: 50px;
  //   background: red;
  //   width: 50px;
  display: none;
  img {
    height: 200px;
    width: auto;
  }
}
// .qq {
//   position: fixed;
//   bottom: 180px;
//   z-index: 998;
//   right: 100px;
//   height: auto;
//   background: #a87325;
//   width: 70px;
//   text-align: center;
//   padding: 10px;
//   border-radius: 5px;
//   display: none;
//   margin-bottom: 5px;
//   white-space: normal;
//   word-wrap: break-word;
//   word-break: break-all;
// }

// .wx {
//   position: fixed;
//   // bottom: 120px;
//   z-index: 998;
//   right: 100px;
//   height: auto;
//   background: #a87325;
//   width: 70px;
//   text-align: center;
//   padding: 10px;
//   border-radius: 5px;
//   white-space: normal;
//   word-wrap: break-word;
//   word-break: break-all;
//   display: none;
// }
</style>