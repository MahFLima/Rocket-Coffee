import { Clock, Coffee } from "phosphor-react";

export type Coffee = {
  name: string;
  time: string;
  quantities: string;
  ingredients: Array<string>;
  cooking: Array<string>;
  coffeeImg: string;
};

export function CardCooking(props: Coffee) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2">
      <div className="flex flex-col">
        <strong className="text-[36px] px-6 text-purple-500">{props.name}</strong>
        <img src={props.coffeeImg} className="w-full h-80 object-scale-down mt-6" alt={props.name}/>
        <aside className="flex items-center gap-6 mt-6 px-4">
          <span className="flex gap-3"><Clock size={24} className="text-purple-500" />{props.time}</span>
          <span className="flex gap-3"><Coffee size={24} className="text-purple-500"/>{props.quantities}</span>
        </aside>
      </div>
      <nav className="flex flex-col gap-6 mb-6">
        <ul className="flex flex-col mt-6 gap-1">
          <strong className="text-2xl text-purple-500 px-4 mb-2">Ingredientes</strong>
          {props.ingredients.map((ingredient, index) => {
            return(
              <li key={index} className="px-6 flex gap-2 items-center"><strong className="text-2xl text-purple-500">{index}.</strong>{ingredient}</li>
            )
          })}
        </ul>
        <ul className="flex flex-col mt-6 gap-3">
          <strong className="text-2xl text-purple-500 px-4 mb-2">Modo de Preparo</strong>
          {props.cooking.map((cooking, index) => {
            return(
              <li key={index} className="px-6 flex gap-2 items-center"><strong className="text-2xl text-purple-500">{index}.</strong>{cooking}</li>
            )
          })}
        </ul>
      </nav>
    </div>
  );
}
