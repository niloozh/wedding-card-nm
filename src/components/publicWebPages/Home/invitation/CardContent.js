import cx from "classnames";
import Div from "@/baseComponents/Div";
import styles from "./InvitationView.module.scss";

const CardContent = () => {
  return (
    <Div
      type="flex"
      direction="vertical"
      hAlign="center"
      className={styles.invitationPanel}
    >
      <Div className={cx("f-s-px-22 text-black", styles.blessing)}>
        به نام خالق عشق
      </Div>

      <Div className={styles.divider} />

      <Div
        type="flex"
        vAlign="center"
        distributedBetween
        className={cx("width-per-100 p-x-temp-3", styles.namesRow)}
      >
        <Div className="text-black">
          <Div className={cx("f-s-px-44 p-l-temp-4", styles.name)}>محمد</Div>
          <Div className={cx("f-s-px-20 m-r-temp-8 m-t-10", styles.name)}>
            حسینی
          </Div>
        </Div>
        <Div className={styles.ampersand}>و</Div>
        <Div>
          <Div
            type="flex"
            hAlign="end"
            className={cx("f-s-px-44", styles.name)}
          >
            نازنین
          </Div>
          <Div className={cx("f-s-px-20 m-t-10 p-r-temp-15", styles.name)}>
            عادلخانی
          </Div>
        </Div>
      </Div>

      <Div
        className={cx(
          "f-s-px-20 m-y-temp-4 text-center text-theme-one",
          styles.poem,
        )}
      >
        به سنت عشق گرد هم می‌آییم آنجا که دوست داشتن تنها کلام زندگیست
      </Div>

      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        className={cx("text-theme-three f-s-px-22", styles.details)}
      >
        <Div>موعد دیدار: ۱۴۰۵/۰۶/۲۴</Div>
        <Div>ساعت ۱۹:۰۰ تا پاسی از شب</Div>
        <Div>باغ پارادایس</Div>
      </Div>

      <Div className={styles.divider} />

      <Div
        className={cx(
          "text-theme-three text-center f-s-px-20",
          styles.inviteNote,
        )}
      >
        از شما دعوت می‌کنیم که با لبخندهای پرنور خود
        <br />
        چراغ این شب را روشن‌تر سازید
        <br />
        چنانچه افتخار پذیرایی از شما را نداریم به ما اطلاع دهید
      </Div>
    </Div>
  );
};

export default CardContent;
