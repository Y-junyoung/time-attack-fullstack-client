import api from "@/api";
import Page from "@/components/Page";
import formatPrice from "@/utils/formatPrice.utils";
import Image from "next/image";
import DealButtons from "./_components/DealButtons";

async function DealDetailPage(props: { params: { dealId: number } }) {
  const dealId = props.params.dealId;
  const deal = await api.deal.getDeal(dealId);

  // 현재 시간과 deal.createdAt 사이의 시간 차이를 계산
  const dealCreatedAt = new Date(deal.createdAt);
  const currentTime = new Date();
  const timeDifference = currentTime.getTime() - dealCreatedAt.getTime();
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  return (
    <Page>
      <section className="flex flex-col gap-x-6">
        <div className="relative aspect-[5/4]">
          <Image
            alt={deal.title}
            src={`${deal.imgSrc}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex border-b p-2.5  pb-6 my-5">
          <div className="bg-green-500 w-16 h-16 rounded-full"></div>
          <div className="ml-5">
            <div className="mt-1 font-semibold">{deal.sellerId}</div>
            <div className="mt-1">{deal.location}</div>
          </div>
        </div>

        <div className="flex flex-col gap-y-2 mb-10">
          <h2 className="text-xl font-semibold">{deal.title}</h2>
          <div className="text-sm text-gray-400">{`${hoursDifference}시간 전`}</div>
          <div className="font-semibold mt-2">{formatPrice(deal.price)}원</div>
          <div className="mt-5 font-medium text-lg">{deal.content}</div>
          <div className="mt-5 text-sm font-semibold text-gray-400">
            관심 {deal._count.interested} 조회 {deal.views}
          </div>
        </div>
        <div>
          <DealButtons dealId={dealId} />
        </div>
      </section>
    </Page>
  );
}

export default DealDetailPage;
