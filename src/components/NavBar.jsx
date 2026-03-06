import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">GH무비</Link>
      </div>
      <div className="search">
        <input type="text" placeholder="검색어를 입력하세요" />
      </div>
      <div className="auth-buttons">
        <button className="login">로그인</button>
        <button className="signup">회원가입</button>
      </div>
    </nav>
  )
}

export default NavBar
