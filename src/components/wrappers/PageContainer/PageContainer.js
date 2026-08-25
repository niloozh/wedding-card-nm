import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Div from "@/baseComponents/Div/Div";
import Header from "@/baseComponents/Header";

import useDivWidth from "@/hooks/useDivWidth";
import { hideMobNav } from "@/reducer/subs/isMobNavVisible";
import { setActiveMenu } from "@/reducer/subs/activeMenu";

const PageContainer = ({ pageIdentifier, children }) => {
  const dispatch = useDispatch();
  const { containerRef, width } = useDivWidth(true);

  useEffect(() => {
    dispatch(hideMobNav());
  }, []);

  useEffect(() => {
    if (pageIdentifier) {
      dispatch(setActiveMenu(pageIdentifier));
    }
  }, [pageIdentifier]);

  return (
    <>
      {/* <Header /> */}
      <Div ref={containerRef} className="width-per-100">
        {children}
      </Div>
    </>
  );
};

export default PageContainer;
