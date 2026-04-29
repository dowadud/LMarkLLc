/** Site identity — public business facts only; marketing copy lives in page components. */
export const SITE = {
  name: "L Mark LLC",
  tagline: "Industrial printing equipment — sales, support & solutions",
  url: "https://www.LMarkLLC.com",
} as const;

export const COMPANY = {
  legalName: "L Mark LLC",
  email: "support@lmarkllc.com",
  phoneDisplay: "1(888)535-8682",
  phoneAltDisplay: "1(888)535-8682",
  phoneRaw: "+18885358682",
  addressLine1: "1934 E Main St",
  city: "Albemarle",
  region: "NC",
  postalCode: "28001",
  country: "US",
} as const;

/** Primary sales line — E.164 for tel: links */
export const telPrimaryHref = "tel:+18885358682";
