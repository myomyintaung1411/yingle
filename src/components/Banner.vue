<template>
  <div id="carousal" @click="GoSite()">
    <div class="carousal-img" v-for="(item, index) in banners" :key="index">
      <transition name="fade">
        <img
          v-if="currentSlide == index"
          :src="item.image"
          @click="GoSite()"
          style="height: 500px; width: 100%; cursor: pointer;object-fit: cover"
          draggable="false"
        />
      </transition>
    </div>
    <div style="height: 490px; width: 100%; position: relative">
      <div
        style="
          position: absolute;
          bottom: 0%;
          width: 100%;
          display: flex;
          justify-content: center;
        "
      >
        <div
          v-for="(item, index) in banners"
          :key="index"
          @click="makeActive(index)"
          :class="currentSlide == index ? 'gray' : 'white'"
          style="
            width: 15px;
            height: 15px;
            border-radius: 100%;
            cursor: pointer;
            margin: 5px;
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 1,
      banners: [
        {
          image: require("../assets/home/banner1.jpg"),
        },
        {
          image: require("../assets/home/banner2.jpg"),
        },
        {
          image: require("../assets/home/banner3.jpg"),
        },
      ],
      interval: "",
      isTitleShowing: true,
    };
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    },
    GoSite() {
      window.open("https://www.huobi.be/zh-cn/");
      // console.log("hello");
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 4000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
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
#carousal {
  height: 500px;
  /* background: red; */
  width: 100%;
  position: relative;
  cursor: pointer;
}
.carousal-img {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.gray {
  background: brown;
}
.white {
  background: #fff;
}
</style>