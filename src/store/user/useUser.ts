import {
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
} from "firebase/auth";
import { create } from "zustand";
import { IUserStore } from "../../interfaces/Store/IUserStore";
import { auth } from "../../common/firebase/firebase";

export const useUser = create<IUserStore>((set, get) => ({
  user: {} as UserCredential,
  isSigned: false,
  setUser: (user) =>
    set(() => ({
      user,
      isSigned: true,
    })),
  logout: () =>
    set(() => ({
      user: {} as UserCredential,
      isSigned: false,
    })),
  signInWithGoogle: () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        get().setUser(res);
      })
      .catch((e) => {
        console.log(e);
      });
  },
}));
