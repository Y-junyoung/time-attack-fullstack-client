"use client";

import Button from "@/components/Button";
// import { useAuth } from "@/contexts/auth.context";
// import { useModal } from "@/contexts/modal.context";
// import useMutationAddInterestedDeal from "@/react-query/interest/useMutationAddInterestedDeal";
// import useMutationRemoveInterestedDeal from "@/react-query/interest/useMutationRemoveInterestedDeal";
// import useQueryGetInterests from "@/react-query/interest/useQueryGetInterests";
// 로그인 했는지 확인?
// ㄴ 로그인 했으면 글쓴이인지 확인?(로그인한 유저의 email이 글쓴email과 동일한지 확인)
// ㄴㄴ 글쓴이면 수정, 삭제 버튼
// ㄴㄴ 로그인 했으나 방문자라면 관심(취소)버튼
// ㄴ 로그인 안했으면 관심버튼만

// 관심 버튼 누른 상태면 관심 취소 버튼
function DealButtons() {
  // const auth = useAuth();
  // const modal = useModal();
  // const { data: interests } = useQueryGetInterests(auth.isLoggedIn);
  // const { mutateAsync: addInterestedDeal } = useMutationAddInterestedDeal();
  // const { mutateAsync: removeInterestedDeal } =
  //   useMutationRemoveInterestedDeal();
  // // 유저를 어떻게 집어넣지?
  // const writtenUser = auth.isLoggedIn && interests?.

  return (
    <div>
      <Button>DealButtons</Button>
    </div>
  );
}

export default DealButtons;
