import { locationChangeAction,push,replace } from './actions';
import {createRouterReducer} from './reducer';
import {createRouterMiddleware} from './middleware';
export function createReduxHistoryContext({history}){
    debugger
    const routerReducer = createRouterReducer(history);
    const routerMiddleware = createRouterMiddleware(history);
    function createReduxHistory(store){
        //在刚开始的时候先派发一次，设置默认值
        store.dispatch(locationChangeAction(history.action,history.location));
        //监听路径变化，当路径发生变化时
        history.listen(({action,location})=>{
          store.dispatch(locationChangeAction(action,location));
        });
        return {
            ...history,
            push:(...args)=>store.dispatch(push(...args)),
            replace:(...args)=>store.dispatch(replace(...args)),
            get location(){
                return store.getState().router.location;
            },
            get action(){
                return store.getState().router.action;
            }
        }
    }
    return  {
        routerReducer,
        routerMiddleware,
        createReduxHistory
    }
}