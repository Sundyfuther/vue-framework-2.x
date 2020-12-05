<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div @click="toabout">about</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    toabout() {
      this.$router.push("/home/about");
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>
