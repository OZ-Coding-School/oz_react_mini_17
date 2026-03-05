const NavBar = () => {
    return (
        <div className="flex justify-between p-4">
            <h3 className="bg-blue-500 , text-white , rounded-md px-2 , py-1">🍿 OZ MOVIES</h3>
            <input className="bg-gray-300 , text-black , rounded-md px-2 , py-1 , w-1/3 , text-center" />
            <div className="flex gap-2">
                <button className="bg-blue-500 , text-white , rounded-md px-2 , py-1" >로그인</button>
                <button className="bg-blue-500 , text-white , rounded-md px-2 , py-1">회원가입</button>
            </div>
        </div>
    );
};

export default NavBar;