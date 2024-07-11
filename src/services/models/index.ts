export interface ICardItem {
  name: string;
  description: string;
  language: string;
  star: number;
  fork: number;
}

export interface AuthData {
  name?: string | undefined;
  email: string | undefined;
  password: string | undefined;
  isLoggedIn: boolean;
};