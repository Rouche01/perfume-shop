import React, { FC } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SearchContainer, SearchBtn, SearchInput } from "./styles";

interface SearchBarProps {
  searchValue?: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  searchBtnFunc: () => void;
}

const SearchBar: FC<SearchBarProps> = ({
  searchValue,
  setSearchValue,
  searchBtnFunc,
}) => {
  return (
    <>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search here"
          value={searchValue}
          onChange={(ev) => setSearchValue(ev.target.value)}
        />
        <SearchBtn onClick={searchBtnFunc}>
          <HiOutlineSearch size={21} color="#ab8e66" />
        </SearchBtn>
      </SearchContainer>
    </>
  );
};

export default SearchBar;
