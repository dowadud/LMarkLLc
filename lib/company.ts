/** Site identity — public business facts only; marketing copy lives in page components. */
export const SITE = {
  name: "L Mark LLC",
  tagline: "Color label printing solutions for production teams",
  url: "https://www.LMarkLLC.com",
} as const;

export const COMPANY = {
  legalName: "L Mark LLC",
  email: "info@lmarkllc.com",
  phoneDisplay: "(704) 486-6258",
  phoneAltDisplay: "(704) 486-6258",
  phoneRaw: "+17044866258",
  addressLine1: "1934 E Main St",
  city: "Albemarle",
  region: "NC",
  postalCode: "28001",
  country: "US",
} as const;

/** Primary sales line — E.164 for tel: links */
export const telPrimaryHref = "tel:+17044866258";
