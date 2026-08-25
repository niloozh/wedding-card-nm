import cx from "classnames";
import Div from "@/baseComponents/Div";
import styles from "./Home.module.scss";

const CardContent = ({}) => {
  return (
    <>
      <Div className={cx("m-b-temp-12 f-s-px-22 text-black")}>
        به نام خالق عشق
      </Div>
      <Div>
        <Div type="flex" distributedBetween className="width-px-350 p-x-temp-3">
          <Div className="text-black">
            <Div
              className={cx("f-s-px-44 p-l-temp-5", styles.name)}
              style={{ lineHeight: "1.2rem" }}
            >
              علیرضا
            </Div>
            <Div className={cx("m-r-temp-10 f-s-px-20", styles.name)}>
              سهمدینی
            </Div>
          </Div>
          <Div className="text-theme-three">
            <Div
              type="flex"
              hAlign="end"
              className={cx("f-s-px-44", styles.name)}
              style={{ lineHeight: "1.2rem" }}
            >
              صبا
            </Div>
            <Div className={cx("f-s-px-20 p-r-temp-10", styles.name)}>
              نجف زاده
            </Div>
          </Div>
        </Div>
        <Div type="flex" direction="vertical" hAlign="center">
          <Div className="f-s-px-20 m-y-temp-3 text-center text-theme-one">
            به سنت عشق گرد هم می‌آییم آنجا که دوست داشتن تنها کلام زندگیست
          </Div>
          <Div className="text-theme-three f-s-px-22">
            {" "}
            موعد دیدار: ۱۴۰۴/۰۷/۱۸
          </Div>
          <Div className="text-theme-three f-s-px-22">
            {" "}
            ساعت ۱۹:۰۰ تا پاسی از شب
          </Div>
          <Div className="text-theme-three f-s-px-22"> باغ و عمارت آماتیس</Div>
          <Div className="text-theme-three text-center m-t-temp-5 m-b-temp-10 f-s-px-20">
            ،از شما دعوت می‌کنیم که با لبخندهای پرنور خود
            <br /> .چراغ این شب را روشن‌تر سازید
            <br />
            .چنانچه افتخار پذیرایی از شما را نداریم به ما اطلاع دهید
          </Div>
        </Div>

        {/* <footer>
          <Div>contact us</Div>{" "}
        </footer> */}
      </Div>
    </>
  );
};
export default CardContent;
