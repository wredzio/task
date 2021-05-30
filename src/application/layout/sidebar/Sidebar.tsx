import classNames from "classnames";
import * as React from "react";
import useOnClickOutside from "use-onclickoutside";
import Menu, { SubMenu, MenuItem } from "rc-menu";
import { useExpand } from "../../../infrastructure/hooks/useExpand";
import "./Sidebar.css";
import "./SidebarMenu.css";
import { SidebarProvider } from "./SidebarContext";
import { SidebarLogo } from "./sidebarLogo/SidebarLogo";
import { Sider } from "../../../ui/sider/Sider";
import { SidebarSearchInput } from "./sidebarSearchInput/SidebarSearchInput";
import { SvgIcon } from "../../../ui/svgicon/SvgIcon";

interface SidebarProps {}

/* TODO 
  1. Create custom Menu
  2. Use Menu component to create SidebarMenu
*/

export const Sidebar: React.FunctionComponent<SidebarProps> = () => {
  const { isExpanded, toggle, collapse, expand } = useExpand();
  const [search, setSearch] = React.useState("");
  const ref = React.useRef(null);
  useOnClickOutside(ref, collapse);

  return (
    <div
      ref={ref}
      onMouseEnter={expand}
      onMouseLeave={collapse}
      className={classNames("Sidebar", { "Sidebar--expanded": isExpanded })}
    >
      <SidebarProvider sidebarValue={{ isExpanded, toggle, collapse, expand }}>
        <Sider className={"Sidebar__sider"} isExpanded={isExpanded}>
          <SidebarLogo
            iconName="logo"
            name="Cloud AppShell"
            portalName="Some Portal"
          />
          <SidebarSearchInput value={search} onChange={setSearch} />
          <div tabIndex={0} className="Sidebar__menu">
            <Menu className="SidebarMenu" mode="inline">
              <SubMenu
                key="create"
                expandIcon={
                  <>
                    <SvgIcon iconName="plus" />{" "}
                    {isExpanded && <span>Create</span>}
                  </>
                }
              >
                <MenuItem
                  onClick={() => alert("Create vehicle")}
                  key="bell"
                  className="Sidebar__menuItem"
                >
                  Vehicle
                </MenuItem>
              </SubMenu>

              <MenuItem key="home" className="Sidebar__menuItem">
                <SvgIcon iconName="home" /> {isExpanded && <span>Home</span>}
              </MenuItem>

              <MenuItem key="database" className="Sidebar__menuItem">
                <SvgIcon iconName="database" />{" "}
                {isExpanded && <span>Database</span>}
              </MenuItem>
            </Menu>
          </div>
          <div className="Sidebar__auxiliaryMenu">
            <Menu selectable={false} className="SidebarMenu" mode="inline">
              <MenuItem key="bell" className="Sidebar__menuItem">
                <SvgIcon iconName="bell" />{" "}
                {isExpanded && <span>Notifications</span>}
              </MenuItem>

              <MenuItem key="clock" className="Sidebar__menuItem">
                <SvgIcon iconName="clock" />{" "}
                {isExpanded && <span>Recents</span>}
              </MenuItem>

              <MenuItem key="user" className="Sidebar__menuItem">
                <SvgIcon iconName="user" /> {isExpanded && <span>User</span>}
              </MenuItem>
            </Menu>
          </div>
        </Sider>
      </SidebarProvider>
    </div>
  );
};
