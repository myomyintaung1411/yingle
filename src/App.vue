<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    if (this.isMobile()) {
      this.$router.push("/m");
    } else {
      this.$router.push("/");
    }
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  /* height: 100vh; */
  overflow-x: hidden !important;
  // /* min-width: 1275px !important; */
  /* height: 100vh; */
  height: 100%;
  width: 100%;
  // min-width: 1275px !important;
}
body.modal-open {
  overflow: hidden;
  // display: none;
  // background-color: orange;
  pointer-events: none;
}

::-webkit-scrollbar {
  width: 10px;
  cursor: pointer;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #68470e;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #af7d26;
}
</style>
