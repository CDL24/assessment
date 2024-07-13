export const SCREENS = {
  HOME: "Home",
  BOOKMARK: "Bookmark",
  NOTIFICATION: "Notification",
  PROFILE: "Profile",
  DETAIL: "Detail",
  SIGNUP: "SignUp",
  SIGNIN: "SignIn",
};
export const KEYS = {
  USER: "@User",
  API_CATEGORIES: "categories",
  API_RECENT_RECIPIES: "recent_recipies"
};
export const END_POINT = {
  categories: "categories.php",
  recent_recipies: "filter.php?i=chicken_breast"
}
export const BASE_API = `${process.env.BASE_URL}${process.env.API_URL}`