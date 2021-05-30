import * as React from "react";
import {
  Bell,
  Clock,
  CloudRain,
  Home,
  Plus,
  User,
  Database,
} from "react-feather";

const icons = {
  logo: CloudRain,
  home: Home,
  bell: Bell,
  clock: Clock,
  user: User,
  plus: Plus,
  database: Database,
};

export type IconName = keyof typeof icons;

interface SvgIconProps {
  iconName: IconName;
  className?: string;
}

export const SvgIcon: React.FC<SvgIconProps> = ({ iconName, className }) => {
  const Icon = icons[iconName];

  return <Icon className={className} />;
};
