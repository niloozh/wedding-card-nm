import { combineReducers } from "redux";

import activeMenu from "./subs/activeMenu";
import mainContainerWidth from "./subs/mainContainerWidth";
import isMobNavVisible from "./subs/isMobNavVisible";

const reducer = combineReducers({
  activeMenu,
  mainContainerWidth,
  isMobNavVisible,
});

export default reducer;
