import 'regenerator-runtime/runtime';
import React from 'react';

import './assets/global.css';

import { EducationalText, SignInPrompt, SignOutButton } from './ui-components';


export default function App({ isSignedIn, contractId, wallet, mainContractId }) {
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState();

  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);
  const [orgs, setOrgs] = React.useState()

  // Get blockchian state once on component load
  React.useEffect(() => {
    getGreeting()
      .then(setValueFromBlockchain)
      .catch(alert)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }
    , []);

  /// If user not signed-in with wallet - show prompt
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return <SignInPrompt greeting={valueFromBlockchain} onClick={() => wallet.signIn()} />;
  }

  function changeGreeting(e) {
    e.preventDefault();
    setUiPleaseWait(true);
    const { greetingInput } = e.target.elements;

    // use the wallet to send the greeting to the contract
    wallet.callMethod({ method: 'set_greeting', args: { message: greetingInput.value }, contractId })
      .then(async () => { return getGreeting(); })
      .then(setValueFromBlockchain)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }

  function getGreeting() {
    // use the wallet to query the contract's greeting
    return wallet.viewMethod({
      method: 'ft_balance_of', args: { account_id: "spiderman1.testnet" }, contractId,
    })
  }

  function registerOrgs() {
    const s = wallet.callMethod({
      contractId: mainContractId,
      method: 'register', args: {
        id: "spiderman1.testnet", name: "spiderman", requested_amount: 1000000,
      }, deposit: '10000000000000'
    })
    console.log(s)
  }
  function getAllOrgs() {
    return wallet.viewMethod({ contractId: mainContractId, args: { id: "spiderman1.testnet" }, method: 'get_orgs' }).then(setOrgs)
      .catch(alert)
      .finally(() => {
        setUiPleaseWait(false);
      });

  }

  function setStorage() {
    return wallet.callMethod({ method: 'storage_deposit', args: { account_id: "transfer.rudranshsharma123.testnet" }, contractId, deposit: '10000000000000000000000' });
  }
  function tranferFt() {
    return wallet.callMethod({
      method: 'ft_transfer', args: { receiver_id: "spiderman1.testnet", amount: "1000000000000000000000000", memo: "ylo" }, contractId, deposit: '1'
    });
  }

  function newFt() {
    return wallet.callMethod({ method: 'new', args: { owner_id: "spiderman1.testnet", total_supply: "1000000000000000000000000000000", metadata: { spec: "jskajs", name: "testing", symbol: "tst", reference: "None", reference_hash: "None", decimals: 24 } }, contractId });
  }

  return (
    <>
      <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()} />
      <main className={uiPleaseWait ? 'please-wait' : ''}>
        <h1>
          The contract says: <span className="greeting">{valueFromBlockchain}</span>
        </h1>
        <button onClick={tranferFt}>Yolo</button>
        <button onClick={newFt}>New</button>
        <button onClick={getAllOrgs}>All</button>
        <>{console.log(orgs)}</>
        <form onSubmit={changeGreeting} className="change">
          <label>Change greeting:</label>
          <div>
            <input
              autoComplete="off"
              defaultValue={valueFromBlockchain}
              id="greetingInput"
            />
            <button onClick={setStorage}>
              <span>Save</span>
              <div className="loader"></div>
            </button>
          </div>
        </form>
        <EducationalText />
      </main>
    </>
  );
}