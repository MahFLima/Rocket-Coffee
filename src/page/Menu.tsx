import { useState } from "react";
import { CardCooking, Coffee } from "../components/CardCooking";
import { Header } from "../components/Header";
import { MenuMobile } from "../components/MenuMobile";
import data from "../data";

export function Menu() {
  const [isActive, setIsActive] = useState(false);
  const [selectCoffee, setSelectCoffee] = useState<Coffee[]>([
    {
      name: data[0].name,
      time: data[0].time,
      quantities: data[0].quantities,
      ingredients: data[0].ingredients,
      cooking: data[0].cooking,
      coffeeImg: data[0].coffeeImg,
    },
  ]);

  function handleActive() {
    isActive ? setIsActive(false) : setIsActive(true);
  }
  return (
    <div className="flex flex-col">
      <Header handle={handleActive} />
      {isActive ? (
        <MenuMobile />
      ) : (
        <div className="flex flex-col gap-4">
          <div className="div-over flex py-4 w-full snap-mandatory snap-x overflow-x-auto scrollbar scrollbar-thumb-purple-500 scrollbar-track-black">
            {data.map((item, index) => {
              return (
                <div key={index} className="w-full md:w-1/2 snap-start flex-none">
                  <button
                    className="hover:text-purple-500 w-full pb-4"
                    onClick={() => {
                      setSelectCoffee([
                        {
                          name: item.name,
                          time: item.time,
                          quantities: item.quantities,
                          ingredients: item.ingredients,
                          cooking: item.cooking,
                          coffeeImg: item.coffeeImg,
                        },
                      ]);
                    }}
                  >
                    {item.name}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="mt-12">
            <h1>
              {selectCoffee.map((item, index) => {
                return (
                  <CardCooking
                    key={index}
                    name={item.name}
                    time={item.time}
                    quantities={item.quantities}
                    ingredients={item.ingredients}
                    cooking={item.cooking}
                    coffeeImg={item.coffeeImg}
                  />
                );
              })}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
