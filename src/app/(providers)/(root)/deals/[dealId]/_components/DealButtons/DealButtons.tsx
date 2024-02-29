"use client";

import api from "@/api";
import LogInModal from "@/app/(providers)/(root)/_components/Header/components/LogInModal";
import Button from "@/components/Button";
import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import useMutationAddInterestedDeal from "@/react-query/interest/useMutationAddInterestedDeal";
import useMutationRemoveInterestedDeal from "@/react-query/interest/useMutationRemoveInterestedDeal";
import useQueryGetInterests from "@/react-query/interest/useQueryGetInterests";
import useQueryGetUser from "@/react-query/user/useQueryGetUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface DealButtonsProps {
  sellerId: string;
  dealId: number;
}

function DealButtons({ sellerId, dealId }: DealButtonsProps) {
  const { isLoggedIn } = useAuth();
  const modal = useModal();
  const router = useRouter();
  const [isAdded, setIsAdded] = useState(false);
  const { data: user } = useQueryGetUser(isLoggedIn);

  const isSeller = isLoggedIn && user?.email === sellerId;

  const { data: interests } = useQueryGetInterests(isLoggedIn);

  const { mutate: addInterestedDeal } = useMutationAddInterestedDeal();
  const { mutate: removeInterestedDeal } = useMutationRemoveInterestedDeal();
  const isAlreadyAdded =
    (isLoggedIn &&
      interests?.interestedDeals?.some((deal) => deal.dealId === dealId)) ??
    false;

  const handleClickRemoveDeal = async () => {
    await api.deal.removeDeal(dealId);
    router.replace("/");
  };

  const handleClickButton = () => {
    if (!isLoggedIn) return modal.open(<LogInModal />);

    if (isAlreadyAdded) {
      removeInterestedDeal(dealId);

      alert("관심목록에서 제거하였습니다.");
    } else {
      addInterestedDeal(dealId);
      alert("관심목록에 추가되었습니다");
    }
  };

  return (
    <div className="flex justify-end gap-x-8">
      {isSeller ? (
        <>
          <Link href={`/deals/${dealId}/edit`}>
            <Button color="sky">글 수정하기</Button>
          </Link>
          <Button color="white" onClick={handleClickRemoveDeal}>
            글 삭제하기
          </Button>
        </>
      ) : (
        <>
          <Button
            color={isAlreadyAdded ? "white" : "sky"}
            onClick={handleClickButton}
          >
            {isAlreadyAdded ? "관심 해제하기" : "관심 표하기"}
          </Button>
        </>
      )}
    </div>
  );
}

export default DealButtons;
