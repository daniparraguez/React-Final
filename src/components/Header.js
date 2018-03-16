import React from 'react';
import './Header.css';


function Header ({ appName, user, onAuth, onLogout }) {
  function renderUserData () {
    return (
      <ul className='right'>
        <li className='list'>
          <img
            className='circle'
            src={user.photoURL}
          />
        </li>
        <li className='list'>{user.displayName}</li>
        <li className='list'>
          <button
            className='waves-effect waves-light btn blue darken-1'
            onClick={onLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    )
  }

  function renderLoginButton () {
    return (
      <ul className='right'>
        <li className='list'>
          <button
            className='waves-effect waves-light btn blue darken-1'
            onClick={onAuth}
          >
            Login
          </button>
        </li>
      </ul>
    )
  }

  return (
    <nav>
      <div>
        <a href='#' className='left brand-logo'>{appName}</a>
        {user ? renderUserData() : renderLoginButton()}
      </div>
    </nav>
  )
}

export default Header;
