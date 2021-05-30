import * as React from "react";
import { IconName, SvgIcon } from "../../../../ui/svgicon/SvgIcon";
import { useSidebar } from "../SidebarContext";
import { useSidebarItem } from "../useSidebarItem";
import "./SidebarLogo.css";

interface SidebarLogoProps {
  iconName: IconName;
  name: string;
  portalName?: string;
}

export const SidebarLogo: React.FunctionComponent<SidebarLogoProps> = ({
  iconName,
  name,
  portalName,
}) => {
  const { isExpanded } = useSidebar();
  const sidebarItem = useSidebarItem();

  return (
    <div {...sidebarItem} className="SidebarLogo">
      <SvgIcon className="SidebarLogo__icon" iconName={iconName} />
      {isExpanded && (
        <div className="SidebarLogo__names">
          {portalName}
          <h2>{name}</h2>
        </div>
      )}
    </div>
  );
};
