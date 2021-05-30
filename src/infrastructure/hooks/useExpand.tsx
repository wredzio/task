import React from "react";

export interface ExpandHook {
  isExpanded: boolean;
  expand: () => void;
  collapse: () => void;
  toggle: () => void;
}

export const useExpand = (): ExpandHook => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const expand = () => {
    setIsExpanded(true);
  };

  const collapse = () => {
    setIsExpanded(false);
  };

  const toggle = () => {
    setIsExpanded((value) => !value);
  };

  return { isExpanded, expand, collapse, toggle };
};
