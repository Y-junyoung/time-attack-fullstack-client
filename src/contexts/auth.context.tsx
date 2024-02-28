"use client";

import { client } from "@/api";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContext = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

const isAccessTokenStored = !!(typeof window !== "undefined"
  ? window.localStorage.getItem("accessToken")
  : null);

const AuthContext = createContext<AuthContext>({
  isLoggedIn: isAccessTokenStored,
  setIsLoggedIn: () => {},
});

export const useAuth = () => useContext(AuthContext);

//apiclient에서 베어러토큰 "빈배열로"
//authContext에서 isLoggedIn false로
//로컬스토리지 clear

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(isAccessTokenStored);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
  };

  useEffect(() => {
    let timerId: number | undefined;

    if (isLoggedIn) {
      timerId = window.setInterval(async () => {
        const { data: accessToken } = await client.get<string>(
          "/auth/refresh-token"
        );

        client.defaults.headers.common.Authorization = `bearer ${accessToken}`;

        localStorage.setItem("accessToken", accessToken);
      }, 1000 * 60 * 4.5);

      return () => {
        window.clearInterval(timerId);
      };
    } else {
      if (!timerId) return;

      window.clearInterval(timerId);
    }
  }, [isLoggedIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
