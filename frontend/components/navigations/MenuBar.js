import React from 'react'
import { EducationalText, SignInPrompt, SignOutButton } from '../../ui-components';
import 'regenerator-runtime/runtime';

import './MenuBar.css'

const MenuBar = (isSignedIn,) => {
    if (!isSignedIn.isSignedIn) {
        // Sign-in flow will reload the page later
        return <SignInPrompt onClick={() => isSignedIn.wallet.signIn()} />;
    }

    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a className="logo" href='/'>Your Logo</a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">

                    <li><a href="/AboutUs">Home </a> </li>
                    {isSignedIn.isSignedIn && <li><a href="/Profile">Profile </a> </li>}
                    <li><a href="/ContactUs">Request Tokens</a></li>
                    <li><SignOutButton accountId={isSignedIn.wallet.accountId} onClick={() => isSignedIn.wallet.signOut()} /></li>
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;