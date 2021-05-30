import classNames from "classnames";
import * as React from "react";
import { SearchInput } from "../../../../ui/input/SearchInput";
import { useSidebar } from "../SidebarContext";
import { useSidebarItem } from "../useSidebarItem";
import "./SidebarSearchInput.css";

interface SidebarSearchInputProps {
  value: string;
  className?: string;
  onChange: (newValue: string) => void;
}

export const SidebarSearchInput: React.FunctionComponent<SidebarSearchInputProps> =
  ({ value, className, onChange }) => {
    const { isExpanded } = useSidebar();
    const sidebarItem = useSidebarItem();
    return (
      <SearchInput
        className={classNames(
          "SidebarSearchInput",
          { "SidebarSearchInput--expanded": isExpanded },
          className
        )}
        value={value}
        onChange={onChange}
        {...sidebarItem}
      ></SearchInput>
    );
  };
