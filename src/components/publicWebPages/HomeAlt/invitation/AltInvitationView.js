import { useState } from "react";
import cx from "classnames";
import {
  Calendar,
  Clock,
  Heart,
  Loader2,
  MapPin,
  Music2,
  VolumeX,
} from "lucide-react";
import Div from "@/baseComponents/Div";

import {
  getRsvpPhone,
  getRsvpPhoneTel,
  MAP_EMBED_URL,
  RSVP_DEADLINE_NOTE,
  VENUE_ADDRESS,
} from "../../Home/constants";
import styles from "./AltInvitationView.module.scss";

const POEM =
  "به سنت عشق گرد هم می‌آییم آنجا که دوست داشتن تنها کلام زندگیست";

const ICON_SIZE = 18;
const ICON_COLOR = "#c4a574";

const AltInvitationView = ({ guestSide = "m", isPlaying, onToggleAudio }) => {
  const rsvpPhone = getRsvpPhone(guestSide);
  const rsvpPhoneTel = getRsvpPhoneTel(guestSide);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <Div className={styles.page}>
      <Div className={styles.bgLayer} aria-hidden />

      <button
        type="button"
        className={styles.musicToggle}
        onClick={onToggleAudio}
        aria-label={isPlaying ? "توقف موسیقی" : "پخش موسیقی"}
      >
        {isPlaying ? (
          <Music2 size={16} color="#680000" strokeWidth={1.75} />
        ) : (
          <VolumeX size={16} color="#680000" strokeWidth={1.75} />
        )}
      </button>

      <Div className={styles.content}>
        <section className={styles.heroPanel}>
          <p className={styles.heroEyebrow}>به نام خالق عشق</p>

          <Div
            type="flex"
            vAlign="center"
            distributedBetween
            className={styles.namesRow}
          >
            <Div className={styles.nameBlock}>
              <Div className={styles.firstName}>محمد</Div>
              <Div className={styles.lastName}>حسینی</Div>
            </Div>
            <Div className={styles.ampersand}>و</Div>
            <Div className={styles.nameBlock}>
              <Div className={styles.firstName}>نازنین</Div>
              <Div className={styles.lastName}>عادلخانی</Div>
            </Div>
          </Div>

          <span className={styles.goldRule} />

          <p className={styles.heroInvite}>
            از شما دعوت می‌کنیم که با لبخندهای پرنور خود
            <br />
            چراغ این شب را روشن‌تر سازید
          </p>
        </section>

        <section className={styles.card}>
          <Heart
            className={styles.sectionIcon}
            size={ICON_SIZE}
            color={ICON_COLOR}
            strokeWidth={1.75}
          />
          <blockquote className={styles.poem}>{POEM}</blockquote>
        </section>

        <Div className={styles.grid}>
          <section className={cx(styles.card, styles.detailCard)}>
            <Div className={styles.iconBadge}>
              <Calendar size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.75} />
            </Div>
            <p className={styles.cardLabel}>موعد دیدار</p>
            <p className={styles.cardValue}>۱۴۰۵/۰۶/۲۴</p>
          </section>

          <section className={cx(styles.card, styles.detailCard)}>
            <Div className={styles.iconBadge}>
              <Clock size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.75} />
            </Div>
            <p className={styles.cardLabel}>ساعت</p>
            <p className={styles.cardValue}>۱۸:۰۰</p>
            <p className={styles.cardValueSub}>تا پاسی از شب</p>
          </section>
        </Div>

        <section className={cx(styles.card, styles.venueCard)}>
          <Div className={styles.iconBadge}>
            <MapPin size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.75} />
          </Div>
          <address className={styles.address}>
            <span className={styles.venueLine}>باغ پارادایس</span>
            <span className={styles.addressLine}>{VENUE_ADDRESS}</span>
          </address>
        </section>

        <section className={styles.mapSection}>
          {!isMapLoaded && (
            <Div className={styles.mapLoading} aria-live="polite">
              <Loader2
                className={styles.mapSpinner}
                size={28}
                color="#680000"
                strokeWidth={1.75}
              />
              <span className={styles.mapLoadingText}>در حال بارگذاری نقشه...</span>
            </Div>
          )}
          <iframe
            className={cx(styles.mapFrame, isMapLoaded && styles.mapFrameLoaded)}
            src={MAP_EMBED_URL}
            width="100%"
            height="288"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="موقعیت باغ پارادایس"
            onLoad={() => setIsMapLoaded(true)}
          />
        </section>

        <section className={cx(styles.card, styles.rsvpCard)}>
          <p className={styles.rsvpNote}>{RSVP_DEADLINE_NOTE}</p>
          <a
            className={styles.rsvpPhone}
            href={`tel:${rsvpPhoneTel}`}
            aria-label={`تماس با ${rsvpPhone}`}
          >
            {rsvpPhone}
          </a>
        </section>

        <footer className={styles.footer}>
          <span className={styles.goldRule} />
          <p className={styles.footerNames}>با عشق، نازنین و محمد</p>
          <p className={styles.footerNote}>مشتاقانه منتظریم</p>
        </footer>
      </Div>
    </Div>
  );
};

export default AltInvitationView;
