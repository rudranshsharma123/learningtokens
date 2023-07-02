import React, { useState } from 'react'

const ContactUs = (isSignedIn, contractId, wallet, mainContractId) => {
    const [orgs, setOrgs] = useState()
    const [orgId, setOrgId] = useState()
    const [orgName, setOrgName] = useState()
    const [email, setEmail] = useState()
    const [amountOfLearnningTokens, setAmountOfLearnningTokens] = useState()
    const [message, setMessage] = useState()

    function registerOrgs() {
        const s = isSignedIn.wallet.callMethod({
            contractId: mainContractId,
            method: 'register', args: {
                id: "spiderman1.testnet", name: "spiderman", requested_amount: 1000000,
            }, deposit: '10000000000000'
        })
        console.log(s)
    }
    function getAllOrgs() {
        return isSignedIn.wallet.viewMethod({ contractId: isSignedIn.mainContractId, method: 'get_orgs' }).then(setOrgs)
            .catch(alert)
            .finally(() => {
                // setUiPleaseWait(false);
                console.log(orgs)
            });

    }

    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea" onClick={getAllOrgs}>
                    <h2>Want to request some learning tokens?</h2>
                    <p>
                        We would love to hear from you!.<br />
                        Feel free to fill out this form and we would get back to you soon
                    </p>
                    <p>
                        Fill out the following information and our team would vet and get back to you
                    </p>
                </div>

                <div className="block">
                    <div className="row">
                        <div className="col-left">
                            <form id="contact" action="">
                                <h4></h4>
                                <fieldset>
                                    <input value={orgName} onChange={(e) => { setOrgName(e.target.value) }} placeholder="Organisation's Name" type="text" tabIndex="1" required autoFocus />
                                </fieldset>
                                <fieldset>
                                    <input value={orgId} onChange={(e) => { setOrgId(e.target.value) }} placeholder="Organisation's id (example.testnet)" type="text" tabIndex="2" required autoFocus />
                                </fieldset>
                                <fieldset>
                                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Organisation's Email address (@org.com)" type="email" tabIndex="3" required />
                                </fieldset>
                                <fieldset>
                                    <input value={amountOfLearnningTokens} onChange={(e) => { setAmountOfLearnningTokens(e.target.value) }} placeholder="Amount of Learning tokens requested" type="email" tabIndex="3" required />
                                </fieldset>

                                <fieldset>
                                    <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder="How will you use the learning tokens in your community/organisation/college..." tabIndex="5" required></textarea>
                                </fieldset>
                                <fieldset>
                                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                                </fieldset>
                            </form>
                        </div>


                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ContactUs;