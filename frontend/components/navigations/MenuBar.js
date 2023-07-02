import React, { useState, useEffect } from 'react'
import { EducationalText, SignInPrompt, SignOutButton } from '../../ui-components';
import 'regenerator-runtime/runtime';

import './MenuBar.css'
import admins from '../admins';

const MenuBar = (isSignedIn,) => {

    if (!isSignedIn.isSignedIn) {
        // Sign-in flow will reload the page later
        return <SignInPrompt onClick={() => isSignedIn.wallet.signIn()} />;
    }

    const [balance, setBalance] = useState()
    const contractId = isSignedIn.contractId;
    const getAccountBalance = () => {
        return isSignedIn.wallet.viewMethod({
            method: 'ft_balance_of', args: { account_id: isSignedIn.wallet.accountId }, contractId
        })
    }
    useEffect(() => {
        getAccountBalance()
            .then(setBalance)
            .catch(alert)
            .finally(() => {
                console.log(balance)
            })
    })

    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a className="logo" href='/' >LTs</a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">

                    <li><a href="/AboutUs">Home </a> </li>
                    {isSignedIn.isSignedIn && <li><a href="/Profile">Profile </a> </li>}
                    {admins.includes(isSignedIn.wallet.accountId) && <li><a href="/Admin">Admin</a></li>}
                    <li><a href="/Transfer">Transfer Tokens</a></li>
                    <li><a href="/ContactUs">Request Tokens</a></li>
                    <li><SignOutButton accountId={isSignedIn.wallet.accountId} onClick={() => isSignedIn.wallet.signOut()} /></li>
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;