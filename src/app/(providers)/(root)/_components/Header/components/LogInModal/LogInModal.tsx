"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import useMutationLogIn from "@/react-query/auth/useMutationLogIn";
import { FormStyle } from "@/styles/styles";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LogInModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isPending, mutateAsync: logIn } = useMutationLogIn();
  const modal = useModal();
  const router = useRouter();
  const auth = useAuth();

  const handleClickLogIn = async () => {
    if (!email.trim() || !password.trim())
      return alert("이메일과 비밀번호를 반드시 입력해주세요.");
    if (password.length < 8) return alert("비밀번호를 8자 이상 입력하세요");

    try {
      await logIn({ email, password });
      auth.setIsLoggedIn(true);
      router.push("/");
      modal.close();
    } catch (e) {
      alert("로그인에 실패하였습니다.");
    }
  };

  return (
    <Modal>
      <Heading>로그인</Heading>

      <section className={`${FormStyle}`}>
        <Input
          label="이메일"
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
        />
        <Input
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        />

        <div className="mt-2" />

        <Button color="sky" onClick={handleClickLogIn} disabled={isPending}>
          로그인하기
        </Button>
      </section>
    </Modal>
  );
}

export default LogInModal;
