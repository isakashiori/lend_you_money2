import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <h3>ゴリサカさん</h3>
        <nav>
          <ul>
            <li>
              <Link to="/about">このアプリについて</Link>
            </li>
            <li>
              <Link to="/login">ログイン</Link>
            </li>
            <li>
              <Link to="/list">お金管理</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header