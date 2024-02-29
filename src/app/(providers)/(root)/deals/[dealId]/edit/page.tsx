"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Page from "@/components/Page";
import useMutationUpdateDeal from "@/react-query/deal/useMutationUpdateDeal";
import axios from "axios";
import { useRouter } from "next/navigation";
import { join } from "path";
import { ChangeEventHandler, useState } from "react";

function EditPage(props: { params: { dealId: number } }) {
  const { isPending, mutateAsync: updateDeal } = useMutationUpdateDeal();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const router = useRouter();

  const dealId: number = props.params.dealId;

  const handleChangeUploadImage: ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    const image = e.target.files?.[0];
    if (!image) return alert("파일을 선택해주세요.");

    const formData = new FormData();
    formData.append("image", image);
    const response = await axios.post(
      "http://localhost:5050/deals/image",
      formData
    );
    const baseUrl = "http://localhost:5050/images";

    const data = response.data;
    const result = data.result;

    const imageUrl = join(baseUrl, result);
    console.log("imageUrl: ", imageUrl);

    return setImgSrc(imageUrl);
  };

  const handleClickUpdateDeal = async () => {
    console.log("imgSrc: ", imgSrc);
    try {
      await updateDeal({
        dto: {
          title,
          content,
          location,
          price: parseInt(price),
          imgSrc,
        },
        dealId,
      });
      router.replace("/");
    } catch (e) {
      alert("판매 글 수정에 실패하였습니다.");
    }
  };

  return (
    <Page>
      <Heading>판매 글 수정</Heading>

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
        <div className="flex gap-x-10 w-[400px] ">
          <label
            htmlFor="image"
            className="text-lg w-[3rem] font-bold text-gray-700"
          >
            이미지 업로드
          </label>
          <input
            id="image"
            type="file"
            onChange={handleChangeUploadImage}
            className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-400"
          />
        </div>

        <Button
          color="sky"
          onClick={handleClickUpdateDeal}
          disabled={isPending}
        >
          판매글 수정하기
        </Button>
      </section>
    </Page>
  );
}

export default EditPage;
