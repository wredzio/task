import classNames from "classnames";
import * as React from "react";
import "./Sider.css";

interface SiderProps {
  isExpanded: boolean;
  className?: string;
}

export const Sider: React.FunctionComponent<SiderProps> = ({
  isExpanded,
  className,
  children,
}) => {
  return (
    <div
      className={classNames(
        "Sider",
        { "Sider--expanded": isExpanded },
        className
      )}
    >
      {children}
    </div>
  );
};
