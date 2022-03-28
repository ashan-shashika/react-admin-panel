import React, { ReactNode, useEffect, useState } from "react";
import {
  DesktopComputerIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import { useLocation } from "react-router-dom";

type MenuInnerProps = {
  children: ReactNode;
  innerLinks: string[];
};

export default function MenuInner({ children, innerLinks }: MenuInnerProps) {
  const [isActive, setActive] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const isMatch = innerLinks.some((x) => x === location.pathname);
    setActive(isMatch);
  }, [location, innerLinks]);

  return (
    <div className="items-center text-xs uppercase text-gray-500 text-left py-3">
      <div
        className="flex items-center cursor-pointer pb-1"
        onClick={() => setActive((s) => !s)}
      >
        <DesktopComputerIcon className="h-5 w-5 mr-2" />
        <div className="flex items-center justify-between w-full">
          Test menu
          {isActive ? (
            <ChevronDownIcon className="h-5 w-5" />
          ) : (
            <ChevronRightIcon className="h-5 w-5" />
          )}
        </div>
      </div>
      {isActive && <div className="pl-3">{children}</div>}
    </div>
  );
}
