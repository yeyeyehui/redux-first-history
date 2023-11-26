import { push } from "../../redux-first-history";

const goto = (path) => {
  return push(path);
};

export default {
  goto,
};
