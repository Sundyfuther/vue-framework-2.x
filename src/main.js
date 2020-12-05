import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import * as WeChat from "orcrist-wechat";
// import request from "orcrist-request";
import Debug from "@/utils/debug";
// import { traceLog } from "@/utils/traceLog";
Debug();

// window.onerror = (message, source, lineno, colno) => {
//   const errorLog = `:::${message}:::${source}:::${lineno}:::${colno}:::`;

//   traceLog({
//     log: encodeURIComponent(errorLog),
//     scene: "PAY",
//   });
// };
// WeChat.register({
//   shareOpt: {
//     title: "四十九元惠民保 惠家惠民福利好",
//     desc: "百万保额、不限年龄、特药覆盖、无等待期，参保仅本月，错过等一年",
//     link: location.href, // 分享链接
//     imgUrl: "https://m.ytbxjj.com/spcare-public/static-files/hz/share.png",
//   },
//   hideMenu: false, // 默认是false可以不传
// });
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
