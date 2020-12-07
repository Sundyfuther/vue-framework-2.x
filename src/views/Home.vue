<template>
  <div class="home">
    <div class="banner">
      <img v-if="landStates.bannerUrl" :src="landStates.bannerUrl" alt="banner" />
    </div>
    <div class="pic-list" v-for="item in landStates.projectLandingPageItems" :key="item.id">
      <div class="pic-item">
        <a :href="item.link">
          <img :src="item.image" alt="推广图片" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    this.getLandDetail();
  },
  computed: {
    landStates() {
      return this.$store.state.home.landStates || {};
    },
  },
  methods: {
    getLandDetail() {
      this.$store.dispatch("getLandingConfig");
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;

  .banner {
    width: 100%;

    img {
      width: 100%;
      vertical-align: bottom;
    }
  }

  .piclist {
    width: 100%;
  }
}
</style>
