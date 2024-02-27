import Link from "next/link";

function HeaderNav() {
  return (
    <nav className="ml-20 flex items-center gap-x-5">
      <Link
        href="/"
        className="text-[15px] p-1 font-medium text-gray-600 hover:text-black hover:bg-gray-200 rounded-sm transition-all"
      >
        구입하기
      </Link>
      <Link
        href="/"
        className="text-[15px] p-1 font-medium text-gray-600 hover:text-black hover:bg-gray-200 rounded-sm transition-all"
      >
        판매하기
      </Link>
      <Link
        href="/"
        className="text-[15px] p-1 font-medium text-gray-600 hover:text-black hover:bg-gray-200 rounded-sm transition-all"
      >
        내 판매글
      </Link>
    </nav>
  );
}

export default HeaderNav;
