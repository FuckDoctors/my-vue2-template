const baseUrl = 'http://localhost:8080';
// vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。
// 如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
// https://router.vuejs.org/zh-cn/essentials/history-mode.html
// const routerMode = 'history'; // 使用history，打包后页面显示不出来。因为history模式需要配合server端才行。
const routerMode = 'hash';

if (process.env.NODE_ENV === 'development') {
  // baseUrl = 'http://localhost:8080';
} else if (process.env.NODE_ENV === 'production') {
  // baseUrl = 'http://localhost:8080';
}

export {
  baseUrl,
  routerMode,
};
