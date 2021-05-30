import React from "react";

interface SidebarContext {
  isExpanded: boolean;
  expand: () => void;
  collapse: () => void;
  toggle: () => void;
}

const sidebarContext = React.createContext<SidebarContext>({
  isExpanded: false,
  expand: () => {},
  collapse: () => {},
  toggle: () => {},
});

export const useSidebar = () =>
  React.useContext<SidebarContext>(sidebarContext);

export const SidebarProvider = ({
  children,
  sidebarValue,
}: {
  children: React.ReactNode;
  sidebarValue: SidebarContext;
}) => {
  const { Provider } = sidebarContext;

  return <Provider value={{ ...sidebarValue }}>{children}</Provider>;
};
