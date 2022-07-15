import { useNavigate } from "react-router-dom";

export function MenuMobile() {
  const navigate = useNavigate()
  return (
    <ul className="w-full text-gray-500">
      <li className="text-lg font-medium border-b border-gray-900 py-3 px-7">
        <button onClick={() => {navigate('/')}}>Home</button>
      </li>
      <li className="text-lg font-medium border-b border-gray-900 py-3 px-7">
        <button onClick={() => {navigate('/menu')}}>Menu</button>
      </li>
      <li className="text-lg font-medium border-b border-gray-900 py-3 px-7">
        <button onClick={() => {}}>Recompensas</button>
      </li>
      <li className="text-lg font-medium border-b border-gray-900 py-3 px-7">
        <button onClick={() => {}}>Gift Card</button>
      </li>
      <li className="text-lg font-medium border-b border-gray-900 py-3 px-7">
        <button onClick={() => {}}>Lojas</button>
      </li>
    </ul>
  );
}
