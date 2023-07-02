// React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// NEAR
import { Wallet } from './near-wallet';

const CONTRACT_ADDRESS = "rudransh12.testnet"
const ENTRY_CONTRACT_ADDRESS = "spiderman1.testnet"
// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({})
const new_wallet = new Wallet({ createAccessKeyFor: ENTRY_CONTRACT_ADDRESS })
// Setup on page load
window.onload = async () => {
  const isSignedIn = await wallet.startUp()

  ReactDOM.render(
    <App isSignedIn={isSignedIn} contractId={CONTRACT_ADDRESS} mainContractId={ENTRY_CONTRACT_ADDRESS} wallet={wallet} />,
    document.getElementById('root')
  );
}