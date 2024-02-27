"use client";

import api from "@/api";
import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import { HeaderButtonStyle } from "@/styles/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogInModal from "../LogInModal";

function HeaderMenu() {
  const auth = useAuth();
  const router = useRouter();
  const modal = useModal();

  const handleClickLogOut = async () => {
    await api.auth.logOut();
    auth.setIsLoggedIn(false);

    router.push("/");
  };

  const handleClickLogIn = () => {
    modal.open(<LogInModal />);
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
