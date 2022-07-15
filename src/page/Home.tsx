import { useRef, useState } from "react";
import coffee from "../assets/rocket-coffee.png";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { MenuMobile } from "../components/MenuMobile";

export function Home() {
  const [isActive, setIsActive] = useState(false);

  function handleActive() {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  return (
    <div className="flex flex-col items-center justify-between">
      <Header handle={handleActive} />
      {isActive ? (
        <MenuMobile/>
      ) : (
        <div className="flex flex-col items-center justify-between h-full">
          <strong className="font-semibold text-3xl mt-20 text-center mx-7 md:hidden">
            O café que fará seu código decolar para o próximo nível.
          </strong>
          <div className="md:hidden w-44 my-24">
            <Button />
          </div>
          <span className="flex flex-col text-center text-[50px] font-bold">
            Great Coffee
            <strong className="code">&lt; Great Code/ &gt;</strong>
          </span>
          <img src={coffee} className="w-full h-full" alt="Imagem de dois copos de café"/>
        </div>
      )}
    </div>
  );
}
