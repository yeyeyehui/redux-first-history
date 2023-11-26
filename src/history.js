import { createReduxHistoryContext } from "./redux-first-history";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
const {
  routerReducer, //处理器，可以用来把路径保存到仓库状态中
  routerMiddleware, //中间件 可以用来拦截action,跳转路径
  createReduxHistory, //创建redux版本的history
} = createReduxHistoryContext({ history });

export { routerReducer, routerMiddleware, createReduxHistory };
