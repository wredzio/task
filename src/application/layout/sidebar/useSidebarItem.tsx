import { useSidebar } from "./SidebarContext";

export const useSidebarItem = () => {
  const { expand } = useSidebar();

  return { tabIndex: 0, onFocus: expand };
};
