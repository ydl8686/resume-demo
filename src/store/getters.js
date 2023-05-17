const getters = {
  // 注意引入的路径是每个模块下的data，vuex的所有的data变量都可以在这个文件内看到
  userInfo: state => state.user.userInfo,
  token: state => state.user.token,
  isLogined: state => state.user.isLogined,
}
export default getters


