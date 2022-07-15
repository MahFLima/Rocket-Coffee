import { useRef, useState } from "react";
import logoMobile from "../assets/logo-mobile.svg";
import logoDesktop from "../assets/logo-desktop.svg";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

interface propsHeader{
  handle: () => void
}

export function Header({handle}: propsHeader) {
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()

  function handleActive(nav: string){
    navigate(nav)
  }

  return (
    <header className="w-full flex justify-between items-center py-9 px-4 border-b border-gray-900 md:border-none md:justify-around">
      <img src={logoMobile} className="w-[150px] h-full md:hidden" alt="logo Rocketseat"/>
      <img src={logoDesktop} className="hidden md:flex" alt="logo Rocketseat"/>
      <ul className="hidden md:flex text-white gap-8">
        <li className={classNames('text-[16px] text-center hover:text-purple-500')}><button onClick={() => {handleActive('/')}}>Home</button></li>
        <li className={classNames('text-[16px] text-center hover:text-purple-500')}><button onClick={() => {handleActive('/menu')}}>Menu</button></li>
        <li className={classNames('text-[16px] text-center hover:text-purple-500')}><button onClick={() => {}}>Recompensas</button></li>
        <li className={classNames('text-[16px] text-center hover:text-purple-500')}><button onClick={() => {}}>Gift Card</button></li>
        <li className={classNames('text-[16px] text-center hover:text-purple-500')}><button onClick={() => {}}>Lojas</button></li>
      </ul>
      <div className="hidden md:flex">
        <Button/>
      </div>
      <button
        id="menuBtn"
        className="flex flex-col justify-center gap-1 w-12 h-12 md:hidden focus:outline-none"
        type="button"
        onClick={handle}
      >
        <div className="w-6 h-[2px] bg-purple-500"></div>
        <div className="w-6 h-[2px] bg-purple-500"></div>
      </button>
    </header>
  );
}
