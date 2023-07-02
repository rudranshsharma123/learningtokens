import { useEffect, useState } from 'react';
import React from 'react'
import { async } from 'regenerator-runtime';
import 'regenerator-runtime/runtime';

const Profile = (isSignedIn) => {
    const name = isSignedIn.wallet.accountId.split('.')[0];
    const contractId = isSignedIn.contractId;
    const [balance, setBalance] = useState()
    const [orgs, setOrgs] = useState()
    const [uiWait, setUiWait] = useState(false)
    const getAccountBalance = () => {
        return isSignedIn.wallet.viewMethod({
            method: 'ft_balance_of', args: { account_id: isSignedIn.wallet.accountId }, contractId
        })
    }
    async function getAllOrgs() {
        return isSignedIn.wallet.viewMethod({ contractId: isSignedIn.mainContractId, method: 'get_orgs' }).then(setOrgs).catch(alert).finally(() => { console.log(orgs) })

    }
    useEffect(() => {
        getAccountBalance()
            .then(setBalance)
            .catch(alert)
            .finally(() => {
                console.log(balance)
            })


    }, []);

    useEffect(() => {
        getAllOrgs()
            .then((k) => setOrgs(k))
            .catch((error) => {
                console.error('Error fetching orgs:', error);
                setOrgs([]); // Set empty array as a fallback if fetching fails
            });
    }, [])

    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea">
                    <h2>Hello {name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                    <p onClick={async () => { await getAllOrgs(); setUiWait(true) }}>
                        Your Total Learning Token balance is {balance} :
                    </p>

                    <p>
                        Want to get more? Try learning on one of these websites and they will issue you some learning tokens based on thier discrection<br></br>
                        {orgs && orgs.map((org, key) => { return <b>{org.name}, </b> })}
                    </p>


                </div>
            </section>
        </React.Fragment >
    )
}

export default Profile;