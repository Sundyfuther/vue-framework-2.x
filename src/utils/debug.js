import ImportCDNJS from "import-cdn-js";

export default () =>
  new Promise((resolve) => {
    if (window.location.href.includes("isDebug=true")) {
      /*
      ImportCDNJS(
        '//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js',
        'VConsole',
      ).then((VConsole: any) => {
        new VConsole();
        resolve();
      });
      */

      ImportCDNJS("//cdn.bootcdn.net/ajax/libs/eruda/2.3.3/eruda.js", "eruda").then((eruda) => {
        eruda.init();
        console.log("eruda ::: ", eruda);
      });
    } else {
      resolve();
    }
  });
