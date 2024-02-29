"use client";

import api from "@/api";
import Button from "@/components/Button";
import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import useQueryGetUser from "@/react-query/user/useQueryGetUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import useMutationAddInterestedDeal from "@/react-query/interest/useMutationAddInterestedDeal";
// import useMutationRemoveInterestedDeal from "@/react-query/interest/useMutationRemoveInterestedDeal";
// import useQueryGetInterests from "@/react-query/interest/useQueryGetInterests";
interface DealButtonsProps {
  sellerId: string;
  dealId: number;
}

function DealButtons({ sellerId, dealId }: DealButtonsProps) {
  const { isLoggedIn } = useAuth();
  const modal = useModal();
  const router = useRouter();
  // const { data: deal } = useQueryGetDeals(isLoggedIn);
  const { data: user } = useQueryGetUser(isLoggedIn);

  const isSeller = isLoggedIn && user?.email === sellerId;
  console.log("sellerId: ", sellerId);

  console.log("userEmail: ", user?.email);

  // const { data: interests } = useQueryGetInterests(auth.isLoggedIn);
  // const { mutateAsync: addInterestedDeal } = useMutationAddInterestedDeal();
  // const { mutateAsync: removeInterestedDeal } =
  //   useMutationRemoveInterestedDeal();

  const handleClickRemoveDeal = async () => {
    await api.deal.removeDeal(dealId);
    router.replace("/");
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
          <Link href={"/"}>
            <Button color="sky">관심표하기</Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default DealButtons;
