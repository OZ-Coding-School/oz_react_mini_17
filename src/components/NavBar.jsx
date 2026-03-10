import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-container">
        <Link to='/' className='nav-logo'>현규무비</Link>
        <div className="nav-search">
          <input type="text" placeholder="영화 제목을 입력하세요"/>
        </div>
        <div className="nav-auth">
          <button className="btn-login">로그인</button>
          <button className="btn-signup">회원가입</button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;