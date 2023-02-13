import { useState } from 'react';

import LikeButton from '../../components/Button/LikeButton';

export default function PostListPage() {
  const [a, seta] = useState(false);
  return (
    <>
      <LikeButton isSelected={a}>1.3k</LikeButton>
    </>
  );
}
