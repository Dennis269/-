import router from "@/router";
// import { it } from 'element-plus/es/locale'
import { defineStore } from "pinia";
import { ref, watch } from "vue";

//初始化state数据，这里我们使用一个函数来返回
function initState() {
  return {
    isCollapse: false,
    tags: [
      {
        path: "/home",
        name: "home",
        label: "首页",
        icon: "home",
      },
    ],
    currentMenu: null,
    menuList: [],
    token: "",
    routerList: [],
  };
}
//第一个参数要求是一个独一无二的名字
//第二个参数可接受两类值：Setup 函数或 Option 对象。
export const useAllDataStore = defineStore("allData", (a) => {
  //在 Setup Store 中：
  //ref() 就是 state 属性
  //computed() 就是 getters
  //function() 就是 actions
  const state = ref(initState());
  
  watch(
    state,
    (newObj) => {
      if (!newObj.token) return;
      localStorage.setItem("store", JSON.stringify(newObj));
    },
    { deep: true }
  );
  function selecttMenu(val) {
    if (val.name === "home") {
      state.value.currentMenu = null;
    } else {
      let index = state.value.tags.findIndex((item) => item.name === val.name);
      index === -1 ? state.value.tags.push(val) : "";
    }
  }
  function updateTags(tag) {
    let index = state.value.tags.findIndex((item) => item.name === tag.name);
    state.value.tags.splice(index, 1);
  }
  function updateMenuList(val) {
    state.value.menuList = val;
  }
  function addMenu(router, type) {
    if (type === "refresh") {
      if (JSON.parse(localStorage.getItem("store"))) {
        state.value = JSON.parse(localStorage.getItem("store"));

        state.value.routerList = [];
      } else {
        return;
      }
    }

    const menu = state.value.menuList;
    const module = import.meta.glob("../views/**/*.vue");
    const routerArr = [];

    menu.forEach((item) => {
      if (item.children) {
        item.children.forEach((val) => {
          let url = `../views/${val.url}.vue`;
          val.component = module[url];
          routerArr.push(...item.children);
        });
      } else {
        let url = `../views/${item.url}.vue`;
        item.component = module[url];
        routerArr.push(item);
      }
    });
    state.value.routerList = [];
    let routers = router.getRoutes();
    routers.forEach((item) => {
      if (item.name == "main" || item.name == "login") {
        return;
      } else {
        router.removeRoute(item.name);
      }
    });

    routerArr.forEach((item) => {
      state.value.routerList.push(router.addRoute("main", item));
    });
  }
  //需要把所有定义的state，getters，actions返回出去
  return {
    state,
    selecttMenu,
    updateTags,
    updateMenuList,
    addMenu,
  };
});
