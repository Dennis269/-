import request from "./request.js";
export default {
  getTableData() {
    return request({
      url: "/home/getTableData",
      method: "get",
    });
  },
  getCountData() {
    return request({
      url: "/home/getCountData",
      method: "get",
    });
  },
  getChartData() {
    return request({
      url: "/home/getChartData",
      method: "get",
    });
  },
  getUserData(data) {
    return request({
      url: '/user/getUserData',
      method: 'get',
      data,
    })
  },
  deleteUser(data) {
    return request({
      url: '/user/deleteUser',
      method: 'get',
      data,
    })
  },
  addUser(data) {
    return request({
      url: '/user/addUser',
      method: 'post',
      data,
    })
  },
  editUser(data) {
    return request({
      url: '/user/editUser',
      method: 'post',
      data,
    })
  },
  getMenu(data) {
    return request({
      url: '/permission/getMenu',
      method: 'post',
      data,
    })
},
};
