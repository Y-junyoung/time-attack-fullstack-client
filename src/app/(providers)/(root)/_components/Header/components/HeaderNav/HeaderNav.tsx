import { HeaderButtonStyle } from "@/styles/styles";
import Link from "next/link";

function HeaderNav() {
  return (
    <nav className="ml-20 flex items-center gap-x-5">
      <Link href="/" className={`${HeaderButtonStyle}`}>
        구입하기
      </Link>
      <Link href="/" className={`${HeaderButtonStyle}`}>
        판매하기
      </Link>
      <Link href="/" className={`${HeaderButtonStyle}`}>
        내 판매글
      </Link>
    </nav>
  );
}

export default HeaderNav;
