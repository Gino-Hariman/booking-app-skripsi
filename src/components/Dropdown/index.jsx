import React, { useRef } from "react";
import {
  DropdownItemContainer,
  DropdownItem,
  DropdownContainer,
  DropdownButton,
} from "./styles";

const Dropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = useRef();
  const popoverDropdownRef = useRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <DropdownContainer>
      <div>
        <DropdownButton
          type="button"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Options
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </DropdownButton>
      </div>

      <DropdownItemContainer
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <DropdownItem role="none">
          <a href="#" role="menuitem" id="menu-item-0">
            Edit
          </a>
          <a href="#" role="menuitem" id="menu-item-1">
            Duplicate
          </a>
        </DropdownItem>
      </DropdownItemContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
