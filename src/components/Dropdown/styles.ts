import styled from "styled-components";

interface DropdownListProps {
  show: boolean;
}

interface DropdownItemProps {
  selected: boolean;
}

interface DropdownInputProps {
  width?: number;
}

export const Wrapper = styled.div`
  display: inline-flex;
  gap: 10px;
`;

export const Label = styled.p`
  margin: 0;
  padding: 0;
  color: #888;
  font-size: 1rem;
  font-weight: 500;
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownInput = styled.div<DropdownInputProps>`
  background-color: #fff;
  border: 1px solid #f1f1f1;
  max-width: 100%;
  width: ${(props) => (props.width ? `${props.width}px` : "157px")};
  color: #222;
  padding: 3px 10px;
  display: inline-flex;
  justify-content: space-between;
  font-size: 0.85rem;
  font-weight: 500;
  align-items: center;
  gap: 15px;
  cursor: pointer;
`;

export const DropdownList = styled.ul<DropdownListProps>`
  position: absolute;
  min-width: 100%;
  padding: 0;
  top: 10px;
  border: 1px solid #eee;
  background-color: #fff;
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  z-index: 100;
  max-height: 200px;
  overflow-y: scroll;
`;

export const DropdownItem = styled.li<DropdownItemProps>`
  list-style-type: none;
  white-space: nowrap;
  font-size: 0.875rem;
  padding: 6px 18px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#f6f6f6" : "transparent")};
  font-weight: 500;
  &:hover {
    background-color: #000;
  }
`;
