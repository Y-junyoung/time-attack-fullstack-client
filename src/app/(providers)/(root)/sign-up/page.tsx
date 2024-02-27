"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { useAuth } from "@/contexts/auth.context";
import { FormStyle } from "@/styles/styles";
import { useState } from "react";

function SignUpPage() {
  const auth = useAuth();
  //   const { mutateAsync: signUp, isPending } = useMutationSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleClickSignUp = () => {};

  return (
    <Page>
      <Heading>회원 가입</Heading>

      <section className={`${FormStyle}`}>
        <Input
          label="이메일"
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          //   disabled={isPending}
        />
        <Input
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          //   disabled={isPending}
        />
        <Input
          label="비밀번호 확인"
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          //   disabled={isPending}
        />

        <div className="mt-2" />

        <Button
          color="sky"
          onClick={handleClickSignUp}
          // disabled={isPending}
        >
          회원가입하기
        </Button>
      </section>
    </Page>
  );
}

export default SignUpPage;
