import { Dispatch, SetStateAction } from 'react';
import * as Styled from './FilterWithTag.styled';

interface FilterWithTagProps {
  tagList: string[];
  currentFilterByTag: string;
  setCurrentFilterByTag: Dispatch<SetStateAction<string>>;
}

const FilterWithTag = ({
  tagList,
  currentFilterByTag,
  setCurrentFilterByTag,
}: FilterWithTagProps) => {
  const handleChangeCurrentFilterByTag = (tag: string) => {
    setCurrentFilterByTag(tag);
  };

  return (
    <Styled.FilterWithTag>
      {tagList.map((tag) => (
        <Styled.Tag
          isSelected={tag === currentFilterByTag}
          onClick={() => handleChangeCurrentFilterByTag(tag)}
          key={tag}
        >
          {tag}
        </Styled.Tag>
      ))}
    </Styled.FilterWithTag>
  );
};

export default FilterWithTag;
