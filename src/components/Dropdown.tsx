import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { AiOutlineCaretDown } from "react-icons/ai";
import { SortOptions } from "../types/global";
import withClickOutside, {
  WrappedComponentProps,
} from "../hoc/withClickOutside";

interface DropdownListProps {
  show: boolean;
}

interface DropdownItemProps {
  selected: boolean;
}

interface DropdownInputProps {
  width?: number;
}

const Wrapper = styled.div`
  display: inline-flex;
  gap: 10px;
`;

const Label = styled.p`
  margin: 0;
  padding: 0;
  color: #888;
  font-size: 1rem;
  font-weight: 500;
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownInput = styled.div<DropdownInputProps>`
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

const DropdownList = styled.ul<DropdownListProps>`
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

const DropdownItem = styled.li<DropdownItemProps>`
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

interface DropdownProps {
  inputValue: string;
  inputOptions: string[];
  inputWidth: number;
  label?: string;
  setInputValue: (value: string) => void;
}

type Ref = HTMLDivElement;

const Dropdown = forwardRef<Ref, DropdownProps & WrappedComponentProps>(
  (
    {
      inputValue,
      inputOptions,
      label,
      inputWidth,
      setInputValue,
      open,
      setOpen,
    },
    ref
  ) => {
    return (
      <Wrapper ref={ref}>
        {label && <Label>{label}</Label>}
        <DropdownContainer>
          <DropdownInput width={inputWidth} onClick={() => setOpen(!open)}>
            <span
              style={{
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {inputValue.toString()}
            </span>{" "}
            <AiOutlineCaretDown color="#aaa" />
          </DropdownInput>
          <DropdownList show={open}>
            {inputOptions.map((option, idx) => (
              <DropdownItem
                key={idx}
                selected={option === inputValue}
                onClick={() => {
                  setInputValue(option);
                  setOpen(false);
                }}
              >
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        </DropdownContainer>
      </Wrapper>
    );
  }
);

Dropdown.displayName = "Dropdown";

export default withClickOutside(Dropdown);
