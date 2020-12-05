const w = window;

/**
 * 请求域名处理环境判断
 */
const reqHostName = function () {
  let _origin;
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "spcare.medbanks-test.cn"
  ) {
    _origin = "http://spcare-api.medbanks-test.com";
  } else if (window.location.hostname === "spcare.medbanks-test.com") {
    _origin = "http://spcare-api.medbanks-test.com";
  } else if (window.location.origin === "http://m.ytbxjj.com") {
    _origin = "http://gateway.ytbxjj.com"; //临时生产
  } else {
    _origin = "https://gateway.ytbxjj.com"; //生产域名
  }
  return _origin;
};

export const traceLog = (params) => {
  let result = "";
  params.requestId = `traceLog${Date.now()}`;
  params.scene = params.scene || (w.BUZZ && w.BUZZ.scene);

  for (let item in params) {
    if (params[item] && String(params[item])) {
      result += `&${item}=${params[item]}`;
    }
  }

  if (result) {
    result = "?" + result.slice(1);
  }

  let img = new Image();
  let _currHost = reqHostName();
  img.src = `${_currHost}/api/trading-order/outer/trace/${result}`;
};

export default {
  traceLog,
};
