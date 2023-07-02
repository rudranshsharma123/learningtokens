import React, { useState, useEffect } from 'react'

const Admin = (isSignedIn) => {
    const [orgs, setOrgs] = useState()
    async function getAllOrgs() {
        return isSignedIn.wallet.viewMethod({ contractId: isSignedIn.mainContractId, method: 'get_orgs' }).then(setOrgs).catch(alert).finally(() => { console.log(orgs) })

    }

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
                    <h2>Admin Panel</h2>
                    <p onClick={getAllOrgs}>
                        Here Our team can see which all organisation are requesting for Learning Tokens and we can act upon them, that being tranferrring the required tokens to them
                    </p>
                    <>
                        It is done this way because we were planing on having an AI shift through the orgs and automate the entire process.
                        <br></br>
                    </>
                    <>
                        <br />
                        Also, this way allows for us to be paid, other than the royalty from the learning tokens themselves
                    </>
                    <br />
                    <br />
                    <br />
                    <p>
                        {orgs && orgs.map((org, key) => {
                            return <>
                                <p>
                                    <b>{org.name}, </b>
                                    <b>{org.id}, </b>
                                    <b>{org.requested_amount}, </b>
                                </p>
                            </>
                        })}
                    </p>


                </div>
            </section>
        </React.Fragment>
    )
}

export default Admin;