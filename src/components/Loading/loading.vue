<template lang="html">
 <div v-if="isShowLoading" class="loading-container">
  <div class="loading-box">
   <img draggble="false" class="loading-img" src="@/assets/loading.svg"/>
   <!-- 这里content为双花括号 -->
   <span class="loading-txt">{{content}}</span>
  </div>
 </div>
</template>
 
<script>
export default {
 data () {
  return {
   isShowLoading: false,
   content: ''
  }
 }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading-container {
 display: flex;
 justify-content: center;
 align-items: center;
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background: rgba(0, 0, 0, 0.322);
 z-index: 1000;
}
.loading-box {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 120px;
 height: 120px;
 border-radius: 10px;
 background: #68470e;
 user-select: none;
}
.loading-img {
 width: 70px;
 height: 70px;
  display: flex;
 justify-content: center;
 align-items: center;
 /* animation: rotating 2s linear infinite; */
}
/* @keyframes rotating {
 0% {
  transform: rotate(0deg);
 }
 100% {
  transform: rotate(1turn);
 }
} */
.loading-txt {
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 24px;
 color: #fff;
}
</style>