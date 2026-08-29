export const OPEN_ANIMATION_MS = 3600;

export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d385.61220885862014!2d59.42770900598462!3d36.36423785378386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1787999263456!5m2!1sen!2s";

export const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=36.36423785378386,59.42770900598462";

export const VENUE_ADDRESS =
  "ابتدای جاده شاندیز روبه روی موج های خروشان بلوار مدرس ۱، نبش مدرس ۱/۱۲";

export const TRACK_TITLE = "یار مبارک باد";

export const RSVP_DEADLINE_NOTE =
  "چنانچه افتخار میزبانی شما را نداریم لطفا تا تاریخ ۶/۱۷ به شماره تماس زیر اطلاع دهید";

export const GROOM_RSVP_PHONE = "۰۹۱۵۵۵۹۲۷۲۱";
export const GROOM_RSVP_PHONE_TEL = "+989155592721";

export const BRIDE_RSVP_PHONE = "۰۹۱۱۵۱۰۲۸۳۷";
export const BRIDE_RSVP_PHONE_TEL = "+989115102837";

export const getRsvpPhone = (guestSide) => {
  return guestSide === "n" ? BRIDE_RSVP_PHONE : GROOM_RSVP_PHONE;
};

export const getRsvpPhoneTel = (guestSide) => {
  return guestSide === "n" ? BRIDE_RSVP_PHONE_TEL : GROOM_RSVP_PHONE_TEL;
};
