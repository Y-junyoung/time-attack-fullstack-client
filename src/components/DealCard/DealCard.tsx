import api from "@/api";
import formatPrice from "@/utils/formatPrice.utils";
import Image from "next/image";
import Link from "next/link";

interface DealCardProps {
  deal: Awaited<ReturnType<typeof api.deal.getDeals>>[number];
}

function DealCard({ deal }: DealCardProps) {
  return (
    <Link href={`/deals/${deal.id}`} className="relative flex flex-col group">
      <div className="aspect-[4/4] relative mb-4 ">
        <Image
          alt={deal.title}
          src={`${deal.imgSrc}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform "
        />
      </div>
      <div className="grid gap-y-2">
        <h3 className="text-lg font-bold">{deal.title}</h3>
        <span className="text-m font-bold">{formatPrice(deal.price)}원</span>
        <h6 className="text-sm">{deal.location}</h6>
        <div className="text-sm text-gray-400">
          관심 {deal._count.interested} 조회 {deal.views}
        </div>
      </div>
    </Link>
  );
}

export default DealCard;
