/** Site identity — public business facts only; marketing copy lives in page components. */
export const SITE = {
  name: "TCS Digital Solutions",
  tagline: "On-demand color labeling for production teams",
  url: "https://tcsdigitalsolutions.com",
} as const;

export const COMPANY = {
  legalName: "TCS Digital Solutions",
  email: "orders@tcsdigitalsolutions.com",
  phoneDisplay: "(678) 824-2304",
  phoneAltDisplay: "+1 (762) 208-6985",
  phoneRaw: "+16788242304",
  addressLine1: "5150 Peachtree Industrial Blvd #250",
  city: "Peachtree Corners",
  region: "GA",
  postalCode: "30071",
  country: "US",
} as const;

/** Primary sales line — E.164 for tel: links */
export const telPrimaryHref = "tel:+16788242304";
