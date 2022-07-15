import { Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { Menu } from "./page/Menu";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
    </Routes>
  )
}