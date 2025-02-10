import { JSX } from "react";
import { useState } from "react";
import { Link } from "../atoms/Link";
import NexuzLogoImg from "@assets/imgs/nexuz-logo.png";
import MenuClosedIcon from "@assets/icons/menu-closed-icon.svg";
import MenuOpenedIcon from "@assets/icons/menu-opened-icon.svg";

export const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between px-5 md:px-10 py-4 bg-ternary-100 border-b-2 border-b-details-100">
      <div className="flex items-center gap-10">
        <div>
          <img src={NexuzLogoImg} height={60} width={60} />
        </div>
        
        <div className="hidden md:flex gap-7">
          <Link route="/articles" text="Articles" />
          <Link route="/categories" text="Categories" />
        </div>
      </div>

      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <img src={isOpen ? MenuOpenedIcon : MenuClosedIcon} height={40} width={40} />
      </div>
    </div>
  );
};