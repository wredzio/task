import classNames from "classnames";
import * as React from "react";
import "./SearchInput.css";

interface SearchInputProps {
  value?: string;
  className?: string;
  onChange?: (newValue: string) => void;
}

export const SearchInput: React.FunctionComponent<SearchInputProps> = ({
  value,
  className,
  onChange,
}) => {
  return (
    <input
      className={classNames("SearchInput", className)}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      type="search"
    ></input>
  );
};
