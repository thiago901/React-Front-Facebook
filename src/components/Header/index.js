import React,{ Component } from 'react';
import './style.css';
import userProfile from '../../assets/icons/user-profile.jpg'
class Header extends Component {
    render(){
        return (
          <>
            <header className='header'>
              <h1 className='title'>fecebook</h1>
              <div className='profile'>
                <h1 className='profile-title'>Meu perfil</h1>
                <img src={userProfile} className='img-user-profile'/>
              </div>
            </header>
          </>
        );
    }

}

export default Header;