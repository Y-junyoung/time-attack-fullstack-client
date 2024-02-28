"use client";

import Button from "@/components/Button";
import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import useQueryGetUser from "@/react-query/user/useQueryGetUser";
import { Deal } from "@/types/Deal.type";
import Link from "next/link";
// import useMutationAddInterestedDeal from "@/react-query/interest/useMutationAddInterestedDeal";
// import useMutationRemoveInterestedDeal from "@/react-query/interest/useMutationRemoveInterestedDeal";
// import useQueryGetInterests from "@/react-query/interest/useQueryGetInterests";

function DealButtons(dealId: Pick<Deal, "id">) {
  const { isLoggedIn } = useAuth();
  const modal = useModal();
  // const { data: deal } = useQueryGetDeals(isLoggedIn);
  const { data: user } = useQueryGetUser(isLoggedIn);

  const isSeller = isLoggedIn && user?.email;
  console.log(dealId);

  console.log("userEmail: ", user?.email);

  // const { data: interests } = useQueryGetInterests(auth.isLoggedIn);
  // const { mutateAsync: addInterestedDeal } = useMutationAddInterestedDeal();
  // const { mutateAsync: removeInterestedDeal } =
  //   useMutationRemoveInterestedDeal();

  return (
    <div>
      {isSeller ? (
        <>
          <Link href={`/`}>
            <Button color="sky">글 수정하기</Button>
          </Link>
          <Button color="white">글 삭제하기</Button>
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
