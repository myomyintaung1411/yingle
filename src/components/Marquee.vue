<template>
<div class="marquee-main">
  <div class="scroll">
      <div style="width:10%;display:flex;align-items:center">
          <i></i>
      </div>
   <div style="width:90%;height:100%">
        <marquee onmouseover="this.stop();"  onmouseout="this.start();"  style="  cursor: pointer;color: #fff;
             font-size: 16px;  font-weight: 800; width:100%; " >
              {{scrollData}}
     </marquee>
   </div>
 </div>
 </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      scrolldata: "",
    };
  },
  computed: {
    ...mapGetters(["scrollData"]),
  },
};
</script>

<style lang="scss" scoped>
.marquee-main {
  background: #333333;
  height: 25px;
}
.scroll {
  position: relative;
  width: 1100px;
  height: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
}
i {
  background: url("~@/assets/noti.svg") 60% center / 60% no-repeat;
  width: 29px;
  height: 20px;
  font-size: 15px;
  border-radius: 30px;
  color: rgb(255, 255, 255);
}
</style>