import React, { useState } from "react";
import { capitalize } from "../../helpers/capitalize";
import {
  DropdownContent,
  DropdownItem,
  DropdownContainer,
  DropdownButton,
} from "./styles";

const Dropdown = ({ selected, setSelected, options }) => {
  const [isActive, setIsActive] = useState(false);

  const handleOpenDropdown = () => {
    setIsActive((prev) => !prev);
  };

  const handleSelectItem = (item) => {
    setSelected(item);
    setIsActive(false);
  };

  return (
    <DropdownContainer>
      <div>
        <DropdownButton
          selected={selected}
          type="button"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={handleOpenDropdown}
        >
          {selected
            ? capitalize(selected.nama_gedung)
            : "Select Campus Location"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d={isActive ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
            />
          </svg>

          {/* <svg
            className="-mr-1 ml-2 h-5 w-5 fill-current text-black-100"
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
          </svg> */}
        </DropdownButton>
      </div>

      {isActive && (
        <DropdownContent
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          {options.map((option) => (
            <DropdownItem
              role="menuitem"
              onClick={() => handleSelectItem(option)}
            >
              {option.nama_gedung}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
