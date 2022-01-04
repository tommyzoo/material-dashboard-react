import request from "utils/request";

export function getAllUser() {
  return request({
    url: "users/",
    method: "get",
  });
}

export function createUser(data) {
  return request({
    url: "createUser/",
    method: "post",
    data,
  });
}

export function auth(data) {
  return request({
    url: "api-token-auth/",
    method: "post",
    data,
  });
}
