"use client";

import { useAuth } from "@/contexts/auth.context";
import { HeaderButtonStyle } from "@/styles/styles";
import Link from "next/link";

function HeaderMenu() {
  const auth = useAuth();
  //   const router = useRouter();

  const handleClickLogOut = () => {
    auth.setIsLoggedIn(false);
    // router.push("/");
  };

  const handleClickLogIn = () => {
    //로그인 구현
    console.log("hi");
  };

  return (
    <div className="ml-auto flex items-center gap-x-4">
      {auth.isLoggedIn ? (
        <>
          <button
            onClick={handleClickLogOut}
            className={`${HeaderButtonStyle}`}
          >
            로그아웃
          </button>
        </>
      ) : (
        <>
          <Link href="/sign-up" className={`${HeaderButtonStyle}`}>
            회원가입
          </Link>
          <button onClick={handleClickLogIn} className={`${HeaderButtonStyle}`}>
            로그인
          </button>
        </>
      )}
    </div>
  );
}

export default HeaderMenu;
