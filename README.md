## redux-first-history
- react-router-redux router4
- connect-react-router router5
- redux-first-history router6

- 可以把路由和redux仓库进行关联
- 核心有两个功能
  - 把浏览器里的路径信息保存在仓库中，浏览器路径如果变了，可以把新的路径保存到仓库里
  - 可以通过派发动作的方式跳转浏览器路径 history.push  dispatch({type:'push'})

悟空
路由里面好像有这个记录吧？
悟空
react-router-dom好像有这个吧   我没做过react项目  我猜的
韦林
使用redux 存储路由记录 方便全局使用？是的