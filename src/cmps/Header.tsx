import React from 'react';
import DynamicButton from '../shared/Button';
import Logo from '../shared/Logo';




const Header: React.FC = () => {


    const handleClick = () => {
        console.log('user loggin in')
    };

    const buttonProps = {
        onClick: handleClick,
        type: 'button' as 'button',
        disabled: false,
        text: 'Sign In / Create Account',
        className: 'hp-login-btn btn',
    };


  return (
    <div className="main-header">
    <Logo/>
    <DynamicButton {...buttonProps} ></DynamicButton>
  </div>
  );
};

export default Header;