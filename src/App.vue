/* eslint-disable prettier/prettier */
<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "",
    };
  },
  watch: {
    // 使用watch 监听$router的变化
    $route(to, from) {
      // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.fullPath.includes(from.fullPath)) {
        // 设置动画名称
        // console.log("slide-left");
        this.transitionName = "slide-left";
      } else {
        // console.log("slide-right");
        this.transitionName = "slide-right";
      }
    },
  },
};
</script>

<style lang="scss">
// @import url("./assets/css/reset");
#app {
  background: #f3f4f6;

  .slide-right-enter-active,
  .slide-left-enter-active {
    will-change: transform;
    transition: all 500ms;
  }

  .slide-left-leave-active,
  .slide-right-leave-active {
    will-change: transform;
    transition: all 1ms;
  }

  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
