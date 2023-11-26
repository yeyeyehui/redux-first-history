import { LOCATION_CHANGE } from "./actions";

function createRouterReducer(history){
    //定义路由的初始状态
    const initialState = {
        action:history.action,//动作
        location:history.location//路径
    }
    return function(state=initialState,action){
        //如果动作的类型是要修改仓库中的状态的话，可以返回新状态
        if(action.type === LOCATION_CHANGE){
            return {
                ...state,
                ...action.payload
            }
        }
        return state;
    }
}
export {
    createRouterReducer
}