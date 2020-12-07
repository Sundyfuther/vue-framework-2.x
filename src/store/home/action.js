import { getLandingConfigApi } from "./api";
import { SET_LANDING_CONFIG, SET_IS_FETCHING } from "./mutation";
// 获取项目列表
const getLandingConfig = ({ commit }, params) => {
  commit(SET_IS_FETCHING, true);
  const response = getLandingConfigApi("cdc0e16393004444b0b8f1fce9d6b292");
  commit(SET_IS_FETCHING, false);
  response.then(
    (res) => {
      if (res && res.code === "0" && res.data) {
        commit(SET_LANDING_CONFIG, res.data);
      } else if (res.message) {
        params.errorCb(res.message);
      } else {
        params.errorCb("网络异常，请稍后再试~~~");
      }
    },
    (err) => {
      console.warn(err);
      params.errorCb("网络异常，请稍后再试~~~");
    }
  );
};

export default {
  getLandingConfig,
};
