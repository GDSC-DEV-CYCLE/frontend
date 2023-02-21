import { useEffect, useState } from 'react';

import { Button } from '../../../components/Button/DefaultButton/styled';
import Input from '../../../components/Input';
import { Label } from '../../../components/Label/styled';
import VSpace from '../../../components/VSpace';
import { useAuthStore } from '../../../store/AuthStore';
import Authentication from '../../../utils/Authentication';
import * as S from './styled';

export default function MyInformation() {
  const { user } = useAuthStore();

  const [email, setEmail] = useState<string>();
  const [nickname, setNickname] = useState<string>();

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setNickname(user.name);
      console.log(user);
    }
  }, [user]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const nickname = form.elements.namedItem('nickname') as HTMLInputElement;
    const prevPassword = form.elements.namedItem('prev-password') as HTMLInputElement;
    const newPassword = form.elements.namedItem('new-password') as HTMLInputElement;
    const passwordConfirm = form.elements.namedItem(
      'password-confirm',
    ) as HTMLInputElement;

    if (newPassword.value !== passwordConfirm.value) {
      alert('비밀번호 확인이 일치하지 않습니다.');
      return;
    } else {
      Authentication.changePassword({
        password: newPassword.value,
        checkPassword: passwordConfirm.value,
      });
      alert('회원정보가 변경되었습니다.');
    }
  };

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    Authentication.signOut();
  };

  return (
    <S.Layout>
      <VSpace size={32} />
      <form onSubmit={handleSubmit}>
        <Label htmlFor="email">이메일</Label>
        <Input
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          disabled
        />
        <VSpace size={8} />
        <Label htmlFor="nickname">이름(닉네임)</Label>
        <Input
          id="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요."
          value={nickname}
        />
        <VSpace size={32} />
        <Label htmlFor="password">비밀번호 변경</Label>
        <Input id="prev-password" type="password" placeholder="기존 비밀번호" />
        <VSpace size={8} />
        <Input id="new-password" type="password" placeholder="새 비밀번호" />
        <VSpace size={8} />
        <Input id="password-confirm" type="password" placeholder="비밀번호 재입력" />
        <VSpace size={32} />
        <Button color="primary" type="submit">
          회원정보 수정
        </Button>
      </form>
      <VSpace size={8} />
      <Button color="normal" type="button" onClick={handleLogout}>
        로그아웃
      </Button>
    </S.Layout>
  );
}
