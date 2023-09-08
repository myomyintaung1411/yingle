<template>
  <transition name="message-fade">
    <div class="message" :class="typeClass" role="alert" v-show="visible">
      <p class="message__content">
        <i class="iconfont" :color="color" :small="true" v-html="icon"></i>
        &nbsp;{{ message }}
      </p>
    </div>
  </transition>
</template>

<script>
/* eslint-disable */
export default {
  name: "message",

  data() {
    return {
      visible: false,
      duration: 2000,
      message: "",
      timer: null,
      closed: false,
      color: "",
      icon: "",
      typeClass: "",
    };
  },
  computed: {
    colorW: function () {
      return (this.color =
        this.typeClass == "message--error"
          ? "#D50000"
          : this.typeClass == "message--warning"
          ? "#FFAB00"
          : "#00C853");
    },
  },
  watch: {
    colorW() {},
    closed(val) {
      if (val) {
        this.visible = false;
        this.$el.addEventListener("transitionend", this.destroyElement);
      }
    },
  },
  methods: {
    destroyElement() {
      this.$el.removeEventListener("transitionend", this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },

    close() {
      this.closed = true;
    },
  },

  mounted() {
    // console.log(this.typeClass);
    // 开始定时器
    this.startTimer();
  },
};
</script>

<style scoped>
.message {
  min-width: 300px;
  /* min-width: 500px; */
  margin: 10px 20px;
  box-sizing: border-box;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  /* border-color: #ebeef5; */
  position: fixed;
  left: 45%;
  top: 15%;
  transform: translateX(-50%);
  /* background-color: #edf2fc; */
  transition: opacity 0.3s, transform 0.4s;
  overflow: hidden;
  padding: 15px 10px 15px 15px;
  display: flex;
  align-items: center;
}

.message--success {
  background-color: rgba(0, 0, 0, 0.8);
  border-color: #00e676;
  color: #00e676;
}

.message--warning {
  background-color: rgba(0, 0, 0, 0.9);
  border-color: #f9a825;
  color: #f9a825;
}
.message--error {
  /* 背景颜色 */
  background-color: rgba(0, 0, 0, 0.7);
  /* 边框颜色 */
  border-color: #ff1744;
  /* 文字颜色 */
  color: #ff1744;
}

.message p {
  margin: 0;
}

.message__content {
  padding: 0;
  font-size: 18px;
  line-height: 1;
}

.message-fade-enter,
.message-fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
