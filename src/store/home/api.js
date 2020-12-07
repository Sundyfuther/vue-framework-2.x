import request from "orcrist-request";

// 配置详情
export const getLandingConfigApi = (projectId) => {
  const options = {
    method: "GET",
  };

  return request(`/api/trading-product/landing/page/${projectId}`, options);
};
