// React
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuBar from './components/navigations/MenuBar';
import App from './App'
// NEAR
import { Wallet } from './near-wallet';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const CONTRACT_ADDRESS = "rudransh12.testnet"
const ENTRY_CONTRACT_ADDRESS = "entrypoint123.testnet"
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'
import Profile from './components/pages/Profile';
import Transfer from './components/pages/Transfer';
import './App.css';
import Admin from './components/pages/Admin';
// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({})
const new_wallet = new Wallet({ createAccessKeyFor: ENTRY_CONTRACT_ADDRESS })
// Setup on page load
window.onload = async () => {
  const isSignedIn = await wallet.startUp()

  ReactDOM.render(
    <BrowserRouter>
      <Layout>
        <MenuBar isSignedIn={isSignedIn} contractId={CONTRACT_ADDRESS} wallet={wallet} mainContractId={ENTRY_CONTRACT_ADDRESS} />

        <Routes>
          <Route path="/" element={<App isSignedIn={isSignedIn} contractId={CONTRACT_ADDRESS} wallet={wallet} mainContractId={ENTRY_CONTRACT_ADDRESS} />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs isSignedIn={isSignedIn} contractId={CONTRACT_ADDRESS} wallet={wallet} mainContractId={ENTRY_CONTRACT_ADDRESS} />} />
          <Route path="/Profile" element={<Profile isSignedIn={isSignedIn} contractId={CONTRACT_ADDRESS} wallet={wallet} mainContractId={ENTRY_CONTRACT_ADDRESS} />} />
          <Route path="/Transfer" element={<Transfer isSignedIn={isSignedIn} contractId={CONTRACT_ADDRESS} wallet={wallet} mainContractId={ENTRY_CONTRACT_ADDRESS} />} />
          <Route path="/Admin" element={<Admin isSignedIn={isSignedIn} contractId={CONTRACT_ADDRESS} wallet={wallet} mainContractId={ENTRY_CONTRACT_ADDRESS} />} />

        </Routes>
      </Layout>
    </BrowserRouter>,
    document.getElementById('root')
  );
}