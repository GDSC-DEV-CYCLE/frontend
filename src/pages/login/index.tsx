import WritingList from '../../components/WritingList';

export default function LoginPage() {
  return (
    <>
      <WritingList
        title={'제목'}
        content={
          'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas...Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas...Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas'
        }
        tagList={['개발자', '디자이너']}
        writer={'김가은'}
        company={'네이버'}
        commentNum={0}
        heartNum={0}
      />
    </>
  );
}
