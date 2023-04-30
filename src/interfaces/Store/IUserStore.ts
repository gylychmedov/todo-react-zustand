import { UserCredential } from "firebase/auth";

export interface IUserStore {
  user: UserCredential;
  isSigned: boolean;
  setUser: (user: UserCredential) => void;
  logout: () => void;
  signInWithGoogle: () => void;
}
