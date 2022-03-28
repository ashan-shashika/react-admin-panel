import React, { useState } from "react";
import {
  DesktopComputerIcon,
  CubeIcon,
  MenuIcon,
  XIcon,
  FolderAddIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import MenuInner from "./MenuInner";
export default function SideBar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <MenuIcon className="h-5 w-5 text-gray" />
          </button>
          {/* Brand */}
          <Link to="/">
            <div className="text-left text-gray-700">Admin Panel</div>{" "}
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              {/* <NotificationDropdown /> */}
            </li>
            <li className="inline-block relative">{/* <UserDropdown /> */}</li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blue-200">
              <div className="flex flex-wrap justify-start">
                <div className="w-6/12 text-left">
                  <Link to="/">
                    <div className="md:block text-left md:pb-2 text-blue-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
                      Admin Panel
                    </div>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <XIcon className="h-5 w-5 text-gray" />
                  </button>
                </div>
              </div>
            </div>
            {/* Navigation */}

            <div className="md:flex-col md:min-w-full flex flex-col list-none">
              <MenuItem label="Dashboard" Icon={DesktopComputerIcon} link="/" />
              <MenuItem label="Components" Icon={CubeIcon} link="/components" />
              <MenuInner innerLinks={["/menu-1", "/menu-2"]}>
                <MenuItem label="Menu 1" Icon={FolderAddIcon} link="/menu-1" />
                <MenuItem label="Menu 2" Icon={FolderAddIcon} link="/menu-2" />
              </MenuInner>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
