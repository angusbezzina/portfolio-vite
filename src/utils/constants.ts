export const IS_PROD = import.meta.env.PROD;
export const API_PROD = import.meta.env.VITE_API_PROD || "";
export const API_DEV = "/api";
export const API_STEM = IS_PROD ? API_PROD : API_DEV;
export const CONTACT_FORM_API = `${API_STEM}/airtable`;
export const DOWNLOAD_URL_API = `${API_STEM}/download`;
export const CHATBOT_API = `${API_STEM}/chatbot`;

export const ROUTES = {
  HOME: "/",
  PAGE_NOT_FOUND: "/page-not-found",
};

export const BRAND_COLOR = "#FB3F42";
export const ALT_COLOR_LIGHT = "#0F172A";
export const ALT_COLOR_DARK = "#F2F2F2";
