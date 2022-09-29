import * as Styled from './FilterWithTag.styled';

interface FilterWithTagProps {
  tagList: string[];
}

const FilterWithTag = ({ tagList }: FilterWithTagProps) => {
  return (
    <Styled.FilterWithTag>
      {tagList.map((tag) => (
        <Styled.Tag key={tag}>{tag}</Styled.Tag>
      ))}
    </Styled.FilterWithTag>
  );
};

export default FilterWithTag;
