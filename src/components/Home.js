import { useDispatch } from "react-redux";

import actionCreators from "../store/actionCreators/home";

function Home() {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Home</p>
      <button onClick={() => dispatch(actionCreators.goto("/counter"))}>
        跳转到/counter
      </button>
    </div>
  );
}

export default Home;
//history .push
//navigate 自定义hooks,只能用在函数组件里，你在普通 的文件里是用不了的
//在普通的文件可以也可以store.dispatch(push('/counter'));
