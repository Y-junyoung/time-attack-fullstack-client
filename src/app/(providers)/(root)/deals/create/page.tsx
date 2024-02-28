"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Page from "@/components/Page";
import useMutationPostDeal from "@/react-query/auth/useMutationCreateDeal";
import { useRouter } from "next/navigation";
import { useState } from "react";

function PostDealPage() {
  const { mutateAsync: postDeal, isPending } = useMutationPostDeal();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  const handleClickPostDeal = async () => {
    try {
      await postDeal({ title, content, location, price: parseInt(price) });
      router.push("/");
    } catch (e) {
      alert("판매 글 작성에 실패하였습니다.");
    }
  };

  return (
    <Page>
      <Heading>판매 글 작성</Heading>

      <section className="flex flex-col items-center gap-y-10 max-w-lg py-10 mx-auto w-full border drop-shadow-sm">
        <Input
          label="제목"
          autoFocus
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={isPending}
        />
        <div className="flex gap-x-10 w-[400px] ">
          <label
            htmlFor="content"
            className="text-lg w-[3rem] font-bold text-gray-700"
          >
            내용
          </label>
          <textarea
            id="content"
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={isPending}
            className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-400"
          />
        </div>
        <Input
          label="주소"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          disabled={isPending}
        />
        <Input
          label="가격"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          disabled={isPending}
        />

        <Button color="sky" onClick={handleClickPostDeal} disabled={isPending}>
          판매글 작성하기
        </Button>
      </section>
    </Page>
  );
}

export default PostDealPage;
