import React, { FC } from "react";
import styled from "styled-components";
import { HiOutlineSearch } from "react-icons/hi";

const SearchContainer = styled.div`
  width: 400px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 11px 20px;
  font-size: 1rem;
  border: 1px solid #dedede;
  color: #888;
  border-radius: 100px;
  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled.div`
  background-color: #aa8e66;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 18px;
  cursor: pointer;
`;

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
          <HiOutlineSearch size={21} color="white" />
        </SearchBtn>
      </SearchContainer>
    </>
  );
};

export default SearchBar;
