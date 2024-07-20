export const IS_PROD = process.env.NODE_ENV === "production";
export const API_PROD_URI =
  "https://0t1c6xtfhg.execute-api.ap-southeast-2.amazonaws.com/dev/createAirTableRecord";
export const API_DEV_URI = "http://localhost:3000/dev/createAirTableRecord";

export const ROUTES = {
  HOME: "/",
  PAGE_NOT_FOUND: "/page-not-found",
};
