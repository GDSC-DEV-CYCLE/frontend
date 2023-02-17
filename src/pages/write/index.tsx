import { useEffect, useRef, useState } from 'react';
import { FiArrowLeft, FiChevronDown } from 'react-icons/fi';
import styled, { css } from 'styled-components';

import _Button from '../../components/Button/DefaultButton';
import TagTip from '../../components/Tag';
import { TagsInput } from '../../components/TagInputComponent';
import TextArea from '../../components/TextArea';
import VSpace from '../../components/VSpace';
import { Body1, Body2, Display2 } from '../../styles/common';

export default function WritePage() {
  return (
    <WritePageLayout>
      <TopLayout>
        <TopContentLayout>
          <TopLeftLayout>
            <ActionButton>
              <FiArrowLeft size={24} />
              <div>뒤로가기</div>
            </ActionButton>
          </TopLeftLayout>
          <TopRightLayout>
            <UploadButton>등록하기</UploadButton>
          </TopRightLayout>
        </TopContentLayout>
      </TopLayout>
      <TopLayoutPlaceholder />
      <MainLayout>
        <Description>토픽</Description>
        <VSpace size={8} />
        <Select options={['커리어', '기술', '자유주제']} />
        <VSpace size={20} />
        <TitleInput placeholder="제목을 입력해주세요." />
        <VSpace size={24} />
        <ContentInput placeholder="내용을 입력해주세요." />
        <VSpace size={24} />
        <Description>태그 선택</Description>
        <VSpace size={8} />
        <TagContainer
          tags={[
            {
              tagName: '코딩테스트',
              value: 'coding-test',
            },
            {
              tagName: '기술면접',
              value: 'tech-interview',
            },
            {
              tagName: '자소서',
              value: 'cover-letter',
            },
            {
              tagName: '기타',
              value: 'etc',
            },
          ]}
          onChange={(tags) => console.log(tags)}
        />
        <VSpace size={8} />
        <TagListInput onChange={(tags) => console.log(tags)} tags={[]} />
      </MainLayout>
    </WritePageLayout>
  );
}

const WritePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

const TopLayout = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  padding: 0 32px;
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
  box-sizing: border-box;
`;

const TopLayoutPlaceholder = styled.div`
  min-height: 64px !important;
`;

const TopContentLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 100%;
`;

const TopLeftLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

const ActionButton = styled(_Button)`
  width: fit-content;
  background-color: white;
  color: #9a9a9a;
  border: none;

  padding: 0 16px;

  &:hover {
    background-color: #00000010;
  }
`;

const TopRightLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;

const UploadButton = styled(_Button)`
  width: 184px;
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 100%;
  padding: 32px 0;
`;

const Description = styled.div`
  ${Body1}
  color: #9A9A9A;
`;

const SelectContainerLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 40px;

  position: relative;
`;

const SelectLayout = styled.select`
  appearance: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 0 16px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  :focus {
    outline: none;
  }

  option {
    color: #000;
  }
`;

const DropdownIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
  top: 8px;
  color: black;
`;

const Select = ({ options }: { options: string[] }) => {
  return (
    <SelectContainerLayout>
      <SelectLayout>
        {options.map((option, index) => (
          <option key={index} value={index + 1}>
            {option}
          </option>
        ))}
      </SelectLayout>
      <DropdownIcon>
        <FiChevronDown size={24} />
      </DropdownIcon>
    </SelectContainerLayout>
  );
};

const TitleInput = styled.input`
  appearance: none;
  width: 100%;
  height: 60px;

  ${Display2}

  border: none;
  border-bottom: 1px solid #d9d9d9;

  :focus {
    outline: none;
  }
`;

const ContentInput = styled(TextArea)`
  appearance: none;
  min-height: 500px;

  font-family: Pretendard;
  ${Body2}

  background-color: #fff;
  border: 1px solid #d9d9d9;
`;

const TagContainerLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  gap: 8px;
`;

const TagLayout = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  width: fit-content;
  height: 36px;
  padding: 0 16px;

  ${Body1}

  border: 1px solid #d9d9d9;
  border-radius: 4px;

  ${({ theme, selected }) =>
    selected &&
    css`
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
    `}
`;

const Tag = ({
  tagName,
  value,
  selected,
  onClick,
}: {
  tagName: string;
  value: string;
  selected: boolean;
  onClick?: () => void;
}) => {
  return (
    <TagLayout selected={selected} onClick={onClick} key={value}>
      {tagName}
    </TagLayout>
  );
};

interface TagInfo {
  tagName: string;
  value: string;
}

const TagContainer = ({
  tags,
  onChange,
}: {
  tags: TagInfo[];
  onChange: (value: TagInfo) => void;
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('');

  const handleTagClick = (tag: TagInfo) => {
    setSelectedTag(tag.value);
    onChange(tag);
  };

  return (
    <TagContainerLayout>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          tagName={tag.tagName}
          value={tag.value}
          selected={selectedTag === tag.value}
          onClick={() => handleTagClick(tag)}
        />
      ))}
    </TagContainerLayout>
  );
};

// tags will be input seperate by comma.
// ex) tag1, tag2, tag3
// if tag is inputted, it will be added to tag list.
// and tag list will be shown in tag input container.
// inputted tag will be rendered as tag component.
const TagListInput = ({
  onChange,
  tags,
}: {
  onChange: (tag: TagInfo) => void;
  tags: TagInfo[];
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <TagListInputLayout>
      <TagsInput
        value={selected}
        onChange={setSelected}
        placeHolder="태그를 입력하세요"
      />
    </TagListInputLayout>
  );
};

const TagListInputLayout = styled.div`
  .rti--container {
    ${Body1}

    --rti-bg: #fff;
    --rti-border: #d9d9d9;
    /* --rti-main: #000; */

    height: 36px;
    box-sizing: border-box;

    padding: 0 8px;

    &:focus {
      outline: none;
    }

    &:active {
      outline: none;
    }
  }

  .rti--tag {
    background-color: #f4f4f4;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 0 8px;

    ${Body1}

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 0 8px;

    height: 24px;
  }
`;
