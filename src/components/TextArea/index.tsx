import { TextareaHTMLAttributes, useCallback, useRef } from 'react';

import * as S from './styled';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea({ ...args }: Props) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const resizeTextAreaHeight = useCallback(() => {
    if (!textAreaRef.current) return;

    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
  }, []);

  return (
    <>
      <S.TextArea onInput={resizeTextAreaHeight} ref={textAreaRef} {...args} />
    </>
  );
}
