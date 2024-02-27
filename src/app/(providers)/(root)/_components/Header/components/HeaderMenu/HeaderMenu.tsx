"use client";

import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogInModal from "../LogInModal";

function HeaderMenu() {
  const auth = useAuth();
  const router = useRouter();
  const modal = useModal();

  const handleClickLogOut = () => {
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
            className="text-[15px] p-1 font-medium text-gray-600 hover:text-black hover:bg-gray-200 rounded-sm transition-all"
          >
            로그아웃
          </button>
        </>
      ) : (
        <>
          <Link
            href="/auth/sign-up"
            className="text-[15px] p-1 font-medium text-gray-600 hover:text-black hover:bg-gray-200 rounded-sm transition-all"
          >
            회원가입
          </Link>
          <button
            onClick={handleClickLogIn}
            className="text-[15px] p-1 font-medium text-gray-600 hover:text-black hover:bg-gray-200 rounded-sm transition-all"
          >
            로그인
          </button>
        </>
      )}
    </div>
  );
}

export default HeaderMenu;
