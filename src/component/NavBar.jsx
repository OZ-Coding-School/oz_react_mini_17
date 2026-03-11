import { useEffect, useState } from "react";
import { useSearchParams , useLocation} from "react-router-dom";
import useDebounce from "../Hooks/useDebounce";


const NavBar = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query);
  const [, setSearchParams] = useSearchParams();
  const location = useLocation();
  const hideSearch = location.pathname.startsWith("/detail");

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSearchParams({}, { replace: true });
      return;
    }

    setSearchParams({ q: debouncedQuery }, { replace: true });
}, [debouncedQuery, setSearchParams]);

    

    return (
        <div className="flex justify-between h-[5vh] py-[1vh]">
            <h3 className="bg-blue-500 text-white rounded-md text-xs md:text-base px-2 py-0.5">🍿 OZ MOVIES</h3>
            {!hideSearch && (
            <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='영화 제목을 입력해주세요'
            className="bg-gray-300 text-black text-xs md:text-base rounded-md py-1 w-1/3 text-center placeholder-transparent md:placeholder-gray-400" />
            )}
            <div className="flex gap-2">
                <button className="bg-blue-500 text-white rounded-md px-2 text-xs md:text-lg">로그인</button>
                <button className="bg-blue-500 text-white rounded-md px-2 text-xs md:text-lg">회원가입</button>
            </div>
        </div>
    );
};

export default NavBar;