## redux-first-history
- react-router-redux router4
- connect-react-router router5
- redux-first-history router6

- 可以把路由和redux仓库进行关联
- 核心有两个功能
  - 把浏览器里的路径信息保存在仓库中，浏览器路径如果变了，可以把新的路径保存到仓库里
  - 可以通过派发动作的方式跳转浏览器路径 history.push  dispatch({type:'push'})
