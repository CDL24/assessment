export interface ICardItem {
  name: string;
  description: string;
  language: string;
  star: number;
  fork: number;
}

export interface AuthData {
  name?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  isLoggedIn: boolean;
  isGuestLoggedIn: boolean;
}
export interface UserObj {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
  isBookmarked?: boolean
};

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};