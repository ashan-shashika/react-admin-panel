import React from "react";
import { Link, useLocation } from "react-router-dom";
import useHover from "../../utils/hooks/useHover";

type MenuItemProps = {
  label: string;
  link: string;
  Icon: any;
};
export default function MenuItem({ label, link, Icon }: MenuItemProps) {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  const location = useLocation();
  const isActive = location.pathname === link;
  const iconClassNames = "h-5 w-5 mr-2 ";

  const cn: string[] = [];
  if (isActive && isHovered) {
    cn.push("text-blue-700");
  } else if (isActive) {
    cn.push("text-blue-500");
  } else if (isHovered) {
    cn.push("text-gray-700");
  } else {
    cn.push("text-gray-500");
  }

  const IconComponent = () => (
    <Icon className={iconClassNames + cn.join(" ")} />
  );

  return (
    <div className="items-center">
      <Link to={link}>
        <div
          ref={hoverRef}
          className={"flex items-center text-xs uppercase py-3 " + cn.join("_")}
        >
          <IconComponent />
          {label}
        </div>
      </Link>
    </div>
  );
}
