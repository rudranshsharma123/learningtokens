import React, { useState, useEffect } from 'react'

const Transfer = (isSignedIn) => {
    const [balance, setBalance] = useState()
    const contractId = isSignedIn.contractId;
    const [receiverId, setRecieverId] = useState()
    const [isNew, setIsNew] = useState(true)
    const [amount, setAmount] = useState()
    const [message, setMessage] = useState()
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


    }, []);
    function setStorage() {
        return isSignedIn.wallet.callMethod({ method: 'storage_deposit', args: { account_id: receiverId.toString() }, contractId, deposit: '10000000000000000000000' });
    }
    function tranferFt() {
        return isSignedIn.wallet.callMethod({
            method: 'ft_transfer', args: { receiver_id: receiverId.toString(), amount: amount.toString(), memo: message.toString() }, contractId, deposit: '1'
        });
    }
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea">
                    <h2>Transfer Learning Tokens</h2>
                    <p>
                        We are glad you are rewarding the hardwork.
                    </p>
                    <>Are you sending your tokens to a new account?</>
                    <button onClick={() => { setIsNew(!isNew) }}>{isNew.toString()}</button>
                    <div className="block">
                        <div className="row">
                            <div className="col-left">
                                <form id="contact" action="">
                                    <h4></h4>
                                    <fieldset>
                                        <input value={receiverId} onChange={(e) => { setRecieverId(e.target.value) }} placeholder="Reciever's ID" type="text" tabIndex="1" required autoFocus />
                                    </fieldset>
                                    <fieldset>
                                        <input value={amount} onChange={(e) => { setAmount(e.target.value) }} placeholder="Amount of Learning Tokens" type="text" tabIndex="2" required autoFocus />
                                    </fieldset>
                                    <fieldset>
                                        <input value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder="Memo of your Transactions" type="text" tabIndex="2" required autoFocus />
                                    </fieldset>

                                    <fieldset>
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            if (balance < amount) {
                                                alert("Balance is less than the amount you want to send")
                                                return
                                            }

                                            if (isNew) {
                                                setStorage()
                                            }
                                            tranferFt();
                                        }} name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                                    </fieldset>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Transfer;