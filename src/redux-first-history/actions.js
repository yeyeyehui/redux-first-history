export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
export function locationChangeAction(action,location){
    return {
        type:LOCATION_CHANGE,
        payload:{
            action,
            location
        }
    }
}
export const CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';
function updateLocation(method){
  return (...args)=>{
    return {
        type:CALL_HISTORY_METHOD,//要调用历史对象的方法
        payload:{
            method,//方法名
            args   //方法参数
        }
    }
  }
}
export const push = updateLocation('push');
export const replace = updateLocation('replace');