<template>
  <div>
    <Header></Header>
    <!-- <Banner></Banner> -->
   
    <router-view></router-view>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from "../components/Header";

// import Footer from "../components/Footer";

export default {
  components: {
    Header,
    // Footer
  },
};
</script>

<style >
</style>