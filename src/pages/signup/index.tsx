import { useState } from 'react';

import DevCycleLogo from '../../assets/images/dev-cycle-logo.svg';
import Button from '../../components/Button/DefaultButton';
import Input from '../../components/Input';
import VSpace from '../../components/VSpace';
import {
  ContentLayout,
  DevCycleLogoImage,
  ErrorMessageBox,
  SignInPageLayout,
  SignUpForm,
} from './styled';

const emailValidator = (email: string) => {
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegExp.test(email);
};

export default function SignUpPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const signUp = async ({
    email,
    nickname,
    password,
    passwordConfirm,
  }: {
    email: string;
    nickname: string;
    password: string;
    passwordConfirm: string;
  }) => {
    if (
      email.length < 1 ||
      nickname.length < 1 ||
      password.length < 1 ||
      passwordConfirm.length < 1
    ) {
      setErrorMessage('모든 항목을 입력해주세요.');
      return;
    } else if (nickname.length < 2) {
      setErrorMessage('닉네임은 2자 이상이어야 합니다.');
      return;
    } else if (password.length < 8) {
      setErrorMessage('비밀번호는 8자 이상이어야 합니다.');
      return;
    } else if (!emailValidator(email)) {
      setErrorMessage('이메일 형식이 올바르지 않습니다.');
      return;
    } else if (password !== passwordConfirm) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    } else {
      setErrorMessage(null);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.namedItem('email') as HTMLInputElement;
    const nickname = form.elements.namedItem('nickname') as HTMLInputElement;
    const password = form.elements.namedItem('password') as HTMLInputElement;
    const passwordConfirm = form.elements.namedItem(
      'password-confirm',
    ) as HTMLInputElement;

    signUp({
      email: email.value,
      nickname: nickname.value,
      password: password.value,
      passwordConfirm: passwordConfirm.value,
    });
  };

  return (
    <SignInPageLayout>
      <ContentLayout>
        <DevCycleLogoImage src={DevCycleLogo} alt="dev-cycle-logo" />
        <VSpace size={8} />
        <ErrorMessageBox>{errorMessage}</ErrorMessageBox>
        <VSpace size={8} />
        <SignUpForm onSubmit={handleSubmit}>
          <Input type="email" id="email" placeholder="이메일" />
          <VSpace size={8} />
          <Input type="text" id="nickname" placeholder="닉네임" />
          <VSpace size={24} />
          <Input type="password" id="password" placeholder="비밀번호" />
          <VSpace size={8} />
          <Input type="password" id="password-confirm" placeholder="비밀번호 확인" />
          <VSpace size={36} />
          <Button type="submit">회원가입</Button>
        </SignUpForm>
      </ContentLayout>
    </SignInPageLayout>
  );
}
