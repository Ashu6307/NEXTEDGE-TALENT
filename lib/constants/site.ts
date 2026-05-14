export const SITE_NAME = "NEXTEDGE Talent Consultancy";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://nextedge-master.preview.emergentagent.com";

export const SITE_DESCRIPTION =
  "Premium membership-based job consultancy platform with shortlist-first company reveal, OTP-secured flows, and admin-governed hiring quality.";

export const SITE_KEYWORDS = [
  "NEXTEDGE",
  "job consultancy",
  "membership jobs",
  "shortlist first",
  "privacy first hiring",
  "recruitment platform India",
  "verified jobs",
] as const;

